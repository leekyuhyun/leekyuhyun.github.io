import Image, { type StaticImageData } from "next/image";
import { ChevronDown, ExternalLink } from "lucide-react";
import type { ReactNode } from "react";
import { PROJECTS_DATA } from "../data/projects";

export default function Projects() {
  return (
    <section aria-labelledby="projects-heading">
      <div className="mb-8 grid gap-4 md:mb-10 md:grid-cols-[10rem_1fr] md:gap-10">
        <p className="section-eyebrow pt-1">Selected work</p>
        <div>
          <h2 id="projects-heading" className="text-3xl font-bold tracking-tight text-slate-950 dark:text-white md:text-4xl">
            문제의 맥락부터 해결까지
          </h2>
          <p className="mt-3 max-w-2xl text-base leading-relaxed text-slate-500 dark:text-slate-400">
            사용한 기술을 나열하기보다 어떤 문제를 발견했고, 어떻게 해결했는지 정리했습니다.
          </p>
        </div>
      </div>

      <div className="border-t border-slate-300 dark:border-slate-700">
        {PROJECTS_DATA.map((project, index) => (
            <details key={project.title} name="projects" className="group border-b border-slate-300 dark:border-slate-700">
              <summary className="w-full cursor-pointer list-none px-1 py-7 text-left marker:content-none md:py-9">
                <div className="grid gap-4 md:grid-cols-[3rem_minmax(0,1fr)_auto] md:gap-7">
                  <span className="text-sm font-black tracking-widest text-sky-500 dark:text-sky-400">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <div className="mb-3 flex flex-wrap items-center gap-x-3 gap-y-2">
                      <span className="text-xs font-bold uppercase tracking-[0.12em] text-sky-600 dark:text-sky-400">
                        {project.category}
                      </span>
                      {project.award && (
                        <span className="rounded-full border border-amber-200 bg-amber-50 px-2 py-1 text-xs font-bold text-amber-700 dark:border-amber-800/50 dark:bg-amber-900/20 dark:text-amber-300">
                          수상 · {project.award}
                        </span>
                      )}
                    </div>

                    <h3 className="text-2xl font-bold leading-snug tracking-tight text-slate-950 transition-colors group-hover:text-sky-600 dark:text-white dark:group-hover:text-sky-400 md:text-3xl">
                      {project.title}
                    </h3>
                    <p className="mt-3 max-w-3xl text-base leading-[1.8] text-slate-600 dark:text-slate-300">
                      {project.description}
                    </p>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span key={tag} className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-semibold text-slate-600 dark:bg-slate-800 dark:text-slate-300">
                          {tag}
                        </span>
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

                <div className="pb-4 md:pb-5">
                  <div className="border-l-2 border-sky-400 px-5 py-6 md:px-8 md:py-8">
                    {project.image && (
                      <ProjectImage src={project.image} title={project.title} />
                    )}

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

                    {project.contributions && project.contributions.length > 0 && (
                      <DetailSection title="주요 기여 및 성과">
                        <div className="divide-y divide-slate-300 border-b border-slate-300 dark:divide-slate-700 dark:border-slate-700">
                          {project.contributions.map((contribution, contributionIndex) => (
                            <article
                              key={contribution.title}
                              className="grid gap-4 py-6 md:grid-cols-[3rem_1fr] md:py-7"
                            >
                              <span className="text-xs font-black tracking-widest text-sky-500">
                                {String(contributionIndex + 1).padStart(2, "0")}
                              </span>
                              <div>
                                <h5 className="text-base font-bold leading-snug text-slate-900 dark:text-white md:text-lg">
                                  {contribution.title}
                                </h5>
                                <dl className="mt-5 space-y-6">
                                  <Narrative label="문제 인식" text={contribution.situation} />
                                  <Narrative label="해결 방안" text={contribution.solution.replaceAll("\n", " ")} accent />
                                  <Narrative label="결과" text={contribution.result} result />
                                </dl>
                              </div>
                            </article>
                          ))}
                        </div>
                      </DetailSection>
                    )}

                    {project.features && project.features.length > 0 && (
                      <DetailSection title="핵심 기능">
                        <ol className="grid gap-x-8 md:grid-cols-2">
                          {project.features.map((feature, featureIndex) => (
                            <li key={feature.title} className="grid grid-cols-[2rem_1fr] gap-3 border-b border-slate-200 py-4 dark:border-slate-700">
                              <span className="text-xs font-black text-sky-500">{String(featureIndex + 1).padStart(2, "0")}</span>
                              <div>
                                <h5 className="text-base font-bold text-slate-900 dark:text-white">{feature.title}</h5>
                                <p className="mt-2 text-sm leading-[1.75] text-slate-600 dark:text-slate-300">{feature.description}</p>
                              </div>
                            </li>
                          ))}
                        </ol>
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

function ProjectImage({ src, title }: { src: StaticImageData | string; title: string }) {
  const width = typeof src === "string" ? 1600 : src.width;
  const height = typeof src === "string" ? 900 : src.height;

  return (
    <div className="mb-8 w-full overflow-hidden rounded-xl border border-slate-200 bg-slate-100 dark:border-slate-700 dark:bg-slate-800">
      <Image
        src={src}
        alt={`${title} 프로젝트 화면`}
        width={width}
        height={height}
        className="block h-auto w-full object-contain"
      />
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

function DetailSection({ title, children, compact = false }: { title: string; children: ReactNode; compact?: boolean }) {
  return (
    <section className={`${compact ? "mt-4 pt-6" : "mt-7 pt-7"} border-t border-slate-200 dark:border-slate-700`}>
      <h4 className="mb-5 text-xl font-bold tracking-tight text-slate-950 dark:text-white md:text-2xl">{title}</h4>
      {children}
    </section>
  );
}

function Narrative({ label, text, accent = false, result = false }: { label: string; text: string; accent?: boolean; result?: boolean }) {
  return (
    <div>
      <dt className={`mb-2 text-sm font-bold ${result ? "text-emerald-700 dark:text-emerald-400" : accent ? "text-sky-600 dark:text-sky-400" : "text-slate-900 dark:text-white"}`}>
        {label}
      </dt>
      <dd className={`max-w-4xl text-base leading-[1.85] ${result ? "font-semibold text-slate-900 dark:text-white" : "text-slate-600 dark:text-slate-300"}`}>
        {text}
      </dd>
    </div>
  );
}
