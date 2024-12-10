import React, { useEffect } from "react";
import AOS from "aos"; // Import AOS library
import "aos/dist/aos.css"; // Import AOS styles
// import "./Wisdom.css"; 
import about1 from '../Images/grandma.png'


const Wisdom = () => {
  // Initialize AOS animations on component mount
  useEffect(() => {
    AOS.init({
      duration: 1000, // Duration of the animations
      once: false, // Trigger animations only once
      mirror: true, // Trigger animations on scroll back
    });
  }, []);

  return (
    <div>
      {/* Wisdom Section */}
      <div
        className="sec-2-wisdom-section"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <h2 className="sec-2-section-title">The Wisdom of Our Elders</h2>
        <h3 className="sec-2-section-subtitle">
          Guiding Principles for a Better Tomorrow
        </h3>
        <blockquote
          className="sec-2-wisdom-quote"
          data-aos="fade-right"
          data-aos-delay="300"
        >
          "The future is shaped by the choices we make today."
        </blockquote>
      </div>

      <div className="content-wrapper">
        {/* Text Section */}
        <div className="text-section" data-aos="fade-left" data-aos-delay="400">
          <ul className="sec-2-wisdom-points">
            <li>
              For generations, our elders believed that society’s strength
              depended on the choices made in the present.
            </li>
            <li>
              They spoke of community, balance, and responsibility,
              understanding that these decisions would shape the future.
            </li>
            <li>
              This powerful belief has been the backbone of our family’s mission
              and remains at the core of Sadashri Ventures today.
            </li>
            <li>
              Our family has always prioritized community health, prosperity,
              and environmental stability in our decisions.
            </li>
            <li>
              These values guide us in shaping a better world for future
              generations.
            </li>
          </ul>
        </div>

        {/* Image Section */}
        <div className="image-section" data-aos="zoom-in" data-aos-delay="500">
          <img
            src={about1}
            alt="Related to the content"
            className="wisdom-image"
          />
        </div>
      </div>
    </div>
  );
};

export default Wisdom;
