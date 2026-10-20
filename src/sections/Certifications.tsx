
import { Section } from '../components/ui/Section';

const certificates = [
  {
    id: 1,
    title: 'Available Soon...',
    issuer: '',
    file: '/images/Signature.png',
    type: 'image',
  },
  {
    id: 2,
    title: 'Partner Tech Summit',
    issuer: 'Databricks',
    file: '/images/Databricks-e-Certificate.png',
    type: 'image',
  },
  {
    id: 3,
    title: 'Data Science Certification',
    issuer: 'Oracle',
    file: '/documents/DataScience-eCertificate.pdf',
    type: 'pdf',
  },
];

export function Certifications() {
  return (
    <Section
      id="certifications"
      eyebrow="06 — Credentials"
      title="My certifications"
    >
      <p className="credentials-intro">
        Professional certifications, technical learning,
        and achievements.
      </p>

      <div className="certifications">
        {certificates.map((certificate) => (
          <article
            className="certificate-card card"
            key={certificate.id}
          >
            <div className="certificate-placeholder">
              {certificate.type === 'pdf' ? (
                <object
                  data={`${certificate.file}#page=1&toolbar=0&navpanes=0`}
                  type="application/pdf"
                  width="100%"
                  height="100%"
                  aria-label={`${certificate.title} preview`}
                >
                  <a
                    href={certificate.file}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View PDF Certificate
                  </a>
                </object>
              ) : (
                <img
                  src={certificate.file}
                  alt={`${certificate.title} certificate`}
                  loading="lazy"
                  decoding="async"
                />
              )}
            </div>

            <p className="career-meta">
              {String(certificate.id).padStart(2, '0')}
              {' / CERTIFICATION'}
            </p>

            <h3>{certificate.title}</h3>
            <p>{certificate.issuer}</p>

            <a
              className="btn"
              href={certificate.file}
              target="_blank"
              rel="noopener noreferrer"
            >
              {certificate.type === 'pdf'
                ? 'View PDF Certificate ↗'
                : 'View Certificate ↗'}
            </a>
          </article>
        ))}
      </div>
    </Section>
  );
}
