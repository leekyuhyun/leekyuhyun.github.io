import { ExternalLink } from "lucide-react";
import type { Project } from "../../types/project";
import DetailSection from "./DetailSection";
import ProjectContributions from "./ProjectContributions";
import ProjectFeatures from "./ProjectFeatures";
import ProjectImage from "./ProjectImage";

export default function ProjectDetails({ project }: { project: Project }) {
  return (
    <div className="pb-4 md:pb-5">
      <div className="border-l-2 border-sky-400 px-5 py-6 md:px-8 md:py-8">
        {project.image && <ProjectImage src={project.image} title={project.title} />}

        <div className="grid border-t border-slate-200 text-sm dark:border-slate-700 sm:grid-cols-2">
          {project.period && <DetailItem label="기간" value={project.period} />}
          {project.team && <DetailItem label="인원" value={project.team} />}
          {project.role && <DetailItem label="역할" value={project.role} wide />}
          {project.github && project.github.length > 0 && (
            <div className="border-t border-slate-200 pb-1 pt-4 dark:border-slate-700 sm:col-span-2">
              <p className="mb-2 text-xs font-bold uppercase tracking-wider text-slate-400">프로젝트 저장소</p>
              <div className="flex flex-wrap gap-3">
                {project.github.map((link) => (
                  <a key={link.url} href={link.url} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 font-bold text-sky-600 hover:underline dark:text-sky-400">
                    {link.label}<ExternalLink className="size-3.5" aria-hidden="true" />
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>

        {project.overview && (
          <DetailSection title="프로젝트 개요" compact>
            <p className="max-w-4xl text-base leading-[1.85] text-slate-700 dark:text-slate-300">{project.overview}</p>
          </DetailSection>
        )}
        {project.contributions && project.contributions.length > 0 && <ProjectContributions contributions={project.contributions} />}
        {project.features && project.features.length > 0 && <ProjectFeatures features={project.features} />}
      </div>
    </div>
  );
}

function DetailItem({ label, value, wide = false }: { label: string; value: string; wide?: boolean }) {
  return (
    <div className={`py-4 ${wide ? "border-t border-slate-200 dark:border-slate-700 sm:col-span-2" : "sm:pr-8"}`}>
      <p className="mb-2 text-xs font-bold uppercase tracking-wider text-slate-400">{label}</p>
      <p className="text-base font-semibold leading-[1.7] text-slate-800 dark:text-slate-200">{value}</p>
    </div>
  );
}
