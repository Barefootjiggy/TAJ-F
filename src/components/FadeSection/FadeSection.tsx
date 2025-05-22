import React, { forwardRef } from 'react';
import { motion } from 'framer-motion';

interface SectionProps {
  id: string;
  children: React.ReactNode;
}

// Define animation variants
const fadeInVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: 'easeOut',
    },
  },
};

const Section = forwardRef<HTMLElement, SectionProps>(({ id, children }, ref) => {
  return (
    <motion.section
      id={id}
      ref={ref}
      className="section"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeInVariant}
    >
      {children}
    </motion.section>
  );
});

Section.displayName = 'Section';

export default Section;
