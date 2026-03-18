import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export interface Project {
  slug: string;
  type: 'team' | 'solo';
  title: string;
  description: string;
  thumbnail?: string;
  startDate: string;
  endDate: string;
  contribution?: string;
  tags?: string[];
  github?: string;
}

const projectsDirectory = path.join(process.cwd(), 'content/Project');

export function getAllProjects(): Project[] {
  if (!fs.existsSync(projectsDirectory)) return [];

  const types = ['team', 'solo'] as const;
  let allProjects: Project[] = [];

  types.forEach((type) => {
    const typeDir = path.join(projectsDirectory, type);
    if (!fs.existsSync(typeDir)) return;

    const fileNames = fs.readdirSync(typeDir);
    const projects = fileNames
      .filter((fileName) => fileName.endsWith('.md'))
      .map((fileName) => {
        const slug = fileName.replace(/\.md$/, '');
        const fullPath = path.join(typeDir, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');
        const { data } = matter(fileContents);

        return {
          slug,
          type,
          ...(data as Omit<Project, 'slug' | 'type'>),
        };
      });
    allProjects = [...allProjects, ...projects];
  });

  return allProjects.sort((a, b) => (a.endDate < b.endDate ? 1 : -1));
}

export function getProjectBySlug(slug: string) {
  const baseDir = path.join(process.cwd(), 'content/Project');
  const types = ['team', 'solo'] as const;

  for (const type of types) {
    const fullPath = path.join(baseDir, type, `${slug}.md`);
    if (fs.existsSync(fullPath)) {
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data, content } = matter(fileContents);
      return {
        frontMatter: {
          slug,
          type,
          ...data,
        } as Project,
        content,
      };
    }
  }
  return null;
}
