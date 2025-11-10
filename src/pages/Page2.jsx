import { useState, useEffect } from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation } from 'react-router-dom';

// Import data terpusat
import { subsidiariesData } from "../data/subsidiariesData";

// Menggunakan data yang diimpor
const subsidiaries = subsidiariesData;

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

// Daftar gambar untuk slideshow
const slideshowImages = [
  "/slideshow/gmbr1.jpg",
  "/slideshow/gmbr2.jpg",
  "/slideshow/gmbr4.jpg",
  "/slideshow/gmbr5.jpg",
  "/slideshow/gmbr6.jpg",
];

const Page2 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const location = useLocation();
  const [activeSubsidiary, setActiveSubsidiary] = useState(null);

  // ... (semua logic state dan handler tetap sama) ...
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slideshowImages.length);
    }, 4000); 

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (location.hash) {
      const idFromHash = location.hash.substring(1);
      const foundSubsidiary = subsidiaries.find(sub => sub.id === idFromHash);
      
      if (foundSubsidiary) {
        setActiveSubsidiary(foundSubsidiary);
        setTimeout(() => {
          const element = document.getElementById("subsidiary-details-wrapper");
          if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' }); 
          }
        }, 100); 
      }
    }
  }, [location.hash]);

  const handleCardClick = (subsidiary) => {
    setActiveSubsidiary(subsidiary);
    setTimeout(() => {
      const element = document.getElementById("subsidiary-details-wrapper");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  const renderSubsidiaryDetail = () => {
    const detail = activeSubsidiary;
    if (!detail) {
      return null;
    }
    return (
      <motion.div
        key={detail.id}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col md:flex-row items-center md:items-start gap-8"
      >
        <div className="w-full md:w-1/3">
          <img src={detail.logo} alt={detail.name} className="w-full h-auto rounded-lg shadow-md" />
        </div>
        <div className="w-full md:w-2/3">
          <h2 className="text-3xl font-bold mb-4 text-center md:text-left text-primary">{detail.name}</h2>
          <p className="text-gray-700 mb-6 text-center md:text-left">{detail.description}</p>
          {detail.items && (
            <ul className="list-disc list-inside space-y-2 text-gray-700 mx-auto md:mx-0">
              {detail.items.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          )}
        </div>
      </motion.div>
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slideshowImages.length) % slideshowImages.length);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slideshowImages.length);
  };


  return (
    <section className="bg-[url('/src/assets/navbar-bg.svg')] bg-repeat bg-cover overflow-hidden relative flex flex-col min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <div className="relative w-full h-[80vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        {/* ... (elemen slideshow tetap sama) ... */}
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
              className="w-full h-full object-cover absolute top-0 left-0 filter brightness-[.4] transition-all duration-1000" 
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            />
          </AnimatePresence>
          <div className="absolute inset-0 bg-black/20"></div>
        </motion.div>
        
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

          {/* ===== NARASI DI SINI DIUBAH KEMBALI ===== */}
          <motion.p
            variants={FadeUp(0.6)}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="text-lg md:text-xl text-gray-200 font-light max-w-3xl mx-auto leading-relaxed drop-shadow-md"
          >
            PT. Win Global Solusitama berkomitmen menciptakan pertumbuhan yang berkelanjutan dan memberikan kontribusi nyata bagi kesejahteraan umat melalui sinergi ekonomi kerakyatan berbasis syariah.
          </motion.p>
        </div>
        {/* ... (tombol slideshow tetap sama) ... */}
        <button onClick={handlePrev} className="absolute top-1/2 left-6 z-20 -translate-y-1/2 bg-white/30 p-3 rounded-full shadow-lg hover:bg-white/50 transition duration-300 hover:scale-110 hidden md:block" aria-label="Previous slide">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button onClick={handleNext} className="absolute top-1/2 right-6 z-20 -translate-y-1/2 bg-white/30 p-3 rounded-full shadow-lg hover:bg-white/50 transition duration-300 hover:scale-110 hidden md:block" aria-label="Next slide">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-20">
          {slideshowImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ring-2 ring-white ${currentIndex === index ? "bg-secondary scale-125" : "bg-white/50 hover:bg-white"}`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
      
      {/* Main Content Area */}
      <div className=" flex-grow">
        <div className="container py-16 bg-[url('/src/assets/navbar-bg.svg')] bg-repeat bg-cover">
          
          {/* Selayang Pandang Section */}
          <div className="bg-[#cae2bf] container py-16 rounded-3xl shadow-md">
            <div className="container mx-auto px-6">
              <motion.h2 variants={FadeUp(0.1)} initial="initial" whileInView="whileInView" viewport={{ once: true }} className="text-3xl font-bold text-gray-800 mb-6 text-center">
                Selayang Pandang
              </motion.h2>

              {/* ===== NARASI DI SINI DIUBAH KEMBALI ===== */}
              <motion.p variants={FadeUp(0.2)} initial="initial" whileInView="whileInView" viewport={{ once: true }} className="text-gray-800 max-w-2xl mx-auto text-l text-justify">
                PT Win Global Solusitama (WGS) merupakan perusahaan dari Kalimantan Barat yang bergerak di bidang pembiayaan syariah, solusi keuangan, serta pengembangan program kemanusiaan dan keumatan. Fokus utamanya adalah mendorong pemberdayaan ekonomi dan sosial melalui layanan keuangan inklusif. WGS menawarkan pembiayaan untuk berbagai kebutuhan, termasuk umroh, haji, UMKM, perumahan, pertanian, dan pendidikan, serta memiliki tujuan sosial dengan menyalurkan sebagian besar keuntungan untuk program seperti santunan anak yatim dan program kemanusiaan lainnya.
              </motion.p>
            </div>
          </div>
          <div className="h-8"></div>

          {/* Ekosistem Bisnis Section */}
          <div id="sub-holding" className="container py-16 bg-[#cce6c4] rounded-3xl shadow-md">
            <div className="container mx-auto px-6 text-center">
              <motion.h2 variants={FadeUp(0.1)} initial="initial" whileInView="whileInView" viewport={{ once: true }} className="text-3xl font-bold text-gray-800 mb-4">
                Ekosistem Bisnis <span className="text-secondary">Kami</span>
              </motion.h2>

              {/* ===== NARASI DI SINI DIUBAH KEMBALI ===== */}
              <motion.p variants={FadeUp(0.2)} initial="initial" whileInView="whileInView" viewport={{ once: true }} className="text-gray-600 max-w-2xl mx-auto mb-10">
                Melalui sinergi anak perusahaan dan kemitraan strategis, PT. Win Global Solusitama (WGS) menghadirkan solusi terintegrasi di berbagai sektor — mulai dari keuangan, pertanian, hingga industri kreatif — untuk membangun ekonomi kerakyatan yang kuat dan mandiri.
              </motion.p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
                {subsidiaries.map((sub, index) => (
                  <motion.div
                    key={sub.name}
                    variants={FadeUp(0.3 + index * 0.1)}
                    initial="initial"
                    whileInView="whileInView"
                    viewport={{ once: true }}
                    onClick={() => handleCardClick(sub)}
                    className="group bg-[#e1f2d8] p-6 rounded-xl border border-transparent transition-all duration-300 hover:border-secondary hover:shadow-lg hover:-translate-y-2 cursor-pointer select-none"
                  >
                    <img src={sub.logo} alt={`Logo ${sub.name}`} className="w-28 h-28 lg:w-32 lg:h-32 object-contain mx-auto mb-6 transition-transform duration-300 group-hover:scale-110" />
                    <h3 className="font-bold text-gray-800 text-lg">{sub.name}</h3>
                    <p className="text-sm text-gray-500">{sub.tagline}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
          <div className="h-8"></div>

          {/* ... (Bagian detail dan legalitas tidak perlu diubah) ... */}
          {activeSubsidiary && (
            <div id="subsidiary-details-wrapper" className="container py-16 bg-[#cae2bf] rounded-3xl shadow-md">
              <div className="container mx-auto px-6">
                <AnimatePresence>
                  {renderSubsidiaryDetail()}
                </AnimatePresence>
              </div>
            </div>
          )}
        </div>
        
        <div className="py-16">
          <div className="container mx-auto px-6">
            <motion.h2 variants={FadeUp(0.1)} initial="initial" whileInView="whileInView" viewport={{ once: true }} className="text-3xl font-bold text-center text-white mb-10">
              Legalitas & Data <span className="text-white">Perusahaan</span>
            </motion.h2>
            <div className="max-w-3xl mx-auto">
              <motion.div variants={FadeUp(0.2)} initial="initial" whileInView="whileInView" viewport={{ once: true }} className="space-y-6 text-gray-100 leading-relaxed">
                <p>
                  PT Win Global Solusitama resmi berdiri berdasarkan Akta Notaris dan telah disahkan oleh Kementerian Hukum & HAM Republik Indonesia. Dengan legalitas yang lengkap, kami berkomitmen untuk menjalankan usaha sesuai dengan peraturan yang berlaku.
                </p>
                <div className="bg-[#e1f2d8] p-6 rounded-2xl shadow-md border border-gray-200">
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
      </div>
      
      <Footer />
    </section>
  );
};

export default Page2;