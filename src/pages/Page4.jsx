import React, { useState } from "react";
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
      damping: 15,
      duration: 0.6,
      delay,
    },
  },
});

const Page4 = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [modalStep, setModalStep] = useState(1);
  const [formData, setFormData] = useState({
    Nama: "",
    Whatsapp: "",
    Kategori: "",
    Layanan: "",
    Pesan: "",
  });

  const SCRIPT_URL =
    "https://script.google.com/macros/s/AKfycbyvU_d_kLzjigpdce5r0xpaYh5slnjYyje_DzDypi29-JoAYv5dA18hvVzlEittGT3t_Q/exec";

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleNextStep = () => {
    if (!formData.Nama || !formData.Whatsapp || !formData.Kategori || !formData.Layanan) {
      alert("Harap lengkapi semua data diri terlebih dahulu.");
      return;
    }
    setModalStep(2);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.Pesan) {
      alert("Harap isi pesan/keterangan.");
      return;
    }

    setIsLoading(true);

    const data = new FormData();
    Object.keys(formData).forEach((key) => {
      data.append(key, formData[key]);
    });

    fetch(SCRIPT_URL, { method: "POST", body: data })
      .then(() => {
        setIsLoading(false);
        setModalStep(3);
      })
      .catch(() => {
        alert("Terjadi kesalahan jaringan. Silakan coba lagi.");
        setIsLoading(false);
      });
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => {
      setModalStep(1);
      setFormData({ Nama: "", Whatsapp: "", Kategori: "", Layanan: "", Pesan: "" });
    }, 300);
  };

  return (
    <section className="bg-[url('/src/assets/navbar-bg.svg')] bg-cover bg-fixed bg-center min-h-screen flex flex-col text-white">
      <Navbar />

      {/* ================= HERO ================= */}
      <section className="relative min-h-[80vh] pt-32 md:pt-40 flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-transparent pointer-events-none" />
        
        <motion.div
          variants={FadeUp(0.2)}
          initial="initial"
          animate="animate"
          className="container mx-auto px-4 text-center max-w-4xl relative z-10"
        >
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight tracking-tight">
            Konsultasi & Pembiayaan
            <span className="block text-lime-400 mt-2 drop-shadow-lg">
              Syariah yang Amanah
            </span>
          </h1>

          <p className="mt-8 text-gray-200 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto font-light">
            Kami hadir untuk membantu kebutuhan usaha dan ibadah Anda dengan
            proses yang <span className="font-semibold text-white">cepat</span>, <span className="font-semibold text-white">transparan</span>, dan <span className="font-semibold text-white">sesuai prinsip syariah</span>.
          </p>

          <motion.div 
            variants={FadeUp(0.4)}
            className="flex flex-wrap justify-center gap-4 mt-10 text-sm md:text-base font-medium"
          >
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-5 py-2.5 rounded-full border border-white/10 shadow-xl">
              <span className="text-lime-300">⚡</span> Proses Cepat
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-5 py-2.5 rounded-full border border-white/10 shadow-xl">
              <span className="text-lime-300">🕌</span> Sesuai Syariah
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-5 py-2.5 rounded-full border border-white/10 shadow-xl">
              <span className="text-lime-300">📞</span> Konsultasi Gratis
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* ================= CONTENT ================= */}
      <main className="container mx-auto px-4 pb-24 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 mb-24">

          {/* FAQ */}
          <motion.div
            variants={FadeUp(0.3)}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="bg-[#cae4c3] rounded-3xl p-8 shadow-xl transition duration-300 text-gray-900"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
              <span>💡</span> Pertanyaan Umum
            </h2>

            <div className="space-y-6">
              <div className="border-b border-gray-900/10 pb-5 group">
                <h3 className="font-semibold text-xl group-hover:text-green-700 transition">
                  Produk apa saja yang tersedia?
                </h3>
                <p className="text-gray-700 mt-2 text-base leading-relaxed">
                  Pembiayaan Modal Usaha, Haji & Umroh, serta Multiguna berbasis syariah.
                </p>
              </div>

              <div className="border-b border-gray-900/10 pb-5 group">
                <h3 className="font-semibold text-xl group-hover:text-green-700 transition">
                  Apa syarat pengajuan?
                </h3>
                <p className="text-gray-700 mt-2 text-base leading-relaxed">
                  Cukup melampirkan KTP, KK, dan pendaftaran anggota koperasi (Rp 200.000).
                </p>
              </div>

              <div className="group">
                <h3 className="font-semibold text-xl group-hover:text-green-700 transition">
                  Siapa saja yang bisa mengajukan?
                </h3>
                <p className="text-gray-700 mt-2 text-base leading-relaxed">
                  ASN, karyawan swasta, pelaku UMKM, dan masyarakat umum yang memenuhi kriteria.
                </p>
              </div>
            </div>
          </motion.div>

          {/* CONTACT */}
          <motion.div
            variants={FadeUp(0.4)}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="bg-[#cae4c3] rounded-3xl p-8 flex flex-col shadow-xl text-gray-900"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <span>🏢</span> Kantor Pusat
            </h2>

            <div className="space-y-4 text-gray-700 text-base mb-8 flex-grow font-medium">
              <p className="flex items-start gap-3">
                <span className="text-green-700 text-xl">📍</span> 
                <span>Jl. Panglima Aim No. 74, Pontianak Timur, Kalimantan Barat</span>
              </p>
              <p className="flex items-center gap-3">
                <span className="text-green-700 text-xl">📞</span> 
                <span>+62 851-9552-2202</span>
              </p>
              <p className="flex items-center gap-3">
                <span className="text-green-700 text-xl">✉️</span> 
                <span className="break-all">ptfirmansyahkhatulistiwagroup@gmail.com</span>
              </p>
            </div>

            <div className="h-[250px] rounded-2xl overflow-hidden border border-gray-900/10 shadow-lg">
              <iframe
                src="https://maps.google.com/maps?q=Jl.+Panglima+Aim+No.+74,+Pontianak+Timur&t=&z=15&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full grayscale hover:grayscale-0 transition duration-500"
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
          className="relative bg-gradient-to-br from-lime-200 to-[#cae4c3] rounded-[2.5rem] p-12 md:p-16 text-center shadow-2xl overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/20 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none"></div>

          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 relative z-10">
            Mulai Langkah Nyata Anda Hari Ini
          </h2>

          <p className="text-gray-800 mt-4 max-w-2xl mx-auto font-medium text-lg relative z-10">
            Konsultasikan kebutuhan pembiayaan Anda bersama tim kami. <br/> Insyaallah prosesnya mudah, aman, dan berkah.
          </p>

          <button
            onClick={() => setIsModalOpen(true)}
            className="relative z-10 mt-10 px-10 py-4 bg-gray-900 text-lime-400 rounded-full font-bold text-lg hover:bg-black hover:scale-105 active:scale-95 transition-all shadow-[0_10px_30px_rgba(0,0,0,0.2)]"
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
              onClick={handleCloseModal}
              className="absolute inset-0 bg-black/70 backdrop-blur-md"
            />

            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              className="relative bg-[#1a1a1a]/95 backdrop-blur-xl border border-lime-400/30 rounded-3xl p-8 md:p-10 w-full max-w-lg shadow-2xl overflow-y-auto max-h-[90vh]"
            >
              <button 
                onClick={handleCloseModal}
                className="absolute top-5 right-5 text-gray-400 hover:text-white transition"
              >
                ✕
              </button>

              {/* ===== STEP 1: INFORMASI DASAR ===== */}
              {modalStep === 1 && (
                <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
                  <h3 className="text-2xl font-bold text-lime-400 mb-2">
                    Data Pengajuan (1/2)
                  </h3>
                  <p className="text-gray-400 text-sm mb-6">
                    Silakan isi data diri Anda untuk memulai konsultasi.
                  </p>

                  <div className="space-y-5">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-1">Nama Lengkap</label>
                      <input 
                        name="Nama" 
                        value={formData.Nama}
                        onChange={handleInputChange}
                        required 
                        placeholder="Masukkan nama lengkap Anda"
                        className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-lime-400 focus:border-transparent transition" 
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-1">Nomor WhatsApp</label>
                      <input 
                        name="Whatsapp" 
                        type="tel"
                        value={formData.Whatsapp}
                        onChange={handleInputChange}
                        required 
                        placeholder="Contoh: 081234567890"
                        className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-lime-400 focus:border-transparent transition" 
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-1">Kategori</label>
                        <select 
                          name="Kategori" 
                          value={formData.Kategori}
                          onChange={handleInputChange}
                          required 
                          className={`w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-lime-400 focus:border-transparent transition appearance-none ${!formData.Kategori ? "text-gray-500" : ""}`}
                        >
                          <option value="" disabled className="text-gray-500">Pilih Kategori</option>
                          <option value="Pembiayaan" className="bg-[#1a1a1a] text-white">Pembiayaan</option>
                          <option value="Konsultasi" className="bg-[#1a1a1a] text-white">Konsultasi</option>
                          <option value="Lainnya" className="bg-[#1a1a1a] text-white">Lainnya</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-1">Layanan</label>
                        <select 
                          name="Layanan" 
                          value={formData.Layanan}
                          onChange={handleInputChange}
                          required 
                          className={`w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-lime-400 focus:border-transparent transition appearance-none ${!formData.Layanan ? "text-gray-500" : ""}`}
                        >
                          <option value="" disabled className="text-gray-500">Pilih Layanan</option>
                          <option value="Modal Usaha" className="bg-[#1a1a1a] text-white">Modal Usaha</option>
                          <option value="Haji & Umroh" className="bg-[#1a1a1a] text-white">Haji & Umroh</option>
                          <option value="Multiguna" className="bg-[#1a1a1a] text-white">Multiguna</option>
                          <option value="Lainnya" className="bg-[#1a1a1a] text-white">Lainnya</option>
                        </select>
                      </div>
                    </div>

                    <button
                      onClick={handleNextStep}
                      className="w-full bg-lime-400 hover:bg-lime-500 text-black font-extrabold py-4 rounded-xl mt-4 transition-all"
                    >
                      Lanjut
                    </button>
                  </div>
                </motion.div>
              )}

              {/* ===== STEP 2: PESAN & SUBMIT ===== */}
              {modalStep === 2 && (
                <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
                  <h3 className="text-2xl font-bold text-lime-400 mb-2">
                    Detail Kebutuhan (2/2)
                  </h3>
                  <p className="text-gray-400 text-sm mb-6">
                    Beritahu kami lebih lanjut tentang kebutuhan Anda.
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-1">Pesan / Keterangan</label>
                      <textarea 
                        name="Pesan" 
                        value={formData.Pesan}
                        onChange={handleInputChange}
                        required 
                        rows="4"
                        placeholder="Ceritakan singkat kebutuhan Anda..."
                        className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-lime-400 focus:border-transparent transition resize-none" 
                      ></textarea>
                    </div>

                    <div className="flex gap-3 mt-4">
                      <button
                        type="button"
                        onClick={() => setModalStep(1)}
                        className="w-1/3 bg-transparent border border-white/20 text-white hover:bg-white/10 font-bold py-4 rounded-xl transition-all"
                      >
                        Kembali
                      </button>
                      <button
                        type="submit"
                        disabled={isLoading}
                        className="w-2/3 bg-lime-400 hover:bg-lime-500 text-black font-extrabold py-4 rounded-xl transition-all disabled:opacity-70 disabled:cursor-not-allowed"
                      >
                        {isLoading ? "Mengirim..." : "Kirim Pengajuan"}
                      </button>
                    </div>
                  </form>
                </motion.div>
              )}

              {/* ===== STEP 3: SUCCESS & DOWNLOAD ===== */}
              {modalStep === 3 && (
                <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center">
                  <div className="w-16 h-16 bg-lime-400/20 text-lime-400 rounded-full flex items-center justify-center text-3xl mx-auto mb-4">
                    ✓
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    Data Berhasil Terkirim!
                  </h3>
                  
                  <div className="bg-white/5 border border-white/10 rounded-xl p-5 mt-6 text-left">
                    <p className="text-lime-300 font-semibold mb-3">Tata Cara Selanjutnya:</p>
                    <ol className="list-decimal list-inside space-y-2 text-sm text-gray-300">
                      <li><span className="text-white">Unduh Formulir</span> melalui tombol di bawah.</li>
                      <li><span className="text-white">Isi formulir</span> tersebut dengan lengkap, kemudian lakukan <span className="text-white">scan</span>.</li>
                      <li>Kirimkan file scan ke email: <br/><span className="text-lime-300 font-medium mt-1 inline-block">ptfirmansyahkhatulistiwagroup@gmail.com</span></li>
                    </ol>
                  </div>

                  <div className="flex flex-col gap-3 mt-8">
                    <a 
                      href="https://drive.google.com/uc?export=download&id=16RxdGNe-UJM61D2cU85NcsZtc38FOtCc" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-lime-400 hover:bg-lime-500 text-black font-extrabold py-4 rounded-xl transition-all text-center flex items-center justify-center gap-2"
                    >
                      <span className="text-xl">📥</span> Download Formulir
                    </a>
                    
                    <button
                      onClick={handleCloseModal}
                      className="w-full bg-transparent border border-white/20 text-white hover:bg-white/10 font-bold py-4 rounded-xl transition-all"
                    >
                      Tutup
                    </button>
                  </div>
                </motion.div>
              )}

            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Page4;