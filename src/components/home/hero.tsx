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

  if (!mounted) return <section className="h-125 w-full" />;

  const heroImage =
    resolvedTheme === "dark"
      ? "/images/hero-dark.png"
      : "/images/hero-light.png";

  return (
    <section className="relative w-full h-125 flex items-end justify-end overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src={heroImage}
          alt="Hero Background"
          fill
          priority
          className="object-cover transition-opacity duration-500"
        />
        <div className="absolute inset-0 bg-linear-to-br from-transparent via-transparent to-black/50 dark:to-black/80" />
      </div>

      <div className="relative z-10 text-right px-8 pb-10 sm:px-12 sm:pb-16">
        <h2
          className="font-gaegu text-5xl font-bold sm:text-6xl mb-2
                       text-white dark:text-amber-200 
                       transition-colors duration-500
                       drop-shadow-[0_0_15px_rgba(251,191,36,0.6)] dark:drop-shadow-[0_0_20px_rgba(252,211,77,0.8)]"
        >
          Kyulee&apos;s Cloud
        </h2>

        <p
          className="text-lg sm:text-xl font-medium 
                      text-white/90 dark:text-amber-100/90
                      transition-colors duration-500
                      drop-shadow-[0_2px_5px_rgba(0,0,0,0.8)]"
        >
          모든 것이 담긴 저의 기록 저장소입니다.
        </p>
      </div>
    </section>
  );
}
