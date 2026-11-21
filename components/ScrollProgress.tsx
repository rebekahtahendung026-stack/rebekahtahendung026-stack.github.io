"use client";

import { useEffect, useState } from "react";

/**
 * Garis tipis di bawah header yang menunjukkan posisi scroll halaman.
 * Memakai requestAnimationFrame agar tidak membebani saat scroll.
 */
export default function ScrollProgress() {
  const [progres, setProgres] = useState(0);

  useEffect(() => {
    let raf = 0;

    const hitung = () => {
      const el = document.documentElement;
      const maks = el.scrollHeight - el.clientHeight;
      setProgres(maks > 0 ? Math.min(1, Math.max(0, el.scrollTop / maks)) : 0);
      raf = 0;
    };

    const saatScroll = () => {
      if (!raf) raf = window.requestAnimationFrame(hitung);
    };

    hitung();
    window.addEventListener("scroll", saatScroll, { passive: true });
    window.addEventListener("resize", saatScroll);

    return () => {
      window.removeEventListener("scroll", saatScroll);
      window.removeEventListener("resize", saatScroll);
      if (raf) window.cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      aria-hidden
      className="absolute inset-x-0 bottom-0 h-0.5 origin-left bg-gradient-to-r from-accent to-indigo-400 transition-transform duration-150 ease-out"
      style={{ transform: `scaleX(${progres})` }}
    />
  );
}
