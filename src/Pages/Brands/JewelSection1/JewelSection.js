import React, { useEffect } from "react";
import AOS from "aos"; // Import AOS library
import "aos/dist/aos.css"; // Import AOS styles
import "../Jewels.css";
import { FaGem } from "react-icons/fa"; // Importing icon from react-icons
import engring from "../Images/keyofferings1.png";
import Necklace from "../Images/keyofferings2.png";
import CustomPiece from "../Images/keyofferings3.png";
import Specialcolimg from "../Images/keyofferings4.png";
import home from "../Images/websitehome.png";

function Jewels() {
  // Initialize AOS on component mount
  useEffect(() => {
    AOS.init({
      duration: 1000, // Duration of the animations
      once: false, // Animation triggers only once
      mirror: true, // Enable animations on scroll up
    });
  }, []);

  const categories = [
    { title: "Engagement Rings", image: engring, link: "#" },
    { title: "Necklaces", image: Necklace, link: "#" },
    { title: "Custom Pieces", image: CustomPiece, link: "#" },
    { title: "Special Collections", image: Specialcolimg, link: "#" },
  ];

  return (
    <div style={{ paddingTop: "60px" }}>
      <div className="image-container" data-aos="fade-down">
        <img src={home} alt="Home" className="responsive-image" />
      </div>

      <div className="div-icon" data-aos="fade-up">
        <FaGem className="br-detail-icon" />
        <h2>Key Offerings</h2>
      </div>

      <div className="category-list">
        {categories.map((category, index) => (
          <div
            key={index}
            className="category-card"
            data-aos="zoom-in"
            data-aos-delay={index * 200}
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
}

export default Jewels;
