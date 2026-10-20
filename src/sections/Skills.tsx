import { Section } from '../components/ui/Section';
import { skills } from '../data/site';

export function Skills() {
  return (
    <Section id="skills" eyebrow="02 — Skills" title="Skills">
      <div className="skills">
        {skills.map((s) => (
          <article key={s.category} className="card">
            <h3>{s.category}</h3>
            <ul className="tags">
              {s.items.map((i) => <li key={i} className="chip">{i}</li>)}
            </ul>
          </article>
        ))}
      </div>
    </Section>
  );
}
