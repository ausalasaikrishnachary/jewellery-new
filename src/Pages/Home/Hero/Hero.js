import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import carousel styles
import './Hero.css'; // Import the updated CSS file

const Hero = () => {
  return (
    <div className="hero-carousel-container">
      <Carousel
        autoPlay
        infiniteLoop
        showArrows={true}
        showThumbs={false}
        showStatus={false}
        interval={5000}
        className="hero-carousel"
        dynamicHeight={true}
      >
        {/* Slide 1 */}
        <div className="hero-slide">
          <img
            src="https://www.lalithaajewellery.com/assets/img/home-banner-1.webp"
            alt="Innovative Solutions for a Smarter Tomorrow"
            className="hero-image"
          />
          <div className="hero-text-container">
            {/* Uncomment if you want text overlays */}
            {/* <div className="hero-main-text">
              <span className="hero-line1">Innovative Solutions for a Smarter Tomorrow</span>
            </div>
            <div className="hero-sub-text">
              <span className="hero-subline1">Transforming ideas into cutting-edge realities.</span>
            </div> */}
          </div>
        </div>

        {/* Slide 2 */}
        <div className="hero-slide">
          <img
            src="https://www.lalithaajewellery.com/assets/img/home-banner-4.webp"
            alt="Practical Technologies Shaping the Future"
            className="hero-image"
          />
          <div className="hero-text-container">
            {/* Uncomment if you want text overlays */}
            {/* <div className="hero-main-text">
              <span className="hero-line1">Practical Technologies Shaping the Future</span>
            </div>
            <div className="hero-sub-text">
              <span className="hero-subline1">Bridging innovation with real-world applications.</span>
            </div> */}
          </div>
        </div>

        {/* Slide 3 */}
        <div className="hero-slide">
          <img
            src="https://www.lalithaajewellery.com/assets/img/home-banner-5.webp"
            alt="Seamlessly connecting solutions for lasting impact"
            className="hero-image"
          />
          <div className="hero-text-container">
            {/* Uncomment if you want text overlays */}
            {/* <div className="hero-main-text">
              <span className="hero-line1">Seamlessly connecting solutions for lasting impact</span>
            </div>
            <div className="hero-sub-text">
              <span className="hero-subline1">Seamlessly connecting solutions for lasting impact.</span>
            </div> */}
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default Hero;
