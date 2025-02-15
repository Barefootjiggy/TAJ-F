import React from "react";
import "./NavBar.css";

const NavBar: React.FC = () => {
  const logoWords = [
    { word: "Train", color: "#132043" },
    { word: "with", color: "#1F4172" },
    { word: "Amanda", color: "#F1B4BB" },
    { word: "Jane", color: "#FDF0F0" },
  ];

  return (
    <nav className="nav-wrapper">
      <div className="nav-left">
        {/* Logo only, clicking it scrolls to the top */}
        <div
          className="brand-logo"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          style={{ cursor: "pointer" }}
        >
          {logoWords.map((entry, idx) => (
            <span key={idx} className={`logo-word word-${idx}`}>
              {entry.word}
            </span>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
