import { profile, experience, skills, education } from './content';

const Entry = ({ title, years, subtitle, children }) => (
  <article className="entry">
    <header>
      <h3>{title}</h3>
      <span className="muted">{years}</span>
    </header>
    {subtitle && <p className="muted">{subtitle}</p>}
    {children}
  </article>
);

const Section = ({ title, children }) => (
  <section aria-label={title}>
    <h2>{title}</h2>
    {children}
  </section>
);

const isExternal = (href) => href.startsWith('http') || href.endsWith('.pdf');

export default function App() {
  return (
    <main>
      <header className="intro">
        <img src={profile.avatar} alt="" width="56" height="56" />
        <div>
          <h1>{profile.name}</h1>
          <p className="muted">
            {profile.role} · {profile.location}
          </p>
        </div>
      </header>

      <nav aria-label="Links" className="links">
        {profile.links.map(({ label, href }) => (
          <a key={label} href={href} {...(isExternal(href) && { target: '_blank', rel: 'noopener noreferrer' })}>
            {label}
          </a>
        ))}
      </nav>

      <Section title="Experience">
        {experience.map((job) => (
          <Entry key={job.company} title={job.company} years={job.years} subtitle={job.roles.join(' → ')}>
            <ul>
              {job.highlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>
          </Entry>
        ))}
      </Section>

      <Section title="Skills">
        <dl className="skills">
          {skills.map(({ group, items }) => (
            <div key={group}>
              <dt className="muted">{group}</dt>
              <dd>{items.join(', ')}</dd>
            </div>
          ))}
        </dl>
      </Section>

      <Section title="Education">
        {education.map((item) => (
          <Entry key={item.school} title={item.school} years={item.years} subtitle={item.degree} />
        ))}
      </Section>
    </main>
  );
}
