import React, { useEffect } from 'react';
import './HomeCallToAction.css';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

const HomeCallToAction = () => {
  // Initialize AOS on component mount
  useEffect(() => {
    AOS.init({
      duration: 1000, // Duration of the animation
      once: false, // Animation occurs every time the element comes into view
      mirror: true, // Ensures animation happens when scrolling back up as well
    });
  }, []);

  return (
    <section className="home-call-to-action">
      <h2
        className="home-call-to-action-heading"
        data-aos="fade-up"
        data-aos-duration="1500"
      >
        Discover the legacy, explore the ventures, and find the perfect pieces that reflect your aspirations.
      </h2>
      <div className="home-call-to-action-cards">
        <div
          className="home-call-to-action-card"
          data-aos="fade-up"
          data-aos-duration="1500"
          data-aos-delay="200"
        >
          <p>Meet the Family Behind the Vision</p>
          <a
            href="https://seller.sadashrijewelkart.com/register/user"
            className="home-call-to-action-button"
            data-aos="zoom-in"
            data-aos-delay="300"
          >
            Learn More
          </a>
        </div>
        <div
          className="home-call-to-action-card"
          data-aos="fade-up"
          data-aos-duration="1500"
          data-aos-delay="400"
        >
          <p>Explore Our Corporate Ventures</p>
          <a
            href="https://www.google.com/search?sca_esv=41165fec71bc817d&tbm=lcl&sxsrf=ADLYWIKOX4aYa3XQpECyi6Aq8a2tVnJQPw:1732715013380&q=Building+No./Flat+No.:+NO+1323/1324,+16TH+B+CROSS+HOUSING+BOARD+COLONY+EWS+3RD+PHASE,+Yelahanka+New+Town,+Bengaluru,+Karnataka-560064&rflfq=1&num=10&sa=X&ved=2ahUKEwi-9vm20vyJAxX-umMGHV4WKnIQtgN6BAgZEAM&biw=1536&bih=695&dpr=1.25#rlfi=hd:;si:;mv:[[13.1224359,77.6096748],[13.0847277,77.55625510000002]];tbs:lrf:!1m4!1u3!2m2!3m1!1e1!1m4!1u2!2m2!2m1!1e1!2m1!1e2!2m1!1e3!3sIAE,lf:1,lf_ui:2"
            className="home-call-to-action-button"
            data-aos="zoom-in"
            data-aos-delay="500"
          >
            Learn More
          </a>
        </div>
        <div
          className="home-call-to-action-card"
          data-aos="fade-up"
          data-aos-duration="1500"
          data-aos-delay="600"
        >
          <p>Shop Sadashri Jewels</p>
          <a
            href="https://stage.sadashrijewelkart.com/signup"
            className="home-call-to-action-button"
            data-aos="zoom-in"
            data-aos-delay="700"
          >
            Shop Now
          </a>
        </div>
        <div
          className="home-call-to-action-card"
          data-aos="fade-up"
          data-aos-duration="1500"
          data-aos-delay="800"
        >
          <p>Discover Sadashri Jewelkart</p>
          <a
            href="https://www.sadashrijewelkart.com"
            target="_blank"
            rel="noopener noreferrer"
            className="home-call-to-action-button"
            data-aos="zoom-in"
            data-aos-delay="900"
          >
            Visit Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default HomeCallToAction;
