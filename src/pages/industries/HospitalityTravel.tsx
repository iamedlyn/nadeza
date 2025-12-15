import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { CTABlock2 } from '../../components/CTABlocks';
import { motion } from 'framer-motion';
import { Plane } from 'lucide-react';

const HospitalityTravel: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        {/* Hero */}
        <section className="py-20 bg-gradient-to-br from-blue-50 to-cyan-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <div className="flex justify-center mb-6">
                <Plane className="text-cyan-600" size={64} />
              </div>
              <h1 className="text-4xl sm:text-6xl font-bold text-slate-900 mb-6">
                Hospitality & Travel
              </h1>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
                Marketing that fills rooms, tours, and experiences — with a focus on direct
                bookings and repeat guests.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Content */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Overview</h2>
            <p className="text-lg text-slate-600 mb-8">
              Guests discover you online long before they ever step onto your property or
              join your tour. We help hotels, vacation rentals, and travel operators create
              digital experiences that reflect the stay or trip you&apos;re selling — and make
              it easy to book directly.
            </p>

            <h3 className="text-2xl font-bold text-slate-900 mb-4">Key Challenges</h3>
            <ul className="space-y-2 mb-8">
              <li className="flex items-center"><span className="w-2 h-2 bg-cyan-600 rounded-full mr-3" />High competition on OTAs and listing platforms</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-cyan-600 rounded-full mr-3" />Reliance on intermediaries that take a large commission</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-cyan-600 rounded-full mr-3" />Seasonal demand and unpredictable booking patterns</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-cyan-600 rounded-full mr-3" />Inconsistent guest communication before and after the stay</li>
            </ul>

            <h3 className="text-2xl font-bold text-slate-900 mb-4">How Nadeza Helps</h3>
            <p className="text-lg text-slate-600 mb-6">
              We focus on making your direct channels — your website, email, and social — as
              strong and conversion-ready as your listings.
            </p>
            <ul className="space-y-2">
              <li className="flex items-center"><span className="w-2 h-2 bg-cyan-600 rounded-full mr-3" />Conversion-focused websites and landing pages for direct booking</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-cyan-600 rounded-full mr-3" />SEO for location, experience, and &quot;near me&quot; searches</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-cyan-600 rounded-full mr-3" />Optimization of OTAs and listings to stand out in search results</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-cyan-600 rounded-full mr-3" />Email flows for pre-stay, in-stay, and post-stay communication</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-cyan-600 rounded-full mr-3" />Reporting on occupancy, booking sources, and campaign ROI</li>
            </ul>
          </div>
        </section>

        <CTABlock2 />
      </main>
      <Footer />
    </div>
  );
};

export default HospitalityTravel;
