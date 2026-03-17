'use client';

import { CV_DATA } from './introduceData';

export default function ProjectIntroduce() {
  const projects = CV_DATA.projects || [];

  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold mb-6 border-b-2 border-zinc-200 dark:border-zinc-800 pb-2">
        Projects
      </h2>
      <div className="space-y-12">
        {projects.map((project, index) => (
          <div key={index} className="group">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-x-4 gap-y-1 mb-2">
              <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 break-keep leading-snug max-w-2xl">
                {project.title}
              </h3>
              <span className="text-sm text-zinc-500 font-medium whitespace-nowrap shrink-0 sm:pt-1">
                {project.period}
              </span>
            </div>

            <div className="text-sky-600 dark:text-sky-400 text-sm font-semibold mb-3">
              {project.role}
            </div>

            <ul className="list-disc list-outside space-y-2 text-zinc-600 dark:text-zinc-400 text-sm ml-4">
              {project.details.map((detail, idx) => (
                <li key={idx} className="leading-relaxed pl-1">
                  {detail}
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-2 mt-5">
              {project.techs.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-0.5 bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 text-[11px] font-medium rounded-md border border-zinc-200/50 dark:border-zinc-700/50"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
