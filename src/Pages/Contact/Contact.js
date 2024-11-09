// ContactForm.js
import React from 'react';
import './Contact.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneAlt, faEnvelope, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { faGoogle, faTwitter, faInstagram, faFacebookF } from "@fortawesome/free-brands-svg-icons";
const ContactForm = () => {
  return (
    <div>

      <div className="cont-section-container">
        <div className="cont-banner">
          <div className="cont-banner-text">
            Contact Us
          </div>
        </div>
      </div>
      <div className="contact-container">
        <div className="contact-form">
          <h2>Contact us</h2>

          <p>
            Our ravely-reviewed Customer Service team of non-commissioned diamond and jewelry experts is here for you 24/7.

          </p>
          <div className="contact-info">
            <p>
              <FontAwesomeIcon icon={faPhoneAlt} />
              <span>+919964644424</span>        </p>
            <p>
              <FontAwesomeIcon icon={faEnvelope} />
              <span>sadashrijewelkart.com</span>        </p>
            <p>
              <FontAwesomeIcon icon={faMapMarkerAlt} />
              <span>Building No./Flat No.: NO 1323/1324, 16TH B CROSS HOUSING BOARD COLONY EWS 3RD PHASE, Yelahanka New Town, Bengaluru, Karnataka-560064</span>
            </p>
          </div>
          {/* <div className="social-icons">
            <FontAwesomeIcon icon={faGoogle} />
            <FontAwesomeIcon icon={faTwitter} />
            <FontAwesomeIcon icon={faInstagram} />
            <FontAwesomeIcon icon={faFacebookF} />
          </div> */}


              <div className="cont-social-container">
      <a href="https://www.instagram.com/sadashrijewelkart_official" className="cont-social-link" target="_blank" rel="noopener noreferrer">
        <img src={'https://cdn-icons-png.flaticon.com/512/5968/5968776.png'} alt="Instagram" />
        <span>sadashrijewelkart_official</span>
      </a>
      <a href="https://www.facebook.com/SadashriJewelkart" className="cont-social-link" target="_blank" rel="noopener noreferrer">
        <img src={'https://static.vecteezy.com/system/resources/previews/018/930/476/non_2x/facebook-logo-facebook-icon-transparent-free-png.png'} alt="Facebook" />
        <span>Sadāshrī Jewelkart</span>
      </a>
      <a href="https://www.youtube.com/SadashriJewelkart" className="cont-social-link" target="_blank" rel="noopener noreferrer">
        <img src={'https://static.vecteezy.com/system/resources/previews/011/998/173/non_2x/youtube-icon-free-vector.jpg'} alt="YouTube" />
        <span>Sadāshrī Jewelkart</span>
    </a></div>
          
        </div>
        <div className="form-wrapper">
          <form>
            <div className="input-group">
              <div className="input-field">
                <label>First Name</label>
                <input type="text" placeholder="First Name" />
              </div>
              <div className="input-field">
                <label>Last Name</label>
                <input type="text" placeholder="Last Name" />
              </div>
            </div>
            <div className="input-group">
              <div className="input-field">
                <label>Email</label>
                <input type="email" placeholder="Email" />
              </div>
              <div className="input-field">
                <label>Phone Number</label>
                <input type="text" placeholder="Phone Number" />
              </div>
            </div>
            <div className="input-field">
              <label>What do you have in mind</label>
              <textarea placeholder="Please enter query..."></textarea>
            </div>
            <button className='submit-but' type="submit">Submit</button>
          </form>
        </div>



      </div>

      {/* Map Section */}
      <div className="map-section">
        <h2>Get In Touch With Us Here</h2>
        <iframe
          title="Google Map"
          className="map-iframe"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.2562654502283!2d77.5751846758182!3d13.095915590789045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1b4de34c4df7%3A0x68511017b88d2b2d!2sNO%201323%2C%201324%2C%2016TH%20B%20Cross%2C%20Housing%20Board%20Colony%20EWS%203rd%20Phase%2C%20Yelahanka%20New%20Town%2C%20Bengaluru%2C%20Karnataka%20560064%2C%20India!5e0!3m2!1sen!2sus!4v1619603738454!5m2!1sen!2sus"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactForm;
