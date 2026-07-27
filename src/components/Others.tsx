import { OTHERS_DATA } from "../data/others";
import { GraduationCap, Award, Shield, Briefcase, Compass } from "lucide-react";

export default function Others() {
  const sections = [
    {
      title: "직무 교육",
      icon: Briefcase,
      items: OTHERS_DATA.training,
    },
    {
      title: "학력",
      icon: GraduationCap,
      items: OTHERS_DATA.education,
    },
    {
      title: "수상",
      icon: Award,
      items: OTHERS_DATA.awards,
    },
    {
      title: "기타 활동",
      icon: Compass,
      items: OTHERS_DATA.activities,
    },
    {
      title: "병역",
      icon: Shield,
      items: OTHERS_DATA.military,
    },
  ];

  return (
    <section className="pt-4 md:pt-8">
      <div className="flex items-center gap-3 mb-6 md:mb-8 border-b border-slate-200 dark:border-slate-700 pb-3">
        <h2 className="text-xl md:text-2xl font-bold text-slate-800 dark:text-slate-200">기타 이력</h2>
        <span className="text-sm md:text-base font-bold text-sky-500 bg-sky-100 dark:bg-sky-900/30 px-3 py-0.5 md:py-1 rounded-full">
          {sections.length}
        </span>
      </div>

      <div className="flex flex-col gap-4 md:gap-6">
        {sections.map((section, idx) => {
          if (!section.items || section.items.length === 0) return null;
          const Icon = section.icon;
          return (
            <article
              key={idx}
              className="group flex flex-col gap-4 p-4 md:p-6 rounded-2xl transition-all duration-300 hover:bg-slate-50 dark:hover:bg-slate-800/50 hover:shadow-md border border-slate-100 dark:border-slate-800/60 hover:border-sky-100 dark:hover:border-sky-900/50"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 pb-3 border-b border-slate-200/60 dark:border-slate-800/60">
                <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white group-hover:text-sky-500 transition-colors flex items-center gap-2.5">
                  <Icon className="w-6 h-6 text-sky-500 shrink-0" />
                  {section.title}
                </h3>
                <span className="text-xs md:text-sm font-semibold text-sky-600 dark:text-sky-400 bg-sky-50 dark:bg-sky-900/20 px-2.5 py-1 rounded-lg border border-sky-100/50 dark:border-sky-800/30 self-start md:self-auto shrink-0">
                  {section.items.length}개 항목
                </span>
              </div>

              <ul className="flex flex-col divide-y divide-slate-100 dark:divide-slate-800/60">
                {section.items.map((item, itemIdx) => (
                  <li
                    key={itemIdx}
                    className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 sm:gap-4 py-3 first:pt-1 last:pb-1"
                  >
                    <span className="text-base font-semibold text-slate-800 dark:text-slate-200 leading-snug">
                      {item.title}
                    </span>
                    {item.period && (
                      <span className="text-xs md:text-sm text-slate-400 dark:text-slate-500 font-medium shrink-0">
                        {item.period}
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </article>
          );
        })}
      </div>
    </section>
  );
}


