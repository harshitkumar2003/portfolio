import { Section } from '../components/ui/Section';
import { Picture } from '../components/ui/Picture';
import { gallery } from '../data/site';

export function Gallery() {
  return <Section id="gallery" eyebrow="07 — Off the screen" title="Life in frames">
    <p className="gallery-intro">A personal photo journal — moments beyond the code.</p>
    <div className="photo-marquee" aria-label="Continuously scrolling personal photo gallery">
      <div className="photo-marquee__track">
        {[0, 1].map((copy) => <div className="photo-marquee__group" key={copy} aria-hidden={copy === 1}>
          {gallery.map((g, index) => <figure key={g.image} className="photo-marquee__card">
            <Picture name={g.image} alt={copy === 1 ? '' : g.alt} sizes="(min-width: 768px) 270px, 200px" />
            <figcaption>{String(index + 1).padStart(2, '0')} / FRAME</figcaption>
          </figure>)}
        </div>)}
      </div>
    </div>
  </Section>;
}
