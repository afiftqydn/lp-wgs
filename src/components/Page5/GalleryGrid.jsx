// src/components/Page5/GalleryGrid.jsx

import React from 'react';
import { motion } from 'framer-motion';
import { FadeUp } from '../../pages/Page5';
import { useNavigate } from "react-router-dom";

const GalleryGrid = ({ items }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/page4");
  };

  const baseCardClass =
    "bg-white rounded-xl shadow-md overflow-hidden group relative transition-all hover:shadow-lg";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="grid grid-cols-3 gap-6"
    >
      {/* Gambar 1 */}
      <motion.div variants={FadeUp(0)} className={`${baseCardClass} aspect-square`}>
        <img
          src={items[0]?.src || "https://via.placeholder.com/600x400"}
          alt={items[0]?.alt}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </motion.div>

      {/* Gambar 2 */}
      <motion.div variants={FadeUp(0.1)} className={`${baseCardClass} col-span-2 aspect-video`}>
        <img
          src={items[1]?.src || "https://via.placeholder.com/1200x600"}
          alt={items[1]?.alt}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </motion.div>

      {/* Gambar 3 */}
      <motion.div variants={FadeUp(0.2)} className={`${baseCardClass} aspect-square`}>
        <img
          src={items[2]?.src || "https://via.placeholder.com/600x400"}
          alt={items[2]?.alt}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </motion.div>

      {/* Gambar 4 */}
      <motion.div variants={FadeUp(0.3)} className={`${baseCardClass} aspect-square`}>
        <img
          src={items[3]?.src || "https://via.placeholder.com/600x400"}
          alt={items[3]?.alt}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </motion.div>

      {/* Gambar 5 */}
      <motion.div variants={FadeUp(0.5)} className={`${baseCardClass} aspect-square`}>
        <img
          src={items[4]?.src || "https://via.placeholder.com/600x400"}
          alt={items[4]?.alt}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </motion.div>

      {/* Gambar 6 */}
      <motion.div variants={FadeUp(0.6)} className={`${baseCardClass} col-span-2 aspect-video`}>
        <img
          src={items[5]?.src || "https://via.placeholder.com/1200x600"}
          alt={items[5]?.alt}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </motion.div>

      {/* Kotak CTA */}
      <motion.div
        variants={FadeUp(0.7)}
        className="bg-[#cae2bf] rounded-xl shadow-md p-8 flex flex-col justify-center items-center text-center hover:shadow-lg transition-all"
      >
        <h4 className="text-base font-semibold mb-2 text-gray-700">
          Ingin tahu lebih lanjut?
        </h4>
        <h3 className="text-xl font-bold mb-4 text-green-700">
          Terlibat Bersama Kami <br /> dalam Pengembangan Ekonomi Kerakyatan
        </h3>
        <button
          onClick={handleClick}
          className="flex items-center space-x-2 border border-green-600 text-green-600 py-3 px-6 rounded-full font-medium transition-all hover:bg-green-600 hover:text-white"
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
