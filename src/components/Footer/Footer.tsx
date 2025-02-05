import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTiktok, faYoutube } from '@fortawesome/free-brands-svg-icons';
import './Footer.css';

const Footer: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <footer className="footer-wrapper">
      <div className="footer-content">
        {/* Show Contact Button Only on Home Page */}
        {location.pathname === '/' && (
          <button className="contact-button" onClick={() => navigate('/contact')}>
            CONTACT
          </button>
        )}

        {/* Subscription Section */}
        <div className="subscribe-section">
          <h2 className="subscribe-title">SUBSCRIBE</h2>
          <p>Sign up with your email address to receive news and updates.</p>
          <div className="subscribe-form">
            <input type="email" placeholder="Email Address" className="subscribe-input" />
            <button className="subscribe-button">SIGN UP</button>
          </div>
          <p className="privacy-text">We respect your privacy.</p>
        </div>

        {/* Social Media Links using FontAwesome */}
        <div className="social-icons">
          <a href="https://www.instagram.com/trainwithamandajane/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} className="icon" />
          </a>
          <a href="https://www.tiktok.com/@trainwithamandajane" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faTiktok} className="icon" />
          </a>
          <a href="https://www.youtube.com/@trainwithamandajane" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faYoutube} className="icon" />
          </a>
        </div>

        {/* Clickable Link to Mobile App */}
        <h2 className="footer-brand">
          <a href="http://onelink.to/broadwayeverybody" target="_blank" rel="noopener noreferrer">
            FOREVER FITNESS
          </a>
        </h2>
      </div>
    </footer>
  );
}

export default Footer;
