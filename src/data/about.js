export const values = [
  { no: "01", title: "선택에는 근거를", text: "도구를 먼저 고르기보다 문제를 정의하고, 팀의 병목을 줄이는 선택인지 검증합니다." },
  { no: "02", title: "구현 이후까지", text: "화면 구현에 그치지 않고 연결, 인증, 배포, 가용성 문제까지 추적합니다." },
  { no: "03", title: "팀의 기준을 함께", text: "개발 규칙과 해결 과정을 기록해 팀이 같은 맥락에서 빠르게 협업하도록 돕습니다." },
];

export const evidence = [
  "MSW 모킹 환경으로 백엔드와 독립적인 개발·검증 흐름 구축",
  "Firebase 인증부터 뉴스 워커, 배포 환경 문제까지 해결",
  "커밋 검사와 API 문서화로 팀의 개발 규칙 공유",
];

export const skills = [
  ["FRONTEND", "React", "Next.js", "Vue.js", "TypeScript", "Tailwind CSS"],
  ["BACKEND", "Node.js", "Express", "Socket.IO", "REST API"],
  ["DATA", "PostgreSQL", "Supabase", "Firebase"],
  ["DEPLOYMENT", "Vercel", "Render"],
  ["COLLABORATION & TOOLS", "Git", "GitHub", "Notion", "Slack", "Figma", "MSW"],
];


export const workflow = [
  ["01", "탐색", "요구사항을 구체화하고 여러 구현 방향을 비교합니다.", "요구사항 정리 · 접근 방식 비교"],
  ["02", "초안", "코드·테스트·문서의 반복 작업을 빠르게 시작합니다.", "코드 초안 · 예외 시나리오 · 문서"],
  ["03", "검증", "타입 검사와 실제 시나리오 테스트를 거쳐 직접 수정합니다.", "API 계약 대조 · 오류 응답 · 실제 데이터"],
];
