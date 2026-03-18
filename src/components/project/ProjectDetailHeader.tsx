'use client';

import Image from 'next/image';
import { Project } from '@/lib/project';

export default function ProjectDetailHeader({ project }: { project: Project }) {
  return (
    <header className="mb-12">
      <div className="flex flex-wrap gap-2 mb-6">
        <span className="px-3 py-1 bg-sky-50 dark:bg-amber-900/20 text-sky-600 dark:text-amber-300 text-xs font-bold rounded-full uppercase tracking-wider">
          {project.type}
        </span>
        {project.tags?.map((tag) => (
          <span
            key={tag}
            className="px-3 py-1 bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 text-xs font-bold rounded-full uppercase tracking-wider"
          >
            {tag}
          </span>
        ))}
      </div>

      <h1 className="text-4xl md:text-5xl font-bold text-zinc-900 dark:text-zinc-100 mb-6 leading-tight">
        {project.title}
      </h1>

      <div className="flex flex-col gap-3 text-zinc-500 dark:text-zinc-400 text-sm font-medium mb-10">
        <div className="flex items-center gap-4">
          <span>
            {project.startDate} ~ {project.endDate}
          </span>
          <span className="w-1 h-1 bg-zinc-300 dark:bg-zinc-700 rounded-full" />
          <span>{project.contribution || '개인 프로젝트'}</span>
        </div>
        {project.github && (
          <div className="flex items-center gap-2">
            <span className="text-zinc-900 dark:text-zinc-200 font-bold">GitHub:</span>
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="text-sky-500 hover:underline"
            >
              {project.github.replace('https://github.com/', '')}
            </a>
          </div>
        )}
      </div>

      {/* 썸네일 - 블로그와 동일한 스타일 */}
      {project.thumbnail && (
        <div className="rounded-3xl overflow-hidden border border-zinc-100 dark:border-zinc-800 relative aspect-video">
          <Image
            src={project.thumbnail}
            alt={project.title}
            fill
            className="object-cover"
            unoptimized
          />
        </div>
      )}
    </header>
  );
}
