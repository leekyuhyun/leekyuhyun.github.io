import Image from "next/image";
import { ChevronDown, ExternalLink } from "lucide-react";
import type { ReactNode } from "react";
import { PROJECTS_DATA } from "../data/projects";

export default function Projects() {
  return (
    <section aria-labelledby="projects-heading">
      <div className="section-header md:!mb-12">
        <p className="section-eyebrow">Selected work</p>
        <h2 id="projects-heading" className="section-title">
          대표 프로젝트
        </h2>
      </div>

      <div className="border-t border-slate-300 dark:border-slate-700">
        {PROJECTS_DATA.map((project) => (
            <details key={project.title} name="projects" className="group border-b border-slate-300 dark:border-slate-700">
              <summary className="w-full cursor-pointer list-none py-7 text-left marker:content-none md:py-9">
                <div className="flex flex-col gap-4 md:grid md:grid-cols-[1fr_auto] md:items-start md:gap-8">
                  <div>
                    <div className="mb-2 flex flex-wrap items-center gap-2">
                      <span className="text-xs font-bold uppercase tracking-[0.12em] text-sky-600 dark:text-sky-400">
                        {project.category}
                      </span>
                      {project.award && (
                        <span className="rounded-full border border-amber-200 bg-amber-50 px-2 py-1 text-xs font-bold text-amber-700 dark:border-amber-800/50 dark:bg-amber-900/20 dark:text-amber-300">
                          수상 · {project.award}
                        </span>
                      )}
                    </div>

                    <h3 className="text-xl font-bold leading-snug text-slate-900 transition-colors group-hover:text-sky-600 dark:text-white dark:group-hover:text-sky-400 md:text-2xl">
                      {project.title}
                    </h3>
                    <p className="mt-3 max-w-3xl text-base leading-relaxed text-slate-600 dark:text-slate-400">
                      {project.description}
                    </p>

                    <div className="mt-4 flex flex-wrap gap-x-3 gap-y-1.5">
                      {project.tags.map((tag) => (
                        <span key={tag} className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between gap-5 md:flex-col md:items-end">
                    <span className="text-xs font-semibold text-slate-400 dark:text-slate-500">{project.period}</span>
                    <span className="inline-flex items-center gap-1.5 text-sm font-bold text-sky-600 dark:text-sky-400">
                      <span className="group-open:hidden">상세 보기</span>
                      <span className="hidden group-open:inline">상세 접기</span>
                      <ChevronDown className="size-4 transition-transform duration-200 group-open:rotate-180" aria-hidden="true" />
                    </span>
                  </div>
                </div>
              </summary>

                <div className="pb-9 md:pb-12">
                  <div className="border-l-2 border-sky-400 bg-white/70 px-5 py-6 dark:bg-slate-900/50 md:px-8 md:py-8">
                    {project.image && (
                      <div className="relative mb-8 aspect-[16/9] w-full overflow-hidden rounded-xl border border-slate-200 bg-slate-100 dark:border-slate-700 dark:bg-slate-800 md:aspect-[21/9]">
                        <Image src={project.image} alt={`${project.title} 프로젝트 화면`} fill className="object-cover" />
                      </div>
                    )}

                    <div className="grid gap-5 border-b border-slate-200 pb-7 text-sm dark:border-slate-700 sm:grid-cols-2">
                      {project.period && <DetailItem label="기간" value={project.period} />}
                      {project.team && <DetailItem label="인원" value={project.team} />}
                      {project.role && <DetailItem label="역할" value={project.role} wide />}
                      {project.github && project.github.length > 0 && (
                        <div className="sm:col-span-2">
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
                      <DetailSection title="프로젝트 개요">
                        <p className="text-base leading-relaxed text-slate-700 dark:text-slate-300">{project.overview}</p>
                      </DetailSection>
                    )}

                    {project.features && project.features.length > 0 && (
                      <DetailSection title="핵심 기능">
                        <div className="grid gap-4 md:grid-cols-2">
                          {project.features.map((feature) => (
                            <div key={feature.title} className="border-t border-slate-200 pt-3 dark:border-slate-700">
                              <h5 className="font-bold text-slate-900 dark:text-white">{feature.title}</h5>
                              <p className="mt-1.5 text-sm leading-relaxed text-slate-600 dark:text-slate-400">{feature.description}</p>
                            </div>
                          ))}
                        </div>
                      </DetailSection>
                    )}

                    {project.contributions && project.contributions.length > 0 && (
                      <DetailSection title="주요 기여 및 성과">
                        <div className="space-y-8">
                          {project.contributions.map((contribution) => (
                            <div key={contribution.title}>
                              <h5 className="border-l-2 border-sky-500 pl-3 text-lg font-bold text-slate-900 dark:text-white">{contribution.title}</h5>
                              <dl className="mt-4 grid gap-3 text-sm leading-relaxed md:grid-cols-3">
                                <Contribution label="상황" text={contribution.situation} />
                                <Contribution label="해결" text={contribution.solution.replaceAll("\n", " ")} accent />
                                <Contribution label="결과" text={contribution.result} />
                              </dl>
                            </div>
                          ))}
                        </div>
                      </DetailSection>
                    )}
                  </div>
                </div>
            </details>
        ))}
      </div>
    </section>
  );
}

function DetailItem({ label, value, wide = false }: { label: string; value: string; wide?: boolean }) {
  return (
    <div className={wide ? "sm:col-span-2" : undefined}>
      <p className="mb-1 text-xs font-bold uppercase tracking-wider text-slate-400">{label}</p>
      <p className="font-semibold leading-relaxed text-slate-700 dark:text-slate-300">{value}</p>
    </div>
  );
}

function DetailSection({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="pt-8">
      <h4 className="mb-4 text-lg font-bold text-slate-950 dark:text-white md:text-xl">{title}</h4>
      {children}
    </section>
  );
}

function Contribution({ label, text, accent = false }: { label: string; text: string; accent?: boolean }) {
  return (
    <div className="rounded-lg bg-slate-50 p-4 dark:bg-slate-800/60">
      <dt className={`mb-2 text-xs font-bold uppercase tracking-wider ${accent ? "text-sky-600 dark:text-sky-400" : "text-slate-400"}`}>{label}</dt>
      <dd className="text-slate-700 dark:text-slate-300">{text}</dd>
    </div>
  );
}
