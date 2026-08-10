import { SKILLS_DATA } from "../data/skills";
import type { IconType } from "react-icons";
import SectionHeader from "./common/SectionHeader";
import {
  SiExpress,
  SiFirebase,
  SiGit,
  SiJavascript,
  SiMockserviceworker,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiReact,
  SiRender,
  SiSocketdotio,
  SiSupabase,
  SiSwagger,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
  SiVuedotjs,
} from "react-icons/si";

const SKILL_ICONS: Record<string, IconType> = {
  React: SiReact,
  "Next.js": SiNextdotjs,
  "Vue.js": SiVuedotjs,
  TypeScript: SiTypescript,
  JavaScript: SiJavascript,
  "Tailwind CSS": SiTailwindcss,
  "Node.js": SiNodedotjs,
  Express: SiExpress,
  "Socket.IO": SiSocketdotio,
  "REST API": SiSwagger,
  PostgreSQL: SiPostgresql,
  Supabase: SiSupabase,
  Firebase: SiFirebase,
  Vercel: SiVercel,
  Render: SiRender,
  MSW: SiMockserviceworker,
  Git: SiGit,
};

export default function Skills() {
  return (
    <section aria-labelledby="skills-heading">
      <SectionHeader
        eyebrow="Capabilities"
        title="기술과 도구"
        id="skills-heading"
        description="프로젝트에서 직접 설계하고 구현한 기술을 중심으로 정리했습니다."
        split
      />

      <div className="divide-y divide-sky-200/70 border-y border-sky-200/70 dark:divide-sky-400/15 dark:border-sky-400/15">
        {SKILLS_DATA.map((group) => (
          <div key={group.category} className="grid gap-3 py-4 sm:grid-cols-[9rem_1fr] sm:items-center">
            <h3 className="meta-label">
              {group.category}
            </h3>
            <ul className="flex flex-wrap gap-2">
              {group.items.map((skill) => {
                const Icon = SKILL_ICONS[skill];

                return (
                  <li
                    key={skill}
                    className="group inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 py-1.5 pl-1.5 pr-3 text-sm font-semibold text-slate-700 transition-all hover:-translate-y-0.5 hover:border-sky-300 hover:text-sky-700 hover:shadow-sm dark:border-slate-700 dark:bg-slate-900/70 dark:text-slate-200 dark:hover:border-sky-400/40 dark:hover:text-sky-300"
                  >
                    <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-sky-100 text-sky-600 transition-colors group-hover:bg-sky-200 dark:bg-sky-400/10 dark:text-sky-400 dark:group-hover:bg-sky-400/20">
                      {Icon && <Icon className="size-4" aria-hidden="true" />}
                    </span>
                    <span>{skill}</span>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
