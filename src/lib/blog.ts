import fs from "fs";
import path from "path";
import matter from "gray-matter";

export interface Post {
  slug: string;
  series: string | null;
  title: string;
  date: string;
  description?: string;
  thumbnail?: string;
  tags?: string[];
}

const postsDirectory = path.join(process.cwd(), "content");

function getFilesRecursively(dir: string): string[] {
  const files = fs.readdirSync(dir);
  let allFiles: string[] = [];

  files.forEach((file) => {
    const filePath = path.join(dir, file);
    if (fs.statSync(filePath).isDirectory()) {
      allFiles = [...allFiles, ...getFilesRecursively(filePath)];
    } else if (file.endsWith(".md")) {
      allFiles.push(filePath);
    }
  });

  return allFiles;
}

export function getAllPosts(): Post[] {
  if (!fs.existsSync(postsDirectory)) return [];

  const filePaths = getFilesRecursively(postsDirectory);

  const allPostsData = filePaths.map((filePath) => {
    const slug = path.basename(filePath).replace(/\.md$/, "");

    const relativePath = path.relative(postsDirectory, filePath);
    const pathParts = relativePath.split(path.sep);
    const series = pathParts.length > 1 ? pathParts[0] : null;

    const fileContents = fs.readFileSync(filePath, "utf8");
    const { data } = matter(fileContents);

    return {
      slug,
      series,
      ...(data as Omit<Post, "slug" | "series">),
    };
  });

  return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPostBySlug(slug: string) {
  const allPosts = getFilesRecursively(postsDirectory);
  const filePath = allPosts.find((f) => path.basename(f) === `${slug}.md`);

  if (!filePath) throw new Error("Post not found");

  const fileContents = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(fileContents);

  return {
    slug,
    frontMatter: data as Omit<Post, "slug">,
    content,
  };
}
