import React from "react";
import Home from "../Home/Home";
import About from "../About/About";
import Contact from "../Contact/Contact";
import "./SinglePage.css";

const SinglePage: React.FC = () => {
  return (
    <div>
      <Home />
      <About />
      <Contact />
    </div>
  );
};

export default SinglePage;
