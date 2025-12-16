import React, { useEffect, useRef, useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

type NavLink = { name: string; href: string };

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Desktop dropdown open states
  const [servicesOpen, setServicesOpen] = useState(false);
  const [industriesOpen, setIndustriesOpen] = useState(false);

  // Mobile accordion open states
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileIndustriesOpen, setMobileIndustriesOpen] = useState(false);

  const servicesRef = useRef<HTMLDivElement | null>(null);
  const industriesRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close desktop dropdowns on outside click + Esc
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setServicesOpen(false);
        setIndustriesOpen(false);
        setIsMenuOpen(false);
      }
    };

    const onClick = (e: MouseEvent) => {
      const target = e.target as Node;
      if (servicesRef.current && !servicesRef.current.contains(target)) setServicesOpen(false);
      if (industriesRef.current && !industriesRef.current.contains(target)) setIndustriesOpen(false);
    };

    document.addEventListener('keydown', onKey);
    document.addEventListener('mousedown', onClick);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.removeEventListener('mousedown', onClick);
    };
  }, []);

  // Close mobile menu when navigating (simple version)
  const closeMobile = () => {
    setIsMenuOpen(false);
    setMobileServicesOpen(false);
    setMobileIndustriesOpen(false);
  };

  const services: NavLink[] = [
    { name: 'Website Design & Development', href: '/services/website-design-development' },
    { name: 'HubSpot, WordPress, & Shopify', href: '/services/hubspot-wordpress-shopify' },
    { name: 'SEO', href: '/services/seo' },
    { name: 'Paid Advertising', href: '/services/paid-advertising' },
    { name: 'Content Marketing', href: '/services/content-marketing' },
    { name: 'Lead Generation', href: '/services/lead-generation' },
    { name: 'CRO', href: '/services/cro' },
    { name: 'Email Marketing', href: '/services/email-marketing' },
    { name: 'Data & Analytics', href: '/services/data-analytics' },
    { name: 'Strategy & Consulting', href: '/services/strategy-consulting' },
    { name: 'AI Agents & Automation', href: '/services/ai-automation' },
    { name: 'Social Media Strategy', href: '/services/social-media' }
  ];

  const industries: NavLink[] = [
    { name: 'B2B, B2C, & SaaS', href: '/industries/b2b-b2c-saas' },
    { name: 'Healthcare & Life Sciences', href: '/industries/healthcare-life-sciences' },
    { name: 'E-Commerce & Retail', href: '/industries/ecommerce-retail' },
    { name: 'Finance & Professional Services', href: '/industries/finance-professional-services' },
    { name: 'Education & Training', href: '/industries/education-training' },
    { name: 'Startups & Entrepreneurs', href: '/industries/startups-entrepreneurs' },
    { name: 'Hospitality & Travel', href: '/industries/hospitality-travel' },
    { name: 'Real Estate & Property', href: '/industries/real-estate-property' },
    { name: 'Law Firms & Legal Services', href: '/industries/law-firms-legal-services' },
    { name: 'Dentists & Health Clinics', href: '/industries/dentists-health-clinics' },
    { name: 'Nonprofits & Community Organizations', href: '/industries/nonprofits-community-organizations' },
    { name: 'Food & Beverage', href: '/industries/food-beverage' }
  ];

  const linkBase =
    'font-medium transition-colors duration-200 text-slate-800 hover:text-nadeza-blue';

  return (
    <header
      className={[
        'fixed top-0 left-0 right-0 z-50',
        'bg-white/90 backdrop-blur-md transition-all duration-300',
        isScrolled ? 'shadow-lg' : 'shadow-sm'
      ].join(' ')}
    >
      {/* Apple-ish shadow fade */}
      <div className="pointer-events-none absolute left-0 right-0 top-full h-6 bg-gradient-to-b from-black/10 to-transparent" />

      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20 lg:h-24">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <a href="/" className="block">
              <img
                src="https://242510585.fs1.hubspotusercontent-na2.net/hubfs/242510585/New_Logo_Nadeza.png"
                alt="Nadeza"
                className="h-12 lg:h-14 w-auto"
                loading="lazy"
              />
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <a href="/" className={linkBase}>Home</a>

            {/* Services dropdown */}
            <div ref={servicesRef} className="relative">
              <button
                type="button"
                onClick={() => {
                  setServicesOpen((v) => !v);
                  setIndustriesOpen(false);
                }}
                className={`${linkBase} inline-flex items-center gap-1`}
                aria-haspopup="menu"
                aria-expanded={servicesOpen}
              >
                Services <ChevronDown size={18} className={`transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
              </button>

              <AnimatePresence>
                {servicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.18 }}
                    className="absolute left-0 mt-3 w-[340px] rounded-xl border border-slate-200 bg-white shadow-xl overflow-hidden"
                    role="menu"
                  >
                    <div className="px-4 py-3 border-b border-slate-100">
                      <p className="text-sm font-semibold text-slate-900">Services</p>
                      <p className="text-xs text-slate-500">Pick a specialty or view everything.</p>
                    </div>

                    <div className="max-h-[360px] overflow-auto py-2">
                      <a
                        href="/services"
                        className="block px-4 py-2 text-sm font-semibold text-nadeza-blue hover:bg-slate-50"
                        onClick={() => setServicesOpen(false)}
                      >
                        View All Services →
                      </a>

                      {services.map((s) => (
                        <a
                          key={s.href}
                          href={s.href}
                          className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50"
                          onClick={() => setServicesOpen(false)}
                        >
                          {s.name}
                        </a>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Industries dropdown */}
            <div ref={industriesRef} className="relative">
              <button
                type="button"
                onClick={() => {
                  setIndustriesOpen((v) => !v);
                  setServicesOpen(false);
                }}
                className={`${linkBase} inline-flex items-center gap-1`}
                aria-haspopup="menu"
                aria-expanded={industriesOpen}
              >
                Industries <ChevronDown size={18} className={`transition-transform ${industriesOpen ? 'rotate-180' : ''}`} />
              </button>

              <AnimatePresence>
                {industriesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.18 }}
                    className="absolute left-0 mt-3 w-[340px] rounded-xl border border-slate-200 bg-white shadow-xl overflow-hidden"
                    role="menu"
                  >
                    <div className="px-4 py-3 border-b border-slate-100">
                      <p className="text-sm font-semibold text-slate-900">Industries</p>
                      <p className="text-xs text-slate-500">See examples tailored to your space.</p>
                    </div>

                    <div className="max-h-[360px] overflow-auto py-2">
                      {industries.map((i) => (
                        <a
                          key={i.href}
                          href={i.href}
                          className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50"
                          onClick={() => setIndustriesOpen(false)}
                        >
                          {i.name}
                        </a>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <a href="/about" className={linkBase}>About</a>
            <a href="/case-studies" className={linkBase}>Case Studies</a>
            <a href="/contact" className={linkBase}>Contact</a>

            <a
              href="/contact"
              className="bg-nadeza-blue text-white px-6 py-2.5 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200 shadow-sm"
            >
              Book Discovery Call
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen((v) => !v)}
              className="text-slate-800 hover:text-nadeza-blue transition-colors duration-200"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-white border-t border-slate-200"
            >
              <div className="px-2 pt-3 pb-4 space-y-1">
                <a href="/" onClick={closeMobile} className="block px-3 py-3 font-medium text-slate-800 hover:text-nadeza-blue">
                  Home
                </a>

                {/* Mobile Services accordion */}
                <button
                  type="button"
                  onClick={() => setMobileServicesOpen((v) => !v)}
                  className="w-full flex items-center justify-between px-3 py-3 font-medium text-slate-800"
                >
                  <span>Services</span>
                  <ChevronDown size={18} className={`transition-transform ${mobileServicesOpen ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {mobileServicesOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="pl-3 pb-2"
                    >
                      <a
                        href="/services"
                        onClick={closeMobile}
                        className="block px-3 py-2 text-sm font-semibold text-nadeza-blue"
                      >
                        View All Services →
                      </a>
                      {services.map((s) => (
                        <a
                          key={s.href}
                          href={s.href}
                          onClick={closeMobile}
                          className="block px-3 py-2 text-sm text-slate-700 hover:text-nadeza-blue"
                        >
                          {s.name}
                        </a>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Mobile Industries accordion */}
                <button
                  type="button"
                  onClick={() => setMobileIndustriesOpen((v) => !v)}
                  className="w-full flex items-center justify-between px-3 py-3 font-medium text-slate-800"
                >
                  <span>Industries</span>
                  <ChevronDown size={18} className={`transition-transform ${mobileIndustriesOpen ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {mobileIndustriesOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="pl-3 pb-2"
                    >
                      {industries.map((i) => (
                        <a
                          key={i.href}
                          href={i.href}
                          onClick={closeMobile}
                          className="block px-3 py-2 text-sm text-slate-700 hover:text-nadeza-blue"
                        >
                          {i.name}
                        </a>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>

                <a href="/about" onClick={closeMobile} className="block px-3 py-3 font-medium text-slate-800 hover:text-nadeza-blue">
                  About
                </a>
                <a href="/case-studies" onClick={closeMobile} className="block px-3 py-3 font-medium text-slate-800 hover:text-nadeza-blue">
                  Case Studies
                </a>
                <a href="/contact" onClick={closeMobile} className="block px-3 py-3 font-medium text-slate-800 hover:text-nadeza-blue">
                  Contact
                </a>

                <a
                  href="/contact"
                  onClick={closeMobile}
                  className="block w-full mt-3 bg-nadeza-blue text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200 text-center"
                >
                  Book Discovery Call
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Header;
