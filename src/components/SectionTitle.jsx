import { motion } from 'framer-motion';

const SectionTitle = ({ children }) => (
  <div className="relative mb-16">
    <motion.h2
      className="text-4xl md:text-6xl font-extrabold tracking-tight text-primary"
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.h2>
    <motion.span
      className="absolute left-0 -bottom-4 h-[5px] bg-accent rounded-full"
      initial={{ width: 0 }}
      whileInView={{ width: '3.5rem' }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
    />
  </div>
);

export default SectionTitle;
