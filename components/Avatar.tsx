"use client";

import { useState } from "react";

type Props = {
  nama: string;
  inisial: string;
};

/**
 * Menampilkan public/foto.jpg bila tersedia.
 * Jika file belum ada, tampil monogram inisial sebagai placeholder.
 * TODO: taruh foto profesionalmu di public/foto.jpg (rasio 1:1, min. 800x800).
 */
export default function Avatar({ nama, inisial }: Props) {
  const [gagal, setGagal] = useState(false);

  if (gagal) {
    return (
      <div
        aria-label={`Placeholder foto ${nama}`}
        role="img"
        className="flex h-full w-full items-center justify-center bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900"
      >
        <span className="text-6xl font-bold tracking-tight text-slate-400 dark:text-slate-600">
          {inisial}
        </span>
      </div>
    );
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src="/foto.jpg"
      alt={`Foto ${nama}`}
      width={640}
      height={640}
      onError={() => setGagal(true)}
      className="h-full w-full object-cover"
    />
  );
}
