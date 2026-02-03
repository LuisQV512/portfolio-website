import { motion } from 'framer-motion';
import { HiDownload, HiMail } from 'react-icons/hi';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-white pt-16">
      <div className="section-container text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          {/* Profile Image */}
          <picture>
            <source srcSet="/IMG_0610.webp" type="image/webp" />
            <img
              src="/IMG_0610.JPG"
              alt="Luis Quiroz Viveros"
              className="w-48 h-48 mx-auto mb-8 rounded-full object-cover shadow-2xl"
              style={{ objectPosition: 'center 20%' }}
            />
          </picture>
        </motion.div>

        <motion.h1
          className="text-5xl md:text-7xl font-bold text-gray-900 mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Luis Quiroz Viveros
        </motion.h1>

        <motion.h2
          className="text-2xl md:text-3xl text-primary mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          Software Engineer
        </motion.h2>

        <motion.p
          className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Full-stack software engineer developing modern web applications and backend systems for large-scale platforms.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <a href="#contact" className="btn-primary inline-flex items-center justify-center gap-2">
            <HiMail size={20} />
            Contact Me
          </a>
          <a href="/Luis_QuirozViveros_Resume.pdf" className="btn-secondary inline-flex items-center justify-center gap-2" download>
            <HiDownload size={20} />
            Download Resume
          </a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          className="flex gap-6 justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <a
            href="https://github.com/LuisQV512"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-primary transform hover:scale-110 transition-all duration-300"
          >
            <FaGithub size={32} />
          </a>
          <a
            href="https://linkedin.com/in/luisquirozviveros"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-primary transform hover:scale-110 transition-all duration-300"
          >
            <FaLinkedin size={32} />
          </a>
          <a
            href="mailto:lquirozviveros@gmail.com"
            className="text-gray-600 hover:text-primary transform hover:scale-110 transition-all duration-300"
          >
            <HiMail size={32} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
