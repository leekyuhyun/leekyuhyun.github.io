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
      <h2 className="text-5xl font-bold text-slate-900 dark:text-white mb-8 flex items-center gap-2">
        <span className="text-sky-500">#</span> Core Values
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {VALUES_DATA.map((value: ValueItem, index: number) => {
          const Icon = iconMap[value.iconName];
          return (
            <div 
              key={index}
              className="p-6 border border-slate-200 dark:border-slate-800 rounded-xl bg-white dark:bg-slate-900 shadow-sm flex flex-col gap-3 hover:border-sky-500 dark:hover:border-sky-500 transition-colors"
            >
              <div className="w-12 h-12 rounded-lg bg-sky-50 dark:bg-sky-950/50 text-sky-600 dark:text-sky-400 flex items-center justify-center">
                <Icon className="w-6 h-6" />
              </div>
              <h3 className="text-3xl font-bold text-slate-900 dark:text-white">
                {value.title}
              </h3>
              <p className="text-2xl text-slate-500 dark:text-slate-400 leading-normal">
                {value.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
