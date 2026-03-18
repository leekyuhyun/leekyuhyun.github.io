'use client';

import { useState } from 'react';
import ProjectCard from '@/components/project/ProjectCard';
import ProjectFilters from '@/components/project/ProjectFilters';
import ProjectSortButton from '@/components/project/ProjectSortButton';
import { Project } from '@/lib/project';

export default function ProjectView({ projects }: { projects: Project[] }) {
  const [activeCategory, setActiveCategory] = useState('All');
  const [sort, setSort] = useState<'newest' | 'oldest'>('newest');

  const categories = Array.from(new Set(projects.map((p) => p.type).filter(Boolean))) as string[];

  const filtered = (
    activeCategory === 'All' ? [...projects] : projects.filter((p) => p.type === activeCategory)
  ).sort((a, b) =>
    sort === 'newest' ? (a.endDate < b.endDate ? 1 : -1) : a.endDate > b.endDate ? 1 : -1,
  );

  return (
    <div className="max-w-6xl mx-auto px-6 py-10 font-sans">
      <header className="mb-16">
        <h2 className="text-4xl font-bold text-zinc-900 dark:text-zinc-100 mb-4">프로젝트</h2>
        <p className="text-zinc-500">직접 고민하고 만들어온 결과물들입니다.</p>
      </header>

      <ProjectFilters
        categories={categories}
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
      />

      <div className="flex justify-end mb-6">
        <ProjectSortButton sort={sort} onSortChange={setSort} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-20">
        {filtered.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </div>
  );
}
