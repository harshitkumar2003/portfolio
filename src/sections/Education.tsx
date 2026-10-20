import { Section } from '../components/ui/Section';
import { education } from '../data/site';

export function Education() {
  return (
    <Section id="education" eyebrow="04 — Education" title="Education">
      <ol className="timeline">
        {education.map((e) => (
          <li key={e.name} className="timeline__item card">
            <h3>{e.name}</h3>
            <p className="timeline__inst">{e.institution}</p>
            <p className="timeline__dur">{e.duration}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
