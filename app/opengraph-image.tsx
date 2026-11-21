import { ImageResponse } from "next/og";

export const alt = "Portofolio Rebekah Tahendung — Mahasiswa Teknik Informatika UNSRAT";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#0B1120",
          color: "#FFFFFF",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "18px" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "60px",
              height: "60px",
              borderRadius: "18px",
              background: "#2563EB",
              fontSize: "24px",
              fontWeight: 700,
            }}
          >
            RT
          </div>
          <div style={{ fontSize: "24px", color: "#93C5FD", letterSpacing: "0.04em" }}>
            PORTOFOLIO MAGANG KAMPUS
          </div>
        </div>

        <div
          style={{
            marginTop: "44px",
            fontSize: "72px",
            fontWeight: 700,
            lineHeight: 1.05,
          }}
        >
          Rebekah Tahendung
        </div>

        <div style={{ marginTop: "22px", fontSize: "32px", color: "#CBD5E1" }}>
          Teknik Informatika · Universitas Sam Ratulangi
        </div>

        <div style={{ marginTop: "14px", fontSize: "26px", color: "#94A3B8" }}>
          IPK 3.80 · Semester 5 · Manado, Sulawesi Utara
        </div>

        <div
          style={{
            marginTop: "48px",
            display: "flex",
            alignItems: "center",
            gap: "12px",
          }}
        >
          <div
            style={{
              display: "flex",
              width: "12px",
              height: "12px",
              borderRadius: "999px",
              background: "#34D399",
            }}
          />
          <div style={{ fontSize: "24px", color: "#A7F3D0" }}>
            Terbuka untuk magang kampus
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
