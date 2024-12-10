import React, { useEffect } from 'react';
import AOS from 'aos'; // Import AOS library
import 'aos/dist/aos.css'; // Import AOS styles
import web from '../Images/websitebanner.png';
import about2 from '../Images/PURPOSE SAD WEB.png';

const First = () => {
  // Initialize AOS on component mount
  useEffect(() => {
    AOS.init({
      duration: 1000, // Duration of animations
      once: false, // Animations trigger only once
      mirror: true, // Avoid triggering animations on scroll back
    });
  }, []);

  return (
    <div className="about-us" style={{ paddingTop: "60px" }}>
      {/* Banner Image */}
      <div className="ab_image-container" data-aos="fade-down">
        <img src={web} alt="Home" className="ab_responsive-image" />
      </div>

      {/* Legacy Section */}
      <section className="legacy-section">
        {/* Infographic Image */}
        <div className="legacy-infographic" data-aos="fade-right">
          <img
            src={about2}
            alt="Infographic Timeline"
            className="infographic-image"
          />
        </div>

        {/* Legacy Content */}
        <div className="legacy-content" data-aos="fade-left">
          <h2 className="legacy-title">OUR LEGACY</h2>
          <p className="legacy-introduction">
            Our family’s legacy is woven through generations, where each story
            told carried wisdom that shaped the decisions of today.
          </p>
          <p className="legacy-introduction">
            The stories were more than just tales—they were lessons, guiding
            principles passed down from one generation to the next.
          </p>
          <p className="legacy-introduction">
            These lessons are the foundation of everything we do at Sadashri
            Ventures.
          </p>
        </div>
      </section>
    </div>
  );
};

export default First;
