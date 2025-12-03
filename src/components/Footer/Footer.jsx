import React from "react";
import { FaInstagram, FaLinkedin, FaLinkedinIn, FaMapPin, FaWhatsapp, FaYoutube } from "react-icons/fa";
import { TbWorldWww } from "react-icons/tb";
import { motion } from "framer-motion";
import { FaLocationPin, FaLocationPinLock, FaMapLocation } from "react-icons/fa6";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="bg-[#cae2bf] mt-0"
    >
      {/* Garis Hijau di Atas */}
      <div className="h-1 w-full bg-green-600"></div>

      {/* Isi Footer */}
      <div className="container mx-auto px-6 py-5 flex flex-col items-center justify-center gap-2 text-center">
        
        {/* Baris 1: Icons */}
        <div className="flex gap-5 text-gray-600 text-2xl">
          <a href="https://www.instagram.com/firmansgroup/" className="hover:text-pink-600 transition-all">
            <FaInstagram />
          </a>
          <a href="https://wa.me/085195522202" className="hover:text-green-500 transition-all">
            <FaWhatsapp />
          </a>
          <a href="https://maps.app.goo.gl/8bDZhQM2rSMea6fn8" className="hover:text-red-500 transition-all">
            <FaLocationPin />
          </a>
          <a href="https://www.linkedin.com/company/pt-win-global-solusitama/" className="hover:text-blue-500 transition-all">
            <FaLinkedin />
          </a>
        </div>

        {/* Baris 2: Copyright */}
<div className="text-base md:text-lg text-gray-600">
  Copyright ©{new Date().getFullYear()}<br />
  PT. Firmansyah Khatulistiwa Group
</div>
      </div>
    </motion.footer>
  );
};

export default Footer;
