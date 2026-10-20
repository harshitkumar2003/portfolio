
import { useState, type FormEvent } from 'react';
import { Section } from '../components/ui/Section';
import { site, socials } from '../data/site';
import { validate, type ContactErrors } from '../lib/contactForm';

type Status = {
  state: 'idle' | 'sending' | 'success' | 'error';
  text: string;
};

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xwlvjynr';

export function Contact() {
  const [errors, setErrors] = useState<ContactErrors>({});
  const [status, setStatus] = useState<Status>({
    state: 'idle',
    text: '',
  });

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (status.state === 'sending') return;

    const form = e.currentTarget;
    const fd = new FormData(form);

    const values = {
      name: String(fd.get('name') ?? '').trim(),
      email: String(fd.get('email') ?? '').trim(),
      message: String(fd.get('message') ?? '').trim(),
      _gotcha: String(fd.get('_gotcha') ?? ''),
    };

    const errs = validate(values);
    setErrors(errs);

    if (Object.keys(errs).length > 0) {
      setStatus({
        state: 'error',
        text: 'Please fix the highlighted fields.',
      });
      return;
    }

    // Honeypot spam protection
    if (values._gotcha) {
      setStatus({
        state: 'success',
        text: 'Thank you! Your message has been received.',
      });
      return;
    }

    setStatus({
      state: 'sending',
      text: 'Sending your message…',
    });

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
        },
        body: fd,
      });

      if (response.ok) {
        form.reset();
        setErrors({});
        setStatus({
          state: 'success',
          text: 'Thank you! Your message has been sent successfully.',
        });
      } else {
        setStatus({
          state: 'error',
          text: 'Failed to send message. Please try again later.',
        });
      }
    } catch {
      setStatus({
        state: 'error',
        text: 'Network error. Please check your connection and try again.',
      });
    }
  }

  const sending = status.state === 'sending';

  return (
    <Section
      id="contact"
      eyebrow="06 — Contact"
      title="Contact Me"
    >
      <div className="contact">
        <div>
          <h3>Get in Touch</h3>

          <p>
            If you'd like to collaborate or have any questions,
            feel free to reach out!
          </p>

          <ul className="contact__list">
            <li>
              Email:{' '}
              <a href={`mailto:${site.email}`}>
                {site.email}
              </a>
            </li>

            <li>
              Phone:{' '}
              <a href={`tel:${site.phone.replace(/\s/g, '')}`}>
                {site.phone}
              </a>
            </li>

            <li>
              <a
                href={socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn Profile
              </a>
            </li>

            <li>
              <a
                href={socials.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub Profile
              </a>
            </li>
          </ul>
        </div>

        <form
          className="form"
          onSubmit={onSubmit}
          noValidate
        >
          <div className="field">
            <label htmlFor="cf-name">
              Your Name
            </label>

            <input
              id="cf-name"
              name="name"
              type="text"
              autoComplete="name"
              required
              aria-invalid={errors.name ? 'true' : undefined}
              aria-describedby={
                errors.name ? 'cf-name-err' : undefined
              }
            />

            {errors.name && (
              <p id="cf-name-err" className="field__error">
                {errors.name}
              </p>
            )}
          </div>

          <div className="field">
            <label htmlFor="cf-email">
              Your Email
            </label>

            <input
              id="cf-email"
              name="email"
              type="email"
              autoComplete="email"
              required
              aria-invalid={errors.email ? 'true' : undefined}
              aria-describedby={
                errors.email ? 'cf-email-err' : undefined
              }
            />

            {errors.email && (
              <p id="cf-email-err" className="field__error">
                {errors.email}
              </p>
            )}
          </div>

          <div className="field">
            <label htmlFor="cf-message">
              How can I help you
            </label>

            <textarea
              id="cf-message"
              name="message"
              rows={5}
              required
              aria-invalid={errors.message ? 'true' : undefined}
              aria-describedby={
                errors.message ? 'cf-message-err' : undefined
              }
            />

            {errors.message && (
              <p id="cf-message-err" className="field__error">
                {errors.message}
              </p>
            )}
          </div>

          {/* Spam protection */}
          <div className="hp" aria-hidden="true">
            <label>
              Leave this field empty
              <input
                type="text"
                name="_gotcha"
                tabIndex={-1}
                autoComplete="off"
              />
            </label>
          </div>

          <button
            className="btn btn--primary"
            type="submit"
            disabled={sending}
          >
            {sending ? 'Sending…' : 'Send Message'}
          </button>

          <p
            className="form__status"
            role="status"
            aria-live="polite"
            data-state={status.state}
          >
            {status.text}
          </p>
        </form>
      </div>
    </Section>
  );
}
