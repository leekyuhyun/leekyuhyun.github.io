import { Github, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border/60 bg-secondary/30">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-6">
        <p className="text-sm text-muted-foreground">
          {"© "}{new Date().getFullYear()}{" KyuHyun Lee. All rights reserved."}
        </p>
        <div className="flex items-center gap-3">
          <a
            href="https://github.com/leekyuhyun"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full p-2 text-muted-foreground transition-colors hover:bg-primary/10 hover:text-primary"
            aria-label="GitHub"
          >
            <Github className="h-4 w-4" />
          </a>
          <a
            href="mailto:contact@example.com"
            className="rounded-full p-2 text-muted-foreground transition-colors hover:bg-primary/10 hover:text-primary"
            aria-label="이메일"
          >
            <Mail className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  )
}
