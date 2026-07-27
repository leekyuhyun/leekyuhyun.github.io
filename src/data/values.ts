export interface ValueItem {
  title: string;
  description: string;
  iconName: "Zap" | "Users" | "ShieldCheck";
}

export const VALUES_DATA: ValueItem[] = [
  {
    title: "도구 도입의 이유와 명확한 근거를 탐구합니다.",
    description: "MSW로 백엔드 의존성을 분리하여 FE 단독 검증 환경을 구축하고, Orval로 Swagger 명세 기반의 API 클라이언트 및 타입 생성을 자동화하여 협업 속도를 높이고 휴먼 에러를 차단했습니다.",
    iconName: "Zap",
  },
  {
    title: "화면 구현을 넘어 서비스를 안정적으로 배포하고 운영합니다.",
    description: "Vercel과 Render 환경에서 서비스를 직접 배포·운영하며, 외부 헬스체크(UptimeRobot)와 스케줄러를 도입해 Cold Start 제약을 극복하고 응답 속도를 개선했습니다.",
    iconName: "ShieldCheck",
  },
  {
    title: "팀의 시너지를 이끄는 주도적 리더십과 빠른 동기화를 지향합니다.",
    description: "다수의 프로젝트에서 팀장을 역임하며 개발 환경 및 배포 파이프라인 구축을 주도했습니다. 신규 기술 도입 과정과 트러블슈팅 경험을 꼼꼼히 문서화하여 공유하고, 기술적·커뮤니케이션 병목을 먼저 나서서 해결하며 팀원들과 함께 성장하는 문화를 만듭니다.",
    iconName: "Users",
  },
];
