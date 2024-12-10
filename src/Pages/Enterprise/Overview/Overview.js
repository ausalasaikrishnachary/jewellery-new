// import React from 'react';
// import './Overview.css';
// import { Link } from 'react-router-dom';
// import img1 from '../Images/running the cpmny with ethics.png'
// import img2 from '../Images/running the cpmny with ethics 2.png'
// import img3 from '../Images/running the cpmny with ethics 3.png'

// function Overview() {
//   return (
//     <div>
//       <div className="introduction-container">
//         <div className="introduction-section">
//           {/* Left Section: Images and Experience */}
//           <div className="introduction-left">
//             <img src={img1} className="introduction-large-img" />
//             <div className="introduction-small-images">
//               <img src={img2} alt="physiotherapy Image 2" className="introduction-small-img" />
//               <img src={img3} alt="physiotherapy Image 3" className="introduction-small-img" />
//             </div>
//           </div>

//           {/* Right Section: Content */}
//           <div className="introduction-content">
//             {/* <h4>ABOUT US</h4> */}
//             <h1>Running the Company with Ethics, Integrity, and Responsibility</h1>
//             <p>
//               At Sadashri Ventures, we are committed to running our business with the highest standards of ethics and integrity. Our relationship with society is built on trust, transparency, and accountability. We strive to create an environment where innovation thrives but always in a way that honors our roots and uplifts the greater good.
//             </p>
//             <p>
//               [Visual: Icon Box featuring icons like a handshake (ethics), a heart (integrity), and a globe (responsibility).]
//             </p>
//             <div className="introduction-features">
//               <div className="introduction-feature-item">
//                 {/* <span role="img" aria-label="Checkmark">✅</span> */}
//                 <h3>Expert Craftsmanship</h3>
//                 <p>
//                   With years of experience in jewelry making, our team is committed to delivering exquisite, high-quality pieces tailored to your desires.
//                 </p>
//               </div>
//               <div className="introduction-feature-item">
//                 {/* <span role="img" aria-label="Checkmark">✅</span> */}
//                 <h3>Personalized Designs</h3>
//                 <p>
//                   Our approach centers around personalized design, ensuring that each captures your individuality becomes symbol of beauty.
//                 </p>
//               </div>
//             </div>
//             {/* Update the button to be a Link */}
//             <Link to="https://stage.sadashrijewelkart.com/signup">
//               <button className="introduction-about-btn">Register Here
//               </button>
//             </Link>
//           </div>

//         </div>
//       </div>
//     </div>
//   );
// }

// export default Overview;











import React, { useEffect } from 'react';
import './Overview.css';
import { Link } from 'react-router-dom';
import img1 from '../Images/running the cpmny with ethics.png';
import img2 from '../Images/running the cpmny with ethics 2.png';
import img3 from '../Images/running the cpmny with ethics 3.png';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Overview() {
  // Initialize AOS on component mount
  useEffect(() => {
    AOS.init({
      duration: 1000, // Duration of animations
      once: false, // Trigger animations only once
      mirror: true, // Allow animations when scrolling back
    });
  }, []);

  return (
    <div>
      <div className="introduction-container">
        <div className="introduction-section">
          {/* Left Section: Images and Experience */}
          <div
            className="introduction-left"
            data-aos="fade-right"
            data-aos-delay="200"
          >
            <img src={img1} className="introduction-large-img" alt="Large" />
            <div className="introduction-small-images">
              <img
                src={img2}
                alt="Small 1"
                className="introduction-small-img"
                data-aos="fade-up"
                data-aos-delay="300"
              />
              <img
                src={img3}
                alt="Small 2"
                className="introduction-small-img"
                data-aos="fade-up"
                data-aos-delay="400"
              />
            </div>
          </div>

          {/* Right Section: Content */}
          <div
            className="introduction-content"
            data-aos="fade-left"
            data-aos-delay="300"
          >
            <h1>Running the Company with Ethics, Integrity, and Responsibility</h1>
            <p data-aos="fade-up" data-aos-delay="400">
              At Sadashri Ventures, we are committed to running our business with
              the highest standards of ethics and integrity. Our relationship with
              society is built on trust, transparency, and accountability. We
              strive to create an environment where innovation thrives but always
              in a way that honors our roots and uplifts the greater good.
            </p>
            <div className="introduction-features">
              <div
                className="introduction-feature-item"
                data-aos="zoom-in"
                data-aos-delay="500"
              >
                <h3>Expert Craftsmanship</h3>
                <p>
                  With years of experience in jewelry making, our team is
                  committed to delivering exquisite, high-quality pieces tailored
                  to your desires.
                </p>
              </div>
              <div
                className="introduction-feature-item"
                data-aos="zoom-in"
                data-aos-delay="600"
              >
                <h3>Personalized Designs</h3>
                <p>
                  Our approach centers around personalized design, ensuring that
                  each captures your individuality and becomes a symbol of beauty.
                </p>
              </div>
            </div>
            <Link to="https://stage.sadashrijewelkart.com/signup">
              <button
                className="introduction-about-btn"
                data-aos="fade-up"
                data-aos-delay="700"
              >
                Register Here
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Overview;
