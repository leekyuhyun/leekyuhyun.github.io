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
    title: "Cloud Sync App",
    description:
      "A real-time file synchronization tool built with WebSockets and Node.js. Supports incremental sync, conflict resolution, and multi-device support.",
    tags: ["TypeScript", "Node.js", "WebSocket"],
    github: "https://github.com/leekyuhyun/cloud-sync",
    year: "2026",
  },
  {
    slug: "weather-dashboard",
    title: "Weather Dashboard",
    description:
      "Interactive weather dashboard with 7-day forecasts, real-time radar maps, and location-based alerts using OpenWeather API.",
    tags: ["React", "Next.js", "Tailwind CSS"],
    link: "https://weather-demo.vercel.app",
    year: "2025",
  },
  {
    slug: "markdown-editor",
    title: "Markdown Editor",
    description:
      "A minimal, distraction-free Markdown editor with live preview, syntax highlighting, and export to PDF.",
    tags: ["TypeScript", "React", "CodeMirror"],
    github: "https://github.com/leekyuhyun/md-editor",
    year: "2025",
  },
  {
    slug: "api-gateway",
    title: "API Gateway Service",
    description:
      "Lightweight API gateway with rate limiting, request logging, and JWT authentication for microservices architecture.",
    tags: ["Go", "Docker", "Redis"],
    github: "https://github.com/leekyuhyun/api-gateway",
    year: "2024",
  },
];

export const blogPosts: BlogPost[] = [
  {
    slug: "building-with-nextjs-16",
    title: "Next.js 16 and the Future of React Server Components",
    excerpt:
      "Exploring the latest features in Next.js 16, including Cache Components, improved routing, and Turbopack stability.",
    date: "2026-01-15",
    tags: ["Next.js", "React"],
    content: `Next.js 16 has brought significant improvements to the developer experience. The introduction of Cache Components with the "use cache" directive makes caching more explicit and flexible than ever before.

## Key Highlights

### Cache Components
The new "use cache" directive allows you to cache pages, components, and functions at a granular level. The compiler automatically generates cache keys wherever it's used.

### Turbopack Stability
Turbopack is now the default bundler and is fully stable. Build times have improved dramatically, especially for large projects.

### React Compiler Support
The React Compiler is now stable and can be enabled via the reactCompiler flag in next.config.js. This automatically optimizes component re-renders without manual memoization.

## Getting Started

To upgrade to Next.js 16, simply run:

\`\`\`bash
npm install next@latest react@latest react-dom@latest
\`\`\`

The migration path is smooth, with most breaking changes being minimal. The biggest thing to watch for is that params, searchParams, headers, and cookies in Server Components are now asynchronous and must be awaited.`,
  },
  {
    slug: "typescript-patterns-2026",
    title: "Advanced TypeScript Patterns I Use Every Day",
    excerpt:
      "Practical TypeScript patterns including discriminated unions, branded types, and type-safe API clients.",
    date: "2025-12-20",
    tags: ["TypeScript", "Patterns"],
    content: `TypeScript's type system is incredibly powerful. Here are patterns I reach for in almost every project.

## Discriminated Unions

Using a common "type" field to narrow union types is one of the most useful patterns:

\`\`\`typescript
type Result<T> =
  | { type: 'success'; data: T }
  | { type: 'error'; error: Error };
\`\`\`

## Branded Types

Prevent mixing up primitive values by branding them:

\`\`\`typescript
type UserId = string & { readonly __brand: 'UserId' };
type PostId = string & { readonly __brand: 'PostId' };
\`\`\`

## Type-safe API Clients

Using generics with Zod schemas to create fully type-safe API calls gives you both runtime validation and compile-time type checking.

These patterns have saved me from countless bugs and made my code more self-documenting.`,
  },
  {
    slug: "docker-dev-environment",
    title: "Setting Up the Perfect Docker Dev Environment",
    excerpt:
      "How I configure Docker Compose for local development with hot reloading, database persistence, and debugging.",
    date: "2025-11-03",
    tags: ["Docker", "DevOps"],
    content: `A good Docker development environment should feel as fast as developing locally while providing the isolation benefits of containers.

## My Setup

I use Docker Compose with multiple services:
- **App**: Next.js with volume mounts for hot reloading
- **Database**: PostgreSQL with named volumes for persistence
- **Cache**: Redis for session storage and caching

## Key Tips

1. Use volume mounts for source code to enable HMR
2. Keep node_modules in a separate named volume
3. Use .env files for environment-specific configuration
4. Set up health checks for dependent services

## The Result

With this setup, I can \`docker compose up\` and have a fully working environment in seconds, with all services properly connected and hot reloading working perfectly.`,
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
