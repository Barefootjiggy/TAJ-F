import React, { useEffect } from "react";
import TypeWriter from "../../components/TypeWriter/TypeWriter";
import "./Home.css";

const Home: React.FC = () => {
  useEffect(() => {
    window.scrollTo({ top: 15, behavior: "auto" });
  }, []);

  return (
    <>
      <section className="hero-section" aria-label="Hero banner with call to action">
        <h1 className="visually-hidden">Forever Fitness – Online Training with Amanda Jane</h1>
        <img 
          src="/AmandaPushuplook.webp" 
          alt="Amanda Jane doing a pushup" 
          className="hero-background"
          fetchPriority="high"
          width="1920"
          height="1080"
        />
        <div className="typewriter-container">
          <TypeWriter />
        </div>
      </section>

      <div className="container">
        <h1 className="title">Forever Fitness</h1>
        <h2 className="subtitle">Small Steps, Big Changes, Your Future Self Will Thank You!</h2>
        <p className="description">
          At ForeverFitness, I help busy professionals break free from the cycle of yo-yo dieting and exercise burnout with science-backed, efficient workouts and sustainable nutrition strategies.
        </p>
      </div>
    </>
  );
};

export default Home;
