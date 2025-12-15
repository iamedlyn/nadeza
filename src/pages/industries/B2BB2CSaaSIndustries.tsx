import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { CTABlock2 } from '../../components/CTABlocks';
import { motion } from 'framer-motion';
import { Network } from 'lucide-react';

const B2BB2CSaaSIndustries: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        {/* Hero */}
        <section className="py-20 bg-gradient-to-br from-slate-50 to-indigo-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <div className="flex justify-center mb-6">
                <Network className="text-indigo-600" size={64} />
              </div>
              <h1 className="text-4xl sm:text-6xl font-bold text-slate-900 mb-6">
                B2B, B2C, & SaaS
              </h1>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
                Full-funnel marketing for product-led, sales-led, and hybrid businesses that
                need qualified demand, not just traffic.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Content */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Overview</h2>
            <p className="text-lg text-slate-600 mb-8">
              Whether you&apos;re selling to consumers, businesses, or both, your buyers research
              across channels before talking to sales or starting a trial. We help B2B, B2C, and
              SaaS brands align positioning, website experience, and demand generation so
              marketing and sales (or product) work together instead of in silos.
            </p>

            <h3 className="text-2xl font-bold text-slate-900 mb-4">Key Challenges</h3>
            <ul className="space-y-2 mb-8">
              <li className="flex items-center"><span className="w-2 h-2 bg-indigo-600 rounded-full mr-3" />Complex buyer journeys across multiple stakeholders</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-indigo-600 rounded-full mr-3" />Misalignment between marketing, sales, and product</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-indigo-600 rounded-full mr-3" />Difficulty turning trials, demos, or leads into revenue</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-indigo-600 rounded-full mr-3" />Unclear attribution across paid, organic, and partner channels</li>
            </ul>

            <h3 className="text-2xl font-bold text-slate-900 mb-4">How Nadeza Helps</h3>
            <p className="text-lg text-slate-600 mb-6">
              We start with positioning and your go-to-market motion, then build campaigns,
              content, and reporting that support pipeline and expansion — not just MQL counts.
            </p>
            <ul className="space-y-2">
              <li className="flex items-center"><span className="w-2 h-2 bg-indigo-600 rounded-full mr-3" />Website and landing pages aligned to your core offers and ICPs</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-indigo-600 rounded-full mr-3" />Demand generation across search, social, and partner channels</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-indigo-600 rounded-full mr-3" />Lead scoring, routing, and nurture flows in your CRM/automation</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-indigo-600 rounded-full mr-3" />Content strategies for awareness, evaluation, and expansion stages</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-indigo-600 rounded-full mr-3" />Dashboards focused on pipeline, CAC, and LTV — not vanity metrics</li>
            </ul>
          </div>
        </section>

        <CTABlock2 />
      </main>
      <Footer />
    </div>
  );
};

export default B2BB2CSaaSIndustries;
