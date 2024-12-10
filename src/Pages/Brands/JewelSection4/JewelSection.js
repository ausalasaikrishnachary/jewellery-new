import React, { useEffect } from 'react';
import AOS from 'aos'; // Import AOS library
import 'aos/dist/aos.css'; // Import AOS styles
import { FaStore } from 'react-icons/fa'; // Import your icon
import custimg from "../Images/custestimg.webp"


const JewelSection = () => {
  // Initialize AOS on component mount
  useEffect(() => {
    AOS.init({
      duration: 1000, // Duration of the animations
      once: false, // Trigger animation once
      mirror: true, // Trigger animation when scrolling back up
    });
  }, []);

  return (
    <div>
      <section className="storebro-experience-section">
        <div
          className="bro-detail-box"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <FaStore className="bro-detail-icon" data-aos="fade-down" />
          <h4 data-aos="fade-left">Customer Testimonials</h4>
          <p data-aos="fade-left" data-aos-delay="400">
            "Sadashri Jewels provided me with the perfect engagement ring! The
            service was incredible!" - Emily R.
          </p>
        </div>
        <div className="bro-detail-image" data-aos="fade-right">
          <img src={custimg}  alt="Store Experience" />
        </div>
      </section>
    </div>
  );
};

export default JewelSection;
