import React from 'react';
import Footer from '../components/Footer'; // ✅ IMPORT FOOTER

const NotFound: React.FC = () => {
  return (
    <>
      {/* 404 Section */}
      <section className="relative flex py-10 min-h-[80vh] items-center justify-center overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800">
        <div className="mx-auto relative z-30 w-full max-w-[600px] text-center px-4">
          
          {/* SVG 404 Graphic */}
          <div className="mb-8">
            <svg
              width="472"
              height="158"
              viewBox="0 0 472 158"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path d="M26.4 0.52C29.86..." fill="#8F95B2" />
              {/* (SVG truncated for brevity — keep your existing full SVG code here) */}
            </svg>
          </div>

          {/* Title */}
          <h1 className="mb-3 text-3xl font-bold text-white sm:text-4xl">
            Oops… This Page Missed the Brief.
          </h1>

          {/* Description */}
          <p className="text-slate-300 mb-2 text-base sm:text-lg">
            The URL you tried to visit doesn’t exist—or it moved.
          </p>
          <p className="text-slate-400 mb-8 text-sm sm:text-base">
            Think of it like launching ads without a landing page.  
            Nothing to convert on. Let’s get you somewhere better.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
            <a
              href="/"
              className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-slate-900 transition-colors hover:bg-slate-200"
            >
              Back to Homepage
            </a>

            <a
              href="/services"
              className="inline-flex items-center gap-2 rounded-full border border-slate-400/60 px-6 py-3 text-sm font-medium text-slate-100 hover:border-white hover:text-white"
            >
              View Our Services
            </a>

            <a
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-nadeza-blue px-6 py-3 text-sm font-medium text-white hover:bg-blue-600"
            >
              Contact Nadeza
            </a>
          </div>
        </div>

        {/* Soft lighting layer */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-radial from-white/5 via-transparent to-black/60 opacity-70 mix-blend-soft-light" />
        </div>

        {/* Bottom Glow */}
        <div className="absolute bottom-0 left-0 right-0 z-10 opacity-70">
          <svg
            width="2192"
            height="771"
            viewBox="0 0 2192 771"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <g opacity="0.35" filter="url(#blur404)">
              <path
                d="M199.999 258.919C199.999 86.6144..."
                fill="#4F46E5"
              />
            </g>
            <defs>
              <filter id="blur404" x="0" y="0" width="2192" height="771">
                <feGaussianBlur stdDeviation="100" />
              </filter>
            </defs>
          </svg>
        </div>
      </section>

      {/* Footer added below 404 section */}
      <Footer />  
    </>
  );
};

export default NotFound;
