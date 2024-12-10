import React, { useEffect } from "react";
import AOS from "aos"; // Import AOS library
import "aos/dist/aos.css"; // Import AOS styles
import about3 from '../Images/Empowering Communities.jpg';
import about4 from '../Images/Ethical Leadership Commitment.jpg';
import about5 from '../Images/Impacting Society.jpg';
const OurVision = () => {
  // Initialize AOS animations on component mount
  useEffect(() => {
    AOS.init({
      duration: 1000, // Duration of animations in milliseconds
      once: false, // Ensure the animation happens only once
      mirror: true, // Enable animations on scroll back
    });
  }, []);

  return (
    <div>
      <section className="sec-4-vision-section">
        <div className="sec-4-container">
          <h2
            className="sec-4-vision-title"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Our Vision: A Better Tomorrow, Today
          </h2>
          <p
            className="sec-4-vision-subtitle"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            More Than a Business—A Mission to Create Impact
          </p>
          <div
            className="sec-4-vision-content"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <p>
              Our vision extends beyond profit.{" "}
              <strong className="strongtext">Sadashri Ventures</strong> is
              founded on the belief that businesses should enhance society, not
              just take from it. We strive to create a balance between progress
              and preservation—ensuring that every venture we undertake
              contributes to the well-being of the communities we serve.
            </p>
          </div>

          <h3
            className="sec-4-pillars-title"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            The Pillars of Our Vision
          </h3>
          <div className="sec-4-pillars">
            <div
              className="sec-4-pillar"
              data-aos="fade-right"
              data-aos-delay="500"
            >
              <img
                src={about3}
                alt="Empowering Communities"
                className="pillar-image"
              />
              <h4>Empowering Communities</h4>
              <p>
                We believe in fostering growth that elevates the communities
                around us, creating value for both present and future
                generations.
              </p>
            </div>
            <div
              className="sec-4-pillar"
              data-aos="fade-up"
              data-aos-delay="600"
            >
              <img
                src={about4}
                alt="Ethical Leadership"
                className="pillar-image"
              />
              <h4>Ethical Leadership Commitment</h4>
              <p>
                We lead with transparency, integrity, and a deep sense of
                responsibility for our people, the environment, and society at
                large.
              </p>
            </div>
            <div
              className="sec-4-pillar"
              data-aos="fade-left"
              data-aos-delay="700"
            >
              <img
                src={about5}
                alt="Impacting Society"
                className="pillar-image"
              />
              <h4>Impacting Society</h4>
              <p>
                The future is shaped by how we invest in it today. Our focus is
                on fostering growth that uplifts entire communities.
              </p>
            </div>
          </div>
        </div>
      </section>
      <div
        className="sec-5-cta-section"
        data-aos="fade-in"
        data-aos-delay="800"
      ></div>
    </div>
  );
};

export default OurVision;
