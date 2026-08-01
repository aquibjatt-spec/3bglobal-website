import { Globe2, ArrowRight, MapPin } from 'lucide-react';
import { Reveal } from '@/components/Reveal';
import { CtaBanner } from '@/components/CtaBanner';
import { Link } from '@/components/Router';
import { languageRegions } from '@/data/site';

const regionAccents: Record<string, string> = {
  'South Asian Languages': 'from-royal-600 to-royal-800',
  'Middle Eastern Languages': 'from-gold-500 to-gold-700',
  'Southeast Asian Languages': 'from-emerald-600 to-teal-700',
  'European Languages': 'from-royal-700 to-royal-950',
  'East Asian Languages': 'from-rose-600 to-rose-800',
  'African Languages': 'from-amber-600 to-orange-700',
};

export function LanguagesPage() {
  const total = languageRegions.reduce((acc, r) => acc + r.languages.length, 0);
  return (
    <>
      <LanguagesHero total={total} />
      <LanguageGrid />
      <CtaBanner
        title="Don't see your language?"
        subtitle="Our network grows with demand. If you need a language or dialect not listed here, reach out — we likely have a linguist for it."
        primaryLabel="Ask About Your Language"
      />
    </>
  );
}

function LanguagesHero({ total }: { total: number }) {
  return (
    <section className="relative overflow-hidden bg-mesh-royal pb-20 pt-36 sm:pt-44">
      <div className="bg-grid absolute inset-0 opacity-25" />
      <div className="absolute -left-10 top-24 h-72 w-72 rounded-full bg-royal-500/30 blur-[110px]" />
      <div className="absolute right-10 top-40 h-72 w-72 rounded-full bg-gold-500/20 blur-[110px]" />
      <div className="container-px relative">
        <Reveal className="mx-auto max-w-3xl text-center">
          <span className="eyebrow text-gold-300">
            <span className="h-px w-8 bg-gold-400" />
            Languages
          </span>
          <h1 className="mt-6 font-serif text-4xl font-semibold leading-[1.08] tracking-tightest text-white sm:text-5xl lg:text-[3.5rem]">
            {total}+ languages across{' '}
            <span className="text-gradient-gold">six continents</span>
          </h1>
          <p className="lead-light mx-auto mt-6 max-w-2xl">
            From major global languages to regional dialects, our native linguists deliver
            culturally precise work for every market you serve.
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

function LanguageGrid() {
  return (
    <section className="bg-mesh-light py-24">
      <div className="container-px">
        <div className="space-y-10">
          {languageRegions.map((region, ri) => {
            const accent = regionAccents[region.region] ?? 'from-royal-600 to-royal-800';
            return (
              <Reveal key={region.region} delay={ri * 50}>
                <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
                  {/* Region header */}
                  <div className={`flex items-center gap-4 bg-gradient-to-r ${accent} px-7 py-6 text-white`}>
                    <span className="grid h-12 w-12 place-items-center rounded-xl bg-white/15 ring-1 ring-white/20">
                      <MapPin className="h-6 w-6" />
                    </span>
                    <div>
                      <h2 className="font-serif text-xl font-semibold sm:text-2xl">
                        {region.region}
                      </h2>
                      <p className="mt-0.5 text-sm text-white/80">{region.blurb}</p>
                    </div>
                    <span className="ml-auto hidden rounded-full bg-white/15 px-3 py-1 text-xs font-semibold ring-1 ring-white/20 sm:block">
                      {region.languages.length} languages
                    </span>
                  </div>

                  {/* Language chips */}
                  <div className="flex flex-wrap gap-2.5 p-7">
                    {region.languages.map((lang) => (
                      <span
                        key={lang}
                        className="group inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-700 transition-all duration-200 hover:border-royal-300 hover:bg-royal-50 hover:text-royal-800 hover:shadow-sm"
                      >
                        <Globe2 className="h-3.5 w-3.5 text-gold-500 transition-transform group-hover:scale-110" />
                        {lang}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal className="mt-14 text-center">
          <Link to="/contact" className="btn-royal">
            Request a Language Quote
            <ArrowRight className="h-4 w-4" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
