import React from 'react';
import './HomeCallToAction.css';

const HomeCallToAction = () => {
  return (
    <section className="home-call-to-action">
      <h2 className="home-call-to-action-heading">
        Discover the legacy, explore the ventures, and find the perfect pieces that reflect your aspirations.
      </h2>
      <div className="home-call-to-action-cards">
        <div className="home-call-to-action-card">
          <p>Meet the Family Behind the Vision</p>
          <a href="#" className="home-call-to-action-button">
            Learn More
          </a>
        </div>
        <div className="home-call-to-action-card">
          <p>Explore Our Corporate Ventures</p>
          <a href="#" className="home-call-to-action-button">
            Learn More
          </a>
        </div>
        <div className="home-call-to-action-card">
          <p>Shop Sadashri Jewels</p>
          <a href="@location" className="home-call-to-action-button">
            Shop Now
          </a>
        </div>
        <div className="home-call-to-action-card">
          <p>Discover Sadashri Jewelkart</p>
          <a
            href="https://www.sadashrijewelkart.com"
            target="_blank"
            rel="noopener noreferrer"
            className="home-call-to-action-button"
          >
            Visit Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default HomeCallToAction;
