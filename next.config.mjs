/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Static export: hasil build ada di folder `out/` dan bisa dilayani hosting
  // statis apa pun (GitHub Pages, Netlify, Cloudflare Pages, Vercel).
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
