import React, { useEffect } from 'react';
import { FaStore } from 'react-icons/fa';
import AOS from 'aos'; // Import AOS library
import 'aos/dist/aos.css'; // Import AOS styles
import innov from '../Images/innovateimg.jpg'

const StoreExperience = () => {
  // Initialize AOS on component mount
  useEffect(() => {
    AOS.init({
      duration: 1000, // Duration of the animation
      once: false, // Animation triggers once
      mirror: true, // Mirror animation when scrolling back up
    });
  }, []);

  return (
    <section className="storebro-experience-section">
      <div className="bro-detail-image" data-aos="fade-right">
        <img src={innov} alt="Store Experience" />
      </div>
      <div className="bro-detail-box" data-aos="fade-left" data-aos-delay="200">
        <FaStore className="bro-detail-icon" data-aos="zoom-in" />
        <h4 data-aos="fade-up" data-aos-delay="300">
          Innovations & Product Launches
        </h4>
        <p data-aos="fade-up" data-aos-delay="400">
          Discover our newest collections and online-exclusive designs. Always pushing the boundaries of jewelry design.
        </p>
      </div>
    </section>
  );
};

export default StoreExperience;
