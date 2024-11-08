import React from 'react';
import './Overview.css';
import { Link } from 'react-router-dom';

function Overview() {
  return (
    <div>
      <img className='img1' src="https://www.kalyanjewellers.net/images/banners/gold_banner.jpg" alt="Banner" />
      <div className="introduction-container">
      <div className="introduction-section">
        {/* Left Section: Images and Experience */}
        <div className="introduction-left">
          <img src="https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dw3a5962fa/homepage/shopByCategory/festive-ring.jpg" className="introduction-large-img" />
          <div className="introduction-small-images">
            <img src="https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dwebf0313b/homepage/shopByCategory/fod-gold-coins.jpg" alt="physiotherapy Image 2" className="introduction-small-img" />
            <img src="https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dw93d4f93a/homepage/shopByCategory/festive-bangle.jpg" alt="physiotherapy Image 3" className="introduction-small-img" />
          </div>
        </div>

        {/* Right Section: Content */}
        <div className="introduction-content">
  <h4>ABOUT US</h4>
  <h1>Crafting Timeless Beauty through Custom Jewelry</h1>
  <p>
    At our atelier, we specialize in crafting timeless beauty through custom jewelry designs that reflect elegance and personal style.
  </p>
  <p>
    Our dedicated artisans blend traditional craftsmanship with modern techniques, creating pieces that embody luxury and uniqueness for every individual.
  </p>
  <div className="introduction-features">
    <div className="introduction-feature-item">
      {/* <span role="img" aria-label="Checkmark">✅</span> */}
      <h3>Expert Craftsmanship</h3>
      <p>
        With years of experience in jewelry making, our team is committed to delivering exquisite, high-quality pieces tailored to your desires.
      </p>
    </div>
    <div className="introduction-feature-item">
      {/* <span role="img" aria-label="Checkmark">✅</span> */}
      <h3>Personalized Designs</h3>
      <p>
        Our approach centers around personalized design, ensuring that each piece captures your individuality and becomes a cherished symbol of beauty.
      </p>
    </div>
  </div>
  {/* Update the button to be a Link */}
  <Link to="/about">
    <button className="introduction-about-btn">More About Us</button>
  </Link>
</div>

      </div>
    </div>
    </div>
  );
}

export default Overview;
