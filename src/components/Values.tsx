import { Zap, Users, ShieldCheck } from "lucide-react";
import { VALUES_DATA, ValueItem } from "../data/values";

const iconMap = {
  Zap: Zap,
  Users: Users,
  ShieldCheck: ShieldCheck,
};

export default function Values() {
  return (
    <section className="w-full">
      <div className="flex items-center gap-3 mb-6 md:mb-8 border-b border-slate-200 dark:border-slate-700 pb-3">
        <h2 className="text-xl md:text-2xl font-bold text-slate-800 dark:text-slate-200 break-keep">
          가치관
        </h2>
        <span className="text-sm md:text-base font-bold text-sky-500 bg-sky-100 dark:bg-sky-900/30 px-3 py-0.5 md:py-1 rounded-full">
          {VALUES_DATA.length}
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
        {VALUES_DATA.map((value: ValueItem, index: number) => {
          const Icon = iconMap[value.iconName];
          return (
            <div
              key={index}
              className="group relative flex flex-col p-6 md:p-7 rounded-2xl bg-white dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800/80 shadow-sm hover:shadow-md hover:border-sky-500/40 dark:hover:border-sky-500/40 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-sky-50 dark:bg-sky-950/70 text-sky-600 dark:text-sky-400 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300 shadow-sm">
                <Icon className="w-6 h-6" />
              </div>
              <h3 className="text-base md:text-lg font-bold text-slate-900 dark:text-slate-100 mb-3 leading-snug group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors break-keep">
                {value.title}
              </h3>
              <p className="text-sm md:text-base text-slate-600 dark:text-slate-400 leading-relaxed break-keep">
                {value.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

