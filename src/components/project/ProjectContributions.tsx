import type { ProjectContribution } from "../../types/project";
import DetailSection from "./DetailSection";

export default function ProjectContributions({ contributions }: { contributions: ProjectContribution[] }) {
  return (
    <DetailSection title="주요 기여 및 성과">
      <div className="divide-y divide-slate-300 border-b border-slate-300 dark:divide-slate-700 dark:border-slate-700">
        {contributions.map((contribution, index) => (
          <article key={contribution.title} className="grid gap-4 py-6 md:grid-cols-[3rem_1fr] md:py-7">
            <span className="text-xs font-black tracking-widest text-sky-500">
              {String(index + 1).padStart(2, "0")}
            </span>
            <div>
              <h5 className="text-base font-bold leading-snug text-slate-900 dark:text-white md:text-lg">
                {contribution.title}
              </h5>
              <dl className="mt-5 space-y-6">
                <Narrative label="문제 인식" text={contribution.situation} />
                <Narrative label="해결 방안" text={contribution.solution.replaceAll("\n", " ")} accent />
                <Narrative label="결과" text={contribution.result} result />
              </dl>
            </div>
          </article>
        ))}
      </div>
    </DetailSection>
  );
}

function Narrative({ label, text, accent = false, result = false }: { label: string; text: string; accent?: boolean; result?: boolean }) {
  return (
    <div>
      <dt className={`mb-2 text-sm font-bold ${result ? "text-emerald-700 dark:text-emerald-400" : accent ? "text-sky-600 dark:text-sky-400" : "text-slate-900 dark:text-white"}`}>
        {label}
      </dt>
      <dd className={`max-w-4xl text-base leading-[1.85] ${result ? "font-semibold text-slate-900 dark:text-white" : "text-slate-600 dark:text-slate-300"}`}>
        {text}
      </dd>
    </div>
  );
}
