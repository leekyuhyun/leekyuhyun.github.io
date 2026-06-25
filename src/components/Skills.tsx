import { SKILLS_DATA } from "../data/skills";

export default function Skills() {
  return (
    <section>
      <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4 border-b border-slate-200 dark:border-slate-700 pb-1">
        Skills
      </h2>
      <div className="flex flex-col gap-3">
        {SKILLS_DATA.map((group) => (
          <div key={group.category} className="flex flex-col gap-0.5">
            <h3 className="text-2xl font-bold text-slate-700 dark:text-slate-300 leading-tight">
              {group.category}
            </h3>
            <div className="flex flex-wrap gap-1">
              {group.items.map((skill) => (
                <span 
                  key={skill} 
                  className="px-2 py-0.5 bg-white dark:bg-slate-800 rounded text-xl text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 shadow-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
