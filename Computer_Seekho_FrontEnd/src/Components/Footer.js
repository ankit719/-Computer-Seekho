// Footer.js
import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="info">
        <p>Contact: +1 (123) 456-7890</p>
        <p>Email: computerseekho@example.com</p>
      </div>
      <div className="copyRight">
        <p>&copy; {currentYear} Your Company Name. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
