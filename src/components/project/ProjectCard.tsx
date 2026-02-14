import { Github, ExternalLink, Code2, Layers } from "lucide-react";
import { CV_DATA } from "@/components/introduce/introduceData";

type ProjectType = (typeof CV_DATA.projects)[0];

export default function ProjectCard({ project }: { project: ProjectType }) {
  return (
    <div className="group flex flex-col bg-white dark:bg-zinc-900/50 rounded-2xl border border-zinc-200 dark:border-zinc-800 overflow-hidden transition-all hover:shadow-2xl hover:shadow-sky-500/10 hover:-translate-y-1">
      <div className="relative aspect-video w-full bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity bg-linear-to-br from-sky-500 to-amber-500" />
        <div className="relative flex flex-col items-center gap-3 text-zinc-400 group-hover:text-sky-500 dark:group-hover:text-amber-400 transition-colors">
          <Code2 size={48} strokeWidth={1.5} />
          <span className="text-xs font-bold tracking-widest uppercase opacity-70">
            {project.techs[0]} Optimized
          </span>
        </div>
      </div>
      <div className="p-8 flex flex-col grow">
        <div className="mb-4">
          <h3 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 group-hover:text-sky-500 dark:group-hover:text-amber-300 transition-colors mb-2">
            {project.title}
          </h3>
          <div className="flex items-center gap-2 text-sky-600 dark:text-amber-400 text-sm font-semibold uppercase tracking-wider">
            <Layers size={14} />
            {project.role} <span className="mx-1 opacity-30">|</span>{" "}
            {project.period}
          </div>
        </div>

        <p className="text-zinc-600 dark:text-zinc-400 text-base leading-relaxed mb-6 line-clamp-3">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-8 mt-auto">
          {project.techs.map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 text-[10px] font-black bg-zinc-100 dark:bg-zinc-800 text-zinc-500 dark:text-zinc-400 rounded uppercase tracking-tight border border-transparent dark:border-zinc-700/50"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-6 pt-6 border-t border-zinc-100 dark:border-zinc-800">
          <a
            href={project.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm font-medium text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
          >
            <Github size={18} /> Source
          </a>
          <a
            href={project.links.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm font-medium text-zinc-500 hover:text-sky-500 dark:hover:text-amber-400 transition-colors"
          >
            <ExternalLink size={18} /> Demo
          </a>
        </div>
      </div>
    </div>
  );
}
