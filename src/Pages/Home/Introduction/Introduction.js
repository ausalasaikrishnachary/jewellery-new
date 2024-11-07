import React from 'react';
import './Introduction.css'; 
import IntroImage from './Images/Introduction.jpg'; // Renamed the image import to avoid conflict

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
        Sadasri Jewelry provides an all-in-one platform designed to streamline and optimize both the offline and online operations of jewelry businesses. With a deep understanding of the jewelry industry’s unique challenges, we offer a solution that seamlessly integrates your in-store and eCommerce systems. From efficient point-of-sale and inventory management tools to a fully customizable online store, our platform empowers jewelry retailers to enhance their business processes, increase sales, and improve customer satisfaction. Whether you're a boutique store or a larger chain, Sadasri Jewelry offers scalable and secure solutions that help you grow your brand while maintaining an exceptional customer experience at every touchpoint.
        </p>
      </div>
    </div>
  );
}

export default Introduction;
