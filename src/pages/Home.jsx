import React from "react";
import Hero from "../components/Hero/Hero";
import Services from "../components/Services/Services";
// import Banner from "../components/Banner/Banner"; // Tidak dipakai?
import Navbar from "../components/Navbar/Navbar";
// import Subscribe from "../components/Subscribe/Subscribe"; // Tidak dipakai?
// import Banner2 from "../components/Banner/Banner2"; // Tidak dipakai?
import SliderCarousel from "../components/SliderCarousel/SliderCarousel";
import Footer from "../components/Footer/Footer";
import PejabatBgImg from "/AFG.jpeg"; 

const Home = () => {
  return (
    <main className="flex flex-col min-h-screen bg-black overflow-x-hidden">
      <Navbar />

      {/* BACKGROUND IMAGE SECTION */}
      <div className="relative w-full">
        <img
          src={PejabatBgImg}
          alt="Background Pejabat"
          className="
            w-full h-auto object-cover opacity-50 pointer-events-none 
            [mask-image:linear-gradient(to_bottom,transparent_0%,black_20%,black_80%,transparent_100%)]
          "
        />
      </div>

      {/* CAROUSEL SECTION */}
      {/* PENTING: Tambahkan w-full agar slider tahu lebarnya */}
      <div className="relative z-10 -mt-20 mb-10 w-full"> 
        <SliderCarousel />
      </div>

      <Services />
      <Footer />
    </main>
  );
};

export default Home;