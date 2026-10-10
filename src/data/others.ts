export interface HistoryItem {
  title: string;
  detail?: string;
  period?: string;
}

export interface OthersData {
  training: HistoryItem[];
  education: HistoryItem[];
  military: HistoryItem[];
  awards: HistoryItem[];
  activities: HistoryItem[];
}

export const OTHERS_DATA: OthersData = {
  training: [
    {
      title: "프로그래머스 웹 풀스택 데브코스 9기 수료",
      period: "2025.12.30 ~ 2026.06.19",
    }
  ],
  education: [
    {
      title: "안양대학교 소프트웨어학과 졸업",
      period: "2020.03 ~ 2026.02",
    },
    {
      title: "시흥매화고등학교 졸업",
      period: "2017.03 ~ 2020.02",
    }
  ],
  military: [
    {
      title: "육군 병장 만기전역 (통신)",
      period: "2021.05.18 ~ 2022.11.17",
    }
  ],
  awards: [
    {
      title: "K-디지털 챌린지 : NET 챌린지 캠프 시즌 12 은상 (한국정보통신협회장상)",
      period: "2025.11",
    }
  ],
  activities: [
    {
      title: "KIT 바이브코딩 공모전 | 주최: 코리아 IT 아카데미",
    },
    {
      title: "NET 챌린지 캠프 시즌 12 | 주최: 과학기술정보통신부 · 주관: NIA, KOREN",
    },
  ]
};
