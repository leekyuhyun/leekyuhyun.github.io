export default function Education() {
  const educationList = [
    {
      school: "프로그래머스 데브코스",
      major: "웹 풀스택 9기 10회차 수료",
      period: "2025.12 ~ 2026.06",
    },
    {
      school: "안양대학교",
      major: "소프트웨어학과 학사",
      period: "2020.03 ~ 2026.02",
    },
    {
      school: "안양대학교",
      major: "지식재산융합과정 이수",
      period: "2024.09 ~ 2025.12",
    },
    {
      school: "시흥매화고등학교",
      major: "이과(자연계열) 졸업",
      period: "2017.03 ~ 2020.02",
    },
  ];

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {educationList.map((item, index) => (
        <div
          key={index}
          className="relative group p-6 rounded-3xl bg-white dark:bg-zinc-900/50 
                     border border-zinc-100 dark:border-zinc-800 
                     shadow-sm hover:shadow-md transition-all duration-300
                     hover:-translate-y-1"
        >
          <div
            className="absolute -inset-1 bg-sky-100/20 dark:bg-amber-400/5 rounded-4xl -z-10 
                          opacity-0 group-hover:opacity-100 transition-opacity"
          />

          <div className="flex flex-col gap-3">
            <div className="flex justify-between items-start">
              <h4 className="text-xl font-bold text-zinc-800 dark:text-zinc-100 group-hover:text-sky-500 dark:group-hover:text-amber-200 transition-colors">
                {item.school}
              </h4>
              <span className="text-[10px] font-bold px-2 py-1 rounded-lg bg-sky-50 dark:bg-amber-900/30 text-sky-500 dark:text-amber-300 uppercase tracking-wider">
                Edu
              </span>
            </div>

            <div className="space-y-1">
              <p className="text-lg font-semibold text-zinc-700 dark:text-zinc-300">
                {item.major}
              </p>
              <p className="text-sm font-medium text-zinc-400 dark:text-zinc-500">
                {item.period}
              </p>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
