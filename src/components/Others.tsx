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
      title: "기타 활동",
      icon: Compass,
      items: OTHERS_DATA.activities,
    },
    {
      title: "수상",
      icon: Award,
      items: OTHERS_DATA.awards,
    },
    {
      title: "병역",
      icon: Shield,
      items: OTHERS_DATA.military,
    },
  ];

  return (
    <section>
      <div className="section-header">
        <p className="section-eyebrow">Background</p>
        <h2 className="section-title">이력과 활동</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-10">
        {sections.map((section, idx) => {
          if (!section.items || section.items.length === 0) return null;
          const Icon = section.icon;
          return (
            <article
              key={idx}
              className="group flex flex-col gap-3 border-t border-slate-300 dark:border-slate-700 pt-4"
            >
              <div className="flex items-center justify-between gap-2">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <Icon className="w-4 h-4 text-sky-500 shrink-0" aria-hidden="true" />
                  {section.title}
                </h3>
                <span className="text-xs font-semibold text-slate-400 shrink-0">
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
