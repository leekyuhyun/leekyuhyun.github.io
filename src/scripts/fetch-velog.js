import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function fetchVelog() {
  try {
    const response = await fetch("https://v2api.velog.io/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "User-Agent": "Mozilla/5.0",
      },
      body: JSON.stringify({
        query: `
          query GetPosts($username: String!) {
            posts(username: $username, limit: 100) {
              id
              title
              short_description
              thumbnail
              released_at
              url_slug
              body
              tags
              series {
                name
              }
            }
          }
        `,
        variables: { username: "leekh010502" },
      }),
    });

    const data = await response.json();
    const posts = data.data?.posts || [];

    const dir = path.join(__dirname, "../data");

    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }

    fs.writeFileSync(
      path.join(dir, "blogPosts.json"),
      JSON.stringify(posts, null, 2),
    );

    console.log(
      `✅ ${posts.length}개의 포스트 업데이트 완료! (경로: src/data/blogPosts.json)`,
    );
  } catch (error) {
    console.error("❌ 데이터 가져오기 실패:", error.message);

    const dir = path.join(__dirname, "../data");
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
    const filePath = path.join(dir, "blogPosts.json");
    if (!fs.existsSync(filePath)) {
      fs.writeFileSync(filePath, JSON.stringify([]));
      console.log("⚠️ 빈 데이터 파일을 생성했습니다.");
    }
  }
}

fetchVelog();
