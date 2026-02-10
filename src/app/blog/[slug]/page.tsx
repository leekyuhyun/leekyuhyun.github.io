import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts, formatDate } from "@/lib/data";

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return { title: "글을 찾을 수 없습니다" };
  return {
    title: `${post.title} | 이규현`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) notFound();

  return (
    <article className="py-20">
      <div className="mx-auto max-w-3xl px-6">
        {/* Breadcrumb */}
        <nav className="mb-8 flex items-center gap-2 text-sm text-muted-foreground">
          <Link href="/blog" className="hover:text-primary transition-colors">
            {"블로그"}
          </Link>
          <ChevronRightIcon className="h-3.5 w-3.5" />
          <span className="truncate text-foreground">{post.title}</span>
        </nav>

        {/* Header */}
        <header className="mb-10 flex flex-col gap-4">
          <time className="text-sm text-muted-foreground">
            {formatDate(post.date)}
          </time>
          <h1 className="text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            {post.title}
          </h1>
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-accent px-3 py-0.5 text-xs font-medium text-accent-foreground"
              >
                {tag}
              </span>
            ))}
          </div>
        </header>

        {/* Content */}
        <div className="prose-sky prose max-w-none">
          {post.content.split("\n\n").map((block, i) => {
            if (block.startsWith("## ")) {
              return (
                <h2
                  key={i}
                  className="mb-4 mt-10 text-xl font-bold text-foreground"
                >
                  {block.replace("## ", "")}
                </h2>
              );
            }
            if (block.startsWith("### ")) {
              return (
                <h3
                  key={i}
                  className="mb-3 mt-8 text-lg font-semibold text-foreground"
                >
                  {block.replace("### ", "")}
                </h3>
              );
            }
            if (block.startsWith("```")) {
              const lines = block.split("\n");
              const code = lines.slice(1, -1).join("\n");
              return (
                <pre
                  key={i}
                  className="my-4 overflow-x-auto rounded-xl bg-muted p-4 text-sm leading-relaxed text-foreground"
                >
                  <code className="font-mono">{code}</code>
                </pre>
              );
            }
            if (block.match(/^\d+\./)) {
              const items = block.split("\n");
              return (
                <ol
                  key={i}
                  className="my-4 list-decimal space-y-1 pl-6 text-base leading-relaxed text-muted-foreground"
                >
                  {items.map((item, j) => (
                    <li key={j}>{item.replace(/^\d+\.\s*/, "")}</li>
                  ))}
                </ol>
              );
            }
            return (
              <p
                key={i}
                className="my-4 text-base leading-relaxed text-muted-foreground"
              >
                {block}
              </p>
            );
          })}
        </div>

        {/* Back link */}
        <div className="mt-16 border-t border-border/60 pt-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
          >
            <ArrowLeftIcon className="h-4 w-4" />
            {"모든 글 보기"}
          </Link>
        </div>
      </div>
    </article>
  );
}

function ChevronRightIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
}

function ArrowLeftIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="m12 19-7-7 7-7" />
      <path d="M19 12H5" />
    </svg>
  );
}
