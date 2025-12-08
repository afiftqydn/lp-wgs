import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom"; // Tambahkan hook navigasi

// IMPORT DATA DARI FILE EKSTERNAL
import { newsArticles, galleryItems } from "../../data/page5Data";
import SliderCarousel from "../SliderCarousel/SliderCarousel";
import Hero from "../Hero/Hero";


// --- KOMPONEN IKON SVG (Pengganti ikon library) ---
const IconBase = ({ size = 24, className, children }) => (
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
    {children}
  </svg>
);

// Ikon untuk Produk Unggulan
const Crown = (props) => (
  <IconBase {...props}>
    <path d="m2 4 3 12h14l3-12-6 7-4-7-4 7-6-7zm3 16h14v2H5z" />
  </IconBase>
);

const GraduationCap = (props) => (
  <IconBase {...props}>
    <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
    <path d="M6 12v5c3 3 9 3 12 0v-5" />
  </IconBase>
);

const Handshake = (props) => (
  <IconBase {...props}>
    <path d="m11 17 2 2a1 1 0 1 0 3-3" />
    <path d="m22 11-3-3-8.8 8.8a4.998 4.998 0 1 1-7-7l8-8L11 2" />
  </IconBase>
);

// Ikon untuk Berita & Galeri
const Newspaper = (props) => (
  <IconBase {...props}>
    <path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2" />
    <path d="M18 14h-8" />
    <path d="M15 18h-5" />
    <path d="M10 6h8v4h-8V6Z" />
  </IconBase>
);

const Calendar = (props) => (
  <IconBase {...props}>
    <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
    <line x1="16" x2="16" y1="2" y2="6" />
    <line x1="8" x2="8" y1="2" y2="6" />
    <line x1="3" x2="21" y1="10" y2="10" />
  </IconBase>
);

const ImageIcon = (props) => (
  <IconBase {...props}>
    <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
    <circle cx="9" cy="9" r="2" />
    <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
  </IconBase>
);

const ArrowRight = (props) => (
  <IconBase {...props}>
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </IconBase>
);

// --- DATA PRODUK UNGGULAN ---
const ServicesData = [
  {
    id: 1,
    key: "multiGuna",
    title: "Pembiayaan Multiguna",
    desc: "Nikmati kemudahan pembiayaan untuk berbagai kebutuhan Anda—mulai dari rumah tinggal, renovasi, biaya pendidikan, hingga pembelian emas. Solusi fleksibel dan syariah.",
    icon: <Crown />,
    delay: 0.2,
  },
  {
    id: 2,
    key: "hajiUmroh",
    title: "Haji & Umroh",
    desc: "Wujudkan impian beribadah ke Tanah Suci dengan pembiayaan syariah yang aman, mudah, dan sesuai prinsip Islam. Siap mendampingi langkah suci Anda.",
    icon: <GraduationCap />,
    delay: 0.3,
  },
  {
    id: 3,
    key: "csr",
    title: "Corporate Social Responsibility",
    desc: "Dukung program sosial seperti santunan yatim piatu, inkubator ekonomi syariah, dan wakaf Al-Qur’an bagi para Tahfiz di Indonesia bersama WGS.",
    icon: <Handshake />,
    delay: 0.4,
  },
];

const SlideLeft = (delay) => ({
  initial: { opacity: 0, x: 50 },
  animate: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.3, delay, ease: "easeInOut" },
  },
});

