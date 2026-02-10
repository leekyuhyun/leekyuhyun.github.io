"use client"

import { cn } from "@/lib/utils"

interface CategoryFilterProps {
  categories: string[]
  counts: Record<string, number>
  active: string
  onChange: (cat: string) => void
}

export function CategoryFilter({ categories, counts, active, onChange }: CategoryFilterProps) {
  return (
    <div className="mb-8 flex flex-wrap gap-2">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => onChange(cat)}
          className={cn(
            "rounded-full px-4 py-1.5 text-sm font-medium transition-colors",
            active === cat
              ? "bg-primary text-primary-foreground"
              : "bg-secondary text-secondary-foreground hover:bg-accent"
          )}
        >
          {cat}
          <span className="ml-1.5 text-xs opacity-70">{counts[cat] ?? 0}</span>
        </button>
      ))}
    </div>
  )
}
