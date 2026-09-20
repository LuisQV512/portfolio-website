import { motion } from 'framer-motion';
import { HiBriefcase, HiCalendar, HiLocationMarker } from 'react-icons/hi';
import SectionTitle from './SectionTitle';

const Experience = () => {
  const experiences = [
    {
      company: 'Dewar Insurance',
      location: 'Boston, MA',
      title: 'Software Engineer',
      period: 'March 2026 - Present',
      current: true,
      highlights: [
        'Leading full-stack modernization of a legacy COBOL-based internal system, rebuilding it with a .NET backend and TypeScript front end',
        'Designing and developing RESTful APIs in .NET to support internal, employee-facing tools used to run core business operations',
        'Integrating third-party platforms into the new system as part of the broader modernization effort',
        'Owning end-to-end delivery across backend and frontend for a system used business-wide'
      ]
    },
    {
      company: 'USAA',
      location: 'San Antonio, TX',
      title: 'Software Engineer II',
      period: 'November 2024 - March 2026',
      current: false,
      highlights: [
        'Developed full-stack modernization solutions for high-traffic claim intake across Property & Claims applications serving thousands of members monthly',
        'Developed Java Spring Boot RESTful APIs on AWS infrastructure, replacing legacy systems to support high-volume claim processing',
        'Implemented observability solutions using Datadog and Grafana, creating dashboards and logging infrastructure that accelerated incident detection and resolution',
        'Collaborated with cross-functional stakeholders to translate business requirements into production-ready features'
      ]
    },
    {
      company: 'General Motors',
      location: 'Austin, TX',
      titles: [
        { title: 'Backend Software Developer', period: 'January 2022 - March 2023' },
        { title: 'Cloud Platform Software Developer', period: 'March 2023 - June 2024' }
      ],
      period: 'January 2022 - June 2024',
      current: false,
      highlights: [
        'Executed end-to-end migration of legacy Java applications to Azure, maintaining system availability with zero service disruption',
        'Developed and maintained Java-based RESTful APIs and microservices that handled high traffic volumes during peak demand periods',
        'Implemented automated CI/CD pipelines using GitLab CI and Backstage templates, improving deployment consistency for Azure-based microservices',
        'Optimized database performance via SQL query tuning and indexing, reducing query response times across PostgreSQL, Oracle, and Azure SQL databases',
        'Developed migration playbooks and support protocols that decreased post-migration issue resolution time by 30%'
      ]
    }
  ];

  const handleSpotlight = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty('--spot-x', `${e.clientX - rect.left}px`);
    e.currentTarget.style.setProperty('--spot-y', `${e.clientY - rect.top}px`);
  };

  return (
    <section id="experience" className="relative bg-slate-950 overflow-hidden">
      <div aria-hidden="true" className="dot-grid pointer-events-none absolute inset-0 opacity-40 [mask-image:linear-gradient(to_bottom,transparent,black_20%,black_80%,transparent)]" />
      <div aria-hidden="true" className="pointer-events-none absolute bottom-0 -left-32 w-96 h-96 rounded-full bg-secondary/10 blur-3xl" />
      <div className="section-container relative">
        <div className="max-w-4xl mx-auto">
          <SectionTitle>Work Experience</SectionTitle>
          {experiences.map((exp, index) => (
            <motion.div
              key={`${exp.company}-${exp.title}-${index}`}
              className="relative mb-12 last:mb-0"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              {/* Timeline Line */}
              {index !== experiences.length - 1 && (
                <div className="absolute left-8 top-16 bottom-0 w-0.5 bg-slate-700 -mb-12" />
              )}

              <div className="flex gap-6">
                {/* Timeline Dot */}
                <div className="flex-shrink-0">
                  <div className={`w-16 h-16 rounded-full ${exp.current ? 'bg-fill' : 'bg-secondary'} flex items-center justify-center shadow-lg`}>
                    <HiBriefcase size={28} className="text-white" />
                  </div>
                </div>

                {/* Content Card */}
                <motion.div
                  className="spot-card flex-1 bg-white/5 backdrop-blur-md border border-white/10 rounded-lg p-6 hover:border-primary/30 transition-colors duration-300"
                  onMouseMove={handleSpotlight}
                  whileHover={{ y: -4 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                >
                  {/* Header */}
                  <div className="mb-4">
                    <div className="flex items-start justify-between flex-wrap gap-2 mb-2">
                      <div>
                        {exp.titles ? (
                          // Multiple titles for the same company
                          <>
                            <h3 className="text-2xl font-bold text-white mb-1">
                              {exp.titles[1].title}
                            </h3>
                            <p className="text-sm text-slate-400 mb-2">{exp.titles[1].period}</p>
                            <h3 className="text-2xl font-bold text-white mb-1">
                              {exp.titles[0].title}
                            </h3>
                            <p className="text-sm text-slate-400">{exp.titles[0].period}</p>
                          </>
                        ) : (
                          // Single title
                          <h3 className="text-2xl font-bold text-white">
                            {exp.title}
                          </h3>
                        )}
                      </div>
                      {exp.current && (
                        <span className="bg-primary/10 text-primary text-xs font-semibold px-3 py-1 rounded-full">
                          Current
                        </span>
                      )}
                    </div>
                    <h4 className="text-xl font-semibold text-primary mb-3">
                      {exp.company}
                    </h4>
                    <div className="flex flex-wrap gap-4 text-sm text-slate-400">
                      <div className="flex items-center gap-1">
                        <HiCalendar className="text-secondary" />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <HiLocationMarker className="text-secondary" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Highlights */}
                  <ul className="space-y-2">
                    {exp.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex gap-2 text-slate-300">
                        <span className="text-secondary mt-1.5">•</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
