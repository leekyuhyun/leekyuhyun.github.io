export interface ValueItem {
  title: string;
  description: string;
  iconName: "Zap" | "Users" | "ShieldCheck";
}

export const VALUES_DATA: ValueItem[] = [
  {
    title: "도구 도입의 이유와 명확한 근거를 탐구합니다.",
    description: "MSW로 백엔드 의존성을 분리하고, 자동 검사 도구로 팀의 반복 확인 작업을 줄였습니다.",
    iconName: "Zap",
  },
  {
    title: "화면 구현을 넘어 서비스를 안정적으로 배포하고 운영합니다.",
    description: "화면 구현에 그치지 않고 배포 이후 발견되는 연결, 인증, 가용성 문제까지 추적하고 해결합니다.",
    iconName: "ShieldCheck",
  },
  {
    title: "팀의 시너지를 이끄는 주도적 리더십과 빠른 동기화를 지향합니다.",
    description: "개발 환경과 문제 해결 과정을 문서화하고 공유하여 팀이 빠르게 같은 맥락을 이해하도록 돕습니다.",
    iconName: "Users",
  },
];
