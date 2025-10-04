import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { useNavigate } from 'react-router-dom';
import { subsidiariesData } from "../../data/subsidiariesData";

const CardView = ({ image, title, alt, onClick }) => (
  <div 
    className="bg-[#cae4c3] rounded-xl shadow-lg overflow-hidden h-full transition-transform duration-300 hover:scale-105 cursor-pointer"
    onClick={onClick}
  >
    <img 
      src={image} 
      alt={alt || title} 
      className="w-full h-48 object-cover" 
    />
  </div>
);

const CenteredCarousel = () => {
  const navigate = useNavigate();

  const handleCardClick = (id) => {
    navigate(`/page2#${id}`);
  };

  // Pengaturan carousel yang lebih responsif
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px", // Padding default untuk desktop
    slidesToShow: 3,       // Menampilkan 3 slide di desktop
    speed: 500,
    arrows: true,
    dots: true,
    autoplay: true,
    autoplaySpeed: 2000,   // Sedikit diperlambat agar lebih smooth
    responsive: [
      {
        // Untuk layar Laptop Kecil / Tablet Besar
        breakpoint: 1280, // xl
        settings: {
          slidesToShow: 3,
          centerPadding: "40px",
        }
      },
      {
        // Untuk layar Tablet
        breakpoint: 1024, // lg
        settings: {
          slidesToShow: 1, // Fokus pada 1 slide di tengah
          centerPadding: "150px", // Padding lebih besar agar "intipan" terlihat jelas
        }
      },
      {
        // Untuk layar Mobile Besar
        breakpoint: 768, // md
        settings: {
          slidesToShow: 1,
          centerPadding: "80px", // Padding disesuaikan untuk layar lebih kecil
        }
      },
      {
        // Untuk layar Mobile Kecil
        breakpoint: 480, // sm
        settings: {
          slidesToShow: 1,
          centerPadding: "40px", // Padding lebih kecil agar card utama tidak terlalu sempit
        }
      }
    ]
  };

  return (
    <section className="w-full py-12 overflow-hidden"> {/* Menambahkan overflow-hidden */}
      <div className="max-w-7xl mx-auto px-4"> {/* Sedikit memperlebar max-width */}
        <Slider {...settings}>
          {subsidiariesData.map((card) => (
            <div key={card.id} className="px-2 md:px-3"> {/* Jarak antar slide disesuaikan */}
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
  );
};

export default CenteredCarousel;