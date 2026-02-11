"use client";

import Image from "next/image";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function Hero() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 0);
    return () => clearTimeout(timer);
  }, []);

  if (!mounted) return <section className="h-137.5 w-full" />;

  const heroImage =
    resolvedTheme === "dark"
      ? "/images/hero-dark.png"
      : "/images/hero-light.png";

  return (
    <section className="relative w-full h-137.5 flex items-end justify-end overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src={heroImage}
          alt="Hero Background"
          fill
          priority
          className="object-cover transition-opacity duration-500"
        />
        <div className="absolute inset-0 bg-linear-to-br from-transparent via-transparent to-black/50 dark:to-black/70" />
      </div>

      <div className="relative z-10 text-right px-8 pb-10 sm:px-12 sm:pb-16">
        <h2 className="font-gaegu text-5xl font-bold sm:text-6xl text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)] mb-2">
          Kyulee&apos;s Cloud
        </h2>
        <p className="text-lg sm:text-l text-white/90 font-medium drop-shadow-[0_2px_5px_rgba(0,0,0,0.8)]">
          모든것이 담긴 저의 저장소입니다.
        </p>
      </div>
    </section>
  );
}
