import React, { useEffect } from 'react';
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { motion } from "framer-motion";
import NewsGrid from "../components/Page5/NewsGrid";
import GalleryGrid from "../components/Page5/GalleryGrid";
import { newsArticles, galleryItems, videoItems } from "../data/page5Data"; 

// Animasi FadeUp
export const FadeUp = (delay = 0) => {
  return {
    initial: { opacity: 0, y: 50 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        duration: 0.6,
        delay: delay,
      },
    },
  };
};

const Page5 = () => {
  // --- LOGIKA BERITA ---
  const INITIAL_NEWS_LIMIT = 3; 
  const LOAD_MORE_STEP = 3;
  const [newsLimit, setNewsLimit] = React.useState(INITIAL_NEWS_LIMIT);

  const handleLoadMoreNews = () => setNewsLimit((prev) => prev + LOAD_MORE_STEP);
  const displayedNews = newsArticles.slice(0, newsLimit);
  const hasMoreNews = newsLimit < newsArticles.length;

  // --- LOGIKA VIDEO (BARU) ---
  const INITIAL_VIDEO_LIMIT = 3; // Menampilkan 3 video di awal
  const LOAD_MORE_VIDEO_STEP = 3; // Menambah 3 video saat tombol diklik
  const [videoLimit, setVideoLimit] = React.useState(INITIAL_VIDEO_LIMIT);

  const handleLoadMoreVideos = () => setVideoLimit((prev) => prev + LOAD_MORE_VIDEO_STEP);
  
  // Potong data video berdasarkan limit
  const displayedVideos = videoItems.slice(0, videoLimit);
  // Cek apakah masih ada sisa video yang belum tampil
  const hasMoreVideos = videoLimit < videoItems.length;

  return (
    <section className="relative min-h-screen bg-[url('/src/assets/navbar-bg.svg')] bg-cover bg-fixed text-white overflow-hidden">
      <Navbar />

      {/* HERO */}
      <div className="pt-40 pb-16 text-center bg-gradient-to-b from-black/40 to-transparent">
        <motion.h1
          variants={FadeUp(0.1)}
          initial="initial"
          animate="animate"
          className="text-4xl md:text-5xl font-extrabold mb-4 drop-shadow-lg"
        >
          Galeri & Berita <span className="text-lime-300"></span>
        </motion.h1>
        <motion.p
          variants={FadeUp(0.3)}
          initial="initial"
          animate="animate"
          className="text-gray-200 max-w-2xl mx-auto text-lg"
        >
          Jelajahi galeri aktivitas, video dokumentasi, dan berita terbaru dari PT Firmans Khatulistiwa Group.
        </motion.p>
      </div>

      {/* BERITA */}
      <div className="container mx-auto px-6 py-12">
        <motion.h2
          variants={FadeUp(0.1)}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="text-3xl font-bold mb-10 text-center text-lime-300"
        >
          Berita <span className="text-white">Terbaru</span>
        </motion.h2>

        <NewsGrid
          articles={displayedNews}
          className="bg-white/10 rounded-2xl p-6 hover:bg-white/20 transition-all"
        />

        {hasMoreNews && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="mt-12 flex justify-center"
          >
            <button
              onClick={handleLoadMoreNews}
              className="group flex items-center gap-2 bg-gray-900 text-lime-400 px-8 py-3 rounded-full font-semibold hover:bg-[#143d18] hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              Lihat Lebih Banyak Berita
            </button>
          </motion.div>
        )}
      </div>

{/* --- SECTION VIDEO --- */}
<div className="container mx-auto px-4 py-8 bg-black/20 backdrop-blur-sm rounded-3xl my-8">
  <motion.h2
    variants={FadeUp(0.1)}
    initial="initial"
    whileInView="animate"
    viewport={{ once: true }}
    className="text-3xl font-bold mb-8 text-lime-300 pl-2 text-center" // Rata kiri dikit biar mirip header section Youtube
  >
    Video <span className="text-white">Kegiatan</span>
  </motion.h2>

  {/* === 1. VIDEO AUTOPLAY (Gaya Channel Trailer) === */}
  {/* Ini kita buat agak besar tapi fit, mirip video trailer di halaman profil channel */}
  {(() => {
    const heroVideoId = "sKS_h-7kNm8"; 
    return (
      <motion.div
        variants={FadeUp(0.2)}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="flex justify-center mb-12" // Beri jarak agak jauh dengan grid di bawah
      >
        <div className="w-full max-w-4xl rounded-xl overflow-hidden shadow-2xl bg-black">
           <div className="relative aspect-video w-full">
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src={`https://www.youtube.com/embed/${heroVideoId}?autoplay=1&mute=1&loop=1&playlist=${heroVideoId}&controls=1&rel=0`}
              title="Featured Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </motion.div>
    );
  })()}


  {/* === 2. GRID VIDEO (GAYA 3 KOLOM) === */}
  {/* Penjelasan Grid:
      - grid-cols-1    : Tampilan HP (1 kolom)
      - sm:grid-cols-2 : Tampilan Tablet (2 kolom)
      - lg:grid-cols-3 : Tampilan Laptop/PC (3 kolom - Sesuai request formasi 2x3 jika ada 6 video)
      - gap-6          : Jarak antar video lebih proporsional
  */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    {displayedVideos.map((video, index) => (
      <motion.div
        key={video.id}
        variants={FadeUp(0.2 + index * 0.1)}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="group cursor-pointer flex flex-col gap-3"
      >
        {/* Container Video/Thumbnail */}
        <div className="relative aspect-video w-full rounded-xl overflow-hidden bg-gray-900 shadow-md border border-white/5 group-hover:border-lime-300/50 transition-all duration-300">
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src={`https://www.youtube.com/embed/${video.videoId}`} 
            title={video.title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        {/* Info Video */}
        <div className="flex flex-col px-1">
          <h3 className="text-white font-semibold text-sm leading-snug line-clamp-2 group-hover:text-lime-300 transition-colors">
            {video.title}
          </h3>
          <p className="text-gray-400 text-xs mt-1">
             WGS Channel • {new Date().getFullYear()}
          </p>
        </div>
      </motion.div>
    ))}
  </div>

  {/* TOMBOL LOAD MORE */}
  {hasMoreVideos && (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      className="mt-12 flex justify-center border-t border-white/10 pt-8" // Tambah border atas biar rapi
    >
      <button
        onClick={handleLoadMoreVideos}
        className="group flex items-center gap-2 bg-gray-900 text-lime-400 px-8 py-3 rounded-full font-semibold hover:bg-[#143d18] hover:shadow-lg hover:scale-105 transition-all duration-300"
      >
        Muat lebih banyak
      </button>
    </motion.div>
  )}
</div>
{/* --- AKHIR SECTION VIDEO --- */}
      {/* GALERI FOTO */}
      <div className="container mx-auto px-6 py-16">
        <motion.h2
          variants={FadeUp(0.1)}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="text-3xl font-bold mb-10 text-center text-lime-300"
        >
          Galeri <span className="text-white">Aktivitas</span>
        </motion.h2>

        <GalleryGrid items={galleryItems} />
      </div>

      <Footer />
    </section>
  );
};

export default Page5;