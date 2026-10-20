import type { ReactNode } from 'react';

interface Props { id: string; eyebrow?: string; title: string; children: ReactNode }

export function Section({ id, eyebrow, title, children }: Props) {
  return (
    <section id={id} className="section" aria-labelledby={`${id}-title`}>
      <div className="section__inner">
        {eyebrow && <p className="section__eyebrow">{eyebrow}</p>}
        <h2 id={`${id}-title`} className="section__title">{title}</h2>
        {children}
      </div>
    </section>
  );
}
