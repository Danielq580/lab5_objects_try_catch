import React from 'react';
import '../styles/Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <p>© 2024 CarShop. All rights reserved.</p>
      <div className="footer-links">
        <a href="/about">About Us</a>
        <a href="/contact">Contact</a>
        <a href="/faq">FAQ</a>
      </div>
    </footer>
  );
}

export default Footer;
