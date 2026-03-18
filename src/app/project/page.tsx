import { getAllProjects } from '@/lib/project';
import ProjectView from '@/views/project';

export default function Page() {
  const projects = getAllProjects();
  return <ProjectView projects={projects} />;
}
