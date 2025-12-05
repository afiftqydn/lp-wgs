import React from "react";
import Hero from "../components/Hero/Hero";
import Services from "../components/Services/Services";
import Banner from "../components/Banner/Banner";
import Navbar from "../components/Navbar/Navbar";
import Subscribe from "../components/Subscribe/Subscribe";
import Banner2 from "../components/Banner/Banner2";
import SliderCarousel from "../components/SliderCarousel/SliderCarousel";
import Footer from "../components/Footer/Footer";
import PejabatBgImg from "/AFG.jpeg"; // SAYA PAKAI BLOB SBG CONTOH SEMENTARA



const Home = () => {
  return (
  
    <main className="flex-col relative bg-black bg-repeat bg-cover">
      <Navbar/>
      <img 
        src={PejabatBgImg} 
        alt="Background Pejabat"
        className="
          absolute top-3- left-0 z-0 w-full h-auto object-contain opacity-50 pointer-events-none 
          -translate-y-[1%] 
          
          /* --- INI BAGIAN GRADASINYA (MASKING) --- */
          [mask-image:linear-gradient(to_bottom,transparent_0%,black_20%,black_80%,transparent_100%)]
        " 
      />  

      <div className="overflow-visible">
        <SliderCarousel />
      </div>

      <Hero />
      <Services />
      <Footer />
    </main>
  );
};

export default Home;
