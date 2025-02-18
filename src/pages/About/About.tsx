import React from 'react';
import './About.css'; // Ensure CSS is imported

const About: React.FC = () => {
  return (
    <div className="about-section">
      <h1>About Amanda Jane</h1>
      <p>Details about Amanda's background, experience, and training philosophy.</p>
      <img src="/AmandaSmiling.jpg" alt="Amanda doing a pushup" className="about-image" /> {/* ✅ Uses image from public/ */}
    </div>
  );
}

export default About;
