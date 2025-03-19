import React, { useState, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTiktok, faYoutube } from '@fortawesome/free-brands-svg-icons';
import confetti from 'canvas-confetti';
import './Footer.css';

const Footer: React.FC = () => {
  const location = useLocation();
  const [isWaving, setIsWaving] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [email, setEmail] = useState(""); // Track user email input
  const [emailError, setEmailError] = useState(""); // Track validation error
  const popperAudioRef = useRef<HTMLAudioElement | null>(null);

  const handleButtonClick = () => {
    setIsWaving(true);
  };

  const handleAnimationEnd = () => {
    setIsWaving(false);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); 
  
    const audio = new Audio(process.env.PUBLIC_URL + '/PartyPopper.wav'); 
    audio.play();
  
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
    });
  
    setTimeout(() => {
      setShowModal(false);
    }, 2000);
  };

  const handleSubscribeSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Email validation regex pattern
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (!emailRegex.test(email)) {
      setEmailError("Please enter a valid email address.");
      return;
    }

    setEmailError(""); // Clear error if valid
    
  
    const cheerAudio = new Audio(process.env.PUBLIC_URL + '/Cheering.wav');
    cheerAudio.play();
  
    setIsSubscribed(true);
  
    setTimeout(() => setIsSubscribed(false), 3000);
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
              Your Next Step to a Stronger You!
            </button>
          )}

          <div className="subscribe-section">
            <h2 className="subscribe-title">SUBSCRIBE</h2>
            <p>Sign up with your email address to receive news and updates.</p>
            <form onSubmit={handleSubscribeSubmit} className="subscribe-form">
              <input 
                type="email" 
                name="EMAIL" 
                placeholder="Email Address" 
                className="subscribe-input"
                value={email} // Link state to input field
                onChange={(e) => setEmail(e.target.value)} // Update state on input change
                required 
              />
              <button type="submit" className="subscribe-button">SIGN UP</button>
            </form>

            {/* Show validation error if email is invalid */}
            {emailError && <p className="error-message">{emailError}</p>}

            {isSubscribed && (
              <div className="subscribe-success">🎉 Thank you for subscribing!</div>
            )}

            <p className="privacy-text">We respect your privacy.</p>
          </div>

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

          <h2 className="footer-brand">
            <a href="http://onelink.to/broadwayeverybody" target="_blank" rel="noopener noreferrer">
              FOREVER FITNESS
            </a>
          </h2>
        </div>
      </footer>

      {showModal && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <img src="/AmandaPose.jpg" alt="Amanda posing" className="modal-bg" />
            <div className="modal-inner">
              <button className="modal-close" onClick={closeModal}>&times;</button>
              <h4>Let's Chat About Your Goals!</h4>
              <form className="modal-form" onSubmit={handleFormSubmit}>
                <input type="text" name="name" placeholder="Your Name" required />
                <input type="email" name="email" placeholder="Your Email" required />
                <textarea name="message" placeholder="Your Message" required></textarea>
                <button type="submit">Send</button>
              </form>
            </div>
          </div>
        </div>
      )}

      <audio ref={popperAudioRef} />
    </>
  );
};

export default Footer;
