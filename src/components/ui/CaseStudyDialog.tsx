import { useEffect, useRef } from 'react';
import type { Project } from '../../data/types';

interface Props { project: Project | null; onClose: () => void }

/** Native <dialog>: focus trap, Esc-to-close and inert background are provided by the browser. */
export function CaseStudyDialog({ project, onClose }: Props) {
  const ref = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const d = ref.current;
    if (!d) return;
    if (project && !d.open) d.showModal?.();
    if (!project && d.open) d.close?.();
  }, [project]);

  const cs = project?.caseStudy;
  return (
    <dialog
      ref={ref}
      className="dialog"
      aria-labelledby="cs-title"
      onClose={onClose}
      onClick={(e) => { if (e.target === ref.current) ref.current?.close(); }}
    >
      {project && cs && (
        <>
          <button type="button" className="btn dialog__close" onClick={() => ref.current?.close()}>Close ✕</button>
          <div className="dialog__inner">
            <header>
              <p className="project__cat">{project.category}</p>
              <h2 id="cs-title">{project.title}</h2>
              <p>{project.subtitle}</p>
            </header>
            <section>
              <h3>Summary</h3>
              <p>{project.summary}</p>
              <p><strong>Contribution:</strong> {project.contribution}</p>
            </section>
            {project.workflow && (
              <section aria-labelledby="cs-flow">
                <h3 id="cs-flow">Workflow (MVP order)</h3>
                <ol className="steps">
                  {project.workflow.map((s) => <li key={s.id}>{s.label}</li>)}
                </ol>
              </section>
            )}
            {cs.sections.map((s) => (
              <section key={s.heading}>
                <h3>{s.heading}</h3>
                {s.body.map((b) => <p key={b.slice(0, 30)}>{b}</p>)}
              </section>
            ))}
            <section>
              <h3>Implementation boundaries</h3>
              <ul className="caveats">
                {cs.caveats.map((c) => <li key={c}>{c}</li>)}
              </ul>
            </section>
            {project.conceptLabel && <p className="project__cat">{project.conceptLabel}</p>}
          </div>
        </>
      )}
    </dialog>
  );
}
