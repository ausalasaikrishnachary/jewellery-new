import React, { useEffect } from 'react';
import AOS from 'aos'; // Import AOS library
import 'aos/dist/aos.css'; // Import AOS styles
import { FaStore } from 'react-icons/fa'; // Import FaStore icon
import storeimg from "../Images/storeimage.webp"

const JewelSection = () => {
  // Initialize AOS animations on component mount
  useEffect(() => {
    AOS.init({
      duration: 1000, // Duration of animations
      once: false, // Trigger animations only once
      mirror: true, // Trigger animations on scroll back
    });
  }, []);

  return (
    <div>
      <section className="storebro-experience-section">
        <div className="bro-detail-box" data-aos="fade-up" data-aos-delay="200">
          <FaStore className="bro-detail-icon" data-aos="zoom-in" />
          <h4 data-aos="fade-up" data-aos-delay="300">Store Experience</h4>
          <p data-aos="fade-up" data-aos-delay="400">
            A luxurious ambiance with personalized service and exceptional customer care—an experience tailored just for you.
          </p>
        </div>
        <div className="bro-detail-image" data-aos="fade-right" data-aos-delay="500">
          <img src={storeimg} alt="Store Experience" />
        </div>
      </section>
    </div>
  );
};

export default JewelSection;
