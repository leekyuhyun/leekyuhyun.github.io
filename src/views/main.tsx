"use client";

import Hero from "@/components/home/hero";
import RecentPosts from "@/components/home/list/RecentPosts";
import { Post } from "@/lib/blog";

export default function MainView({ recentPosts }: { recentPosts: Post[] }) {
  return (
    <>
      <Hero />
      <RecentPosts posts={recentPosts} />
    </>
  );
}
