import React, { useEffect } from 'react';
import 'aos/dist/aos.css'; // Import AOS styles
import AOS from 'aos'; // Import AOS library
import './ProductQuality.css'; // Import the CSS for styling

const ProductQuality = () => {
  // Initialize AOS on component mount
  useEffect(() => {
    AOS.init({
      duration: 1000, // Duration of the animation
      once: false, // Ensure the animation happens every time the element is visible
      mirror: true, // Ensure the animation occurs when scrolling back up
    });

    // Add a scroll event listener to refresh AOS on scroll
    const handleScroll = () => {
      AOS.refresh(); // Refresh AOS to re-trigger animations
    };

    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section className="product-quality-section">
      <div className="product-quality-container">
        <h1 className="product-quality-heading" data-aos="fade-up">
          Our Vision for the Future
        </h1>
        <p className="product-quality-para" data-aos="fade-up" data-aos-delay="200">
          At the heart of our mission is a commitment to creating meaningful impact. We aim to empower people through beautiful, sustainable products and forward-thinking business practices. Each of our ventures, from jewelry to investments, is designed to uplift communities, foster growth, and ensure a better tomorrow.
        </p>
        <div className="product-quality-content">
          {/* Left Card */}
          <div className="product-quality-card left" data-aos="fade-right">
            <h2 className="product-quality-heading-card">
              Guided by Purpose, Driven by Passion
            </h2>
            <p className="product-quality-para">
              Discover how our ventures align with a future of innovation, sustainability, and empowerment.
            </p>
            <p className="Read-more">Read more...</p>
          </div>

          {/* Right Card */}
          <div className="product-quality-card right" data-aos="fade-left">
            <h2 className="product-quality-heading-card">Our Brands:</h2>
            <p className="product-quality-para">
              From Sadashri Jewels' timeless beauty to Sadashri Jewelkart's convenience, our brands embody quality, innovation, and passion.
            </p>
            <p className="Read-more">Read more...</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductQuality;
