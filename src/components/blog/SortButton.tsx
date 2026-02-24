"use client";

import { ArrowUpDown } from "lucide-react";

interface SortButtonProps {
  sort: "newest" | "oldest";
  onSortChange: (sort: "newest" | "oldest") => void;
}

export default function SortButton({ sort, onSortChange }: SortButtonProps) {
  return (
    <button
      onClick={() => onSortChange(sort === "newest" ? "oldest" : "newest")}
      className="flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-semibold text-zinc-500 dark:text-zinc-400 border border-zinc-200 dark:border-zinc-700 hover:border-sky-400 dark:hover:border-amber-400 hover:text-sky-500 dark:hover:text-amber-400 transition-all duration-200"
    >
      <ArrowUpDown className="w-3.5 h-3.5" />
      {sort === "newest" ? "최신순" : "오래된순"}
    </button>
  );
}
