import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { motion } from "framer-motion";
import NewsGrid from "../components/Page5/NewsGrid";
import GalleryGrid from "../components/Page5/GalleryGrid";
import { newsArticles, galleryItems } from "../data/page5Data"; 

// Fungsi animasi FadeUp
export const FadeUp = (delay = 0) => {
  return {
    initial: { opacity: 0, y: 50 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        duration: 0.5,
        delay: delay,
        ease: "easeInOut",
      },
    },
  };
};

const Page5 = () => {
  // STATE BARU: State untuk mengontrol batas tampilan masing-masing section
  const INITIAL_LIMIT = 6;
  const LOAD_MORE_STEP = 6;
  const [newsLimit, setNewsLimit] = React.useState(INITIAL_LIMIT);
  const [galleryLimit, setGalleryLimit] = React.useState(INITIAL_LIMIT);

  // Fungsi untuk memuat lebih banyak berita
  const handleLoadMoreNews = () => {
    setNewsLimit(prev => prev + LOAD_MORE_STEP);
  };

  // Fungsi untuk memuat lebih banyak galeri
  const handleLoadMoreGallery = () => {
    setGalleryLimit(prev => prev + LOAD_MORE_STEP);
  };
  
  // Batasi data yang akan di-render menggunakan slice()
  const displayedGallery = galleryItems.slice(0, galleryLimit);
  const displayedNews = newsArticles.slice(0, newsLimit);
  
  // Tentukan apakah masih ada item yang tersembunyi
  const hasMoreGallery = galleryLimit < galleryItems.length;
  const hasMoreNews = newsLimit < newsArticles.length;


  return (
    <section className="bg-white overflow-hidden relative min-h-screen">
      <Navbar/>
      
      {/* Hero Section: Judul Halaman */}
      <div className=" container pt-28 pb-10 bg-gray-50 border-b border-gray-200 text-center">
        <div className="container mx-auto px-6">
          <motion.h1
            variants={FadeUp(0.1)}
            initial="initial"
            animate="animate"
            className="text-4xl lg:text-5xl font-bold text-gray-800 mb-2"
          >
            Galeri & Berita <span className="text-secondary">WGS</span>
          </motion.h1>
          <motion.p
             variants={FadeUp(0.3)}
             initial="initial"
             animate="animate"
             className="text-gray-600 mb-6 max-w-xl mx-auto"
          >
            Jelajahi galeri aktivitas kami dan ikuti berita terbaru dari PT Win Global Solusitama.
          </motion.p>
        </div>
      </div>
      
      {/* SECTION 1: Galeri Foto & Video */}
      <div className="container mx-auto px-6 py-16">
        <motion.h2
          variants={FadeUp(0.1)}
          initial="initial"
          animate="animate"
          className="text-3xl font-bold text-gray-800 mb-8 text-center"
        >
          Galeri <span className="text-secondary">Aktivitas</span>
        </motion.h2>
        <GalleryGrid items={displayedGallery} />

        {/* Tombol "Lihat Lebih Banyak" UNTUK GALERI */}
        {hasMoreGallery && (
          <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mt-12 flex justify-center"
          >
              <button 
                  onClick={handleLoadMoreGallery}
                  className="px-6 py-3 border border-secondary text-base font-medium rounded-full text-secondary hover:bg-secondary hover:text-white transition-colors shadow-md"
              >
                  Lihat Lebih Banyak
              </button>
          </motion.div>
        )}
      </div>

      {/* SECTION 2: Berita Terbaru */}
      <div className="container mx-auto px-6 py-16 bg-gray-50">
        <motion.h2
          variants={FadeUp(0.1)}
          initial="initial"
          animate="animate"
          className="text-3xl font-bold text-gray-800 mb-8 text-center"
        >
          Berita <span className="text-secondary">Terbaru</span>
        </motion.h2>
        <NewsGrid articles={displayedNews} />

        {/* Tombol "Lihat Lebih Banyak" UNTUK BERITA */}
        {hasMoreNews && (
          <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mt-12 flex justify-center"
          >
              <button 
                  onClick={handleLoadMoreNews}
                  className="px-6 py-3 border border-secondary text-base font-medium rounded-full text-secondary hover:bg-secondary hover:text-white transition-colors shadow-md"
              >
                  Lihat Lebih Banyak
              </button>
          </motion.div>
        )}
      </div>

      <Footer />
    </section>
  );
};

export default Page5;