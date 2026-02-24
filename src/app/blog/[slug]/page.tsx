import { getAllPosts, getPostBySlug } from "@/lib/blog";
import BlogDetailView from "@/views/blogdetail";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const post = getPostBySlug(slug);
  if (!post) notFound();

  return <BlogDetailView post={post.frontMatter} content={post.content} />;
}
