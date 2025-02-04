import React, { useState } from 'react';
import './NavBar.css';

const NavBar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const logoWords = [
    { word: "Train", color: "#132043" },
    { word: "with", color: "#1F4172" },
    { word: "Amanda", color: "#F1B4BB" },
    { word: "Jane", color: "#FDF0F0" },
  ];

  return (
    <nav className="nav-wrapper">
      <div className="nav-left">
        {/* Hamburger Menu (visible on small screens) */}
        <div className="menu-button" onClick={toggleMenu}>
          <div className="menu-bar"></div>
          <div className="menu-bar"></div>
          <div className="menu-bar"></div>
        </div>

        {/* Logo (always visible on large screens; can adjust for small screens if desired) */}
        <div className="brand-logo">
          {logoWords.map((entry, idx) => (
            <span key={idx} className={`logo-word word-${idx}`}>
              {entry.word}
            </span>
          ))}
        </div>
      </div>

      <div className="nav-right">
        <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/contact">Contact Me!</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
