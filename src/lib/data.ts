export interface Project {
  slug: string;
  title: string;
  description: string;
  tags: string[];
  link?: string;
  github?: string;
  year: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  tags: string[];
  content: string;
}

export const projects: Project[] = [
  {
    slug: "cloud-sync-app",
    title: "클라우드 동기화 앱",
    description:
      "WebSocket과 Node.js로 구축한 실시간 파일 동기화 도구입니다. 증분 동기화, 충돌 해결, 멀티 디바이스 지원을 제공합니다.",
    tags: ["TypeScript", "Node.js", "WebSocket"],
    github: "https://github.com/leekyuhyun/cloud-sync",
    year: "2026",
  },
  {
    slug: "weather-dashboard",
    title: "날씨 대시보드",
    description:
      "OpenWeather API를 활용한 인터랙티브 날씨 대시보드입니다. 7일 예보, 실시간 레이더 맵, 위치 기반 알림 기능을 제공합니다.",
    tags: ["React", "Next.js", "Tailwind CSS"],
    link: "https://weather-demo.vercel.app",
    year: "2025",
  },
  {
    slug: "markdown-editor",
    title: "마크다운 에디터",
    description:
      "실시간 미리보기, 구문 강조, PDF 내보내기 기능을 갖춘 미니멀한 마크다운 에디터입니다.",
    tags: ["TypeScript", "React", "CodeMirror"],
    github: "https://github.com/leekyuhyun/md-editor",
    year: "2025",
  },
  {
    slug: "api-gateway",
    title: "API 게이트웨이 서비스",
    description:
      "마이크로서비스 아키텍처를 위한 경량 API 게이트웨이입니다. 요청 제한, 요청 로깅, JWT 인증 기능을 포함합니다.",
    tags: ["Go", "Docker", "Redis"],
    github: "https://github.com/leekyuhyun/api-gateway",
    year: "2024",
  },
];

export const blogPosts: BlogPost[] = [
  {
    slug: "building-with-nextjs-16",
    title: "Next.js 16과 React 서버 컴포넌트의 미래",
    excerpt:
      "Next.js 16의 최신 기능인 캐시 컴포넌트, 개선된 라우팅, Turbopack 안정화에 대해 알아봅니다.",
    date: "2026-01-15",
    tags: ["Next.js", "React"],
    content: `Next.js 16은 개발자 경험에 큰 개선을 가져왔습니다. "use cache" 지시어가 포함된 캐시 컴포넌트의 도입으로 캐싱이 그 어느 때보다 명시적이고 유연해졌습니다.

## 주요 하이라이트

### 캐시 컴포넌트
새로운 "use cache" 지시어를 사용하면 페이지, 컴포넌트, 함수를 세밀한 수준에서 캐시할 수 있습니다. 컴파일러가 사용되는 모든 곳에서 자동으로 캐시 키를 생성합니다.

### Turbopack 안정화
Turbopack이 이제 기본 번들러이며 완전히 안정화되었습니다. 특히 대규모 프로젝트에서 빌드 시간이 크게 개선되었습니다.

### React 컴파일러 지원
React 컴파일러가 안정화되어 next.config.js의 reactCompiler 플래그를 통해 활성화할 수 있습니다. 수동 메모이제이션 없이 컴포넌트 리렌더링을 자동으로 최적화합니다.

## 시작하기

Next.js 16으로 업그레이드하려면 다음 명령어를 실행하세요:

\`\`\`bash
npm install next@latest react@latest react-dom@latest
\`\`\`

마이그레이션 경로는 매끄러우며, 대부분의 주요 변경 사항은 최소화되어 있습니다. 가장 주의할 점은 서버 컴포넌트에서 params, searchParams, headers, cookies가 비동기로 변경되어 반드시 await 해야 한다는 것입니다.`,
  },
  {
    slug: "typescript-patterns-2026",
    title: "매일 사용하는 고급 TypeScript 패턴",
    excerpt:
      "판별 유니온, 브랜드 타입, 타입 안전 API 클라이언트 등 실용적인 TypeScript 패턴을 소개합니다.",
    date: "2025-12-20",
    tags: ["TypeScript", "패턴"],
    content: `TypeScript의 타입 시스템은 매우 강력합니다. 거의 모든 프로젝트에서 사용하는 패턴들을 소개합니다.

## 판별 유니온 (Discriminated Unions)

공통 "type" 필드를 사용하여 유니온 타입을 좁히는 것은 가장 유용한 패턴 중 하나입니다:

\`\`\`typescript
type Result<T> =
  | { type: 'success'; data: T }
  | { type: 'error'; error: Error };
\`\`\`

## 브랜드 타입 (Branded Types)

원시 값의 혼용을 방지하기 위해 브랜딩합니다:

\`\`\`typescript
type UserId = string & { readonly __brand: 'UserId' };
type PostId = string & { readonly __brand: 'PostId' };
\`\`\`

## 타입 안전 API 클라이언트

Zod 스키마와 제네릭을 사용하여 완전한 타입 안전 API 호출을 만들면 런타임 유효성 검사와 컴파일 타임 타입 검사를 모두 제공합니다.

이 패턴들 덕분에 수많은 버그를 예방하고 코드의 자기 문서화를 가능하게 했습니다.`,
  },
  {
    slug: "docker-dev-environment",
    title: "완벽한 Docker 개발 환경 구성하기",
    excerpt:
      "핫 리로딩, 데이터베이스 영속성, 디버깅을 위한 Docker Compose 로컬 개발 환경 설정 방법을 소개합니다.",
    date: "2025-11-03",
    tags: ["Docker", "DevOps"],
    content: `좋은 Docker 개발 환경은 컨테이너의 격리 이점을 제공하면서도 로컬 개발처럼 빠르게 느껴져야 합니다.

## 제 구성

Docker Compose로 여러 서비스를 사용합니다:
- **앱**: 핫 리로딩을 위한 볼륨 마운트가 적용된 Next.js
- **데이터베이스**: 영속성을 위한 네임드 볼륨이 적용된 PostgreSQL
- **캐시**: 세션 저장과 캐싱을 위한 Redis

## 핵심 팁

1. 소스 코드에 볼륨 마운트를 사용하여 HMR 활성화
2. node_modules는 별도의 네임드 볼륨에 보관
3. 환경별 구성에 .env 파일 사용
4. 의존 서비스에 헬스 체크 설정

## 결과

이 구성으로 \`docker compose up\` 한 번이면 모든 서비스가 제대로 연결되고 핫 리로딩이 완벽하게 작동하는 개발 환경을 몇 초 만에 구축할 수 있습니다.`,
  },
];

export function formatDate(dateStr: string): string {
  const date = new Date(dateStr);
  return date.toLocaleDateString("ko-KR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
