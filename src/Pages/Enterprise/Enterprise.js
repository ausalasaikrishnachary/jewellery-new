import React from "react";
import "./Enterprise.css";
import { FaHandshake, FaHeart, FaGlobe } from 'react-icons/fa';  // Importing icons from react-icons
import { FaGem, FaDollarSign,  FaHandsHelping, FaLeaf,  FaBalanceScale, FaRecycle, FaHandHoldingHeart  } from 'react-icons/fa';  // Importing icons from react-icons



const Enterprise = () => {
  return (
        <div>
    <section className="enterprise-section">
      <div className="enterprise-container">
        <div className="enterprise-header">
          <h1>Our Business, Our Responsibility</h1>
          <p>
            Sadashri Ventures Pvt. Ltd. is the corporate arm of the legacy built by our family. It is where the principles and values of our elders come to life through innovation, sustainable growth, and community-centered development. But at its core, Sadashri Ventures is more than just a business—it’s a commitment to societal betterment and long-term growth.
          </p>
        </div>

        <div className="enterprise-journey">
          <h2>Our Journey: From Family Philosophy to Business Practice</h2>
          <p>
            Born from the vision of our family, Sadashri Ventures was created to bridge the gap between our rich heritage and the modern world. While our roots remain firmly planted in the wisdom of our elders, we have consistently embraced forward-thinking strategies to drive growth and innovation. Today, Sadashri Ventures is at the forefront of several key industries, from sustainable product development to cutting-edge technology, all while maintaining a focus on societal benefit.
          </p>
        </div>

        <div className="enterprise-principles">
          <h3>Our Corporate Approach</h3>
          <ul>
            <li><strong>Sustainability:</strong> We are committed to minimizing our environmental footprint and creating businesses that endure for future generations.</li>
            <li><strong>Innovation with Integrity:</strong> We invest in ideas, technologies, and ventures that create long-term value—not just financial, but social and environmental.</li>
            <li><strong>Community Engagement:</strong> Every venture, from startups to established businesses, is driven by our desire to uplift communities and foster economic prosperity.</li>
          </ul>
        </div>
      </div>
    </section>
      <div className="company-ethics-section">
      <div className="company-ethics-container">
        <h2 className="section-title">Running the Company with Ethics, Integrity, and Responsibility</h2>
        <p className="section-description">
          At Sadashri Ventures, we are committed to running our business with the highest standards of ethics and integrity. Our relationship with society is built on trust, transparency, and accountability. We strive to create an environment where innovation thrives but always in a way that honors our roots and uplifts the greater good.
        </p>
        
        <div className="ethics-icons">
          <div className="ethics-box">
            <FaHandshake className="ethics-icon" />
            <h3>Transparency</h3>
            <p>Open, honest communication with our partners, clients, and communities.</p>
          </div>
          <div className="ethics-box">
            <FaHeart className="ethics-icon" />
            <h3>Fairness</h3>
            <p>Ensuring equitable practices and promoting social justice.</p>
          </div>
          <div className="ethics-box">
            <FaGlobe className="ethics-icon" />
            <h3>Accountability</h3>
            <p>Taking responsibility for our actions and their impacts on society and the environment.</p>
          </div>
        </div>

        <div className="ethics-trust">
          <h3>Trust</h3>
          <p>Building strong, reliable connections that stand the test of time.</p>
        </div>
      </div>
    </div>


    <div className="what-we-do-section">
      <div className="what-we-do-container">
        <h2 className="section-title">What We Do: A Diverse Portfolio of Ventures</h2>
        <p className="section-description">
          Sadashri Ventures spans a wide range of industries and initiatives. Here’s a glimpse into the scope of our operations:
        </p>

        <div className="ventures">
          <div className="venture-box">
            <FaGem className="venture-icon" />
            <h3>Product Development</h3>
            <p>From Sadashri Jewels to Sadashri Jewelkart, we build brands that blend tradition with modernity, offering both premium, handcrafted designs and tech-forward solutions.</p>
          </div>
          <div className="venture-box">
            <FaHandshake className="venture-icon" />
            <h3>Strategic Partnerships</h3>
            <p>We collaborate with like-minded organizations to foster innovation, support community development, and expand our impact.</p>
          </div>
          <div className="venture-box">
            <FaDollarSign className="venture-icon" />
            <h3>Brand Investments</h3>
            <p>We invest in businesses that share our commitment to innovation, sustainability, and societal growth.</p>
          </div>
        </div>
      </div>
    </div>


    <div className="relationships-section">
      <div className="relationships-container">
        <h2 className="section-title">Building Meaningful Relationships with Society</h2>
        <p className="section-description">
          We understand that a company is not just defined by its products or profits—it is defined by the relationships it builds. At Sadashri Ventures, we believe in fostering deep, meaningful connections with all stakeholders: our employees, customers, partners, and the communities we serve. We aim for mutual growth, where the success of our ventures also means the success of the society that supports us.
        </p>

        <div className="foundations">
          <div className="foundation-box">
            <FaHandsHelping className="foundation-icon" />
            <h3>Collaboration</h3>
            <p>Working hand-in-hand with our partners to achieve common goals.</p>
          </div>
          <div className="foundation-box">
            <FaLeaf className="foundation-icon" />
            <h3>Sustainability</h3>
            <p>Ensuring that every venture leaves a lasting positive impact on both society and the environment.</p>
          </div>
        </div>
      </div>
    </div>

    <div className="society-future-section">
      <div className="society-container">
        <h2 className="section-title">The Society’s Future</h2>
        <p className="section-description">
          As stewards of the legacy entrusted to us by our elders, we understand that the actions we take today will echo through generations. Sadashri Ventures is committed to leaving a legacy of balance, progress, and unity—ensuring that the world we leave behind is a better place for those who come after us.
        </p>

        <div className="commitment">
          <div className="commitment-box">
            <FaBalanceScale className="commitment-icon" />
            <h3>Continuity of Legacy</h3>
            <p>Upholding the values of our elders while adapting to the future.</p>
          </div>
          <div className="commitment-box">
            <FaRecycle className="commitment-icon" />
            <h3>Guardians of Social Progress</h3>
            <p>Using our ventures as vehicles for societal change.</p>
          </div>
          <div className="commitment-box">
            <FaHandHoldingHeart className="commitment-icon" />
            <h3>Building a Better World</h3>
            <p>Fostering sustainable development that balances economic, environmental, and social needs.</p>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Enterprise;
