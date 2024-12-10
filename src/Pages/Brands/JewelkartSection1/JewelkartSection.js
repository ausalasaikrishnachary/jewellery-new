import React, { useEffect } from 'react';
// import './Jewels.css';
import { FaGem } from 'react-icons/fa'; // Importing icons from react-icons
import engring from '../Images/bridaljewellery.png';
import Necklace from '../Images/casualwear.png';
import CustomPiece from '../Images/finejewellery.png';
import Specialcolimg from '../Images/customized.png';
import home1 from '../Images/websitehome2.png';

import AOS from 'aos'; // Import AOS library
import 'aos/dist/aos.css'; // Import AOS styles

const JewelkartSection = () => {
  const categories = [
    { title: "Bridal Jewelry", image: engring, link: "#" },
    { title: "Casual Wear", image: Necklace, link: "#" },
    { title: "Fine Jewelry", image: CustomPiece, link: "#" },
    { title: "Customizable Pieces", image: Specialcolimg, link: "#" },
  ];

  // Initialize AOS animations on component mount
  useEffect(() => {
    AOS.init({
      duration: 1000, // Duration of the animations
      once: false, // Trigger animations only once
      mirror: true, // Trigger animations when scrolling back up
    });
  }, []);

  return (
    <div style={{ paddingTop: "60px" }}>
      {/* Home Image Section */}
      <div className="image-container">
        <img src={home1} alt="Home" className="responsive-image" data-aos="fade-up" />
      </div>

      {/* Key Offerings Section */}
      <div className="div-icon" data-aos="fade-up" data-aos-delay="200">
        <FaGem className="br-detail-icon" />
        <h2>Key Offerings</h2>
      </div>

      {/* Category List Section */}
      <div className="category-list">
        {categories.map((category, index) => (
          <div
            key={index}
            className="category-card"
            data-aos={index % 2 === 0 ? 'fade-right' : 'fade-left'}
            data-aos-delay={index * 100}
          >
            <img
              src={category.image}
              alt={category.title}
              className="category-image"
            />
            <h3>{category.title}</h3>
            <a href={category.link}>Explore &#8250;</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JewelkartSection;
