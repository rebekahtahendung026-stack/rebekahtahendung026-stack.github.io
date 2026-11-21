"use client";

import { useState, type FormEvent } from "react";
import { profil } from "@/data/profil";
import { IconArrowRight, IconCheck, IconCopy } from "./icons";

const gayaInput =
  "w-full rounded-xl border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-ink placeholder:text-slate-400 transition focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/25 dark:border-slate-700 dark:bg-slate-950/60 dark:text-slate-100 dark:placeholder:text-slate-500";

export default function ContactForm() {
  const [nama, setNama] = useState("");
  const [email, setEmail] = useState("");
  const [pesan, setPesan] = useState("");
  const [tersalin, setTersalin] = useState(false);

  function kirim(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const subjek = `Portofolio — pesan dari ${nama}`;
    const isi = `${pesan}\n\n— ${nama} (${email})`;
    window.location.href = `mailto:${profil.email}?subject=${encodeURIComponent(
      subjek,
    )}&body=${encodeURIComponent(isi)}`;
  }

  async function salinEmail() {
    try {
      await navigator.clipboard.writeText(profil.email);
      setTersalin(true);
      window.setTimeout(() => setTersalin(false), 2000);
    } catch {
      /* Clipboard bisa diblokir browser; pengguna masih bisa menyalin manual. */
    }
  }

  return (
    <div className="card p-6 sm:p-7">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h3 className="text-base font-semibold text-ink dark:text-white">
          Kirim pesan
        </h3>
        <button
          type="button"
          onClick={salinEmail}
          className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 px-3 py-1.5 text-xs font-medium text-slate-600 transition hover:border-accent hover:text-accent dark:border-slate-700 dark:text-slate-300"
        >
          {tersalin ? (
            <>
              <IconCheck className="h-3.5 w-3.5" />
              Email tersalin
            </>
          ) : (
            <>
              <IconCopy className="h-3.5 w-3.5" />
              Salin email
            </>
          )}
        </button>
      </div>

      <form onSubmit={kirim} className="mt-5 space-y-4">
        <div>
          <label
            htmlFor="nama"
            className="mb-1.5 block text-xs font-medium text-slate-600 dark:text-slate-300"
          >
            Nama
          </label>
          <input
            id="nama"
            name="nama"
            type="text"
            required
            autoComplete="name"
            value={nama}
            onChange={(e) => setNama(e.target.value)}
            placeholder="Nama kamu"
            className={gayaInput}
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="mb-1.5 block text-xs font-medium text-slate-600 dark:text-slate-300"
          >
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="nama@email.com"
            className={gayaInput}
          />
        </div>

        <div>
          <label
            htmlFor="pesan"
            className="mb-1.5 block text-xs font-medium text-slate-600 dark:text-slate-300"
          >
            Pesan
          </label>
          <textarea
            id="pesan"
            name="pesan"
            required
            rows={4}
            value={pesan}
            onChange={(e) => setPesan(e.target.value)}
            placeholder="Tulis keperluan atau pertanyaanmu di sini."
            className={`${gayaInput} resize-y`}
          />
        </div>

        <button type="submit" className="btn-primary w-full">
          Kirim lewat aplikasi email
          <IconArrowRight className="h-4 w-4" />
        </button>

        <p className="text-[11px] leading-relaxed text-slate-500 dark:text-slate-400">
          Form ini membuka aplikasi email kamu dengan pesan yang sudah terisi.
          Tidak ada data yang disimpan di website.
        </p>
      </form>
    </div>
  );
}
