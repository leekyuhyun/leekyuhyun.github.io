import { CV_DATA } from "./introduceData";

export default function TechStack() {
  return (
    <div className="flex flex-col gap-8">
      {CV_DATA.techStacks.map((category) => (
        <div key={category.title} className="flex flex-col gap-3">
          <h4 className="text-[10px] font-bold text-zinc-400 dark:text-zinc-500 uppercase tracking-wider">
            {category.title}
          </h4>

          <div className="grid grid-cols-3 gap-y-3 gap-x-2">
            {category.skills.map((skill) => (
              <div
                key={skill.name}
                className="flex flex-col items-center md:items-start gap-1.5 group transition-all"
              >
                <skill.icon
                  className="w-4 h-4 transition-transform group-hover:scale-110"
                  style={{ color: skill.color }}
                />
                <span className="text-[11px] font-medium text-zinc-500 dark:text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-zinc-100 transition-colors truncate w-full">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
