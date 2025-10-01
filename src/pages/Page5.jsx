import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { motion } from "framer-motion";
import NewsGrid from "../components/Page5/NewsGrid";
import GalleryGrid from "../components/Page5/GalleryGrid";
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
  // batasan item awal
  const INITIAL_LIMIT = 6;
  const LOAD_MORE_STEP = 6;
  const [newsLimit, setNewsLimit] = React.useState(INITIAL_LIMIT);
  const [galleryLimit, setGalleryLimit] = React.useState(INITIAL_LIMIT);

  // handle load more
  const handleLoadMoreNews = () => setNewsLimit((prev) => prev + LOAD_MORE_STEP);
  const handleLoadMoreGallery = () =>
    setGalleryLimit((prev) => prev + LOAD_MORE_STEP);

  // data yang ditampilkan
  const displayedGallery = galleryItems.slice(0, galleryLimit);
  const displayedNews = newsArticles.slice(0, newsLimit);

  const hasMoreGallery = galleryLimit < galleryItems.length;
  const hasMoreNews = newsLimit < newsArticles.length;

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
          Galeri & Berita <span className="text-lime-300">WGS</span>
        </motion.h1>
        <motion.p
          variants={FadeUp(0.3)}
          initial="initial"
          animate="animate"
          className="text-gray-200 max-w-2xl mx-auto text-lg"
        >
          Jelajahi galeri aktivitas kami dan ikuti berita terbaru dari PT Win
          Global Solusitama.
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

        <NewsGrid
          articles={displayedNews}
          className="bg-white/10 rounded-2xl p-6 hover:bg-white/20 transition-all"
        />

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

        <GalleryGrid items={displayedGallery} />

        {hasMoreGallery && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-12 flex justify-center"
          >
            {/* <button
              onClick={handleLoadMoreGallery}
              className="px-6 py-3 rounded-full border border-lime-300 text-lime-300 font-medium hover:bg-lime-300 hover:text-black transition-all shadow-lg"
            >
              Lihat Lebih Banyak
            </button> */}
          </motion.div>
        )}
      </div>


      <Footer />
    </section>
  );
};

export default Page5;
