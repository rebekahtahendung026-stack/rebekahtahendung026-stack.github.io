import { profil } from "@/data/profil";
import Avatar from "./Avatar";
import Reveal from "./Reveal";
import {
  IconArrowRight,
  IconDownload,
  IconGithub,
  IconLinkedin,
  IconMail,
  IconPin,
} from "./icons";

const ikonSosial = {
  github: IconGithub,
  linkedin: IconLinkedin,
} as const;

export default function Hero() {
  const jumlahProyek = profil.proyek.length;

  return (
    <section id="beranda" aria-labelledby="judul-beranda" className="relative overflow-hidden">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-40 right-[-12%] h-[440px] w-[440px] rounded-full bg-accent/10 blur-3xl" />
        <div className="absolute bottom-[-20%] left-[-15%] h-[340px] w-[340px] rounded-full bg-indigo-400/10 blur-3xl" />
      </div>

      <div className="container-page grid items-center gap-14 py-14 pb-20 sm:py-20 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
        <Reveal>
          <p className="inline-flex flex-wrap items-center gap-x-2 gap-y-1 rounded-full border border-emerald-200 bg-emerald-50 px-3.5 py-1.5 text-xs font-medium text-emerald-800 dark:border-emerald-900/60 dark:bg-emerald-950/40 dark:text-emerald-300">
            <span aria-hidden className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-70" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-600" />
            </span>
            {profil.statusMagang.teks}
            <span aria-hidden className="text-emerald-400">
              ·
            </span>
            <span className="font-normal">{profil.statusMagang.periode}</span>
          </p>

          <h1
            id="judul-beranda"
            className="mt-6 text-4xl font-bold leading-[1.05] tracking-tight text-ink sm:text-5xl lg:text-[3.4rem] dark:text-white"
          >
            {profil.nama.split(" ")[0]}{" "}
            <span className="text-accent">
              {profil.nama.split(" ").slice(1).join(" ")}
            </span>
          </h1>

          <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg dark:text-slate-300">
            {profil.posisi}
          </p>

          <dl className="mt-8 grid max-w-md grid-cols-3 gap-4">
            {[
              { label: "IPK", nilai: profil.ipk },
              { label: "Semester", nilai: profil.semester },
              { label: "Proyek", nilai: String(jumlahProyek) },
            ].map((stat) => (
              <div key={stat.label}>
                <dt className="text-[11px] font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                  {stat.label}
                </dt>
                <dd className="mt-0.5 text-2xl font-semibold text-ink dark:text-white">
                  {stat.nilai}
                </dd>
              </div>
            ))}
          </dl>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a href="#proyek" className="btn-primary">
              Lihat Proyek
              <IconArrowRight className="h-4 w-4" />
            </a>
            <a href={profil.cv} download className="btn-ghost">
              <IconDownload className="h-4 w-4" />
              Unduh CV
            </a>
          </div>

          <ul className="mt-8 flex items-center gap-2">
            <li>
              <a
                href={`mailto:${profil.email}`}
                aria-label="Kirim email"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 transition hover:border-accent hover:text-accent dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300 dark:hover:border-accent dark:hover:text-accent"
              >
                <IconMail className="h-[18px] w-[18px]" />
              </a>
            </li>
            {profil.sosial.map((s) => {
              const Ikon = ikonSosial[s.ikon];
              return (
                <li key={s.label}>
                  <a
                    href={s.url}
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label={s.label}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 transition hover:border-accent hover:text-accent dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300 dark:hover:border-accent dark:hover:text-accent"
                  >
                    <Ikon className="h-[18px] w-[18px]" />
                  </a>
                </li>
              );
            })}
          </ul>
        </Reveal>

        <Reveal delay={120} className="mx-auto w-full max-w-[20rem] sm:max-w-sm">
          <div className="relative">
            <div className="card overflow-hidden rounded-[1.75rem] p-2">
              <div className="aspect-square overflow-hidden rounded-3xl">
                <Avatar nama={profil.nama} inisial={profil.inisial} />
              </div>
            </div>
            <div className="card absolute -bottom-6 left-4 right-4 flex items-center gap-3 rounded-2xl p-3.5 backdrop-blur">
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-accent-soft text-accent dark:bg-accent/15">
                <IconPin className="h-4 w-4" />
              </span>
              <div className="min-w-0">
                <p className="truncate text-sm font-semibold text-ink dark:text-white">
                  {profil.lokasi}
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Terbuka untuk magang kampus
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
