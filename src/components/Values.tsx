import { Zap, Users, ShieldCheck } from "lucide-react";
import { VALUES_DATA, ValueItem } from "../data/values";

const iconMap = {
  Zap: Zap,
  Users: Users,
  ShieldCheck: ShieldCheck,
};

export default function Values() {
  return (
    <section>
      <h2 className="text-xl md:text-2xl font-bold text-slate-800 dark:text-slate-200 mb-4 border-b border-slate-200 dark:border-slate-700 pb-2">
        가치관
      </h2>
      <div className="flex flex-col gap-5 md:gap-6">
        {VALUES_DATA.map((value: ValueItem, index: number) => {
          const Icon = iconMap[value.iconName];
          return (
            <div 
              key={index}
              className="flex flex-col gap-1 md:gap-2"
            >
              <div className="flex items-center gap-2">
                <Icon className="w-4 h-4 md:w-5 md:h-5 text-sky-600 dark:text-sky-400" />
                <h3 className="text-base md:text-lg font-bold text-slate-800 dark:text-slate-200">
                  {value.title}
                </h3>
              </div>
              <p className="text-sm md:text-base text-slate-500 dark:text-slate-400 leading-relaxed ml-6 md:ml-7">
                {value.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
