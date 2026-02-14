"use client";

import posts from "@/data/blogPosts.json";
import BlogCard from "@/components/blog/BlogCard";

export default function BlogView() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-10 font-sans">
      <header className="mb-16">
        <h2 className="text-4xl font-bold text-zinc-900 dark:text-zinc-100 mb-4 tracking-tight">
          Blog
        </h2>
        <p className="text-zinc-600 dark:text-zinc-400 text-lg max-w-2xl leading-relaxed">
          벨로그의 기록들을 Kyuloud 스타일로 아카이빙합니다.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-20">
        {posts.map((post: any) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}
