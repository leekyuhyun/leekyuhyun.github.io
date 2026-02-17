"use client";

import BlogCard from "@/components/blog/BlogCard";
import { Post } from "@/lib/blog";

export default function BlogView({ posts }: { posts: Post[] }) {
  return (
    <div className="max-w-6xl mx-auto px-6 py-10 font-sans">
      <header className="mb-16">
        <h2 className="text-4xl font-bold text-zinc-900 dark:text-zinc-100 mb-4">
          Blog
        </h2>
        <p className="text-zinc-500">직접 기록한 마크다운 포스트입니다.</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-20">
        {posts.map((post) => (
          <BlogCard key={post.slug} post={post} />
        ))}
      </div>
    </div>
  );
}
