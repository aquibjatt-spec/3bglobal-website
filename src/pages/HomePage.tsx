import { useEffect, useState } from 'react';
import {
  ArrowRight,
  Calendar,
  Globe2,
  Sparkles,
  Quote,
  Plus,
  Minus,
  Star,
  CheckCircle2,
} from 'lucide-react';
import { Link } from '@/components/Router';
import { Reveal } from '@/components/Reveal';
import { CtaBanner } from '@/components/CtaBanner';
import { useCountUp, useReveal } from '@/hooks/useReveal';
import {
  services,
  industries,
  whyChooseUs,
  testimonials,
  caseStudies,
  faqs,
  stats,
} from '@/data/site';

const heroImage =
  'https://images.pexels.com/photos/5684444/pexels-photo-5684444.jpeg?auto=compress&cs=tinysrgb&w=1400';
const aboutImage =
  'https://images.pexels.com/photos/7993894/pexels-photo-7993894.jpeg?auto=compress&cs=tinysrgb&w=1200';

const clientSectors = [
  'AI & Machine Learning',
  'Localization Agencies',
  'Media & Entertainment',
  'Technology Companies',
  'Research Organizations',
  'E-Learning Providers',
  'Government Projects',
  'Global Enterprises',
];

export function HomePage() {
  return (
    <>
      <Hero />
      <TrustMarquee />
      <Metrics />
      <ServicesOverview />
      <Industries />
      <WhyChooseUs />
      <CaseStudies />
      <Testimonials />
      <Stats />
      <Faq />
      <CtaBanner />
    </>
  );
}

/* ---------------- Hero ---------------- */
function Hero() {
  return (
    <section className="relative overflow-hidden bg-mesh-royal pb-24 pt-32 sm:pt-40 lg:pb-32">
      <div className="bg-grid absolute inset-0 opacity-25" />
      <div className="absolute -left-20 top-20 h-72 w-72 rounded-full bg-royal-500/30 blur-[110px]" />
      <div className="absolute right-0 top-40 h-80 w-80 rounded-full bg-gold-500/20 blur-[120px]" />

      <div className="container-px relative">
        <div className="grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
          {/* Copy */}
          <div className="animate-fade-up">
            <span className="eyebrow text-gold-300">
              <span className="h-px w-8 bg-gold-400" />
              Global Language Solutions
            </span>
            <h1 className="mt-6 font-serif text-4xl font-semibold leading-[1.08] tracking-tightest text-white sm:text-5xl lg:text-[3.7rem]">
              Global Language Solutions for{' '}
              <span className="text-gradient-gold">Translation, Localization</span> & AI Data
              Projects
            </h1>
            <p className="lead-light mt-7 max-w-xl">
              Helping businesses, AI companies, and global organizations scale across languages
              through professional translation, transcription, localization, voice recording,
              and data annotation services.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link to="/contact" className="btn-gold">
                Get a Free Quote
                <ArrowRight className="h-4 w-4" />
              </Link>
              <a href="mailto:info@3bglobal.online" className="btn-outline-light">
                <Calendar className="h-4 w-4" />
                Schedule a Consultation
              </a>
            </div>

            {/* Inline trust */}
            <div className="mt-10 flex flex-wrap items-center gap-x-7 gap-y-3 text-sm text-royal-100">
              <span className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-gold-400" />
                50+ Languages
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-gold-400" />
                Native Linguists
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-gold-400" />
                Enterprise Security
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-gold-400" />
                Fast Turnaround
              </span>
            </div>
          </div>

          {/* Visual */}
          <div className="relative animate-scale-in">
            <div className="relative overflow-hidden rounded-3xl border border-white/15 shadow-2xl shadow-royal-950/50">
              <img
                src={heroImage}
                alt="Global team collaborating across languages"
                className="h-[26rem] w-full object-cover sm:h-[30rem]"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-royal-990/80 via-transparent to-transparent" />
            </div>

            {/* Floating cards */}
            <div className="absolute -left-4 top-10 hidden animate-float rounded-2xl border border-white/20 bg-white/10 p-4 backdrop-blur-md sm:block">
              <div className="flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-gold-400/20 text-gold-300">
                  <Globe2 className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-lg font-bold text-white">50+</p>
                  <p className="text-xs text-royal-100">Languages</p>
                </div>
              </div>
            </div>
            <div
              className="absolute -bottom-5 -right-3 hidden animate-float rounded-2xl border border-white/20 bg-white/10 p-4 backdrop-blur-md sm:block"
              style={{ animationDelay: '1.5s' }}
            >
              <div className="flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-gold-400/20 text-gold-300">
                  <Sparkles className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-lg font-bold text-white">99%+</p>
                  <p className="text-xs text-royal-100">Accuracy</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Wave divider */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0">
        <svg viewBox="0 0 1440 80" className="h-12 w-full sm:h-16" preserveAspectRatio="none">
          <path d="M0,80 C360,20 1080,20 1440,80 L1440,80 L0,80 Z" fill="#ffffff" />
        </svg>
      </div>
    </section>
  );
}

