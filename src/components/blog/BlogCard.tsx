import Link from "next/link";
import Image from "next/image";
import { Post } from "@/lib/blog";

export default function BlogCard({ post }: { post: Post }) {
  return (
    <Link href={`/blog/${post.slug}`} className="group">
      <div className="flex flex-col h-full bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800 overflow-hidden transition-all hover:shadow-xl hover:border-sky-500 dark:hover:border-amber-400">
        <div className="relative h-48 overflow-hidden bg-zinc-100 dark:bg-zinc-800">
          <Image
            src={post.thumbnail || "/images/Profile.png"}
            alt={post.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            unoptimized
          />
          {/* 시리즈가 있다면 이미지 우측 상단에 표시 */}
          {post.series && (
            <div className="absolute top-3 right-3 px-2 py-1 bg-black/50 backdrop-blur-md text-white text-[10px] rounded-md font-bold">
              {post.series}
            </div>
          )}
        </div>

        <div className="p-6 flex flex-col grow">
          <div className="flex flex-wrap gap-1.5 mb-3">
            {post.tags?.map((tag) => (
              <span
                key={tag}
                className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md bg-sky-50 text-sky-600 dark:bg-amber-900/20 dark:text-amber-400"
              >
                {tag}
              </span>
            ))}
          </div>
          <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 mb-3 group-hover:text-sky-500 dark:group-hover:text-amber-400 transition-colors line-clamp-2">
            {post.title}
          </h3>
          <p className="text-zinc-500 dark:text-zinc-400 text-sm line-clamp-3 mb-4 grow">
            {post.description}
          </p>
          <div className="text-xs text-zinc-400 font-medium">{post.date}</div>
        </div>
      </div>
    </Link>
  );
}
