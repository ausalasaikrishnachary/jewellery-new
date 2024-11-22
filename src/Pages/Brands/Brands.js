import React from 'react';
import { FaGem, FaStore, FaLaptop } from 'react-icons/fa';  // Importing icons from react-icons
import './Brands.css';

const BrandsPage = () => {
  return (
    <div className="brands-page">
      <div className="container">
        <h2 className="page-title">Our Brands</h2>

        {/* Sadashri Jewels Section */}
        <section className="brand-section">
          <h3 className="brand-title">Sadashri Jewels</h3>
          <p className="brand-description">
            Sadashri Jewels is an offline jewelry store known for its timeless designs and premium craftsmanship. We bring you an exclusive collection that blends tradition with elegance.
          </p>
          
          <div className="brand-details">
            <div className="detail-box">
              <FaGem className="detail-icon" />
              <h4>Key Offerings</h4>
              <ul>
                <li>Engagement Rings</li>
                <li>Necklaces</li>
                <li>Custom Pieces</li>
                <li>Special Collections</li>
              </ul>
            </div>
            <div className="detail-box">
              <FaStore className="detail-icon" />
              <h4>Store Experience</h4>
              <p>
                A luxurious ambiance with personalized service and exceptional customer care—an experience tailored just for you.
              </p>
            </div>
            <div className="detail-box">
              <h4>Achievements & Milestones</h4>
              <p>Celebrating our anniversary with recognition for excellence and milestones in jewelry craftsmanship.</p>
            </div>
            <div className="detail-box">
              <h4>Customer Testimonials</h4>
              <p>"Sadashri Jewels provided me with the perfect engagement ring! The service was incredible!" - Emily R.</p>
            </div>
          </div>
        </section>

        {/* Sadashri Jewelkart Section */}
        <section className="brand-section">
          <h3 className="brand-title">Sadashri Jewelkart</h3>
          <p className="brand-description">
            Sadashri Jewelkart is your go-to online jewelry marketplace, offering a wide variety of jewelry for all occasions, from bridal to casual wear.
          </p>

          <div className="brand-details">
            <div className="detail-box">
              <FaGem className="detail-icon" />
              <h4>Key Offerings</h4>
              <ul>
                <li>Bridal Jewelry</li>
                <li>Casual Wear</li>
                <li>Fine Jewelry</li>
                <li>Customizable Pieces</li>
              </ul>
            </div>
            <div className="detail-box">
              <FaLaptop className="detail-icon" />
              <h4>User Experience</h4>
              <p>
                Enjoy a seamless shopping experience with features like virtual try-ons and online customization tools.
              </p>
            </div>
            <div className="detail-box">
              <h4>Innovations & Product Launches</h4>
              <p>Discover our newest collections and online-exclusive designs. Always pushing the boundaries of jewelry design.</p>
            </div>
            <div className="detail-box">
              <h4>Success Stories</h4>
              <p>"I found my dream bridal set on Sadashri Jewelkart. The convenience and variety were unmatched!" - Priya S.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default BrandsPage;
