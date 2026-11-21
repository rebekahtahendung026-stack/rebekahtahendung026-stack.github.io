import { profil } from "@/data/profil";
import { IconArrowUp } from "./icons";

export default function Footer() {
  const tahun = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200/70 py-8 dark:border-slate-800/70">
      <div className="container-page flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
        <div>
          <p className="text-sm font-medium text-ink dark:text-slate-200">
            {profil.nama}
          </p>
          <p className="mt-0.5 text-xs text-slate-500 dark:text-slate-400">
            © {tahun} · Dibangun dengan Next.js & Tailwind CSS
          </p>
        </div>

        <a
          href="#beranda"
          className="group inline-flex items-center gap-1.5 rounded-full border border-slate-200 px-3.5 py-2 text-xs font-medium text-slate-600 transition hover:border-accent hover:text-accent dark:border-slate-700 dark:text-slate-300"
        >
          <IconArrowUp className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5" />
          Kembali ke atas
        </a>
      </div>
    </footer>
  );
}
