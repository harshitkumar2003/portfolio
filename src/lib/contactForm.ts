export interface ContactValues { name: string; email: string; message: string; _gotcha?: string }
export type ContactErrors = Partial<Record<'name' | 'email' | 'message', string>>;
export type SubmitResult = { ok: true } | { ok: false; reason: 'validation' | 'server' | 'network' | 'spam' };

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export function validate(v: ContactValues): ContactErrors {
  const e: ContactErrors = {};
  if (!v.name.trim()) e.name = 'Please enter your name.';
  if (!v.email.trim()) e.email = 'Please enter your email.';
  else if (!EMAIL_RE.test(v.email.trim())) e.email = 'Please enter a valid email address.';
  if (!v.message.trim()) e.message = 'Please write a message.';
  else if (v.message.trim().length < 10) e.message = 'Message should be at least 10 characters.';
  return e;
}

/** Posts to the existing Formspree endpoint. Honeypot (_gotcha) is the Formspree-supported anti-spam field. */
export async function submitContact(
  endpoint: string,
  v: ContactValues,
  fetchImpl: typeof fetch = fetch,
): Promise<SubmitResult> {
  if (Object.keys(validate(v)).length) return { ok: false, reason: 'validation' };
  if (v._gotcha) return { ok: false, reason: 'spam' };
  const body = new FormData();
  body.append('name', v.name.trim());
  body.append('email', v.email.trim());
  body.append('message', v.message.trim());
  try {
    const res = await fetchImpl(endpoint, { method: 'POST', body, headers: { Accept: 'application/json' } });
    return res.ok ? { ok: true } : { ok: false, reason: 'server' };
  } catch {
    return { ok: false, reason: 'network' };
  }
}
