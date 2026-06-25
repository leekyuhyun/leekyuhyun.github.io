export interface ValueItem {
  title: string;
  description: string;
  iconName: "Zap" | "Users" | "ShieldCheck";
}

export const VALUES_DATA: ValueItem[] = [
  {
    title: "효율성 & 생산성 극대화",
    description: "반복적인 단순 작업이나 개발 환경의 낭비를 제거하고 자동화를 구축하여 고부가가치 비즈니스 로직에 몰입합니다.",
    iconName: "Zap",
  },
  {
    title: "소통과 협업의 병목 해소",
    description: "프론트엔드와 백엔드 간의 통신 및 API 스펙(Orval, MSW 등)을 효율화하여 협업 오버헤드를 낮춥니다.",
    iconName: "Users",
  },
  {
    title: "품질 중심의 아키텍처",
    description: "단순 구현을 넘어 유지보수가 편하고 지속 가능한 구조를 고민하고 견고한 제품을 만들어 냅니다.",
    iconName: "ShieldCheck",
  },
];
