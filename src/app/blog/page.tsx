import posts from "@/data/blogPosts.json";
import BlogDetailView from "@/views/blogdetail";
import { notFound } from "next/navigation";

interface Post {
  id: string;
  title: string;
  short_description: string;
  thumbnail: string;
  released_at: string;
  url_slug: string;
  body: string;
  tags: string[];
  series?: {
    name: string;
    url_slug: string;
  } | null;
}

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function BlogDetailPage({ params }: Props) {
  const { slug } = await params;
  const post = (posts as Post[]).find((p) => p.url_slug === slug);

  if (!post) {
    notFound();
  }

  return <BlogDetailView post={post} />;
}
