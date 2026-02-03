import { motion } from 'framer-motion';
import { HiAcademicCap, HiCalendar } from 'react-icons/hi';

const Education = () => {
  return (
    <section id="education" className="bg-white">
      <div className="section-container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Education
        </motion.h2>

        <motion.div
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="bg-gray-50 rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="flex gap-6">
              {/* Icon */}
              <div className="flex-shrink-0">
                <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center shadow-lg">
                  <HiAcademicCap size={32} className="text-white" />
                </div>
              </div>

              {/* Content */}
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Bachelor's of Science in Computer Science
                </h3>
                <h4 className="text-xl font-semibold text-primary mb-3">
                  Texas State University
                </h4>
                <div className="flex items-center gap-2 text-gray-600 mb-3">
                  <HiCalendar className="text-secondary" />
                  <span>Graduated: December 2021</span>
                </div>
                <div className="inline-block bg-blue-50 text-primary font-semibold px-4 py-2 rounded-lg">
                  Minor in Mathematics
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
