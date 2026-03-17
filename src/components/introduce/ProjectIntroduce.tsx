'use client';

import { CV_DATA } from './introduceData';

export default function ProjectIntroduce() {
  const projects = CV_DATA.projects || [];

  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold mb-6 border-b-2 border-zinc-200 dark:border-zinc-800 pb-2">
        Projects
      </h2>
      <div className="space-y-10">
        {projects.map((project, index) => (
          <div key={index} className="group">
            <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-2">
              <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100">
                {project.title}
              </h3>
              <span className="text-sm text-zinc-500 font-medium">{project.period}</span>
            </div>

            <div className="text-sky-600 dark:text-sky-400 text-sm font-semibold mb-3">
              {project.role}
            </div>

            <ul className="list-disc list-inside space-y-1.5 text-zinc-600 dark:text-zinc-400 text-sm ml-1">
              {project.details.map((detail, idx) => (
                <li key={idx} className="leading-relaxed">
                  {detail}
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-2 mt-4">
              {project.techs.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-0.5 bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 text-xs font-medium rounded-md"
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
