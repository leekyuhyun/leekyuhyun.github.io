import type { Metadata } from "next";
import { BlogPostCard } from "@/components/blog-post-card";
import { blogPosts } from "@/lib/data";

export const metadata: Metadata = {
  title: "Blog | Kyuhyun Lee",
  description: "Thoughts on development, technology, and the things I learn.",
};

export default function BlogPage() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mb-10 flex flex-col gap-2">
          <h1 className="text-3xl font-bold tracking-tight text-foreground">
            Blog
          </h1>
          <p className="text-base text-muted-foreground">
            Thoughts on development, technology, and the things I learn.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <BlogPostCard key={post.slug} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
}
