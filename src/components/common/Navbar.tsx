"use client";

import Link from "next/link";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Sun, Moon, Monitor, ChevronDown } from "lucide-react";
import Search from "./Search";

export default function Navbar() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const raf = requestAnimationFrame(() => {
      setMounted(true);
    });
    return () => cancelAnimationFrame(raf);
  }, []);

  if (!mounted) {
    return <header className="h-16 w-full px-8 sm:px-16" />;
  }

  return (
    <header className="sticky top-0 z-100 w-full bg-white/80 dark:bg-zinc-950/80 backdrop-blur-md border-b border-zinc-200 dark:border-zinc-800 transition-all">
      <div className="max-w-6xl mx-auto h-16 flex items-center justify-between px-6">
        <h1 className="h-full flex items-center">
          <Link
            href="/"
            className="relative group flex items-center justify-center transition-all duration-300"
          >
            <span
              className="relative z-20 px-5 py-2 text-3xl font-bold font-gaegu
                           text-sky-400 dark:text-amber-300 
                           transition-colors duration-500
                           group-hover:text-sky-500 dark:group-hover:text-amber-200
                           dark:drop-shadow-[0_0_8px_rgba(252,211,77,0.5)]
                           leading-none translate-y-[1.5px]"
            >
              Kyuloud
            </span>
            <div
              className="absolute inset-0 z-10 
                      bg-sky-100/50 dark:bg-amber-900/20 
                      rounded-2xl 
                      border border-sky-200/50 dark:border-amber-700/30
                      shadow-sm
                      transition-all duration-500
                      group-hover:bg-sky-100 dark:group-hover:bg-amber-900/40
                      group-hover:shadow-md dark:group-hover:border-amber-500/50"
            />
          </Link>
        </h1>

        <nav className="flex items-center gap-6 sm:gap-8 h-full">
          <ul className="hidden md:flex items-center gap-8 font-gaegu font-normal text-zinc-600 dark:text-zinc-300 text-lg">
            <li>
              <Link
                href="/about"
                className="hover:text-sky-500 dark:hover:text-amber-300 transition-colors"
              >
                소개
              </Link>
            </li>
            <li>
              <Link
                href="/project"
                className="hover:text-sky-500 dark:hover:text-amber-300 transition-colors"
              >
                프로젝트
              </Link>
            </li>
            <li>
              <a
                href="/blog"
                className="hover:text-sky-500 dark:hover:text-amber-300 transition-colors"
              >
                블로그
              </a>
            </li>
          </ul>

          <div className="flex items-center gap-4">
            <Search />
            <div className="relative">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-1 rounded-full border border-zinc-200 p-1.5 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-sm transition-all hover:bg-zinc-50 dark:hover:bg-zinc-800"
              >
                {resolvedTheme === "dark" ? (
                  <Moon className="h-4 w-4 text-yellow-400" />
                ) : (
                  <Sun className="h-4 w-4 text-orange-500" />
                )}
                <ChevronDown
                  className={`h-3 w-3 transition-transform ${isOpen ? "rotate-180" : ""}`}
                />
              </button>

              {isOpen && (
                <div className="absolute right-0 mt-2 w-32 rounded-xl border border-zinc-200 bg-white p-1 shadow-lg dark:border-zinc-800 dark:bg-zinc-900 animate-in fade-in zoom-in duration-200">
                  {[
                    { name: "Light", value: "light", icon: Sun },
                    { name: "Dark", value: "dark", icon: Moon },
                    { name: "System", value: "system", icon: Monitor },
                  ].map((item) => (
                    <button
                      key={item.value}
                      onClick={() => {
                        setTheme(item.value);
                        setIsOpen(false);
                      }}
                      className={`flex w-full items-center gap-2 rounded-lg px-3 py-1.5 text-sm transition-colors ${
                        theme === item.value
                          ? "bg-sky-50 text-sky-600 dark:bg-sky-900/20 dark:text-sky-400"
                          : "text-zinc-600 hover:bg-zinc-50 dark:text-zinc-400 dark:hover:bg-zinc-800"
                      }`}
                    >
                      <item.icon className="h-4 w-4" />
                      {item.name}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
