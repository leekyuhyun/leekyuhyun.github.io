import { StaticImageData } from "next/image";
import project1Img from "../assets/images/project1.png";
import project2Img from "../assets/images/project2.png";
import project3Img from "../assets/images/project3.png";
import project4Img from "../assets/images/project4.png";

export interface ProjectFeature {
  title: string;
  description: string;
}

export interface ProjectContribution {
  title: string;
  situation: string;
  solution: string;
  result: string;
}

export interface ProjectLink {
  label: string;
  url: string;
}

export interface Project {
  title: string;
  subtitle?: string;
  description: string;
  overview?: string;
  features?: ProjectFeature[];
  image?: StaticImageData | string;
  github?: ProjectLink[];
  period?: string;
  team?: string;
  role?: string;
  tags: string[];
  contributions?: ProjectContribution[];
}

export const PROJECTS_DATA: Project[] = [
  {
    title: "은밀하게 위대하게",
    subtitle: "프로그래머스 웹 풀스택 9기 최종 프로젝트",
    description: "가장 완벽한 보호색, 모니터 뒤에서 당당하게 확인하는 나만의 시크릿 포트폴리오",
    overview: "개발자가 온종일 띄워두는 VS Code 화면으로 완벽하게 위장하여 주변 시선 신경 쓰지 않고 당당하게 주식 시세와 포트폴리오를 관리할 수 있는 웹 서비스입니다. 일반적인 주식 앱의 노출 위험을 원천 차단하고, 오직 개발자들만을 위한 UI/UX와 실시간 소통 공간을 제공합니다.",
    features: [
      {
        title: "VS Code 위장 UI (IDE Disguise)",
        description: "VS Code 다크 테마 완벽 재현 및 Explorer 파일 트리 구조(stocks.sheet, positions.json)로 관심 종목 관리"
      },
      {
        title: "패닉 핫키 (Boss Key)",
        description: "위급 상황 시 Esc 키를 2회 입력하면 단 0.1초 만에 모든 자산 화면을 가리고 가짜 커밋이 있는 소스 제어(Git) 화면으로 전환"
      },
      {
        title: "시세 & 터미널 시스템 로그 알림",
        description: "한국투자증권(KIS) API 연동으로 준실시간 시세를 제공하며, 실시간 주가 변동성을 하단 터미널 탭에 시스템 로그 포맷으로 위장 출력"
      },
      {
        title: "실시간 채팅 (Real-time Chat)",
        description: "AI 에이전트 패널로 위장한 실시간 채팅 지원 및 도배 방지, 금칙어 필터 등의 모더레이션 기능 포함"
      },
      {
        title: "물타기 시뮬레이터",
        description: "내 포트폴리오에서 평단가와 수량을 자동 주입받아 매수 시뮬레이션을 진행하고, 결과를 [Optimizer Info] 로그 형식으로 위장 출력"
      },
      {
        title: "뉴스 수집 & AI 요약 브리핑",
        description: "매시간 정각 백그라운드에서 뉴스를 수집하고, Google Gemini API로 한 줄 요약하여 코드 주석 스타일로 노출"
      }
    ],
    image: project1Img,
    github: [
      { label: "Github URL", url: "https://github.com/Secretly-Greatly-web" }
    ],
    period: "2026.05.18 ~ 2026.06.19",
    team: "FE(2), BE(1), FullStack(3)",
    role: "FullStack - FE 팀장, 개발환경 구축 및 배포, 뉴스 서버 구축, 채팅 기능 구현",
    tags: ["Next.js", "Nest.js", "Express", "Gemini API", "Orval", "Mock Service Worker", "Socket.IO"],
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
    title: "널널 (Null Null)",
    subtitle: "프로그래머스 웹 풀스택 9기 2차 프로젝트",
    description: "안되는시간 빼고 널널한 시간 찾기",
    overview: "소규모 그룹(스터디, 동아리 등)의 모임 시간을 정할 때 겪는 번거로움을 해결하기 위한 '역발상' 일정 조율 서비스입니다. 가능한 시간을 묻는 대신 '안되는 시간'만 블록 처리하여 입력 부담을 줄이고, 시스템이 최적의 시간과 장소를 자동으로 추천해 줍니다. 시간 결정과 장소 탐색을 하나의 흐름으로 연결해 끊김 없는 사용자 경험을 제공합니다.",
    features: [
      {
        title: "NULL 입력 방식 (역발상 조율)",
        description: "가능 시간을 일일이 선택하지 않고 '안되는 시간'만 드래그하여 입력 시간을 획기적으로 단축"
      },
      {
        title: "자동 의사결정 및 장소 추천",
        description: "전원 가용 시간 교집합 계산 및 출발지 무게중심 기반의 인근 장소를 스코어링하여 최적안 자동 제시"
      },
      {
        title: "실시간 현황 및 알림 시스템",
        description: "WebSocket 기반으로 참여자 입력 상태 실시간 트래킹 및 새로고침 없는 상태 동기화"
      },
      {
        title: "무가입 참여 및 PWA 앱 경험",
        description: "링크 접속 및 이름 입력만으로 즉시 참여 가능하며, PWA를 통해 앱 설치 없이도 네이티브 수준의 UX와 웹 푸시 알림 제공"
      }
    ],
    image: project4Img,
    github: [
      { label: "Github Repository", url: "https://github.com/Legend-Vibe-Guys" }
    ],
    period: "2026.04.19 ~ 2026.05.17",
    team: "FE (3), BE(2)",
    role: "Frontend - 프론트엔드 팀장, FE 개발환경 구축 및 배포, 방 생성 기능 구현",
    tags: ["Next.js", "React", "Nest.js", "Zustand", "TanStack Query", "Tailwind CSS", "Socket.IO", "Kakao Map API"],
    contributions: [
      {
        title: "복잡한 폼 상태 관리 및 유효성 검증 최적화 (방 생성 기능)",
        situation: "방 생성 시 제목, 최대 30일의 기간, 시간대 설정 등 복잡한 입력 데이터를 다뤄야 하며, 잦은 상태 변경으로 인한 렌더링 지연 우려",
        solution: "react-hook-form을 도입하여 비제어 컴포넌트 방식으로 불필요한 리렌더링을 방지하고, Zod를 결합하여 스키마 기반의 선언적 유효성 검증 로직 구현",
        result: "복잡한 방 생성 폼의 렌더링 성능 최적화 및 런타임 타입 안정성을 확보하여 사용자 입력 오류 사전 차단"
      },
      {
        title: "프론트엔드 아키텍처 및 CI/CD 자동화 구축",
        situation: "다수의 프론트엔드 팀원(3명)이 협업하는 상황에서 코드 스타일의 파편화 방지 및 일관된 배포/품질 관리 파이프라인 필요",
        solution: "Next.js 기반의 환경에서 ESLint, Prettier, Husky를 연동하여 자동 검증을 강제하고, Vercel을 활용해 브랜치별 프리뷰 및 자동 배포 파이프라인(CI/CD) 구축",
        result: "결함 코드 유입 차단 및 배포 자동화를 통해 팀 전체의 코드 품질을 상향 평준화하고 개발 및 QA 생산성 극대화"
      }
    ]
  },
  {
    title: "아이케어 AI (iCare AI) - 키즈노트",
    subtitle: "KIT 바이브코딩 공모전",
    description: "AI 기반 영유아 스마트 리포트 및 보육 행정 솔루션",
    overview: "보육 교사들의 과도한 행정 업무 부담을 줄이고 학부모에게 투명한 발달 지표를 제공하기 위해 기획된 'AI 기반 스마트 보육 플랫폼'입니다. 파편화된 일상 관찰 기록, 사진, 출결 데이터를 하나의 플랫폼으로 통합하고, 구글의 최신 Gemini API를 활용해 단편적인 기록들을 객관적이고 전문적인 '월간 스마트 발달 리포트'로 자동 변환하여 제공합니다.",
    features: [
      {
        title: "스마트 발달 리포트 자동 생성 (Gemini API)",
        description: "한 달간 누적된 퀵 메모를 AI가 분석하여 5대 발달 영역을 수치화하고, 전문가 수준의 서술형 종합 평가를 자동 작성"
      },
      {
        title: "현장 밀착형 퀵 메모 및 미디어 업로드",
        description: "바쁜 보육 환경을 고려해 터치 횟수를 최소화한 간편 메모 폼과 Cloudinary 연동을 통한 고화질 활동 사진 최적화 업로드 지원"
      },
      {
        title: "성장 지표 시각화 (Radar Chart & Graph)",
        description: "AI가 도출한 발달 정량화 수치를 프론트엔드에서 방사형 차트 및 성장 그래프로 렌더링하여 직관적인 피드백 제공"
      },
      {
        title: "올인원 보육 행정 대시보드",
        description: "원아 출결 관리, 통합 알림장, 학사 일정 캘린더 등 보육 기관 운영에 필요한 행정 및 소통 기능을 단일 서비스 내 통합"
      }
    ],
    image: project2Img,
    github: [
      { label: "Github URL", url: "https://github.com/Legend-Vibe-Guys" }
    ],
    period: "2026.04.06 ~ 2026.04.13",
    team: "FullStack (4)",
    role: "FullStack - 프로젝트 팀장, FE/BE 개발환경 구축 및 배포, Firebase 기반 로그인 서비스 구현",
    tags: ["React", "TypeScript", "Vite", "Tailwind CSS", "Node.js", "Express", "Firebase Auth", "Gemini API", "Cloudinary"],
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
    subtitle: "K-디지털 챌린지 : NET 챌린지 캠프 시즌 12 공모전",
    description: "다중 센서와 AI를 활용한 아동·청소년 실시간 위험 탐지 및 스마트 방범 시스템",
    overview: "아동 및 청소년 등 범죄 취약 계층의 안전을 보장하기 위한 스마트 장치(아두이노) 기반 실시간 관제 솔루션입니다. 기기에서 수집된 다중 센서(충격, 소리, GPS)와 음성 데이터를 AI 모델(Whisper, ChatGPT 등)이 실시간으로 분석하여 위기 상황을 판단합니다. 프론트엔드는 WebSocket을 활용한 통합 관제 대시보드와 지도 기반 위치 추적 기능을 제공하여, 사용자가 조작하지 못하는 위급 상황에서도 관계 기관 및 보호자의 신속한 초동 대응을 가능하게 합니다.",
    features: [
      {
        title: "통합 관제 대시보드 (WebSocket)",
        description: "WebSocket을 통해 다수 기기의 위협 상태(위험/경고)를 실시간으로 수신하고, 위협도에 따른 시각적 우선순위 정렬 및 자동 갱신 지원"
      },
      {
        title: "실시간 위치 관제 및 원격 제어 (Kakao Maps)",
        description: "카카오맵 API를 연동해 실시간 위치와 이동 경로를 시각화하며, 관제 화면 내에서 현장 음성 청취 및 보호자 긴급 SMS 발송 기능 통합"
      },
      {
        title: "사용자 친화적 기기 관리 및 유효성 검증",
        description: "MAC 주소 및 연락처 자동 포맷팅, 진행률 시각화 등 UI/UX를 개선한 기기 등록 폼과 사용자/보호자 정보를 분리한 반응형 목록 제공"
      },
      {
        title: "AI 분석 히스토리 필터링",
        description: "과거 AI 분석 기록(타임라인, 예측 결과, 현장 음성)에 대해 기기별 및 기간별 필터링 검색을 지원하는 로그 시스템"
      }
    ],
    image: project3Img,
    github: [
      { label: "Github URL", url: "https://github.com/The-cane-of-Min-Jeung" }
    ],
    period: "2025.07.08 ~ 2025.11.07",
    team: "FE (1), BE (3), H/W (1), AI (1)",
    role: "Frontend - 실시간 관제 대시보드 설계 및 UI/UX 구현, 위치 데이터 렌더링 최적화",
    tags: ["Vue.js", "Vite", "Kakao Map API", "Websocket", "Bootstrap"],
    contributions: [
      {
        title: "Kakao Map 기반 실시간 위치 관제 및 대시보드 UI 구축",
        situation: "비상 알림 발생 시 관제자가 위험 위치(CCTV, 스마트 장치 위치)를 즉각 파악해야 하나, 지도 위 다수 마커 및 오버레이 렌더링 시 UI 지연 현상 발생 우려",
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
