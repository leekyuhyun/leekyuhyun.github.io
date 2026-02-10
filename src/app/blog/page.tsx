import type { Metadata } from "next"
import { getBlogPosts } from "@/lib/mdx"
import { BlogList } from "@/components/blog-list"

export const metadata: Metadata = {
  title: "블로그 | 이규현",
  description: "개발, 기술, 그리고 배운 것들에 대한 생각을 기록합니다.",
}

export default function BlogPage() {
  const allPosts = getBlogPosts()

  const rawCategories = allPosts.map((p) => p.category || "General")
  const uniqueSet = new Set(rawCategories)
  uniqueSet.delete("전체")
  const categories = ["전체", ...Array.from(uniqueSet)]

  const counts = categories.reduce(
    (acc, cat) => {
      acc[cat] =
        cat === "전체"
          ? allPosts.length
          : allPosts.filter((p) => (p.category || "General") === cat).length
      return acc
    },
    {} as Record<string, number>
  )

  return (
    <section className="py-16">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mb-8">
          <h1 className="mb-2 text-3xl font-bold tracking-tight text-foreground">
            블로그
          </h1>
          <p className="text-base text-muted-foreground">
            개발, 기술, 그리고 배운 것들에 대한 생각을 기록합니다.
          </p>
        </div>
        <BlogList posts={allPosts} categories={categories} counts={counts} />
      </div>
    </section>
  )
}
