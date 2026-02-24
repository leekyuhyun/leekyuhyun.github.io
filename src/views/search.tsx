"use client";

import { useSearchParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Post } from "@/lib/blog";
import { FileText } from "lucide-react";

export default function SearchView({ posts }: { posts: Post[] }) {
  const searchParams = useSearchParams();
  const query = searchParams.get("q") ?? "";

  const blogResults = posts.filter((p) =>
    query
      ? p.title.toLowerCase().includes(query.toLowerCase()) ||
        p.description?.toLowerCase().includes(query.toLowerCase()) ||
        p.tags?.some((t) => t.toLowerCase().includes(query.toLowerCase()))
      : false,
  );

  const totalCount = blogResults.length;

  return (
    <div className="max-w-3xl mx-auto px-6 py-16 font-sans">
      <header className="mb-12">
        <p className="text-sm text-zinc-400 mb-2">검색 결과</p>
        <h2 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100">
          &ldquo;{query}&rdquo;{" "}
        </h2>
        <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-2">
          총 {totalCount}개의 결과
        </p>
      </header>

      {totalCount === 0 ? (
        <div className="text-center py-24 text-zinc-400">
          <p className="text-5xl mb-4">🔍</p>
          <p className="text-lg font-semibold">검색 결과가 없어요</p>
          <p className="text-sm mt-1">다른 키워드로 검색해보세요</p>
        </div>
      ) : (
        <div className="space-y-6">
          {/* 블로그 섹션 */}
          {blogResults.length > 0 && (
            <section>
              <div className="flex items-center gap-2 mb-4">
                <FileText className="w-4 h-4 text-sky-500 dark:text-amber-400" />
                <h3 className="text-sm font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">
                  블로그 · {blogResults.length}
                </h3>
              </div>
              <div className="flex flex-col gap-3">
                {blogResults.map((post) => (
                  <Link
                    key={post.slug}
                    href={`/blog/${post.slug}`}
                    className="group flex gap-4 p-4 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 hover:border-sky-400 dark:hover:border-amber-400 hover:shadow-md transition-all duration-200"
                  >
                    <div className="relative w-20 h-20 rounded-xl overflow-hidden bg-zinc-100 dark:bg-zinc-800 shrink-0">
                      <Image
                        src={post.thumbnail || "/images/Profile.png"}
                        alt={post.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                        unoptimized
                      />
                    </div>
                    <div className="flex flex-col justify-center min-w-0">
                      <div className="flex flex-wrap gap-1 mb-1.5">
                        {post.tags?.slice(0, 2).map((tag) => (
                          <span
                            key={tag}
                            className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md bg-sky-50 text-sky-600 dark:bg-amber-900/20 dark:text-amber-400"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <h4 className="font-bold text-zinc-900 dark:text-zinc-100 group-hover:text-sky-500 dark:group-hover:text-amber-400 transition-colors truncate">
                        {post.title}
                      </h4>
                      <p className="text-sm text-zinc-500 dark:text-zinc-400 line-clamp-1 mt-0.5">
                        {post.description}
                      </p>
                      <p className="text-xs text-zinc-400 mt-1.5">
                        {post.date}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          )}
        </div>
      )}
    </div>
  );
}
