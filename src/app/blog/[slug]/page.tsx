import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, Calendar } from "lucide-react"
import { getBlogPost, getBlogPosts } from "@/lib/mdx"
import { MDXRemote } from "next-mdx-remote/rsc"
import TableOfContents from "@/components/toc"
import remarkGfm from "remark-gfm"
import rehypeSlug from "rehype-slug"
import rehypePrettyCode from "rehype-pretty-code"

const prettyCodeOptions = {
  theme: "github-dark",
  keepBackground: false,
  defaultLang: "plaintext",
}

export async function generateStaticParams() {
  const posts = getBlogPosts()
  return posts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const post = await getBlogPost(slug)
  if (!post) return { title: "글을 찾을 수 없습니다" }
  return {
    title: `${post.title} | 이규현`,
    description: post.excerpt,
  }
}

export default async function BlogDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = await getBlogPost(slug)
  if (!post) notFound()

  const dateDisplay =
    post.date instanceof Date
      ? post.date.toLocaleDateString("ko-KR", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })
      : post.date

  return (
    <div className="mx-auto max-w-5xl px-6 py-12">
      <div className="lg:grid lg:grid-cols-[1fr_200px] lg:gap-10">
        {/* Main content */}
        <article>
          {/* Tags */}
          <div className="mb-4 flex flex-wrap gap-2">
            {post.tags?.map((tag: string) => (
              <span
                key={tag}
                className="rounded-full bg-accent px-3 py-0.5 text-xs font-medium text-accent-foreground"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Title */}
          <h1 className="mb-4 text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            {post.title}
          </h1>

          {/* Date + Category */}
          <div className="mb-8 flex items-center gap-3 text-sm text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <Calendar className="h-3.5 w-3.5" />
              {dateDisplay}
            </span>
            <span className="text-primary/50">{"·"}</span>
            <span className="font-medium text-primary">
              {post.category || "General"}
            </span>
          </div>

          {/* MDX Content */}
          <div className="prose">
            <MDXRemote
              source={post.content || ""}
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
              href="/blog"
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
