import Link from "next/link"
import Image from "next/image"
import { Clock, Calendar } from "lucide-react"
import { calculateDuration, formatMonth } from "@/lib/date-utils"

interface ProjectCardProps {
  title: string
  description: string
  image: string
  startDate: string | Date
  endDate?: string | Date
  tags?: string[]
  href: string
  hideDate?: boolean
  displayDate?: string
  contribution?: string
}

export function ProjectCard({
  title,
  description,
  image,
  startDate,
  endDate,
  tags = [],
  href,
  hideDate = false,
  displayDate,
  contribution,
}: ProjectCardProps) {
  const durationString = calculateDuration(startDate, endDate)
  const endDateStr = endDate ? formatMonth(endDate) : "진행 중"

  return (
    <Link href={href} className="group block">
      <article className="overflow-hidden rounded-2xl border border-border/60 bg-card transition-all hover:shadow-lg hover:shadow-primary/5">
        {/* Image */}
        <div className="relative aspect-[16/10] overflow-hidden bg-secondary">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
          {contribution && (
            <span className="absolute left-3 top-3 rounded-full bg-primary/90 px-2.5 py-1 text-xs font-medium text-primary-foreground">
              {contribution}
            </span>
          )}
        </div>

        {/* Content */}
        <div className="p-4">
          <h3 className="mb-1.5 line-clamp-1 text-base font-bold text-card-foreground transition-colors group-hover:text-primary">
            {title}
          </h3>
          <p className="mb-3 line-clamp-2 text-sm leading-relaxed text-muted-foreground">
            {description}
          </p>

          {/* Tags */}
          {tags.length > 0 && (
            <div className="mb-3 flex flex-wrap gap-1.5">
              {tags.slice(0, 4).map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-accent px-2 py-0.5 text-xs font-medium text-accent-foreground"
                >
                  {tag}
                </span>
              ))}
              {tags.length > 4 && (
                <span className="rounded-full bg-accent px-2 py-0.5 text-xs font-medium text-muted-foreground">
                  +{tags.length - 4}
                </span>
              )}
            </div>
          )}

          {/* Date */}
          {!hideDate && (
            <div className="flex items-center gap-3 text-xs text-muted-foreground">
              {displayDate ? (
                <span className="flex items-center gap-1">
                  <Calendar className="h-3 w-3" />
                  {displayDate}
                </span>
              ) : (
                <>
                  <span className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    {endDateStr}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    {durationString} 소요
                  </span>
                </>
              )}
            </div>
          )}
        </div>
      </article>
    </Link>
  )
}
