import { motion } from 'framer-motion';
import { HiAcademicCap, HiCalendar } from 'react-icons/hi';
import SectionTitle from './SectionTitle';

const Education = () => {
  const handleSpotlight = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty('--spot-x', `${e.clientX - rect.left}px`);
    e.currentTarget.style.setProperty('--spot-y', `${e.clientY - rect.top}px`);
  };

  return (
    <section id="education" className="relative bg-slate-900 overflow-hidden">
      <div aria-hidden="true" className="pointer-events-none absolute top-1/2 -right-24 -translate-y-1/2 w-80 h-80 rounded-full bg-primary/10 blur-3xl" />
      <div className="section-container relative">
        <div className="max-w-3xl mx-auto">
          <SectionTitle>Education</SectionTitle>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              className="spot-card bg-white/5 backdrop-blur-md border border-white/10 rounded-lg p-8 hover:border-primary/30 transition-colors duration-300"
              onMouseMove={handleSpotlight}
              whileHover={{ y: -4 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            >
              <div className="flex gap-6">
                {/* Icon */}
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-full bg-fill flex items-center justify-center shadow-lg">
                    <HiAcademicCap size={32} className="text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    Bachelor's of Science in Computer Science
                  </h3>
                  <h4 className="text-xl font-semibold text-primary mb-3">
                    Texas State University
                  </h4>
                  <div className="flex items-center gap-2 text-slate-400 mb-3">
                    <HiCalendar className="text-secondary" />
                    <span>Graduated: December 2021</span>
                  </div>
                  <div className="inline-block bg-primary/10 text-primary font-semibold px-4 py-2 rounded-lg">
                    Minor in Mathematics
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Education;
