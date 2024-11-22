import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <div className="about-us">
      <div className="purpose-section">
        {/* <h2 className="section-title">Purpose</h2> */}
        <h3 className="section-subtitle">A Legacy of Vision, Wisdom, and Responsibility</h3>
        <p className="section-introduction">
          Our family’s legacy is woven through generations, where each story told carried wisdom that shaped the decisions of today. 
          The stories were more than just tales—they were lessons, guiding principles passed down from one generation to the next. 
          These lessons are the foundation of everything we do at Sadashri Ventures.
        </p>
        <div className="infographic-timeline">
          <div className="timeline-item">
            <div className="year">1900</div>
            <p>Foundation of craftsmanship and tradition begins.</p>
          </div>
          <div className="timeline-item">
            <div className="year">1950</div>
            <p>Expansion into modern designs while preserving heritage.</p>
          </div>
          <div className="timeline-item">
            <div className="year">2023</div>
            <p>Sadashri Ventures brings timeless elegance to the world.</p>
          </div>
        </div>
      </div>
            {/* Wisdom Section */}
            <div className="wisdom-section">
        <h2 className="section-title">The Wisdom of Our Elders</h2>
        <h3 className="section-subtitle">Guiding Principles for a Better Tomorrow</h3>
        <blockquote className="wisdom-quote">
          "The future is shaped by the choices we make today."
        </blockquote>
        <p className="wisdom-description">
          For generations, our elders believed that society’s strength depended on the choices made in the present. They spoke of 
          community, balance, and responsibility, understanding that these decisions would shape the future. This powerful belief has 
          been the backbone of our family’s mission and remains at the core of Sadashri Ventures today. For generations, our family 
          has lived by this principle, placing the health of the community, the prosperity of its people, and the stability of the 
          environment at the center of our decisions—responsible for shaping a better world for future generations.
        </p>
      </div>


      <section className="generational-wisdom">
      <div className="container">
        <h2 className="section-title">How Generational Wisdom Shapes Our Present</h2>
        <p className="section-description">
          Over time, the wisdom of our elders has grown into a clear, resolute voice. What began as stories around a fire has now evolved into a living, breathing mission. Each generation, while embracing modern innovation, honors the core principles passed down:
        </p>
        <div className="principles-list">
          <div className="principle">
            <span className="icon">💎</span>
            <h3>Preserving Society’s Strength</h3>
          </div>
          <div className="principle">
            <span className="icon">✨</span>
            <h3>Building a Balanced Future</h3>
          </div>
          <div className="principle">
            <span className="icon">🌟</span>
            <h3>Uplifting Communities and Driving Innovation</h3>
          </div>
        </div>
        <div className="visual">
          <p>[Infographic: Evolution of Family Philosophy]</p>
        </div>
      </div>
    </section>


    <section className="vision-section">
      <div className="container">
        <h2 className="vision-title">Our Vision: A Better Tomorrow, Today</h2>
        <p className="vision-subtitle">More Than a Business—A Mission to Create Impact</p>
        <div className="vision-content">
          <p>
            Our vision extends beyond profit. <strong>Sadashri Ventures</strong> is founded on the belief that businesses
            should enhance society, not just take from it. We strive to create a balance between progress and
            preservation—ensuring that every venture we undertake contributes to the well-being of the communities we serve.
          </p>
          <div className="vision-visual">
            [Visual: Vision Statement Box with a background image of a thriving community, people collaborating, and innovations in progress.]
          </div>
        </div>

        <h3 className="pillars-title">The Pillars of Our Vision</h3>
        <div className="pillars">
          <div className="pillar">
            <h4>Empowering Communities</h4>
            <p>
              We believe in fostering growth that elevates the communities around us, creating value for both present and
              future generations.
            </p>
          </div>
          <div className="pillar">
            <h4>A Commitment to Ethical Leadership</h4>
            <p>
              We lead with transparency, integrity, and a deep sense of responsibility for our people, the environment, and
              society at large.
            </p>
          </div>
          <div className="pillar">
            <h4>Impacting Society</h4>
            <p>
              The future is shaped by how we invest in it today. Our focus is on fostering growth that uplifts entire
              communities.
            </p>
          </div>
        </div>
      </div>
    </section>

    <div className="cta-section">
      <h2 className="cta-title">Inspired by our legacy and vision?</h2>
      <p className="cta-subtitle">Join us on our journey.</p>
      <div className="cta-buttons">
        <button className="cta-button">Explore Our Corporate Ventures</button>
        <button className="cta-button">Learn About Our Brands</button>
        <button className="cta-button">Read Our Founding Story</button>
        <button className="cta-button">Contact Us</button>
      </div>
    </div>


    

    </div>
  );
};

export default AboutUs;
