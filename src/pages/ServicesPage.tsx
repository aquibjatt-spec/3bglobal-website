import { useEffect } from 'react';
import { ArrowRight, CheckCircle2, Building2, Sparkles } from 'lucide-react';
import { Reveal } from '@/components/Reveal';
import { CtaBanner } from '@/components/CtaBanner';
import { Link, useRouter } from '@/components/Router';
import { services } from '@/data/site';

export function ServicesPage() {
  const { route } = useRouter();

  useEffect(() => {
    if (route.path.includes('#')) {
      const id = route.path.split('#')[1];
      const el = document.getElementById(id);
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: 'smooth', block: 'start' }), 120);
      }
    }
  }, [route.path]);

  return (
    <>
      <ServicesHero />
      <ServicesList />
      <CtaBanner />
    </>
  );
}

function ServicesHero() {
  return (
    <section className="relative overflow-hidden bg-mesh-royal pb-20 pt-36 sm:pt-44">
      <div className="bg-grid absolute inset-0 opacity-25" />
      <div className="absolute -left-10 top-24 h-72 w-72 rounded-full bg-royal-500/30 blur-[110px]" />
      <div className="absolute right-10 top-40 h-72 w-72 rounded-full bg-gold-500/20 blur-[110px]" />
      <div className="container-px relative">
        <Reveal className="mx-auto max-w-3xl text-center">
          <span className="eyebrow text-gold-300">
            <span className="h-px w-8 bg-gold-400" />
            Our Services
          </span>
          <h1 className="mt-6 font-serif text-4xl font-semibold leading-[1.08] tracking-tightest text-white sm:text-5xl lg:text-[3.5rem]">
            Full-spectrum language services for{' '}
            <span className="text-gradient-gold">global scale</span>
          </h1>
          <p className="lead-light mx-auto mt-6 max-w-2xl">
            From human translation to AI training data, every service is delivered by native
            specialists with enterprise-grade quality assurance.
          </p>
        </Reveal>

        {/* Quick nav chips */}
        <Reveal delay={150} className="mx-auto mt-10 flex max-w-4xl flex-wrap justify-center gap-2">
          {services.map((s) => (
            <a
              key={s.slug}
              href={`#/services#${s.slug}`}
              className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-medium text-royal-100 backdrop-blur transition-colors hover:border-gold-400/40 hover:text-white"
            >
              {s.name}
            </a>
          ))}
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

function ServicesList() {
  return (
    <section className="bg-white py-24">
      <div className="container-px">
        <div className="space-y-20 lg:space-y-28">
          {services.map((service, i) => {
            const Icon = service.icon;
            const reversed = i % 2 === 1;
            return (
              <Reveal key={service.slug}>
                <article
                  id={service.slug}
                  className="scroll-mt-28 grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start"
                >
                  {/* Sticky icon panel */}
                  <div className={`lg:sticky lg:top-28 ${reversed ? 'lg:order-2' : ''}`}>
                    <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-royal-900 to-royal-990 p-8 text-white shadow-xl">
                      <div className="bg-grid absolute inset-0 opacity-20" />
                      <div className="relative">
                        <span className="grid h-16 w-16 place-items-center rounded-2xl bg-white/10 text-gold-300 ring-1 ring-white/20">
                          <Icon className="h-8 w-8" />
                        </span>
                        <p className="mt-5 text-xs font-semibold uppercase tracking-[0.2em] text-gold-300">
                          {String(i + 1).padStart(2, '0')} / {String(services.length).padStart(2, '0')}
                        </p>
                        <h2 className="mt-2 font-serif text-2xl font-semibold leading-tight">
                          {service.name}
                        </h2>
                        <p className="mt-3 text-sm leading-relaxed text-royal-100">
                          {service.short}
                        </p>
                        <Link
                          to="/contact"
                          className="btn-gold mt-6 w-full sm:w-auto"
                        >
                          Request a Quote
                          <ArrowRight className="h-4 w-4" />
                        </Link>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className={reversed ? 'lg:order-1' : ''}>
                    <span className="eyebrow">
                      <span className="h-px w-8 bg-gold-500" />
                      Overview
                    </span>
                    <h3 className="mt-4 font-serif text-2xl font-semibold text-royal-950">
                      {service.name}
                    </h3>
                    <p className="mt-4 text-base leading-relaxed text-slate-600">
                      {service.description}
                    </p>

                    {/* Benefits */}
                    <div className="mt-8">
                      <p className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-royal-800">
                        <Sparkles className="h-4 w-4 text-gold-500" />
                        Benefits
                      </p>
                      <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                        {service.benefits.map((b) => (
                          <li
                            key={b}
                            className="flex items-start gap-2.5 rounded-xl border border-slate-200 bg-slate-50/50 p-3.5 text-sm text-slate-700"
                          >
                            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-royal-600" />
                            {b}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Industries */}
                    <div className="mt-7">
                      <p className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-royal-800">
                        <Building2 className="h-4 w-4 text-gold-500" />
                        Industries Served
                      </p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {service.industries.map((ind) => (
                          <span
                            key={ind}
                            className="rounded-full border border-royal-200 bg-royal-50 px-3.5 py-1.5 text-xs font-medium text-royal-700"
                          >
                            {ind}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Why us */}
                    <div className="mt-7 rounded-2xl border-l-4 border-gold-400 bg-gold-50/60 p-5">
                      <p className="text-sm font-semibold text-gold-700">
                        Why choose Three Brothers Linguistics
                      </p>
                      <p className="mt-1.5 text-sm leading-relaxed text-slate-700">
                        {service.whyUs}
                      </p>
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
