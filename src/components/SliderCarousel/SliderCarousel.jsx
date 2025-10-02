import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { useNavigate } from 'react-router-dom';


// ===== Dummy Data dengan ID Unik =====
const cardData = [
  {
    image: "/pnk.png",
    title: "Project A",
    id: "sub-1",
  },
  {
    image: "/agri_logo.png",
    title: "Project B",
    id: "sub-2",
  },
  {
    image: "/entertaint.png",
    title: "Project C",
    id: "sub-3",
  },
  {
    image: "/koperasi.png",
    title: "Project D",
    id: "sub-4",
  },
];


// ===== Komponen Card dengan Props ID dan Fungsi onClick =====
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


// ===== Komponen Carousel =====
const CenteredCarousel = () => {
  const navigate = useNavigate();

  const handleCardClick = (id) => {
    // Navigasi ke Page2 dengan ID sebagai hash di URL
    navigate(`/page2#${id}`);
  };

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "30px",
    slidesToShow: 3,
    speed: 600,
    arrows: true,
    dots: true,
    autoplay: true,
    autoplaySpeed: 1500,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          centerPadding: "60px",
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerPadding: "60px",
        }
      }
    ]
  };

  return (
    <section className="w-full py-12">
      <div className="max-w-6xl mx-auto px-4">
        <Slider {...settings}>
          {cardData.map((card, index) => (
            <div key={index} className="px-2 md:px-4">
              {/* Panggil CardView dengan fungsi onClick baru */}
              <CardView 
                {...card} 
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