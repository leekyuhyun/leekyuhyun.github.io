import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function fetchVelog() {
  try {
    console.log("🚀 벨로그 데이터 가져오기 시작...");

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
                url_slug
              }
            }
          }
        `,
        variables: { username: "leekh010502" },
      }),
    });

    if (!response.ok) {
      throw new Error(`HTTP 에러 발생! 상태코드: ${response.status}`);
    }

    const data = await response.json();

    // API 응답 구조가 정확한지 확인
    if (data.errors) {
      console.error("❌ GraphQL 에러:", JSON.stringify(data.errors, null, 2));
      throw new Error("벨로그 API 호출 중 에러가 발생했습니다.");
    }

    const posts = data.data?.posts || [];
    console.log(`📡 벨로그 응답 수신: ${posts.length}개의 포스트`);

    // 경로 설정: src/scripts에서 한 단계 위인 src/data로 정확히 조준
    const dataDir = path.resolve(__dirname, "../data");

    if (!fs.existsSync(dataDir)) {
      console.log(`📁 폴더가 없어 생성합니다: ${dataDir}`);
      fs.mkdirSync(dataDir, { recursive: true });
    }

    const filePath = path.join(dataDir, "blogPosts.json");
    fs.writeFileSync(filePath, JSON.stringify(posts, null, 2), "utf8");

    console.log(`✅ 저장 완료! 경로: ${filePath}`);

    // 깃허브 액션 로그에서 확인하기 위해 파일 크기 출력
    const stats = fs.statSync(filePath);
    console.log(`📊 파일 크기: ${stats.size} bytes`);
  } catch (error) {
    console.error("❌ 최종 실패:", error.message);

    // 빌드 실패를 막기 위한 최소한의 조치
    const dataDir = path.resolve(__dirname, "../data");
    if (!fs.existsSync(dataDir)) fs.mkdirSync(dataDir, { recursive: true });

    const filePath = path.join(dataDir, "blogPosts.json");
    if (!fs.existsSync(filePath) || fs.readFileSync(filePath, "utf8") === "") {
      fs.writeFileSync(filePath, JSON.stringify([]));
      console.log("⚠️ 빈 데이터 파일([])을 생성하여 빌드 중단을 방지합니다.");
    }

    // 액션이 실패로 기록되게 하려면 주석 해제 (지금은 빌드 통과를 위해 유지)
    // process.exit(1);
  }
}

fetchVelog();
