import React from "react";
import Hero from "../components/Hero/Hero";
import Services from "../components/Services/Services";
import Banner from "../components/Banner/Banner";
import Navbar from "../components/Navbar/Navbar";
import Subscribe from "../components/Subscribe/Subscribe";
import Banner2 from "../components/Banner/Banner2";
import Footer from "../components/Footer/Footer";


const Home = () => {
  return (
    
    <main className="overflow-x-hidden bg-white text-dark">
      <Navbar/>
      <Hero />
      <Services />
      {/* <Banner />
      <Subscribe />
      <Banner2 /> */}
      <Footer />
    </main>
  );
};

export default Home;
