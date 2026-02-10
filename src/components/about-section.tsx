export function AboutSection() {
  return (
    <section className="border-t border-border bg-card py-20">
      <div className="mx-auto max-w-5xl px-6">
        <h2 className="mb-8 text-2xl font-bold tracking-tight text-foreground">
          About
        </h2>
        <div className="flex flex-col gap-8 md:flex-row md:gap-16">
          <div className="flex flex-col gap-4 md:flex-1">
            <p className="text-base leading-relaxed text-muted-foreground">
              I'm a developer passionate about building reliable, well-crafted software. My interests span web development, cloud architecture, developer tooling, and open source.
            </p>
            <p className="text-base leading-relaxed text-muted-foreground">
              I enjoy solving complex problems with simple, elegant solutions. When I'm not coding, I'm usually reading about new technology, contributing to open source, or writing about what I've learned.
            </p>
          </div>
          <div className="flex flex-col gap-4 md:w-64">
            <h3 className="text-sm font-semibold uppercase tracking-widest text-primary">
              Tech Stack
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
                  className="rounded-md bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground"
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
