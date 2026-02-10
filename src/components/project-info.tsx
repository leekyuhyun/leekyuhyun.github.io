import { Calendar, User, Users, Layers } from "lucide-react"

interface ProjectInfoProps {
  startDate: string | Date
  endDate?: string | Date
  tags: string[]
  type?: string
}

export function ProjectInfo({
  startDate,
  endDate,
  tags,
  type = "개인 프로젝트",
}: ProjectInfoProps) {
  const formatDate = (d: string | Date) =>
    new Date(d).toLocaleDateString("ko-KR", {
      year: "numeric",
      month: "long",
    })

  const isTeam = type.includes("팀") || type.includes("Team")
  const TypeIcon = isTeam ? Users : User

  return (
    <div className="mb-8 grid gap-4 sm:grid-cols-3">
      {/* Period */}
      <div className="rounded-xl border border-border/60 bg-secondary/50 p-4">
        <div className="mb-2 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-muted-foreground">
          <Calendar className="h-3.5 w-3.5" />
          개발 기간
        </div>
        <p className="text-sm font-medium text-foreground">
          {formatDate(startDate)}
        </p>
        <p className="text-sm text-muted-foreground">
          {"~ "}
          {endDate ? formatDate(endDate) : "진행 중"}
        </p>
      </div>

      {/* Type */}
      <div className="rounded-xl border border-border/60 bg-secondary/50 p-4">
        <div className="mb-2 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-muted-foreground">
          <TypeIcon className="h-3.5 w-3.5" />
          프로젝트 유형
        </div>
        <p className="text-sm font-medium text-foreground">{type}</p>
      </div>

      {/* Tech Stack */}
      <div className="rounded-xl border border-border/60 bg-secondary/50 p-4">
        <div className="mb-2 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-muted-foreground">
          <Layers className="h-3.5 w-3.5" />
          기술 스택
        </div>
        <div className="flex flex-wrap gap-1.5">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-accent px-2 py-0.5 text-xs font-medium text-accent-foreground"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
