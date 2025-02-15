import React from "react";
import Home from "../Home/Home";
import About from "../About/About";
import Contact from "../Contact/Contact";
import Section from "../../components/FadeSection/FadeSection";

import "./SinglePage.css";

const SinglePage: React.FC = () => {
  return (
    <div>
    <Section id="home">
      <Home />
      </Section>
      <Section id="about">
        <About />
      </Section>
      <Section id="contact">
        <Contact />
      </Section>
    </div>
  );
};

export default SinglePage;
