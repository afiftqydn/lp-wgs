import React from "react";
import { useNavigate } from "react-router-dom";
import { IoIosArrowRoundForward } from "react-icons/io";
import BadgesWGS from "/logo_firmans.png"; // Pastikan path ini benar
import { motion } from "framer-motion";

export const FadeUp = (delay) => {
  return {
    initial: {
      opacity: 0,
      y: 50,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        duration: 0.5,
        delay: delay,
        ease: "easeInOut",
      },
    },
  };
};

const Hero = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/About-Us");
  };

  return (
    <section className="relative overflow-hidden bg-[#cae2c0]/20">
      {/* PERUBAHAN LAYOUT (GESER KANAN):
        -------------------------------
        Saya mengubah padding agar tidak simetris (kiri lebih besar dari kanan).
        
        Sebelumnya: px-6 md:px-16 lg:px-24 (Kanan Kiri sama)
        Sekarang:   pl-10 pr-4 md:pl-28 md:pr-8 lg:pl-40 lg:pr-12
        
        Efeknya: Konten akan terdorong menjauh dari sisi kiri (bergeser ke kanan).
      */}
      <div className="container mx-auto flex min-h-[650px] items-center pl-10 pr-4 md:pl-28 md:pr-8 lg:pl-40 lg:pr-12 pt-10 pb-10">
        
        {/* Grid Layout */}
        <div className="grid w-full grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-16">
          
          {/* Kolom 1: Teks */}
          <div className="flex flex-col justify-center order-2 md:order-1 relative z-20">
            <div className="text-center md:text-left space-y-6">
              
              {/* Judul */}
              <motion.h1
                variants={FadeUp(0.6)}
                initial="initial"
                animate="animate"
                className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-[#174b1d]"
              >
                PT Firmansyah Khatulistiwa Group
              </motion.h1>

              {/* Deskripsi */}
              <motion.p
                variants={FadeUp(0.7)}
                initial="initial"
                animate="animate"
                className="text-base md:text-lg text-gray-800 leading-relaxed text-justify font-medium"
              >
                PT Firmansyah Khatulistiwa Group (Firman's Group) adalah sebuah
                startup yang berasal dari Kalimantan Barat, bergerak di bidang
                pembiayaan syariah, solusi keuangan, serta pengembangan program
                kemanusiaan dan keumatan. Fokus utama perusahaan ini adalah
                untuk mendorong pemberdayaan ekonomi dan sosial melalui layanan
                keuangan inklusif.
              </motion.p>

              {/* Tombol */}
              <motion.div
                variants={FadeUp(0.8)}
                initial="initial"
                animate="animate"
                className="flex justify-center md:justify-start pt-4"
              >
                <button
                  onClick={handleClick}
                  className="group flex items-center gap-2 rounded-full border-2 border-[#174b1d] px-8 py-3 font-semibold text-[#174b1d] transition-all duration-300 hover:bg-[#174b1d] hover:text-white"
                >
                  Selengkapnya
                  <IoIosArrowRoundForward className="text-2xl duration-300 group-hover:-rotate-45 group-hover:translate-x-2" />
                </button>
              </motion.div>
            </div>
          </div>

          {/* Kolom 2: Gambar */}
          <div className="flex justify-center items-center order-1 md:order-2">
            <motion.img
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4, ease: "easeInOut" }}
              src={BadgesWGS}
              alt="Logo Firmans Group"
              className="w-[280px] sm:w-[350px] md:w-[450px] lg:w-[550px] drop-shadow-2xl object-contain z-10"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;