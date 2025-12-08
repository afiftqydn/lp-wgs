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
  
<main className="flex flex-col min-h-screen bg-black">
      <Navbar/>
      
      {/* --- BAGIAN GAMBAR PEJABAT --- */}
      {/* 1. Hapus 'absolute'. Ganti jadi 'relative' agar dia punya tinggi dan lebar fisik di halaman */}
      {/* 2. Bungkus dengan div agar lebih rapi */}
      <div className="relative w-full">
        <img 
          src={PejabatBgImg} 
          alt="Background Pejabat"
          className="
            w-full h-auto object-cover opacity-50 pointer-events-none 
            
            /* Masking tetap dipertahankan agar gradasi halus */
            [mask-image:linear-gradient(to_bottom,transparent_0%,black_20%,black_80%,transparent_100%)]
          " 
        /> 
      </div>

      {/* --- SLIDER CAROUSEL --- */}
      {/* Karena gambar di atas sudah tidak absolute, slider ini otomatis akan turun ke bawah gambar */}
      {/* Saya tambahkan -mt-20 (margin top negatif) opsional jika ingin slidernya sedikit naik menutupi kaki gambar agar terlihat menyatu */}
      <div className="relative z-10 -mt-20 mb-10 overflow-visible">
        <SliderCarousel />
      </div>

      <Services />
      <Footer />
    </main>
    );
};

export default Home;
