import React from "react";
import Navbar from "../components/Navbar/Navbar";
import { IoIosArrowRoundForward } from "react-icons/io";
import Blob from "../assets/blob.svg";
import StudentSVG from "../assets/student.svg";
import { animate, motion } from "framer-motion";

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

const Page3 = () => {
  return (
    
    <section className="bg-light overflow-hidden relative">
      <Navbar/>
      <div className="container grid grid-cols-1 md:grid-cols-2 min-h-[650px]">
        {/* Brand Info */}
        <div className="flex flex-col justify-center py-14 md:py-0 relative z-20">
          <div className="text-center md:text-left space-y-10 lg:max-w-[400px]">
            <motion.h1
              variants={FadeUp(0.6)}
              initial="initial"
              animate="animate"
              className="text-3xl lg:text-5xl font-bold !leading-snug"
            >
              Page <span className="text-secondary">Tiga</span>
            </motion.h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Page3;
