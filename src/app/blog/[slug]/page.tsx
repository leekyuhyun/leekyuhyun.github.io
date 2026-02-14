import posts from "@/data/blogPosts.json";
import BlogDetailView, { BlogPost } from "@/views/blogdetail"; // 타입 가져오기
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function BlogDetailPage({ params }: Props) {
  const { slug } = await params;

  const post = (posts as BlogPost[]).find((p) => p.url_slug === slug);

  if (!post) {
    notFound();
  }

  return <BlogDetailView post={post} />;
}
