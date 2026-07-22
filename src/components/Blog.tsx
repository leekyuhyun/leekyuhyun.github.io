import { BLOG_DATA } from "../data/blog";

export default function Blog() {
  if (!BLOG_DATA || BLOG_DATA.length === 0) return null;

  return (
    <section className="pt-4 md:pt-8">
      <div className="flex items-center gap-3 mb-6 md:mb-8 border-b border-slate-200 dark:border-slate-700 pb-3">
        <h2 className="text-xl md:text-2xl font-bold text-slate-800 dark:text-slate-200">기술 블로그</h2>
        <span className="text-sm md:text-base font-bold text-sky-500 bg-sky-100 dark:bg-sky-900/30 px-3 py-0.5 md:py-1 rounded-full">
          {BLOG_DATA.length}
        </span>
      </div>

      <div className="flex flex-col gap-4 md:gap-6">
        {BLOG_DATA.map((post, index) => (
          <a
            key={index}
            href={post.url}
            target="_blank"
            rel="noreferrer"
            className="group flex flex-col gap-2 p-4 md:p-6 rounded-2xl transition-all duration-300 hover:bg-slate-50 dark:hover:bg-slate-800/50 hover:shadow-md border border-slate-100 dark:border-slate-800/60 hover:border-sky-100 dark:hover:border-sky-900/50"
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-1">
               <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white group-hover:text-sky-500 transition-colors flex items-center gap-2">
                 {post.title}
                 <svg className="w-5 h-5 text-sky-500 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 hidden md:block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                 </svg>
               </h3>
               <span className="text-xs md:text-sm font-semibold text-sky-600 dark:text-sky-400 bg-sky-50 dark:bg-sky-900/20 px-2.5 py-1 rounded-lg border border-sky-100/50 dark:border-sky-800/30 self-start md:self-auto shrink-0">
                 {post.tag}
               </span>
            </div>
            <p className="text-base text-slate-600 dark:text-slate-400 line-clamp-2 md:line-clamp-3 leading-relaxed mt-1">
              {post.description}
            </p>
          </a>
        ))}
      </div>
    </section>
  );
}
