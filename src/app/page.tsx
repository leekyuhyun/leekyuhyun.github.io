import { Cloud } from "lucide-react"
import { getProjectPosts, getBlogPosts } from "@/lib/mdx"
import { ContentCarousel } from "@/components/content-carousel"
import { ProjectCard } from "@/components/project-card"

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

interface Post {
  slug: string
  title: string
  excerpt: string
  image: string
  date: string | Date
}

export default function HomePage() {
  const allProjects = getProjectPosts() as unknown as Project[]
  const featuredProjects = allProjects.slice(0, 6)

  const allPosts = getBlogPosts()
  const recentPosts = allPosts.slice(0, 6) as unknown as Post[]

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-secondary/50 py-24">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent" />
        <div className="relative mx-auto flex max-w-5xl flex-col items-center px-6 text-center">
          <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10">
            <Cloud className="h-8 w-8 text-primary" />
          </div>
          <h1 className="mb-4 text-balance text-4xl font-bold tracking-tight text-foreground md:text-5xl">
            {"KyuHyun's Cloud"}
          </h1>
          <p className="max-w-lg text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
            기록하고, 성장하고, 공유하는 공간
          </p>
        </div>
      </section>

      {/* Projects Carousel */}
      <div className="mx-auto max-w-5xl px-6">
        <ContentCarousel title="프로젝트" viewAllHref="/projects">
          {featuredProjects.map((project) => (
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
        </ContentCarousel>
      </div>

      {/* Blog Carousel */}
      <div className="border-t border-border/40 bg-secondary/20">
        <div className="mx-auto max-w-5xl px-6">
          <ContentCarousel title="최신 블로그" viewAllHref="/blog">
            {recentPosts.map((post) => (
              <ProjectCard
                key={post.slug}
                title={post.title}
                description={post.excerpt}
                image={post.image}
                startDate={post.date}
                displayDate={
                  post.date instanceof Date
                    ? post.date.toLocaleDateString("ko-KR")
                    : String(post.date)
                }
                href={`/blog/${post.slug}`}
                hideDate={false}
              />
            ))}
          </ContentCarousel>
        </div>
      </div>
    </>
  )
}
