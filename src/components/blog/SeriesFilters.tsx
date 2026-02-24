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
  const all = ["All", ...categories];

  return (
    <div className="flex flex-col items-center mb-14">
      <div className="flex flex-wrap justify-center gap-2">
        {all.map((category) => {
          const isActive = activeCategory === category;
          return (
            <button
              key={category}
              onClick={() => onCategoryChange(category)}
              className={`relative px-5 py-2 text-sm font-semibold rounded-full transition-all duration-200 ${
                isActive
                  ? "text-white dark:text-zinc-900"
                  : "text-zinc-500 dark:text-zinc-400 hover:text-zinc-800 dark:hover:text-zinc-200"
              }`}
            >
              {isActive && (
                <span className="absolute inset-0 rounded-full bg-sky-500 dark:bg-amber-400 transition-all duration-200" />
              )}
              <span className="relative z-10">{category}</span>
            </button>
          );
        })}
      </div>
      <div className="mt-4 w-full max-w-xs h-px bg-linear-to-r from-transparent via-zinc-200 dark:via-zinc-700 to-transparent" />
    </div>
  );
}
