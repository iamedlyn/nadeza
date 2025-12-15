import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { CTABlock2 } from '../../components/CTABlocks';
import { motion } from 'framer-motion';
import { Rocket } from 'lucide-react';

const StartupsEntrepreneurs: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        {/* Hero */}
        <section className="py-20 bg-gradient-to-br from-amber-50 to-orange-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <div className="flex justify-center mb-6">
                <Rocket className="text-orange-500" size={64} />
              </div>
              <h1 className="text-4xl sm:text-6xl font-bold text-slate-900 mb-6">
                Startups & Entrepreneurs
              </h1>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
                Lean, flexible marketing support for founders who need to test, learn, and
                grow quickly — without a full in-house team.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Content */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Overview</h2>
            <p className="text-lg text-slate-600 mb-8">
              As a founder, you&apos;re pitching, building, and selling — often at the same time.
              You don&apos;t need a 20-channel strategy; you need a clear story, a simple website,
              and a few channels you can test quickly. We act as your on-demand marketing
              partner while you validate and scale.
            </p>

            <h3 className="text-2xl font-bold text-slate-900 mb-4">Key Challenges</h3>
            <ul className="space-y-2 mb-8">
              <li className="flex items-center"><span className="w-2 h-2 bg-orange-500 rounded-full mr-3" />Limited time, budget, and in-house marketing support</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-orange-500 rounded-full mr-3" />Constantly shifting priorities and evolving offers</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-orange-500 rounded-full mr-3" />Difficulty turning early interest into paying customers</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-orange-500 rounded-full mr-3" />Unclear which channels deserve your limited resources</li>
            </ul>

            <h3 className="text-2xl font-bold text-slate-900 mb-4">How Nadeza Helps</h3>
            <p className="text-lg text-slate-600 mb-6">
              We help you launch fast, learn from real data, and double down on what works —
              without locking you into heavy, long-term commitments.
            </p>
            <ul className="space-y-2">
              <li className="flex items-center"><span className="w-2 h-2 bg-orange-500 rounded-full mr-3" />Launch-ready websites and landing pages for MVPs and offers</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-orange-500 rounded-full mr-3" />Positioning and messaging that investors and customers understand</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-orange-500 rounded-full mr-3" />Go-to-market plans sized to your runway and stage</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-orange-500 rounded-full mr-3" />Fast experiments across search, social, and email</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-orange-500 rounded-full mr-3" />Simple dashboards that track traction and real usage</li>
            </ul>
          </div>
        </section>

        <CTABlock2 />
      </main>
      <Footer />
    </div>
  );
};

export default StartupsEntrepreneurs;
