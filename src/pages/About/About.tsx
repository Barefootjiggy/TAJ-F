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
        <p>
          I’m Amanda, a certified personal trainer with a Master’s in Exercise Science and Nutrition 
          and over seven years of experience training clients virtually and in person. With certifications 
          in strength and conditioning, nutrition coaching, corrective exercise, and performance enhancement, 
          I specialize in helping people build strength, lose fat, and feel their best—without spending hours in the gym.
        </p>

        <p>
          If you're overwhelmed by fitness advice, struggling with motivation, or just don’t know where to start, 
          let me guide you through the essentials—goal setting, realistic habits, nutrition insights, and strength 
          training—to help you achieve long-term results.
        </p>

        <p>
          Let’s ditch the extremes and build a fitness routine that actually fits your life.
        </p>

        <p>
          🔗 <a 
            href="https://calendly.com/trainwithamandajane" 
            target="_blank" 
            rel="noopener noreferrer"
            className="consult-link"
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
