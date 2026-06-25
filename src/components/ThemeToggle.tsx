"use client";

import { useState, useEffect, useRef } from "react";
import { useTheme } from "./ThemeProvider";
import { Sun, Moon, Monitor } from "lucide-react";

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const dropdownRef = useRef<HTMLDivElement>(null);

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
    
    // Close dropdown when clicking outside
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  if (!mounted) {
    return <div className="w-10 h-10" />;
  }

  const Icon = theme === 'light' ? Sun : theme === 'dark' ? Moon : Monitor;

  return (
    <div className="relative flex items-center" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-sky-100 hover:text-sky-500 dark:hover:bg-slate-700 dark:hover:text-sky-400 transition-colors focus:outline-none focus:ring-2 focus:ring-sky-300/50"
        aria-label="Toggle theme dropdown"
      >
        <Icon className="w-6 h-6" />
      </button>

      {isOpen && (
        <div className="absolute right-0 top-full mt-2 w-36 py-2 bg-white dark:bg-slate-800 rounded-2xl shadow-lg border border-slate-100 dark:border-slate-700 z-50 overflow-hidden transform origin-top-right transition-all animate-in fade-in slide-in-from-top-2">
          <button
            onClick={() => { setTheme('light'); setIsOpen(false); }}
            className={`w-full flex items-center gap-3 px-4 py-2.5 text-2xl transition-colors ${theme === 'light' ? 'text-sky-500 bg-sky-50 dark:text-sky-400 dark:bg-slate-700/50 font-bold' : 'text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700'}`}
          >
            <Sun className="w-5 h-5" /> 라이트
          </button>
          <button
            onClick={() => { setTheme('dark'); setIsOpen(false); }}
            className={`w-full flex items-center gap-3 px-4 py-2.5 text-2xl transition-colors ${theme === 'dark' ? 'text-sky-500 bg-sky-50 dark:text-sky-400 dark:bg-slate-700/50 font-bold' : 'text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700'}`}
          >
            <Moon className="w-5 h-5" /> 다크
          </button>
          <button
            onClick={() => { setTheme('system'); setIsOpen(false); }}
            className={`w-full flex items-center gap-3 px-4 py-2.5 text-2xl transition-colors ${theme === 'system' ? 'text-sky-500 bg-sky-50 dark:text-sky-400 dark:bg-slate-700/50 font-bold' : 'text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700'}`}
          >
            <Monitor className="w-5 h-5" /> 시스템
          </button>
        </div>
      )}
    </div>
  );
}
