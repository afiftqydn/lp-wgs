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
        className="bg-[#cae2bf] text-dark"
      >

        {/* WRAPPER */}
        <div className="container py-2 flex justify-between items-center">

          {/* LOGO */}
          <motion.div 
            whileHover={{ scale: 1.02 }} 
            transition={{ type: "spring", stiffness: 200 }}
            className="flex items-center space-x-3 cursor-pointer"
            onClick={() => window.location.href = '/'}
          >
            <img src="/holding_logo.png" alt="Logo" className="h-16 object-contain" />
            <div className="flex flex-col items-start">
              <h1 className="text-xl md:text-2xl font-extrabold flex font-sans">
                Firman's 
                <span className="text-orange-500 ml-2">Group</span>
              </h1>
              <p className="text-xs font-light tracking-widest uppercase font-sans">
                Firmansyah Khatulistiwa Group
              </p>
            </div>
          </motion.div>

          {/* DESKTOP MENU */}
          <div className="hidden lg:flex items-center gap-6">
            <ul className="flex items-center gap-3">
              {mainMenuItems.map((menu) => {
                const isActive = location.pathname === menu.path;

                return (
                  <motion.li key={menu.id} variants={hoverLift} whileHover="hover">
                    <a
                      href={menu.path}
                      className={`relative inline-block py-2 px-2 text-base ${
                        isActive ? "text-secondary font-semibold" : "hover:text-secondary"
                      }`}
                    >
                      <motion.span
                        className="absolute bottom-0 left-0 right-0 mx-auto w-0 h-[3px] bg-secondary rounded-full"
                        animate={{ width: isActive ? "60%" : 0 }}
                        whileHover={{ width: "60%" }}
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
                className="text-4xl cursor-pointer"
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
              className="lg:hidden left-0 w-full bg-[#cae2bf] shadow-lg py-5 mt-2 z-30 rounded-lg"
            >
              <ul className="flex flex-col items-center gap-5">
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
                        className={`inline-block py-2 px-3 ${
                          isActive ? "text-secondary font-semibold" : "hover:text-secondary"
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

        {/* BORDER */}
        <div className="w-full h-1 shadow"></div>
        <div className="h-1 w-full bg-green-600"></div>

      </motion.nav>
    </AnimatePresence>
  );
};

export default Navbar;
