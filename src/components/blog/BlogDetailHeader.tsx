import { ChevronLeft, Calendar, FolderKanban } from "lucide-react";
import Link from "next/link";

interface BlogDetailHeaderProps {
  post: {
    title: string;
    released_at: string;
    tags: string[];
    series?: {
      name: string;
    } | null;
  };
}

export default function BlogDetailHeader({ post }: BlogDetailHeaderProps) {
  return (
    <div className="mb-16">
      <Link
        href="/blog"
        className="inline-flex items-center gap-1 text-zinc-400 hover:text-sky-500 transition-colors mb-12 group text-sm font-medium"
      >
        <ChevronLeft
          size={16}
          className="group-hover:-translate-x-1 transition-transform"
        />
        Back to list
      </Link>

      <div className="flex flex-col gap-6">
        {post.series && post.series.name && (
          <div className="inline-flex self-start items-center gap-2 px-3 py-1 bg-sky-50 dark:bg-sky-900/20 text-sky-600 dark:text-sky-400 rounded-full text-xs font-bold uppercase tracking-wider">
            <FolderKanban size={14} />
            {post.series.name}
          </div>
        )}

        <h1 className="text-4xl md:text-5xl font-bold text-zinc-900 dark:text-zinc-100 tracking-tight leading-[1.2]">
          {post.title}
        </h1>

        <div className="flex items-center gap-4 text-zinc-400 text-sm font-medium">
          <div className="flex items-center gap-1.5 border-r border-zinc-200 dark:border-zinc-800 pr-4">
            <Calendar size={16} />
            {post.released_at
              ? new Date(post.released_at).toLocaleDateString()
              : "N/A"}
          </div>
          <div className="flex flex-wrap gap-2">
            {post.tags?.map((tag: string) => (
              <span key={tag} className="text-zinc-500 dark:text-zinc-400">
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
