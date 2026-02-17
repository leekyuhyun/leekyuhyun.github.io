"use client";

interface SeriesFiltersProps {
  categories: string[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

export default function SeriesFilters({
  categories,
  activeCategory,
  onCategoryChange,
}: SeriesFiltersProps) {
  return (
    <div className="flex flex-wrap gap-3 mb-12">
      <button
        onClick={() => onCategoryChange("All")}
        className={`px-4 py-2 rounded-xl text-sm font-bold transition-all border ${
          activeCategory === "All"
            ? "bg-sky-500 text-white border-sky-500 dark:bg-amber-400 dark:text-zinc-900 dark:border-amber-400"
            : "bg-transparent text-zinc-500 border-zinc-200 dark:border-zinc-800 hover:border-sky-500 dark:hover:border-amber-400"
        }`}
      >
        All
      </button>
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onCategoryChange(category)}
          className={`px-4 py-2 rounded-xl text-sm font-bold transition-all border ${
            activeCategory === category
              ? "bg-sky-500 text-white border-sky-500 dark:bg-amber-400 dark:text-zinc-900 dark:border-amber-400"
              : "bg-transparent text-zinc-500 border-zinc-200 dark:border-zinc-800 hover:border-sky-500 dark:hover:border-amber-400"
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
}
