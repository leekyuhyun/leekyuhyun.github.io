import { SKILLS_DATA } from "../data/skills";

export default function Skills() {
  return (
    <section>
      <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-2 border-b border-slate-200 dark:border-slate-700 pb-1">
        Skills
      </h2>
      <div className="flex flex-wrap gap-2">
        {SKILLS_DATA.map((skill) => (
          <span 
            key={skill} 
            className="px-3 bg-white dark:bg-slate-800 rounded text-2xl text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 shadow-sm"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}
