import {
  Target,
  Eye,
  Gem,
  ShieldCheck,
  Globe2,
  Users,
  Award,
  Handshake,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react';
import { Reveal } from '@/components/Reveal';
import { CtaBanner } from '@/components/CtaBanner';
import { Link } from '@/components/Router';
import { useReveal, useCountUp } from '@/hooks/useReveal';

const teamImage =
  'https://images.pexels.com/photos/7653462/pexels-photo-7653462.jpeg?auto=compress&cs=tinysrgb&w=1400';
const officeImage =
  'https://images.pexels.com/photos/7698712/pexels-photo-7698712.jpeg?auto=compress&cs=tinysrgb&w=1200';

const values = [
  { title: 'Accuracy', description: 'Every word is chosen with precision and verified through multi-step QA.', icon: ShieldCheck },
  { title: 'Cultural Fidelity', description: 'We adapt meaning, tone, and context — not just words.', icon: Globe2 },
  { title: 'Confidentiality', description: 'Your content is handled under NDA with encrypted, role-based access.', icon: Handshake },
  { title: 'Excellence', description: 'We hold ourselves to enterprise standards on every deliverable.', icon: Award },
];

const chooseReasons = [
  'A single dedicated project manager who knows your brand',
  'Native linguists matched to your industry and terminology',
  'Scalable teams that grow from one file to enterprise volume',
  'Measurable quality with multi-step TEP and QA workflows',
  'Secure, compliant handling of sensitive and regulated content',
  'Transparent timelines confirmed before every engagement',
];

export function AboutPage() {
  return (
    <>
      <AboutHero />
      <Overview />
      <MissionVision />
      <Values />
      <QualityCommitment />
      <GlobalWorkforce />
      <WhyChoose />
      <CtaBanner />
    </>
  );
}

function AboutHero() {
  return (
    <section className="relative overflow-hidden bg-mesh-royal pb-20 pt-36 sm:pt-44">
      <div className="bg-grid absolute inset-0 opacity-25" />
      <div className="absolute -left-10 top-24 h-72 w-72 rounded-full bg-royal-500/30 blur-[110px]" />
      <div className="absolute right-10 top-40 h-72 w-72 rounded-full bg-gold-500/20 blur-[110px]" />
      <div className="container-px relative">
        <Reveal className="mx-auto max-w-3xl text-center">
          <span className="eyebrow text-gold-300">
            <span className="h-px w-8 bg-gold-400" />
            About Us
          </span>
          <h1 className="mt-6 font-serif text-4xl font-semibold leading-[1.08] tracking-tightest text-white sm:text-5xl lg:text-[3.5rem]">
            A global language partner built on{' '}
            <span className="text-gradient-gold">trust and precision</span>
          </h1>
          <p className="lead-light mx-auto mt-6 max-w-2xl">
            Three Brothers Linguistics helps enterprises, AI labs, and global organizations
            communicate across languages — combining native expertise with enterprise-grade
            process.
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

function Overview() {
  return (
    <section className="bg-white py-24">
      <div className="container-px">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <span className="eyebrow">
              <span className="h-px w-8 bg-gold-500" />
              Company Overview
            </span>
            <h2 className="h-section mt-5">Language expertise, delivered at global scale</h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-slate-600">
              <p>
                Three Brothers Linguistics is a global language solutions company providing
                translation, transcription, localization, interpretation, voice recording, AI
                data collection, and data annotation services across 50+ languages.
              </p>
              <p>
                We serve AI and machine learning companies, localization agencies, media and
                entertainment organizations, technology firms, research institutions, e-learning
                providers, government projects, and global enterprises — pairing native-speaking
                linguists with dedicated project management and rigorous quality assurance.
              </p>
              <p>
                Our model combines a vetted network of 100+ professional linguists with secure,
                scalable infrastructure, so we can move from a single document to
                enterprise-volume programs without compromising accuracy or confidentiality.
              </p>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="relative">
              <div className="overflow-hidden rounded-3xl border border-slate-200 shadow-xl">
                <img
                  src={teamImage}
                  alt="Three Brothers Linguistics global team"
                  className="h-[26rem] w-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 hidden rounded-2xl border border-slate-200 bg-white p-5 shadow-xl sm:block">
                <p className="font-serif text-3xl font-bold text-royal-900">6</p>
                <p className="text-xs font-medium text-slate-500">Continents served</p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function MissionVision() {
  return (
    <section className="bg-mesh-light py-24">
      <div className="container-px">
        <div className="grid gap-6 lg:grid-cols-2">
          <Reveal>
            <div className="h-full rounded-3xl border border-slate-200 bg-white p-9 shadow-sm">
              <span className="grid h-14 w-14 place-items-center rounded-2xl bg-royal-50 text-royal-700">
                <Target className="h-7 w-7" />
              </span>
              <h3 className="mt-5 font-serif text-2xl font-semibold text-royal-950">Our Mission</h3>
              <p className="mt-3 text-base leading-relaxed text-slate-600">
                To help businesses, AI companies, and global organizations scale across languages
                by delivering accurate, culturally precise, and secure language services — backed
                by native expertise and measurable quality.
              </p>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="h-full rounded-3xl border border-slate-200 bg-white p-9 shadow-sm">
              <span className="grid h-14 w-14 place-items-center rounded-2xl bg-gold-100 text-gold-600">
                <Eye className="h-7 w-7" />
              </span>
              <h3 className="mt-5 font-serif text-2xl font-semibold text-royal-950">Our Vision</h3>
              <p className="mt-3 text-base leading-relaxed text-slate-600">
                To be the most trusted global language partner for enterprise and AI projects —
                setting the standard for quality, security, and cultural fidelity across every
                language and dialect we touch.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Values() {
  return (
    <section className="bg-white py-24">
      <div className="container-px">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">
            <span className="h-px w-8 bg-gold-500" />
            Our Values
          </span>
          <h2 className="h-section mt-5">Principles that guide every project</h2>
        </Reveal>
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v, i) => {
            const Icon = v.icon;
            return (
              <Reveal key={v.title} delay={i * 70}>
                <div className="card card-hover group h-full p-7 text-center">
                  <span className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-royal-600 to-royal-800 text-white shadow-md shadow-royal-700/20 transition-transform duration-300 group-hover:scale-110">
                    <Icon className="h-7 w-7" />
                  </span>
                  <h3 className="mt-5 font-serif text-lg font-semibold text-royal-950">
                    {v.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{v.description}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function QualityCommitment() {
  return (
    <section className="relative overflow-hidden bg-royal-990 py-24 text-white">
      <div className="bg-grid absolute inset-0 opacity-20" />
      <div className="absolute -right-20 top-10 h-72 w-72 rounded-full bg-royal-500/20 blur-[110px]" />
      <div className="container-px relative">
        <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center">
          <Reveal>
            <span className="eyebrow text-gold-300">
              <span className="h-px w-8 bg-gold-400" />
              Quality Commitment
            </span>
            <h2 className="h-section-light mt-5">Quality you can measure</h2>
            <p className="lead-light mt-5 max-w-md">
              Every deliverable passes through a structured, multi-step workflow designed to
              guarantee accuracy, consistency, and cultural appropriateness.
            </p>
            <ul className="mt-8 space-y-3">
              {[
                'Translation, Editing, and Proofreading (TEP) on every project',
                'Terminology management with client-specific glossaries',
                'In-context linguistic QA and functional testing',
                'Multi-pass review with measurable accuracy SLAs',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-royal-100">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-gold-400" />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={120}>
            <div className="grid grid-cols-2 gap-4">
              {[
                { v: 99, suffix: '%', label: 'Accuracy target' },
                { v: 100, suffix: '+', label: 'Vetted linguists' },
                { v: 50, suffix: '+', label: 'Languages' },
                { v: 3, suffix: '-step', label: 'TEP workflow' },
              ].map((s) => (
                <QualityStat key={s.label} {...s} />
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function QualityStat({ v, suffix, label }: { v: number; suffix: string; label: string }) {
  const { ref, visible } = useReveal<HTMLDivElement>();
  const count = useCountUp(v, 1600, visible);
  return (
    <div
      ref={ref}
      className="rounded-2xl border border-white/10 bg-white/5 p-7 text-center backdrop-blur"
    >
      <p className="font-serif text-4xl font-bold text-white">
        {Math.round(count)}
        <span className="text-gold-400">{suffix}</span>
      </p>
      <p className="mt-2 text-xs font-medium text-royal-100">{label}</p>
    </div>
  );
}

function GlobalWorkforce() {
  return (
    <section className="bg-mesh-light py-24">
      <div className="container-px">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <Reveal delay={120}>
            <div className="overflow-hidden rounded-3xl border border-slate-200 shadow-xl">
              <img
                src={officeImage}
                alt="Global workforce model"
                className="h-[24rem] w-full object-cover"
                loading="lazy"
              />
            </div>
          </Reveal>
          <Reveal>
            <span className="eyebrow">
              <span className="h-px w-8 bg-gold-500" />
              Global Workforce Model
            </span>
            <h2 className="h-section mt-5">A vetted network that scales with you</h2>
            <p className="lead mt-5">
              Our global workforce model pairs native-speaking linguists with dedicated project
              managers and secure infrastructure — so capacity flexes to your volume without
              sacrificing quality.
            </p>
            <div className="mt-8 space-y-4">
              {[
                { icon: Users, title: 'Native linguists', desc: '100+ vetted professionals working in their native language.' },
                { icon: Globe2, title: 'Worldwide coverage', desc: 'Linguists across six continents and 50+ languages.' },
                { icon: Gem, title: 'Domain expertise', desc: 'Specialists matched to your industry, terminology, and tone.' },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="flex items-start gap-4">
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-royal-50 text-royal-700">
                      <Icon className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="font-serif text-base font-semibold text-royal-950">
                        {item.title}
                      </p>
                      <p className="mt-0.5 text-sm text-slate-600">{item.desc}</p>
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

function WhyChoose() {
  return (
    <section className="bg-white py-24">
      <div className="container-px">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">
            <span className="h-px w-8 bg-gold-500" />
            Why Global Clients Choose Us
          </span>
          <h2 className="h-section mt-5">Built for enterprise-grade language work</h2>
        </Reveal>
        <div className="mt-14 grid gap-4 sm:grid-cols-2">
          {chooseReasons.map((reason, i) => (
            <Reveal key={reason} delay={i * 60}>
              <div className="card card-hover flex items-center gap-4 p-6">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-gold-100 text-gold-600">
                  <CheckCircle2 className="h-5 w-5" />
                </span>
                <p className="text-sm font-medium text-royal-950">{reason}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-12 text-center">
          <Link to="/contact" className="btn-royal">
            Work With Us
            <ArrowRight className="h-4 w-4" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
