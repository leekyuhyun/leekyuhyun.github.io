"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { Cloud, Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"

const navItems = [
  { href: "/projects", label: "프로젝트" },
  { href: "/blog", label: "블로그" },
  { href: "/about", label: "소개" },
]

export function Navbar() {
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 text-lg font-bold text-foreground">
          <Cloud className="h-5 w-5 text-primary" />
          <span>{"KyuHyun's Cloud"}</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => {
            const isActive =
              pathname === item.href || pathname.startsWith(item.href + "/")
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "rounded-full px-4 py-2 text-sm font-medium transition-colors",
                  isActive
                    ? "bg-primary/10 text-primary"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {item.label}
              </Link>
            )
          })}
        </div>

        {/* Mobile menu button */}
        <button
          className="flex items-center justify-center rounded-lg p-2 text-muted-foreground md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="메뉴 열기"
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile nav */}
      {mobileOpen && (
        <div className="border-t border-border/60 bg-background px-6 pb-4 md:hidden">
          {navItems.map((item) => {
            const isActive =
              pathname === item.href || pathname.startsWith(item.href + "/")
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className={cn(
                  "block rounded-lg px-4 py-3 text-sm font-medium transition-colors",
                  isActive
                    ? "bg-primary/10 text-primary"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {item.label}
              </Link>
            )
          })}
        </div>
      )}
    </header>
  )
}
