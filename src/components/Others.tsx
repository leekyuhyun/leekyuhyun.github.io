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
      title: "병역",
      icon: Shield,
      items: OTHERS_DATA.military,
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
  ];

  return (
    <section>
      <h2 className="text-5xl font-bold text-slate-900 dark:text-white mb-8 flex items-center gap-2">
        <span className="text-sky-500">#</span> Others
      </h2>
      <div className="border border-slate-200 dark:border-slate-800 rounded-xl bg-white dark:bg-slate-900 shadow-sm divide-y divide-slate-200 dark:divide-slate-800 overflow-hidden">
        {sections.map((section, idx) => {
          const Icon = section.icon;
          return (
            <div key={idx} className="p-6 md:p-8 flex flex-col md:flex-row gap-6 md:gap-10 hover:bg-slate-50/50 dark:hover:bg-slate-800/20 transition-colors">
              {/* Category label */}
              <div className="w-full md:w-1/4 flex items-center md:items-start gap-3 shrink-0">
                <div className="w-10 h-10 rounded-lg bg-sky-50 dark:bg-sky-950/50 text-sky-600 dark:text-sky-400 flex items-center justify-center shrink-0">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-3xl font-bold text-slate-900 dark:text-white md:mt-1">
                  {section.title}
                </h3>
              </div>
              
              {/* Items list */}
              <ul className="flex-1 flex flex-col gap-4">
                {section.items.map((item, itemIdx) => (
                  <li key={itemIdx} className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 leading-snug">
                    <span className="text-2xl font-semibold text-slate-800 dark:text-slate-200 break-keep">
                      {item.title}
                    </span>
                    {item.period && (
                      <span className="text-xl text-slate-400 dark:text-slate-500 shrink-0 font-medium whitespace-nowrap sm:mt-0.5">
                        {item.period}
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </section>
  );
}
