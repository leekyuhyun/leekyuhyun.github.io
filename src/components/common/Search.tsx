"use client";

import { useState, useRef, useEffect } from "react";
import { Search as SearchIcon, X } from "lucide-react";

export default function Search() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const searchInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isSearchOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [isSearchOpen]);

  return (
    <div
      className={`relative flex items-center transition-all duration-300 ease-in-out ${isSearchOpen ? "w-48 sm:w-72" : "w-10"}`}
    >
      <input
        ref={searchInputRef}
        type="text"
        placeholder="검색어를 입력하세요..."
        className={`w-full py-2 pl-10 pr-4 text-sm rounded-full border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 outline-hidden transition-all duration-300 ${
          isSearchOpen
            ? "opacity-100 translate-x-0"
            : "opacity-0 translate-x-4 pointer-events-none"
        }`}
      />
      <button
        onClick={() => setIsSearchOpen(!isSearchOpen)}
        className="absolute left-0 p-2.5 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors text-zinc-500 dark:text-zinc-400 z-10"
        aria-label="Search Toggle"
      >
        {isSearchOpen ? (
          <X className="h-5 w-5" />
        ) : (
          <SearchIcon className="h-5 w-5" />
        )}
      </button>
    </div>
  );
}
