import { Github, ExternalLink } from "lucide-react";
import { CV_DATA } from "./introduceData";

export default function Project() {
  const projects = CV_DATA.projects || [];

  return (
    <div className="flex flex-col gap-16 py-2">
      {projects.map((project, index) => (
        <div key={index} className="flex flex-col gap-5 group">
          <div className="flex flex-col gap-2">
            <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-x-12 gap-y-2">
              <h4 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 group-hover:text-sky-500 dark:group-hover:text-amber-300 transition-colors tracking-tight break-keep md:max-w-[65%]">
                {project.title}
              </h4>
              <span className="text-sm text-zinc-400 font-medium tabular-nums shrink-0 pt-1.5">
                {project.period}
              </span>
            </div>
            <p className="text-base text-sky-500 dark:text-amber-400 font-semibold">
              {project.role}
            </p>
          </div>

          <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed break-keep">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2">
            {project.techs.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-100 dark:border-zinc-700 text-zinc-600 dark:text-zinc-400 text-xs font-bold rounded-md"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex gap-5 pt-1">
            <a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-all font-medium"
            >
              <Github className="w-4 h-4" /> Github
            </a>
            <a
              href={project.links.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-all font-medium"
            >
              <ExternalLink className="w-4 h-4" /> Live Demo
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}
