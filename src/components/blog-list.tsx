"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { CategoryFilter } from "@/components/category-filter"

interface BlogPost {
  slug: string
  title: string
  excerpt: string
  date: Date
  image?: string
  category?: string
}

interface BlogListProps {
  posts: BlogPost[]
  categories: string[]
  counts: Record<string, number>
}

export function BlogList({ posts, categories, counts }: BlogListProps) {
  const [activeCategory, setActiveCategory] = useState("전체")

  const filteredPosts =
    activeCategory === "전체"
      ? posts
      : posts.filter((post) => (post.category || "General") === activeCategory)

  return (
    <>
      <CategoryFilter
        categories={categories}
        counts={counts}
        active={activeCategory}
        onChange={setActiveCategory}
      />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filteredPosts.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`} className="group block">
            <article className="overflow-hidden rounded-2xl border border-border/60 bg-card transition-all hover:shadow-lg hover:shadow-primary/5">
              {/* Image */}
              <div className="relative aspect-[16/10] overflow-hidden bg-secondary">
                <Image
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="p-4">
                <h3 className="mb-1.5 line-clamp-1 text-base font-bold text-card-foreground transition-colors group-hover:text-primary">
                  {post.title}
                </h3>
                <p className="mb-3 line-clamp-2 text-sm leading-relaxed text-muted-foreground">
                  {post.excerpt}
                </p>

                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <span>
                    {new Date(post.date).toLocaleDateString("ko-KR", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </span>
                  <span className="text-primary/60">{"·"}</span>
                  <span className="font-medium text-primary">
                    {post.category || "General"}
                  </span>
                </div>
              </div>
            </article>
          </Link>
        ))}
      </div>

      {filteredPosts.length === 0 && (
        <p className="py-16 text-center text-muted-foreground">
          해당 카테고리에 글이 없습니다.
        </p>
      )}
    </>
  )
}
