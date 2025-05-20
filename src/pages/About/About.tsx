import React from 'react';
import './About.css';

const About: React.FC = () => {
  return (
    <div className="about-container">
      <div className="image-badge-container">
        <img src="/AmandaSmiling.webp" alt="Amanda Jane, personal trainer, smiling" className="about-image"  loading='lazy' width='1200' height='800'/>
        <div className="badges-container">
          <span className="badge">M.S. Exercise Science & Nutrition</span>
          <span className="badge">NSCA Certified Strength & Conditioning Specialist</span>
          <span className="badge">Certified Personal Trainer</span>
          <span className="badge">Certified Nutrition Coach</span>
          <span className="badge">Performance Enhancement Specialist</span>
          <span className="badge">Corrective Exercise Specialist</span>
          <span className="badge">Functional Range Conditioning Movement Specialist</span>
          <span className="badge">Functional Movement Screen, Level 1</span>
          <span className="badge">CPR/AED Certified</span>
        </div>
      </div>

      <div className="about-content">
        <h1>
          Meet <span className="amanda">Amanda</span> <span className="jane">Jane</span>: Your Guide To Strength & Confidence
        </h1>
        <p>
          Let me take you back to 2014 when my health was so bad I couldn’t even walk...
        </p>

        <p>
          I went on to pursue my Master's degree in Exercise Science and Nutrition and now have 
          over seven years of experience training clients virtually and in-person. With certifications 
          in strength and conditioning, nutrition coaching, corrective exercise, and performance enhancement, 
          I specialize in helping people build strength, lose fat, and feel their best—without spending hours in the gym.
        </p>

        <p>
          If you're overwhelmed by fitness advice, struggling with motivation, or just don’t know where to start, 
          let me guide you through the essentials—goal setting, realistic habits, nutrition insights, and strength 
          training—to help you achieve long-term results.
        </p>

        <p>
          🔗 <a 
            href="https://calendly.com/trainwithamandajane" 
            target="_blank" 
            rel="noopener noreferrer"
            className="consult-link"
            aria-label="Schedule a Free Consult, opens in a new tab"
          >
            Schedule a Free Consult
          </a> 
          &nbsp;to see what program would be the best fit for you!
        </p>
      </div>
    </div>
  );
}

export default About;
