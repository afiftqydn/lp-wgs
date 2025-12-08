import React, { useState } from 'react';
import { AnimatePresence, motion } from "framer-motion";
import { IoMdMenu } from 'react-icons/io';
import { useLocation } from 'react-router-dom';

const mainMenuItems = [
  { id: 1, title: "Beranda", path: "/" },
  { id: 2, title: "Tentang Kami", path: "/About-Us" },
  { id: 3, title: "Galeri & Berita", path: "/Geleri&Berita" },
  { id: 4, title: "Hubungi Kami", path: "/Contact-Us" },
];

const hoverLift = {
  hover: { y: -3, transition: { type: "spring", stiffness: 300 } }
};

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <motion.nav
        key={location.pathname}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        // UBAH DISINI: bg-transparent dan text-white
        className="bg-transparent text-white absolute top-0 left-0 w-full z-50"
      >

        {/* WRAPPER */}
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">

          {/* LOGO */}
          <motion.div 
            whileHover={{ scale: 1.02 }} 
            transition={{ type: "spring", stiffness: 200 }}
            className="flex items-center space-x-3 cursor-pointer"
            onClick={() => window.location.href = '/'}
          >
            {/* Pastikan logo Anda support background gelap (misal PNG transparan) */}
            <img src="/holding_logo.png" alt="Logo" className="h-16 object-contain" />
            <div className="flex flex-col items-start">
              <h1 className="text-xl md:text-2xl font-extrabold flex font-sans text-white">
                Firman's 
                <span className="text-lime-400 ml-2">Group</span>
              </h1>
              {/* Subtitle dibuat abu-abu terang */}
              <p className="text-xs font-light tracking-widest uppercase font-sans text-gray-300">
                Firmansyah Khatulistiwa Group
              </p>
            </div>
          </motion.div>

          {/* DESKTOP MENU */}
          <div className="hidden lg:flex items-center gap-6">
            <ul className="flex items-center gap-6">
              {mainMenuItems.map((menu) => {
                const isActive = location.pathname === menu.path;

                return (
                  <motion.li key={menu.id} variants={hoverLift} whileHover="hover">
                    <a
                      href={menu.path}
                      // UBAH DISINI: Logika warna teks (Putih vs Hijau Terang)
                      className={`relative inline-block py-2 px-2 text-base transition-colors duration-300 ${
                        isActive ? "text-lime-300 font-bold" : "text-white hover:text-lime-300"
                      }`}
                    >
                      <motion.span
                        // UBAH DISINI: Warna garis bawah jadi hijau terang
                        className="absolute bottom-0 left-0 right-0 mx-auto w-0 h-[2px] bg-lime-300 rounded-full"
                        animate={{ width: isActive ? "100%" : 0 }}
                        whileHover={{ width: "100%" }}
                        transition={{ duration: 0.3 }}
                      />
                      {menu.title}
                    </a>
                  </motion.li>
                );
              })}
            </ul>
          </div>

          {/* MOBILE ICON */}
          <div className="lg:hidden">
            <motion.div
              whileTap={{ scale: 0.8 }}
              animate={{ rotate: isMobileMenuOpen ? 90 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <IoMdMenu
                className="text-4xl cursor-pointer text-white"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              />
            </motion.div>
          </div>

        </div>

        {/* MOBILE MENU */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.35 }}
              // UBAH DISINI: Background Mobile Menu Gelap Transparan (Glassmorphism)
              className="lg:hidden absolute left-0 w-full bg-black/50 backdrop-blur-md shadow-lg py-5 z-40 border-t border-white/10"
            >
              <ul className="flex flex-col items-center gap-6">
                {mainMenuItems.map((menu) => {
                  const isActive = location.pathname === menu.path;

                  return (
                    <motion.li
                      key={menu.id}
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 250 }}
                    >
                      <a
                        href={menu.path}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={`inline-block py-2 px-3 text-lg ${
                          isActive ? "text-lime-300 font-bold" : "text-white hover:text-lime-300"
                        }`}
                      >
                        {menu.title}
                      </a>
                    </motion.li>
                  );
                })}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>

        {/* BORDER DEKORASI (Opsional: dibuat transparan atau putih tipis) */}
        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>

      </motion.nav>
    </AnimatePresence>
  );
};

export default Navbar;