import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-screen-xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="text-3xl font-bold text-slate-900 dark:text-white flex items-center gap-1">
          <span>kyulee</span>
          <span className="text-sky-500">.log</span>
        </Link>
        <ThemeToggle />
      </div>
    </header>
  );
}
