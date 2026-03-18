import Link from 'next/link';
import Image from 'next/image';
import { Project } from '@/lib/project';

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link href={`/project/${project.slug}`} className="group">
      <div className="flex flex-col h-full bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800 overflow-hidden transition-all hover:shadow-xl hover:border-sky-500 dark:hover:border-amber-400">
        <div className="relative h-52 overflow-hidden bg-zinc-100 dark:bg-zinc-800">
          <Image
            src={project.thumbnail || '/images/Profile.png'}
            alt={project.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            unoptimized
          />
          <div className="absolute top-3 right-3 px-2 py-1 bg-black/50 backdrop-blur-md text-white text-[10px] rounded-md font-bold uppercase">
            {project.type}
          </div>
        </div>

        <div className="p-6 flex flex-col grow">
          <div className="text-xs font-medium text-zinc-400 mb-2">
            {project.startDate} ~ {project.endDate}
          </div>
          <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 mb-2 group-hover:text-sky-500 dark:group-hover:text-amber-400 transition-colors">
            {project.title}
          </h3>
          <p className="text-zinc-500 dark:text-zinc-400 text-sm line-clamp-2 mb-4 grow">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-1.5">
            {project.tags?.slice(0, 4).map((tag) => (
              <span
                key={tag}
                className="text-[10px] px-2 py-0.5 rounded-md bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
}
