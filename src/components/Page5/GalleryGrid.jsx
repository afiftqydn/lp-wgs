// src/components/Page5/GalleryGrid.jsx

import React from 'react';
import { motion } from 'framer-motion';
import { FadeUp } from '../../pages/Page5';
import { useNavigate } from "react-router-dom"; 
import { newsArticles, galleryItems } from '../../data/page5Data';


const GalleryGrid = ({ items }) => {
    const navigate = useNavigate(); 
    const handleClick = () => {
        navigate("/page4"); 
  };
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      // Menggunakan grid 3 kolom dan gap yang lebih besar
      className="grid grid-cols-3 gap-6" 
    >
      {/* Gambar 1 (kiri atas) */}
      <motion.div
        variants={FadeUp(0)}
        className="col-span-1 row-span-1 group relative overflow-hidden rounded-lg shadow-md aspect-square"
      >
        <img src={items[0]?.src || "https://via.placeholder.com/600x400"} alt={items[0]?.alt} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
      </motion.div>

      {/* Gambar 2 (tengah atas, lebih lebar) */}
      <motion.div
        variants={FadeUp(0.1)}
        className="col-span-2 row-span-1 group relative overflow-hidden rounded-lg shadow-md aspect-video"
      >
        <img src={items[1]?.src || "https://via.placeholder.com/1200x600"} alt={items[1]?.alt} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
      </motion.div>

      {/* Gambar 3 (kanan atas) */}
      <motion.div
        variants={FadeUp(0.2)}
        className="col-span-1 row-span-1 group relative overflow-hidden rounded-lg shadow-md aspect-square"
      >
        <img src={items[2]?.src || "https://via.placeholder.com/600x400"} alt={items[2]?.alt} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
      </motion.div>
      
      {/* Gambar 4 (kiri bawah) */}
      <motion.div
        variants={FadeUp(0.3)}
        className="col-span-1 row-span-1 group relative overflow-hidden rounded-lg shadow-md aspect-square"
      >
        <img src={items[3]?.src || "https://via.placeholder.com/600x400"} alt={items[3]?.alt} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
      </motion.div>

      <motion.div
        variants={FadeUp(0.5)}
        className="col-span-1 row-span-1 group relative overflow-hidden rounded-lg shadow-md aspect-square"
      >
        <img src={items[4]?.src || "https://via.placeholder.com/600x400"} alt={items[4]?.alt} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
      </motion.div>

      {/* Gambar 6 (tengah bawah) */}
      <motion.div
        variants={FadeUp(0.6)}
        className="col-span-2 row-span-1 group relative overflow-hidden rounded-lg shadow-md aspect-video"
      >
        <img src={items[5]?.src || "https://via.placeholder.com/1200x600"} alt={items[5]?.alt} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
      </motion.div>

      {/* Kotak "Ajukan Pertanyaan?" (kanan bawah) */}
        <motion.div
        variants={FadeUp(0.7)}
        className="col-span-1 row-span-1 bg-secondary text-white p-8 rounded-lg shadow-md flex flex-col justify-center items-center text-center"
        >
        <h4 className="text-lg font-semibold mb-2">Ingin tahu lebih lanjut?</h4>
        <h3 className="text-2xl font-bold mb-4">
            Terlibat Bersama Kami <br /> dalam Pengembangan Ekonomi Kerakyatan
        </h3>
        <button
            onClick={handleClick}
            className="flex items-center space-x-2 border border-white py-3 px-6 rounded-full font-medium transition-colors hover:bg-white hover:text-secondary"
        >
            <span>Hubungi Kami</span>
            <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
            </svg>
        </button>
        </motion.div>

    </motion.div>
  );
};

export default GalleryGrid;