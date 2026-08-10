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
      <div className="section-header !mb-6">
        <p className="section-eyebrow">How I work</p>
        <h2 className="section-title break-keep">
          업무 방식
        </h2>
      </div>

      <div className="grid gap-7 md:grid-cols-3 md:gap-8">
        {VALUES_DATA.map((value: ValueItem, index: number) => {
          const Icon = iconMap[value.iconName];
          return (
            <div
              key={index}
              className="group border-t border-slate-300 pt-5 dark:border-slate-700"
            >
              <div className="mb-4 flex h-8 w-8 items-center justify-center rounded-full border border-slate-300 text-sky-600 dark:border-slate-700 dark:text-sky-400">
                <Icon className="w-4.5 h-4.5" aria-hidden="true" />
              </div>
              <h3 className="text-lg font-bold leading-snug text-slate-900 dark:text-slate-100 break-keep">
                {value.title}
              </h3>
              <p className="mt-2 text-sm leading-[1.75] text-slate-500 dark:text-slate-400 break-keep">
                {value.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
