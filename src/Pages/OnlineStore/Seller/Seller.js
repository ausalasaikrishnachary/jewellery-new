import React from 'react';
import pic1 from './Images/g-n1.jpeg';
import pic2 from './Images/g-e.webp';
import pic3 from './Images/g-b.png';
import pic4 from './Images/g-r.jpeg';
import pic5 from './Images/g-p.jpeg';
import pic6 from './Images/feat-image.jpg';



import './Seller.css'; // Import a separate CSS file for better styling

function Seller() {

  const handleRegisterClick = () => {
    window.location.href = 'https://seller-ecommerce-website.com/register'; // Replace with the actual URL of your registration page
  };
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
        <p>If you have a jewellery business, you can sell your products through our website. For more details, contact us or register here to start selling:</p>
        <button className="cta-button" onClick={handleRegisterClick}>
          Register Here
        </button>
      </div>


      {/* Features Section */}
      <div className="features-section">
        <div className="features-left">
          <h2>Why Sell Your Jewellery With Us?</h2>
          <ul className="features-list">
            <li>🌟 High-quality, certified jewellery sourced from trusted suppliers</li>
            <li>🔒 Secure payments and transactions to ensure peace of mind</li>
            <li>🚚 Free shipping on all orders, directly to your customers</li>
            <li>📈 Access to a vast customer base, increasing your sales opportunities</li>
            <li>💎 Expert marketing support to help your products stand out</li>
          </ul>
        </div>
        <div className="features-right">
          <img src={pic6} alt="Jewellery Display" />
        </div>
      </div>



      {/* Benefits Section */}
      <div className="benefits-section">
        <h2>Why Sell on Our Platform?</h2>

        {/* Advantages */}
        <div className="benefits-content">
          <div className="benefit-item">
            <h3>Reach a Wider Audience</h3>
            <p>Connect with customers from across the globe, increasing your reach and sales potential.</p>
          </div>
          <div className="benefit-item">
            <h3>Increase Your Sales</h3>
            <p>Our platform is optimized to help your jewellery stand out, helping boost sales by up to 40%.</p>
          </div>
          <div className="benefit-item">
            <h3>Hassle-Free Management</h3>
            <p>Manage your inventory, orders, and payments effortlessly with our intuitive interface.</p>
          </div>
        </div>

        {/* Testimonials */}
        <div className="testimonials">
          <h3>What Our Sellers Say</h3>
          <div className="testimonial-cards">
            <div className="testimonial-card">
              <p>"Selling on this platform has been a game changer for my business. I've reached customers I never could have before!"</p>
              <strong>- Sarah L., Jewellery Designer</strong>
            </div>
            <div className="testimonial-card">
              <p>"The sales have been incredible since I started using this platform. It's easy to manage and the support is fantastic."</p>
              <strong>- John D., Jewellery Seller</strong>
            </div>
          </div>
        </div>

        {/* Statistics */}
        <div className="statistics">
          <h3>Platform Success at a Glance</h3>
          <div className="stats-cards">
            <div className="stats-card">
              <h4>40%</h4>
              <p>Increase in Sales</p>
            </div>
            <div className="stats-card">
              <h4>200+</h4>
              <p>Successful Sellers</p>
            </div>
            <div className="stats-card">
              <h4>5K+</h4>
              <p>Jewellery Products Sold</p>
            </div>
          </div>
        </div>


      </div>
    </div>
  );
}

export default Seller;
