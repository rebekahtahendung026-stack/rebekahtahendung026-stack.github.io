"use client";

import { useState } from "react";
import { profil } from "@/data/profil";
import ThemeToggle from "./ThemeToggle";
import { IconClose, IconDownload, IconMenu } from "./icons";

const tautan = [
  { href: "#tentang", label: "Tentang" },
  { href: "#keahlian", label: "Keahlian" },
  { href: "#proyek", label: "Proyek" },
  { href: "#organisasi", label: "Organisasi" },
  { href: "#pendidikan", label: "Pendidikan" },
  { href: "#kontak", label: "Kontak" },
];

export default function Nav() {
  const [buka, setBuka] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-paper/85 backdrop-blur-md dark:border-slate-800 dark:bg-[#0B1120]/85">
      <div className="container-page flex h-16 items-center justify-between gap-3">
        <a
          href="#beranda"
          className="flex items-center gap-2.5 rounded-lg"
          aria-label="Kembali ke bagian atas halaman"
        >
          <span
            aria-hidden
            className="grid h-9 w-9 place-items-center rounded-xl bg-accent text-sm font-bold text-white"
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
          {tautan.map((t) => (
            <a
              key={t.href}
              href={t.href}
              className="rounded-full px-3 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-100 hover:text-ink dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white"
            >
              {t.label}
            </a>
          ))}
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
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 md:hidden dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300"
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
            {tautan.map((t) => (
              <a
                key={t.href}
                href={t.href}
                onClick={() => setBuka(false)}
                className="rounded-lg px-3 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800"
              >
                {t.label}
              </a>
            ))}
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
    </header>
  );
}
