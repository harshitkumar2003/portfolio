import { Section } from '../components/ui/Section';
import { Picture } from '../components/ui/Picture';
import { about, socials, site } from '../data/site';

export function About() {
  return (
    <Section id="about" eyebrow="01 — Behind the Screen" title="About">
      <div className="about about--atelier">
        <div className="about__visual">
          <div className="about__portrait">
            <Picture name="profile" alt="Portrait of Harshit Kumar" sizes="(min-width: 900px) 400px, 78vw" />
            <span className="about__portrait-caption">HUMAN. CURIOUS. ALWAYS BUILDING.</span>
          </div>
          <div className="about__maker" aria-hidden="true">THE<br /><span>MAKER.</span></div>
        </div>
        <div className="about__copy">
          <span className="about__asterisk" aria-hidden="true">✳</span>
          <h3 className="about__statement">MAKING<br /><em>IDEAS REAL.</em></h3>
          {about.paragraphs.map((paragraph) => <p key={paragraph.slice(0, 24)}>{paragraph}</p>)}
          <a className="about__resume" href={site.resumeHref} target="_blank" rel="noopener noreferrer">
            VIEW MY RESUME <span aria-hidden="true">↗</span>
          </a>
          <div className="social about__social">
            <a href={socials.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href={socials.github} target="_blank" rel="noopener noreferrer">GitHub</a>
          </div>
        </div>
      </div>
    </Section>
  );
}
