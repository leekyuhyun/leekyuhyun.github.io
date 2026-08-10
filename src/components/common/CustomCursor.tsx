"use client";

import { useEffect, useRef } from "react";

const INTERACTIVE_SELECTOR = "a, button, summary, [role='button']";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const supportsCustomCursor = window.matchMedia("(pointer: fine) and (prefers-reduced-motion: no-preference)");

    if (!cursor || !supportsCustomCursor.matches) return;

    let animationFrame = 0;
    let pointerX = 0;
    let pointerY = 0;

    const moveCursor = (event: PointerEvent) => {
      pointerX = event.clientX;
      pointerY = event.clientY;
      cursor.classList.toggle("custom-cursor--interactive", event.target instanceof Element && Boolean(event.target.closest(INTERACTIVE_SELECTOR)));

      if (animationFrame) return;

      animationFrame = window.requestAnimationFrame(() => {
        cursor.style.transform = `translate3d(${pointerX}px, ${pointerY}px, 0)`;
        cursor.classList.add("custom-cursor--visible");
        document.body.classList.add("custom-cursor-enabled");
        animationFrame = 0;
      });
    };

    const hideCursor = () => cursor.classList.remove("custom-cursor--visible");

    window.addEventListener("pointermove", moveCursor, { passive: true });
    document.documentElement.addEventListener("mouseleave", hideCursor);

    return () => {
      window.removeEventListener("pointermove", moveCursor);
      document.documentElement.removeEventListener("mouseleave", hideCursor);
      document.body.classList.remove("custom-cursor-enabled");
      if (animationFrame) window.cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <div ref={cursorRef} className="custom-cursor" aria-hidden="true">
      <span className="custom-cursor__outline" />
      <span className="custom-cursor__core" />
    </div>
  );
}
