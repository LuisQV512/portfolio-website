import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-slate-950 border-t border-white/10 text-white py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-lg font-semibold">Luis Quiroz Viveros</p>
            <p className="text-sm text-slate-400">Software Engineer</p>
          </div>

          <div className="flex gap-6">
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
        </div>

        <div className="mt-6 pt-6 border-t border-white/10 text-center text-sm text-slate-400">
          <p>&copy; {new Date().getFullYear()} Luis Quiroz Viveros. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
