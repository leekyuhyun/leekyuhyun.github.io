"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { PROJECTS_DATA } from "../data/projects";

export default function Projects() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (selectedIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedIndex]);

  const selectedProject = selectedIndex !== null ? PROJECTS_DATA[selectedIndex] : null;

  return (
    <section>
      <div className="flex items-center gap-3 mb-6 md:mb-8 border-b border-slate-200 dark:border-slate-700 pb-3">
        <h2 className="text-xl md:text-2xl font-bold text-slate-800 dark:text-slate-200">프로젝트</h2>
        <span className="text-sm md:text-base font-bold text-sky-500 bg-sky-100 dark:bg-sky-900/30 px-3 py-0.5 md:py-1 rounded-full">
          {PROJECTS_DATA.length}
        </span>
      </div>

      {/* List Layout */}
      <div className="flex flex-col gap-4 md:gap-6">
        {PROJECTS_DATA.map((project, index) => (
          <article
            key={index}
            className="group flex flex-col md:flex-row gap-5 md:gap-8 cursor-pointer p-4 md:p-6 rounded-2xl transition-all duration-300 hover:bg-slate-50 dark:hover:bg-slate-800/50 hover:shadow-md border border-slate-100 dark:border-slate-800/60 hover:border-sky-100 dark:hover:border-sky-900/50"
            onClick={() => setSelectedIndex(index)}
          >
            {/* Image Thumbnail (Left Side on md) */}
            {project.image && (
              <div className="w-full md:w-[40%] xl:w-[35%] shrink-0 aspect-[1.6/1] overflow-hidden rounded-xl bg-slate-100 dark:bg-slate-800 shadow-sm relative">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            )}

            {/* Content (Right Side on md) */}
            <div className="flex flex-col flex-1 py-1">
              <div className="flex flex-col-reverse md:flex-row md:items-center justify-between gap-2 mb-2 md:mb-3">
                <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white group-hover:text-sky-500 transition-colors flex items-center gap-2">
                  {project.title}
                  <svg className="w-5 h-5 text-sky-500 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 hidden md:block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </h3>
                <span className="text-xs md:text-sm font-semibold text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-2.5 py-1 rounded-full self-start md:self-auto shrink-0">
                  {project.period}
                </span>
              </div>

              <p className="text-base text-slate-600 dark:text-slate-400 mb-6 line-clamp-2 md:line-clamp-3 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-slate-100 dark:border-slate-800/50">
                {project.tags.slice(0, 4).map((tag, i) => (
                  <span key={i} className="text-[11px] md:text-xs font-semibold text-sky-600 dark:text-sky-400 bg-sky-50 dark:bg-sky-900/20 px-2.5 py-1 rounded-lg border border-sky-100/50 dark:border-sky-800/30">
                    {tag}
                  </span>
                ))}
                {project.tags.length > 4 && (
                  <span className="text-[11px] md:text-xs font-semibold text-slate-500 bg-slate-100 dark:bg-slate-800 px-2.5 py-1 rounded-lg">
                    +{project.tags.length - 4}
                  </span>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Modal Popup */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-0 md:p-6 lg:p-12 bg-slate-900/80 md:backdrop-blur-sm"
          onClick={() => setSelectedIndex(null)}
        >
          <div
            className="bg-white dark:bg-slate-900 md:rounded-2xl w-full h-full md:h-auto md:max-w-4xl md:max-h-[90vh] overflow-y-auto md:shadow-2xl relative flex flex-col animate-in fade-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedIndex(null)}
              className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center bg-slate-900/20 hover:bg-slate-900/50 text-white rounded-full transition-colors z-20 md:bg-slate-100 md:text-slate-500 md:dark:bg-slate-800 md:hover:bg-slate-200 md:dark:hover:bg-slate-700 md:hover:text-slate-900 md:dark:hover:text-white"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="p-6 md:p-10 flex flex-col gap-8 md:gap-10 pt-12 md:pt-14">
              {/* Title & Tags Section */}
              <div className="flex flex-col gap-4 pr-6">
                <div className="flex flex-col gap-2">
                  <h3 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white leading-snug">
                    {selectedProject.title}
                  </h3>
                  {selectedProject.subtitle && (
                    <p className="text-lg md:text-xl font-medium text-slate-500 dark:text-slate-400">
                      {selectedProject.subtitle}
                    </p>
                  )}
                </div>
                <div className="flex flex-wrap gap-2 mt-2">
                  {selectedProject.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1.5 bg-sky-50 dark:bg-sky-900/20 text-sky-600 dark:text-sky-400 font-bold rounded-full text-sm border border-sky-100 dark:border-sky-800/50">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Content Image */}
              {selectedProject.image && (
                <div className="w-full aspect-[16/9] md:aspect-[21/9] bg-slate-100 dark:bg-slate-800 relative rounded-2xl overflow-hidden shadow-sm border border-slate-100 dark:border-slate-800">
                  <Image
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    fill
                    className="object-cover"
                  />
                </div>
              )}

              {/* Details Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6 text-base md:text-lg text-slate-700 dark:text-slate-300 bg-slate-50 dark:bg-slate-800/40 p-5 md:p-8 rounded-xl border border-slate-100 dark:border-slate-800">
                {selectedProject.period && (
                  <div className="flex flex-col gap-1.5">
                    <span className="text-sm md:text-base font-bold text-slate-500 dark:text-slate-400 tracking-wide uppercase">기간</span>
                    <span className="font-medium">{selectedProject.period}</span>
                  </div>
                )}
                {selectedProject.team && (
                  <div className="flex flex-col gap-1.5">
                    <span className="text-sm md:text-base font-bold text-slate-500 dark:text-slate-400 tracking-wide uppercase">인원</span>
                    <span className="font-medium">{selectedProject.team}</span>
                  </div>
                )}
                {selectedProject.role && (
                  <div className="flex flex-col gap-1.5 sm:col-span-2">
                    <span className="text-sm md:text-base font-bold text-slate-500 dark:text-slate-400 tracking-wide uppercase">역할</span>
                    <span className="font-medium">{selectedProject.role}</span>
                  </div>
                )}
                {selectedProject.github && selectedProject.github.length > 0 && (
                  <div className="flex flex-col gap-1.5 sm:col-span-2">
                    <span className="text-sm md:text-base font-bold text-slate-500 dark:text-slate-400 tracking-wide uppercase">깃허브 주소</span>
                    <div className="flex flex-col gap-1.5">
                      {selectedProject.github.map((link, i) => (
                        <a key={i} href={link.url} target="_blank" rel="noreferrer" className="text-sky-600 dark:text-sky-400 font-bold hover:underline flex items-center gap-1.5">
                          {link.label}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Overview */}
              {selectedProject.overview && (
                <div>
                  <h4 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mb-4 border-b border-slate-200 dark:border-slate-800 pb-3">
                    프로젝트 개요
                  </h4>
                  <p className="text-lg md:text-xl text-slate-800 dark:text-slate-200 leading-relaxed bg-slate-50 dark:bg-slate-800/40 p-5 md:p-6 rounded-xl border border-slate-100 dark:border-slate-800">
                    {selectedProject.overview}
                  </p>
                </div>
              )}

              {/* Features */}
              {selectedProject.features && selectedProject.features.length > 0 && (
                <div>
                  <h4 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mb-6 border-b border-slate-200 dark:border-slate-800 pb-3">
                    핵심 기능
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                    {selectedProject.features.map((feature, i) => (
                      <div key={i} className="flex flex-col gap-2 p-5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md hover:border-sky-200 dark:hover:border-sky-800/50 transition-all">
                        <h5 className="text-lg md:text-xl font-bold text-slate-800 dark:text-slate-100 flex items-center gap-2">
                          <span className="w-1.5 h-4 rounded-full bg-sky-500 shrink-0"></span>
                          <span className="leading-snug">{feature.title}</span>
                        </h5>
                        <p className="text-base md:text-lg text-slate-700 dark:text-slate-300 pl-3.5 leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Contributions */}
              {selectedProject.contributions && selectedProject.contributions.length > 0 && (
                <div>
                  <h4 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mb-6 border-b border-slate-200 dark:border-slate-800 pb-3">
                    주요 기여 및 성과
                  </h4>
                  <div className="flex flex-col gap-8 md:gap-10">
                    {selectedProject.contributions.map((cont, i) => (
                      <div key={i} className="flex flex-col gap-4 md:gap-5">
                        <h5 className="text-xl md:text-2xl font-bold text-slate-800 dark:text-slate-100 flex items-start gap-2.5">
                          <span className="w-1.5 h-6 rounded bg-sky-500 mt-0.5 shrink-0"></span>
                          <span className="leading-snug">{cont.title}</span>
                        </h5>
                        <div className="flex flex-col gap-4 text-lg md:text-xl text-slate-800 dark:text-slate-200 pl-4 border-l-2 border-slate-200 dark:border-slate-700/50 ml-0.5">
                          <div className="flex flex-col gap-1.5">
                            <span className="font-bold text-slate-900 dark:text-white text-base bg-slate-100 dark:bg-slate-800 self-start px-2 py-0.5 rounded shadow-sm">상황 (Situation)</span>
                            <span className="leading-relaxed">{cont.situation}</span>
                          </div>
                          <div className="flex flex-col gap-1.5">
                            <span className="font-bold text-slate-900 dark:text-white text-base bg-sky-100 dark:bg-sky-900/30 text-sky-900 dark:text-sky-300 self-start px-2 py-0.5 rounded shadow-sm">해결 (Solution)</span>
                            <span className="leading-relaxed">{cont.solution.split('\n').join(' ')}</span>
                          </div>
                          <div className="flex flex-col gap-1.5">
                            <span className="font-bold text-slate-900 dark:text-white text-base bg-emerald-100 dark:bg-emerald-900/30 text-emerald-900 dark:text-emerald-300 self-start px-2 py-0.5 rounded shadow-sm">결과 (Result)</span>
                            <span className="leading-relaxed font-bold text-slate-900 dark:text-slate-100">{cont.result}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
