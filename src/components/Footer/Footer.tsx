import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTiktok, faYoutube } from '@fortawesome/free-brands-svg-icons';
import './Footer.css';

const Footer: React.FC = () => {
  const location = useLocation();
  const [isWaving, setIsWaving] = useState(false);
  const [showModal, setShowModal] = useState(false);

  // Trigger the wave animation on click
  const handleButtonClick = () => {
    setIsWaving(true);
  };

  // When the wave animation finishes, open the modal
  const handleAnimationEnd = () => {
    setIsWaving(false);
    setShowModal(true);
  };

  // Close the modal
  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <footer className="footer-wrapper">
        <div className="footer-content">
          {location.pathname === '/' && (
            <button 
              className={`contact-button ${isWaving ? 'wave' : ''}`}
              onClick={handleButtonClick}
              onAnimationEnd={handleAnimationEnd}
            >
              CONTACT
            </button>
          )}

          {/* Subscription Section */}
          <div className="subscribe-section">
            <h2 className="subscribe-title">SUBSCRIBE</h2>
            <p>Sign up with your email address to receive news and updates.</p>
            <form
              action="https://amandajanesnyder.us16.list-manage.com/subscribe/post?u=4d650d8819062416a7a7a2c5f&id=ee939cda45&f_id=00c20ce0f0"
              method="post"
              target="_blank"
              className="subscribe-form"
            >
              <input 
                type="email" 
                name="EMAIL" 
                placeholder="Email Address" 
                className="subscribe-input"
                required 
              />
              <button type="submit" className="subscribe-button">SIGN UP</button>
            </form>
            <p className="privacy-text">We respect your privacy.</p>
          </div>

          {/* Social Media Links */}
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

          {/* Footer Branding */}
          <h2 className="footer-brand">
            <a href="http://onelink.to/broadwayeverybody" target="_blank" rel="noopener noreferrer">
              FOREVER FITNESS
            </a>
          </h2>
        </div>
      </footer>

      {/* Modal Contact Form */}
      {showModal && (
       <div className="modal-overlay" onClick={closeModal}>
       <div className="modal-content" onClick={(e) => e.stopPropagation()}>
         {/* Background image inserted as an <img> element */}
         <img src="/AmandaPose.jpg" alt="Amanda posing" className="modal-bg" />
         <div className="modal-inner">
           <button className="modal-close" onClick={closeModal}>&times;</button>
           <h2>Contact Us</h2>
           <form className="modal-form">
             <input type="text" name="name" placeholder="Your Name" required />
             <input type="email" name="email" placeholder="Your Email" required />
             <textarea name="message" placeholder="Your Message" required></textarea>
             <button type="submit">Send</button>
           </form>
         </div>
       </div>
     </div>
      )}
    </>
  );
};

export default Footer;
