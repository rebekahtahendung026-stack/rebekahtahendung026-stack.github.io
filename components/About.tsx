import { profil } from "@/data/profil";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function About() {
  return (
    <section
      id="tentang"
      aria-labelledby="judul-tentang"
      className="border-t border-slate-200/70 py-16 sm:py-20 dark:border-slate-800/70"
    >
      <div className="container-page">
        <Reveal>
          <SectionHeading
            id="judul-tentang"
            kicker="Tentang"
            judul="Tentang saya"
          />
        </Reveal>

        <div className="mt-8 grid gap-8 lg:grid-cols-[1.5fr_1fr] lg:gap-12">
          <Reveal>
            <div className="space-y-4 text-[15px] leading-relaxed text-slate-600 dark:text-slate-300">
              {profil.tentang.map((paragraf) => (
                <p key={paragraf}>{paragraf}</p>
              ))}
            </div>
          </Reveal>

          <Reveal delay={100}>
            <aside className="card p-6" aria-label="Ringkasan data diri">
              <h3 className="text-sm font-semibold text-ink dark:text-white">
                Ringkasan
              </h3>
              <dl className="mt-4 space-y-3 text-sm">
                {[
                  { label: "Status", nilai: "Mahasiswa semester 5" },
                  { label: "Program studi", nilai: "S1 Teknik Informatika" },
                  { label: "Fokus", nilai: "Web & sistem informasi" },
                  { label: "IPK", nilai: profil.pendidikan.ipk },
                  { label: "Lokasi", nilai: profil.lokasi },
                ].map((baris) => (
                  <div
                    key={baris.label}
                    className="flex items-baseline justify-between gap-4 border-b border-slate-100 pb-2.5 last:border-0 last:pb-0 dark:border-slate-800"
                  >
                    <dt className="text-slate-500 dark:text-slate-400">{baris.label}</dt>
                    <dd className="text-right font-medium text-ink dark:text-slate-200">
                      {baris.nilai}
                    </dd>
                  </div>
                ))}
              </dl>
            </aside>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
