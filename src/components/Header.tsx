import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-slate-50/85 dark:bg-slate-950/85 backdrop-blur-xl border-b border-slate-200/80 dark:border-slate-800/80">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 h-16 flex items-center justify-between">
        <Link href="/" className="text-sm font-black tracking-[0.16em] text-slate-950 dark:text-white" aria-label="이규현 포트폴리오 홈">
          Leekyuhyun.Portfolio
        </Link>
        <div className="flex items-center gap-2 sm:gap-4">
          <nav aria-label="주요 메뉴" className="hidden sm:flex items-center gap-1 text-sm font-semibold text-slate-500 dark:text-slate-400">
            <a href="#projects" className="px-3 py-2 rounded-lg hover:text-slate-950 dark:hover:text-white">프로젝트</a>
            <a href="#values" className="px-3 py-2 rounded-lg hover:text-slate-950 dark:hover:text-white">업무 방식</a>
            <a href="#ai-workflow" className="px-3 py-2 rounded-lg hover:text-slate-950 dark:hover:text-white">AI 활용</a>
            <a href="#skills" className="px-3 py-2 rounded-lg hover:text-slate-950 dark:hover:text-white">기술</a>
            <a href="#blog" className="px-3 py-2 rounded-lg hover:text-slate-950 dark:hover:text-white">블로그</a>
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="px-3 py-2 rounded-lg hover:text-slate-950 dark:hover:text-white">이력서</a>
          </nav>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
