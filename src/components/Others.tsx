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
      <h2 className="text-xl md:text-2xl font-bold text-slate-800 dark:text-slate-200 mb-4 border-b border-slate-200 dark:border-slate-700 pb-2">
        기타 이력
      </h2>
      <div className="flex flex-col gap-6 md:gap-8">
        {sections.map((section, idx) => {
          if (!section.items || section.items.length === 0) return null;
          const Icon = section.icon;
          return (
            <div key={idx} className="flex flex-col gap-3 md:gap-4">
              {/* Category label */}
              <div className="flex items-center gap-2">
                <Icon className="w-4 h-4 md:w-5 md:h-5 text-slate-500 dark:text-slate-400" />
                <h3 className="text-sm md:text-base font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                  {section.title}
                </h3>
              </div>
              
              {/* Items list */}
              <ul className="flex flex-col gap-2 md:gap-3 ml-6 md:ml-7">
                {section.items.map((item, itemIdx) => (
                  <li key={itemIdx} className="flex flex-col gap-1 leading-snug">
                    <span className="text-sm md:text-base font-semibold text-slate-800 dark:text-slate-200 break-words">
                      {item.title}
                    </span>
                    {item.period && (
                      <span className="text-xs md:text-sm text-slate-400 dark:text-slate-500 font-medium">
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
