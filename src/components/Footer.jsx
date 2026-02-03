import { FaGithub, FaLinkedin, FaHeart } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-lg font-semibold">Luis Quiroz Viveros</p>
            <p className="text-sm text-blue-200">Software Engineer</p>
          </div>

          <div className="flex gap-6 mb-4 md:mb-0">
            <a
              href="https://github.com/LuisQV512"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition-colors duration-300"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="https://linkedin.com/in/luisquirozviveros"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition-colors duration-300"
            >
              <FaLinkedin size={24} />
            </a>
          </div>

          <div className="text-sm text-blue-200 flex items-center gap-1">
            Made with <FaHeart className="text-red-400" /> using React & Tailwind CSS
          </div>
        </div>

        <div className="mt-6 pt-6 border-t border-blue-700 text-center text-sm text-blue-200">
          <p>&copy; {new Date().getFullYear()} Luis Quiroz Viveros. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
