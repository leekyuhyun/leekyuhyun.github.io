"use client";

import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import posts from "@/data/blogPosts.json";
import BlogDetailHeader from "@/components/blog/BlogDetailHeader";
import BlogDetailContent from "@/components/blog/BlogDetailContent";

export default function BlogDetailView({ post }: { post: any }) {
  const currentIndex = posts.findIndex((p: any) => p.id === post.id);

  const nextPost = currentIndex > 0 ? posts[currentIndex - 1] : null;
  const prevPost =
    currentIndex < posts.length - 1 ? posts[currentIndex + 1] : null;

  return (
    <article className="max-w-3xl mx-auto px-6 py-20 font-sans">
      <BlogDetailHeader post={post} />
      <BlogDetailContent content={post.body} />

      <footer className="mt-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-10 border-t border-zinc-100 dark:border-zinc-800">
          {" "}
          <div className="flex flex-col">
            {prevPost ? (
              <Link
                href={`/blog/${prevPost.url_slug}`}
                className="group flex flex-col gap-2 p-4 rounded-xl border border-zinc-100 dark:border-zinc-800 hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-all text-left"
              >
                <span className="flex items-center gap-1 text-xs text-zinc-400 font-bold uppercase tracking-wider">
                  <ChevronLeft size={14} /> Previous Post
                </span>
                <span className="text-zinc-900 dark:text-zinc-100 font-semibold group-hover:text-sky-500 dark:group-hover:text-amber-400 transition-colors line-clamp-1">
                  {prevPost.title}
                </span>
              </Link>
            ) : (
              <div className="p-4 rounded-xl border border-dashed border-zinc-100 dark:border-zinc-800 opacity-50">
                <span className="text-xs text-zinc-400 font-bold uppercase tracking-wider">
                  Last Post
                </span>
              </div>
            )}
          </div>
          <div className="flex flex-col text-right">
            {nextPost ? (
              <Link
                href={`/blog/${nextPost.url_slug}`}
                className="group flex flex-col gap-2 p-4 rounded-xl border border-zinc-100 dark:border-zinc-800 hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-all items-end"
              >
                <span className="flex items-center gap-1 text-xs text-zinc-400 font-bold uppercase tracking-wider">
                  Next Post <ChevronRight size={14} />
                </span>
                <span className="text-zinc-900 dark:text-zinc-100 font-semibold group-hover:text-sky-500 dark:group-hover:text-amber-400 transition-colors line-clamp-1">
                  {nextPost.title}
                </span>
              </Link>
            ) : (
              <div className="p-4 rounded-xl border border-dashed border-zinc-100 dark:border-zinc-800 opacity-50 flex flex-col items-end">
                <span className="text-xs text-zinc-400 font-bold uppercase tracking-wider">
                  Newest Post
                </span>
              </div>
            )}
          </div>
        </div>

        <p className="text-zinc-400 text-xs italic text-center mt-6">
          이 포스트는 벨로그(Velog)에서 작성된 내용을 Kyuloud 스타일로 재구성한
          것입니다.
        </p>
      </footer>
    </article>
  );
}
