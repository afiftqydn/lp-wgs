import { useState, useEffect } from "react";
import { useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { subsidiariesData } from "../data/subsidiariesData";

// --- CONFIGURATION & UTILS ---
const subsidiaries = subsidiariesData;

// Icon SVG Components (Placeholder for checkmark icon)
const CheckSquare = ({ size = 24, className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <rect width="18" height="18" x="3" y="3" rx="2" />
    <path d="m9 12 2 2 4-4" />
  </svg>
);


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

const slideshowImages = [
  "/slideshow/kantorwgs.jpeg",
  "/slideshow/gmbr3.jpg",
  "/slideshow/gmbr13.jpg",
  "/slideshow/img01.JPG",
  "/slideshow/gmbr5.jpg",
  "/slideshow/borneo_f.jpg",
  "/slideshow/fdmedia.jpg",
];

const Page2 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const location = useLocation();
  const navigate = useNavigate();

  // 1. Logic Slideshow
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slideshowImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // 2. Logic Scroll (Handling Hash)
  useEffect(() => {
    if (location.hash === '#sub-holding') {
      const element = document.getElementById('sub-holding');
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      }
    }
  }, [location.hash]);
  

  const handleCardClick = (subsidiary) => {
    navigate(`/Subholding/${subsidiary.id}`);
  };



  return (
    // Main Wrapper
    <div className="flex flex-col bg-black min-h-screen font-sans">
      <Navbar />

      {/* =========================================
          SECTION 1: HERO SLIDESHOW
      ========================================= */}
      <section className="relative w-full h-screen min-h-[600px] flex items-center justify-center overflow-hidden bg-black">
        {/* Slideshow Background */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            className="absolute inset-0"
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          >
            <img
              src={slideshowImages[currentIndex]}
              alt="Background Slideshow"
              className="w-full h-full object-cover filter brightness-[0.4]"
            />
          </motion.div>
        </AnimatePresence>

        {/* Gradient Overlay for Readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40 z-10" />

        {/* Content Hero */}
        <div className="relative z-20 container mx-auto px-6 text-center">
          <motion.h1
            variants={FadeUp(0.3)}
            initial="initial"
            whileInView="whileInView"
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 drop-shadow-2xl"
          >
            Membangun Ekosistem, <br />
            <span className="text-[#cae2c0]">Memberdayakan Masyarakat</span>
          </motion.h1>

          <motion.p
            variants={FadeUp(0.5)}
            initial="initial"
            whileInView="whileInView"
            className="text-lg md:text-xl text-gray-200 font-light max-w-3xl mx-auto leading-relaxed"
          >
            PT. Firmansyah Khatulistiwa Group berkomitmen menciptakan pertumbuhan berkelanjutan
            dan memberikan kontribusi nyata bagi kesejahteraan umat melalui sinergi ekonomi.
          </motion.p>
        </div>

        {/* Slideshow Indicators */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-3 z-30">
          {slideshowImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                currentIndex === index ? "w-8 bg-[#cae2c0]" : "w-2 bg-white/50 hover:bg-white"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

            {/* =========================================
          SECTION 2: SELAYANG PANDANG (OVERVIEW)
      ========================================= */}
      <section className="relative bg-[#cae2c0] rounded-t-[50px] py-20 overflow-hidden">
        {/* Decorative Background Element */}
        {/* <div className="absolute top-0 right-0 w-1/3 h-full bg-[#174b1d]/80 -skew-x-12 translate-x-20 z-0 pointer-events-none" /> */}

        <div className="container mx-auto px-6 relative z-10">
          {/* Title Section */}
          <motion.div
            variants={FadeUp(0.1)}
            initial="initial"
            whileInView="whileInView"
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#174b1d] mb-4">
              Selayang Pandang
            </h2>
            <div className="w-20 h-1.5 bg-[#174b1d] mx-auto rounded-full" />
          </motion.div>

          {/* Main Grid Content */}
          {/* Gunakan items-stretch agar tinggi kolom kiri dan kanan sama (opsional, tapi terlihat lebih rapi) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
            
            {/* --- LOGO CARD (Left Column) --- */}
            <motion.div
                variants={FadeUp(0.2)}
                initial="initial"
                whileInView="whileInView"
                className="
                    lg:col-span-4 
                    h-full 
                    p-10 rounded-2xl shadow-xl border border-[#cae2c0]/60 bg-white/0 backdrop-blur-sm 
                    flex items-center justify-center
                "
                >
                <div className="absolute top-0 left-0 w-full h-2 bg-[#174b1d] rounded-t-2xl"></div>

                <img
                    src="/logo_firmans.png"
                    alt="Firmans Group Logo"
                    className="w-full max-w-[250px] object-contain drop-shadow-md hover:scale-105 transition-transform duration-500"
                />
            </motion.div>

            {/* --- TEXT CONTENT (Right Column) --- */}
            <motion.div
              variants={FadeUp(0.4)}
              initial="initial"
              whileInView="whileInView"
              className="lg:col-span-8 flex flex-col justify-center space-y-8"
            >
              <div>
                <h3 className="text-2xl font-bold text-[#174b1d] mb-4">
                  PT. Firmansyah Khatulistiwa Group
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed text-justify">
                  Kami berkomitmen menciptakan pertumbuhan yang berkelanjutan dan memberikan kontribusi nyata bagi kesejahteraan umat melalui sinergi ekonomi kerakyatan berbasis syariah. Fokus utama kami adalah mendorong pemberdayaan ekonomi dan sosial melalui layanan keuangan inklusif. Firman's group menawarkan pembiayaan untuk berbagai kebutuhan, serta memiliki tujuan sosial dengan menyalurkan sebagian besar keuntungan untuk program kemanusiaan.
                </p>
              </div>

              {/* Grid Layanan */}
              <div className="bg-[#cae2c0]/30 p-6 rounded-xl border-l-4 border-[#174b1d]">
                <h4 className="text-xl font-bold mb-4 text-[#174b1d]">
                  Fokus & Layanan Utama
                </h4>
                <ul className="text-[#174b1d] grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8">
                  {[
                    "Program Kemanusiaan & Sosial",
                    "Pengembangan bisnis dan investasi strategis",
                    "Manajemen dan sinergi antar anak perusahaan",
                    "Pengembangan bisnis regional untuk mitra strategis (Foodmedia)",
                    "Program kemanusiaan dan pemberdayaan sosial"
                  ].map((item, idx) => (
                    <li key={idx} className="text-[#174b1d] flex items-center gap-3">
                      <span className="bg-[#cae2c0] p-1 rounded-full text-[#174b1d]">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg>
                      </span>
                      <span className="font-medium text-sm md:text-base">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>



      {/* =========================================
          SECTION 3: EKOSISTEM BISNIS (Fixed Flip Card)
      ========================================= */}
      <section 
        id="sub-holding" 
        className="py-20 bg-[url('/src/assets/navbar-bg.svg')] bg-repeat bg-cover scroll-mt-20"
      >
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.h2 
              variants={FadeUp(0.1)} 
              initial="initial" 
              whileInView="whileInView" 
              className="text-3xl md:text-4xl font-extrabold text-[#ffffff] mb-6"
            >
              Ekosistem Bisnis
            </motion.h2>
            <motion.p 
              variants={FadeUp(0.2)} 
              initial="initial" 
              whileInView="whileInView" 
              className="text-gray-200 text-lg"
            >
              Melalui sinergi anak perusahaan dan kemitraan strategis, kami menghadirkan solusi terintegrasi di berbagai sektor untuk membangun ekonomi kerakyatan yang kuat.
            </motion.p>
          </div>

          {/* Grid Cards */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-4"> 
            {subsidiaries.map((sub, index) => (
                <motion.div
                    key={sub.name}
                    variants={FadeUp(0.3 + index * 0.1)}
                    initial="initial"
                    whileInView="whileInView"
                    viewport={{ once: true }}
                    onClick={() => handleCardClick(sub)}
                    className="group h-[350px] w-full perspective-1000 cursor-pointer"
                >
                    {/* Inner Flip Container */}
                    <div className="relative w-full h-full transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] rounded-3xl shadow-xl">
                        
                        {/* --- FRONT SIDE --- */}
                        <div 
                            className="absolute inset-0 w-full h-full [backface-visibility:hidden] rounded-3xl overflow-hidden"
                            style={{
                                backgroundImage: sub.activityPhotoBg ? sub.activityPhotoBg : 'none',
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                backgroundColor: sub.activityPhotoBg ? 'transparent' : '#e1f2d8'
                            }}
                        >
                            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/20 to-transparent"></div>
                            <div className="relative z-10 p-5">
                                <h3 className="font-extrabold text-white text-sm md:text-base drop-shadow-lg text-left">{sub.name}</h3>
                            </div>
                        </div>

                        {/* --- BACK SIDE --- */}
                        <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)] bg-[#cce6c4] rounded-3xl overflow-hidden flex items-center justify-center border-4 border-white/50">
                             <div className="absolute inset-0 bg-white/40"></div>
                             <img 
                                src={sub.logo} 
                                alt={`Logo ${sub.name}`} 
                                className="relative z-10 w-full h-full object-contain p-4" 
                             />
                        </div>

                    </div>
                </motion.div>
            ))}
          </div>
        </div>
      </section>

    {/* =========================================
        SECTION 4: LEGALITAS PERUSAHAAN
    ========================================= */}
    <section className="bg-[url('/src/assets/navbar-bg.svg')] bg-repeat bg-cover py-16">
        <div className="container mx-auto px-6">
            <motion.div
                variants={FadeUp(0.1)}
                initial="initial"
                whileInView="whileInView"
                className="text-center mb-12"
            >
                <h2 className="text-3xl font-extrabold text-[#cae2c0] mb-4">
                    Legalitas Perusahaan
                </h2>
                <div className="w-20 h-1.5 bg-[#174b1d] mx-auto rounded-full"></div>
            </motion.div>

            <div className="max-w-3xl mx-auto bg-[#cae2c0] rounded-2xl shadow-xl p-8 border border-[#cae2c0]">
                
                <motion.div variants={FadeUp(0.3)} initial="initial" whileInView="whileInView" className="space-y-6">
                    {/* Nama Perusahaan */}
                    <div className="flex items-start gap-4">
                        <CheckSquare className="flex-shrink-0 w-6 h-6 mt-1 text-[#174b1d]" />
                        <div>
                            <p className="text-sm font-semibold text-gray-500">Nama Resmi</p>
                            <p className="text-lg font-bold text-gray-800">PT FIRMANSYAH KHATULISTIWA GROUP</p>
                        </div>
                    </div>

                    {/* Akta Pendirian */}
                    <div className="flex items-start gap-4">
                        <CheckSquare className="flex-shrink-0 w-6 h-6 mt-1 text-[#174b1d]" />
                        <div>
                            <p className="text-sm font-semibold text-gray-500">Akta Pendirian</p>
                            <p className="text-lg font-medium text-gray-800">Akta No. 141, 23 Oktober 2025</p>
                            <p className="text-sm text-gray-600">Oleh Notaris Reno Rizaldi Nalaprana, S.H., M.Kn.</p>
                        </div>
                    </div>

                    {/* SK Kemenkumham */}
                    <div className="flex items-start gap-4">
                        <CheckSquare className="flex-shrink-0 w-6 h-6 mt-1 text-[#174b1d]" />
                        <div>
                            <p className="text-sm font-semibold text-gray-500">SK Kemenkumham</p>
                            <p className="text-lg font-medium text-gray-800">Nomor AHU-0092332.AH.01.01.TAHUN 2025</p>
                            <p className="text-sm text-gray-600">(Tanggal Pengesahan: 27 Oktober 2025)</p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    </section>

      <Footer />
    </div>
  );
};

export default Page2;