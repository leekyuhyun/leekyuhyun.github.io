import { SKILLS_DATA } from "../data/skills";

export default function Skills() {
  return (
    <section>
      <h2 className="text-xl md:text-2xl font-bold text-slate-800 dark:text-slate-200 mb-4 border-b border-slate-200 dark:border-slate-700 pb-2">
        기술 스택
      </h2>
      <div className="flex flex-col gap-5 md:gap-6">
        {SKILLS_DATA.map((group) => (
          <div key={group.category} className="flex flex-col gap-2 md:gap-3">
            <h3 className="text-sm md:text-base font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
              {group.category}
            </h3>
            <ul className="flex flex-wrap gap-2">
              {group.items.map((skill) => (
                <li key={skill}>
                  <span className="inline-block px-2.5 py-0.5 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-sky-600 dark:text-sky-400 rounded-[20px] text-sm md:text-base font-medium transition-colors cursor-default">
                    {skill}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
