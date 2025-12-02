import Navbar from "../components/Navbar/Navbar";
import { motion } from "framer-motion";
import Footer from "../components/Footer/Footer";
import React from "react";

export const FadeUp = (delay) => ({
  initial: { opacity: 0, y: 40 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 70, duration: 0.6, delay },
  },
});

const Page4 = () => {
  return (
    <section className="bg-[url('/src/assets/navbar-bg.svg')] bg-repeat bg-cover min-h-screen flex flex-col">
      <Navbar />

      <div className="flex-grow container py-16 md:py-24">
        {/* HERO */}
        <motion.div
          variants={FadeUp(0.2)}
          initial="initial"
          animate="animate"
          className="text-center mb-16"
        >
          <h1 className="text-white text-4xl md:text-6xl font-bold drop-shadow-lg">
            Hubungi <span className="text-white">Kami</span>
          </h1>
          <p className="text-gray-200 text-lg max-w-2xl mx-auto mt-5 leading-relaxed">
            Tim kami siap membantu Anda. Silakan hubungi kami untuk pertanyaan,
            dukungan, atau konsultasi.
          </p>
        </motion.div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          
          {/* LEFT - FAQ */}
          <motion.div
            variants={FadeUp(0.4)}
            initial="initial"
            animate="animate"
            className="
              backdrop-blur-xl bg-white/20 border border-white/30
              p-8 rounded-3xl shadow-[0_8px_30px_rgba(0,0,0,0.15)]
            "
          >
            <h2 className="text-2xl font-semibold text-white mb-6">FAQ</h2>

            <div className="space-y-6 text-gray-200">
              <div className="border-b border-white/20 pb-4">
                <h3 className="font-semibold text-lg text-white">
                  Apa saja produk dan layanan utama PT Firmansyah Khatulistiwa Group?
                </h3>
                <p className="mt-2 opacity-90">
                  Kami fokus pada pembiayaan syariah: Multi Guna, Haji & Umroh, serta CSR.
                </p>
              </div>

              <div className="border-b border-white/20 pb-4">
                <h3 className="font-semibold text-lg text-white">
                  Bagaimana cara mendapatkan pembiayaan?
                </h3>
                <p className="mt-2 opacity-90">
                  Daftar sebagai anggota Koperasi BPS dengan biaya Rp 200.000, lalu lengkapi dokumen pengajuan.
                </p>
              </div>

              <div className="border-b border-white/20 pb-4">
                <h3 className="font-semibold text-lg text-white">
                  Siapa saja yang bisa menjadi nasabah?
                </h3>
                <p className="mt-2 opacity-90">
                  ASN, BUMN, BUMD, perusahaan Tbk (payroll), UMKM, dan masyarakat umum.
                </p>
              </div>
            </div>
          </motion.div>

          {/* RIGHT - CONTACT + MAP */}
          <motion.div
            variants={FadeUp(0.6)}
            initial="initial"
            animate="animate"
            className="
              backdrop-blur-xl bg-white/20 border border-white/30
              p-8 rounded-3xl shadow-[0_8px_30px_rgba(0,0,0,0.15)]
            "
          >
            <h2 className="text-2xl font-semibold text-white mb-6">
              Informasi Kontak
            </h2>

            <div className="space-y-3 text-gray-100">
              <p>📍 Jl. Panglima Aim No. 74, Dalam Bugis, Pontianak Timur</p>
              <p>📞 +6285195522202</p>
              <p>✉️ ptfirmansyahkhatulistiwagroup@gmail.com</p>
            </div>

            <div
              className="
                w-full h-[300px] mt-6 rounded-2xl overflow-hidden
                border border-white/30 shadow-[0_5px_20px_rgba(0,0,0,0.15)]
              "
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.817657976045!2d109.35986117483463!3d-0.033014935540104116!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e1d59002f4751e9%3A0xebc19c21d84d371d!2sWGS%20(Win%20Global%20Solusitama)%20Kalbar!5e0!3m2!1sid!2sid!4v1764578642996!5m2!1sid!2sid"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </motion.div>
        </div>
      </div>

      <Footer />
    </section>
  );
};

export default Page4;
