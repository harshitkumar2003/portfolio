import { useCallback, useRef, useState } from 'react';
import { navItems } from '../../data/site';
import { useActiveSection } from '../../hooks/useActiveSection';
import { useDismiss } from '../../hooks/useDismiss';

const ids = navItems.map((n) => n.id);

export function Nav() {
  const [open, setOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const active = useActiveSection(ids);

  const close = useCallback(() => {
    setOpen(false);
    toggleRef.current?.focus();
  }, []);
  useDismiss(navRef, open, close);

  return (
    <nav ref={navRef} className="nav" aria-label="Primary">
      <a className="nav__logo" href="#home" onClick={() => setOpen(false)}>Harshit Kumar</a>
      <button
        ref={toggleRef}
        type="button"
        className="nav__toggle"
        aria-expanded={open}
        aria-controls="nav-panel"
        aria-label={open ? 'Close menu' : 'Open menu'}
        onClick={() => setOpen((o) => !o)}
      >
        <span aria-hidden="true">{open ? '✕' : '☰'}</span>
      </button>
      <div id="nav-panel" className="nav__panel" data-open={open}>
        <ul className="nav__list">
          {navItems.filter((n) => n.id !== 'contact').map((n) => (
            <li key={n.id}>
              <a className="nav__link" href={`#${n.id}`} aria-current={active === n.id ? 'true' : undefined} onClick={() => setOpen(false)}>{n.label}</a>
            </li>
          ))}
        </ul>
        <a className="btn btn--primary nav__cta" href="#contact" aria-current={active === 'contact' ? 'true' : undefined} onClick={() => setOpen(false)}>Contact</a>
      </div>
    </nav>
  );
}
