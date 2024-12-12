import React, { useEffect } from "react";
import "./LatestUpdate.css";
import bgImage from "./Images/Latest News & Updates.jpg"; // Adjust the path as needed
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

const LatestUpdate = () => {
  // Initialize AOS on component mount
  useEffect(() => {
    AOS.init({
      duration: 1000, // Duration of the animation
      once: false, // Ensure the animation happens every time the element is visible
      mirror: true, // Ensure the animation occurs when scrolling back up
    });
  }, []);

  return (
    <div
      className="LatestUpdate-card"
      style={{ backgroundImage: `url(${bgImage})` }}
      data-aos="fade-up" // Animation on scroll
    >
      <h2 data-aos="fade-out">Latest News & Updates</h2>
      <p data-aos="fade-out" data-aos-delay="200">
        Stay up-to-date with our latest milestones, exciting partnerships, and
        new product launches. We’re always evolving, and there’s always
        something new to share.
      </p>
      <div className="LatestUpdate-points" data-aos="fade-left" data-aos-delay="400">
        <p>
          <strong>1. New Brand Launch:</strong> Sadashri Jewelkart has just launched
          its new online collection! Explore our{" "}
          <span className="Brand-aligment">exclusive designs today.</span>
        </p>
        <p>
          <strong>2. Sustainability Commitment:</strong> We’ve implemented
          cutting-edge sustainable practices across all of{" "}
          <span className="Brand-aligment">our brands. Learn how we’re reducing our environmental footprint.</span>
        </p>
      </div>
    </div>
  );
};

export default LatestUpdate;
