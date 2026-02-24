import { Suspense } from "react";
import { getAllPosts } from "@/lib/blog";
import SearchView from "@/views/search";

export default function SearchPage() {
  const posts = getAllPosts();
  return (
    <Suspense
      fallback={
        <div className="max-w-3xl mx-auto px-6 py-16 text-zinc-400">
          검색 중...
        </div>
      }
    >
      <SearchView posts={posts} />
    </Suspense>
  );
}
