import { profil } from "@/data/profil";
import ContactForm from "./ContactForm";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import {
  IconGithub,
  IconLinkedin,
  IconMail,
  IconPin,
  IconWhatsapp,
} from "./icons";

const ikonSosial = {
  github: IconGithub,
  linkedin: IconLinkedin,
} as const;

export default function Contact() {
  return (
    <section
      id="kontak"
      aria-labelledby="judul-kontak"
      className="border-t border-slate-200/70 bg-white/60 py-16 sm:py-20 dark:border-slate-800/70 dark:bg-slate-950/40"
    >
      <div className="container-page grid gap-10 lg:grid-cols-[1fr_1.05fr] lg:gap-14">
        <Reveal>
          <SectionHeading
            id="judul-kontak"
            kicker="Kontak"
            judul="Mari bicara soal magang"
            deskripsi="Saya terbuka untuk diskusi mengenai magang kampus, proyek kolaborasi, atau sekadar bertukar pengalaman seputar pengembangan web."
          />

          <ul className="mt-7 space-y-3 text-sm">
            <li>
              <a
                href={`mailto:${profil.email}`}
                className="group flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-3.5 transition hover:border-accent dark:border-slate-800 dark:bg-slate-900"
              >
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-accent-soft text-accent dark:bg-accent/15">
                  <IconMail className="h-4 w-4" />
                </span>
                <span className="min-w-0">
                  <span className="block text-[11px] font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                    Email
                  </span>
                  <span className="block truncate font-medium text-ink group-hover:text-accent dark:text-slate-200">
                    {profil.email}
                  </span>
                </span>
              </a>
            </li>

            {profil.whatsapp ? (
              <li>
                <a
                  href={`https://wa.me/${profil.whatsapp}`}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="group flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-3.5 transition hover:border-accent dark:border-slate-800 dark:bg-slate-900"
                >
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-emerald-50 text-emerald-600 dark:bg-emerald-950/40 dark:text-emerald-400">
                    <IconWhatsapp className="h-4 w-4" />
                  </span>
                  <span>
                    <span className="block text-[11px] font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                      WhatsApp
                    </span>
                    <span className="block font-medium text-ink group-hover:text-accent dark:text-slate-200">
                      Chat via WhatsApp
                    </span>
                  </span>
                </a>
              </li>
            ) : null}

            <li className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-3.5 dark:border-slate-800 dark:bg-slate-900">
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300">
                <IconPin className="h-4 w-4" />
              </span>
              <span>
                <span className="block text-[11px] font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                  Lokasi
                </span>
                <span className="block font-medium text-ink dark:text-slate-200">
                  {profil.lokasi}
                </span>
              </span>
            </li>
          </ul>

          <div className="mt-5 flex items-center gap-2">
            {profil.sosial.map((s) => {
              const Ikon = ikonSosial[s.ikon];
              return (
                <a
                  key={s.label}
                  href={s.url}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3.5 py-2 text-xs font-medium text-slate-700 transition hover:border-accent hover:text-accent dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300"
                >
                  <Ikon className="h-4 w-4" />
                  {s.label}
                </a>
              );
            })}
          </div>
        </Reveal>

        <Reveal delay={100}>
          <ContactForm />
        </Reveal>
      </div>
    </section>
  );
}
