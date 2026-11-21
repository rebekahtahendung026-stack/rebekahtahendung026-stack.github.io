import { profil } from "@/data/profil";
import ProjectCard from "./ProjectCard";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Projects() {
  return (
    <section
      id="proyek"
      aria-labelledby="judul-proyek"
      className="border-t border-slate-200/70 bg-white/60 py-16 sm:py-20 dark:border-slate-800/70 dark:bg-slate-950/40"
    >
      <div className="container-page">
        <Reveal>
          <SectionHeading
            id="judul-proyek"
            kicker="Proyek"
            judul="Proyek yang saya bangun"
            deskripsi="Setiap proyek berangkat dari masalah kecil di sekitar kampus. Kartu bertanda “Sedang dibangun” belum selesai sepenuhnya — saya cantumkan apa adanya."
          />
        </Reveal>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {profil.proyek.map((proyek, i) => (
            <Reveal key={proyek.judul} delay={(i % 2) * 80} className="h-full">
              <ProjectCard proyek={proyek} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
