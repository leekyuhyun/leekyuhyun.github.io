"use client";

import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import BlogDetailHeader from "@/components/blog/BlogDetailHeader";
import { Post } from "@/lib/blog";

interface BlogDetailViewProps {
  post: Omit<Post, "slug">;
  content: MDXRemoteSerializeResult;
}

export default function BlogDetailView({ post, content }: BlogDetailViewProps) {
  return (
    <article className="max-w-3xl mx-auto px-6 py-20 font-sans">
      <BlogDetailHeader post={post} />
      <div className="prose dark:prose-invert max-w-none mt-10">
        <MDXRemote {...content} />
      </div>
    </article>
  );
}
