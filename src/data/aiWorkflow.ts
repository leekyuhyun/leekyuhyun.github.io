export interface AiWorkflowItem {
  step: string;
  title: string;
  description: string;
  iconName: "Search" | "Code" | "Check";
}

export const AI_TOOLS = ["ChatGPT", "Codex"];

export const AI_WORKFLOW_DATA: AiWorkflowItem[] = [
  {
    step: "01",
    title: "아이디어와 접근 방식 탐색",
    description:
      "요구사항을 구체화하고 여러 구현 방향을 빠르게 비교할 때 AI를 활용합니다.",
    iconName: "Search",
  },
  {
    step: "02",
    title: "반복 작업과 초안 가속",
    description:
      "코드 초안, 테스트 케이스, 문서 정리처럼 반복되는 작업의 시작점을 빠르게 만듭니다.",
    iconName: "Code",
  },
  {
    step: "03",
    title: "직접 검증하고 프로젝트에 적용",
    description:
      "생성된 결과를 그대로 사용하지 않고 코드 리뷰, 타입 검사, 테스트를 거쳐 직접 수정합니다.",
    iconName: "Check",
  },
];
