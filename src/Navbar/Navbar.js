import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import mainlogo from './logo/logo_dark.png';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [offlineDropdownOpen, setOfflineDropdownOpen] = useState(false);
  const [onlineDropdownOpen, setOnlineDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleOfflineDropdown = () => {
    setOfflineDropdownOpen(!offlineDropdownOpen);
  };

  const toggleOnlineDropdown = () => {
    setOnlineDropdownOpen(!onlineDropdownOpen);
  };

  return (
    <header className="navbar-header">
      <div className="navbar-logo">
        <img className="navbar-logo-img" src={mainlogo} alt="Jewellery Logo" />
      </div>
      
      <div className={`navbar-hamburger ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <div className="navbar-bar"></div>
        <div className="navbar-bar"></div>
        <div className="navbar-bar"></div>
      </div>

      <nav className={`navbar-links ${isOpen ? 'open' : ''}`}>
        <Link to="/">Home</Link>
        {/* <Link to="/about">About Us</Link> */}
        
        <div
          className="navbar-dropdown"
          onMouseEnter={toggleOfflineDropdown}
          onMouseLeave={toggleOfflineDropdown}
        >
          <span>Offline Store</span>
          {offlineDropdownOpen && (
            <div className="navbar-dropdown-content">
              <Link to="/schemes">Schemes</Link>
            </div>
          )}
        </div>

        <div
          className="navbar-dropdown"
          onMouseEnter={toggleOnlineDropdown}
          onMouseLeave={toggleOnlineDropdown}
        >
          <span>Online Store</span>
          {onlineDropdownOpen && (
            <div className="navbar-dropdown-content">
              <Link to="/seller">Seller</Link>
              <Link to="/user">User</Link>
            </div>
          )}
        </div>

        <Link to="/contactUs">Contact Us</Link>
      </nav>
    </header>
  );
}

export default Navbar;

