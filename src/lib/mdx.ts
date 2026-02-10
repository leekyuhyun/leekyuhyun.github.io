import fs from "fs"
import path from "path"
import matter from "gray-matter"

const projectsDirectory = path.join(process.cwd(), "content", "projects")
const BLOG_PATH = path.join(process.cwd(), "content", "blog")

// 공통: 앞/뒤 포스트 (이전/다음 글)
export function getAdjacentPosts(currentSlug: string, type: "projects" | "blog") {
  const posts = type === "projects" ? getProjectPosts() : getBlogPosts()
  const currentIndex = posts.findIndex((post) => post.slug === currentSlug)
  if (currentIndex === -1) return { prev: null, next: null }
  const nextPost = currentIndex > 0 ? posts[currentIndex - 1] : null
  const prevPost = currentIndex < posts.length - 1 ? posts[currentIndex + 1] : null
  return { prev: prevPost, next: nextPost }
}

// 연관 포스트 (같은 카테고리)
export function getRelatedPosts(currentSlug: string, category: string) {
  const allPosts = getBlogPosts()
  return allPosts
    .filter((post) => post.category === category && post.slug !== currentSlug)
    .slice(0, 4)
}

// ---- 프로젝트 ----

export function getProjectPosts() {
  if (!fs.existsSync(projectsDirectory)) return []
  const fileNames = fs.readdirSync(projectsDirectory)
  const mdxFiles = fileNames.filter((f) => f.endsWith(".mdx"))

  const allProjects = mdxFiles.map((fileName) => {
    const slug = fileName.replace(/\.mdx$/, "")
    const fullPath = path.join(projectsDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, "utf8")
    const { data } = matter(fileContents)
    return {
      slug,
      ...data,
      thumbnail: data.thumbnail || data.image || "/placeholder.svg",
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } as any
  })

  return allProjects.sort((a: { endDate?: string | Date }, b: { endDate?: string | Date }) => {
    const dateA = a.endDate ? new Date(a.endDate).getTime() : Date.now()
    const dateB = b.endDate ? new Date(b.endDate).getTime() : Date.now()
    return dateB - dateA
  })
}

export function getProjectBySlug(slug: string) {
  if (!fs.existsSync(projectsDirectory))
    return { slug, frontmatter: null, content: "" }

  const fullPath = path.join(projectsDirectory, `${slug}.mdx`)
  if (!fs.existsSync(fullPath))
    return { slug, frontmatter: null, content: "" }

  const fileContents = fs.readFileSync(fullPath, "utf8")
  const { data, content } = matter(fileContents)
  return { slug, frontmatter: data, content }
}

// ---- 블로그 ----

export interface BlogPost {
  slug: string
  title: string
  excerpt: string
  date: Date
  image: string
  category: string
  tags: string[]
  content?: string
}

export function getBlogPosts(): BlogPost[] {
  if (!fs.existsSync(BLOG_PATH)) return []
  const files = fs.readdirSync(BLOG_PATH)

  const posts = files
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => {
      const source = fs.readFileSync(path.join(BLOG_PATH, file), "utf-8")
      const { data } = matter(source)
      const category =
        data.category || (data.tags?.length > 0 ? data.tags[0] : "General")
      return {
        slug: file.replace(".mdx", ""),
        title: data.title || "제목 없음",
        excerpt: data.excerpt || "",
        date: new Date(data.date),
        image: data.image || data.coverImage || "/placeholder.svg",
        tags: data.tags || [],
        category,
      }
    })
    .sort((a, b) => b.date.getTime() - a.date.getTime())

  return posts
}

export async function getBlogPost(slug: string) {
  const filePath = path.join(BLOG_PATH, `${slug}.mdx`)
  if (!fs.existsSync(filePath)) return null
  const source = fs.readFileSync(filePath, "utf-8")
  const { content, data } = matter(source)
  const category =
    data.category || (data.tags?.length > 0 ? data.tags[0] : "General")
  return {
    slug,
    ...data,
    title: data.title,
    excerpt: data.excerpt,
    category,
    tags: data.tags || [],
    date: new Date(data.date),
    image: data.image || data.coverImage || "/placeholder.svg",
    content,
  }
}
