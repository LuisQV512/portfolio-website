import { motion } from 'framer-motion';
import { HiDownload, HiDocumentText } from 'react-icons/hi';

const Resume = () => {
  return (
    <section id="resume" className="bg-gray-50">
      <div className="section-container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Resume
        </motion.h2>

        <motion.div
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {/* Resume Download Card */}
          <div className="bg-white rounded-lg shadow-xl p-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <HiDocumentText size={48} className="text-primary" />
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Download My Resume</h3>
                  <p className="text-gray-600">Get the full PDF with all details about my experience and skills</p>
                </div>
              </div>
              <a
                href="/Luis_QuirozViveros_Resume.pdf"
                download
                className="btn-primary inline-flex items-center gap-2 whitespace-nowrap"
              >
                <HiDownload size={20} />
                Download PDF
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Resume;
