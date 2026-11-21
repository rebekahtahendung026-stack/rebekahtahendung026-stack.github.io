import { profil } from "@/data/profil";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Experience() {
  return (
    <section
      id="organisasi"
      aria-labelledby="judul-organisasi"
      className="border-t border-slate-200/70 py-16 sm:py-20 dark:border-slate-800/70"
    >
      <div className="container-page">
        <Reveal>
          <SectionHeading
            id="judul-organisasi"
            kicker="Organisasi"
            judul="Pengalaman organisasi & kepanitiaan"
            deskripsi="Peran, tanggung jawab, dan kontribusi nyata di luar perkuliahan."
          />
        </Reveal>

        {profil.organisasi.length === 0 ? (
          <Reveal>
            <p className="mt-8 rounded-2xl border border-dashed border-slate-300 px-5 py-8 text-center text-sm text-slate-500 dark:border-slate-700 dark:text-slate-400">
              Pengalaman organisasi dan kepanitiaan akan ditambahkan di sini.
            </p>
          </Reveal>
        ) : (
          <ol className="mt-8 space-y-4 border-l border-slate-200 pl-6 dark:border-slate-800">
            {profil.organisasi.map((item) => (
              <li key={`${item.peran}-${item.periode}`} className="relative">
                <span
                  aria-hidden
                  className="absolute -left-[30px] top-2 h-2.5 w-2.5 rounded-full border-2 border-paper bg-accent dark:border-[#0B1120]"
                />
                <div className="card p-5">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="text-sm font-semibold text-ink dark:text-white">
                      {item.peran}
                    </h3>
                    <span className="text-xs font-medium text-slate-500 dark:text-slate-400">
                      {item.periode}
                    </span>
                  </div>
                  <p className="mt-0.5 text-sm text-slate-600 dark:text-slate-300">
                    {item.organisasi}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                    {item.kontribusi}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        )}
      </div>
    </section>
  );
}
