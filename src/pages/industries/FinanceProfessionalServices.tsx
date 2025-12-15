import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { CTABlock2 } from '../../components/CTABlocks';
import { motion } from 'framer-motion';
import { Landmark } from 'lucide-react';

const FinanceProfessionalServices: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        {/* Hero */}
        <section className="py-20 bg-gradient-to-br from-slate-50 to-emerald-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <div className="flex justify-center mb-6">
                <Landmark className="text-emerald-600" size={64} />
              </div>
              <h1 className="text-4xl sm:text-6xl font-bold text-slate-900 mb-6">
                Finance & Professional Services
              </h1>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
                Credible, compliant digital marketing for firms that rely on trust, expertise,
                and long-term client relationships.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Content */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Overview</h2>
            <p className="text-lg text-slate-600 mb-8">
              In finance and professional services, your brand is your reputation. Prospects
              are cautious, regulations are strict, and your website and content often make
              the first impression. We help you translate complex services into clear,
              confident messaging that attracts the right clients.
            </p>

            <h3 className="text-2xl font-bold text-slate-900 mb-4">Key Challenges</h3>
            <ul className="space-y-2 mb-8">
              <li className="flex items-center"><span className="w-2 h-2 bg-emerald-600 rounded-full mr-3" />Balancing compliance with compelling marketing</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-emerald-600 rounded-full mr-3" />Explaining complex services without overwhelming prospects</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-emerald-600 rounded-full mr-3" />Standing out in a crowded, lookalike market</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-emerald-600 rounded-full mr-3" />Generating qualified enquiries, not just generic leads</li>
            </ul>

            <h3 className="text-2xl font-bold text-slate-900 mb-4">How Nadeza Helps</h3>
            <p className="text-lg text-slate-600 mb-6">
              We help advisory, accounting, consulting, and other professional service firms
              show up consistently across web, search, and LinkedIn in a way that feels
              professional, approachable, and trustworthy.
            </p>
            <ul className="space-y-2">
              <li className="flex items-center"><span className="w-2 h-2 bg-emerald-600 rounded-full mr-3" />Professional websites focused on credibility and clear service pages</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-emerald-600 rounded-full mr-3" />Thought leadership and content strategies that showcase expertise</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-emerald-600 rounded-full mr-3" />SEO for niche financial and professional service keywords</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-emerald-600 rounded-full mr-3" />LinkedIn and search campaigns targeting decision-makers</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-emerald-600 rounded-full mr-3" />Lead capture and nurture flows tailored to high-value engagements</li>
            </ul>
          </div>
        </section>

        <CTABlock2 />
      </main>
      <Footer />
    </div>
  );
};

export default FinanceProfessionalServices;
