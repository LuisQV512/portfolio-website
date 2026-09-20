import { useEffect, useRef } from 'react';
import { motion, useInView, useMotionValue, useTransform, animate } from 'framer-motion';
import { FaPython, FaJsSquare, FaJava, FaReact, FaNode, FaGitAlt, FaAws, FaDocker, FaMicrosoft } from 'react-icons/fa';
import { SiPostgresql, SiSpringboot, SiKubernetes, SiTypescript, SiDotnet } from 'react-icons/si';
import SectionTitle from './SectionTitle';

const CountUpStat = ({ value, suffix, label }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  useEffect(() => {
    if (!isInView) return;
    const controls = animate(count, value, { duration: 1.2, ease: 'easeOut' });
    return controls.stop;
  }, [isInView, value, count]);

  return (
    <div ref={ref} className="text-center p-6 bg-white/5 border border-white/10 rounded-lg">
      <h4 className="text-4xl md:text-5xl font-bold text-primary mb-1">
        <motion.span>{rounded}</motion.span>{suffix}
      </h4>
      <p className="text-slate-400 text-sm md:text-base">{label}</p>
    </div>
  );
};

const About = () => {
  const skillGroups = [
    {
      category: 'Languages',
      items: [
        { name: 'Java', icon: <FaJava size={18} /> },
        { name: 'TypeScript', icon: <SiTypescript size={18} /> },
        { name: 'JavaScript', icon: <FaJsSquare size={18} /> },
        { name: 'Python', icon: <FaPython size={18} /> },
      ],
    },
    {
      category: 'Frameworks',
      items: [
        { name: '.NET', icon: <SiDotnet size={18} /> },
        { name: 'Spring Boot', icon: <SiSpringboot size={18} /> },
        { name: 'React', icon: <FaReact size={18} /> },
        { name: 'Node.js', icon: <FaNode size={18} /> },
      ],
    },
    {
      category: 'Cloud & Infra',
      items: [
        { name: 'AWS', icon: <FaAws size={18} /> },
        { name: 'Azure', icon: <FaMicrosoft size={18} /> },
        { name: 'Docker', icon: <FaDocker size={18} /> },
        { name: 'Kubernetes', icon: <SiKubernetes size={18} /> },
      ],
    },
    {
      category: 'Data & Tools',
      items: [
        { name: 'PostgreSQL', icon: <SiPostgresql size={18} /> },
        { name: 'Git', icon: <FaGitAlt size={18} /> },
      ],
    },
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
    <section id="about" className="relative bg-slate-900 overflow-hidden">
      <div aria-hidden="true" className="pointer-events-none absolute -top-24 -right-24 w-96 h-96 rounded-full bg-primary/10 blur-3xl" />
      <div className="section-container relative">
        <SectionTitle>About Me</SectionTitle>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Bio Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-3xl font-bold text-white mb-4">
              Professional Summary
            </h3>
            <div className="space-y-4 text-slate-300 text-lg leading-relaxed">
              <p>
                I'm a Software Engineer at Dewar Insurance, leading full-stack modernization of a legacy
                COBOL-based internal system. I'm rebuilding it with a .NET backend and TypeScript front end,
                connecting third-party platforms and supporting the internal, employee-facing workflows the
                business runs on.
              </p>
              <p>
                With over 4 years of experience across Dewar Insurance, USAA, and General Motors, I've executed
                end-to-end cloud migrations, optimized database performance, and implemented CI/CD pipelines
                that improve deployment consistency. My expertise spans Java, C#/.NET, JavaScript/TypeScript,
                Python, and modern cloud technologies including Azure and AWS.
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
            <h3 className="text-3xl font-bold text-white mb-6">
              Technical Skills
            </h3>
            <motion.div
              className="space-y-5"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {skillGroups.map((group) => (
                <motion.div key={group.category} variants={itemVariants}>
                  <h4 className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-2">
                    {group.category}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((skill) => (
                      <span
                        key={skill.name}
                        className="group inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm font-medium text-slate-300 hover:text-primary hover:border-primary/40 transition-all duration-300"
                      >
                        <span className="text-slate-500 group-hover:text-primary transition-colors duration-300">{skill.icon}</span>
                        {skill.name}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Credibility strip */}
        <motion.div
          className="mt-16 grid grid-cols-3 gap-4 md:gap-8 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {[
            { value: 4, suffix: '+', label: 'Years Experience' },
            { value: 3, suffix: '', label: 'Companies' },
            { value: 14, suffix: '+', label: 'Technologies' },
          ].map((stat) => (
            <CountUpStat key={stat.label} {...stat} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
