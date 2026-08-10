import type { ProjectFeature } from "../../types/project";
import DetailSection from "./DetailSection";

export default function ProjectFeatures({ features }: { features: ProjectFeature[] }) {
  return (
    <DetailSection title="핵심 기능">
      <ol className="grid gap-x-8 md:grid-cols-2">
        {features.map((feature, index) => (
          <li key={feature.title} className="grid grid-cols-[2rem_1fr] gap-3 border-b border-slate-200 py-4 dark:border-slate-700">
            <span className="text-xs font-black text-sky-500">{String(index + 1).padStart(2, "0")}</span>
            <div>
              <h5 className="text-base font-bold text-slate-900 dark:text-white">{feature.title}</h5>
              <p className="mt-2 text-sm leading-[1.75] text-slate-600 dark:text-slate-300">{feature.description}</p>
            </div>
          </li>
        ))}
      </ol>
    </DetailSection>
  );
}
