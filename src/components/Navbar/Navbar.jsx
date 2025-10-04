import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { IoMdMenu } from 'react-icons/io';
import { useLocation } from 'react-router-dom';

// 1. DATA MENU DIPISAHKAN
const mainMenuItems = [
  { id: 1, title: "Beranda", path: "/" },
  { id: 2, title: "Tentang Kami", path: "/page2" },
  { id: 3, title: "Produk & Layanan", path: "/page3" },
];

const dropdownMenuItems = [
  { id: 5, title: "Galeri & Berita", path: "/page5" },
  { id: 4, title: "Hubungi Kami", path: "/page4" },
];

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // 2. STATE BARU UNTUK DROPDOWN
  const location = useLocation();

  return (
    <nav className="bg-[#cae2bf] text-dark">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        className="container py-2 flex justify-between items-center"
      >
        {/* Logo section (tidak ada perubahan) */}
        <div className="flex items-center space-x-3 cursor-pointer no-caret select-none" onClick={() => window.location.href='/'}>
          <img src="/holding_logo.png" alt="Logo" className="h-16 object-contain" />
          <div className="flex flex-col items-start">
            <h1 className="text-xl md:text-2xl font-extrabold flex font-sans"> {/* <-- DIUBAH DI SINI */}
              Firman's 
              <span className="text-orange-500 ml-2">Group</span>
            </h1>
            <p className="text-xs font-light tracking-widest uppercase font-sans">
              Firmansyah Khatulistiwa Group
            </p>
          </div>
        </div>
        {/* Desktop Menu - DIUBAH UNTUK MENAMPUNG DROPDOWN */}
        <div className="hidden lg:flex items-center gap-6">
          <ul className="flex items-center gap-3">
            {/* Mapping menu utama */}
            {mainMenuItems.map((menu) => {
              const isActive = location.pathname === menu.path;
              return (
                <li key={menu.id}>
                  <a href={menu.path} className={`inline-block py-2 px-2 text-base relative group ${isActive ? "text-secondary font-semibold" : "hover:text-secondary font-normal"}`}>
                    <div className={`w-2 h-2 bg-secondary absolute mt-4 rounded-full left-1/2 -translate-x-1/2 top-1/2 bottom-0 ${isActive ? "block" : "group-hover:block hidden"}`}></div>
                    {menu.title}
                  </a>
                </li>
              );
            })}

            {/* 3. TOMBOL & LOGIKA DROPDOWN */}
            <li className="relative"> {/* Parent harus relative */}
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="inline-flex items-center py-2 px-2 text-base hover:text-secondary font-normal"
              >
                Lainnya
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </button>

              {/* 4. PANEL DROPDOWN YANG MUNCUL */}
              {isDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-20"
                >
                  <ul className="py-1">
                    {dropdownMenuItems.map((menu) => (
                      <li key={menu.id}>
                        <a
                          href={menu.path}
                          onClick={() => setIsDropdownOpen(false)} // Tutup dropdown saat link diklik
                          className="block px-4 py-2 text-sm text-dark hover:bg-gray-100"
                        >
                          {menu.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </li>
          </ul>
        </div>

        {/* Mobile Hamburger Icon (tidak ada perubahan) */}
        <div className="lg:hidden">
          <IoMdMenu
            className="text-4xl cursor-pointer no-caret select-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          />
        </div>
      </motion.div>

      {/* Mobile Menu (tidak ada perubahan, semua menu tetap tampil di mobile) */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="lg:hidden left-0 w-full bg-[#cae2bf] shadow-lg py-5 mt-2 z-30 rounded-lg"
        >
          <ul className="flex flex-col items-center gap-5">
            {[...mainMenuItems, ...dropdownMenuItems].map((menu) => { // Gabungkan semua menu untuk mobile
              const isActive = location.pathname === menu.path;
              return (
                <li key={menu.id}>
                  <a href={menu.path} className={`inline-block py-2 px-3 ${isActive ? "text-secondary font-semibold" : "hover:text-secondary"}`} onClick={() => setIsMobileMenuOpen(false)}>
                    {menu.title}
                  </a>
                </li>
              );
            })}
          </ul>
        </motion.div>
      )}
      
      {/* Garis Bawah (tidak ada perubahan) */}
      <div className="w-full h-1 shadow"></div>
      <div className="h-1 w-full bg-green-600"></div>
    </nav>
  );
};

export default Navbar;