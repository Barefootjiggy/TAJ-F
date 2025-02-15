import React from "react";
// import TypingText from "../../components/TypingText/TypingText"; 
import "./Home.css";

const Home: React.FC = () => {
  return (
    <div className="hero-section">
      <div className="container">
        <h1 className="title">The Athletic Performer</h1>
        <h2 className="subtitle">Actors Are Athletes! Train like one!</h2>
        
        {/* Typewriter effect */}
        {/* <TypingText textArray={[
          "Actors Are Athletes!",
          "Train Like a Performer!",
          "Unlock Your Full Potential!"
        ]} /> */}

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