const Services = () => {
  const navigate = useNavigate();

  // Ambil 5 berita terbaru saja
  const featuredNews = newsArticles ? newsArticles.slice(0, 5) : [];
  
  // Duplikasi item galeri untuk efek infinite loop yang mulus
  // Kita duplikasi 2 kali agar cukup panjang untuk scrolling
  const infiniteGallery = galleryItems ? [...galleryItems, ...galleryItems] : [];

  const handleNewsClick = (url) => {
    if (url) {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  const handleProductClick = (productKey) => {
    navigate(`/Subholding/wgs`);
  };

  return (
    <section className="bg-[#cae2c0] rounded-t-[50px] min-h-screen overflow-hidden">
            <Hero />
      
      {/* ==================== PRODUK UNGGULAN SECTION ==================== */}
      <div className="mx-auto pt-5 pb-20">
        <div className="container mx-auto">
            <motion.h1
              className="text-4xl font-bold text-left pb-5 text-[#174b1d] text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.0, ease: "easeInOut",
              delay: 0 }}
              viewport={{ once: true }}
            >
              Produk Unggulan
            </motion.h1>
          <div className="w-20 h-1.5 bg-[#174b1d] mx-auto rounded-full" />
          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 gap-8 px-10 pt-10">
            {ServicesData.map((service) => (
              <motion.div
                key={service.id}
                variants={SlideLeft(service.delay)}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                // 1. CONTAINER LUAR: Mengatur tinggi tetap dan perspective
                className="group h-[320px] w-full [perspective:1000px] cursor-pointer"
                onClick={() => handleProductClick(service.key)}
              >
                {/* 2. INNER CONTAINER: Menangani Rotasi */}
                <div className="relative h-full w-full transition-all duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] rounded-2xl shadow-md hover:shadow-xl">
                  
                  {/* --- SISI DEPAN (FRONT) --- */}
                  <div className="absolute inset-0 h-full w-full rounded-2xl bg-[#e1f2d8] border border-[#cae2c0] [backface-visibility:hidden]">
                    <div className="flex flex-col gap-4 items-center justify-center h-full p-6 text-center">
                      <div className="text-4xl mb-1 text-[#174b1d]">{service.icon}</div>
                      <h1 className="text-lg font-bold text-[#174b1d]">{service.title}</h1>
                      <p className="text-sm font-light px-3 text-gray-700 leading-relaxed">
                        {service.desc}
                      </p>
                    </div>
                  </div>

                  {/* --- SISI BELAKANG (BACK) --- */}
                  <div className="absolute inset-0 h-full w-full rounded-2xl bg-[#e1f2d8] border border-gray-200 [backface-visibility:hidden] [transform:rotateY(180deg)] flex items-center justify-center p-8">
                    {/* Pastikan path logo sesuai dengan file project Anda */}
                    <img 
                      src="/wgs_karousel.png" 
                      alt="Logo WGS" 
                      className="w-3/4 h-auto object-contain"
                    />
                  </div>

                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>      
      {/* ==================== GALLERY SECTION (AUTO SLIDESHOW) ==================== */}
      <div className="pb-14 overflow-hidden">
        {/* INFINITE MARQUEE SLIDESHOW */}
        {/* Menggunakan grid 1x6 (sekitar 6 item di desktop) */}
        <div className="relative w-full flex overflow-hidden">
            <motion.div
                className="flex gap-4 px-4"
                animate={{ x: "-50%" }} // Bergerak ke kiri sejauh 50% dari total panjang (setengah adalah duplikat)
                transition={{
                    ease: "linear",
                    duration: 40, // Kecepatan animasi (semakin besar angka, semakin lambat)
                    repeat: Infinity,
                }}
                style={{ width: "fit-content" }}
            >
                {infiniteGallery.map((item, index) => (
                    <div 
                        key={`${item.id}-${index}`}
                        className="
                            relative flex-shrink-0 
                            w-[200px] md:w-[250px] lg:w-[calc(100vw/6.5)] 
                            aspect-square rounded-xl overflow-hidden shadow-lg bg-gray-800
                            group cursor-pointer
                        "
                    >
                        <img 
                            src={item.src} 
                            alt={item.alt}
                            onError={(e) => {
                                e.target.onerror = null; 
                                e.target.src = "https://via.placeholder.com/300?text=No+Image";
                            }}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                    </div>
                ))}
            </motion.div>
        </div>
      </div>

      {/* ==================== NEWS SECTION ==================== */}
      <div className="mx-auto px-6 pt-0 pb-12">
        {/* BENTO GRID LAYOUT */}
        <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-auto md:grid-rows-2 gap-4 h-auto md:h-[600px]">
          {featuredNews.map((news, index) => {
            const isMainItem = index === 0;
            const gridClass = isMainItem 
                ? "md:col-span-2 md:row-span-2" 
                : "md:col-span-1 md:row-span-1";

            return (
              <motion.div
                key={news.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`
                    relative group overflow-hidden rounded-2xl shadow-lg cursor-pointer 
                    ${gridClass}
                    h-[250px] md:h-auto
                `}
                onClick={() => handleNewsClick(news.sourceUrl)}
              >
                {/* Background Image */}
                <img 
                    src={news.imgSrc} 
                    alt={news.title}
                    onError={(e) => {
                        e.target.onerror = null; 
                        e.target.src = "https://via.placeholder.com/600x400?text=News+WGS"; 
                    }}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                {/* Text Content */}
                <div className="absolute bottom-0 left-0 w-full p-4 md:p-6 flex flex-col justify-end h-full">
                    <div className="mb-2">
                        <span className="bg-red-600/90 text-white text-[10px] md:text-xs font-bold px-2 py-1 rounded uppercase tracking-wider shadow-sm">
                            Hot News!
                        </span>
                    </div>

                    <h2 className={`font-bold text-white leading-tight mb-2 group-hover:text-[#cae2c0] transition-colors ${isMainItem ? 'text-xl md:text-3xl' : 'text-sm md:text-base line-clamp-3'}`}>
                        {news.title}
                    </h2>

                    <div className="flex items-center text-gray-300 text-xs gap-2">
                        <Calendar size={12} />
                        <span>{news.date}</span>
                    </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* BUTTON LIHAT LEBIH BANYAK */}
        <div className="flex justify-center mt-10">
            <button 
                onClick={() => navigate('/Geleri&Berita')}
                className="group flex items-center gap-2 bg-[#174b1d] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#143d18] hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
                Lihat Lebih Banyak
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
        </div>
      </div>
    </section>
  );
};

export default Services;