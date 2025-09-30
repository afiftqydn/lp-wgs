import React from "react";
import Hero from "../components/Hero/Hero";
import Services from "../components/Services/Services";
import Banner from "../components/Banner/Banner";
import Navbar from "../components/Navbar/Navbar";
import Subscribe from "../components/Subscribe/Subscribe";
import Banner2 from "../components/Banner/Banner2";
import SliderCarousel from "../components/SliderCarousel/SliderCarousel";
import Footer from "../components/Footer/Footer";


const Home = () => {
  return (
  
    <main className="overflow-hidden relative bg-[url('/src/assets/navbar-bg.svg')] bg-repeat bg-cover">
      <Navbar/>
      <SliderCarousel />
      <Hero />
      <Services />
      <Footer />
    </main>
  );
};

export default Home;
