"use client";

import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import posts from "@/data/blogPosts.json";
import BlogDetailHeader from "@/components/blog/BlogDetailHeader";
import BlogDetailContent from "@/components/blog/BlogDetailContent";

export interface BlogPost {
  id: string;
  title: string;
  short_description: string;
  thumbnail: string;
  released_at: string;
  url_slug: string;
  body: string;
  tags: string[];
  series?: {
    name: string;
    url_slug: string;
  } | null;
}

export default function BlogDetailView({ post }: { post: BlogPost }) {
  const allPosts = posts as BlogPost[];
  const currentIndex = allPosts.findIndex((p) => p.id === post.id);

  const nextPost = currentIndex > 0 ? allPosts[currentIndex - 1] : null;
  const prevPost =
    currentIndex < allPosts.length - 1 ? allPosts[currentIndex + 1] : null;

  return (
    <article className="max-w-3xl mx-auto px-6 py-20 font-sans">
      <BlogDetailHeader post={post} />
      <BlogDetailContent content={post.body} />

      <footer className="mt-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-10 border-t border-zinc-100 dark:border-zinc-800">
          {prevPost ? (
            <Link
              href={`/blog/${prevPost.url_slug}`}
              className="group flex flex-col gap-2 p-4 rounded-xl border border-zinc-100 dark:border-zinc-800 hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-all"
            >
              <span className="flex items-center gap-1 text-xs text-zinc-400 font-bold uppercase tracking-wider">
                <ChevronLeft size={14} /> Previous Post
              </span>
              <span className="text-zinc-900 dark:text-zinc-100 font-semibold group-hover:text-sky-500 transition-colors line-clamp-1">
                {prevPost.title}
              </span>
            </Link>
          ) : (
            <div />
          )}

          {nextPost ? (
            <Link
              href={`/blog/${nextPost.url_slug}`}
              className="group flex flex-col gap-2 p-4 rounded-xl border border-zinc-100 dark:border-zinc-800 hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-all text-right items-end"
            >
              <span className="flex items-center gap-1 text-xs text-zinc-400 font-bold uppercase tracking-wider">
                Next Post <ChevronRight size={14} />
              </span>
              <span className="text-zinc-900 dark:text-zinc-100 font-semibold group-hover:text-sky-500 transition-colors line-clamp-1">
                {nextPost.title}
              </span>
            </Link>
          ) : (
            <div />
          )}
        </div>
      </footer>
    </article>
  );
}
