import React, { useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";

const NavbarMenu = [
  { id: 1, title: "Beranda", path: "/" },
  { id: 2, title: "About", path: "/page2" },
  { id: 3, title: "Contact", path: "/page3" },
];

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  return (
  <nav className="bg-white bg-opacity-10 backdrop-blur-md border-b-4 border-green-600 shadow-lg">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        className="container py-5 flex justify-between items-center"
      >
        {/* Logo section */}
        <div className="flex items-center space-x-3">
          <img src="/LOGO_WGS.png" alt="Logo" className="w-20 h-18" />
          <div className="flex flex-col">
            <h1 className="font-bold text-2xl">Win Global</h1>
            <h1 className="font-bold text-2xl">
              <span className="text-secondary">Solusitama</span>
            </h1>
          </div>
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
          className="lg:hidden left-0 w-full bg-white shadow-lg py-5 mt-2 z-30 rounded-lg"
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
    </nav>
  );
};

export default Navbar;
