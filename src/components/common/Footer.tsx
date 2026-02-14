import { Github, Mail, BookText } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-zinc-100 dark:border-zinc-800 bg-transparent py-6">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex flex-col items-center md:items-start gap-2">
            <p className="text-sm font-medium text-zinc-600 dark:text-zinc-300">
              © {currentYear} 이규현. All rights reserved.
            </p>
          </div>

          <div className="flex items-center gap-5">
            <a
              href="https://github.com/leekyuhyun"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-2 rounded-lg hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5 text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-zinc-100 transition-colors" />
            </a>
            <a
              href="https://velog.io/@leekh010502/"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-2 rounded-lg hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors"
              aria-label="Velog"
            >
              <BookText className="w-5 h-5 text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-zinc-100 transition-colors" />
            </a>
            <a
              href="mailto:leekh010502@gmail.com"
              className="group p-2 rounded-lg hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors"
              aria-label="Email"
            >
              <Mail className="w-5 h-5 text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-zinc-100 transition-colors" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
