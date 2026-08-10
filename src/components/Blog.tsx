import { BLOG_DATA } from "../data/blog";

export default function Blog() {
  if (!BLOG_DATA || BLOG_DATA.length === 0) return null;

  return (
    <section aria-labelledby="blog-heading">
      <div className="section-header !mb-6">
        <p className="section-eyebrow">Writing</p>
        <div className="mt-2 flex items-center gap-2">
          <h2 id="blog-heading" className="section-title !mt-0">
            관련 기술 기록
          </h2>
          <span className="text-xs font-bold text-sky-600 dark:text-sky-400 bg-sky-50 dark:bg-sky-900/30 px-2 py-0.5 rounded-full">
            {BLOG_DATA.length}
          </span>
        </div>
        <p className="section-description">
          프로젝트에서 마주한 문제와 해결 과정을 정리했습니다.
        </p>
      </div>

      <ul className="divide-y divide-slate-200 dark:divide-slate-800 border-t border-slate-300 dark:border-slate-700">
        {BLOG_DATA.map((post, index) => (
          <li key={index}>
            <a
              href={post.url}
              target="_blank"
              rel="noreferrer"
              className="group grid grid-cols-[auto_1fr_auto] items-start gap-x-3 gap-y-1 py-4 transition-colors"
            >
              <span className="mt-0.5 text-xs font-bold text-sky-600 dark:text-sky-400">
                {post.tag}
              </span>
              <span className="min-w-0">
                <span className="block text-base font-bold text-slate-900 dark:text-white group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors">
                  {post.title}
                </span>
                <span className="block mt-1 text-sm text-slate-500 dark:text-slate-400 line-clamp-1">
                  {post.description}
                </span>
              </span>
              <span aria-hidden="true" className="text-slate-400 group-hover:text-sky-500 group-hover:translate-x-0.5 transition-all">
                ↗
              </span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
