"use client";

import Image from "next/image";
import { useState } from "react";
import { PROJECTS_DATA } from "../data/projects";

export default function Projects() {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First project open by default

  const toggleProject = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section>
      <h2 className="text-5xl font-bold text-slate-900 dark:text-white mb-8 flex items-center gap-2">
        <span className="text-sky-500">#</span> Projects
      </h2>
      
      <div className="space-y-6">
        {PROJECTS_DATA.map((project, index) => {
          const isOpen = openIndex === index;
          return (
            <article key={index} className="border border-slate-200 dark:border-slate-800 rounded-xl bg-white dark:bg-slate-900 shadow-sm overflow-hidden transition-all">
              {/* Project Header (Clickable Accordion Trigger) */}
              <button 
                onClick={() => toggleProject(index)}
                className="w-full text-left p-6 flex flex-col md:flex-row justify-between items-start md:items-center hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors focus:outline-none"
              >
                <div className="flex-1 pr-4 w-full">
                  <h3 className="text-4xl font-bold text-slate-900 dark:text-white mb-1">
                    {project.title}
                  </h3>
                  <p className="text-2xl text-slate-500 dark:text-slate-400 mb-3">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="px-3 bg-sky-50 dark:bg-slate-800/80 rounded text-xl text-sky-600 dark:text-sky-400 font-medium border border-sky-100 dark:border-slate-700">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                {/* Chevron Icon */}
                <div className={`mt-4 md:mt-0 w-10 h-10 rounded-full flex-shrink-0 flex items-center justify-center transition-colors ${isOpen ? "bg-sky-100 dark:bg-sky-900/50 text-sky-600 dark:text-sky-400" : "bg-slate-100 dark:bg-slate-800 text-slate-400"}`}>
                  <svg 
                    className={`w-6 h-6 transform transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>

              {/* Collapsible Content */}
              <div 
                className={`transition-all duration-500 ease-in-out origin-top ${isOpen ? "max-h-[5000px] opacity-100 border-t border-slate-100 dark:border-slate-800" : "max-h-0 opacity-0 overflow-hidden"}`}
              >
                <div className="p-6">
                  {/* Project Details Grid */}
                  {(project.period || project.team || project.role || (project.github && project.github.length > 0)) && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-1 gap-x-4 text-2xl text-slate-700 dark:text-slate-300 mb-5 bg-slate-50 dark:bg-slate-800/40 p-4 rounded-lg border border-slate-100 dark:border-slate-800">
                      {project.period && (
                        <div className="flex gap-3">
                          <span className="font-bold w-12 shrink-0 text-slate-900 dark:text-white">기간</span>
                          <span>{project.period}</span>
                        </div>
                      )}
                      {project.team && (
                        <div className="flex gap-3">
                          <span className="font-bold w-12 shrink-0 text-slate-900 dark:text-white">인원</span>
                          <span>{project.team}</span>
                        </div>
                      )}
                      {project.role && (
                        <div className="flex gap-3 sm:col-span-2">
                          <span className="font-bold w-12 shrink-0 text-slate-900 dark:text-white">역할</span>
                          <span>{project.role}</span>
                        </div>
                      )}
                      {project.github && project.github.length > 0 && (
                        <div className="flex gap-3 sm:col-span-2">
                          <span className="font-bold w-12 shrink-0 text-slate-900 dark:text-white">링크</span>
                          <div className="flex flex-col gap-0 leading-tight">
                            {project.github.map((link, i) => (
                              <a key={i} href={link.url} target="_blank" rel="noreferrer" className="text-sky-500 dark:text-sky-400 hover:underline truncate flex items-center gap-1">
                                {link.label}
                                <svg className="w-4 h-4 opacity-70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                </svg>
                              </a>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  )}

                  {/* Project Image */}
                  {project.image && (
                    <div className="w-full mb-6 rounded-lg overflow-hidden border border-slate-200 dark:border-slate-700">
                      <Image 
                        src={project.image} 
                        alt={project.title} 
                        className="w-full h-auto object-cover max-h-[350px]"
                      />
                    </div>
                  )}

                  {/* Contributions */}
                  {project.contributions && project.contributions.length > 0 && (
                    <div>
                      <h4 className="text-4xl font-bold text-slate-900 dark:text-white mb-3">주요 기여 및 성과</h4>
                      <div className="flex flex-col gap-4">
                        {project.contributions.map((cont, i) => (
                          <div key={i} className="bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 p-5 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                            <h5 className="text-3xl font-bold text-sky-600 dark:text-sky-400 mb-3 flex items-center gap-2">
                              <span className="w-2 h-2 rounded-full bg-sky-500"></span>
                              {cont.title}
                            </h5>
                            <div className="flex flex-col gap-2 text-2xl text-slate-700 dark:text-slate-300 leading-snug">
                              <div className="flex gap-2 items-start">
                                <span className="font-bold text-slate-900 dark:text-white shrink-0 px-2 py-0.5 bg-slate-100 dark:bg-slate-700 rounded text-xl">상황</span> 
                                <span className="mt-0.5">{cont.situation}</span>
                              </div>
                              <div className="flex gap-2 items-start">
                                <span className="font-bold text-slate-900 dark:text-white shrink-0 px-2 py-0.5 bg-slate-100 dark:bg-slate-700 rounded text-xl">해결</span> 
                                <span className="mt-0.5">{cont.solution.split('\n').join(' ')}</span>
                              </div>
                              <div className="flex gap-2 items-start">
                                <span className="font-bold text-slate-900 dark:text-white shrink-0 px-2 py-0.5 bg-slate-100 dark:bg-slate-700 rounded text-xl">결과</span> 
                                <span className="mt-0.5">{cont.result}</span>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
