import { useState, useEffect } from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { motion, AnimatePresence } from "framer-motion";

// Fungsi utilitas FadeUp
export const FadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 90,
      duration: 0.8,
      delay,
      ease: "easeInOut",
    },
  },
  viewport: { once: true },
});

const subsidiaries = [
  { name: "PT. Palm Nusa Khatulistiwa", tagline: "Industri, Grosir dan Retail", logo: "/pnk.png" },
  { name: "PT. Agrikultur Global Khatulistiwa", tagline: "Pertanian, Perkebunan, Peternakan", logo: "/agri_logo.png" },
  { name: "PT. Alfarizi Media Nusantara", tagline: "Industri Kreatif & Hiburan", logo: "/entertaint.png" },
  { name: "KSPS Bhumi Pasundan Sejahtera", tagline: "Koperasi Simpan Pinjam Syariah", logo: "/koperasi.png" },
];

const slideshowImages = [
  "/slideshow/gmbr1.jpg",
  "/slideshow/gmbr2.jpg",
  "/slideshow/gmbr4.jpg",
  "/slideshow/gmbr5.jpg",
  "/slideshow/gmbr6.jpg",
];

const Page2 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Logic Slideshow
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slideshowImages.length);
    }, 4000); // Diperpanjang jadi 4 detik

    return () => clearInterval(interval);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      (prevIndex - 1 + slideshowImages.length) % slideshowImages.length
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slideshowImages.length);
  };

  return (
    <section className="overflow-hidden relative bg-[url('/src/assets/navbar-bg.svg')] bg-repeat bg-cover">
      <Navbar />

      {/* Hero Section BARU - CENTERED, FULL BACKGROUND SLIDESHOW */}
      <div className="relative w-full h-[80vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        
        {/* 1. Background Slideshow Penuh */}
        <motion.div
          className="absolute inset-0 w-full h-full"
          variants={FadeUp(0)}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
        >
          <AnimatePresence>
            <motion.img
              key={slideshowImages[currentIndex]}
              src={slideshowImages[currentIndex]}
              alt="Tim WGS Bekerja"
              // Gambar full cover, gelap, dan transisi
              className="w-full h-full object-cover absolute top-0 left-0 filter brightness-[.4] transition-all duration-1000" 
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            />
          </AnimatePresence>
          
          {/* Overlay (opsional, tapi disarankan) */}
          <div className="absolute inset-0 bg-black/20"></div>
        </motion.div>

        {/* 2. Konten Teks di Tengah (Center Horizontal & Vertical) */}
        <div className="relative z-10 text-center container mx-auto px-6 max-w-4xl">
          <motion.h1
            variants={FadeUp(0.3)}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl lg:text-7xl font-extrabold mb-4 text-white drop-shadow-lg"
          >
            Membangun Ekosistem, Memberdayakan{" "}
            <span className="text-gray-300">Masyarakat</span>
          </motion.h1>
          <motion.p
            variants={FadeUp(0.6)}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="text-lg md:text-xl text-gray-200 font-light max-w-3xl mx-auto leading-relaxed drop-shadow-md"
          >
            PT Win Global Solusitama berkomitmen menciptakan pertumbuhan yang berkelanjutan dan memberikan kontribusi nyata bagi kesejahteraan umat melalui sinergi ekonomi kerakyatan berbasis syariah.
          </motion.p>
        </div>

        {/* 3. Tombol Navigasi dan Indikator */}
        <button
          onClick={handlePrev}
          className="absolute top-1/2 left-6 z-20 -translate-y-1/2 bg-white/30 p-3 rounded-full shadow-lg hover:bg-white/50 transition duration-300 hover:scale-110 hidden md:block"
          aria-label="Previous slide"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        
        <button
          onClick={handleNext}
          className="absolute top-1/2 right-6 z-20 -translate-y-1/2 bg-white/30 p-3 rounded-full shadow-lg hover:bg-white/50 transition duration-300 hover:scale-110 hidden md:block"
          aria-label="Next slide"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-20">
          {slideshowImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ring-2 ring-white ${
                currentIndex === index
                  ? "bg-secondary scale-125"
                  : "bg-white/50 hover:bg-white"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
      {/* Akhir Hero Section BARU */}

      {/* Section Anak Perusahaan (Tidak Berubah) */}
      <div className="py-16 bg-[#cce6c4]">
        <div className="container mx-auto px-6 text-center">
          <motion.h2
            variants={FadeUp(0.1)}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="text-3xl font-bold text-gray-800 mb-4"
          >
            Ekosistem Bisnis <span className="text-secondary">Kami</span>
          </motion.h2>
          <motion.p
            variants={FadeUp(0.2)}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="text-gray-600 max-w-2xl mx-auto mb-10"
          >
            Melalui sinergi anak perusahaan, WGS menghadirkan solusi terintegrasi di berbagai sektor — mulai dari keuangan, pertanian, hingga industri kreatif — untuk membangun ekonomi kerakyatan yang kuat dan mandiri.
          </motion.p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {subsidiaries.map((sub, index) => (
              <motion.div
                key={sub.name}
                variants={FadeUp(0.3 + index * 0.1)}
                initial="initial"
                whileInView="whileInView"
                viewport={{ once: true }}
                className="group bg-[#e1f2d8] p-6 rounded-xl border border-transparent transition-all duration-300 hover:border-secondary hover:shadow-lg hover:-translate-y-2"
              >
                <img
                  src={sub.logo}
                  alt={`Logo ${sub.name}`}
                  className="w-28 h-28 lg:w-32 lg:h-32 object-contain mx-auto mb-6 transition-transform duration-300 group-hover:scale-110"
                />
                <h3 className="font-bold text-gray-800 text-lg">{sub.name}</h3>
                <p className="text-sm text-gray-500">{sub.tagline}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

        {/* SECTION LEGALITAS & DATA PERUSAHAAN (Tidak Berubah) */}
        <div className="py-16">
          <div className="container mx-auto px-6">
            <motion.h2
              variants={FadeUp(0.1)}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
              className="text-3xl font-bold text-center text-white mb-10"
            >
              Legalitas & Data <span className="text-white">Perusahaan</span>
            </motion.h2>
            <div className="max-w-3xl mx-auto">
              <motion.div
                variants={FadeUp(0.2)}
                initial="initial"
                whileInView="whileInView"
                viewport={{ once: true }}
                className="space-y-6 text-gray-100 leading-relaxed"
              >
                <p>
                  PT Win Global Solusitama resmi berdiri berdasarkan Akta Notaris dan telah disahkan oleh Kementerian Hukum & HAM Republik Indonesia. Dengan legalitas yang lengkap, kami berkomitmen untuk menjalankan usaha sesuai dengan peraturan yang berlaku.
                </p>
                <div className="bg-[#e1f2d8] p-6 rounded-lg shadow-md border border-gray-200">
                  <h3 className="font-bold text-xl mb-3 text-gray-800 text-center py-2">Informasi Resmi Perusahaan</h3>
                  <ul className="text-gray-800 space-y-2">
                    <li className="flex justify-between items-center border-b pb-2">
                      <span className="font-semibold">Nama Perusahaan</span>
                      <span>PT Win Global Solusitama</span>
                    </li>
                    <li className="flex justify-between items-center border-b pb-2">
                      <span className="font-semibold">Akta Pendirian</span>
                      <span>Akta No. 9, 07 Februari 2023 oleh Notaris Jihan Khoirini, S.H., M.Kn.</span>
                    </li>
                    <li className="flex justify-between items-center border-b pb-2">
                      <span className="font-semibold">SK Kemenkumham</span>
                      <span>Nomor AHU-0010292.AH.01.01.Tahun 2023 (08 Februari 2023)</span>
                    </li>
                    <li className="flex justify-between items-center border-b pb-2">
                      <span className="font-semibold">Nomor Induk Berusaha (NIB)</span>
                      <span>2111220112493</span>
                    </li>
                    <li className="flex justify-between items-center border-b pb-2">
                      <span className="font-semibold">NPWP</span>
                      <span>61.815.042.9-017.000</span>
                    </li>
                  </ul>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
        {/* Akhir SECTION BARU */}

      <Footer />
    </section>
  );
};

export default Page2;