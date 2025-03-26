import React, { useEffect } from "react";
import TypeWriter from "../../components/TypeWriter/TypeWriter"
import "./Home.css";

const Home: React.FC = () => {
  useEffect(() => {
    window.scrollTo({
      top: 15, 
      behavior: "auto" 
    });
  }, []);
  
  return (
    <>
    <div className="hero-section">
        <div className="typewriter-container">
          <TypeWriter /> 
        </div>
      </div>
      <div className="container">
        <h1 className="title">Forever Fitness</h1>
        <h2 className="subtitle">Small Steps, Big Changes, Your Future Self Will Thank You!</h2>
        <p className="description">
        At ForeverFitness, I help busy professionals break free from the cycle of yo-yo dieting and exercise burnout with science-backed, efficient workouts and sustainable nutrition strategies.
        </p>
        <p className="description">
          All professional athletes train their off-season in the gym to optimize their performance on the field. We should too!
        </p>
      </div>
      </>
  );
}

export default Home;
