import { ArrowRight, Calendar } from 'lucide-react';
import { Link } from '@/components/Router';
import { Reveal } from '@/components/Reveal';

export function CtaBanner({
  title = "Let's Discuss Your Next Language Project",
  subtitle = 'From a single document to enterprise-scale AI data, our team is ready to help you scale across languages — with quality you can measure.',
  primaryLabel = 'Get a Free Quote',
  secondaryLabel = 'Schedule a Consultation',
}: {
  title?: string;
  subtitle?: string;
  primaryLabel?: string;
  secondaryLabel?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-mesh-royal py-20 sm:py-24">
      <div className="bg-grid absolute inset-0 opacity-30" />
      <div className="absolute -bottom-32 right-0 h-72 w-72 rounded-full bg-gold-500/20 blur-[100px]" />
      <div className="absolute -top-20 left-10 h-60 w-60 rounded-full bg-royal-500/30 blur-[100px]" />
      <div className="container-px relative">
        <Reveal className="mx-auto max-w-3xl text-center">
          <span className="eyebrow text-gold-300">
            <span className="h-px w-8 bg-gold-400" />
            Get Started
          </span>
          <h2 className="h-section-light mt-5">{title}</h2>
          <p className="lead-light mx-auto mt-5 max-w-2xl">{subtitle}</p>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link to="/contact" className="btn-gold">
              {primaryLabel}
              <ArrowRight className="h-4 w-4" />
            </Link>
            <a href="mailto:info@3bglobal.online" className="btn-outline-light">
              <Calendar className="h-4 w-4" />
              {secondaryLabel}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
