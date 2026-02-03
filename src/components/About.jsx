import { motion } from 'framer-motion';
import { FaPython, FaJsSquare, FaJava, FaReact, FaNode, FaGitAlt, FaAws, FaDocker, FaMicrosoft } from 'react-icons/fa';
import { SiPostgresql, SiSpringboot, SiKubernetes } from 'react-icons/si';

const About = () => {
  const skills = [
    { name: 'Java', icon: <FaJava size={40} />, color: 'text-red-500' },
    { name: 'JavaScript', icon: <FaJsSquare size={40} />, color: 'text-yellow-500' },
    { name: 'Python', icon: <FaPython size={40} />, color: 'text-blue-500' },
    { name: 'Spring Boot', icon: <SiSpringboot size={40} />, color: 'text-green-600' },
    { name: 'React', icon: <FaReact size={40} />, color: 'text-cyan-500' },
    { name: 'Node.js', icon: <FaNode size={40} />, color: 'text-green-500' },
    { name: 'PostgreSQL', icon: <SiPostgresql size={40} />, color: 'text-blue-600' },
    { name: 'AWS', icon: <FaAws size={40} />, color: 'text-orange-500' },
    { name: 'Azure', icon: <FaMicrosoft size={40} />, color: 'text-blue-500' },
    { name: 'Docker', icon: <FaDocker size={40} />, color: 'text-blue-400' },
    { name: 'Kubernetes', icon: <SiKubernetes size={40} />, color: 'text-blue-600' },
    { name: 'Git', icon: <FaGitAlt size={40} />, color: 'text-orange-600' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="about" className="bg-white">
      <div className="section-container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          About Me
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Bio Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Professional Summary
            </h3>
            <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
              <p>
                I'm a Software Engineer II at USAA, specializing in full-stack modernization solutions
                for high-traffic applications. I develop Java Spring Boot RESTful APIs on AWS infrastructure
                and React.js user interfaces that serve thousands of users monthly.
              </p>
              <p>
                With over 3 years of experience at companies like USAA and General Motors, I've executed
                end-to-end cloud migrations, optimized database performance, and implemented CI/CD pipelines
                that improve deployment consistency. My expertise spans Java, JavaScript, Python, and modern
                cloud technologies including Azure and AWS.
              </p>
              <p>
                I'm passionate about building scalable systems, implementing observability solutions, and
                translating business requirements into production-ready features using Agile methodologies.
              </p>
            </div>
          </motion.div>

          {/* Skills Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Technical Skills
            </h3>
            <motion.div
              className="grid grid-cols-3 gap-6"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {skills.map((skill) => (
                <motion.div
                  key={skill.name}
                  variants={itemVariants}
                  className="flex flex-col items-center justify-center p-4 bg-gray-50 rounded-lg hover:shadow-lg transition-shadow duration-300 group"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className={`${skill.color} group-hover:scale-110 transition-transform duration-300`}>
                    {skill.icon}
                  </div>
                  <span className="mt-2 text-sm font-medium text-gray-700">
                    {skill.name}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Experience Highlights */}
        <motion.div
          className="mt-16 flex justify-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-center p-8 bg-blue-50 rounded-lg max-w-xs w-full">
            <h4 className="text-5xl font-bold text-primary mb-2">3+</h4>
            <p className="text-gray-700 text-lg">Years of Experience</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
