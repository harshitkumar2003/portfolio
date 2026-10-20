import { Nav } from '../components/layout/Nav';
import { Footer } from '../components/layout/Footer';
import { Hero } from '../sections/Hero';
import { About } from '../sections/About';
import { Skills } from '../sections/Skills';
import { Projects } from '../sections/Projects';
import { Education } from '../sections/Education';
import { Gallery } from '../sections/Gallery';
import { Career } from '../sections/Career';
import { Certifications } from '../sections/Certifications';
import { Ticker } from '../sections/Ticker';
import { Contact } from '../sections/Contact';

export function App() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <Nav />
      <main id="main">
        <Hero />
        <Ticker />
        <About />
        <Skills />
        <Projects />
        <Career />
        <Education />
        <Certifications />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
