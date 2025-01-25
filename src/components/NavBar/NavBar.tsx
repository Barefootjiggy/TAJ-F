import React from 'react';
import './NavBar.css';

const NavBar: React.FC = () => {
  const logoWords = [
    { word: "Train", color: "#132043" },
    { word: "with", color: "#1F4172" },
    { word: "Amanda", color: "#F1B4BB" },
    { word: "Jane", color: "#FDF0F0" },
  ];

  return (
    <nav className="nav-wrapper">
      
      <ul className="nav-links left-links">
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/blog">Blog</a></li>
        <img src="/logo32bgrm.png" alt="logo" className="logo-icon left-logo" />
      </ul>
      <div className="brand-logo">
        
        <div className="logo-words">
          {logoWords.map((entry, wordIndex) => (
            <span key={wordIndex} className={`logo-word word-${wordIndex}`}>
              {entry.word}
            </span>
          ))}
        </div>
        
      </div>
      <ul className="nav-links right-links">
      <img src="/logo32bgrm.png" alt="logo" className="logo-icon right-logo" />
        <li><a href="/services">Services</a></li>
        <li><a href="/testimonials">Testimonials</a></li>
        <li><a href="/contact">Contact Me!</a></li>
      </ul>
    </nav>
  );
}

export default NavBar;
