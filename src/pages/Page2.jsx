import { useState, useEffect } from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { motion, AnimatePresence } from "framer-motion";

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
  { name: "PT. WGS Entertainment", tagline: "Industri Kreatif & Hiburan", logo: "/entertaint.png" },
  { name: "KSPS Bhumi Pasundan Sejahtera", tagline: "Koperasi Simpan Pinjam Syariah", logo: "/koperasi.png" },
];

const coreValues = [
  { name: "Cepat", description: "Responsif dalam memberikan solusi dan layanan." },
  { name: "Efektif", description: "Menghasilkan dampak maksimal dengan sumber daya yang ada." },
  { name: "Ramah", description: "Mengutamakan pelayanan yang tulus dan bersahabat." },
  { name: "Ikhlas", description: "Bekerja dengan niat tulus untuk kemaslahatan bersama." },
  { name: "Amanah", description: "Menjaga kepercayaan sebagai pilar utama dalam setiap tindakan." },
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

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slideshowImages.length);
    }, 3000);

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

      {/* Hero Section - Tentang Kami */}
      <div className="container mx-auto px-6 pt-24 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <motion.h1
              variants={FadeUp(0.1)}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
              className="text-4xl lg:text-5xl font-bold mb-6 text-white"
            >
              Membangun Ekosistem, Memberdayakan{" "}
              <span className="text-white">Masyarakat</span>
            </motion.h1>
            <motion.p
              variants={FadeUp(0.2)}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
              className="text-gray-200 leading-relaxed"
            >
              PT <strong>Win Global Solusitama (WGS)</strong> adalah holding
              company yang berfokus pada pengembangan ekonomi kerakyatan
              berbasis syariah. Melalui sinergi beragam lini usaha, kami
              berkomitmen untuk menciptakan pertumbuhan yang berkelanjutan dan
              memberikan kontribusi nyata bagi kesejahteraan umat.
            </motion.p>
          </div>

          <motion.div
            className="order-1 md:order-2 relative w-full aspect-video md:aspect-[4/3] rounded-2xl overflow-hidden shadow-lg"
            variants={FadeUp(0.3)}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
          >
            <AnimatePresence>
              <motion.img
                key={slideshowImages[currentIndex]}
                src={slideshowImages[currentIndex]}
                alt="Tim WGS Bekerja"
                className="w-full h-full object-cover absolute top-0 left-0 rounded-2xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1, ease: "easeInOut" }}
              />
            </AnimatePresence>

            <button
              onClick={handlePrev}
              className="absolute top-1/2 left-3 z-10 -translate-y-1/2 bg-white/50 p-2 rounded-full shadow-md hover:bg-white/80 transition-transform duration-300 hover:scale-110"
              aria-label="Previous slide"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={handleNext}
              className="absolute top-1/2 right-3 z-10 -translate-y-1/2 bg-white/50 p-2 rounded-full shadow-md hover:bg-white/80 transition-transform duration-300 hover:scale-110"
              aria-label="Next slide"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {slideshowImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentIndex === index
                      ? "bg-secondary scale-125"
                      : "bg-gray-300 hover:bg-gray-400"
                  }`}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Section Anak Perusahaan */}
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

        {/* SECTION BARU: LEGALITAS & DATA PERUSAHAAN */}
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
                    {/* <li className="flex justify-between items-center border-b pb-2">
                      <span className="font-semibold">Modal Dasar & Disetor</span>
                      <span>Rp 1.000.000.000 (10.000 lembar saham)</span>
                    </li> */}
                    {/* <li className="flex justify-between items-center border-b pb-2">
                      <span className="font-semibold">Alamat Kantor</span>
                      <span>Nifarro Park, ITS Tower Lt. 6 Unit 10, Jl. Raya Pasar Minggu No.18, Pejaten Timur, Pasar Minggu, Jakarta Selatan, 12510</span>
                    </li> */}
                    {/* <li className="flex justify-between items-center border-b pb-2">
                      <span className="font-semibold">Direksi</span>
                      <span>H. Hendra Firmansyah</span>
                    </li>
                    <li className="flex justify-between items-center border-b pb-2">
                      <span className="font-semibold">Komisaris Utama</span>
                      <span>Mohammad Rusfi</span>
                    </li>
                    <li className="flex justify-between items-center">
                      <span className="font-semibold">Komisaris</span>
                      <span>Ponco Heru Sutanto</span>
                    </li> */}
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