/* ---------------- Trust marquee ---------------- */
function TrustMarquee() {
  const items = [...clientSectors, ...clientSectors];
  return (
    <section className="border-y border-slate-100 bg-white py-8">
      <div className="container-px">
        <p className="mb-5 text-center text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">
          Trusted by organizations across industries
        </p>
      </div>
      <div className="marquee-mask overflow-hidden">
        <div className="marquee-track gap-12">
          {items.map((item, i) => (
            <span
              key={i}
              className="flex items-center gap-2 whitespace-nowrap text-sm font-medium text-slate-500"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-gold-400" />
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Metrics ---------------- */
function Metrics() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="container-px">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s, i) => (
            <MetricCard key={s.label} {...s} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function MetricCard({
  value,
  suffix,
  label,
  index,
}: {
  value: number;
  suffix: string;
  label: string;
  index: number;
}) {
  const { ref, visible } = useReveal<HTMLDivElement>();
  const count = useCountUp(value, 1600, visible);
  return (
    <div
      ref={ref}
      className={`group relative overflow-hidden rounded-2xl border border-slate-200 bg-gradient-to-b from-slate-50 to-white p-8 transition-all duration-500 hover:-translate-y-1 hover:border-royal-200 hover:shadow-xl hover:shadow-royal-900/5 ${
        index === 0 ? '' : ''
      }`}
    >
      <div className="absolute -right-6 -top-6 h-20 w-20 rounded-full bg-gold-400/10 transition-transform duration-500 group-hover:scale-150" />
      <p className="relative font-serif text-4xl font-bold text-royal-900 sm:text-5xl">
        {Math.round(count)}
        <span className="text-gold-500">{suffix}</span>
      </p>
      <p className="relative mt-2 text-sm font-medium text-slate-600">{label}</p>
    </div>
  );
}

/* ---------------- Services overview ---------------- */
function ServicesOverview() {
  return (
    <section className="bg-mesh-light py-24">
      <div className="container-px">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">
            <span className="h-px w-8 bg-gold-500" />
            What We Do
          </span>
          <h2 className="h-section mt-5">Premium language services under one roof</h2>
          <p className="lead mt-5">
            From human translation to AI training data, our specialists cover the full lifecycle
            of multilingual content — with quality you can measure.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <Reveal key={service.slug} delay={i * 60}>
                <Link
                  to={`/services#${service.slug}`}
                  className="card card-hover group flex h-full flex-col p-7"
                >
                  <span className="grid h-14 w-14 place-items-center rounded-2xl bg-royal-50 text-royal-700 transition-all duration-300 group-hover:bg-royal-900 group-hover:text-gold-300">
                    <Icon className="h-7 w-7" />
                  </span>
                  <h3 className="mt-5 font-serif text-xl font-semibold text-royal-950">
                    {service.name}
                  </h3>
                  <p className="mt-2.5 flex-1 text-sm leading-relaxed text-slate-600">
                    {service.short}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-royal-700 transition-colors group-hover:text-gold-600">
                    Learn more
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Industries ---------------- */
function Industries() {
  return (
    <section className="bg-white py-24">
      <div className="container-px">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">
            <span className="h-px w-8 bg-gold-500" />
            Industries We Serve
          </span>
          <h2 className="h-section mt-5">Specialized expertise for every sector</h2>
          <p className="lead mt-5">
            We match linguists to your industry so terminology, tone, and compliance are right the
            first time.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {industries.map((ind, i) => {
            const Icon = ind.icon;
            return (
              <Reveal key={ind.name} delay={i * 50}>
                <div className="card card-hover group h-full p-6">
                  <span className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-royal-600 to-royal-800 text-white shadow-md shadow-royal-700/20 transition-transform duration-300 group-hover:scale-110">
                    <Icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-4 font-serif text-lg font-semibold text-royal-950">
                    {ind.name}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{ind.description}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Why choose us ---------------- */
function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden bg-royal-990 py-24 text-white">
      <div className="bg-grid absolute inset-0 opacity-20" />
      <div className="absolute -right-20 top-10 h-72 w-72 rounded-full bg-royal-500/20 blur-[110px]" />
      <div className="container-px relative">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <Reveal>
            <span className="eyebrow text-gold-300">
              <span className="h-px w-8 bg-gold-400" />
              Why Choose Us
            </span>
            <h2 className="h-section-light mt-5">
              A partner built for enterprise-grade language work
            </h2>
            <p className="lead-light mt-5 max-w-md">
              We combine native expertise, scalable infrastructure, and rigorous quality
              processes to deliver work that holds up at global scale.
            </p>
            <div className="mt-8 overflow-hidden rounded-2xl border border-white/15">
              <img
                src={aboutImage}
                alt="Three Brothers Linguistics team"
                className="h-64 w-full object-cover"
                loading="lazy"
              />
            </div>
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-2">
            {whyChooseUs.map((item, i) => {
              const Icon = item.icon;
              return (
                <Reveal key={item.title} delay={i * 70}>
                  <div className="group h-full rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition-all duration-300 hover:border-gold-400/40 hover:bg-white/10">
                    <span className="grid h-11 w-11 place-items-center rounded-xl bg-gold-400/15 text-gold-300 transition-transform duration-300 group-hover:scale-110">
                      <Icon className="h-5 w-5" />
                    </span>
                    <h3 className="mt-4 font-serif text-base font-semibold text-white">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-royal-100">
                      {item.description}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Case studies ---------------- */
function CaseStudies() {
  return (
    <section className="bg-mesh-light py-24">
      <div className="container-px">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">
            <span className="h-px w-8 bg-gold-500" />
            Case Studies
          </span>
          <h2 className="h-section mt-5">Results that speak across languages</h2>
          <p className="lead mt-5">
            A look at how global teams use our services to launch, scale, and train their products.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {caseStudies.map((cs, i) => (
            <Reveal key={cs.title} delay={i * 90}>
              <div className="card card-hover flex h-full flex-col p-7">
                <span className="inline-flex w-fit items-center rounded-full bg-royal-50 px-3 py-1 text-xs font-semibold text-royal-700">
                  {cs.category}
                </span>
                <h3 className="mt-4 font-serif text-xl font-semibold leading-snug text-royal-950">
                  {cs.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600">{cs.summary}</p>
                <div className="mt-6 grid grid-cols-3 gap-2 border-t border-slate-100 pt-5">
                  {cs.metrics.map((m) => (
                    <div key={m.label}>
                      <p className="font-serif text-xl font-bold text-royal-800">{m.value}</p>
                      <p className="mt-0.5 text-[0.7rem] font-medium uppercase tracking-wide text-slate-500">
                        {m.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Testimonials ---------------- */
function Testimonials() {
  return (
    <section className="bg-white py-24">
      <div className="container-px">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">
            <span className="h-px w-8 bg-gold-500" />
            Client Voices
          </span>
          <h2 className="h-section mt-5">Trusted by teams who ship globally</h2>
          <div className="mt-4 flex items-center justify-center gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-5 w-5 fill-gold-400 text-gold-400" />
            ))}
          </div>
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {testimonials.map((t, i) => (
            <Reveal key={i} delay={i * 80}>
              <figure className="card card-hover relative h-full p-8">
                <Quote className="absolute right-6 top-6 h-10 w-10 text-royal-100" />
                <blockquote className="relative font-serif text-lg leading-relaxed text-royal-950">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3 border-t border-slate-100 pt-5">
                  <span className="grid h-11 w-11 place-items-center rounded-full bg-gradient-to-br from-royal-600 to-royal-800 font-serif text-sm font-bold text-white">
                    {t.name.charAt(0)}
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-royal-950">{t.name}</p>
                    <p className="text-xs text-slate-500">
                      {t.role} · {t.company}
                    </p>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Stats band ---------------- */
function Stats() {
  const { ref, visible } = useReveal<HTMLDivElement>();
  return (
    <section className="relative overflow-hidden bg-mesh-royal py-20">
      <div className="bg-grid absolute inset-0 opacity-20" />
      <div className="container-px relative">
        <div ref={ref} className="grid gap-8 text-center sm:grid-cols-2 lg:grid-cols-4">
          {[
            { v: 1.2, prefix: '', suffix: 'M+', label: 'Data items delivered', decimals: 1 },
            { v: 38, prefix: '', suffix: '', label: 'Languages in one AI project', decimals: 0 },
            { v: 180, prefix: '', suffix: '+', label: 'Hours subtitled per launch', decimals: 0 },
            { v: 99, prefix: '', suffix: '%', label: 'Client retention rate', decimals: 0 },
          ].map((s) => (
            <StatItem key={s.label} {...s} start={visible} />
          ))}
        </div>
      </div>
    </section>
  );
}

function StatItem({
  v,
  prefix,
  suffix,
  label,
  decimals,
  start,
}: {
  v: number;
  prefix: string;
  suffix: string;
  label: string;
  decimals: number;
  start: boolean;
}) {
  const count = useCountUp(v, 1800, start);
  return (
    <div>
      <p className="font-serif text-4xl font-bold text-white sm:text-5xl">
        {prefix}
        {count.toFixed(decimals)}
        <span className="text-gold-400">{suffix}</span>
      </p>
      <p className="mt-2 text-sm text-royal-100">{label}</p>
    </div>
  );
}

/* ---------------- FAQ ---------------- */
function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="bg-mesh-light py-24">
      <div className="container-px">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <Reveal>
            <span className="eyebrow">
              <span className="h-px w-8 bg-gold-500" />
              FAQ
            </span>
            <h2 className="h-section mt-5">Answers to common questions</h2>
            <p className="lead mt-5">
              Have a specific question? Reach out and our team will respond within one business day.
            </p>
            <Link to="/contact" className="btn-royal mt-7">
              Contact Us
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>

          <Reveal delay={100}>
            <div className="space-y-3">
              {faqs.map((f, i) => {
                const isOpen = open === i;
                return (
                  <div
                    key={i}
                    className={`overflow-hidden rounded-2xl border transition-all duration-300 ${
                      isOpen ? 'border-royal-200 bg-white shadow-md' : 'border-slate-200 bg-white'
                    }`}
                  >
                    <button
                      onClick={() => setOpen(isOpen ? null : i)}
                      className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                    >
                      <span className="font-serif text-base font-semibold text-royal-950">
                        {f.q}
                      </span>
                      <span
                        className={`grid h-8 w-8 shrink-0 place-items-center rounded-full transition-colors ${
                          isOpen ? 'bg-royal-700 text-white' : 'bg-slate-100 text-slate-600'
                        }`}
                      >
                        {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                      </span>
                    </button>
                    <div
                      className={`grid transition-all duration-300 ${
                        isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                      }`}
                    >
                      <div className="overflow-hidden">
                        <p className="px-6 pb-5 text-sm leading-relaxed text-slate-600">{f.a}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
