type Props = {
  kicker: string;
  judul: string;
  deskripsi?: string;
  id?: string;
};

export default function SectionHeading({ kicker, judul, deskripsi, id }: Props) {
  return (
    <div className="max-w-2xl">
      <p className="flex items-center gap-2.5 text-xs font-semibold uppercase tracking-[0.18em] text-accent">
        <span aria-hidden className="h-px w-6 bg-accent" />
        {kicker}
      </p>
      <h2
        id={id}
        className="mt-2 text-2xl font-bold tracking-tight text-ink sm:text-3xl dark:text-white"
      >
        {judul}
      </h2>
      {deskripsi ? (
        <p className="mt-3 text-[15px] leading-relaxed text-slate-600 dark:text-slate-400">
          {deskripsi}
        </p>
      ) : null}
    </div>
  );
}
