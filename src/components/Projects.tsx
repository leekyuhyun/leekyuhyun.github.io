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
      <div className="flex items-center gap-3 mb-6 md:mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white">프로젝트</h2>
        <span className="text-base md:text-lg font-bold text-sky-500 bg-sky-100 dark:bg-sky-900/30 px-3 py-0.5 md:py-1 rounded-full">
          {PROJECTS_DATA.length}
        </span>
      </div>

      {/* Blog Feed Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
        {PROJECTS_DATA.map((project, index) => (
          <article 
            key={index} 
            className="flex flex-col cursor-pointer group"
            onClick={() => setSelectedIndex(index)}
          >
            {project.image && (
              <div className="w-full aspect-[1.6/1] overflow-hidden rounded-xl mb-4 bg-slate-100 dark:bg-slate-800 shadow-sm relative">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            )}
            <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-sky-500 transition-colors line-clamp-2">
              {project.title}
            </h3>
            <p className="text-base md:text-lg text-slate-600 dark:text-slate-400 mb-4 line-clamp-3 leading-relaxed">
              {project.description}
            </p>
            
            <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-100 dark:border-slate-800/50">
              <span className="text-xs md:text-sm text-slate-500 dark:text-slate-400">
                {project.period}
              </span>
              <div className="flex gap-1.5 md:gap-2">
                {project.tags.slice(0, 2).map((tag, i) => (
                  <span key={i} className="text-[10px] md:text-xs font-semibold text-sky-600 dark:text-sky-400 bg-sky-50 dark:bg-sky-900/20 px-2 py-1 rounded">
                    {tag}
                  </span>
                ))}
                {project.tags.length > 2 && (
                  <span className="text-[10px] md:text-xs font-semibold text-slate-500 bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded">
                    +{project.tags.length - 2}
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

            {/* Modal Header Image */}
            {selectedProject.image && (
              <div className="w-full aspect-[4/3] sm:aspect-[21/9] md:aspect-[3/1] bg-slate-100 dark:bg-slate-800 relative shrink-0">
                <Image
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  fill
                  className="object-cover opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent flex items-end p-6 md:p-10">
                  <h3 className="text-2xl md:text-4xl font-bold text-white drop-shadow-lg leading-snug">
                    {selectedProject.title}
                  </h3>
                </div>
              </div>
            )}

            <div className="p-6 md:p-10 flex flex-col gap-8 md:gap-10">
              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {selectedProject.tags.map((tag) => (
                  <span key={tag} className="px-3 py-1.5 bg-sky-50 dark:bg-sky-900/20 text-sky-600 dark:text-sky-400 font-bold rounded-full text-sm md:text-base border border-sky-100 dark:border-sky-800/50">
                    {tag}
                  </span>
                ))}
              </div>

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
                    <span className="text-sm md:text-base font-bold text-slate-500 dark:text-slate-400 tracking-wide uppercase">링크</span>
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

              {/* Contributions */}
              {selectedProject.contributions && selectedProject.contributions.length > 0 && (
                <div>
                  <h4 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mb-6 border-b border-slate-200 dark:border-slate-800 pb-3">
                    주요 기여 및 성과
                  </h4>
                  <div className="flex flex-col gap-8 md:gap-10">
                    {selectedProject.contributions.map((cont, i) => (
                      <div key={i} className="flex flex-col gap-4 md:gap-5">
                        <h5 className="text-lg md:text-xl font-bold text-slate-800 dark:text-slate-100 flex items-start gap-2.5">
                          <span className="w-1.5 h-6 rounded bg-sky-500 mt-0.5 shrink-0"></span>
                          <span className="leading-snug">{cont.title}</span>
                        </h5>
                        <div className="flex flex-col gap-4 text-base md:text-lg text-slate-700 dark:text-slate-300 pl-4 border-l-2 border-slate-200 dark:border-slate-700/50 ml-0.5">
                          <div className="flex flex-col gap-1.5">
                            <span className="font-bold text-slate-900 dark:text-white text-sm bg-slate-100 dark:bg-slate-800 self-start px-2 py-0.5 rounded shadow-sm">상황 (Situation)</span>
                            <span className="leading-relaxed">{cont.situation}</span>
                          </div>
                          <div className="flex flex-col gap-1.5">
                            <span className="font-bold text-slate-900 dark:text-white text-sm bg-sky-100 dark:bg-sky-900/30 text-sky-800 dark:text-sky-300 self-start px-2 py-0.5 rounded shadow-sm">해결 (Solution)</span>
                            <span className="leading-relaxed">{cont.solution.split('\n').join(' ')}</span>
                          </div>
                          <div className="flex flex-col gap-1.5">
                            <span className="font-bold text-slate-900 dark:text-white text-sm bg-emerald-100 dark:bg-emerald-900/30 text-emerald-800 dark:text-emerald-300 self-start px-2 py-0.5 rounded shadow-sm">결과 (Result)</span>
                            <span className="leading-relaxed font-medium text-slate-800 dark:text-slate-200">{cont.result}</span>
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
