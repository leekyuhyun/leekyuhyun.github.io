export function AboutSection() {
  return (
    <section className="border-t border-border/60 py-20">
      <div className="mx-auto max-w-5xl px-6">
        <h2 className="mb-8 text-2xl font-bold tracking-tight text-foreground">
          {"소개"}
        </h2>
        <div className="flex flex-col gap-8 md:flex-row md:gap-16">
          <div className="flex flex-col gap-4 md:flex-1">
            <p className="text-base leading-relaxed text-muted-foreground">
              {"안정적이고 완성도 높은 소프트웨어를 만드는 데 열정을 가진 개발자입니다. 웹 개발, 클라우드 아키텍처, 개발자 도구, 오픈소스에 관심이 있습니다."}
            </p>
            <p className="text-base leading-relaxed text-muted-foreground">
              {"복잡한 문제를 간결하고 우아한 방법으로 해결하는 것을 좋아합니다. 코딩하지 않을 때는 새로운 기술을 공부하거나, 오픈소스에 기여하거나, 배운 것을 글로 정리하고 있습니다."}
            </p>
          </div>
          <div className="flex flex-col gap-4 md:w-64">
            <h3 className="text-sm font-semibold uppercase tracking-widest text-primary">
              {"기술 스택"}
            </h3>
            <div className="flex flex-wrap gap-2">
              {[
                "TypeScript",
                "React",
                "Next.js",
                "Node.js",
                "Go",
                "Docker",
                "PostgreSQL",
                "Tailwind CSS",
              ].map((tech) => (
                <span
                  key={tech}
                  className="rounded-full bg-accent px-3 py-1 text-xs font-medium text-accent-foreground"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
