# Portofolio Magang Kampus — Rebekah Tahendung

Website portofolio satu halaman untuk mahasiswa Teknik Informatika UNSRAT semester 5
yang mencari magang kampus. Dibangun dengan Next.js (App Router), TypeScript, dan
Tailwind CSS.

## Menjalankan

```bash
npm install
npm run dev
```

Buka http://localhost:3000.

Perintah lain:

```bash
npm run build   # build statis ke folder out/
npm run preview # pratinjau hasil build (butuh unduhan paket `serve`)
npm run lint    # cek tipe TypeScript
```

## Struktur folder

```
portofolio-rebekah/
├─ app/
│  ├─ layout.tsx            # metadata SEO, tema, Nav & Footer
│  ├─ page.tsx              # urutan section
│  ├─ globals.css           # Tailwind + style dasar
│  ├─ icon.svg              # favicon monogram RT
│  ├─ opengraph-image.tsx   # gambar preview saat link dibagikan
│  ├─ robots.ts             # aturan crawler
│  └─ sitemap.ts            # sitemap.xml
├─ components/
│  ├─ Nav.tsx               # navigasi + menu seluler + tombol CV
│  ├─ Hero.tsx              # nama, status magang, IPK, CTA
│  ├─ Avatar.tsx            # foto dengan fallback monogram
│  ├─ About.tsx             # tentang + ringkasan data
│  ├─ Skills.tsx            # keahlian per kelompok + sertifikasi
│  ├─ Projects.tsx          # grid proyek
│  ├─ ProjectCard.tsx       # kartu proyek (masalah/peran/hasil)
│  ├─ Experience.tsx        # timeline organisasi
│  ├─ Education.tsx         # pendidikan + mata kuliah
│  ├─ Contact.tsx           # info kontak
│  ├─ ContactForm.tsx       # form mailto + salin email
│  ├─ Footer.tsx
│  ├─ Reveal.tsx            # animasi fade-up saat scroll
│  ├─ ThemeToggle.tsx       # mode terang/gelap
│  ├─ SectionHeading.tsx
│  └─ icons.tsx             # ikon SVG inline (tanpa dependensi)
├─ data/
│  └─ profil.ts             # SEMUA teks & data di sini
└─ public/
   ├─ cv.pdf                # draft CV — ganti dengan CV asli
   ├─ foto.jpg              # (belum ada) tambahkan fotomu
   └─ README-ASET.md
```

## Yang wajib diisi sebelum publish

Semua ada di `data/profil.ts` (cari komentar `TODO`):

- [ ] Email aktif dan URL GitHub/LinkedIn
- [ ] Nomor WhatsApp (opsional)
- [ ] Periode magang yang benar-benar diincar
- [ ] Tahun masuk kuliah
- [ ] Mata kuliah yang sudah benar-benar diambil
- [ ] Sertifikasi/kursus yang sudah dimiliki (jika ada)
- [ ] Pengalaman organisasi/kepanitiaan (jika ada)
- [ ] Link demo & repo untuk setiap proyek
- [ ] Ubah `status` proyek dari `"dibangun"` menjadi `"selesai"` **hanya setelah** proyeknya benar-benar jadi
- [ ] Ganti `public/cv.pdf` dengan CV asli
- [ ] Tambahkan `public/foto.jpg` (rasio 1:1, min. 800×800)

Lalu ubah domain di environment variable:

```bash
# .env.local
NEXT_PUBLIC_SITE_URL=https://domain-kamu.vercel.app
```

## Deploy

Situs ini sudah di-deploy otomatis ke **GitHub Pages** melalui GitHub Actions.

- URL: https://rebekahtahendung026-stack.github.io
- Repo: https://github.com/rebekahtahendung026-stack/rebekahtahendung026-stack.github.io
- Workflow: `.github/workflows/deploy.yml` (jalan setiap push ke `main`)

Setelah mengubah `data/profil.ts`, cukup commit lalu push — GitHub akan build
ulang dan mempublikasikan versi terbaru dalam 1–3 menit.

Alternatif: repo ini juga bisa diimpor ke Vercel (framework Next.js terdeteksi
otomatis) bila nanti ingin memakai domain sendiri.

## Keputusan desain

- **Light mode sebagai default** agar terbaca nyaman saat rekruter membuka dari HP;
  dark mode tersedia lewat tombol dan tersimpan di `localStorage`.
- **Aksen tunggal (#2563EB)** dan tipografi Inter — mengurangi gangguan visual
  sehingga perhatian jatuh ke isi, bukan dekorasi.
- **Status magang ditampilkan di hero** (badge hijau + periode) karena itu informasi
  pertama yang dicari pengelola unit kampus.
- **IPK 3.80 diletakkan sebagai statistik kecil**, bukan headline — tetap terlihat
  tanpa terkesan menyombongkan diri.
- **Kartu proyek memakai struktur Masalah → Peran → Hasil**, supaya isi proyek bisa
  dinilai cepat dan memancing pertanyaan saat wawancara.
- **Badge "Sedang dibangun"** dipakai untuk proyek yang belum selesai, agar tidak ada
  klaim yang berlebihan.
- **Animasi dibatasi pada fade-up** dan dimatikan otomatis bila pengguna memilih
  `prefers-reduced-motion`.
- **Tanpa dependensi UI tambahan** — ikon berupa SVG inline, sehingga bundle kecil
  dan mudah dirawat.
