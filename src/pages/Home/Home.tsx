import TypeWriter from "../../components/TypeWriter/TypeWriter";
import "./Home.css";
import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';

const Home: React.FC = () => {
  const heroImgRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    if (heroImgRef.current) {
      heroImgRef.current.setAttribute('fetchpriority', 'high');
    }
  }, []);

  return (
    <>
      <section className="hero-section" aria-label="Hero banner">
        <h1 className="visually-hidden">Forever Fitness – Online Training with Amanda Jane</h1>
        <img 
          ref={heroImgRef}
          src="/AmandaPushuplook.webp" 
          alt="Amanda Jane doing a pushup" 
          className="hero-background"
          loading="eager"
          decoding="async"
          width="1920"
          height="1080"
        />
        <div className="typewriter-container">
          <TypeWriter />
        </div>
      </section>

      <main>
  <motion.div
    className="container"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 1.2, delay: 0.3, ease: 'easeOut' }}
    viewport={{ once: true, amount: 0.3 }}
  >
    <h1 className="title">Forever Fitness</h1>
    <h2 className="subtitle">Small Steps, Big Changes, Your Future Self Will Thank You!</h2>
    <p className="description">
      At ForeverFitness, I help busy professionals break free from the cycle of yo-yo dieting and exercise burnout with science-backed, efficient workouts and sustainable nutrition strategies.
    </p>
  </motion.div>
</main>
    </>
  );
};

export default Home;
