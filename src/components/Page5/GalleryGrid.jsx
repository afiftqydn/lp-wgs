// src/components/Page5/GalleryGrid.jsx

import React from 'react';
import { motion } from 'framer-motion';
import { FadeUp } from '../../pages/Page5';
import { useNavigate } from "react-router-dom";

const GalleryGrid = ({ items }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/Contact-Us"); // Asumsi "/page4" adalah Contact Us
  };

  const baseCardClass =
    "bg-white rounded-xl shadow-md overflow-hidden group relative transition-all hover:shadow-lg";

  // --- MODIFIKASI DIMULAI ---
  // Ambil 11 item sisanya (dari index 6 sampai akhir)
  const remainingItems = items.slice(6);
  // --- MODIFIKASI SELESAI ---

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6"
    >
      {/* Layout Kustom untuk 6 Gambar Pertama */}
      
      {/* Gambar 1 */}
      {/* Menambahkan cek 'items[0] &&' untuk keamanan */}
      {items[0] && (
        <motion.div variants={FadeUp(0)} className={`${baseCardClass} aspect-square`}>
          <img
            src={items[0].src}
            alt={items[0].alt}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </motion.div>
      )}

      {/* Gambar 2 */}
      {items[1] && (
        <motion.div variants={FadeUp(0.1)} className={`${baseCardClass} md:col-span-2 lg:col-span-2 aspect-video`}>
          <img
            src={items[1].src}
            alt={items[1].alt}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </motion.div>
      )}

      {/* Gambar 3 */}
      {items[2] && (
        <motion.div variants={FadeUp(0.2)} className={`${baseCardClass} aspect-square`}>
          <img
            src={items[2].src}
            alt={items[2].alt}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </motion.div>
      )}

      {/* Gambar 4 */}
      {items[3] && (
        <motion.div variants={FadeUp(0.3)} className={`${baseCardClass} aspect-square`}>
          <img
            src={items[3].src}
            alt={items[3].alt}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </motion.div>
      )}

      {/* Gambar 5 */}
      {items[4] && (
        <motion.div variants={FadeUp(0.5)} className={`${baseCardClass} aspect-square`}>
          <img
            src={items[4].src}
            alt={items[4].alt}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </motion.div>
      )}

      {/* Gambar 6 */}
      {items[5] && (
        <motion.div variants={FadeUp(0.6)} className={`${baseCardClass} md:col-span-2 lg:col-span-2 aspect-video`}>
          <img
            src={items[5].src}
            alt={items[5].alt}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </motion.div>
      )}

      {/* --- MODIFIKASI DIMULAI --- */}
      {/* Render sisa foto (item ke 7 s.d 17) secara dinamis */}
      {remainingItems.map((item, index) => (
        <motion.div
          key={item.id}
          // Animasi berlanjut dari item ke-6 (delay 0.6)
          variants={FadeUp(0.7 + index * 0.1)} 
          className={`${baseCardClass} aspect-square`} // Layout standar
        >
          <img
            src={item.src}
            alt={item.alt}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </motion.div>
      ))}
      {/* --- MODIFIKASI SELESAI --- */}


      {/* Kotak CTA (Dipindahkan ke Paling Akhir) */}
      <motion.div
        // Delay diatur agar muncul setelah item loop terakhir
        variants={FadeUp(0.7 + remainingItems.length * 0.1)} 
        className="bg-[#cae2bf] rounded-xl shadow-md p-8 flex flex-col justify-center items-center text-center hover:shadow-lg transition-all md:col-span-2 lg:col-span-1"
      >
        <h4 className="text-base font-semibold mb-2 text-gray-700">
          Ingin tahu lebih lanjut?
        </h4>
        <h3 className="text-xl font-bold mb-4 text-green-700">
          Terlibat Bersama Kami <br /> dalam Pengembangan Ekonomi Kerakyatan
        </h3>
        <button
          onClick={handleClick}
          className="group flex items-center gap-2 bg-gray-900 text-lime-400 px-8 py-3 rounded-full font-semibold hover:bg-[#143d18] hover:shadow-lg hover:scale-105 transition-all duration-300"
        >
          <span>Hubungi Kami</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </button>
      </motion.div>
    </motion.div>
  );
};

export default GalleryGrid;