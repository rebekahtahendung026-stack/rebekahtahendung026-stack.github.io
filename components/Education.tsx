import { profil } from "@/data/profil";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Education() {
  const { pendidikan } = profil;

  return (
    <section
      id="pendidikan"
      aria-labelledby="judul-pendidikan"
      className="border-t border-slate-200/70 py-16 sm:py-20 dark:border-slate-800/70"
    >
      <div className="container-page">
        <Reveal>
          <SectionHeading id="judul-pendidikan" kicker="Pendidikan" judul="Pendidikan" />
        </Reveal>

        <Reveal delay={80}>
          <div className="card mt-8 overflow-hidden">
            <div className="flex flex-wrap items-start justify-between gap-6 p-6 sm:p-7">
              <div>
                <h3 className="text-lg font-semibold text-ink dark:text-white">
                  {pendidikan.institusi}
                </h3>
                <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">
                  {pendidikan.program}
                </p>
                <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                  {pendidikan.periode}
                </p>
              </div>
              <div className="rounded-2xl bg-accent-soft px-4 py-3 text-center dark:bg-accent/15">
                <p className="text-[11px] font-semibold uppercase tracking-wider text-accent-dark dark:text-blue-300">
                  IPK
                </p>
                <p className="mt-0.5 text-xl font-bold text-accent-dark dark:text-blue-200">
                  {pendidikan.ipk}
                </p>
              </div>
            </div>

            <div className="border-t border-slate-100 px-6 py-5 sm:px-7 dark:border-slate-800">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                Mata kuliah relevan
              </h4>
              <ul className="mt-3 flex flex-wrap gap-2">
                {pendidikan.mataKuliah.map((mk) => (
                  <li key={mk} className="chip">
                    {mk}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
