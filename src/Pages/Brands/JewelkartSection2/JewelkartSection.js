import React, { useEffect } from "react";
import { FaStore } from "react-icons/fa"; // Make sure to import the FaStore icon
import AOS from "aos"; // Import AOS library
import "aos/dist/aos.css"; // Import AOS styles
import userexp from '../Images/userexpimag.jpg'

const StoreExperience = () => {
  // Initialize AOS animations on component mount
  useEffect(() => {
    AOS.init({
      duration: 1000, // Duration of the animations
      once: false, // Trigger animations only once
      mirror: true, // Trigger animations on scroll back up
    });
  }, []);

  return (
    <section className="storebro-experience-section">
      <div className="bro-detail-box" data-aos="fade-up" data-aos-delay="200">
        <FaStore className="bro-detail-icon" data-aos="zoom-in" data-aos-delay="100" />
        <h4 data-aos="fade-up" data-aos-delay="300">User Experience</h4>
        <p data-aos="fade-up" data-aos-delay="400">
          Enjoy a seamless shopping experience with features like virtual try-ons and online customization tools.
        </p>
      </div>
      <div className="bro-detail-image" data-aos="fade-left" data-aos-delay="500">
        <img src={userexp} alt="Store Experience" />
      </div>
    </section>
  );
};

export default StoreExperience;
