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

      <div className="flex flex-col gap-4">
        {VALUES_DATA.map((value: ValueItem, index: number) => {
          const Icon = iconMap[value.iconName];
          return (
            <div
              key={index}
              className="group grid grid-cols-[32px_1fr] gap-3 items-start"
            >
              <div className="w-8 h-8 rounded-full border border-slate-300 dark:border-slate-700 text-sky-600 dark:text-sky-400 flex items-center justify-center">
                <Icon className="w-4.5 h-4.5" aria-hidden="true" />
              </div>
              <div>
                <h3 className="text-base font-bold text-slate-900 dark:text-slate-100 leading-snug break-keep">
                  {value.title}
                </h3>
                <p className="mt-1 text-sm text-slate-500 dark:text-slate-400 leading-relaxed break-keep">
                  {value.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
