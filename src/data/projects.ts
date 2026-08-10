import project1Img from "../assets/images/project1.png";
import project2Img from "../assets/images/project2.png";
import project3Img from "../assets/images/project3.png";
import type { Project } from "../types/project";

export const PROJECTS_DATA: Project[] = [
  {
    title: "은밀하게 위대하게",
    category: "AI 기반 개발자 포트폴리오 및 뉴스 서비스",
    subtitle: "프로그래머스 웹 풀스택 9기 최종 프로젝트",
    description: "개발자에게 익숙한 IDE 화면에서 주식 포트폴리오를 관리하고 AI 요약 뉴스를 확인하는 서비스",
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
      { label: "Frontend", url: "https://github.com/Secretly-Greatly-web/frontend" },
      { label: "News Worker", url: "https://github.com/Secretly-Greatly-web/news" }
    ],
    period: "2026.05.18 ~ 2026.06.19",
    team: "FE(2), BE(1), FullStack(3)",
    role: "프론트엔드 팀장 · 풀스택 개발 - 프론트엔드 개발 환경과 품질 기준 구축, 뉴스 워커 구현",
    tags: ["Next.js", "TypeScript", "Express", "Supabase", "Gemini API", "MSW", "node-cron"],
    contributions: [
      {
        title: "백엔드와 독립적인 프론트엔드 검증 환경 구축",
        situation: "백엔드 API가 완성되기 전에는 인증·주식·헬스체크 화면의 정상 흐름과 오류 흐름을 검증하기 어려웠습니다.",
        solution: "MSW로 실제 API 계약을 반영한 모킹 환경을 구성하고 기능별 정상·오류 응답을 분리했습니다.",
        result: "백엔드 진행 상황과 관계없이 주요 사용자 흐름을 독립적으로 개발하고 검증할 수 있게 했습니다."
      },
      {
        title: "커밋 단계 코드 품질 기준 자동화",
        situation: "여러 프론트엔드 개발자가 함께 작업하면서 파일·폴더·타입 네이밍과 코드 스타일을 일관되게 유지할 기준이 필요했습니다.",
        solution: "네이밍 검사와 ESLint·Prettier·Husky·lint-staged를 연동해 규칙을 커밋 단계에서 검사하도록 구성했습니다.",
        result: "개발 규칙을 문서와 자동 검사로 공유해 팀이 같은 기준으로 코드를 작성하도록 만들었습니다."
      },
      {
        title: "뉴스 수집·요약 워커와 중복 방지 파이프라인 구축",
        situation: "주기적인 뉴스 수집 과정에서 중복 기사 적재와 불필요한 AI 호출, Rate Limit 문제가 발생할 수 있었습니다.",
        solution: "Express와 node-cron으로 수집 워커를 구성하고 Cheerio 본문 스크래핑, Gemini 구조화 요약·태그 분류, Supabase 적재를 연결했습니다. 기사 URL 선조회와 UNIQUE 제약조건·upsert도 함께 적용했습니다.",
        result: "신규 기사만 수집·요약하도록 데이터 흐름을 구성하고, 호출 간격 제어로 외부 API 제한에 대응했습니다."
      }
    ]
  },
  {
    title: "아이케어 AI (iCare AI) - 키즈노트",
    category: "AI 보육 리포트 서비스",
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
      { label: "Frontend", url: "https://github.com/Legend-Vibe-Guys/Frontend" },
      { label: "Backend", url: "https://github.com/Legend-Vibe-Guys/Backend" }
    ],
    period: "2026.04.06 ~ 2026.04.13",
    team: "FullStack (4)",
    role: "풀스택 팀장 - React·Express 개발 환경 구축, Firebase 인증·회원가입 API 구현",
    tags: ["React", "Express", "Firebase Admin", "Firestore", "Express Validator", "Swagger"],
    contributions: [
      {
        title: "Firebase 인증·회원가입 API 구현",
        situation: "프론트엔드에서 전달된 Firebase 토큰을 서버에서 검증하고 사용자와 원아 정보를 일관되게 저장해야 했습니다.",
        solution: "Firebase Admin 기반 토큰 인증과 회원가입 API를 구현하고, Batch Write로 사용자·원아 정보를 함께 저장했습니다.",
        result: "인증과 초기 데이터 생성을 하나의 흐름으로 연결해 회원가입 과정의 데이터 일관성을 확보했습니다."
      },
      {
        title: "API 검증·오류 처리와 팀 개발 환경 표준화",
        situation: "짧은 개발 기간 안에 입력 검증과 오류 응답, API 명세, 코드 품질 기준을 팀 전체가 일관되게 적용해야 했습니다.",
        solution: "Express Validator와 전역 오류 처리를 공통화하고 Swagger로 인증 API를 문서화했습니다. React·Express 환경에 ESLint·Prettier·Husky도 구성했습니다.",
        result: "API 사용 기준과 코드 품질 기준을 한곳에 정리해 프론트엔드와 백엔드의 협업 기준을 통일했습니다."
      },
      {
        title: "Render 데모 환경의 Cold Start 완화",
        situation: "Render 데모 서버가 유휴 상태 이후 첫 요청에서 지연되는 문제가 있었습니다.",
        solution: "경량 헬스체크 API를 구현하고 외부 모니터링 서비스가 주기적으로 상태를 확인하도록 구성했습니다.",
        result: "데모 환경에서 첫 요청 시 발생하는 대기 시간을 완화했습니다."
      }
    ]
  },
  {
    title: "범죄 취약 계층의 초동 대응을 위한 스마트 장치 및 AI 기반 실시간 대응 서비스",
    category: "AI·IoT 실시간 안전 관제 시스템",
    award: "NET 챌린지 캠프 시즌 12 은상",
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
      { label: "Frontend", url: "https://github.com/The-cane-of-Min-Jeung/frontend" }
    ],
    period: "2025.07.08 ~ 2025.11.14",
    team: "FE (1), BE (3), H/W (1), AI (1)",
    role: "프론트엔드 전담 개발 - 실시간 관제 대시보드와 기기·상황·알림 관리 기능 구현",
    tags: ["Vue.js", "Axios", "WebSocket", "Kakao Map API"],
    contributions: [
      {
        title: "WebSocket 기반 실시간 관제 UI 구현",
        situation: "긴급 이벤트의 경고·위험·종료 상태와 연결 대기·실패·데이터 없음 상태를 화면에서 명확하게 구분해야 했습니다.",
        solution: "WebSocket 이벤트를 상황·알림 대시보드와 연동하고 상태별 로딩·예외 흐름과 UI 갱신 규칙을 구현했습니다.",
        result: "관제자가 실시간 상태 변화와 연결 문제를 구분해 확인할 수 있는 관제 흐름을 완성했습니다."
      },
      {
        title: "위험 위치와 주변 CCTV 지도 시각화",
        situation: "위험 발생 지점과 주변 관제 자원을 한 화면에서 빠르게 파악할 수 있어야 했습니다.",
        solution: "Kakao Map에 위험 위치와 반경 200m 내 CCTV를 마커로 표시하고 관리기관·카메라 수·해상도 등의 상세 정보를 제공했습니다.",
        result: "위험 위치와 주변 CCTV 정보를 지도 기반 관제 화면에서 함께 확인할 수 있게 했습니다."
      },
      {
        title: "관제 기능 모듈화와 조회 흐름 개선",
        situation: "기기 관리·상황·알림 화면에서 반복 UI와 API 호출 로직이 늘어나 수정 범위가 커질 수 있었습니다.",
        solution: "반복 UI를 기능 단위 컴포넌트로 분리하고 API 호출을 서비스 계층으로 격리했습니다. AI 분석 히스토리에 최신순 정렬·페이지네이션·UTC→KST 변환도 적용했습니다.",
        result: "중복 코드를 줄이고 기기·관제 기록을 일관된 방식으로 조회·관리할 수 있게 했습니다."
      }
    ]
  },
];
