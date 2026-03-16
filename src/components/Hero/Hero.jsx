import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { IoIosArrowRoundForward } from "react-icons/io";
import { motion } from "framer-motion";

import BadgesWGS from "/logo_firmans.png";
import CEOPhoto from "/K1.jpeg";

const stagger = (i) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.65, delay: 0.2 + i * 0.12, ease: [0.22, 1, 0.36, 1] },
});

const Hero = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const link = document.createElement("link");
    link.href =
      "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@600;700&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
  }, []);

  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ background: "#0b1f0f", minHeight: "100svh" }}
    >
      {/* ── Ghost background text ──────────────────────────── */}
      <div
        className="pointer-events-none select-none absolute inset-0 flex items-center justify-end overflow-hidden pr-[42%]"
        aria-hidden
      >
        {/* Konten Ghost Text yang di-comment tetap dibiarkan sesuai aslinya */}
      </div>

      {/* ── Main Grid ─────────────────────────────────────── */}
      <div className="relative z-10 w-full grid grid-cols-1 lg:grid-cols-[1fr_480px] xl:grid-cols-[1fr_560px] min-h-[100svh]">

        {/* ─────── LEFT: Content ─────────────────────────── */}
        {/* Perbaikan: Padding responsif dihaluskan & penambahan z-20 agar teks selalu di atas gradient */}
        <div className="relative z-20 flex flex-col justify-center w-full px-6 sm:px-12 md:px-16 lg:px-20 xl:px-24 py-20 lg:py-0">
          
          {/* Logo */}
          <motion.div {...stagger(1)} className="mb-8">
            <img
              src={BadgesWGS}
              alt="Logo Firmans Group"
              className="h-14 sm:h-16 object-contain"
              style={{ filter: "brightness(0) invert(1)", opacity: 0.85 }}
            />
          </motion.div>

          {/* Main heading */}
          <motion.h1
            {...stagger(2)}
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(2.6rem, 5.5vw, 4.6rem)",
              fontWeight: 700,
              lineHeight: 1.06,
              color: "#f2ead8",
              letterSpacing: "-0.01em",
              marginBottom: "1.5rem",
            }}
          >
            PT Firmansyah
            <br />
            <span style={{ color: "#c9a55a" }}>Khatulistiwa</span>
            <br />
            Group
          </motion.h1>

          {/* Thin rule */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.7, delay: 0.72, ease: [0.22, 1, 0.36, 1] }}
            className="origin-left mb-7"
            style={{ height: 1, background: "rgba(255,255,255,0.1)", maxWidth: 400 }}
          />

          {/* Description */}
          <motion.p
            {...stagger(4)}
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "clamp(1.450rem, 1.4vw, 1rem)",
              color: "rgba(255,255,255,0.52)",
              lineHeight: 1.8,
              maxWidth: 780,
              marginBottom: "2.5rem",
              fontWeight: 300,
            }}
          >
            PT Firmansyah Khatulistiwa Group (Firman's Group) adalah sebuah startup yang berasal dari Kalimantan Barat, bergerak di bidang pembiayaan syariah, solusi keuangan, serta pengembangan program kemanusiaan dan keumatan. Fokus utama perusahaan ini adalah untuk mendorong pemberdayaan ekonomi dan sosial melalui layanan keuangan inklusif.
          </motion.p>

          {/* Pillars */}
          {/* <motion.div
            {...stagger(5)}
            className="flex flex-wrap gap-x-8 gap-y-5 mb-12"
          >
            {[
              { value: "Syariah", label: "Pembiayaan" },
              { value: "Inklusif", label: "Keuangan" },
              { value: "Sosial", label: "Kemanusiaan" },
            ].map(({ value, label }) => (
              <div key={label}>
                <div
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: 13,
                    fontWeight: 500,
                    color: "#c9a55a",
                    letterSpacing: "0.02em",
                  }}
                >
                  {value}
                </div>
                <div
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: 10,
                    color: "rgba(255,255,255,0.35)",
                    letterSpacing: "0.18em",
                    textTransform: "uppercase",
                    marginTop: 3,
                  }}
                >
                  {label}
                </div>
              </div>
            ))}
          </motion.div> */}

          {/* CTA */}
          <motion.div {...stagger(6)}>
            <button
              onClick={() => navigate("/About-Us")}
              className="group flex items-center gap-3 transition-all duration-300 w-fit"
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 13,
                fontWeight: 500,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: "#c9a55a",
                background: "transparent",
                border: "1px solid rgba(201,165,90,0.45)",
                borderRadius: 9999,
                padding: "14px 28px",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#c9a55a";
                e.currentTarget.style.color = "#0b1f0f";
                e.currentTarget.style.borderColor = "#c9a55a";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "transparent";
                e.currentTarget.style.color = "#c9a55a";
                e.currentTarget.style.borderColor = "rgba(201,165,90,0.45)";
              }}
            >
              Kenali Kami Lebih Jauh
              <IoIosArrowRoundForward
                style={{ fontSize: 20, transition: "transform 0.3s" }}
                className="group-hover:translate-x-1 group-hover:-rotate-45"
              />
            </button>
          </motion.div>
        </div>

        {/* ─────── RIGHT: Photo Panel ─────────────────────── */}
        {/* Perbaikan: Tambah h-full, w-full, dan overflow-hidden agar gambar solid di grid */}
        <div className="relative h-full w-full overflow-hidden">

          {/* Left-edge fade blends photo into dark bg */}
          <div
            className="absolute inset-y-0 left-0 z-10"
            style={{
              width: 140, // Sedikit diperlebar agar transisinya lebih smooth
              background: "linear-gradient(to right, #0b1f0f 10%, transparent)",
            }}
          />

          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 1.06 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.1, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0 h-full w-full"
          >
            <img
              src={CEOPhoto}
              alt="CEO Hendra Firmansyah"
              className="w-full h-full object-cover object-top"
              style={{ filter: "grayscale(15%) contrast(1.08) brightness(0.88)" }}
            />

            {/* Cinematic bottom vignette */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(to top, #0b1f0f 0%, rgba(11,31,15,0.55) 35%, transparent 65%)",
              }}
            />
          </motion.div>

          {/* CEO nameplate — bottom right */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.95, ease: [0.22, 1, 0.36, 1] }}
            className="absolute bottom-10 right-8 z-20 text-right"
          >
            <div
              style={{
                background: "rgba(11,31,15,0.65)",
                backdropFilter: "blur(12px)",
                WebkitBackdropFilter: "blur(12px)",
                border: "1px solid rgba(201,165,90,0.25)",
                borderRadius: 14,
                padding: "16px 20px",
              }}
            >
              <div
                style={{
                  width: 24,
                  height: 1,
                  background: "#c9a55a",
                  marginLeft: "auto",
                  marginBottom: 10,
                }}
              />
              <h3
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: 17,
                  fontWeight: 600,
                  color: "#f2ead8",
                  margin: 0,
                }}
              >
                Dr. H. Hendra Firmansyah S.E., M.M
              </h3>
              <p
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: 9.5,
                  letterSpacing: "0.22em",
                  color: "#c9a55a",
                  textTransform: "uppercase",
                  marginTop: 5,
                  marginBottom: 0,
                  fontWeight: 500,
                }}
              >
                CEO &amp; Founder
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* ── Bottom gold rule ──────────────────────────────── */}
      <div
        className="absolute bottom-0 left-0 right-0 z-30"
        style={{
          height: 1,
          background: "linear-gradient(90deg, transparent, rgba(201,165,90,0.35), transparent)",
        }}
      />
    </section>
  );
};

export default Hero;