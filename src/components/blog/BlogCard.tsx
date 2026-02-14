import Link from "next/link";
import Image from "next/image";
import { Calendar, FolderKanban } from "lucide-react";

interface PostProps {
  post: {
    id: string;
    title: string;
    short_description: string;
    thumbnail: string;
    released_at: string;
    url_slug: string;
    tags: string[];
    series?: {
      name: string;
    } | null;
  };
}

export default function BlogCard({ post }: PostProps) {
  return (
    <Link
      href={`/blog/${post.url_slug}`}
      className="group flex flex-col bg-white dark:bg-zinc-900/50 rounded-2xl border border-zinc-200 dark:border-zinc-800 overflow-hidden transition-all hover:shadow-xl hover:shadow-sky-500/5 hover:-translate-y-1"
    >
      {post.thumbnail && (
        <div className="relative aspect-video w-full overflow-hidden border-b border-zinc-100 dark:border-zinc-800">
          <Image
            src={post.thumbnail}
            alt={post.title}
            fill // width, height 대신 부모 컨테이너에 맞춤
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
      )}
      <div className="p-6 flex flex-col grow">
        <div className="flex flex-wrap items-center gap-3 text-zinc-400 text-[11px] mb-4 font-bold uppercase tracking-wider">
          <div className="flex items-center gap-1 text-sky-500 dark:text-amber-400">
            <Calendar size={12} />
            {new Date(post.released_at).toLocaleDateString()}
          </div>
          {post.series && (
            <div className="flex items-center gap-1 px-2 py-0.5 bg-zinc-100 dark:bg-zinc-800 rounded text-zinc-500 dark:text-zinc-400">
              <FolderKanban size={12} />
              {post.series.name}
            </div>
          )}
        </div>
        <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 mb-3 group-hover:text-sky-500 transition-colors line-clamp-2">
          {post.title}
        </h3>
        <p className="text-zinc-500 dark:text-zinc-400 text-sm leading-relaxed mb-6 line-clamp-2">
          {post.short_description}
        </p>
        <div className="flex flex-wrap gap-1.5 mt-auto pt-4">
          {post.tags?.map((tag) => (
            <span
              key={tag}
              className="text-[10px] text-zinc-400 dark:text-zinc-500 font-medium"
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}
