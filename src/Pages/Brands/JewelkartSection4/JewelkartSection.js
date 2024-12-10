import React, { useEffect } from 'react';
import { FaStore } from 'react-icons/fa';
import AOS from 'aos'; // Import AOS library
import 'aos/dist/aos.css'; // Import AOS styles
import storepic from '../Images/successsimg.jpg'

const StoreExperience = ({ busi }) => {
  // Initialize AOS on component mount
  useEffect(() => {
    AOS.init({
      duration: 1000, // Duration of the animation
      once: false, // Trigger animation only once
      mirror: true, // Trigger animations when scrolling back up
    });
  }, []);

  return (
    <section className="storebro-experience-section">
      <div
        className="bro-detail-box"
        data-aos="fade-right" // Add fade-right animation
        data-aos-delay="200" // Stagger delay for smooth animation
      >
        <FaStore className="bro-detail-icon" data-aos="zoom-in" />
        <h4 data-aos="fade-up">Success Stories</h4>
        <p data-aos="fade-up" data-aos-delay="400">
          "I found my dream bridal set on Sadashri Jewelkart. The convenience and
          variety were unmatched!" - Priya S.
        </p>
      </div>
      <div
        className="bro-detail-image"
        data-aos="fade-left" // Add fade-left animation
        data-aos-delay="600" // Delay to match the previous animation
      >
        <img src={storepic} alt="Store Experience" />
      </div>
    </section>
  );
};

export default StoreExperience;
