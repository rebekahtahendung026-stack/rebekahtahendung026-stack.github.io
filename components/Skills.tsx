import { profil, type LevelKeahlian } from "@/data/profil";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { IconSpark } from "./icons";

const gayaLevel: Record<LevelKeahlian, string> = {
  Pemula:
    "border-slate-200 bg-slate-50 text-slate-600 dark:border-slate-700 dark:bg-slate-800/70 dark:text-slate-300",
  Menengah:
    "border-blue-200 bg-blue-50 text-blue-700 dark:border-blue-900/60 dark:bg-blue-950/40 dark:text-blue-300",
  Mahir:
    "border-emerald-200 bg-emerald-50 text-emerald-700 dark:border-emerald-900/60 dark:bg-emerald-950/40 dark:text-emerald-300",
};

export default function Skills() {
  return (
    <section
      id="keahlian"
      aria-labelledby="judul-keahlian"
      className="border-t border-slate-200/70 py-16 sm:py-20 dark:border-slate-800/70"
    >
      <div className="container-page">
        <Reveal>
          <SectionHeading
            id="judul-keahlian"
            kicker="Keahlian"
            judul="Keahlian & alat kerja"
            deskripsi="Level ditulis apa adanya sesuai yang sudah saya gunakan di proyek — bukan perkiraan persentase."
          />
        </Reveal>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {profil.keahlian.map((grup, i) => (
            <Reveal key={grup.kelompok} delay={i * 60} className="h-full">
              <div className="card h-full p-5 transition duration-300 hover:-translate-y-0.5 hover:border-accent/30 hover:shadow-lg">
                <h3 className="text-sm font-semibold text-ink dark:text-white">
                  {grup.kelompok}
                </h3>
                <ul className="mt-3.5 space-y-2.5">
                  {grup.item.map((item) => (
                    <li
                      key={item.nama}
                      className="flex items-center justify-between gap-3 text-sm"
                    >
                      <span className="text-slate-700 dark:text-slate-300">{item.nama}</span>
                      <span
                        className={`shrink-0 rounded-full border px-2 py-0.5 text-[11px] font-medium ${gayaLevel[item.level]}`}
                      >
                        {item.level}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mt-6 card p-5 sm:p-6">
            <div className="flex items-center gap-2">
              <IconSpark className="h-4 w-4 text-accent" />
              <h3 className="text-sm font-semibold text-ink dark:text-white">
                Sertifikasi & kursus
              </h3>
            </div>

            {profil.sertifikasi.length === 0 ? (
              <p className="mt-3 rounded-xl border border-dashed border-slate-300 px-4 py-3 text-sm text-slate-500 dark:border-slate-700 dark:text-slate-400">
                Daftar sertifikasi dan kursus akan ditambahkan di sini.
              </p>
            ) : (
              <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                {profil.sertifikasi.map((s) => (
                  <li
                    key={`${s.nama}-${s.tahun}`}
                    className="rounded-xl border border-slate-200 p-3.5 text-sm dark:border-slate-800"
                  >
                    <a
                      href={s.url}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="font-medium text-ink hover:text-accent dark:text-slate-200"
                    >
                      {s.nama}
                    </a>
                    <p className="mt-0.5 text-xs text-slate-500 dark:text-slate-400">
                      {s.penerbit} · {s.tahun}
                    </p>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
