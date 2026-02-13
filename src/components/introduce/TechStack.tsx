import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiMysql,
  SiPostgresql,
  SiDocker,
  SiGit,
  SiVite,
  SiGithubpages,
  SiSlack,
  SiNotion,
} from "react-icons/si";

export default function TechStack() {
  const categories = [
    {
      title: "Frontend",
      skills: [
        { name: "React", icon: <SiReact className="text-[#61DAFB]" /> },
        {
          name: "Next.js",
          icon: <SiNextdotjs className="dark:text-white text-black" />,
        },
        {
          name: "TypeScript",
          icon: <SiTypescript className="text-[#3178C6]" />,
        },
        {
          name: "Tailwind",
          icon: <SiTailwindcss className="text-[#06B6D4]" />,
        },
        { name: "Vite", icon: <SiVite className="text-[#646CFF]" /> },
      ],
    },
    {
      title: "Backend & Database",
      skills: [
        { name: "Node.js", icon: <SiNodedotjs className="text-[#339933]" /> },
        {
          name: "Express",
          icon: <SiExpress className="dark:text-white text-black" />,
        },
        {
          name: "MySQL",
          icon: <SiMysql className="text-[#4479A1]" />,
        },
        {
          name: "PostgreSQL",
          icon: <SiPostgresql className="text-[#4169E1]" />,
        },
      ],
    },
    {
      title: "DevOps & Collaboration", // Tools 섹션을 더 구체적으로 변경
      skills: [
        { name: "Git", icon: <SiGit className="text-[#F05032]" /> },
        { name: "Docker", icon: <SiDocker className="text-[#2496ED]" /> },
        {
          name: "GitHub Pages",
          icon: <SiGithubpages className="dark:text-white text-black" />,
        },
        {
          name: "Slack",
          icon: <SiSlack className="text-[#4A154B] dark:text-[#ECB22E]" />,
        },
        {
          name: "Notion",
          icon: <SiNotion className="dark:text-white text-black" />,
        },
      ],
    },
  ];

  return (
    <section className="flex flex-col gap-12 py-2">
      {categories.map((category) => (
        <div key={category.title} className="space-y-6">
          <h4 className="text-xl font-bold text-zinc-700 dark:text-zinc-300 border-l-4 border-sky-400 dark:border-amber-400 pl-4">
            {category.title}
          </h4>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {category.skills.map((skill) => (
              <div
                key={skill.name}
                className="relative group p-6 rounded-3xl bg-white dark:bg-zinc-900/50 
                           border border-zinc-100 dark:border-zinc-800 
                           shadow-sm hover:shadow-md transition-all duration-300
                           hover:-translate-y-1 flex flex-col items-center justify-center gap-3"
              >
                <div
                  className="absolute -inset-1 bg-sky-100/20 dark:bg-amber-400/5 rounded-4xl -z-10 
                                opacity-0 group-hover:opacity-100 transition-opacity"
                />

                <div className="text-4xl transition-transform duration-300 group-hover:scale-110">
                  {skill.icon}
                </div>
                <span className="text-sm font-bold text-zinc-700 dark:text-zinc-300 group-hover:text-sky-500 dark:group-hover:text-amber-200 transition-colors">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
