import React from 'react';
import pic1 from './Images/g-n1.jpeg';
import pic2 from './Images/g-e.webp';
import pic3 from './Images/g-b.png';
import pic4 from './Images/g-r.jpeg';
import pic5 from './Images/g-p.jpeg';


import './Seller.css'; // Import a separate CSS file for better styling

function Seller() {
  return (
    <div className="seller-container">
      <div className="seller-banner">
        <div className="banner-text">
          <h1>Become a Jewellery Seller</h1>
          <p>Join our platform and reach thousands of jewellery lovers worldwide. Showcase your stunning collections and grow your business effortlessly.</p>
        </div>
      </div>
        {/* Gold Products Section */}
        <div className="gold-products-section">
        <h2>Featured Gold Products</h2>
        <div className="cards-container">
          <div className="product-card">
            <img src={pic1} alt="Gold Necklace" />
            <h3>Gold Necklace</h3>
            <p>Elegant 22k gold necklace perfect for special occasions.</p>
          </div>
          <div className="product-card">
            <img src={pic2} alt="Gold Earrings" />
            <h3>Gold Earrings</h3>
            <p>Beautifully crafted gold earrings with intricate details.</p>
          </div>
          <div className="product-card">
            <img src={pic3} alt="Gold Bracelet" />
            <h3>Gold Bracelet</h3>
            <p>Stylish 18k gold bracelet that complements any outfit.</p>
          </div>
          <div className="product-card">
            <img src={pic4} alt="Gold Ring" />
            <h3>Gold Bracelet</h3>
            <p>Stylish 18k gold bracelet that complements any outfit.</p>
          </div>
          <div className="product-card">
            <img src={pic5} alt="Gold Pendant" />
            <h3>Gold Bracelet</h3>
            <p>Stylish 18k gold bracelet that complements any outfit.</p>
          </div>
        </div>
      </div>
       {/* CTA Section */}
       <div className="cta-section">
        <button className="cta-button">Register Now</button>
      </div>
    </div>
  );
}

export default Seller;
