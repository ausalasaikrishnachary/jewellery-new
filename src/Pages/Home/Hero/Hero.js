import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import carousel styles
import './Hero.css'; // Import the updated CSS file
import banner1 from '../Hero/Images/1.png'
import banner2 from '../Hero/Images/2.png'
import banner3 from '../Hero/Images/3.png'
import banner4 from '../Hero/Images/4.png'

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
    // src="https://www.lalithaajewellery.com/assets/img/home-banner-1.webp"
     src={banner1}
    alt="Innovative Solutions for a Smarter Tomorrow"
    className="hero-image"
  />
  <div className="hero-text-container">
    {/* Uncomment if you want text overlays */}
    <div className="hero-main-text">
      <span className="hero-line1">Crafting Timeless Connections</span>
    </div>
    <div className="hero-sub-text">
      <span>
        A legacy of fine craftsmanship and unparalleled dedication to quality.
        Discover our passion for creating lasting value across all our
        endeavours.
      </span>
    </div>
    {/* Explore Button */}
    <div className="explore-button-container">
      <button className="explore-button">Explore</button>
    </div>
  </div>
</div>


        {/* Slide 2 */}
        <div className="hero-slide">
          <img
            //  src="https://www.lalithaajewellery.com/assets/img/home-banner-4.webp"
             src={banner2}
            alt="Practical Technologies Shaping the Future"
            className="hero-image"
          />
          <div className="hero-text-container">
            {/* Uncomment if you want text overlays */}
             <div className="hero-main-text">
              <span className="hero-line1">Rooted in Tradition, Inspired by Innovation</span>
              <span className="hero-line1">The Legacy Behind the Vision:</span>
            </div>
            <div className="hero-sub-text">
              <span>Discover the family behind the driving force, a history of entrepreneurship, and values that continue to guide us. Innovation meets tradition in everything we create. Experience the fusion of heritage and modernity in each of our brands.</span>
            </div> 
            <div className="explore-button-container">
      <button className="explore-button">Explore</button>
    </div>
          </div>
        </div>

        {/* Slide 3 */}
        <div className="hero-slide">
          <img
            // src="https://www.lalithaajewellery.com/assets/img/home-banner-5.webp"
            src={banner3}
            alt="Seamlessly connecting solutions for lasting impact"
            className="hero-image"
          />
          <div className="hero-text-container">
            {/* Uncomment if you want text overlays */}
             <div className="hero-main-text">
              <span className="hero-line1">A Commitment to Sustainability and Excellence</span>
            </div>
            <div className="hero-sub-text">
              <span>Our journey is one of conscious innovation—where sustainability shapes the future and excellence defines every step.</span>
            </div> 
            <div className="explore-button-container">
            <button className="explore-button">Explore</button>
           </div>
          </div>
        </div>

          {/* Slide 3 */}
          <div className="hero-slide">
          <img
            // src="https://www.lalithaajewellery.com/assets/img/home-banner-5.webp"
            src={banner4}
            alt="Seamlessly connecting solutions for lasting impact"
            className="hero-image"
          />
          <div className="hero-text-container">
            {/* Uncomment if you want text overlays */}
             <div className="hero-main-text">
              <span className="hero-line1">Empowering Dreams, Building Legacies</span>
              <span className="hero-line1">Sadashri Ventures:</span>
            </div>
            <div className="hero-sub-text">
              <span>A dynamic corporate entity that brings together diverse investments, innovative projects, and a vision for sustainable growth. Behind every creation, investment, and initiative is the ambition to make a lasting impact.</span>
             
            </div> 
            <div className="explore-button-container">
            <button className="explore-button">Explore</button>
           </div>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default Hero;
