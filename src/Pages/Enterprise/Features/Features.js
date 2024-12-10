// import React from 'react'
// import './Features.css';
// import img1 from '../Images//sadashri WRB.png'
// import img2 from '../Images/companyy ethics2.png'

// function Features() {
//   return (
//     <div className="choose-us-section">
//   <div className="choose-us-content">
//     {/* Left Side: Text and Images */}
//     <div className="left-content">
//       <div className="why-choose-us">
//         <h4>Our Company Ethics:</h4>
//         <h1>Elegance Crafted with Precision and Passion</h1>
//         <p>
//           Discover the art of fine jewelry with our exquisite pieces, crafted to perfection by skilled artisans.
//           We combine timeless design with modern techniques to create jewelry that reflects beauty, grace, and individuality.
//           Trust us to bring elegance and sophistication to your collection with each piece.
//         </p>
//       </div>

//       <div className="choose-image-gallery">
//         <img src={img1} alt="Jewelry item 1" />
//         {/* <img src={img2} alt="Jewelry item 2" /> */}
//       </div>
//     </div>

//     {/* Right Side: Features List */}
//     <div className="choose-features-list">
//       <div className="choose-feature-item">
//         <h3>•	Transparency:  <span>✔</span></h3>
//         <p>
//           Benefit from decades of experience and artistry as our jewelers bring unparalleled craftsmanship to each piece.
//         </p>
//       </div>
//       <div className="choose-feature-item">
//         <h3>•	Fairness: <span>✔</span></h3>
//         <p>
//         Ensuring equitable practices and promoting social justice.
//         </p>
//       </div>
//       <div className="choose-feature-item">
//         <h3>•	Accountability: <span>✔</span></h3>
//         <p>
//         Taking responsibility for our actions and their impacts on society and the environment.
//         </p>
//       </div>
//       <div className="choose-feature-item">
//         <h3>•	Trust: <span>✔</span></h3>
//         <p>
//         Building strong, reliable connections that stand the test of time.
//         </p>
//       </div>
//     </div>
//   </div>
// </div>

//   )
// }

// export default Features








import React, { useEffect } from 'react';
import './Features.css';
import img1 from '../Images/sadashri WRB.png';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Features() {
  // Initialize AOS on component mount
  useEffect(() => {
    AOS.init({
      duration: 1000, // Duration of animations
      once: false, // Trigger animations only once
      mirror: true, // Re-animate when scrolling back

    });
  }, []);

  return (
    <div className="choose-us-section">
      <div className="choose-us-content">
        {/* Left Side: Text and Images */}
        <div className="left-content" data-aos="fade-right">
          <div className="why-choose-us">
            <h4 data-aos="fade-up" data-aos-delay="200">Our Company Ethics:</h4>
            <h1 data-aos="fade-up" data-aos-delay="300">
              Elegance Crafted with Precision and Passion
            </h1>
            <p data-aos="fade-up" data-aos-delay="400">
              Discover the art of fine jewelry with our exquisite pieces, crafted to perfection by skilled artisans.
              We combine timeless design with modern techniques to create jewelry that reflects beauty, grace, and individuality.
              Trust us to bring elegance and sophistication to your collection with each piece.
            </p>
          </div>

          <div className="choose-image-gallery" data-aos="zoom-in" data-aos-delay="500">
            <img src={img1} alt="Jewelry item 1" />
          </div>
        </div>

        {/* Right Side: Features List */}
        <div className="choose-features-list" data-aos="fade-left">
          <div className="choose-feature-item" data-aos="zoom-in" data-aos-delay="600">
            <h3>• Transparency: <span>✔</span></h3>
            <p>
              Benefit from decades of experience and artistry as our jewelers bring unparalleled craftsmanship to each piece.
            </p>
          </div>
          <div className="choose-feature-item" data-aos="zoom-in" data-aos-delay="700">
            <h3>• Fairness: <span>✔</span></h3>
            <p>
              Ensuring equitable practices and promoting social justice.
            </p>
          </div>
          <div className="choose-feature-item" data-aos="zoom-in" data-aos-delay="800">
            <h3>• Accountability: <span>✔</span></h3>
            <p>
              Taking responsibility for our actions and their impacts on society and the environment.
            </p>
          </div>
          <div className="choose-feature-item" data-aos="zoom-in" data-aos-delay="900">
            <h3>• Trust: <span>✔</span></h3>
            <p>
              Building strong, reliable connections that stand the test of time.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;
