import React, { lazy, Suspense, useState, useEffect } from "react";
import Home from "../Home/Home";
import Section from "../../components/FadeSection/FadeSection";
import { useInView } from "react-intersection-observer";

import "./SinglePage.css";

const About = lazy(() => import("../About/About"));
const Footer = lazy(() => import("../../components/Footer/Footer"));
const TestimonialCarousel = lazy(() => import("../../components/TestimonialCarousel/TestimonialCarousel")); 

const SinglePage: React.FC = () => {
  const [shouldLoadTestimonials, setShouldLoadTestimonials] = useState(false);

  const { ref: testimonialRef, inView } = useInView({
    threshold: 0.9,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      setShouldLoadTestimonials(true);
    }
  }, [inView]);

  return (
    <div>
      <Section id="home">
        <Home />
      </Section>

      <Section id="about">
        <Suspense fallback={null}>
          <About />
        </Suspense>
      </Section>

      <Section id="testimonials" ref={testimonialRef}>
        {shouldLoadTestimonials && (
          <Suspense fallback={null}>
            <TestimonialCarousel /> {/* ✅ now using directly */}
          </Suspense>
        )}
      </Section>

      <Section id="footer">
        <Suspense fallback={null}>
          <Footer />
        </Suspense>
      </Section>
    </div>
  );
};

export default SinglePage;
