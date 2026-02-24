import { getAllPosts } from "@/lib/blog";
import SearchView from "@/views/search";

export default function SearchPage() {
  const posts = getAllPosts();
  return <SearchView posts={posts} />;
}
