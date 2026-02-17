import { getAllPosts } from "@/lib/blog";
import BlogView from "@/views/blog";

export default function BlogPage() {
  const posts = getAllPosts();
  return <BlogView posts={posts} />;
}
