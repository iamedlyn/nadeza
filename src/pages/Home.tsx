import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Problem from '../components/Problem';
import Solutions from '../components/Solutions';
// About component is still removed
// CaseStudies component is still removed
import Footer from '../components/Footer';
import { motion } from 'framer-motion'; // Retaining motion for the restored content

const Home: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Problem />
        <Solutions />
        
       {/* Experience / Highlights Section */}
<section className="py-20 bg-slate-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="text-center"
    >
      <h2 className="text-3xl font-bold text-slate-900 mb-4">
        20+ Years of Proven Marketing Leadership
      </h2>
      <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-12">
        From fast-growing startups to global corporations, Nadeza brings deep experience in
        strategy, performance marketing, website development, and full-funnel execution —
        backed by real results, not vanity metrics.
      </p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        
        {/* Stat 1 */}
        <div className="p-6 bg-white rounded-xl shadow-lg">
          <p className="text-4xl font-extrabold text-blue-600">20+</p>
          <p className="text-lg font-semibold text-slate-700 mt-2">Years Experience</p>
        </div>

        {/* Stat 2 */}
        <div className="p-6 bg-white rounded-xl shadow-lg">
          <p className="text-4xl font-extrabold text-blue-600">1,000+</p>
          <p className="text-lg font-semibold text-slate-700 mt-2">Websites Built</p>
        </div>

        {/* Stat 3 */}
        <div className="p-6 bg-white rounded-xl shadow-lg">
          <p className="text-4xl font-extrabold text-blue-600">$5M+</p>
          <p className="text-lg font-semibold text-slate-700 mt-2">Ad Spend Managed</p>
        </div>

        {/* Stat 4 */}
        <div className="p-6 bg-white rounded-xl shadow-lg">
          <p className="text-4xl font-extrabold text-blue-600">Global</p>
          <p className="text-lg font-semibold text-slate-700 mt-2">Clients & Support</p>
        </div>
      </div>
    </motion.div>
  </div>
</section>

        
      </main>
      <Footer />
    </div>
  );
};

export default Home;