import type { Metadata } from "next"
import { Cloud, Github, Mail, MapPin } from "lucide-react"

export const metadata: Metadata = {
  title: "소개 | 이규현",
  description: "개발자 이규현을 소개합니다.",
}

const skills = [
  { category: "프론트엔드", items: ["React", "Next.js", "TypeScript", "Tailwind CSS"] },
  { category: "백엔드", items: ["Node.js", "Python", "Java", "Spring"] },
  { category: "데이터베이스", items: ["MySQL", "PostgreSQL", "MongoDB"] },
  { category: "기타", items: ["Git", "Docker", "AWS", "Linux"] },
]

export default function AboutPage() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-3xl px-6">
        {/* Header */}
        <div className="mb-12 flex flex-col items-center text-center">
          <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
            <Cloud className="h-10 w-10 text-primary" />
          </div>
          <h1 className="mb-2 text-3xl font-bold tracking-tight text-foreground">
            이규현
          </h1>
          <p className="mb-4 text-lg text-muted-foreground">개발자</p>
          <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
            <MapPin className="h-3.5 w-3.5" />
            <span>대한민국</span>
          </div>
        </div>

        {/* Bio */}
        <div className="mb-12 rounded-2xl border border-border/60 bg-secondary/30 p-6">
          <h2 className="mb-3 text-lg font-bold text-foreground">소개</h2>
          <p className="leading-relaxed text-muted-foreground">
            안녕하세요, 개발자 이규현입니다.
            새로운 기술을 배우고 프로젝트에 적용하는 것을 좋아합니다.
            이 블로그에서는 제가 진행한 프로젝트와 배운 것들을 기록하고 공유합니다.
          </p>
        </div>

        {/* Skills */}
        <div className="mb-12">
          <h2 className="mb-6 text-lg font-bold text-foreground">기술 스택</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {skills.map((group) => (
              <div
                key={group.category}
                className="rounded-xl border border-border/60 bg-card p-4"
              >
                <h3 className="mb-3 text-sm font-bold uppercase tracking-wider text-muted-foreground">
                  {group.category}
                </h3>
                <div className="flex flex-wrap gap-1.5">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full bg-accent px-2.5 py-0.5 text-xs font-medium text-accent-foreground"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div>
          <h2 className="mb-4 text-lg font-bold text-foreground">연락처</h2>
          <div className="flex flex-wrap gap-3">
            <a
              href="https://github.com/leekyuhyun"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border/60 px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
            >
              <Github className="h-4 w-4" />
              GitHub
            </a>
            <a
              href="mailto:contact@example.com"
              className="inline-flex items-center gap-2 rounded-full border border-border/60 px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
            >
              <Mail className="h-4 w-4" />
              이메일
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
