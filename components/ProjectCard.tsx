import type { Proyek } from "@/data/profil";
import { IconExternal, IconGithub } from "./icons";

export default function ProjectCard({ proyek }: { proyek: Proyek }) {
  const selesai = proyek.status === "selesai";

  return (
    <article className="card group flex h-full flex-col overflow-hidden transition duration-300 hover:-translate-y-1 hover:border-accent/30 hover:shadow-lg">
      <div
        className={`relative flex h-32 items-end overflow-hidden bg-gradient-to-br ${proyek.gradien} p-5`}
      >
        <span
          aria-hidden
          className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-full"
        />
        <span
          aria-hidden
          className="relative text-3xl font-bold tracking-tight text-white/85 transition-transform duration-500 ease-out group-hover:scale-110"
        >
          {proyek.inisial}
        </span>
        <span
          className={[
            "absolute right-4 top-4 rounded-full px-2.5 py-1 text-[11px] font-semibold",
            selesai
              ? "bg-white/90 text-emerald-700"
              : "border border-white/40 bg-white/15 text-white backdrop-blur",
          ].join(" ")}
        >
          {selesai ? "Selesai" : "Sedang dibangun"}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-500 dark:text-slate-400">
          {proyek.konteks}
        </p>
        <h3 className="mt-1.5 text-lg font-semibold text-ink dark:text-white">
          {proyek.judul}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
          {proyek.ringkas}
        </p>

        <dl className="mt-4 space-y-2.5 text-sm">
          {[
            { label: "Masalah", nilai: proyek.masalah },
            { label: "Peran", nilai: proyek.peran },
            { label: "Hasil", nilai: proyek.hasil },
          ].map((baris) => (
            <div key={baris.label}>
              <dt className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                {baris.label}
              </dt>
              <dd className="mt-0.5 leading-relaxed text-slate-600 dark:text-slate-300">
                {baris.nilai}
              </dd>
            </div>
          ))}
        </dl>

        <ul className="mt-4 flex flex-wrap gap-1.5" aria-label="Teknologi yang dipakai">
          {proyek.stack.map((s) => (
            <li key={s} className="chip">
              {s}
            </li>
          ))}
        </ul>

        <div className="mt-auto flex flex-wrap items-center gap-4 border-t border-slate-100 pt-4 text-sm dark:border-slate-800">
          {proyek.demo ? (
            <a
              href={proyek.demo}
              target="_blank"
              rel="noreferrer noopener"
              className="group/link inline-flex items-center gap-1.5 font-medium text-accent hover:underline"
            >
              <IconExternal className="h-4 w-4 transition-transform duration-300 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
              Demo
            </a>
          ) : (
            <span className="text-slate-400 dark:text-slate-500">Demo segera</span>
          )}

          {proyek.repo ? (
            <a
              href={proyek.repo}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-1.5 font-medium text-slate-700 hover:text-accent dark:text-slate-300"
            >
              <IconGithub className="h-4 w-4" />
              Kode
            </a>
          ) : (
            <span className="text-slate-400 dark:text-slate-500">Repo segera</span>
          )}
        </div>
      </div>
    </article>
  );
}
