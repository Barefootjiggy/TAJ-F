import React from 'react';
import './About.css';

const About: React.FC = () => {
  return (
    <div className="about-container">
      <img src="/AmandaSmiling.jpg" alt="Amanda doing a pushup" className="about-image" />
      <div className="about-content">
        <h1>
          About <span className="amanda">Amanda</span> <span className="jane">Jane</span>
        </h1>
        <p>Details about Amanda's background, experience, and training philosophy.</p>
      </div>
    </div>
  );
}

export default About;
