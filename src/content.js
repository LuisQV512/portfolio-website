// All site copy lives here. Keep it in sync with public/Luis_QuirozViveros_Resume.pdf.

export const profile = {
  name: 'Luis Quiroz Viveros',
  role: 'Software Engineer',
  location: 'Boston',
  avatar: '/avatar.webp',
  links: [
    { label: 'Email', href: 'mailto:lquirozviveros@gmail.com' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/luisquirozviveros' },
    { label: 'GitHub', href: 'https://github.com/LuisQV512' },
    { label: 'Resume', href: '/Luis_QuirozViveros_Resume.pdf' },
  ],
};

export const experience = [
  {
    company: 'Dewar Insurance',
    years: '2026 – Present',
    roles: ['Software Engineer'],
    highlights: [
      'Helping replace a legacy COBOL system with a new .NET, Angular, and Azure platform for the full office',
      'Building integrations with school information system and tuition vendor platforms, spanning API design, authentication, and data sync',
      'Shaping architecture and engineering practices as one of two full-time engineers',
      'Mentoring interns from onboarding through production code',
    ],
  },
  {
    company: 'USAA',
    years: '2024 – 2026',
    roles: ['Software Engineer II'],
    highlights: [
      'Rebuilt Property & Claims intake flows (roadside assistance, glass replacement, auto claims) from a legacy Java, non-React UI into React front ends, implementing specs from business and design teams',
      'Built Java Spring Boot REST APIs on AWS to replace legacy claim-processing services, including third-party API integrations with payload transformation and data synchronization',
      'Built Datadog and Grafana dashboards, saved queries, and logging the team used to detect and diagnose outages, timeouts, and errors in claim services',
    ],
  },
  {
    company: 'General Motors',
    years: '2022 – 2024',
    roles: ['Backend Software Developer', 'Cloud Platform Software Developer'],
    highlights: [
      'Migrated dozens of Java microservices from legacy Java versions to modern Java on Azure App Service, and wrote migration playbooks and support runbooks for post-migration issues',
      'Built GitLab CI pipelines and Backstage templates to standardize Azure microservice builds and deployments',
      'Developed and maintained Java REST APIs and microservices backed by PostgreSQL, Oracle, and Azure SQL',
    ],
  },
];

export const skills = [
  { group: 'Languages', items: ['C#', 'Java', 'TypeScript', 'JavaScript', 'Python', 'SQL'] },
  { group: 'Frameworks', items: ['ASP.NET Core', 'Entity Framework Core', 'Angular', 'React', 'Spring Boot'] },
  { group: 'Platforms', items: ['Azure', 'AWS', 'PostgreSQL', 'Docker', 'Kubernetes', 'GitHub Actions'] },
];

export const education = [
  {
    school: 'Texas State University',
    years: '2021',
    degree: 'B.S. Computer Science, Minor in Mathematics',
  },
];
