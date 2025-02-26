import React from 'react';
import './About.css';

const About: React.FC = () => {
  return (
    <div className="about-container">
      <img src="/AmandaSmiling.jpg" alt="Amanda doing a pushup" className="about-image" />
      <div className="about-content">
        <h1>
          Meet <span className="amanda">Amanda</span> <span className="jane">Jane</span>: Your Guide To Strength & Confidence
        </h1>
        <p>
        Let me take you back to 2014 when my health was so bad I couldn’t even walk. And no, I am not exaggerating…At age 22 I suffered from severe lower back pain that led to sciatica and an inability to stand up straight. I was bloated all the time, had low energy, and slept til noon. I used to be so addicted to sugar and sweets that I would binge an entire bag of twizzlers in one sitting! I couldn't cut the sugar fix and it left me feeling exhausted, inflamed, and sick.</p>

<p> My routine was inconsistent with bartending some days until 5am and other days waking up at 5am to go to auditions and casting calls. If I booked an acting job, I was out of the city for several weeks or months at a time. I didn’t know how to balance health and fitness with my inconsistent and stressful schedule. I was miserable and didn’t even fully know it. How it impacted the way I showed up in my career, my relationships, and my life, I thought that was how life was supposed to feel.</p>

<p> It took me YEARS to finally understand why I couldn't quit these habits. Finally I’d had enough, after a devastating breakup, I decided I needed to make a change. I couldn’t live like this anymore. I’ve seen so many of my family, friends, and even myself struggle with fad diets and inconsistent workout routines, so I decided to become a Certified Personal Trainer, and eventually a Certified Nutrition Coach. It was important for me to take a different approach within the health and fitness industry. The only time I’ve seen true success in health and fitness is by developing habits, creating a routine, and making fitness a LIFESTYLE!</p>

          <p> I went on to pursue my Master's degree in Exercise Science and Nutrition and now have 
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
