import { ArrowUpRight, Download } from "lucide-react";
import { PROFILE_DATA } from "../data/profile";
import { CONTACT_DATA } from "../data/contact";

export default function Profile() {
  const links = CONTACT_DATA.items.filter((item) =>
    ["Github", "LinkedIn", "Blog", "E-mail"].includes(item.label)
  );

  return (
    <div className="py-12 md:py-20 border-b border-slate-200 dark:border-slate-800">
      <p className="section-eyebrow mb-5">
        Full-stack developer · Frontend focused
      </p>
      <h1 className="max-w-4xl text-4xl md:text-6xl font-bold tracking-[-0.045em] leading-[1.08] text-slate-950 dark:text-white break-keep">
        프론트엔드를 중심으로<br className="hidden sm:block" /> <span className="text-sky-600 dark:text-sky-400">서비스의 전체 흐름</span>을 구현합니다.
      </h1>
      <p className="mt-6 max-w-3xl text-lg md:text-xl leading-relaxed text-slate-600 dark:text-slate-300 break-keep">
        {PROFILE_DATA.about}
      </p>

      <div className="mt-8 flex flex-wrap items-center gap-2">
        {links.map((item) => (
          <a
            key={item.label}
            href={item.href}
            target={item.href.startsWith("http") ? "_blank" : undefined}
            rel={item.href.startsWith("http") ? "noreferrer" : undefined}
            className="inline-flex items-center gap-1.5 rounded-full border border-slate-300 dark:border-slate-700 px-4 py-2 text-sm font-semibold text-slate-700 dark:text-slate-200 hover:border-slate-950 hover:text-slate-950 dark:hover:border-white dark:hover:text-white transition-colors"
          >
            {item.label === "Github" ? "GitHub" : item.label === "E-mail" ? "Email" : item.label}
            <ArrowUpRight className="size-3.5" aria-hidden="true" />
          </a>
        ))}
        <a
          href={PROFILE_DATA.resumeUrl}
          download={PROFILE_DATA.resumeFileName || true}
          className="inline-flex items-center gap-1.5 rounded-full bg-slate-950 dark:bg-white px-4 py-2 text-sm font-semibold text-white dark:text-slate-950 hover:bg-sky-600 dark:hover:bg-sky-400 transition-colors"
        >
          Resume
          <Download className="size-3.5" aria-hidden="true" />
        </a>
      </div>
    </div>
  );
}
