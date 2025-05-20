import React, { useState, useEffect } from "react";

const slogans = [
  "Fitness That Stays, Even When Motivation Fades",
  "Effortless Fitness For Everyday Professionals",
  "Your Path To Fitness Made Realistic",
];

const Typewriter = () => {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const typingSpeed = isDeleting ? 40 : 80;
    const delay = isDeleting ? 500 : 1000;

    const handleTyping = () => {
      setText((prevText) =>
        isDeleting
          ? slogans[index].substring(0, prevText.length - 1)
          : slogans[index].substring(0, prevText.length + 1)
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

  return (
    <p className="typewriter">
      <span aria-live="polite">{text}</span>
    </p>
  );
};

export default Typewriter;
