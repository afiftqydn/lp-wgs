import Navbar from "../components/Navbar/Navbar";
import { motion } from "framer-motion";
import Footer from "../components/Footer/Footer";
import React from "react";
import { FaWhatsapp } from "react-icons/fa";

export const FadeUp = (delay) => {
  return {
    initial: { opacity: 0, y: 50 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, duration: 0.5, delay, ease: "easeInOut" },
    },
  };
};

const Page4 = () => {
  return (
    <section className="bg-[url('/src/assets/navbar-bg.svg')] bg-repeat bg-cover overflow-hidden relative flex flex-col min-h-screen">
      <Navbar />

      {/* Konten utama */}
      <div className="flex-grow">
        <div className="container min-h-[650px] py-10 md:py-20">
          {/* Judul */}
          <motion.div
            variants={FadeUp(0.6)}
            initial="initial"
            animate="animate"
            className="text-center space-y-4 mb-10"
          >
            <h1 className="text-white text-3xl lg:text-5xl font-bold !leading-snug">
              Hubungi <span className="text-white">Kami</span>
            </h1>
            <p className="text-lg text-gray-300 max-w-xl mx-auto">
              Tim kami siap membantu. Silakan hubungi kami untuk pertanyaan,
              dukungan, atau konsultasi.
            </p>
          </motion.div>

          {/* Grid utama */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
            
            {/* Kiri: FAQ + CTA */}
            <div className="space-y-8">
              {/* FAQ */}
              <motion.div
                variants={FadeUp(0.8)}
                initial="initial"
                animate="animate"
                className="bg-[#cae2bf] p-6 rounded-lg shadow-lg"
              >
                <h2 className="text-2xl font-semibold mb-4">FAQ (Pertanyaan yang Sering Diajukan)</h2>
                <div className="space-y-4">
                  <div className="border-b pb-2">
                    <h3 className="font-bold text-lg">Apa saja produk dan layanan utama dari PT WGS?</h3>
                    <p className="text-gray-600 mt-1">
                      Fokus utama kami adalah pembiayaan syariah: Pembiayaan Multi Guna, Haji & Umroh, serta program CSR.
                    </p>
                  </div>
                  <div className="border-b pb-2">
                    <h3 className="font-bold text-lg">Bagaimana cara mendapatkan pembiayaan dari WGS?</h3>
                    <p className="text-gray-600 mt-1">
                      Daftar sebagai anggota Koperasi BPS dengan biaya Rp 200.000, lalu lengkapi persyaratan pengajuan.
                    </p>
                  </div>
                  <div className="border-b pb-2">
                    <h3 className="font-bold text-lg">Siapa saja yang bisa menjadi nasabah WGS?</h3>
                    <p className="text-gray-600 mt-1">
                      Kami melayani ASN, BUMN, BUMD, perusahaan Tbk (payroll), UMKM, dan masyarakat umum.
                    </p>
                  </div>
                </div>
              </motion.div>

            </div>

            {/* Kanan: Kontak + Map */}
            <motion.div
              variants={FadeUp(1.2)}
              initial="initial"
              animate="animate"
              className="bg-[#cae2bf] p-6 rounded-lg shadow-lg"
            >
              <h2 className="text-2xl font-semibold mb-4">Informasi Kontak</h2>
              <div className="space-y-4">
                <p className="text-gray-700">
                  📍 Jl. Panglima Aim No. 74, Dalam Bugis, Pontianak Timur, Kalimantan Barat
                </p>
                <p className="text-gray-700">📞 +6285195522202</p>
                <p className="text-gray-700">✉️ wgskalbar@gmail.com</p>
              </div>
              {/* Peta */}
              <div className="w-full h-[300px] mt-6 rounded-md overflow-hidden shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.816654955139!2d109.3444453!3d-0.0384813!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e0840b2a7593c6f%3A0xf626b01428a2a86c!2sJl.%20Panglima%20Aim%20No.74%2C%20Dalam%20Bugis%2C%20Kec.%20Pontianak%20Tim.%2C%20Kota%20Pontianak%2C%20Kalimantan%20Barat!5e0!3m2!1sid!2sid!4v1699946465432!5m2!1sid!2sid"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <Footer />
    </section>
  );
};

export default Page4;
