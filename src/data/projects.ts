import project1Img from "../assets/images/project1.png";

export const PROJECTS_DATA = [
  { 
    title: "은밀하게 위대하게", 
    description: "가장 완벽한 보호색, 모니터 뒤에서 당당하게 확인하는 나만의 시크릿 포트폴리오", 
    image: project1Img,
    github: [
      { label: "Frontend Repository", url: "https://github.com/prgrms-fullcycle-devcourse/webfull_9_10_Secretly-Greatly_FE" },
      { label: "Backend Repository", url: "https://github.com/prgrms-fullcycle-devcourse/webfull_9_10_Secretly-Greatly_BE" },
      { label: "News Server Repository", url: "https://github.com/prgrms-fullcycle-devcourse/webfull_9_10_Secretly-Greatly_news" }
    ],
    period: "2026.05.18. ~ 2026.06.19.",
    team: "FE(2), BE(1), FullStack(3)",
    role: "FullStack - FE 팀장, 개발환경 구축 및 배포, 뉴스 서버 구축",
    tags: ["Next.js", "Express", "Gemini API", "Orval", "Mock Service Worker", "Socket.IO"],
    contributions: [
      {
        title: "OpenAPI 기반 API 코드 자동화 및 모킹(Mocking) 환경 구축",
        situation: "API 개발 지연으로 인한 프론트엔드 병목 현상 및 잦은 명세 변경에 따른 수동 타입 수정의 비효율성 발생",
        solution: "Orval을 도입해 OpenAPI 명세 기반으로 API 코드 및 타입을 자동 생성하고, MSW를 활용해 독립적인 모킹 테스트 환경 구축",
        result: "프론트/백엔드 병렬 개발로 일정 단축 및 타입 동기화 자동화를 통한 휴먼 에러 방지, 디버깅 시간 획기적 절감"
      },
      {
        title: "뉴스 데이터 적재 파이프라인 최적화",
        situation: "주기적인 뉴스 스크래핑 시 발생할 수 있는 외부 AI API Rate Limit 초과, 비용 낭비, 데이터 중복 적재 문제 예상",
        solution: "DB 조회로 기존 기사를 사전 필터링하고, 호출 딜레이 제어(Throttle) 큐 설계 및 upsert 기반의 배치 자동 적재 구현",
        result: "불필요한 API 호출을 차단해 운영 비용을 최적화하고 Rate Limit 초과 없이 안정적이고 효율적인 데이터 적재 완성"
      },
      {
        title: "배포 환경의 프로토콜 불일치(Mixed Content) 장애 해결",
        situation: "HTTPS(프론트엔드)와 HTTP(백엔드) 간 Mixed Content 브라우저 보안 정책으로 API 및 웹소켓(채팅) 연결 차단 발생",
        solution: "팀원과 협의해 백엔드에 SSL 인증서를 적용하여 HTTPS로 격상하고, 프론트엔드에서 환경에 맞춰 동적으로 WSS 연결을 맺도록 개선",
        result: "우회 대신 인프라 레벨의 정공법으로 에러를 근본적으로 해결하여 채팅 서비스를 안정화하고 전체 보안 수준 향상"
      }
    ]
  },
  { 
    title: "Project Two (준비 중)", 
    description: "두 번째 프로젝트에 대한 간단한 설명입니다.", 
    image: null,
    github: [], period: "", team: "", role: "", tags: ["React", "CSS"], contributions: [] 
  },
  { 
    title: "Project Three (준비 중)", 
    description: "세 번째 프로젝트에 대한 간단한 설명입니다.", 
    image: null,
    github: [], period: "", team: "", role: "", tags: ["JavaScript", "HTML"], contributions: [] 
  },
];
