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
    let timeout: ReturnType<typeof setTimeout>;
    const fullText = slogans[index];

    if (!isDeleting && text === fullText) {
      // Finished typing, wait before deleting
      timeout = setTimeout(() => setIsDeleting(true), 1000);
    } else if (isDeleting && text === "") {
      // Finished deleting, move to next
      setIsDeleting(false);
      setIndex((prev) => (prev + 1) % slogans.length);
    } else {
      timeout = setTimeout(() => {
        setText((prev) =>
          isDeleting
            ? fullText.substring(0, prev.length - 1)
            : fullText.substring(0, prev.length + 1)
        );
      }, isDeleting ? 40 : 80);
    }

    return () => clearTimeout(timeout);
  }, [text, isDeleting, index]);

  return (
    <p className="typewriter">
      <span aria-live="polite">{text}</span>
    </p>
  );
};

export default Typewriter;
