import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiPostgresql,
  SiMysql,
  SiDocker,
  SiGit,
  SiVite,
  SiGithubpages,
  SiSlack,
  SiNotion,
} from "react-icons/si";

export const CV_DATA = {
  profile: {
    name: "이규현",
    role: "Web Fullstack Developer",
    image: "/images/Profile.png",
    description:
      "매일의 배움을 기록으로 자산화하는 개발자입니다. " +
      "학습과 문제 해결 과정을 블로그에 정리하며 지식을 구조화하고, " +
      "이를 통해 반복 가능한 성장 시스템을 만들어가고 있습니다.",
    links: {
      github: "https://github.com/leekyuhyun",
      email: "leekh010502@gmail.com",
      velog: "https://velog.io/@leekh010502/",
    },
  },
  awards: [
    {
      title: "Net 챌린지 캠프 시즌 12",
      awardName: "한국정보통신협회장상",
      date: "2025.11.07",
      org: "한국정보통신기술협회(TTA)",
    },
  ],
  education: [
    {
      school: "프로그래머스 데브코스",
      major: "웹 풀스택 9기 수료",
      period: "2025.12 - 2026.06",
    },
    {
      school: "안양대학교",
      major: "소프트웨어학과 학사",
      period: "2020.03 - 2026.02",
    },
    {
      school: "안양대학교",
      major: "지식재산융합과정 이수",
      period: "2024.09 - 2025.12",
    },
    {
      school: "시흥매화고등학교",
      major: "이과(자연계열) 졸업",
      period: "2017.03 - 2020.02",
    },
  ],
  techStacks: [
    {
      title: "Frontend",
      skills: [
        { name: "React", icon: SiReact, color: "#61DAFB" },
        { name: "Next.js", icon: SiNextdotjs, color: "currentColor" },
        { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
        { name: "Tailwind", icon: SiTailwindcss, color: "#06B6D4" },
        { name: "Vite", icon: SiVite, color: "#646CFF" },
      ],
    },
    {
      title: "Backend & Database",
      skills: [
        { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
        { name: "Express", icon: SiExpress, color: "currentColor" },
        { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
        { name: "MySQL", icon: SiMysql, color: "#4479A1" },
      ],
    },
    {
      title: "DevOps & Collaboration",
      skills: [
        { name: "Git", icon: SiGit, color: "#F05032" },
        { name: "Docker", icon: SiDocker, color: "#2496ED" },
        { name: "GitHub Pages", icon: SiGithubpages, color: "currentColor" },
        { name: "Slack", icon: SiSlack, color: "#4A154B" },
        { name: "Notion", icon: SiNotion, color: "currentColor" },
      ],
    },
  ],
  projects: [
    {
      title: "Baseball Starter",
      role: "Front-end Developer",
      period: "2026.01 - 2026.02",
      description:
        "야구 입문자를 위한 커뮤니티 플랫폼입니다. 복잡한 야구 규칙을 쉽게 풀이하고 경기 일정 및 티켓 예매 정보를 제공합니다.",
      techs: ["React", "TypeScript", "Vite", "Tailwind CSS"],
      links: {
        github: "https://github.com/...",
        demo: "https://...",
      },
    },
  ],
};
