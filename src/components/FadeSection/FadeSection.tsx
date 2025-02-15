import { motion } from "framer-motion";

const Section = ({ id, children }: { id: string; children: React.ReactNode }) => {
  return (
    <motion.section
      id={id}
      className="section"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, delay: 0.2, ease: "anticipate" }}
      viewport={{ once: true }}
    >
      {children}
    </motion.section>
  );
};

export default Section;