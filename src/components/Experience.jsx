import { motion } from 'framer-motion';
import { HiBriefcase, HiCalendar, HiLocationMarker } from 'react-icons/hi';

const Experience = () => {
  const experiences = [
    {
      company: 'USAA',
      location: 'San Antonio, TX',
      title: 'Software Engineer II',
      period: 'November 2024 - Present',
      current: true,
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

  return (
    <section id="experience" className="bg-white">
      <div className="section-container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Work Experience
        </motion.h2>

        <div className="max-w-4xl mx-auto">
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
                <div className="absolute left-8 top-16 bottom-0 w-0.5 bg-gray-200 -mb-12" />
              )}

              <div className="flex gap-6">
                {/* Timeline Dot */}
                <div className="flex-shrink-0">
                  <div className={`w-16 h-16 rounded-full ${exp.current ? 'bg-primary' : 'bg-secondary'} flex items-center justify-center shadow-lg`}>
                    <HiBriefcase size={28} className="text-white" />
                  </div>
                </div>

                {/* Content Card */}
                <div className="flex-1 bg-gray-50 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  {/* Header */}
                  <div className="mb-4">
                    <div className="flex items-start justify-between flex-wrap gap-2 mb-2">
                      <div>
                        {exp.titles ? (
                          // Multiple titles for the same company
                          <>
                            <h3 className="text-2xl font-bold text-gray-900 mb-1">
                              {exp.titles[1].title}
                            </h3>
                            <p className="text-sm text-gray-600 mb-2">{exp.titles[1].period}</p>
                            <h3 className="text-2xl font-bold text-gray-900 mb-1">
                              {exp.titles[0].title}
                            </h3>
                            <p className="text-sm text-gray-600">{exp.titles[0].period}</p>
                          </>
                        ) : (
                          // Single title
                          <h3 className="text-2xl font-bold text-gray-900">
                            {exp.title}
                          </h3>
                        )}
                      </div>
                      {exp.current && (
                        <span className="bg-green-100 text-green-800 text-xs font-semibold px-3 py-1 rounded-full">
                          Current
                        </span>
                      )}
                    </div>
                    <h4 className="text-xl font-semibold text-primary mb-3">
                      {exp.company}
                    </h4>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-600">
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
                      <li key={idx} className="flex gap-2 text-gray-700">
                        <span className="text-secondary mt-1.5">•</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
