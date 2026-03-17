import {
  SiTypescript,
  SiJavascript,
  SiOpenjdk,
  SiReact,
  SiNextdotjs,
  SiReactquery,
  SiAxios,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiPostgresql,
  SiMysql,
  SiPostman,
  SiJsonwebtokens,
  SiSwagger,
  SiDocker,
  SiGit,
  SiGithub,
  SiGithubactions,
  SiVite,
  SiGithubpages,
  SiSlack,
  SiNotion,
  SiVercel,
  SiFigma,
} from 'react-icons/si';

export const CV_DATA = {
  profile: {
    name: '이규현',
    role: 'Web Fullstack Developer',
    image: '/images/Profile.png',
    description:
      '매일의 배움을 기록으로 자산화하는 개발자입니다. ' +
      '학습과 문제 해결 과정을 블로그에 정리하며 지식을 구조화하고, ' +
      '이를 통해 반복 가능한 성장 시스템을 만들어가고 있습니다.',
    links: {
      github: 'https://github.com/leekyuhyun',
      email: 'leekh010502@gmail.com',
      velog: 'https://velog.io/@leekh010502/',
    },
  },
  awards: [
    {
      title: 'Net 챌린지 캠프 시즌 12',
      awardName: '한국정보통신협회장상',
      date: '2025.11.07',
      org: '한국정보통신기술협회(TTA)',
    },
  ],
  education: [
    {
      school: '프로그래머스 데브코스',
      major: '웹 풀스택 9기 수료',
      period: '2025.12 - 2026.06',
    },
    {
      school: '안양대학교',
      major: '소프트웨어학과 학사',
      period: '2020.03 - 2026.02',
    },
    {
      school: '안양대학교',
      major: '지식재산융합과정 이수',
      period: '2024.09 - 2025.12',
    },
    {
      school: '시흥매화고등학교',
      major: '이과(자연계열) 졸업',
      period: '2017.03 - 2020.02',
    },
  ],
  techStacks: [
    {
      title: 'Languages',
      skills: [
        { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
        { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
        { name: 'Java', icon: SiOpenjdk, color: '#007396' },
      ],
    },
    {
      title: 'Frontend',
      skills: [
        { name: 'React', icon: SiReact, color: '#61DAFB' },
        { name: 'Next.js', icon: SiNextdotjs, color: 'currentColor' },
        { name: 'TanStack Query', icon: SiReactquery, color: '#FF4154' },
        { name: 'Zustand', icon: '/images/ZustandIcon.png', color: 'currentColor' },
        { name: 'Axios', icon: SiAxios, color: '#5A29E4' },
        { name: 'Tailwind', icon: SiTailwindcss, color: '#06B6D4' },
        { name: 'Vite', icon: SiVite, color: '#646CFF' },
      ],
    },
    {
      title: 'Backend & Database',
      skills: [
        { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
        { name: 'Express', icon: SiExpress, color: 'currentColor' },
        { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1' },
        { name: 'MySQL', icon: SiMysql, color: '#4479A1' },
        { name: 'Postman', icon: SiPostman, color: '#FF6C37' },
        { name: 'Swagger', icon: SiSwagger, color: '#85EA2D' },
        { name: 'JWT', icon: SiJsonwebtokens, color: '#000000' },
      ],
    },
    {
      title: 'DevOps & Collaboration',
      skills: [
        { name: 'Git', icon: SiGit, color: '#F05032' },
        { name: 'GitHub', icon: SiGithub, color: 'currentColor' },
        { name: 'GitHub Actions', icon: SiGithubactions, color: '#2088FF' },
        { name: 'GitHub Pages', icon: SiGithubpages, color: 'currentColor' },
        { name: 'Vercel', icon: SiVercel, color: 'currentColor' },
        { name: 'Docker', icon: SiDocker, color: '#2496ED' },
        { name: 'Figma', icon: SiFigma, color: '#F24E1E' },
        { name: 'Slack', icon: SiSlack, color: '#4A154B' },
        { name: 'Notion', icon: SiNotion, color: 'currentColor' },
      ],
    },
  ],
  projects: [
    {
      title: '범죄 취약 계층의 초동 대응을 위한 스마트 장치 및 AI 기반 실시간 대응 서비스',
      role: '팀 프로젝트 (6인) | 프론트엔드 개발',
      period: '2025.07.08 - 2025.11.07',
      details: [
        'Vue.js 기반 지도 서비스에서 초기 전체 조회 API 호출 시 CCTV 좌표 공공데이터 약 28만 건 일괄 렌더링에 따른 브라우저 과부하 및 렌더링 불가 현상 해결',
        '프론트엔드 처리 한계를 인지하고 백엔드와 협업하여 CSV 기반 조건 조회 API 구조 개선을 제안 및 구현',
        '사용자 조건 및 지도 영역(Bounds) 기준으로 필요한 데이터만 필터링하여 요청하는 방식으로 전환, 카카오맵 마커 동적 렌더링 시스템 구축',
        '위급 상황 발생 시 AI 판별 결과를 기반으로 보호자와 경찰에게 위치 및 인근 CCTV 정보를 실시간 전달하는 통합 모니터링 대시보드 구현',
        'ESLint와 Prettier를 적용하여 팀원 간 코드 스타일을 통일하고 컴포넌트 구조화를 통해 유지보수 효율 개선',
      ],
      techs: ['Vue', 'JavaScript', 'Vite', 'BootStrap'],
    },
    {
      title: '금융 빅데이터 기반 신용카드 이상 거래 탐지 시스템',
      role: '팀 프로젝트 (2인) | 풀스택 개발',
      period: '2025.10.28 - 2025.12.09',
      details: [
        '금융 보안 사고 대응을 위한 실시간 이상 거래(Anomaly) 탐지 및 관제용 풀스택 플랫폼 구축',
        'FastAPI를 활용하여 머신러닝 모델의 예측 결과를 지연 없이 전달하는 고성능 비동기 API 서버 구현',
        'WebSocket 기반의 실시간 로그 스트리밍 시스템을 구축하여 이상 거래 발생 시 즉각적인 관제 알림 기능 구현',
        'Recharts 라이브러리를 활용해 위험도 추이 및 거래 패턴을 시각화한 대시보드를 구현하여 모니터링 직관성 강화',
        'Docker를 이용한 개발 환경 컨테이너화로 백엔드와 프론트엔드 간의 의존성 문제 해결 및 배포 편의성 증대',
      ],
      techs: ['React', 'FastAPI', 'Python', 'PostgreSQL', 'Docker', 'Recharts'],
    },
    {
      title: '취업모아 - 취업 지원 관리 서비스',
      role: '팀 프로젝트 (6인) | 프론트엔드 개발',
      period: '2026.03.09 ~ 2026.04.17',
      details: ['취업 지원 관리 서비스 개발 중'],
      techs: ['React', `TypeScript`, 'TailwindCSS', 'Zustand', 'TanStack-Query', 'Axios'],
    },
  ],
};
