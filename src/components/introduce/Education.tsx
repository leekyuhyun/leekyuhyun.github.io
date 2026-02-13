import { CV_DATA } from "./introduceData";

export default function Education() {
  return (
    <div className="flex flex-col gap-6">
      {CV_DATA.education.map((item, index) => (
        <div key={index} className="flex flex-col gap-1">
          <span className="text-[10px] text-zinc-400 font-medium">
            {item.period}
          </span>
          <h4 className="text-base font-bold text-zinc-900 dark:text-zinc-100 leading-tight">
            {item.school}
          </h4>
          <p className="text-sm text-zinc-500 dark:text-zinc-400">
            {item.major}
          </p>
        </div>
      ))}
    </div>
  );
}
