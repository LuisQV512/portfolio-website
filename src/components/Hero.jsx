import { motion } from 'framer-motion';
import { HiDownload, HiMail } from 'react-icons/hi';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-[100dvh] flex items-center bg-slate-950 pt-24 pb-16 overflow-hidden">
      <div aria-hidden="true" className="dot-grid pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />
      <span
        aria-hidden="true"
        className="pointer-events-none select-none absolute -bottom-10 left-1/2 md:left-0 -translate-x-1/2 md:translate-x-0 whitespace-nowrap text-[5rem] sm:text-[8rem] md:text-[10rem] lg:text-[12rem] font-extrabold tracking-tighter text-primary/10"
      >
        ENGINEER
      </span>
      <div className="section-container relative">
        <div className="grid md:grid-cols-[3fr_2fr] gap-12 md:gap-16 items-center">
          {/* Text column */}
          <div className="text-center md:text-left order-2 md:order-1">
            <motion.h1
              className="text-6xl md:text-7xl font-bold text-white mb-4 tracking-tighter"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Luis Quiroz Viveros
            </motion.h1>

            <motion.h2
              className="text-2xl md:text-3xl text-primary mb-6 font-medium"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Software Engineer
            </motion.h2>

            <motion.p
              className="text-lg md:text-xl text-slate-400 max-w-lg mx-auto md:mx-0 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Full-stack software engineer who modernizes legacy systems into scalable, modern applications.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <motion.a
                href="#contact"
                className="btn-primary inline-flex items-center justify-center gap-2"
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: 'spring', stiffness: 400, damping: 20 }}
              >
                <HiMail size={20} />
                Contact Me
              </motion.a>
              <motion.a
                href="/Luis_QuirozViveros_Resume.pdf"
                className="btn-secondary inline-flex items-center justify-center gap-2"
                download
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: 'spring', stiffness: 400, damping: 20 }}
              >
                <HiDownload size={20} />
                Download Resume
              </motion.a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              className="flex gap-6 justify-center md:justify-start"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <a
                href="https://github.com/LuisQV512"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-primary transform hover:scale-110 transition-all duration-300"
              >
                <FaGithub size={32} />
              </a>
              <a
                href="https://linkedin.com/in/luisquirozviveros"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-primary transform hover:scale-110 transition-all duration-300"
              >
                <FaLinkedin size={32} />
              </a>
              <a
                href="mailto:lquirozviveros@gmail.com"
                className="text-slate-400 hover:text-primary transform hover:scale-110 transition-all duration-300"
              >
                <HiMail size={32} />
              </a>
            </motion.div>
          </div>

          {/* Image column */}
          <motion.div
            className="relative order-1 md:order-2 flex justify-center md:justify-end"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="absolute inset-0 -z-10 bg-primary/20 rounded-full blur-2xl scale-90" aria-hidden="true" />
            <picture>
              <source srcSet="/IMG_0610.webp" type="image/webp" />
              <img
                src="/IMG_0610.JPG"
                alt="Luis Quiroz Viveros"
                className="w-56 h-56 md:w-72 md:h-72 rounded-full object-cover shadow-2xl ring-2 ring-primary/40 ring-offset-4 ring-offset-slate-950"
              />
            </picture>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
