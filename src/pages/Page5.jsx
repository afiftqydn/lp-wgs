import React, { useEffect } from 'react'; // Tambahkan useEffect
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { motion } from "framer-motion";
import NewsGrid from "../components/Page5/NewsGrid";
import GalleryGrid from "../components/Page5/GalleryGrid";
// Pastikan path ini benar
import { newsArticles, galleryItems } from "../data/page5Data"; 

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
  // --- MODIFIKASI: Logika "Load More" HANYA UNTUK BERITA ---
  const INITIAL_NEWS_LIMIT = 6;
  const LOAD_MORE_STEP = 6;
  const [newsLimit, setNewsLimit] = React.useState(INITIAL_NEWS_LIMIT);

  // handle load more untuk berita
  const handleLoadMoreNews = () => setNewsLimit((prev) => prev + LOAD_MORE_STEP);

  // data yang ditampilkan untuk berita
  const displayedNews = newsArticles.slice(0, newsLimit);
  const hasMoreNews = newsLimit < newsArticles.length;
  // --- AKHIR MODIFIKASI ---

  return (
    <section className="relative min-h-screen bg-[url('/src/assets/navbar-bg.svg')] bg-cover bg-fixed text-white overflow-hidden">
      <Navbar />

      {/* HERO */}
      <div className="pt-28 pb-16 text-center bg-gradient-to-b from-black/40 to-transparent">
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
          Jelajahi galeri aktivitas kami dan ikuti berita terbaru dari PT Firmans Khatulistiwa Group.
        </motion.p>
      </div>


      {/* BERITA */}
      <div className="container mx-auto px-6 py-16">
        <motion.h2
          variants={FadeUp(0.1)}
          initial="initial"
          animate="animate"
          className="text-3xl font-bold mb-10 text-center text-lime-300"
        >
          Berita <span className="text-white">Terbaru</span>
        </motion.h2>

        {/* Menggunakan displayedNews (data yang dipotong) */}
        <NewsGrid
          articles={displayedNews}
          className="bg-white/10 rounded-2xl p-6 hover:bg-white/20 transition-all"
        />

        {/* Tombol "Load More" untuk Berita */}
        {hasMoreNews && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-12 flex justify-center"
          >
            <button
              onClick={handleLoadMoreNews}
              className="px-6 py-3 rounded-full border border-lime-300 text-lime-300 font-medium hover:bg-lime-300 hover:text-black transition-all shadow-lg "
            >
              Lihat Lebih Banyak
            </button>
          </motion.div>
        )}
      </div>


      {/* GALERI */}
      <div className="container mx-auto px-6 py-16">
        <motion.h2
          variants={FadeUp(0.1)}
          initial="initial"
          animate="animate"
          className="text-3xl font-bold mb-10 text-center text-lime-300"
        >
          Galeri <span className="text-white">Aktivitas</span>
        </motion.h2>

        {/* --- PERUBAHAN PENTING DI SINI --- */}
        {/* Langsung kirim SEMUA galleryItems, bukan displayedGallery */}
        <GalleryGrid items={galleryItems} />

        {/* Kita tidak lagi memerlukan tombol "Load More" untuk galeri */}
        
      </div>


      <Footer />
    </section>
  );
};

export default Page5;