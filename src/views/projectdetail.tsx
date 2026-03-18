'use client';

import { Project } from '@/lib/project';
import ProjectDetailHeader from '@/components/project/ProjectDetailHeader';
import ProjectDetailContent from '@/components/project/ProjectDetailContent';

interface ProjectDetailViewProps {
  project: Project;
  content: string;
}

export default function ProjectDetailView({ project, content }: ProjectDetailViewProps) {
  return (
    <article className="max-w-3xl mx-auto px-6 py-20 font-sans">
      <ProjectDetailHeader project={project} />
      <ProjectDetailContent content={content} />
    </article>
  );
}
