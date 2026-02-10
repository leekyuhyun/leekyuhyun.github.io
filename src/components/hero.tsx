import Link from "next/link";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-background pb-20 pt-24 md:pb-28 md:pt-32">
      {/* Subtle background decoration */}
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        aria-hidden="true"
      >
        <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute -left-10 bottom-0 h-56 w-56 rounded-full bg-accent/60 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-5xl px-6">
        <div className="flex flex-col gap-6">
          <p className="text-sm font-medium uppercase tracking-widest text-primary">
            Developer & Builder
          </p>
          <h1 className="max-w-2xl text-balance text-4xl font-bold leading-tight tracking-tight text-foreground md:text-5xl">
            Building polished software and sharing what I learn along the way.
          </h1>
          <p className="max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
            I'm Kyuhyun Lee, a developer who loves crafting clean, thoughtful digital experiences. Welcome to my personal cloud - a place for my projects and thoughts.
          </p>
          <div className="flex flex-col gap-3 pt-2 sm:flex-row">
            <Link
              href="/projects"
              className="inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              View Projects
            </Link>
            <Link
              href="/blog"
              className="inline-flex items-center justify-center rounded-lg border border-border bg-card px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
            >
              Read Blog
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
