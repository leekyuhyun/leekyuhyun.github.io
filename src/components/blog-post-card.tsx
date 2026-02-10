import Link from "next/link";
import type { BlogPost } from "@/lib/data";
import { formatDate } from "@/lib/data";

export function BlogPostCard({ post }: { post: BlogPost }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group flex flex-col gap-2.5 rounded-2xl border border-border/60 bg-card p-6 transition-all hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5"
    >
      <div className="flex items-center gap-2">
        <FileTextIcon className="h-4 w-4 text-primary" />
        <time className="text-xs text-muted-foreground">
          {formatDate(post.date)}
        </time>
      </div>
      <h3 className="text-base font-semibold text-card-foreground group-hover:text-primary transition-colors">
        {post.title}
      </h3>
      <p className="text-sm leading-relaxed text-muted-foreground line-clamp-2">
        {post.excerpt}
      </p>
      <div className="flex flex-wrap gap-1.5 pt-1">
        {post.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-accent px-2.5 py-0.5 text-xs font-medium text-accent-foreground"
          >
            {tag}
          </span>
        ))}
      </div>
    </Link>
  );
}

function FileTextIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
      <path d="M14 2v4a2 2 0 0 0 2 2h4" />
      <path d="M10 9H8" />
      <path d="M16 13H8" />
      <path d="M16 17H8" />
    </svg>
  );
}
