import type { Metadata, Viewport } from "next";
import "./globals.css";
import Footer from "@/components/Footer";
import Nav from "@/components/Nav";

const situs = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

const judul = "Rebekah Tahendung — Portofolio Magang Kampus";
const deskripsi =
  "Portofolio Rebekah Tahendung, mahasiswa Teknik Informatika UNSRAT semester 5 dengan IPK 3.80. Terbuka untuk magang kampus di bidang pengembangan web dan sistem informasi.";

export const metadata: Metadata = {
  metadataBase: new URL(situs),
  title: judul,
  description: deskripsi,
  keywords: [
    "Rebekah Tahendung",
    "portofolio",
    "magang kampus",
    "Teknik Informatika",
    "UNSRAT",
    "web developer",
    "mahasiswa",
  ],
  authors: [{ name: "Rebekah Tahendung" }],
  creator: "Rebekah Tahendung",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "/",
    siteName: "Portofolio Rebekah Tahendung",
    title: judul,
    description: deskripsi,
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Portofolio Rebekah Tahendung — Mahasiswa Teknik Informatika UNSRAT",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: judul,
    description: deskripsi,
    images: ["/og.png"],
  },
  robots: { index: true, follow: true },
  category: "portfolio",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FAFAFA" },
    { media: "(prefers-color-scheme: dark)", color: "#0B1120" },
  ],
};

// Dijalankan sebelum render agar mode gelap tidak "berkedip" saat halaman dimuat.
// Default: mode terang. Pilihan pengguna disimpan di localStorage.
const skripTema = `(function(){try{if(localStorage.getItem('tema')==='gelap'){document.documentElement.classList.add('dark');}}catch(e){}})();`;

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: skripTema }} />
        <noscript>
          <style>{`.reveal{opacity:1 !important;transform:none !important}`}</style>
        </noscript>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <a
          href="#konten"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-accent focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
        >
          Lewati ke konten utama
        </a>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
