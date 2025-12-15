import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { CTABlock2 } from '../../components/CTABlocks';
import { motion } from 'framer-motion';
import { Scale } from 'lucide-react';

const LawFirmsLegalServices: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        {/* Hero */}
        <section className="py-20 bg-gradient-to-br from-slate-50 to-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <div className="flex justify-center mb-6">
                <Scale className="text-slate-700" size={64} />
              </div>
              <h1 className="text-4xl sm:text-6xl font-bold text-slate-900 mb-6">
                Law Firms & Legal Services
              </h1>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
                Professional, trustworthy digital marketing for law practices that want to
                attract the right clients — not just more enquiries.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Content */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Overview</h2>
            <p className="text-lg text-slate-600 mb-8">
              Legal clients are often stressed, under time pressure, and unsure where to
              turn. Your online presence has to communicate both competence and empathy. We
              help law firms and legal service providers build websites and campaigns that
              feel approachable, ethical, and well-organized.
            </p>

            <h3 className="text-2xl font-bold text-slate-900 mb-4">Key Challenges</h3>
            <ul className="space-y-2 mb-8">
              <li className="flex items-center"><span className="w-2 h-2 bg-slate-700 rounded-full mr-3" />Maintaining professionalism while staying relatable</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-slate-700 rounded-full mr-3" />Competing with larger firms and aggregators</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-slate-700 rounded-full mr-3" />Explaining services and fees without overwhelming visitors</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-slate-700 rounded-full mr-3" />Managing enquiries and intake efficiently and confidentially</li>
            </ul>

            <h3 className="text-2xl font-bold text-slate-900 mb-4">How Nadeza Helps</h3>
            <p className="text-lg text-slate-600 mb-6">
              We design digital experiences that increase qualified enquiries while
              protecting your reputation and upholding professional standards.
            </p>
            <ul className="space-y-2">
              <li className="flex items-center"><span className="w-2 h-2 bg-slate-700 rounded-full mr-3" />Practice-area-focused websites with clear next steps for prospects</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-slate-700 rounded-full mr-3" />Local SEO for legal queries and location-based searches</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-slate-700 rounded-full mr-3" />Search and local campaigns with proper landing page strategy</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-slate-700 rounded-full mr-3" />Intake workflows that respect confidentiality and urgency</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-slate-700 rounded-full mr-3" />Reporting on lead quality, case types, and marketing ROI</li>
            </ul>
          </div>
        </section>

        <CTABlock2 />
      </main>
      <Footer />
    </div>
  );
};

export default LawFirmsLegalServices;
