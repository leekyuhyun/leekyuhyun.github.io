"use client"

import React, { useCallback } from "react"
import Link from "next/link"
import useEmblaCarousel from "embla-carousel-react"
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react"

interface ContentCarouselProps {
  title: string
  viewAllHref: string
  children: React.ReactNode
}

export function ContentCarousel({ title, viewAllHref, children }: ContentCarouselProps) {
  const itemCount = React.Children.count(children)
  const showArrows = itemCount > 3

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    slidesToScroll: 1,
  })

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  return (
    <section className="py-10">
      {/* Header */}
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-xl font-bold text-foreground">{title}</h2>
        <div className="flex items-center gap-2">
          {showArrows && (
            <div className="mr-2 flex items-center gap-1">
              <button
                onClick={scrollPrev}
                className="rounded-full border border-border/60 p-1.5 text-muted-foreground transition-colors hover:bg-primary/10 hover:text-primary"
                aria-label="이전"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button
                onClick={scrollNext}
                className="rounded-full border border-border/60 p-1.5 text-muted-foreground transition-colors hover:bg-primary/10 hover:text-primary"
                aria-label="다음"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          )}
          <Link
            href={viewAllHref}
            className="flex items-center gap-1 text-sm font-medium text-primary transition-colors hover:text-sky-dark"
          >
            전체보기
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>

      {/* Slides */}
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="-ml-5 flex">
          {React.Children.map(children, (child, index) => (
            <div
              key={index}
              className="min-w-0 shrink-0 grow-0 basis-full pl-5 sm:basis-1/2 lg:basis-1/3"
            >
              {child}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
