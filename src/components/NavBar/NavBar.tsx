import React, { useState, useEffect } from "react";
import "./NavBar.css";

const slogans = [
  "Fitness That Stays, Even When Motivation Fades",
  "Effortless Fitness For Everyday Professionals",
  "Your Path To Fitness Made Realistic",
];

const Typewriter = () => {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const typingSpeed = isDeleting ? 50 : 100;
  const delay = isDeleting ? 500 : 2000;

  useEffect(() => {
    const handleTyping = () => {
      setText((prevText) =>
        isDeleting ? slogans[index].substring(0, prevText.length - 1) : slogans[index].substring(0, prevText.length + 1)
      );

      if (!isDeleting && text === slogans[index]) {
        setTimeout(() => setIsDeleting(true), delay);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setIndex((prevIndex) => (prevIndex + 1) % slogans.length);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, index]);

  return <p className="typewriter">{text}</p>;
};

const NavBar = () => {
  return (
    <nav className="nav-wrapper">
      <div className="logo-container">
        <img src="/TAJP1rbg.png" alt="Train with Amanda Jane Logo" className="logo-img" />
      </div>
      <Typewriter />
    </nav>
  );
};

export default NavBar;
