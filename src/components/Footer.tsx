import { Mail, Globe2, ArrowRight } from 'lucide-react';
import { Link } from '@/components/Router';
import { services, companyEmail, domain } from '@/data/site';

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-royal-990 text-royal-100">
      <div className="bg-grid absolute inset-0 opacity-40" />
      <div className="absolute -top-40 left-1/2 h-80 w-[60rem] -translate-x-1/2 rounded-full bg-royal-600/20 blur-[120px]" />

      <div className="container-wide relative">
        {/* CTA strip */}
        <div className="grid gap-8 border-b border-white/10 py-14 lg:grid-cols-[1.4fr_1fr] lg:items-center">
          <div>
            <h3 className="h-section-light text-3xl">
              Let&apos;s discuss your next language project
            </h3>
            <p className="lead-light mt-3 max-w-xl">
              Tell us about your languages, volume, and timeline — we&apos;ll respond with a
              tailored quote within one business day.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
            <Link to="/contact" className="btn-gold">
              Request a Free Quote
              <ArrowRight className="h-4 w-4" />
            </Link>
            <a href={`mailto:${companyEmail}`} className="btn-outline-light">
              <Mail className="h-4 w-4" />
              Email Us
            </a>
          </div>
        </div>

        {/* Main grid */}
        <div className="grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-3">
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-white/10 font-serif text-lg font-bold text-gold-300 ring-1 ring-white/20">
                3B
              </span>
              <span className="flex flex-col leading-tight">
                <span className="font-serif text-base font-semibold text-white">Three Brothers</span>
                <span className="text-[0.7rem] font-semibold uppercase tracking-[0.25em] text-gold-300">
                  Linguistics
                </span>
              </span>
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-royal-200">
              Professional translation, transcription, localization, interpretation, voice
              recording, AI data collection and data annotation services for global enterprises
              and AI projects.
            </p>
            <div className="mt-6 space-y-2 text-sm">
              <a
                href={`mailto:${companyEmail}`}
                className="flex items-center gap-2 text-royal-100 transition-colors hover:text-gold-300"
              >
                <Mail className="h-4 w-4 text-gold-400" />
                {companyEmail}
              </a>
              <div className="flex items-center gap-2 text-royal-100">
                <Globe2 className="h-4 w-4 text-gold-400" />
                {domain}
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-400">
              Services
            </h4>
            <ul className="mt-5 space-y-2.5 text-sm">
              {services.slice(0, 6).map((s) => (
                <li key={s.slug}>
                  <Link
                    to={`/services#${s.slug}`}
                    className="text-royal-200 transition-colors hover:text-white"
                  >
                    {s.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/services"
                  className="font-medium text-gold-300 transition-colors hover:text-gold-200"
                >
                  View all services →
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-400">
              Company
            </h4>
            <ul className="mt-5 space-y-2.5 text-sm">
              <li>
                <Link to="/about" className="text-royal-200 transition-colors hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-royal-200 transition-colors hover:text-white">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/languages" className="text-royal-200 transition-colors hover:text-white">
                  Languages
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-royal-200 transition-colors hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-400">
              Solutions
            </h4>
            <ul className="mt-5 space-y-2.5 text-sm">
              <li className="text-royal-200">AI & Machine Learning</li>
              <li className="text-royal-200">Localization</li>
              <li className="text-royal-200">Media & Entertainment</li>
              <li className="text-royal-200">Government Projects</li>
              <li className="text-royal-200">Global Enterprises</li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 py-7 text-sm text-royal-300 sm:flex-row">
          <p>Copyright © 2026 Three Brothers Linguistics. All rights reserved.</p>
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-gold-400" />
            <span>Global Language Solutions</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
