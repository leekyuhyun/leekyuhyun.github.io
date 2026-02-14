"use client";

import posts from "@/data/blogPosts.json";
import BlogCard from "@/components/blog/BlogCard";
import { BlogPost } from "./blogdetail";

export default function BlogView() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-10 font-sans">
      <header className="mb-16">
        <h2 className="text-4xl font-bold text-zinc-900 dark:text-zinc-100 mb-4">
          Blog
        </h2>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-20">
        {(posts as BlogPost[]).map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}
