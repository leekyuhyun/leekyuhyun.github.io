export interface BlogPost {
  title: string;
  description: string;
  tag: string;
  url: string;
}

export const BLOG_DATA: BlogPost[] = [
  {
    title: "Render Cold Start 해결기: UptimeRobot으로 헬스체크 자동화하기",
    description: "Render 무료 티어 서버의 Cold Start로 인한 초기 로딩 지연 문제를 해결하기 위해, UptimeRobot을 연동해 주기적인 헬스체크(Ping)를 수행하도록 자동화하여 서버 응답 속도를 개선한 트러블슈팅 기록입니다.",
    tag: "Infra",
    url: "https://velog.io/@leekh010502/Render-Cold-Start-%ED%95%B4%EA%B2%B0%EA%B8%B0-UptimeRobot%EC%9C%BC%EB%A1%9C-%ED%97%AC%EC%8A%A4%EC%B2%B4%ED%81%AC-%EC%9E%90%EB%8F%99%ED%99%94%ED%95%98%EA%B8%B0"
  },
  {
    title: "배포 후 API 호출이 막힌다? Vercel-EC2 HTTP/HTTPS 문제 해결기",
    description: "Vercel(HTTPS)로 배포한 프론트엔드와 EC2(HTTP) 백엔드 간의 Mixed Content 에러를 해결하기 위해 Nginx 리버스 프록시와 Let's Encrypt를 적용해 HTTPS 통신을 구축한 인프라 트러블슈팅 경험입니다.",
    tag: "Infra",
    url: "https://velog.io/@leekh010502/%EB%B0%B0%ED%8F%AC-%ED%9B%84-API-%ED%98%B8%EC%B6%9C%EC%9D%B4-%EB%A7%89%ED%9E%8C%EB%8B%A4-Vercel-EC2-HTTPHTTPS-%EB%AC%B8%EC%A0%9C-%ED%95%B4%EA%B2%B0%EA%B8%B0"
  },
  {
    title: "Mock Service Worker (MSW): 백엔드 없이 프론트엔드 개발하기",
    description: "프론트엔드 개발 시 백엔드 API가 완성될 때까지 대기해야 하는 병목 현상을 극복하고자 MSW(Mock Service Worker)를 도입하여 독립적인 개발 환경을 구축하고 업무 효율성을 크게 높인 경험을 정리했습니다.",
    tag: "Frontend",
    url: "https://velog.io/@leekh010502/FE-%EA%B0%9C%EB%B0%9C-%ED%9A%A8%EC%9C%A8%EC%84%B1-%EC%98%AC%EB%A6%AC%EA%B8%B0"
  },
];
