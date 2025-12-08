import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

// Animasi Fade Up
export const FadeUp = (delay) => ({
  initial: { opacity: 0, y: 40 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 70, duration: 0.6, delay },
  },
});

const Page4 = () => {
  // --- STATE MANAGEMENT ---
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const formRef = useRef(null);

  // --- KONFIGURASI SPREADSHEET ---
  // GANTI URL DI BAWAH INI DENGAN URL DEPLOYMENT APP SCRIPT KAMU
  const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbyvU_d_kLzjigpdce5r0xpaYh5slnjYyje_DzDypi29-JoAYv5dA18hvVzlEittGT3t_Q/exec";

  // --- HANDLE SUBMIT FORM ---
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    const form = formRef.current;
    const data = new FormData(form);

    fetch(SCRIPT_URL, {
      method: "POST",
      body: data,
    })
      .then((res) => {
        // Reset form & tutup modal
        alert("Berhasil! Data pendaftaran Anda telah kami terima.");
        if(form) form.reset();
        setIsModalOpen(false);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error("Error!", err.message);
        alert("Terjadi kesalahan koneksi. Silakan coba lagi nanti.");
        setIsLoading(false);
      });
  };

  return (
    <section className="bg-[url('/src/assets/navbar-bg.svg')] bg-repeat bg-cover min-h-screen flex flex-col relative">
      <Navbar />

      <div className="flex-grow container py-16 md:py-24">
        
        {/* === HERO SECTION === */}
        <motion.div
          variants={FadeUp(0.2)}
          initial="initial"
          animate="animate"
          className="text-center mb-16"
        >
          <h1 className="text-white text-4xl md:text-6xl font-bold drop-shadow-lg">
            Hubungi <span className="text-lime-300">Kami</span>
          </h1>
          <p className="text-gray-200 text-lg max-w-2xl mx-auto mt-5 leading-relaxed">
            Tim kami siap membantu Anda. Silakan hubungi kami untuk pertanyaan,
            dukungan, atau konsultasi mengenai pembiayaan syariah.
          </p>
        </motion.div>

        {/* === GRID INFO (FAQ & CONTACT) === */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
          
          {/* LEFT - FAQ */}
          <motion.div
            variants={FadeUp(0.4)}
            initial="initial"
            animate="animate"
            className="backdrop-blur-xl bg-white/10 border border-white/20 p-8 rounded-3xl shadow-lg"
          >
            <h2 className="text-2xl font-semibold text-lime-300 mb-6">FAQ</h2>
            <div className="space-y-6 text-gray-200">
              <div className="border-b border-white/20 pb-4">
                <h3 className="font-semibold text-lg text-white">
                  Apa saja produk unggulan kami?
                </h3>
                <p className="mt-2 text-sm opacity-80">
                  Kami fokus pada pembiayaan syariah: Modal Usaha, Haji & Umroh, serta Multiguna.
                </p>
              </div>
              <div className="border-b border-white/20 pb-4">
                <h3 className="font-semibold text-lg text-white">
                  Bagaimana syarat pengajuannya?
                </h3>
                <p className="mt-2 text-sm opacity-80">
                  Cukup KTP, KK, dan mendaftar sebagai anggota Koperasi BPS (Biaya Rp 200.000).
                </p>
              </div>
              <div className="border-b border-white/20 pb-4">
                <h3 className="font-semibold text-lg text-white">
                  Siapa saja target nasabah kami?
                </h3>
                <p className="mt-2 text-sm opacity-80">
                  ASN, BUMN, karyawan swasta (payroll), pelaku UMKM, dan masyarakat umum.
                </p>
              </div>
            </div>
          </motion.div>

          {/* RIGHT - CONTACT + MAP */}
          <motion.div
            variants={FadeUp(0.6)}
            initial="initial"
            animate="animate"
            className="backdrop-blur-xl bg-white/10 border border-white/20 p-8 rounded-3xl shadow-lg"
          >
            <h2 className="text-2xl font-semibold text-lime-300 mb-6">
              Kantor Pusat
            </h2>
            <div className="space-y-4 text-gray-100 mb-6">
              <p className="flex items-start gap-3">
                <span className="text-xl">📍</span> 
                <span>Jl. Panglima Aim No. 74, Dalam Bugis, Pontianak Timur, Kalimantan Barat</span>
              </p>
              <p className="flex items-center gap-3">
                <span className="text-xl">📞</span> 
                <span>+62 851-9552-2202</span>
              </p>
              <p className="flex items-center gap-3">
                <span className="text-xl">✉️</span> 
                <span>ptfirmansyahkhatulistiwagroup@gmail.com</span>
              </p>
            </div>
            {/* Google Map Embed */}
            <div className="w-full h-[250px] rounded-2xl overflow-hidden border border-white/30 shadow-inner">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.8179516312625!2d109.3792483!3d-0.0354228!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e1d585ec080c35d%3A0x6339074092415176!2sJl.%20Panglima%20Aim%20No.74%2C%20Dalam%20Bugis%2C%20Kec.%20Pontianak%20Tim.%2C%20Kota%20Pontianak%2C%20Kalimantan%20Barat%2078232!5e0!3m2!1sid!2sid!4v1700000000000!5m2!1sid!2sid"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Lokasi Kantor"
              ></iframe>
            </div>
          </motion.div>
        </div>

        {/* === CALL TO ACTION (CTA) BARU === */}
        <motion.div
          variants={FadeUp(0.8)}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-3xl bg-[#cae4c3] p-8 md:p-12 text-center shadow-[0_0_40px_rgba(163,230,53,0.3)]"
        >
          {/* Pattern Overlay Background */}
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-5" 
          style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)',
          backgroundSize: '20px 20px' }}></div>
          
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Tertarik Mengajukan Pembiayaan?
            </h2>
            <p className="text-gray-800 text-lg mb-8 max-w-2xl mx-auto font-medium">
              Wujudkan impian usaha atau ibadah Anda bersama kami. Proses cepat, transparan, dan sesuai prinsip syariah.
            </p>
            <button
              onClick={() => setIsModalOpen(true)}
              className="px-10 py-4 bg-gray-900 text-lime-400 font-bold rounded-full text-lg shadow-xl hover:scale-105 hover:bg-black hover:shadow-2xl transition-all duration-300"
            >
              Isi Formulir Pendaftaran
            </button>
          </div>
        </motion.div>

      </div>

      <Footer />

      {/* === MODAL FORMULIR === */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-[999] flex items-center justify-center p-4">
            {/* Backdrop Gelap */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            ></motion.div>

            {/* Konten Modal */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="relative w-full max-w-lg bg-[#1a1a1a] border border-lime-300/30 rounded-2xl p-6 md:p-8 shadow-2xl overflow-y-auto max-h-[90vh]"
            >
              {/* Tombol Close */}
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-white bg-white/5 hover:bg-white/10 rounded-full w-8 h-8 flex items-center justify-center transition-colors"
              >
                ✕
              </button>

              <h3 className="text-2xl font-bold text-lime-300 mb-2">Formulir Pendaftaran</h3>
              <p className="text-gray-400 text-sm mb-6">
                Data akan tersimpan otomatis. Tim kami akan menghubungi Anda via WhatsApp.
              </p>

              <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
                
                {/* Field: Nama */}
                <div>
                  <label className="block text-gray-300 text-sm mb-1 ml-1">Nama Lengkap</label>
                  <input
                    type="text"
                    name="Nama" // Wajib sama dengan header Google Sheet
                    required
                    placeholder="Contoh: Budi Santoso"
                    className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-lime-300 focus:ring-1 focus:ring-lime-300 transition-all"
                  />
                </div>

                {/* Field: WhatsApp */}
                <div>
                  <label className="block text-gray-300 text-sm mb-1 ml-1">Nomor WhatsApp</label>
                  <input
                    type="tel"
                    name="Whatsapp" // Wajib sama dengan header Google Sheet
                    required
                    placeholder="Contoh: 08123456789"
                    className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-lime-300 focus:ring-1 focus:ring-lime-300 transition-all"
                  />
                </div>

                {/* Field: Kategori */}
                <div>
                  <label className="block text-gray-300 text-sm mb-1 ml-1">Kategori Nasabah</label>
                  <div className="relative">
                    <select 
                      name="Kategori" // Wajib sama dengan header Google Sheet
                      className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white appearance-none focus:outline-none focus:border-lime-300 transition-all cursor-pointer"
                    >
                      <option className="bg-gray-900 text-gray-300" value="Masyarakat Umum">Masyarakat Umum</option>
                      <option className="bg-gray-900 text-gray-300" value="UMKM">Pelaku UMKM</option>
                      <option className="bg-gray-900 text-gray-300" value="ASN">ASN / PNS</option>
                      <option className="bg-gray-900 text-gray-300" value="Karyawan">Karyawan Swasta</option>
                    </select>
                    {/* Icon Chevron Custom */}
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">▼</div>
                  </div>
                </div>

                {/* Field: Layanan */}
                <div>
                  <label className="block text-gray-300 text-sm mb-1 ml-1">Jenis Layanan</label>
                  <div className="relative">
                    <select 
                      name="Layanan" // Wajib sama dengan header Google Sheet
                      className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white appearance-none focus:outline-none focus:border-lime-300 transition-all cursor-pointer"
                    >
                      <option className="bg-gray-900 text-gray-300" value="Modal Usaha">Pembiayaan Modal Usaha</option>
                      <option className="bg-gray-900 text-gray-300" value="Haji Umroh">Pembiayaan Haji & Umroh</option>
                      <option className="bg-gray-900 text-gray-300" value="Multiguna">Pembiayaan Multiguna</option>
                    </select>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">▼</div>
                  </div>
                </div>

                {/* Field: Pesan */}
                <div>
                  <label className="block text-gray-300 text-sm mb-1 ml-1">Pesan Tambahan (Opsional)</label>
                  <textarea
                    name="Pesan" // Wajib sama dengan header Google Sheet
                    rows="3"
                    placeholder="Tulis pesan atau pertanyaan Anda disini..."
                    className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-lime-300 focus:ring-1 focus:ring-lime-300 transition-all resize-none"
                  ></textarea>
                </div>

                {/* Tombol Submit */}
                <button
                  type="submit"
                  disabled={isLoading}
                  className={`w-full font-bold py-3.5 rounded-lg transition-all mt-4 shadow-lg ${
                    isLoading 
                      ? "bg-gray-600 text-gray-300 cursor-not-allowed" 
                      : "bg-lime-300 text-black hover:bg-lime-400 hover:shadow-lime-300/20"
                  }`}
                >
                  {isLoading ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg className="animate-spin h-5 w-5 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Mengirim...
                    </span>
                  ) : (
                    "Kirim Data Pendaftaran"
                  )}
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