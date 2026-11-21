"use client";

import { useEffect, useState } from "react";
import { IconMoon, IconSun } from "./icons";

const KEY = "tema";

export default function ThemeToggle() {
  const [gelap, setGelap] = useState(false);
  const [siap, setSiap] = useState(false);

  useEffect(() => {
    setGelap(document.documentElement.classList.contains("dark"));
    setSiap(true);
  }, []);

  function ganti() {
    const berikutnya = !gelap;
    setGelap(berikutnya);
    document.documentElement.classList.toggle("dark", berikutnya);
    try {
      localStorage.setItem(KEY, berikutnya ? "gelap" : "terang");
    } catch {
      /* localStorage bisa diblokir; abaikan. */
    }
  }

  return (
    <button
      type="button"
      onClick={ganti}
      aria-label={gelap ? "Aktifkan mode terang" : "Aktifkan mode gelap"}
      aria-pressed={gelap}
      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 transition hover:border-slate-300 hover:text-ink dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300 dark:hover:text-white"
    >
      {siap && gelap ? (
        <IconSun className="h-[18px] w-[18px]" />
      ) : (
        <IconMoon className="h-[18px] w-[18px]" />
      )}
    </button>
  );
}
