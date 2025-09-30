import React, { useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";

const NavbarMenu = [
  { id: 1, title: "Beranda", path: "/" },
  { id: 2, title: "Tentang Kami", path: "/page2" },
  { id: 3, title: "Produk & Layanan", path: "/page3" },
  { id: 4, title: "Hubungi Kami", path: "/page4" },
];

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  return (
  <nav className="bg-[#cae2bf] text-dark">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        className="container py-2 flex justify-between items-center"
      >
        {/* Logo section */}
        <div className="flex items-center space-x-3">
          <img src="/wgsgrup.png" alt="Logo"   className="h-16 object-contain" />
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-6">
          <ul className="flex gap-6">
            {NavbarMenu.map((menu) => {
              const isActive = location.pathname === menu.path;
              return (
                <li key={menu.id}>
                  <a
                    href={menu.path}
                    className={`inline-block py-2 px-3 relative group ${
                      isActive ? "text-secondary font-semibold" : "hover:text-secondary"
                    }`}
                  >
                    <div className={`w-2 h-2 bg-secondary absolute mt-4 rounded-full left-1/2 -translate-x-1/2 top-1/2 bottom-0 ${
                      isActive ? "block" : "group-hover:block hidden"
                    }`}></div>
                    {menu.title}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Mobile Hamburger Icon */}
        <div className="lg:hidden">
          <IoMdMenu
            className="text-4xl cursor-pointer"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          />
        </div>
      </motion.div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="lg:hidden left-0 w-full bg-[#cae2bf] shadow-lg py-5 mt-2 z-30 rounded-lg"
        >
          <ul className="flex flex-col items-center gap-5">
            {NavbarMenu.map((menu) => {
              const isActive = location.pathname === menu.path;
              return (
                <li key={menu.id}>
                  <a
                    href={menu.path}
                    className={`inline-block py-2 px-3 ${
                      isActive ? "text-secondary font-semibold" : "hover:text-secondary"
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {menu.title}
                  </a>
                </li>
              );
            })}
          </ul>
        </motion.div>
      )}
    <div className="w-full h-1 shadow"></div>

    </nav>
  );
};

export default Navbar;
