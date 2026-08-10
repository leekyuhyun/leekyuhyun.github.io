import { PROFILE_DATA } from "../data/profile";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 dark:border-slate-800 px-5 py-8 text-center text-xs font-medium text-slate-400 print:hidden">
      © {new Date().getFullYear()} {PROFILE_DATA.name} · Built with Next.js
    </footer>
  );
}
