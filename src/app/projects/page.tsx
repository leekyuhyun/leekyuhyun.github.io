import type { Metadata } from "next"
import { ProjectCard } from "@/components/project-card"
import { getProjectPosts } from "@/lib/mdx"

export const metadata: Metadata = {
  title: "프로젝트 | 이규현",
  description: "제가 만들고 기여한 프로젝트 모음입니다.",
}

interface Project {
  slug: string
  title: string
  description: string
  thumbnail?: string
  startDate: string | Date
  endDate?: string | Date
  tags: string[]
  contribution?: string
}

export default function ProjectsPage() {
  const posts = getProjectPosts() as unknown as Project[]

  return (
    <section className="py-16">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mb-8">
          <h1 className="mb-2 text-3xl font-bold tracking-tight text-foreground">
            프로젝트
          </h1>
          <p className="text-base text-muted-foreground">
            제가 만들고 기여한 프로젝트 모음입니다.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((project) => (
            <ProjectCard
              key={project.slug}
              title={project.title}
              description={project.description}
              image={project.thumbnail || "/placeholder.svg"}
              startDate={project.startDate}
              endDate={project.endDate}
              tags={project.tags}
              href={`/projects/${project.slug}`}
              contribution={project.contribution}
            />
          ))}
        </div>
        {posts.length === 0 && (
          <p className="py-16 text-center text-muted-foreground">
            아직 등록된 프로젝트가 없습니다.
          </p>
        )}
      </div>
    </section>
  )
}
