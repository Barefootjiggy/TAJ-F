import React, {lazy, Suspense, useState} from "react";
import Home from "../Home/Home";
import About from "../About/About";
import Section from "../../components/FadeSection/FadeSection";
import Footer from "../../components/Footer/Footer"
import { useInView } from "react-intersection-observer";

import "./SinglePage.css";

// Lazy load Testimonials
const Testimonials = lazy(() => import('../Testimonials.tsx/Testimonials'));

const SinglePage: React.FC = () => {
  const [shouldLoadTestimonials, setShouldLoadTestimonials] = useState(false);

  const { ref: testimonialRef, inView } = useInView({
    threshold: 0.9, // adjust how early to trigger
    triggerOnce: true,
  });

  // Once in view, mark to load
  if (inView && !shouldLoadTestimonials) {
    setShouldLoadTestimonials(true);
  }

  return (
    <div>
      <Section id="home">
        <Home />
      </Section>
      <Section id="about">
        <About />
      </Section>
      <Section id="testimonials" ref={testimonialRef}>
  {shouldLoadTestimonials && (
    <Suspense fallback={null}>
      <Testimonials />
    </Suspense>
  )}
</Section>
      <Section id="footer">
      <Footer />
      </Section>
    </div>
  );
};

export default SinglePage;
