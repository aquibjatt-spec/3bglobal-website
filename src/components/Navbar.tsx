import { useEffect, useState } from 'react';
import { Menu, X, Globe2, ArrowRight } from 'lucide-react';
import { Link, useRouter } from '@/components/Router';
import { useScrolled } from '@/hooks/useReveal';
import { companyEmail } from '@/data/site';

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/languages', label: 'Languages' },
  { to: '/contact', label: 'Contact' },
];

export function Navbar() {
  const scrolled = useScrolled(20);
  const { route } = useRouter();
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  useEffect(() => {
    setOpen(false);
  }, [route.path]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? 'glass shadow-lg shadow-royal-950/5' : 'bg-transparent'
      }`}
    >
      <nav className="container-wide flex h-20 items-center justify-between">
        {/* Logo */}
        <Link to="/" className="group flex items-center gap-3">
          <span
            className={`grid h-11 w-11 place-items-center rounded-xl font-serif text-lg font-bold transition-all duration-300 ${
              scrolled
                ? 'bg-royal-900 text-gold-300 shadow-md'
                : 'bg-white/10 text-gold-300 ring-1 ring-white/20 backdrop-blur'
            }`}
          >
            3B
          </span>
          <span className="flex flex-col leading-tight">
            <span
              className={`font-serif text-[1.05rem] font-semibold tracking-tight transition-colors duration-300 ${
                scrolled ? 'text-royal-950' : 'text-white'
              }`}
            >
              Three Brothers
            </span>
            <span
              className={`text-[0.7rem] font-semibold uppercase tracking-[0.25em] transition-colors duration-300 ${
                scrolled ? 'text-gold-600' : 'text-gold-300'
              }`}
            >
              Linguistics
            </span>
          </span>
        </Link>

        {/* Desktop links */}
        <div className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => {
            const active = route.path === link.to;
            return (
              <Link
                key={link.to}
                to={link.to}
                className={`relative rounded-full px-5 py-2 text-sm font-medium transition-colors duration-200 ${
                  active
                    ? scrolled
                      ? 'text-royal-700'
                      : 'text-white'
                    : scrolled
                      ? 'text-slate-600 hover:text-royal-700'
                      : 'text-royal-100 hover:text-white'
                }`}
              >
                {link.label}
                {active && (
                  <span
                    className={`absolute inset-x-5 -bottom-0.5 h-0.5 rounded-full ${
                      scrolled ? 'bg-gold-500' : 'bg-gold-300'
                    }`}
                  />
                )}
              </Link>
            );
          })}
        </div>

        {/* Desktop CTA */}
        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={`mailto:${companyEmail}`}
            className={`flex items-center gap-2 text-sm font-medium transition-colors ${
              scrolled ? 'text-slate-600 hover:text-royal-700' : 'text-royal-100 hover:text-white'
            }`}
          >
            <Globe2 className="h-4 w-4" />
            <span className="hidden xl:inline">{companyEmail}</span>
          </a>
          <Link to="/contact" className="btn-gold">
            Get a Free Quote
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen((v) => !v)}
          className={`grid h-11 w-11 place-items-center rounded-xl transition-colors lg:hidden ${
            scrolled ? 'text-royal-900 hover:bg-royal-50' : 'text-white hover:bg-white/10'
          }`}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {mounted && (
        <div
          className={`overflow-hidden lg:hidden transition-all duration-400 ${
            open ? 'max-h-[32rem] opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="mx-4 mb-4 rounded-2xl border border-slate-200 bg-white p-3 shadow-xl">
            {navLinks.map((link) => {
              const active = route.path === link.to;
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`block rounded-xl px-4 py-3 text-sm font-medium transition-colors ${
                    active ? 'bg-royal-50 text-royal-700' : 'text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <Link to="/contact" className="btn-gold mt-2 w-full">
              Get a Free Quote
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
