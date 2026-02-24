import Image from "next/image";
import { Post } from "@/lib/blog";

export default function BlogDetailHeader({
  post,
}: {
  post: Omit<Post, "slug">;
}) {
  return (
    <header className="mb-12">
      <div className="flex flex-wrap gap-2 mb-6">
        {post.tags?.map((tag) => (
          <span
            key={tag}
            className="px-3 py-1 bg-sky-50 dark:bg-amber-900/20 text-sky-600 dark:text-amber-300 text-xs font-bold rounded-full uppercase tracking-wider"
          >
            {tag}
          </span>
        )) || (
          <span className="px-3 py-1 bg-zinc-50 dark:bg-zinc-800 text-zinc-500 text-xs font-bold rounded-full uppercase tracking-wider">
            Post
          </span>
        )}
      </div>

      <h1 className="text-4xl md:text-5xl font-bold text-zinc-900 dark:text-zinc-100 mb-6 leading-tight">
        {post.title}
      </h1>

      <div className="flex items-center gap-4 text-zinc-500 dark:text-zinc-400 text-sm font-medium">
        <span>이규현</span>
        <span className="w-1 h-1 bg-zinc-300 dark:bg-zinc-700 rounded-full" />
        <span>{post.date}</span>
      </div>

      {post.thumbnail && (
        <div className="mt-10 rounded-3xl overflow-hidden border border-zinc-100 dark:border-zinc-800 relative aspect-video">
          <Image
            src={post.thumbnail}
            alt={post.title}
            fill
            className="object-cover"
            unoptimized
          />
        </div>
      )}
    </header>
  );
}
