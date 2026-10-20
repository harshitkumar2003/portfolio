import { site } from '../data/site';

export function Hero() {
  return (
    <header id="home" className="hero">
      <div className="section__inner">
        <h1 className="hero__title">
          Hi, I&apos;m <span>{site.name}</span>
        </h1>
        <ul className="hero__roles" aria-label="Roles">
          {site.roles.map((r) => <li key={r} className="chip">{r}</li>)}
        </ul>
        <p className="hero__intro">{site.heroIntro}</p>
        <div className="hero__cta">
          <a className="btn btn--primary" href={site.resumeHref} target="_blank" rel="noopener noreferrer">View my Resume →</a>
          <a className="btn" href="#contact">Contact Me</a>
        </div>
      </div>
    </header>
  );
}
