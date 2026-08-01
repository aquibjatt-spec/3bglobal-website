import { useState, type FormEvent } from 'react';
import {
  ArrowRight,
  Send,
  CheckCircle2,
  Mail,
  Globe2,
  Clock,
  ShieldCheck,
  Upload,
  AlertCircle,
} from 'lucide-react';
import { Reveal } from '@/components/Reveal';
import { supabase } from '@/lib/supabase';
import { services, companyEmail } from '@/data/site';

const budgetRanges = [
  'Under $1,000',
  '$1,000 – $5,000',
  '$5,000 – $15,000',
  '$15,000 – $50,000',
  '$50,000+',
  'Not sure yet',
];

const trustPoints = [
  { icon: Clock, title: 'Response within 1 business day', desc: 'A project manager reviews every request personally.' },
  { icon: ShieldCheck, title: 'Confidential & secure', desc: 'Your details stay private under NDA-grade handling.' },
  { icon: Globe2, title: '50+ languages supported', desc: 'Native linguists across six continents.' },
];

export function ContactPage() {
  return (
    <>
      <ContactHero />
      <ContactSection />
    </>
  );
}

function ContactHero() {
  return (
    <section className="relative overflow-hidden bg-mesh-royal pb-20 pt-36 sm:pt-44">
      <div className="bg-grid absolute inset-0 opacity-25" />
      <div className="absolute -left-10 top-24 h-72 w-72 rounded-full bg-royal-500/30 blur-[110px]" />
      <div className="absolute right-10 top-40 h-72 w-72 rounded-full bg-gold-500/20 blur-[110px]" />
      <div className="container-px relative">
        <Reveal className="mx-auto max-w-3xl text-center">
          <span className="eyebrow text-gold-300">
            <span className="h-px w-8 bg-gold-400" />
            Contact Us
          </span>
          <h1 className="mt-6 font-serif text-4xl font-semibold leading-[1.08] tracking-tightest text-white sm:text-5xl lg:text-[3.5rem]">
            Request a <span className="text-gradient-gold">free quote</span>
          </h1>
          <p className="lead-light mx-auto mt-6 max-w-2xl">
            Tell us about your project — languages, volume, and timeline — and we&apos;ll respond
            with a tailored quote within one business day.
          </p>
        </Reveal>
      </div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0">
        <svg viewBox="0 0 1440 80" className="h-12 w-full sm:h-16" preserveAspectRatio="none">
          <path d="M0,80 C360,20 1080,20 1440,80 L1440,80 L0,80 Z" fill="#ffffff" />
        </svg>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section className="bg-mesh-light py-24">
      <div className="container-px">
        <div className="grid gap-10 lg:grid-cols-[1.3fr_0.7fr]">
          <Reveal>
            <QuoteForm />
          </Reveal>
          <Reveal delay={120}>
            <ContactSidebar />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

type FormState = {
  full_name: string;
  company_name: string;
  email: string;
  phone: string;
  country: string;
  required_service: string;
  language_pair: string;
  project_details: string;
  file_name: string;
  deadline: string;
  budget_range: string;
};

const empty: FormState = {
  full_name: '',
  company_name: '',
  email: '',
  phone: '',
  country: '',
  required_service: '',
  language_pair: '',
  project_details: '',
  file_name: '',
  deadline: '',
  budget_range: '',
};

function QuoteForm() {
  const [form, setForm] = useState<FormState>(empty);
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const update = (field: keyof FormState, value: string) =>
    setForm((f) => ({ ...f, [field]: value }));

  const onFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) update('file_name', file.name);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMsg('');
    try {
      const { error } = await supabase.from('quote_requests').insert({
        full_name: form.full_name,
        company_name: form.company_name || null,
        email: form.email,
        phone: form.phone || null,
        country: form.country || null,
        required_service: form.required_service || null,
        language_pair: form.language_pair || null,
        project_details: form.project_details || null,
        file_name: form.file_name || null,
        deadline: form.deadline || null,
        budget_range: form.budget_range || null,
      });
      if (error) throw error;
      setStatus('success');
      setForm(empty);
    } catch (err) {
      setStatus('error');
      setErrorMsg(
        err instanceof Error
          ? err.message
          : 'Something went wrong. Please try again or email us directly.',
      );
    }
  };

  if (status === 'success') {
    return (
      <div className="card flex flex-col items-center justify-center p-12 text-center">
        <span className="grid h-16 w-16 place-items-center rounded-full bg-green-100 text-green-600">
          <CheckCircle2 className="h-9 w-9" />
        </span>
        <h3 className="mt-6 font-serif text-2xl font-semibold text-royal-950">
          Thank you — your request is in!
        </h3>
        <p className="mt-3 max-w-md text-sm leading-relaxed text-slate-600">
          We&apos;ve received your quote request and a project manager will respond within one
          business day. For urgent matters, email us directly at{' '}
          <a href={`mailto:${companyEmail}`} className="font-medium text-royal-700 hover:underline">
            {companyEmail}
          </a>
          .
        </p>
        <button
          onClick={() => setStatus('idle')}
          className="btn-royal mt-7"
        >
          Submit another request
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="card p-7 sm:p-9"
      noValidate
    >
      <h2 className="font-serif text-2xl font-semibold text-royal-950">Quote Request Form</h2>
      <p className="mt-2 text-sm text-slate-600">
        Fields marked with <span className="text-royal-700">*</span> are required.
      </p>

      {status === 'error' && (
        <div className="mt-5 flex items-start gap-3 rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-700">
          <AlertCircle className="mt-0.5 h-5 w-5 shrink-0" />
          <span>{errorMsg}</span>
        </div>
      )}

      <div className="mt-7 grid gap-5 sm:grid-cols-2">
        <Field label="Full Name" required>
          <input
            className="input"
            value={form.full_name}
            onChange={(e) => update('full_name', e.target.value)}
            required
            placeholder="Jane Doe"
          />
        </Field>
        <Field label="Company Name">
          <input
            className="input"
            value={form.company_name}
            onChange={(e) => update('company_name', e.target.value)}
            placeholder="Acme Inc."
          />
        </Field>
        <Field label="Email Address" required>
          <input
            type="email"
            className="input"
            value={form.email}
            onChange={(e) => update('email', e.target.value)}
            required
            placeholder="jane@acme.com"
          />
        </Field>
        <Field label="Phone Number">
          <input
            type="tel"
            className="input"
            value={form.phone}
            onChange={(e) => update('phone', e.target.value)}
            placeholder="+1 555 000 0000"
          />
        </Field>
        <Field label="Country">
          <input
            className="input"
            value={form.country}
            onChange={(e) => update('country', e.target.value)}
            placeholder="United States"
          />
        </Field>
        <Field label="Required Service">
          <select
            className="input"
            value={form.required_service}
            onChange={(e) => update('required_service', e.target.value)}
          >
            <option value="">Select a service</option>
            {services.map((s) => (
              <option key={s.slug} value={s.name}>
                {s.name}
              </option>
            ))}
            <option value="Multiple Services">Multiple Services</option>
          </select>
        </Field>
        <Field label="Language Pair">
          <input
            className="input"
            value={form.language_pair}
            onChange={(e) => update('language_pair', e.target.value)}
            placeholder="English → Urdu, Spanish → French"
          />
        </Field>
        <Field label="Deadline">
          <input
            type="date"
            className="input"
            value={form.deadline}
            onChange={(e) => update('deadline', e.target.value)}
          />
        </Field>
        <Field label="Budget Range">
          <select
            className="input"
            value={form.budget_range}
            onChange={(e) => update('budget_range', e.target.value)}
          >
            <option value="">Select a range</option>
            {budgetRanges.map((b) => (
              <option key={b} value={b}>
                {b}
              </option>
            ))}
          </select>
        </Field>
        <Field label="File Upload">
          <label className="flex cursor-pointer items-center gap-2 rounded-xl border border-dashed border-slate-300 bg-slate-50 px-4 py-3 text-sm text-slate-500 transition-colors hover:border-royal-400 hover:bg-royal-50">
            <Upload className="h-4 w-4" />
            <span className="truncate">{form.file_name || 'Choose a file (optional)'}</span>
            <input
              type="file"
              className="hidden"
              onChange={onFile}
              accept=".pdf,.doc,.docx,.txt,.csv,.xlsx,.zip"
            />
          </label>
        </Field>
      </div>

      <div className="mt-5">
        <Field label="Project Details">
          <textarea
            className="input min-h-[120px] resize-y"
            value={form.project_details}
            onChange={(e) => update('project_details', e.target.value)}
            placeholder="Tell us about your project — volume, content type, audience, and any special requirements."
          />
        </Field>
      </div>

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="btn-royal mt-7 w-full sm:w-auto"
      >
        {status === 'submitting' ? (
          <>Submitting…</>
        ) : (
          <>
            Request a Free Quote
            <Send className="h-4 w-4" />
          </>
        )}
      </button>
    </form>
  );
}

function Field({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label className="label">
        {label}
        {required && <span className="text-royal-700"> *</span>}
      </label>
      {children}
    </div>
  );
}

function ContactSidebar() {
  return (
    <div className="flex h-full flex-col gap-6">
      <div className="card p-7">
        <h3 className="font-serif text-lg font-semibold text-royal-950">Get in touch directly</h3>
        <p className="mt-2 text-sm text-slate-600">
          Prefer email? Reach our team directly and we&apos;ll route your request to the right
          specialist.
        </p>
        <a
          href={`mailto:${companyEmail}`}
          className="mt-5 flex items-center gap-3 rounded-xl bg-royal-50 p-4 transition-colors hover:bg-royal-100"
        >
          <span className="grid h-10 w-10 place-items-center rounded-lg bg-royal-700 text-white">
            <Mail className="h-5 w-5" />
          </span>
          <div>
            <p className="text-xs font-medium uppercase tracking-wide text-slate-500">Email</p>
            <p className="text-sm font-semibold text-royal-800">{companyEmail}</p>
          </div>
        </a>
      </div>

      <div className="card p-7">
        <h3 className="font-serif text-lg font-semibold text-royal-950">Why request a quote?</h3>
        <div className="mt-5 space-y-5">
          {trustPoints.map((t) => {
            const Icon = t.icon;
            return (
              <div key={t.title} className="flex items-start gap-3">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-gold-100 text-gold-600">
                  <Icon className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-royal-950">{t.title}</p>
                  <p className="mt-0.5 text-xs leading-relaxed text-slate-600">{t.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-royal-800 to-royal-990 p-7 text-white">
        <div className="bg-grid absolute inset-0 opacity-20" />
        <div className="relative">
          <p className="font-serif text-lg font-semibold">Ready to scale across languages?</p>
          <p className="mt-2 text-sm text-royal-100">
            From a single document to enterprise AI data programs — we handle it all.
          </p>
          <div className="mt-5 flex items-center gap-2 text-sm font-semibold text-gold-300">
            <ArrowRight className="h-4 w-4" />
            Fast, confidential, and on-brand.
          </div>
        </div>
      </div>
    </div>
  );
}
