import React, { useEffect } from "react";
import TypeWriter from "../../components/TypeWriter/TypeWriter"
import "./Home.css";

const Home: React.FC = () => {
  useEffect(() => {
    window.scrollTo({
      top: 15, // Scroll to the absolute top
      behavior: "auto" // Instant scroll to prevent delay
    });
  }, []);
  
  return (
    <div className="hero-section">
      <div className="typewriter-container">
        <TypeWriter /> {/* Typewriter effect positioned above hero content */}
      </div>
      <div className="container">
        <h1 className="title">The Athletic Performer</h1>
        <h2 className="subtitle">Actors Are Athletes! Train like one!</h2>

        <p className="description">
          Helping actors, artists, and dancers reach their full potential in their craft by treating them as the athletes that they are!
        </p>
        <p className="description">
          All professional athletes train their off-season in the gym to optimize their performance on the field. We should too!
        </p>
      </div>
    </div>
  );
}

export default Home;
