import React from 'react';
import './Introduction.css'; 
import IntroImage from './Images/Introduction.png'; // Renamed the image import to avoid conflict

const Introduction = () => {
  return (
    <div className="introduction-container">
      <div className="introduction-left">
        <img 
          src={IntroImage} // Use the renamed image import here
          alt="Introduction"
          className="introduction-image"
        />
      </div>
      <div className="introduction-right">
        <h2 className="introduction-title">What We Do</h2>
        <p className="introduction-text">
        Welcome to a legacy built on vision, craftsmanship, and innovation. At the heart of everything we do is a commitment to excellence and a passion for creating meaningful experiences across multiple industries. From timeless jewelry to dynamic business ventures, our world is guided by the principles of integrity, sustainability, and social responsibility. Explore our journey and the brands that shape the future.
        </p>
      </div>
    </div>
  );
}

export default Introduction;
