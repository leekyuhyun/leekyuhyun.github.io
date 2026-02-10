import type { Metadata } from "next";
import { BlogPostCard } from "@/components/blog-post-card";
import { blogPosts } from "@/lib/data";

export const metadata: Metadata = {
  title: "블로그 | 이규현",
  description: "개발, 기술, 그리고 배운 것들에 대한 생각을 기록합니다.",
};

export default function BlogPage() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mb-10 flex flex-col gap-2">
          <h1 className="text-3xl font-bold tracking-tight text-foreground">
            {"블로그"}
          </h1>
          <p className="text-base text-muted-foreground">
            {"개발, 기술, 그리고 배운 것들에 대한 생각을 기록합니다."}
          </p>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <BlogPostCard key={post.slug} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
}
