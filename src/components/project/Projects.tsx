import { PROJECTS_DATA } from "../../data/projects";
import ProjectItem from "./ProjectItem";

export default function Projects() {
  return (
    <section aria-labelledby="projects-heading">
      <div className="mb-8 grid gap-4 md:mb-10 md:grid-cols-[10rem_1fr] md:gap-10">
        <p className="section-eyebrow pt-1">Selected work</p>
        <div>
          <h2 id="projects-heading" className="text-3xl font-bold tracking-tight text-slate-950 dark:text-white md:text-4xl">문제의 맥락부터 해결까지</h2>
          <p className="mt-3 max-w-2xl text-base leading-relaxed text-slate-500 dark:text-slate-400">사용한 기술을 나열하기보다 어떤 문제를 발견했고, 어떻게 해결했는지 정리했습니다.</p>
        </div>
      </div>
      <div className="border-t border-slate-300 dark:border-slate-700">
        {PROJECTS_DATA.map((project, index) => <ProjectItem key={project.title} project={project} index={index} />)}
      </div>
    </section>
  );
}
