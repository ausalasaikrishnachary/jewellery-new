import React, { useEffect } from 'react';
import AOS from 'aos'; // Import AOS library
import 'aos/dist/aos.css'; // Import AOS styles
import { FaStore } from 'react-icons/fa'; // Assuming you are using this icon
import achimg from "../Images/achieveimage.jpg"

const JewelSection = () => {
  // Initialize AOS on component mount
  useEffect(() => {
    AOS.init({
      duration: 1000, // Duration of the animations
      once: false, // Trigger animations only once
      mirror: true, // Trigger animations on scroll back
    });
  }, []);

  return (
    <div>
      <section className="storebro-experience-section">
        <div className="bro-detail-image" data-aos="fade-left">
          <img src={achimg} alt="Store Experience" />
        </div>
        <div className="bro-detail-box" data-aos="fade-right" data-aos-delay="200">
          <FaStore className="bro-detail-icon" />
          <h4>Achievements & Milestones</h4>
          <p>Celebrating our anniversary with recognition for excellence and milestones in jewelry craftsmanship.</p>
        </div>
      </section>
    </div>
  );
};

export default JewelSection;
