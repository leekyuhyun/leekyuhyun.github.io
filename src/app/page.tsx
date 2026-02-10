import Link from "next/link";
import { Hero } from "@/components/hero";
import { ProjectCard } from "@/components/project-card";
import { BlogPostCard } from "@/components/blog-post-card";
import { AboutSection } from "@/components/about-section";
import { projects, blogPosts } from "@/lib/data";

export default function Home() {
  const featuredProjects = projects.slice(0, 3);
  const recentPosts = blogPosts.slice(0, 3);

  return (
    <>
      <Hero />

      {/* Projects Section */}
      <section className="py-20">
        <div className="mx-auto max-w-5xl px-6">
          <div className="mb-8 flex items-end justify-between">
            <h2 className="text-2xl font-bold tracking-tight text-foreground">
              {"프로젝트"}
            </h2>
            <Link
              href="/projects"
              className="text-sm font-medium text-primary hover:underline"
            >
              {"전체 보기"}
            </Link>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="border-t border-border/60 bg-muted/30 py-20">
        <div className="mx-auto max-w-5xl px-6">
          <div className="mb-8 flex items-end justify-between">
            <h2 className="text-2xl font-bold tracking-tight text-foreground">
              {"최근 글"}
            </h2>
            <Link
              href="/blog"
              className="text-sm font-medium text-primary hover:underline"
            >
              {"전체 보기"}
            </Link>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {recentPosts.map((post) => (
              <BlogPostCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </section>

      <AboutSection />
    </>
  );
}
