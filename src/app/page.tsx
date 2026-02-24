import MainView from "@/views/main";
import { getAllPosts } from "@/lib/blog";

export default function Home() {
  const recentPosts = getAllPosts().slice(0, 3);

  return (
    <div className="flex min-h-screen flex-col font-noto">
      <main className="grow">
        <MainView recentPosts={recentPosts} />
      </main>
    </div>
  );
}
