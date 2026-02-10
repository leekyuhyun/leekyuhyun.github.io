import Link from "next/link";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-background pb-24 pt-28 md:pb-32 md:pt-36">
      {/* Soft background clouds */}
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
      >
        <div className="absolute -right-20 -top-10 h-80 w-80 rounded-full bg-primary/8 blur-3xl" />
        <div className="absolute -left-16 bottom-0 h-64 w-64 rounded-full bg-accent/40 blur-3xl" />
        <div className="absolute left-1/2 top-1/4 h-48 w-48 -translate-x-1/2 rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-5xl px-6">
        <div className="flex flex-col gap-6">
          <p className="text-sm font-medium tracking-widest text-primary">
            {"개발자 & 빌더"}
          </p>
          <h1 className="max-w-2xl text-balance text-4xl font-bold leading-tight tracking-tight text-foreground md:text-5xl">
            {"깔끔한 소프트웨어를 만들고,"}
            <br />
            {"배운 것을 나누는 공간입니다."}
          </h1>
          <p className="max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
            {"안녕하세요, 이규현입니다. 깔끔하고 사려 깊은 디지털 경험을 만드는 것을 좋아하는 개발자입니다. 저의 프로젝트와 생각을 담은 개인 클라우드에 오신 것을 환영합니다."}
          </p>
          <div className="flex flex-col gap-3 pt-2 sm:flex-row">
            <Link
              href="/projects"
              className="inline-flex items-center justify-center rounded-full bg-primary px-7 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/85"
            >
              {"프로젝트 보기"}
            </Link>
            <Link
              href="/blog"
              className="inline-flex items-center justify-center rounded-full border border-border bg-background px-7 py-3 text-sm font-medium text-foreground transition-colors hover:bg-accent"
            >
              {"블로그 읽기"}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
