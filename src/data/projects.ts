import project1Img from "../assets/images/project1.png";
import project2Img from "../assets/images/project2.png";
import project3Img from "../assets/images/project3.png";

export const PROJECTS_DATA = [
  {
    title: "은밀하게 위대하게",
    description: "가장 완벽한 보호색, 모니터 뒤에서 당당하게 확인하는 나만의 시크릿 포트폴리오",
    image: project1Img,
    github: [
      { label: "Github Repository", url: "https://github.com/Secretly-Greatly-web" }
    ],
    period: "2026.05.18 ~ 2026.06.19",
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
    title: "아이케어 AI (iCare AI) - 키즈노트",
    description: "AI 기반 영유아 스마트 리포트 및 보육 행정 솔루션",
    image: project2Img,
    github: [
      { label: "Github Repository", url: "https://github.com/Legend-Vibe-Guys" }
    ],
    period: "2026.04.06 ~ 2026.04.13",
    team: "FullStack (4)",
    role: "FullStack - 프로젝트 팀장, FE, BE 개발환경 구축 및 배포, firebase 기반 로그인 서비스 구현",
    tags: ["React", "Express", "Firebase", "Gemini API"],
    contributions: [
      {
        title: "Render 인프라 가용성 확보 및 Cold Start 문제 해결",
        situation: "Render 프리 티어 배포 환경 특성상, 일정 시간 요청이 없으면 서버가 절전 모드로 전환되는 Cold Start 이슈 발생\n이로 인한 초기 요청 시의 심각한 응답 지연으로 사용자 경험(UX)이 저하되는 문제 인식",
        solution: "UptimeRobot 연동 : 외부 헬스체크 툴을 도입하고 백엔드 내부에 경량화된 /health 엔드포인트 구현\n주기적 활성화 : 5분 주기 가벼운 헬스체크 요청을 자동화하여 서버가 상시 활성 상태(Warm-up)를 유지하도록 설정",
        result: "서버 절전 모드 진입을 차단하여 초기 응답 속도 및 서비스 가용성 개선\n추가적인 인프라 비용 지출 없이 프리 티어 환경의 제약을 극복한 효율적인 해결책 제시"
      },
      {
        title: "Firebase 기반 효율적인 인증 파이프라인 구축",
        situation: "Firebase Auth 도입 후, 토큰 만료에 따른 세션 끊김 현상 및 프론트엔드 전역 상태와의 동기화 불일치 문제 발생\n안전하고 끊김 없는 사용자 인증 상태 유지를 위한 인증 상태 통합 관리 필요성 인식",
        solution: "실시간 상태 동기화 : Firebase의 onIdTokenChanged를 활용해 토큰 및 인증 상태 변화를 실시간 감지하고 전역 상태에 반영\n인증 자동화 인터셉터 : API 팩토리(Axios 인터셉터 등)를 설계하여 API 요청 시 유효한 인증 토큰이 헤더에 자동 주입되도록 구현",
        result: "불필요한 로그아웃 없는 자동 세션 갱신 및 끊김 없는 사용자 경험(UX) 제공\nAPI 호출 전 토큰 유효성을 검증하는 안전하고 효율적인 프론트엔드 보안 파이프라인 구축"
      }
    ]
  },
  {
    title: "범죄 취약 계층의 초동 대응을 위한 스마트 장치 및 AI 기반 실시간 대응 서비스",
    description: "아동, 청소년 안전을 위해 다중 센서와 AI로 위험을 실시간 탐지하고, 보호자에게 즉각 경고 및 상황을 모니터링할 수 있는 아두이노 기반의 스마트 방범 시스템을 개발",
    image: project3Img,
    github: [
      { label: "Github Repository", url: "https://github.com/The-cane-of-Min-Jeung" }
    ],
    period: "2025.07.08 ~ 2025.10.14",
    team: "Frontend (1), Backend (3), Hardware (1), AI (1)",
    role: "Frontend",
    tags: ["Vue.js", "Kakao Map API", "Websocket"],
    contributions: [
      {
        title: "Kakao Map 기반 실시간 위치 관제 및 대시보드 UI 구축",
        situation: "비상 알림 발생 시 관제자가 위험 위치(CCTV, 스마트 지팡이 위치)를 즉각 파악해야 하나, 지도 위 다수 마커 및 오버레이 렌더링 시 UI 지연 현상 발생 우려",
        solution: "카카오맵 API 커스텀 오버레이 모듈화(디바이스 상태 및 긴급 알림 단계별 동적 스타일링 적용) 및 Vite 환경에서 Kakao Maps SDK를 비동기식으로 안전하게 로드하는 헬퍼 함수 구축",
        result: "초기 지도 컴포넌트 렌더링 속도 개선 및 긴급 상황 발생 시 위치 핀 마킹 반응 속도 0.3초 이내 확보, NET 챌린지 캠프 시즌 12 은상(한국정보통신협회장상) 수상에 기여"
      },
      {
        title: "컴포넌트 재사용성 강화 및 서비스 상태 흐름(State Flow) 제어",
        situation: "장치 등록, 히스토리 조회, 상황 알림 등 다수의 관제 화면 개발 시 반복되는 테이블/카드/모달 UI로 인한 코드 중복 발생",
        solution: "공통 UI를 도메인 단위 컴포넌트로 세분화하여 라우터 뷰 간 재사용성을 극대화하고, 도메인별 API 통신 모듈을 분리 구축하여 백엔드 API 명세 변경 시 프론트엔드 영향 범위 최소화",
        result: "UI 모듈화 및 API 레이어 분리를 통해 신규 화면 개발 및 유지보수 생산성 증대, API 실패/성공 상태에 따른 에러 바운더리 모달 처리로 사용자 경험(UX) 개선"
      }
    ]
  },
];
