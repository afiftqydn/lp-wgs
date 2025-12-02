import React from "react";
import { useNavigate } from "react-router-dom"; 
import { IoIosArrowRoundForward } from "react-icons/io";
import Blob from "../../assets/blob.svg";
import BadgesWGS from "/logo_firmans.png";
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
    <section className="overflow-hidden relative">
      <div className="container grid grid-cols-1 md:grid-cols-2 items-center min-h-[650px] mt-0 md:mt-[-120px]">
        
        {/* Brand Info */}
        <div className="flex flex-col justify-center no-caret select-none py-10 md:py-0 relative z-20 order-2 md:order-1">
          <div className="text-center md:text-left space-y-6 max-w-xl mx-auto md:mx-0">
            <motion.h1
              variants={FadeUp(0.6)}
              initial="initial"
              animate="animate"
              className="text-2xl sm:text-3xl md:text-4xl font-bold leading-snug break-words text-light"
            >
              PT Firman'syah Khatulistiwa Group
            </motion.h1>

            <motion.p
              variants={FadeUp(0.7)}
              initial="initial"
              animate="animate"
              className="text-xl text-base text-gray-200 leading-relaxed text-justify"
            >
              PT Firmansyah Khatulistiwa Group (Firmans Group) adalah sebuah startup yang berasal dari Kalimantan Barat, bergerak di bidang pembiayaan syariah, solusi keuangan, serta pengembangan program kemanusiaan dan keumatan. Fokus utama perusahaan ini adalah untuk mendorong pemberdayaan ekonomi dan sosial melalui layanan keuangan inklusif.
            </motion.p>

            <motion.div
              variants={FadeUp(0.8)}
              initial="initial"
              animate="animate"
              className="flex justify-center md:justify-start"
            >
              <button
                onClick={handleClick}
                className="primary-btn flex items-center gap-2 group"
              >
                Selengkapnya
                <IoIosArrowRoundForward className="text-xl group-hover:translate-x-2 group-hover:-rotate-45 duration-300" />
              </button>
            </motion.div>
          </div>
        </div>

        {/* Hero Image */}
        <div className="flex justify-center no-caret select-none items-center mt-6 md:mt-0 order-1 md:order-2">
          <motion.img
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeInOut" }}
            src={BadgesWGS}
            alt="Logo WGS"
            className="w-60 sm:w-80 md:w-[400px] xl:w-[600px] relative z-10 drop-shadow"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
