import React, { useEffect } from 'react';
import AOS from 'aos'; // Import AOS library
import 'aos/dist/aos.css'; // Import AOS styles
// import './GenWisdom.css'; 

const GenWisdom = () => {
  // Initialize AOS animations
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: false, // Ensure animations trigger only once
      mirror: true, // Trigger animations on scroll back
    });
  }, []);

  return (
    <div>
      <section className="sec-3-generational-wisdom">
        <div className="sec-3-container">
          {/* Section Title */}
          <h2
            className="sec-3-section-title"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            How Generational Wisdom Shapes Our Present
          </h2>
          <p
            className="sec-3-section-description"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            Over time, the wisdom of our elders has grown into a clear, resolute
            voice. What began as stories around a fire has now evolved into a
            living, breathing mission. Each generation, while embracing modern
            innovation, honors the core principles passed down:
          </p>

          {/* Principles List */}
          <div className="sec-3-principles-list">
            <div
              className="sec-3-principle"
              data-aos="fade-right"
              data-aos-delay="300"
            >
              <span className="sec-3-icon">💎</span>
              <h3>Preserving Society’s Strength</h3>
            </div>
            <div
              className="sec-3-principle"
              data-aos="fade-right"
              data-aos-delay="500"
            >
              <span className="sec-3-icon">✨</span>
              <h3>Building a Balanced Future</h3>
            </div>
            <div
              className="sec-3-principle"
              data-aos="fade-right"
              data-aos-delay="700"
            >
              <span className="sec-3-icon">🌟</span>
              <h3>Uplifting Communities and Driving Innovation</h3>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GenWisdom;
