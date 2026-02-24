import Link from "next/link";
import Image from "next/image";
import { Post } from "@/lib/blog";

export default function RecentPosts({ posts }: { posts: Post[] }) {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      <div className="flex items-center justify-between mb-10">
        <div>
          <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">
            최근 포스트
          </h2>
          <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1">
            최근에 작성한 글들이에요
          </p>
        </div>
        <Link
          href="/blog"
          className="text-sm font-semibold text-sky-500 dark:text-amber-400 hover:underline underline-offset-4 transition-all"
        >
          전체 보기 →
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`} className="group">
            <div className="flex flex-col h-full bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800 overflow-hidden transition-all duration-200 hover:shadow-xl hover:border-sky-400 dark:hover:border-amber-400">
              <div className="relative h-40 overflow-hidden bg-zinc-100 dark:bg-zinc-800">
                <Image
                  src={post.thumbnail || "/images/Profile.png"}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  unoptimized
                />
              </div>
              <div className="p-4 flex flex-col grow">
                <div className="flex flex-wrap gap-1 mb-2">
                  {post.tags?.slice(0, 2).map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md bg-sky-50 text-sky-600 dark:bg-amber-900/20 dark:text-amber-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-sm font-bold text-zinc-900 dark:text-zinc-100 mb-2 line-clamp-2 group-hover:text-sky-500 dark:group-hover:text-amber-400 transition-colors">
                  {post.title}
                </h3>
                <p className="text-xs text-zinc-500 dark:text-zinc-400 line-clamp-2 grow">
                  {post.description}
                </p>
                <div className="text-xs text-zinc-400 mt-3">{post.date}</div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
