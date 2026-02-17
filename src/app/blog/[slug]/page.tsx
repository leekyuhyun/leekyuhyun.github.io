import { getAllPosts, getPostBySlug } from "@/lib/blog";
import BlogDetailView from "@/views/blogdetail";
import { serialize } from "next-mdx-remote/serialize";
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
  let postData;
  try {
    const post = getPostBySlug(slug);
    const mdxSource = await serialize(post.content);

    postData = {
      frontMatter: post.frontMatter,
      content: mdxSource,
    };
  } catch {
    notFound();
  }

  return (
    <BlogDetailView post={postData.frontMatter} content={postData.content} />
  );
}
