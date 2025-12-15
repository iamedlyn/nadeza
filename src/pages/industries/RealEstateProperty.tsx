import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { CTABlock2 } from '../../components/CTABlocks';
import { motion } from 'framer-motion';
import { Building2 } from 'lucide-react';

const RealEstateProperty: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        {/* Hero */}
        <section className="py-20 bg-gradient-to-br from-slate-50 to-amber-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <div className="flex justify-center mb-6">
                <Building2 className="text-amber-600" size={64} />
              </div>
              <h1 className="text-4xl sm:text-6xl font-bold text-slate-900 mb-6">
                Real Estate & Property
              </h1>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
                Digital marketing that puts the right buyers and tenants in front of your
                listings, developments, and spaces.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Content */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Overview</h2>
            <p className="text-lg text-slate-600 mb-8">
              Real estate is a high-stakes, relationship-driven category. Buyers and tenants
              do most of their research online before ever contacting an agent or developer.
              We help you create clear, compelling digital experiences that drive viewing
              requests and serious enquiries.
            </p>

            <h3 className="text-2xl font-bold text-slate-900 mb-4">Key Challenges</h3>
            <ul className="space-y-2 mb-8">
              <li className="flex items-center"><span className="w-2 h-2 bg-amber-600 rounded-full mr-3" />Standing out on crowded property portals</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-amber-600 rounded-full mr-3" />Generating quality leads instead of casual browsers</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-amber-600 rounded-full mr-3" />Communicating value for off-plan and new developments</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-amber-600 rounded-full mr-3" />Tracking which channels and campaigns drive closings</li>
            </ul>

            <h3 className="text-2xl font-bold text-slate-900 mb-4">How Nadeza Helps</h3>
            <p className="text-lg text-slate-600 mb-6">
              We help agents, brokers, and developers turn online visibility into booked
              viewings and signed contracts.
            </p>
            <ul className="space-y-2">
              <li className="flex items-center"><span className="w-2 h-2 bg-amber-600 rounded-full mr-3" />Property and development websites with clear lead capture</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-amber-600 rounded-full mr-3" />Landing pages for launches, open houses, and special campaigns</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-amber-600 rounded-full mr-3" />Local SEO for high-intent property searches</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-amber-600 rounded-full mr-3" />Paid campaigns targeting location, budget, and buyer profiles</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-amber-600 rounded-full mr-3" />Analytics that track enquiries, viewings, and deal sources</li>
            </ul>
          </div>
        </section>

        <CTABlock2 />
      </main>
      <Footer />
    </div>
  );
};

export default RealEstateProperty;
