import { CV_DATA } from "./introduceData";

export default function Awards() {
  return (
    <div className="flex flex-col gap-6">
      {CV_DATA.awards.map((item, index) => (
        <div key={index} className="flex flex-col gap-1">
          <span className="text-[10px] text-zinc-400 font-medium">
            {item.date}
          </span>
          <h4 className="text-base font-bold text-zinc-900 dark:text-zinc-100 leading-tight">
            {item.awardName}
          </h4>
          <p className="text-sm text-zinc-600 dark:text-zinc-400 font-medium">
            {item.title}
          </p>
          <p className="text-[11px] text-zinc-400">{item.org}</p>
        </div>
      ))}
    </div>
  );
}
