import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { useNavigate } from "react-router-dom";
import { subsidiariesData } from "../../data/subsidiariesData";

/* ================= CARD ================= */
const CardView = ({ image, title, alt, onClick }) => (
  <div
    onClick={onClick}
    className="
      bg-[#cae4c3]
      rounded-2xl
      shadow-xl
      flex flex-col items-center justify-center /* Tambahkan flex-col di sini */
      p-4 sm:p-6
      h-48 sm:h-56 /* Tinggikan sedikit card-nya agar muat teks */
      cursor-pointer
      transition-all duration-300
      mx-2 /* Memberi jarak antar kartu */
    "
  >
    <img
      src={image}
      alt={alt || title}
      // Batasi tinggi gambar dan beri margin bawah (mb-3)
      className="h-20 sm:h-24 max-w-full object-contain mb-3" 
    />
    {/* Teks nama perusahaan */}
    <h3 className="text-center font-semibold text-sm sm:text-base text-gray-800 leading-tight">
      {title}
    </h3>
  </div>
);

/* ================= CAROUSEL ================= */
const SliderCarousel = () => {
  const navigate = useNavigate();

  const handleCardClick = (id) => {
    navigate(`/Subholding/${id}`);
  };

  const settings = {
    // === SETTINGAN DEFAULT (DESKTOP) ===
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,      // Desktop: 3 kartu
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000,
    centerMode: true,     
    centerPadding: "0px", // Desktop: Pas 3 kartu tanpa intip pinggir

    // === SETTINGAN RESPONSIVE (MOBILE) ===
    responsive: [
      {
        breakpoint: 1024, // Tablet
        settings: {
          slidesToShow: 3,
          centerPadding: "0px",
        }
      },
      {
        breakpoint: 768, // Mobile (HP)
        settings: {
          slidesToShow: 1,     // PENTING: Cuma 1 kartu
          centerMode: true,    // Tetap true agar CSS slick-center jalan
          centerPadding: "30px", // Beri sedikit "napas" (30px) agar kartu tidak terlalu mepet layar
        }
      }
    ]
  };

  if (!subsidiariesData?.length) return null;

  return (
    <>
      <style>{`
        /* Mengatur style kartu yang sedang aktif (tengah) vs tidak aktif */
        .slick-slide > div {
           transform: scale(0.9); /* Kartu samping lebih kecil */
           transition: transform 0.3s;
           opacity: 0.5; /* Kartu samping transparan */
        }
        
        .slick-center > div {
           transform: scale(1); /* Kartu aktif normal */
           opacity: 1;
        }

        /* Geser dots ke bawah sedikit agar tidak menumpuk card */
        .slick-dots {
            bottom: -35px;
        }
        .slick-dots li button:before {
            color: #fff; /* Warna dots putih */
            font-size: 10px;
        }
      `}</style>

      <section className="w-full">
         <div className="max-w-7xl mx-auto px-4">
            <Slider {...settings}>
              {subsidiariesData.map((card) => (
                <div key={card.id} className="py-4"> {/* Padding vertical agar shadow tidak terpotong */}
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

export default SliderCarousel;