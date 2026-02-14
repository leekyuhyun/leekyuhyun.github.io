import posts from "@/data/blogPosts.json";
import BlogDetailView from "@/views/blogdetail";
import { notFound } from "next/navigation";

export default function BlogDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = posts.find((p: any) => p.url_slug === params.slug);

  if (!post) {
    notFound();
  }

  return <BlogDetailView post={post} />;
}
