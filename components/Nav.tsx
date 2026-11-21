"use client";

import { useEffect, useState } from "react";
import { profil } from "@/data/profil";
import ScrollProgress from "./ScrollProgress";
import ThemeToggle from "./ThemeToggle";
import { IconClose, IconDownload, IconMenu } from "./icons";

const tautan = [
  { href: "#beranda", label: "Beranda" },
  { href: "#tentang", label: "Tentang" },
  { href: "#keahlian", label: "Keahlian" },
  { href: "#proyek", label: "Proyek" },
  { href: "#organisasi", label: "Organisasi" },
  { href: "#pendidikan", label: "Pendidikan" },
  { href: "#kontak", label: "Kontak" },
];

export default function Nav() {
  const [buka, setBuka] = useState(false);
  const [aktif, setAktif] = useState("beranda");

  useEffect(() => {
    const bagian = tautan
      .map((t) => document.getElementById(t.href.slice(1)))
      .filter((el): el is HTMLElement => el !== null);

    if (bagian.length === 0 || typeof IntersectionObserver === "undefined") return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setAktif(entry.target.id);
        }
      },
      // Pita tipis di tengah layar: bagian yang melewatinya dianggap aktif.
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 },
    );

    bagian.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-paper/85 backdrop-blur-md dark:border-slate-800 dark:bg-[#0B1120]/85">
      <div className="container-page flex h-16 items-center justify-between gap-3">
        <a
          href="#beranda"
          onClick={() => setAktif("beranda")}
          className="flex items-center gap-2.5 rounded-lg"
          aria-label="Kembali ke bagian atas halaman"
        >
          <span
            aria-hidden
            className="grid h-9 w-9 place-items-center rounded-xl bg-accent text-sm font-bold text-white transition-transform duration-300 hover:rotate-6 hover:scale-105"
          >
            {profil.inisial}
          </span>
          <span className="hidden leading-tight sm:block">
            <span className="block text-sm font-semibold text-ink dark:text-white">
              {profil.nama}
            </span>
            <span className="block text-[11px] text-slate-500 dark:text-slate-400">
              Teknik Informatika · UNSRAT
            </span>
          </span>
        </a>

        <nav aria-label="Navigasi utama" className="hidden items-center gap-0.5 md:flex">
          {tautan.map((t) => {
            const id = t.href.slice(1);
            const sedangAktif = aktif === id;
            return (
              <a
                key={t.href}
                href={t.href}
                onClick={() => setAktif(id)}
                aria-current={sedangAktif ? "location" : undefined}
                className={[
                  "relative rounded-full px-3 py-2 text-sm font-medium transition-colors duration-200",
                  sedangAktif
                    ? "text-accent"
                    : "text-slate-600 hover:text-ink dark:text-slate-300 dark:hover:text-white",
                ].join(" ")}
              >
                {t.label}
                <span
                  aria-hidden
                  className={[
                    "absolute inset-x-3 -bottom-0.5 h-0.5 origin-left rounded-full bg-accent transition-transform duration-300 ease-out",
                    sedangAktif ? "scale-x-100" : "scale-x-0",
                  ].join(" ")}
                />
              </a>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <a
            href={profil.cv}
            download
            className="btn-ghost hidden !px-4 !py-2 text-xs sm:inline-flex"
          >
            <IconDownload className="h-4 w-4" />
            Unduh CV
          </a>
          <button
            type="button"
            onClick={() => setBuka((v) => !v)}
            aria-expanded={buka}
            aria-controls="menu-seluler"
            aria-label={buka ? "Tutup menu" : "Buka menu"}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 transition hover:border-accent hover:text-accent md:hidden dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300"
          >
            {buka ? (
              <IconClose className="h-5 w-5" />
            ) : (
              <IconMenu className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>

      {buka ? (
        <div
          id="menu-seluler"
          className="border-t border-slate-200 bg-paper md:hidden dark:border-slate-800 dark:bg-[#0B1120]"
        >
          <nav aria-label="Navigasi seluler" className="container-page grid gap-1 py-3">
            {tautan.map((t) => {
              const id = t.href.slice(1);
              return (
                <a
                  key={t.href}
                  href={t.href}
                  onClick={() => {
                    setAktif(id);
                    setBuka(false);
                  }}
                  aria-current={aktif === id ? "location" : undefined}
                  className={[
                    "rounded-lg px-3 py-2.5 text-sm font-medium transition-colors",
                    aktif === id
                      ? "bg-accent-soft text-accent-dark dark:bg-accent/15 dark:text-blue-300"
                      : "text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800",
                  ].join(" ")}
                >
                  {t.label}
                </a>
              );
            })}
            <a
              href={profil.cv}
              download
              onClick={() => setBuka(false)}
              className="btn-primary mt-2"
            >
              <IconDownload className="h-4 w-4" />
              Unduh CV (PDF)
            </a>
          </nav>
        </div>
      ) : null}

      <ScrollProgress />
    </header>
  );
}
