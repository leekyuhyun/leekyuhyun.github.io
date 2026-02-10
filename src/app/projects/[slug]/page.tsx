import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import { ArrowLeft, Github, Globe } from "lucide-react"
import { getProjectBySlug, getProjectPosts } from "@/lib/mdx"
import { MDXRemote } from "next-mdx-remote/rsc"
import TableOfContents from "@/components/toc"
import { ProjectInfo } from "@/components/project-info"
import remarkGfm from "remark-gfm"
import rehypeSlug from "rehype-slug"
import rehypePrettyCode from "rehype-pretty-code"

const prettyCodeOptions = {
  theme: "github-dark",
  keepBackground: false,
}

export async function generateStaticParams() {
  const posts = getProjectPosts()
  return posts.map((post: { slug: string }) => ({ slug: post.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const { frontmatter } = getProjectBySlug(slug)
  if (!frontmatter) return { title: "프로젝트를 찾을 수 없습니다" }
  return {
    title: `${frontmatter.title} | 이규현`,
    description: frontmatter.description,
  }
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const { frontmatter, content } = getProjectBySlug(slug)

  if (!frontmatter) notFound()

  return (
    <div className="mx-auto max-w-5xl px-6 py-12">
      <div className="lg:grid lg:grid-cols-[1fr_200px] lg:gap-10">
        {/* Main content */}
        <article>
          {/* Top bar */}
          <div className="mb-6 flex items-center justify-between">
            <Link
              href="/projects"
              className="flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              <ArrowLeft className="h-4 w-4" />
              모든 프로젝트
            </Link>
            {frontmatter.github && (
              <a
                href={frontmatter.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full border border-border/60 px-3 py-1.5 text-sm font-medium text-foreground transition-colors hover:bg-accent"
              >
                <Github className="h-3.5 w-3.5" />
                GitHub
              </a>
            )}
          </div>

          {/* Title & Description */}
          <h1 className="mb-3 text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            {frontmatter.title}
          </h1>
          <p className="mb-4 text-base leading-relaxed text-muted-foreground">
            {frontmatter.description}
          </p>

          {/* Tags */}
          <div className="mb-6 flex flex-wrap gap-1.5">
            {frontmatter.tags?.map((tag: string) => (
              <span
                key={tag}
                className="rounded-full bg-accent px-2.5 py-0.5 text-xs font-medium text-accent-foreground"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Thumbnail */}
          {frontmatter.thumbnail && (
            <div className="relative mb-8 aspect-video overflow-hidden rounded-2xl border border-border/60">
              <Image
                src={frontmatter.thumbnail}
                alt={frontmatter.title}
                fill
                className="object-cover"
              />
            </div>
          )}

          {/* Demo link */}
          {frontmatter.demo && (
            <a
              href={frontmatter.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="mb-8 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/85"
            >
              <Globe className="h-4 w-4" />
              라이브 데모 보러가기
            </a>
          )}

          {/* Project Info Cards */}
          <ProjectInfo
            startDate={frontmatter.startDate}
            endDate={frontmatter.endDate}
            tags={frontmatter.tags || []}
            type={frontmatter.type}
          />

          {/* MDX Content */}
          <div className="prose">
            <MDXRemote
              source={content}
              options={{
                mdxOptions: {
                  remarkPlugins: [remarkGfm],
                  rehypePlugins: [
                    rehypeSlug,
                    [rehypePrettyCode, prettyCodeOptions],
                  ],
                },
              }}
            />
          </div>

          {/* Back link */}
          <div className="mt-12 border-t border-border/60 pt-6">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
            >
              <ArrowLeft className="h-4 w-4" />
              목록으로 돌아가기
            </Link>
          </div>
        </article>

        {/* Sidebar TOC */}
        <aside className="hidden lg:block">
          <div className="sticky top-24">
            <TableOfContents />
          </div>
        </aside>
      </div>
    </div>
  )
}
