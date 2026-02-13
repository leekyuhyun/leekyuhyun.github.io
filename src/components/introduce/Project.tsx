import { Github, ExternalLink } from "lucide-react";
// introduceData.ts에 projects 배열이 있다고 가정합니다.
const PROJECTS = [
  {
    title: "Baseball Starter",
    role: "Front-end Developer",
    period: "2026.01 - 2026.02",
    description:
      "야구 입문자를 위한 커뮤니티 플랫폼입니다. 복잡한 야구 규칙을 쉽게 풀이하고 경기 일정 및 티켓 예매 정보를 제공합니다.",
    techs: ["React", "TypeScript", "Vite", "Tailwind CSS"],
    links: { github: "#", demo: "#" },
  },
];

export default function Project() {
  return (
    <div className="flex flex-col gap-12 py-4">
      {PROJECTS.map((project, index) => (
        <div key={index} className="flex flex-col gap-4 group">
          <div className="flex justify-between items-start">
            <div>
              <h4 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 group-hover:text-sky-500 transition-colors">
                {project.title}
              </h4>
              <p className="text-sky-500 dark:text-amber-300 font-semibold text-sm mt-1">
                {project.role}
              </p>
            </div>
            <span className="text-sm text-zinc-400 font-medium">
              {project.period}
            </span>
          </div>

          <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed break-keep">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2">
            {project.techs.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 bg-sky-50 dark:bg-zinc-800 text-sky-600 dark:text-zinc-400 text-xs font-bold rounded-md"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex gap-4 pt-2">
            <a
              href={project.links.github}
              target="_blank"
              className="flex items-center gap-1.5 text-sm text-zinc-400 hover:text-sky-500 transition-colors"
            >
              <Github className="w-4 h-4" /> Github
            </a>
            <a
              href={project.links.demo}
              target="_blank"
              className="flex items-center gap-1.5 text-sm text-zinc-400 hover:text-sky-500 transition-colors"
            >
              <ExternalLink className="w-4 h-4" /> Live Demo
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}
