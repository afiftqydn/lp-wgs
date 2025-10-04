// src/components/SliderCarousel/SliderCarousel.jsx

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { useNavigate } from 'react-router-dom';
import { subsidiariesData } from "../../data/subsidiariesData"; // Pastikan path ini benar

/**
 * CardView Component
 * Komponen individual untuk setiap item di dalam carousel.
 * Tingginya diatur secara responsif untuk tampilan optimal di semua perangkat.
 */
const CardView = ({ image, title, alt, onClick }) => (
  <div 
    // Kelas responsif untuk tinggi:
    // - h-56: Tinggi default untuk mobile (paling tinggi)
    // - md:h-48: Tinggi untuk tablet
    // - lg:h-40: Tinggi untuk desktop (paling pendek)
   className="bg-[#cae4c3] rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105 cursor-pointer 
            flex items-center justify-center p-4 
            h-28 sm:h-32 md:h-36 lg:h-44 xl:h-52"

    onClick={onClick}
  >
    <img 
      src={image} 
      alt={alt || title} 
      // object-contain memastikan gambar utuh dan tidak terpotong
      className="max-w-full max-h-full object-contain"
    />
  </div>
);


/**
 * CenteredCarousel Component
 * Komponen utama yang mengatur dan menampilkan slider/carousel.
 */
const CenteredCarousel = () => {
  const navigate = useNavigate();

  const handleCardClick = (id) => {
    navigate(`/page2#${id}`);
  };

  // Pengaturan untuk library react-slick
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "0px", // Jarak visual antar kartu di desktop
    slidesToShow: 3,       // Default 3 kartu untuk desktop
    speed: 500,
    arrows: false,
    dots: true,
    autoplay: true,
    autoplaySpeed: 2500,
    // Pengaturan responsif untuk berbagai ukuran layar
    responsive: [
      {
        // Tablet
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          centerPadding: "100px",
        }
      },
      {
        // Mobile Besar
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerPadding: "40px",
        }
      },
      {
        // Mobile Kecil
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          centerPadding: "25px",
        }
      }
    ]
  };

  // Mencegah error jika data belum siap/kosong
  if (!subsidiariesData || subsidiariesData.length === 0) {
    return null;
  }

  return (
    // Fragment <></> untuk membungkus style dan section
    <>
      {/* CSS tambahan untuk memoles tampilan dots dan arrows */}
      <style>{`
        /* Dots container */
        .slick-dots {
          bottom: -30px; /* geser ke bawah */
        }

        /* Dot normal */
        .slick-dots li button:before {
          font-size: 8px;       /* kecilkan ukuran */
          color: #9ca3af;       /* abu-abu netral */
          opacity: 0.5;
        }

        /* Dot aktif */
        .slick-dots li.slick-active button:before {
          color: #222222ff;       /* hijau sesuai tema */
          opacity: 0.5;
        }

        /* Opsional: rapatkan jarak antar dots */
        .slick-dots li {
          margin: 0 2px;
        }
      `}</style>
      
      <section className="w-full py-12 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <Slider {...settings}>
            {/* Mapping data untuk membuat setiap slide */}
            {subsidiariesData.map((card) => (
              <div key={card.id} className="p-2">
                <CardView 
                  image={card.logo} 
                  title={card.name} 
                  onClick={() => handleCardClick(card.id)}
                />
              </div>
            ))}
          </Slider>
        </div>
      </section>
    </>
  );
};

export default CenteredCarousel;