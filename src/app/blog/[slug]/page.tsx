import posts from "@/data/blogPosts.json";
import BlogDetailView, { BlogPost } from "@/views/blogdetail";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return (posts as BlogPost[]).map((post) => ({
    slug: post.url_slug,
  }));
}

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
// 테스트중 제발 되라..
