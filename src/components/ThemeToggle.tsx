"use client";

import { useState, useEffect, useRef } from "react";
import { useTheme } from "next-themes";
import { Sun, Moon, Monitor } from "lucide-react";

export default function ThemeToggle() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative flex items-center" ref={dropdownRef} suppressHydrationWarning>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 rounded-full border border-slate-300 dark:border-slate-700 text-slate-500 dark:text-slate-400 hover:border-slate-950 hover:text-slate-950 dark:hover:border-white dark:hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-sky-300/50"
        aria-label="화면 테마 선택"
        aria-haspopup="menu"
        aria-expanded={isOpen}
      >
        <Monitor className="w-4 h-4" aria-hidden="true" />
      </button>

      {isOpen && (
        <div role="menu" aria-label="화면 테마" className="absolute right-0 top-full mt-2 w-36 py-2 bg-white dark:bg-slate-800 rounded-2xl shadow-lg border border-slate-100 dark:border-slate-700 z-50 overflow-hidden transform origin-top-right transition-all animate-in fade-in slide-in-from-top-2">
          <button
            onClick={() => { setTheme('light'); setIsOpen(false); }}
            className={`w-full flex items-center gap-3 px-4 py-2.5 text-sm transition-colors ${theme === 'light' ? 'text-sky-500 bg-sky-50 dark:text-sky-400 dark:bg-slate-700/50 font-bold' : 'text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700'}`}
          >
            <Sun className="w-5 h-5" /> 라이트
          </button>
          <button
            onClick={() => { setTheme('dark'); setIsOpen(false); }}
            className={`w-full flex items-center gap-3 px-4 py-2.5 text-sm transition-colors ${theme === 'dark' ? 'text-sky-500 bg-sky-50 dark:text-sky-400 dark:bg-slate-700/50 font-bold' : 'text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700'}`}
          >
            <Moon className="w-5 h-5" /> 다크
          </button>
          <button
            onClick={() => { setTheme('system'); setIsOpen(false); }}
            className={`w-full flex items-center gap-3 px-4 py-2.5 text-sm transition-colors ${theme === 'system' ? 'text-sky-500 bg-sky-50 dark:text-sky-400 dark:bg-slate-700/50 font-bold' : 'text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700'}`}
          >
            <Monitor className="w-5 h-5" /> 시스템
          </button>
        </div>
      )}
    </div>
  );
}
