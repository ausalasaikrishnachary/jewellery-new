import React from 'react';
import './Benefits.css'; 
function Benefits() {
  return (
    <div>
      <div className="benefits-section-user">
        <h2>Why Choose Our Jewelry Platform?</h2>

        {/* Advantages */}
        <div className="benefits-content-user">
          <div className="benefit-item-user">
            <h3>Certified Hallmarking</h3>
            <p>Enjoy peace of mind with certified hallmarking on all jewelry, guaranteeing quality and authenticity.</p>
          </div>
          <div className="benefit-item-user">
            <h3>Pure Gold Assurance</h3>
            <p>Our platform ensures only high-purity gold, so you can trust in the value of your jewelry purchases.</p>
          </div>
          <div className="benefit-item-user">
            <h3>Exclusive Offers & Schemes</h3>
            <p>Benefit from exclusive seasonal offers and gold-saving schemes designed to make luxury more affordable.</p>
          </div>
        </div>

        {/* Statistics */}
        <div className="statistics-user">
          <h3>Trusted by Thousands of Buyers</h3>
          <div className="stats-cards-user">
            <div className="stats-card-user">
              <h4>98%</h4>
              <p>Customer Satisfaction</p>
            </div>
            <div className="stats-card-user">
              <h4>500+</h4>
              <p>Jewelry Styles Available</p>
            </div>
            <div className="stats-card-user">
              <h4>1K+</h4>
              <p>Gold-Saving Scheme Subscribers</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Benefits
