import React from 'react'
import './Features.css';

function Features() {
  return (
    <div className="choose-us-section">
  <div className="choose-us-content">
    {/* Left Side: Text and Images */}
    <div className="left-content">
      <div className="why-choose-us">
        <h4>FEATURES</h4>
        <h1>Elegance Crafted with Precision and Passion</h1>
        <p>
          Discover the art of fine jewelry with our exquisite pieces, crafted to perfection by skilled artisans.
          We combine timeless design with modern techniques to create jewelry that reflects beauty, grace, and individuality.
          Trust us to bring elegance and sophistication to your collection with each piece.
        </p>
      </div>

      <div className="choose-image-gallery">
        <img src="https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dw6cdc8e02/homepage/shopByCategory/festive-mangalsutra.jpg" alt="Jewelry item 1" />
        <img src="https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dw6cdc8e02/homepage/shopByCategory/festive-mangalsutra.jpg" alt="Jewelry item 2" />
      </div>
    </div>

    {/* Right Side: Features List */}
    <div className="choose-features-list">
      <div className="choose-feature-item">
        <h3>Master Craftsmanship <span>✔</span></h3>
        <p>
          Benefit from decades of experience and artistry as our jewelers bring unparalleled craftsmanship to each piece.
        </p>
      </div>
      <div className="choose-feature-item">
        <h3>Customized Designs <span>✔</span></h3>
        <p>
          Our personalized approach ensures that each piece is uniquely crafted to match your style and preferences.
        </p>
      </div>
      <div className="choose-feature-item">
        <h3>Ethically Sourced Materials <span>✔</span></h3>
        <p>
          We are committed to using ethically sourced and sustainable materials, ensuring quality and responsibility.
        </p>
      </div>
      <div className="choose-feature-item">
        <h3>Exceptional Service <span>✔</span></h3>
        <p>
          Enjoy a warm, welcoming experience with our professional team, dedicated to helping you find the perfect piece.
        </p>
      </div>
    </div>
  </div>
</div>

  )
}

export default Features
