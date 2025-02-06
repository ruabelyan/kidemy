import React from 'react';
import Slider from 'react-slick'; // Import slick slider

const ImageSlider = () => {
  // Settings for the Slick Slider
  const settings = {
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    dots: true, // Display dots
    arrows: true, // Display arrows
    responsive: [
      {
        breakpoint: 1024, // Medium screens (laptops)
        settings: {
          slidesToShow: 5, // Show 5 slides at a time
        },
      },
      {
        breakpoint: 768, // Small screens (tablets)
        settings: {
          slidesToShow: 30, // Show 3 slides at a time
        },
      },
      {
        breakpoint: 480, // Mobile screens
        settings: {
          slidesToShow: 10, // Show 1 slide at a time
        },
      },
    ],
  };

  return (
    <div className="slider-container" >
      <Slider style={{display:'flex'}} {...settings}>
        <div className="slider-item">
          <img
            src="https://kidemy.com/_next/image?url=%2Fimages%2FSlider%2Fddd.webp&w=640&q=75"
            alt="FGDF Image"
          />
        </div>
        <div className="slider-item">
          <img
            src="https://kidemy.com/_next/image?url=%2Fimages%2FSlider%2Fddd.webp&w=640&q=75"
            alt="For All Ages Image"
          />
        </div>
        <div className="slider-item">
          <img
            src="https://kidemy.com/_next/image?url=%2Fimages%2FSlider%2Fddd.webp&w=640&q=75"
            alt="Funny Image"
          />
        </div>
        <div className="slider-item">
          <img
            src="https://kidemy.com/_next/image?url=%2Fimages%2FSlider%2Fddd.webp&w=640&q=75"
            alt="Screenshots Image"
          />
        </div>
        {/* Add more slider items as needed */}
      </Slider>
    </div>
  );
};

export default ImageSlider;