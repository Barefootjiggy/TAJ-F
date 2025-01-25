import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer-wrapper">
      <ul className="footer-links">
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/blog">Blog</a></li>
        <li><a href="/services">Services</a></li>
        <li><a href="/testimonials">Testimonials</a></li>
        <li><a href="/contact">Contact Me!</a></li>
      </ul>
    </footer>
  );
}

export default Footer;
