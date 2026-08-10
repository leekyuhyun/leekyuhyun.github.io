import type { ReactNode } from "react";

type DetailSectionProps = {
  title: string;
  children: ReactNode;
  compact?: boolean;
};

export default function DetailSection({ title, children, compact = false }: DetailSectionProps) {
  return (
    <section className={`${compact ? "mt-4 pt-6" : "mt-7 pt-7"} border-t border-slate-200 dark:border-slate-700`}>
      <h4 className="mb-5 text-xl font-bold tracking-tight text-slate-950 dark:text-white md:text-2xl">
        {title}
      </h4>
      {children}
    </section>
  );
}
