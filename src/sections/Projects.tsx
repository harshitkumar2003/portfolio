
import { useRef, useState } from 'react';
import { Section } from '../components/ui/Section';
import { CaseStudyDialog } from '../components/ui/CaseStudyDialog';
import { projects } from '../data/projects';
import type { Project } from '../data/types';

const projectImages: Record<string, string> = {
  // TOMS
  toms: '/images/Signature.png',

  // Kinetix / MethaneWatch AI
  kinetix: '/images/Signature.png',
  'kinetix-methanewatch': '/images/Signature.png',
  'methanewatch': '/images/Signature.png',
  'methanewatch-ai': '/images/Signature.png',

  // Moto-S
  'moto-s': '/images/moto-s-640.jpg',
  moto: '/images/moto-s-640.jpg',

  // BETWEEN
  between: '/images/between-640.jpg',
};

export function Projects() {
  const [selected, setSelected] = useState<Project | null>(null);
  const openerRef = useRef<HTMLElement | null>(null);

  return (
    <Section id="projects" eyebrow="03 — Projects" title="Projects">
      <div className="projects">
        {projects.map((p) => {
          const imageSrc = projectImages[p.id];

          return (
            <article key={p.id} className="project" aria-labelledby={`${p.id}-t`}>
              <div className="project__media">
                {imageSrc ? (
                  <img
                    src={imageSrc}
                    alt={p.image?.alt || `${p.title} project`}
                    sizes="(min-width: 900px) 40rem, 92vw"
                    loading="lazy"
                    decoding="async"
                    style={{
                      display: 'block',
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                    }}
                  />
                ) : (
                  <div
                    className="project__concept"
                    role="img"
                    aria-label={p.conceptLabel}
                  >
                    <span>{p.conceptLabel}</span>
                  </div>
                )}
              </div>

              <div className="project__body">
                {p.featured && <span className="project__badge">Featured</span>}
                <h3 id={`${p.id}-t`} className="project__title">{p.title}</h3>
                <p className="project__cat">{p.category}</p>
                <p>{p.summary}</p>
                {p.stack.length > 0 && (
                  <p className="project__cat">{p.stack.join(' | ')}</p>
                )}

                <div className="project__actions">
                  {p.caseStudy && (
                    <button
                      type="button"
                      className="btn btn--primary"
                      onClick={(e) => {
                        openerRef.current = e.currentTarget;
                        setSelected(p);
                      }}
                    >
                      {p.caseStudy.cta}
                    </button>
                  )}

                  {p.repoUrl && (
                    <a className="btn" href={p.repoUrl} target="_blank" rel="noopener noreferrer">
                      GitHub
                    </a>
                  )}

                  {p.demoUrl && (
                    <a className="btn" href={p.demoUrl} target="_blank" rel="noopener noreferrer">
                      Live
                    </a>
                  )}
                </div>
              </div>
            </article>
          );
        })}
      </div>

      <CaseStudyDialog
        project={selected}
        onClose={() => {
          setSelected(null);
          openerRef.current?.focus();
        }}
      />
    </Section>
  );
}
