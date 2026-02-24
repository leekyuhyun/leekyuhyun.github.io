"use client";

import { useState } from "react";
import BlogCard from "@/components/blog/BlogCard";
import SeriesFilters from "@/components/blog/SeriesFilters";
import SortButton from "@/components/blog/SortButton";
import { Post } from "@/lib/blog";

export default function BlogView({ posts }: { posts: Post[] }) {
  const [activeCategory, setActiveCategory] = useState("All");
  const [sort, setSort] = useState<"newest" | "oldest">("newest");

  const categories = Array.from(
    new Set(posts.map((p) => p.series).filter(Boolean)),
  ) as string[];

  const filtered = (
    activeCategory === "All"
      ? [...posts]
      : posts.filter((p) => p.series === activeCategory)
  ).sort((a, b) =>
    sort === "newest" ? (a.date < b.date ? 1 : -1) : a.date > b.date ? 1 : -1,
  );

  return (
    <div className="max-w-6xl mx-auto px-6 py-10 font-sans">
      <header className="mb-16">
        <h2 className="text-4xl font-bold text-zinc-900 dark:text-zinc-100 mb-4">
          Blog
        </h2>
        <p className="text-zinc-500">직접 기록한 마크다운 포스트입니다.</p>
      </header>

      <SeriesFilters
        categories={categories}
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
      />

      <div className="flex justify-end mb-6">
        <SortButton sort={sort} onSortChange={setSort} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-20">
        {filtered.map((post) => (
          <BlogCard key={post.slug} post={post} />
        ))}
      </div>
    </div>
  );
}
