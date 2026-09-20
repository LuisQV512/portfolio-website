import { motion } from 'framer-motion';
import { HiDownload, HiDocumentText } from 'react-icons/hi';
import SectionTitle from './SectionTitle';

const Resume = () => {
  return (
    <section id="resume" className="relative bg-slate-950 overflow-hidden">
      <div aria-hidden="true" className="pointer-events-none absolute -bottom-24 left-1/2 -translate-x-1/2 w-[28rem] h-64 rounded-full bg-secondary/10 blur-3xl" />
      <div className="section-container relative">
        <div className="max-w-3xl mx-auto">
          <SectionTitle>Resume</SectionTitle>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {/* Resume Download Card */}
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-lg p-8">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex items-center gap-4">
                  <HiDocumentText size={48} className="text-primary" />
                  <div>
                    <h3 className="text-2xl font-bold text-white">Download My Resume</h3>
                    <p className="text-slate-400">Get the full PDF with all details about my experience and skills</p>
                  </div>
                </div>
                <motion.a
                  href="/Luis_QuirozViveros_Resume.pdf"
                  download
                  className="btn-primary inline-flex items-center gap-2 whitespace-nowrap"
                  whileHover={{ scale: 1.04, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                >
                  <HiDownload size={20} />
                  Download PDF
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
