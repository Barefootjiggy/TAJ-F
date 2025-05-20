import React, { useState, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTiktok, faYoutube } from '@fortawesome/free-brands-svg-icons';
import confetti from 'canvas-confetti';
import './Footer.css';

const Footer: React.FC = () => {
  const location = useLocation();
  const apiBase = process.env.REACT_APP_API_BASE;
  const [isWaving, setIsWaving] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [email, setEmail] = useState(""); 
  const [emailError, setEmailError] = useState(""); 
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

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  
    const form = e.currentTarget;
    const name = (form.elements.namedItem("name") as HTMLInputElement).value;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value;
    const message = (form.elements.namedItem("message") as HTMLTextAreaElement).value;
  
    try {
      const response = await fetch(`${apiBase}/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });
  
      const data = await response.json();
  
      if (response.ok) {
        const audio = new Audio(process.env.PUBLIC_URL + "/PartyPopper.wav");
        audio.play();
  
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
        });
  
        setTimeout(() => setShowModal(false), 2000);
      } else {
        alert(data.message || "Something went wrong.");
      }
    } catch (err) {
      console.error("Error submitting contact form:", err);
      alert("Failed to send message. Please try again later.");
    }
  };  

  const handleSubscribeSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
    if (!emailRegex.test(email)) {
      setEmailError("Please enter a valid email address.");
      return;
    }
  
    setEmailError("");
  
    try {
      const response = await fetch(`${apiBase}/subscribe`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email_address: email }),
      });
  
      const data = await response.json();
  
      if (response.status === 200) {
        setIsSubscribed(true);
        setTimeout(() => setIsSubscribed(false), 3000);
        setEmail("");
  
        const cheerAudio = new Audio(process.env.PUBLIC_URL + "/Cheering.wav");
        cheerAudio.play();
      } else if (response.status === 409) {
        setEmailError(data.message); 
      } else {
        setEmailError(data.message || "Subscription failed.");
      }
    } catch (error) {
      console.error("Error subscribing:", error);
      setEmailError("Server error. Please try again later.");
    }
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
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                required 
              />
              <button type="submit" className="subscribe-button">SIGN UP</button>
            </form>

            {emailError && <p className="error-message">{emailError}</p>}

            {isSubscribed && (
              <div className="subscribe-success">🎉 Thank you for subscribing!</div>
            )}

            <p className="privacy-text">We respect your privacy.</p>
          </div>

          <div className="social-icons">
            <a href="https://www.instagram.com/trainwithamandajane/" target="_blank" rel="noopener noreferrer" aria-label='Instagram'>
              <FontAwesomeIcon icon={faInstagram} className="icon" aria-hidden="true" />
            </a>
            <a href="https://www.tiktok.com/@trainwithamandajane" target="_blank" rel="noopener noreferrer" aria-label='TikTok'>
              <FontAwesomeIcon icon={faTiktok} className="icon" aria-hidden="true" />
            </a>
            <a href="https://www.youtube.com/@trainwithamandajane" target="_blank" rel="noopener noreferrer" aria-label='Youtube'>
              <FontAwesomeIcon icon={faYoutube} className="icon" aria-hidden="true" />
            </a>
          </div>

          <h2 className="footer-brand">
            <a href="http://onelink.to/broadwayeverybody" target="_blank" rel="noopener noreferrer" aria-label="Download the Forever Fitness app" >
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
              <h4 className="modal-title">Let's Chat About Your Goals!</h4>
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
