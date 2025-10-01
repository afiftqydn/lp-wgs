import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

// ===== Dummy Data =====
const cardData = [
  {
    image: "/pnk.png",
    title: "Project A",
  },
  {
    image: "/agri_logo.png",
    title: "Project B",
  },
  {
    image: "/entertaint.png",
    title: "Project C",
  },
  {
    image: "/koperasi.png",
    title: "Project D",
  },
];

// ===== Komponen Card =====
const CardView = ({ image, alt }) => (
  <div className="bg-[#cae4c3] rounded-xl shadow-lg overflow-hidden h-full transition-transform duration-300 hover:scale-105">
    <img 
      src={image} 
      alt={alt} 
      className="w-full h-48 object-cover" 
    />
  </div>
);

// ===== Komponen Carousel =====
const CenteredCarousel = () => {
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
              <CardView {...card} />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default CenteredCarousel;
