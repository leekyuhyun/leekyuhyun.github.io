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
      title:
        "범죄 취약 계층의 초동 대응을 위한 스마트 장치 및 AI 기반 실시간 대응 서비스",
      role: "Front-end Developer",
      period: "2025.07.08 - 2025.11.07",
      description:
        "범죄 취약 계층의 안전 사각지대 해소를 위해 하드웨어와 AI 모델을 결합한 실시간 자동 초동 대응 시스템을 개발했습니다. 충격 및 고성 감지 시 즉시 음성 데이터를 수집하고, AI를 통해 위급 상황을 판별하여 보호자와 경찰에게 위치 및 인근 CCTV 정보를 실시간으로 제공하는 통합 모니터링 대시보드를 구축했습니다.",
      techs: ["Vue", "JavaScript", "Vite", "BootStrap"],
      links: {
        github: "hhttps://github.com/The-cane-of-Min-Jeung/frontend",
        demo: "https://...",
      },
    },
    {
      title: "금융 빅데이터 기반 신용카드 이상 거래 탐지 시스템",
      role: "Full-stack Developer",
      period: "2025.10.28 - 2025.12.09",
      description:
        "금융 데이터를 분석하여 이상 거래(Anomaly)를 실시간으로 탐지하고 관제하는 풀스택 플랫폼입니다. FastAPI를 활용해 머신러닝 모델의 예측 결과를 지연 없이 전달하는 고성능 API를 구축했으며, WebSocket 기반의 실시간 로그 시스템과 Recharts를 이용한 위험도 시각화 대시보드를 구현하여 금융 보안 사고 대응의 효율성을 높였습니다.",
      techs: ["React", "FastAPI", "Python", "PostgreSQL", "Docker", "Recharts"],
      links: {
        github: "https://github.com/leekyuhyun/anomaly-dashboard-project",
        demo: "https://...",
      },
    },
    {
      title: "Fashion Guys - AI 기반 가상 피팅 및 패션 소셜 플랫폼",
      role: "Front-end Developer",
      period: "2025.03 - 2025.12",
      description:
        "AI 기술을 활용한 가상 피팅 서비스와 소셜 네트워크가 결합된 패션 플랫폼의 프런트엔드를 개발했습니다. React를 기반으로 3가지 AI 피팅 옵션(OOTDiffusion, Gradio 등)을 선택할 수 있는 사용자 경험을 설계했으며, Redis 기반 비동기 작업 상태를 실시간으로 추적하여 대형 ML 모델의 연산 과정을 시각적으로 전달하는 반응형 인터페이스를 구현했습니다.",
      techs: ["React", "JavaScript", "Axios"],
      links: {
        github: "https://github.com/leekyuhyun/virtualfitting",
        demo: "https://...",
      },
    },
    {
      title: "KBO 리그 팬 커뮤니티 플랫폼",
      role: "Full-stack Developer",
      period: "2025.05 - 2025.06",
      description:
        "MVC 패턴을 적용하여 설계한 KBO 리그 10개 구단 팬들을 위한 커뮤니티 웹 애플리케이션입니다. Java Servlet으로 비즈니스 로직을 처리하고 JSP로 동적 페이지를 렌더링하는 전통적인 웹 아키텍처를 구현했으며, JDBC를 활용한 MySQL 연동으로 팀별 게시판 CRUD 및 세션 기반 사용자 인증 시스템을 구축했습니다.",
      techs: [
        "Java",
        "JSP",
        "Servlet",
        "MySQL",
        "JDBC",
        "Apache Tomcat",
        "JavaScript",
        "jQuery",
        "Gradle",
      ],
      links: {
        github: "https://github.com/leekyuhyun/jsp-servlet-kbo-fan-community",
        demo: "https://...",
      },
    },
    {
      title: "멀티스레드 기반 네트워크 오목 게임 서비스",
      role: "Full-stack Developer",
      period: "2024.09 - 2024.12",
      description:
        "Java Socket API를 활용하여 구축한 실시간 네트워크 대전 오목 게임입니다. 서버 측에서는 멀티스레딩과 클라이언트 핸들러를 통해 다중 접속 및 1:1 매칭 로직을 구현했으며, 클라이언트 측에서는 Java Swing을 이용해 직관적인 게임 UI와 실시간 채팅 시스템을 개발했습니다. 사용자 승률 관리 및 랭킹 시스템을 포함한 전체 게임 서비스 아키텍처를 설계했습니다.",
      techs: [
        "Java",
        "Socket Programming",
        "Multi-threading",
        "Java Swing",
        "ObjectStream",
        "File I/O",
      ],
      links: {
        github: "https://github.com/leekyuhyun/javaomokproject",
        demo: "https://...",
      },
    },
  ],
};
