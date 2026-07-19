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
    description: "Vercel과 Render 환경에서 프론트엔드·백엔드 서비스를 직접 배포하고 운영했습니다. 외부 헬스체크 툴(UptimeRobot) 연동 및 주기적 활성화 스케줄러를 설계하여 프리티어 인프라의 Cold Start 제약을 극복하고 초기 응답 속도를 개선했습니다.",
    iconName: "ShieldCheck",
  },
  {
    title: "시행착오의 꼼꼼한 기록(TIL)을 통해 팀과 빠르게 동기화합니다.",
    description: "공식 문서 중심의 집요한 탐구로 문제를 해결하며, 신규 기술 도입 과정과 트러블슈팅 경험을 문서화하여 팀원들과 공유하고 함께 성장하는 생산적인 개발 환경을 지향합니다.",
    iconName: "Users",
  },
];
