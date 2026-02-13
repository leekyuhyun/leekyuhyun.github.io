import { Trophy } from "lucide-react";

export default function Awards() {
  const awardList = [
    {
      title: "Net 챌린지 캠프 시즌 12",
      awardName: "한국정보통신협회장상",
      date: "2026.11.07",
      organization: "한국정보통신기술협회(TTA)",
    },
  ];

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {awardList.map((item, index) => (
        <div
          key={index}
          className="relative group p-6 rounded-3xl bg-white dark:bg-zinc-900/50 
                     border border-zinc-100 dark:border-zinc-800 
                     shadow-sm hover:shadow-md transition-all duration-300
                     hover:-translate-y-1"
        >
          <div
            className="absolute -inset-1 bg-amber-100/20 dark:bg-amber-400/5 rounded-4xl -z-10 
                          opacity-0 group-hover:opacity-100 transition-opacity"
          />
          <div className="flex flex-col gap-4">
            <div className="flex justify-between items-start">
              <div className="p-3 rounded-2xl bg-amber-50 dark:bg-amber-900/20 text-amber-500 dark:text-amber-300 transition-transform duration-300 group-hover:scale-110">
                <Trophy className="w-6 h-6" />
              </div>
              <span className="text-[10px] font-bold px-2 py-1 rounded-lg bg-amber-50 dark:bg-amber-900/30 text-amber-500 dark:text-amber-300 uppercase tracking-wider">
                Award
              </span>
            </div>

            <div className="space-y-1">
              <h4 className="text-xl font-bold text-zinc-800 dark:text-zinc-100 group-hover:text-sky-500 dark:group-hover:text-amber-200 transition-colors">
                {item.awardName}
              </h4>
              <p className="text-md font-semibold text-zinc-700 dark:text-zinc-300">
                {item.title}
              </p>
              <div className="flex justify-between items-center pt-2">
                <p className="text-sm font-medium text-zinc-500 dark:text-zinc-500">
                  {item.organization}
                </p>
                <p className="text-xs font-medium text-zinc-400 dark:text-zinc-500">
                  {item.date}
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
