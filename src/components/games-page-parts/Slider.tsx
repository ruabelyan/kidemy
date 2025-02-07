import React from 'react';
import Slider from 'react-slick'; // Import slick slider

const ImageSlider = () => {
  // Settings for the Slick Slider
  const settings = {
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    dots: true, // Display dots
    arrows: false, // Display arrows
    responsive: [
      {
        breakpoint: 3840, // Extra Large screens (Very large desktops and ultra-wide monitors)
        settings: {
          slidesToShow: 6, // Show 6 slides at a time
        },
      },
      {
        breakpoint: 2560, // Extra Large screens (Very large desktops and ultra-wide monitors)
        settings: {
          slidesToShow: 6, // Show 6 slides at a time
        },
      },
      {
        breakpoint: 1920, // Large screens (Desktops)
        settings: {
          slidesToShow: 5, // Show 6 slides at a time
        },
      },
      {
        breakpoint: 1280, // Medium screens (Laptops)
        settings: {
          slidesToShow: 3, // Show 5 slides at a time
        },
      },
      {
        breakpoint: 1024, // Tablets or small laptops
        settings: {
          slidesToShow: 3, // Show 4 slides at a time
        },
      },
      {
        breakpoint: 768, // Small screens (Tablets and smaller)
        settings: {
          slidesToShow: 3, // Show 3 slides at a time
        },
      },
      {
        breakpoint: 480, // Mobile screens (phones)
        settings: {
          slidesToShow: 2, // Show 2 slides at a time
        },
      },
      {
        breakpoint: 320, // Very small screens (portrait phones)
        settings: {
          slidesToShow: 2, // Show 1 slide at a time
        },
      },
    ],
  };

  return (
    <div className="slider-container" >
      <Slider  {...settings}>
        <div className="slider-item">
          <img
          style={{width:'100%',padding:5}}
            src="https://kidemy.com/_next/image?url=%2Fimages%2FSlider%2Fddd.webp&w=640&q=75"
            alt="Image 1"
          />
        </div>
        <div className="slider-item">
          <img
                  style={{width:'100%',padding:5}}

            src="https://kidemy.com/_next/image?url=%2Fimages%2FSlider%2Fddd.webp&w=640&q=75"
            alt="Image 2"
          />
        </div>
        <div className="slider-item">
          <img
                   style={{width:'100%',padding:5}}
            src="https://kidemy.com/_next/image?url=%2Fimages%2FSlider%2Fddd.webp&w=640&q=75"
            alt="Image 3"
          />
        </div>
        <div className="slider-item">
          <img
                   style={{width:'100%',padding:5}}
            src="https://kidemy.com/_next/image?url=%2Fimages%2FSlider%2Fddd.webp&w=640&q=75"
            alt="Image 4"
          />
        </div>
      </Slider>
    </div>
  );
};

export default ImageSlider;
