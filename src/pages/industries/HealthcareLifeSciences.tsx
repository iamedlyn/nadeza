import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { CTABlock2 } from '../../components/CTABlocks';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

const HealthcareLifeSciences: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <section className="py-20 bg-gradient-to-br from-green-50 to-teal-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <div className="flex justify-center mb-6">
                <Heart className="text-green-600" size={64} />
              </div>
              <h1 className="text-4xl sm:text-6xl font-bold text-slate-900 mb-6">
                Healthcare & Life Sciences
              </h1>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
                Specialized marketing for healthcare providers, medical device companies, pharmaceuticals, and life sciences organizations.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Overview</h2>
            <p className="text-lg text-slate-600 mb-8">
              Healthcare marketing requires deep understanding of compliance, patient privacy, and complex decision-making processes. We help healthcare organizations build trust, educate patients, and drive growth while maintaining regulatory compliance.
            </p>
            
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Key Challenges</h3>
            <ul className="space-y-2 mb-8">
              <li className="flex items-center"><span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>HIPAA compliance and patient privacy</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>Complex regulatory environment</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>Building patient trust and credibility</li>
            </ul>

            <h3 className="text-2xl font-bold text-slate-900 mb-4">How Nadeza Helps</h3>
            <p className="text-lg text-slate-600">
              We develop compliant marketing strategies that educate patients, build trust, and drive appointments while respecting privacy regulations and industry standards.
            </p>
          </div>
        </section>

        <CTABlock2 />
      </main>
      <Footer />
    </div>
  );
};

export default HealthcareLifeSciences;