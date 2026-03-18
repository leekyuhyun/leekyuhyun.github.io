import { getAllProjects, getProjectBySlug } from '@/lib/project';
import ProjectDetailView from '@/views/projectdetail';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  const projects = getAllProjects();
  return projects.map((project) => ({ slug: project.slug }));
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  const project = getProjectBySlug(slug);
  if (!project) notFound();

  return <ProjectDetailView project={project.frontMatter} content={project.content} />;
}
