import { site, socials } from '../../data/site';

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div>
          <p className="footer__name">{site.name}</p>
          <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
        </div>
        <nav className="footer__nav" aria-label="Footer">
          <a href={socials.github} target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href={socials.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href={`mailto:${site.email}`}>Email</a>
          <a href="#home">Back to top ↑</a>
        </nav>
      </div>
    </footer>
  );
}
