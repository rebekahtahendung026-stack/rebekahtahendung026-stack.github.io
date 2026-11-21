"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  /** Jeda animasi dalam milidetik. */
  delay?: number;
};

/**
 * Animasi fade-up sederhana saat elemen masuk viewport.
 * Menghormati prefers-reduced-motion dan tetap terlihat tanpa JavaScript
 * (lihat <noscript> di app/layout.tsx).
 */
export default function Reveal({ children, className = "", delay = 0 }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [terlihat, setTerlihat] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const kurangiGerak = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (kurangiGerak || typeof IntersectionObserver === "undefined") {
      setTerlihat(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setTerlihat(true);
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={terlihat ? { transitionDelay: `${delay}ms` } : undefined}
      className={[
        "reveal transition-all duration-700 ease-out",
        terlihat ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0",
        className,
      ].join(" ")}
    >
      {children}
    </div>
  );
}
