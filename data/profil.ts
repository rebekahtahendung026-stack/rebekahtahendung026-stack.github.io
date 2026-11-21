// =============================================================================
// SUMBER DATA PORTOFOLIO
// Semua teks yang tampil di website diambil dari file ini.
// Cari komentar "TODO" untuk bagian yang wajib kamu isi/ganti.
// =============================================================================

export type LevelKeahlian = "Pemula" | "Menengah" | "Mahir";
export type StatusProyek = "selesai" | "dibangun";

export type Proyek = {
  judul: string;
  ringkas: string;
  konteks: string;
  masalah: string;
  peran: string;
  hasil: string;
  stack: string[];
  status: StatusProyek;
  /** TODO: isi URL demo (mis. https://portal-pelatihan.vercel.app). Kosongkan bila belum ada. */
  demo: string;
  /** TODO: isi URL repository GitHub. Kosongkan bila belum ada. */
  repo: string;
  /** Kelas gradien Tailwind untuk placeholder thumbnail. */
  gradien: string;
  inisial: string;
};

export const profil = {
  nama: "Rebekah Tahendung",
  inisial: "RT",
  posisi:
    "Mahasiswa Teknik Informatika UNSRAT — fokus pada pengembangan web & sistem informasi",
  statusMagang: {
    teks: "Terbuka untuk Magang Kampus",
    // TODO: sesuaikan dengan periode magang yang benar-benar kamu incar.
    periode: "Februari–Juni 2027",
  },
  ipk: "3.80",
  semester: "5",
  lokasi: "Manado, Sulawesi Utara",
  // TODO: ganti bila kamu memakai email lain.
  email: "rebekahtahendung026@student.unsrat.ac.id",
  // TODO: ganti dengan nomor WhatsApp (format internasional, mis. 62812xxxxxxx). Kosongkan bila tidak ingin ditampilkan.
  whatsapp: "",
  sosial: [
    {
      label: "GitHub",
      url: "https://github.com/rebekahtahendung026-stack",
      ikon: "github" as const,
    },
    // TODO: tambahkan LinkedIn setelah profilnya ada, contoh:
    // { label: "LinkedIn", url: "https://linkedin.com/in/username", ikon: "linkedin" as const },
  ],
  // TODO: taruh file CV asli di public/cv.pdf
  cv: "/cv.pdf",

  tentang: [
    "Saya mahasiswa semester 5 Teknik Informatika UNSRAT yang menekuni pengembangan web, khususnya membangun antarmuka yang rapi dan sistem informasi yang mudah dipakai.",
    "Saya tertarik pada bagaimana proses manual di lingkungan kampus — pendaftaran, pencatatan peserta, hingga penerbitan sertifikat — bisa disederhanakan menjadi satu sistem.",
    "Melalui magang kampus, saya ingin menerapkan kemampuan itu pada kebutuhan nyata unit pelatihan dan belajar bekerja dalam alur kerja tim.",
  ],

  keahlian: [
    {
      kelompok: "Bahasa Pemrograman",
      item: [
        { nama: "HTML & CSS", level: "Menengah" as LevelKeahlian },
        { nama: "JavaScript", level: "Menengah" as LevelKeahlian },
        { nama: "TypeScript", level: "Pemula" as LevelKeahlian },
        { nama: "Python", level: "Pemula" as LevelKeahlian },
        { nama: "PHP", level: "Pemula" as LevelKeahlian },
        { nama: "SQL", level: "Pemula" as LevelKeahlian },
      ],
    },
    {
      kelompok: "Web & Framework",
      item: [
        { nama: "React", level: "Pemula" as LevelKeahlian },
        { nama: "Next.js", level: "Pemula" as LevelKeahlian },
        { nama: "Tailwind CSS", level: "Menengah" as LevelKeahlian },
        { nama: "Node.js", level: "Pemula" as LevelKeahlian },
      ],
    },
    {
      kelompok: "Database",
      item: [
        { nama: "MySQL", level: "Pemula" as LevelKeahlian },
        { nama: "PostgreSQL", level: "Pemula" as LevelKeahlian },
      ],
    },
    {
      kelompok: "Tools",
      item: [
        { nama: "Git & GitHub", level: "Menengah" as LevelKeahlian },
        { nama: "VS Code", level: "Mahir" as LevelKeahlian },
        { nama: "Figma", level: "Pemula" as LevelKeahlian },
        { nama: "Vercel", level: "Pemula" as LevelKeahlian },
      ],
    },
    {
      kelompok: "Konsep Dasar",
      item: [
        { nama: "Struktur Data & Algoritma", level: "Menengah" as LevelKeahlian },
        { nama: "Pemrograman Berorientasi Objek", level: "Menengah" as LevelKeahlian },
        { nama: "Basis Data Relasional", level: "Menengah" as LevelKeahlian },
        { nama: "Jaringan Komputer", level: "Pemula" as LevelKeahlian },
      ],
    },
  ],

  // TODO: isi dengan sertifikat/kursus yang benar-benar kamu miliki.
  // Contoh format:
  // { nama: "Belajar Dasar Pemrograman Web", penerbit: "Dicoding", tahun: "2025", url: "https://..." }
  // Biarkan kosong bila belum ada — website akan menampilkan catatan netral.
  sertifikasi: [] as {
    nama: string;
    penerbit: string;
    tahun: string;
    url: string;
  }[],

  proyek: [
    {
      judul: "Portal Katalog Pelatihan",
      ringkas:
        "Katalog pelatihan kampus dengan pencarian, filter kategori, halaman detail, dan form pendaftaran.",
      konteks: "Proyek pribadi",
      masalah:
        "Informasi pelatihan kampus tersebar di poster dan grup chat, sehingga peserta sulit membandingkan jadwal dan menemukan topik yang relevan.",
      peran:
        "Merancang alur dan antarmuka, membangun seluruh halaman dengan Next.js App Router, serta menyusun data pelatihan terpusat.",
      hasil:
        "Katalog dengan pencarian dan filter kategori, halaman detail per pelatihan, dan form pendaftaran yang tervalidasi.",
      stack: ["Next.js", "TypeScript", "Tailwind CSS"],
      status: "dibangun" as StatusProyek, // TODO: ubah ke "selesai" setelah benar-benar jadi
      demo: "", // TODO
      repo: "", // TODO
      gradien: "from-blue-500 to-indigo-600",
      inisial: "PK",
    },
    {
      judul: "LatihanSoal",
      ringkas:
        "Aplikasi kuis interaktif: bank soal, timer, penilaian otomatis, review jawaban, dan mode acak.",
      konteks: "Proyek pribadi",
      masalah:
        "Latihan soal masih dikerjakan di kertas, sehingga penilaian dan review jawaban memakan waktu.",
      peran:
        "Membangun logika kuis, pengacakan soal, timer, penilaian otomatis, dan penyimpanan riwayat skor.",
      hasil:
        "Kuis dengan mode acak, timer, penilaian otomatis, halaman review jawaban, dan riwayat skor tersimpan di perangkat.",
      stack: ["React", "TypeScript", "localStorage"],
      status: "dibangun" as StatusProyek, // TODO
      demo: "", // TODO
      repo: "", // TODO
      gradien: "from-emerald-500 to-teal-600",
      inisial: "LS",
    },
    {
      judul: "SIPELATIH",
      ringkas:
        "Sistem pendaftaran peserta pelatihan dengan sertifikat PDF ber-QR yang dapat diverifikasi lewat halaman publik.",
      konteks: "Proyek pribadi",
      masalah:
        "Pendaftaran peserta dan penerbitan sertifikat masih manual lewat spreadsheet, rawan salah data dan duplikasi.",
      peran:
        "Merancang skema basis data, membangun formulir pendaftaran, serta fitur generate sertifikat PDF dan halaman verifikasi QR.",
      hasil:
        "Data peserta terpusat, sertifikat PDF dibuat otomatis, dan keasliannya dapat dicek melalui halaman verifikasi.",
      stack: ["Next.js", "PostgreSQL", "Supabase", "react-pdf"],
      status: "dibangun" as StatusProyek, // TODO
      demo: "", // TODO
      repo: "", // TODO
      gradien: "from-violet-500 to-purple-600",
      inisial: "SP",
    },
    {
      judul: "Dashboard Monitoring Pelatihan",
      ringkas:
        "Dashboard admin untuk memantau jumlah peserta, tingkat kelulusan, dan tren pelatihan per periode.",
      konteks: "Proyek pribadi",
      masalah:
        "Pengelola pelatihan tidak punya gambaran cepat tentang jumlah peserta dan tingkat kelulusan tiap periode.",
      peran:
        "Membangun dashboard dengan kartu ringkasan, grafik tren, tabel peserta yang dapat difilter, dan ekspor data.",
      hasil:
        "Ringkasan peserta dan kelulusan dalam satu layar, grafik tren per periode, serta tabel yang dapat difilter.",
      stack: ["Next.js", "Recharts", "Tailwind CSS"],
      status: "dibangun" as StatusProyek, // TODO
      demo: "", // TODO
      repo: "", // TODO
      gradien: "from-amber-500 to-orange-600",
      inisial: "DM",
    },
  ] as Proyek[],

  // TODO: isi pengalaman organisasi/kepanitiaan yang benar-benar kamu ikuti.
  // Contoh format:
  // { peran: "Anggota Divisi Acara", organisasi: "Himpunan Mahasiswa Teknik Informatika UNSRAT",
  //   periode: "2025", kontribusi: "Mengelola rundown dan koordinasi 3 divisi." }
  organisasi: [] as {
    peran: string;
    organisasi: string;
    periode: string;
    kontribusi: string;
  }[],

  pendidikan: {
    institusi: "Universitas Sam Ratulangi",
    program: "S1 Teknik Informatika, Fakultas Teknik",
    // TODO: sesuaikan tahun masuk.
    periode: "2024 – sekarang",
    ipk: "3.80 / 4.00",
    // TODO: sesuaikan dengan mata kuliah yang benar-benar sudah kamu ambil.
    mataKuliah: [
      "Pemrograman Web",
      "Basis Data",
      "Rekayasa Perangkat Lunak",
      "Struktur Data",
      "Jaringan Komputer",
      "Pemrograman Berorientasi Objek",
    ],
  },
};

export type Profil = typeof profil;
