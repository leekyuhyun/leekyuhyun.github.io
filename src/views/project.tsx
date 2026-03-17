'use client';

import ProjectHeader from '@/components/project/ProjectHeader';
import ProjectCard from '@/components/project/ProjectCard';

export default function ProjectView() {
  return (
    <div className="max-w-6xl mx-auto px-6 pt-10 pb-20 font-sans">
      <ProjectHeader />
      <ProjectCard />
    </div>
  );
}
