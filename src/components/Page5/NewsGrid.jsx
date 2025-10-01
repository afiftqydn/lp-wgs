// src/components/Page5/NewsGrid.jsx

import React from 'react';
import { motion } from 'framer-motion';
import { FadeUp } from '../../pages/Page5'; // Asumsi FadeUp diimport dari Page5
import { IoIosArrowRoundForward } from "react-icons/io";

const NewsGrid = ({ articles }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
    >
      {articles.map((article, index) => (
        <motion.div
          key={article.id}
          variants={FadeUp(index * 0.1)}
          initial="initial"
          animate="animate"
          className="bg-white rounded-xl border border-gray-100 shadow-lg transition-shadow duration-300 hover:shadow-xl overflow-hidden"
        >
          {/* Tambahkan placeholder gambar agar kartu terlihat lebih menarik */}
          <div className="h-40 bg-gray-200 w-full object-cover">
            <img 
              src={article.imgSrc || "https://via.placeholder.com/600x400?text=WGS+News"} 
              alt={article.title} 
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="p-6">
            <div className="text-sm font-medium text-secondary mb-2">{article.date}</div>
            <h2 className="text-xl font-bold text-gray-800 mb-3">{article.title}</h2>
            <p className="text-gray-600 mb-4 line-clamp-3">{article.summary}</p>
            <a href={`/news/${article.id}`} className="text-secondary font-semibold flex items-center hover:underline">
              Baca Selengkapnya <IoIosArrowRoundForward className="w-6 h-6 ml-1" />
            </a>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default NewsGrid;