import React from "react";
import { FaInstagram, FaWhatsapp, FaYoutube } from "react-icons/fa";
import { TbWorldWww } from "react-icons/tb";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="bg-[#f7f7f7] mt-10"
    >
      {/* Garis Hijau di Atas */}
      <div className="h-1 w-full bg-green-600"></div>

      {/* Isi Footer */}
      <div className="container mx-auto px-6 py-5 flex flex-col items-center justify-center gap-2 text-center">
        
        {/* Baris 1: Icons */}
        <div className="flex gap-5 text-gray-600 text-2xl">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-600 transition-all">
            <FaInstagram />
          </a>
          <a href="https://wa.me/123456789" target="_blank" rel="noopener noreferrer" className="hover:text-green-500 transition-all">
            <FaWhatsapp />
          </a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-red-500 transition-all">
            <FaYoutube />
          </a>
          <a href="https://wgs.id" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition-all">
            <TbWorldWww />
          </a>
        </div>

        {/* Baris 2: Copyright */}
        <div className="text-base md:text-lg text-gray-600">
          Copyright © {new Date().getFullYear()} PT. Win Global Solusitama
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
