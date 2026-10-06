import { CheckCheck, Code2, Search } from "lucide-react";
import {
  AI_TOOLS,
  AI_WORKFLOW_DATA,
  type AiWorkflowItem,
} from "../data/aiWorkflow";
import SectionHeader from "./common/SectionHeader";

const iconMap = {
  Search,
  Code: Code2,
  Check: CheckCheck,
};

export default function AiWorkflow() {
  return (
    <section aria-labelledby="ai-workflow-heading">
      <SectionHeader
        eyebrow="AI Workflow"
        title="AI를 활용하는 방식"
        id="ai-workflow-heading"
        description="AI로 탐색과 반복 작업의 속도를 높이고, 최종 판단과 결과에 책임집니다."
        split
      />

      <div className="grid overflow-hidden rounded-2xl border border-slate-200 bg-white md:grid-cols-3 dark:border-slate-800 dark:bg-slate-900/50">
        {AI_WORKFLOW_DATA.map((item: AiWorkflowItem) => {
          const Icon = iconMap[item.iconName];

          return (
            <article
              key={item.step}
              className="group relative border-b border-slate-200 p-6 last:border-b-0 md:border-r md:border-b-0 md:last:border-r-0 dark:border-slate-800"
            >
              <div className="mb-8 flex items-center justify-between">
                <span className="font-mono text-xs font-bold tracking-[0.15em] text-slate-400 dark:text-slate-500">
                  {item.step}
                </span>
                <span className="flex size-10 items-center justify-center rounded-full bg-sky-50 text-sky-600 transition-colors group-hover:bg-sky-100 dark:bg-sky-400/10 dark:text-sky-400 dark:group-hover:bg-sky-400/20">
                  <Icon className="size-4.5" aria-hidden="true" />
                </span>
              </div>
              <h3 className="text-lg font-bold text-slate-900 break-keep dark:text-slate-100">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-[1.75] text-slate-500 break-keep dark:text-slate-400">
                {item.description}
              </p>
            </article>
          );
        })}
      </div>

      <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-slate-500 dark:text-slate-400">
        <span className="meta-label">Tools</span>
        <ul className="flex flex-wrap gap-2" aria-label="사용하는 AI 도구">
          {AI_TOOLS.map((tool) => (
            <li
              key={tool}
              className="rounded-full border border-slate-200 bg-white px-3 py-1 font-semibold text-slate-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300"
            >
              {tool}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
