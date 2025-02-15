import React, { useState } from "react";
import "./NavBar.css";

const NavBar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false); // Close menu after clicking on mobile
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

        {/* Logo with a scroll-to-top function */}
        <div className="brand-logo" onClick={() => scrollToSection("home")} style={{ cursor: "pointer" }}>
          {logoWords.map((entry, idx) => (
            <span key={idx} className={`logo-word word-${idx}`}>
              {entry.word}
            </span>
          ))}
        </div>
      </div>

      <div className="nav-right">
        <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
          <li><button onClick={() => scrollToSection("home")}>Home</button></li>
          <li><button onClick={() => scrollToSection("about")}>About</button></li>
          <li><button onClick={() => scrollToSection("contact")}>Contact</button></li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
