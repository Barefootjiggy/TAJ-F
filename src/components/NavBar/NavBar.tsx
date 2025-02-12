import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // ✅ Import Link from react-router-dom
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

        {/* Logo wrapped in a Link component */}
        <Link to="/" className="brand-logo">
          {logoWords.map((entry, idx) => (
            <span key={idx} className={`logo-word word-${idx}`}>
              {entry.word}
            </span>
          ))}
        </Link>
      </div>

      <div className="nav-right">
        <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
