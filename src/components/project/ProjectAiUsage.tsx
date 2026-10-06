import { Bot, CheckCircle2, Gauge } from "lucide-react";
import type { ProjectAiUsage as ProjectAiUsageType } from "../../types/project";
import DetailSection from "./DetailSection";

export default function ProjectAiUsage({ aiUsage }: { aiUsage: ProjectAiUsageType }) {
  return (
    <DetailSection title="개발 과정에서의 AI 활용">
      <div className="rounded-2xl border border-sky-200 bg-sky-50/60 p-5 md:p-6 dark:border-sky-400/20 dark:bg-sky-950/20">
        <div className="flex flex-wrap items-center gap-2">
          <span className="meta-label mr-1">Tools</span>
          {aiUsage.tools.map((tool) => (
            <span
              key={tool}
              className="rounded-full border border-sky-200 bg-white px-3 py-1 text-xs font-bold text-sky-700 dark:border-sky-400/20 dark:bg-slate-900 dark:text-sky-300"
            >
              {tool}
            </span>
          ))}
        </div>

        <dl className="mt-6 grid gap-5 md:grid-cols-3 md:gap-6">
          <AiUsageItem icon={Bot} label="활용" text={aiUsage.task} />
          <AiUsageItem icon={CheckCircle2} label="검증" text={aiUsage.validation} />
          <AiUsageItem icon={Gauge} label="효과" text={aiUsage.outcome} />
        </dl>
      </div>
    </DetailSection>
  );
}

function AiUsageItem({
  icon: Icon,
  label,
  text,
}: {
  icon: typeof Bot;
  label: string;
  text: string;
}) {
  return (
    <div>
      <dt className="flex items-center gap-2 text-sm font-bold text-sky-700 dark:text-sky-300">
        <Icon className="size-4" aria-hidden="true" />
        {label}
      </dt>
      <dd className="mt-2 text-sm leading-[1.75] text-slate-600 break-keep dark:text-slate-300">
        {text}
      </dd>
    </div>
  );
}
