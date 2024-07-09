import React from 'react';

const Home: React.FC = () => {
  return (
    <div>
      <div className="hero">
        <h1>Welcome to Amanda Jane's Personal Training</h1>
        <p>Your journey to a healthier life starts here.</p>
        <a className="btn" href="/services">Explore Services</a>
      </div>
    </div>
  );
}

export default Home;
