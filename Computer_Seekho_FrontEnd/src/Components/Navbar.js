// Navbar.js

import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router
import './Navbar.css';
import { useState } from 'react';

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  const handleToggle = () => {
    setIsMobile(!isMobile);
  }

  
  const handleDropdownToggle = () => {
    setIsMobile(false);
  };

  return (
    <nav className={`navbar ${isMobile ? 'mobile' : ''}`}>
      <div className="navbar-logo">Computer Seekho</div>
      <div className={`navbar-toggle`} onClick={handleToggle}>
        <div className={`bar ${isMobile ? 'open' : ''}`} />
        <div className={`bar ${isMobile ? 'open' : ''}`} />
        <div className={`bar ${isMobile ? 'open' : ''}`} />
      </div>
      <ul className={`navbar-list ${isMobile ? 'mobile' : ''}`}>
        <li className="navbar-item">
          <Link to="/home" onClick={() => setIsMobile(false)}>
            Home
          </Link>
        </li>
        <li className="navbar-item">
          <Link to="/Course" onClick={() => setIsMobile(false)}>
          Course
          </Link>
        </li>

        <li className="navbar-item">
          <div className="navbar-dropdown">
            <span className="dropdown-title">Placement</span>
            <ul className="dropdown-list">
              <li className="dropdown-item">
                <Link to="/Placement" onClick={handleDropdownToggle}>
                  Placement
                </Link>
              </li>
              <li className="dropdown-item">
                <Link to="/Company" onClick={handleDropdownToggle}>
                  Company
                </Link>
              </li>
            </ul>
          </div>
        </li>
        <li className="navbar-item">
          <Link to="/Campus" onClick={() => setIsMobile(false)}>
          CapmusLife
          </Link>
        </li>
        <li className="navbar-item">
          <Link to="/Faculty" onClick={() => setIsMobile(false)}>
            Faculty
          </Link>
        </li>
        <li className="navbar-item">
          <Link to="/ContactUS" onClick={() => setIsMobile(false)}>
            Conatct US
          </Link>
        </li>
        <li className="navbar-item">
          <Link to="/LogIn" onClick={() => setIsMobile(false)}>
            LogIn
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
