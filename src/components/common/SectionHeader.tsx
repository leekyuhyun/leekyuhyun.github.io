type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  id?: string;
  description?: string;
  count?: number;
  compact?: boolean;
  split?: boolean;
};

export default function SectionHeader({
  eyebrow,
  title,
  id,
  description,
  count,
  compact = false,
  split = false,
}: SectionHeaderProps) {
  return (
    <div className={`section-header ${compact ? "!mb-6" : ""} ${split ? "md:flex md:items-end md:justify-between" : ""}`}>
      <div>
        <p className="section-eyebrow">{eyebrow}</p>
        <div className="mt-2 flex items-center gap-2">
          <h2 id={id} className="section-title !mt-0 break-keep">
            {title}
          </h2>
          {count !== undefined && (
            <span className="rounded-full bg-sky-50 px-2 py-0.5 text-xs font-bold text-sky-600 dark:bg-sky-900/30 dark:text-sky-400">
              {count}
            </span>
          )}
        </div>
      </div>
      {description && (
        <p className={`section-description ${split ? "md:text-right" : ""}`}>
          {description}
        </p>
      )}
    </div>
  );
}
