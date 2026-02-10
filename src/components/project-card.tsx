import Link from "next/link";
import type { Project } from "@/lib/data";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group flex flex-col gap-3 rounded-2xl border border-border/60 bg-card p-6 transition-all hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5"
    >
      <div className="flex items-center justify-between">
        <FolderIcon className="h-5 w-5 text-primary" />
        <span className="text-xs text-muted-foreground">{project.year}</span>
      </div>
      <h3 className="text-base font-semibold text-card-foreground group-hover:text-primary transition-colors">
        {project.title}
      </h3>
      <p className="text-sm leading-relaxed text-muted-foreground line-clamp-2">
        {project.description}
      </p>
      <div className="flex flex-wrap gap-1.5 pt-1">
        {project.tags.map((tag) => (
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

function FolderIcon({ className }: { className?: string }) {
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
      <path d="m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2" />
    </svg>
  );
}
