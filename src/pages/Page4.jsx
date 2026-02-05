import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

/* ===== ANIMATION ===== */
export const FadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 70,
      duration: 0.6,
      delay,
    },
  },
});

const Page4 = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const formRef = useRef(null);

  const SCRIPT_URL =
    "https://script.google.com/macros/s/AKfycbyvU_d_kLzjigpdce5r0xpaYh5slnjYyje_DzDypi29-JoAYv5dA18hvVzlEittGT3t_Q/exec";

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    const data = new FormData(formRef.current);

    fetch(SCRIPT_URL, { method: "POST", body: data })
      .then(() => {
        alert("Berhasil! Data Anda telah kami terima.");
        formRef.current.reset();
        setIsModalOpen(false);
        setIsLoading(false);
      })
      .catch(() => {
        alert("Terjadi kesalahan. Silakan coba lagi.");
        setIsLoading(false);
      });
  };

  return (
    <section className="bg-[url('/src/assets/navbar-bg.svg')] bg-cover min-h-screen flex flex-col text-white">
      <Navbar />

      {/* ================= HERO ================= */}
      <section className="relative min-h-screen pt-32 md:pt-40 flex items-center">
        <motion.div
          variants={FadeUp(0.2)}
          initial="initial"
          animate="animate"
          className="container mx-auto px-4 text-center max-w-4xl"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            Konsultasi & Pembiayaan
            <span className="block text-lime-300 mt-3">
              Syariah yang Amanah
            </span>
          </h1>

          <p className="mt-6 text-gray-200 text-lg leading-relaxed max-w-2xl mx-auto">
            Kami hadir untuk membantu kebutuhan usaha dan ibadah Anda dengan
            proses cepat, transparan, dan sesuai prinsip syariah.
          </p>

          <div className="flex flex-wrap justify-center gap-6 mt-10 text-sm">
            <span className="flex items-center gap-2">
              ✅ Proses Cepat
            </span>
            <span className="flex items-center gap-2">
              🕌 Sesuai Syariah
            </span>
            <span className="flex items-center gap-2">
              📞 Konsultasi Gratis
            </span>
          </div>
        </motion.div>
      </section>

      {/* ================= CONTENT ================= */}
      <main className="container mx-auto px-4 pb-24">

        <div className="grid md:grid-cols-2 gap-12 mb-24">

          {/* FAQ */}
          <motion.div
            variants={FadeUp(0.3)}
            initial="initial"
            animate="animate"
            className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8"
          >
            <h2 className="text-2xl font-bold text-lime-300 mb-8">
              Pertanyaan Umum
            </h2>

            <div className="space-y-6">
              <div className="border-b border-white/10 pb-4">
                <h3 className="font-semibold text-lg">
                  Produk apa saja yang tersedia?
                </h3>
                <p className="text-gray-300 mt-2 text-sm">
                  Pembiayaan Modal Usaha, Haji & Umroh, serta Multiguna berbasis
                  syariah.
                </p>
              </div>

              <div className="border-b border-white/10 pb-4">
                <h3 className="font-semibold text-lg">
                  Apa syarat pengajuan?
                </h3>
                <p className="text-gray-300 mt-2 text-sm">
                  KTP, KK, dan pendaftaran anggota koperasi (Rp 200.000).
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-lg">
                  Siapa saja yang bisa mengajukan?
                </h3>
                <p className="text-gray-300 mt-2 text-sm">
                  ASN, karyawan swasta, pelaku UMKM, dan masyarakat umum.
                </p>
              </div>
            </div>
          </motion.div>

          {/* CONTACT */}
          <motion.div
            variants={FadeUp(0.4)}
            initial="initial"
            animate="animate"
            className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8"
          >
            <h2 className="text-2xl font-bold text-lime-300 mb-6">
              Kantor Pusat
            </h2>

            <div className="space-y-4 text-gray-200 text-sm mb-6">
              <p>📍 Jl. Panglima Aim No. 74, Pontianak Timur</p>
              <p>📞 +62 851-9552-2202</p>
              <p>✉️ ptfirmansyahkhatulistiwagroup@gmail.com</p>
            </div>

            <div className="h-[240px] rounded-2xl overflow-hidden border border-white/20">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.8176579760457!2d109.3598611741087!3d-0.033014935538590175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e1d59002f4751e9%3A0xebc19c21d84d371d!2sFirman&#39;s%20Group!5e0!3m2!1sid!2sid!4v1770261949408!5m2!1sid!2sid"
                className="w-full h-full"
                loading="lazy"
                title="Lokasi Kantor"
              />
            </div>
          </motion.div>
        </div>

        {/* ================= CTA ================= */}
        <motion.div
          variants={FadeUp(0.5)}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="bg-[#cae4c3] rounded-3xl p-12 text-center shadow-xl"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
            Tertarik Mengajukan Pembiayaan?
          </h2>

          <p className="text-gray-800 mt-4 max-w-xl mx-auto font-medium">
            Konsultasikan kebutuhan Anda sekarang.
            Tim kami siap membantu.
          </p>

          <button
            onClick={() => setIsModalOpen(true)}
            className="mt-8 px-10 py-4 bg-gray-900 text-lime-400 rounded-full font-bold text-lg hover:scale-105 transition"
          >
            Isi Formulir Pendaftaran
          </button>
        </motion.div>
      </main>

      <Footer />

      {/* ================= MODAL ================= */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-[999] flex items-center justify-center px-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            />

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative bg-[#1a1a1a] border border-lime-300/30 rounded-2xl p-8 w-full max-w-lg"
            >
              <h3 className="text-2xl font-bold text-lime-300 mb-6">
                Formulir Pendaftaran
              </h3>

              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="space-y-4"
              >
                <input name="Nama" required placeholder="Nama Lengkap"
                  className="w-full px-4 py-3 rounded-lg bg-black/40 border border-white/10" />
                <input name="Whatsapp" required placeholder="Nomor WhatsApp"
                  className="w-full px-4 py-3 rounded-lg bg-black/40 border border-white/10" />
                <button
                  disabled={isLoading}
                  className="w-full bg-lime-300 text-black font-bold py-3 rounded-lg"
                >
                  {isLoading ? "Mengirim..." : "Kirim Data"}
                </button>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Page4;
