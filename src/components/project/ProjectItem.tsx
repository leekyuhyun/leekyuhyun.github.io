import { ChevronDown } from "lucide-react";
import type { Project } from "../../types/project";
import ProjectDetails from "./ProjectDetails";

type ProjectItemProps = {
  project: Project;
  index: number;
};

export default function ProjectItem({ project, index }: ProjectItemProps) {
  return (
    <details name="projects" className="group border-b border-slate-300 dark:border-slate-700">
      <summary className="w-full cursor-pointer list-none px-1 py-7 text-left marker:content-none md:py-9">
        <div className="grid gap-4 md:grid-cols-[3rem_minmax(0,1fr)_auto] md:gap-7">
          <span className="text-sm font-black tracking-widest text-sky-500 dark:text-sky-400">
            {String(index + 1).padStart(2, "0")}
          </span>
          <div>
            <div className="mb-3 flex flex-wrap items-center gap-x-3 gap-y-2">
              <span className="text-xs font-bold uppercase tracking-[0.12em] text-sky-600 dark:text-sky-400">{project.category}</span>
              {project.award && (
                <span className="rounded-full border border-amber-200 bg-amber-50 px-2 py-1 text-xs font-bold text-amber-700 dark:border-amber-800/50 dark:bg-amber-900/20 dark:text-amber-300">
                  수상 · {project.award}
                </span>
              )}
            </div>
            <h3 className="text-2xl font-bold leading-snug tracking-tight text-slate-950 transition-colors group-hover:text-sky-600 dark:text-white dark:group-hover:text-sky-400 md:text-3xl">{project.title}</h3>
            <p className="mt-3 max-w-3xl text-base leading-[1.8] text-slate-600 dark:text-slate-300">{project.description}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span key={tag} className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-semibold text-slate-600 dark:bg-slate-800 dark:text-slate-300">{tag}</span>
              ))}
            </div>
          </div>
          <div className="flex items-end md:justify-end">
            <span className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-sky-50 px-4 py-2 text-sm font-bold text-sky-700 transition-colors group-hover:border-sky-300 group-hover:bg-sky-100 dark:border-sky-400/20 dark:bg-sky-400/10 dark:text-sky-300">
              <span className="group-open:hidden">상세 보기</span>
              <span className="hidden group-open:inline">상세 접기</span>
              <ChevronDown className="size-4 transition-transform duration-200 group-open:rotate-180" aria-hidden="true" />
            </span>
          </div>
        </div>
      </summary>
      <ProjectDetails project={project} />
    </details>
  );
}
