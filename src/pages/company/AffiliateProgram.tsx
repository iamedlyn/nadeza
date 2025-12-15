import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { CTABlock3 } from '../../components/CTABlocks';
import { motion } from 'framer-motion';
import { Users, DollarSign, Award, CheckCircle } from 'lucide-react';

const AffiliateProgram: React.FC = () => {
  const benefits = [
    "Earn 20% commission on all referred clients",
    "Monthly recurring commissions for ongoing clients",
    "Dedicated affiliate support and resources",
    "Marketing materials and co-branded content",
    "Real-time tracking and reporting dashboard",
    "Fast monthly payouts via PayPal or bank transfer"
  ];

  const qualifications = [
    "Marketing professionals and agencies",
    "Business consultants and coaches",
    "Web developers and designers",
    "Sales professionals with B2B networks",
    "Content creators in business/marketing space",
    "Anyone with a relevant audience"
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <div className="flex justify-center mb-6">
                <Users className="text-electric-pink" size={64} />
              </div>
              <h1 className="text-4xl sm:text-6xl font-bold text-slate-900 mb-6">
                Affiliate Program
              </h1>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
                Partner with Nadeza and earn generous commissions by referring clients to our marketing services. Join our affiliate network and grow your income while helping businesses succeed.
              </p>
            </motion.div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl font-bold text-slate-900 mb-6">How It Works</h2>
              <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                Simple, transparent, and profitable. Here's how our affiliate program works.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center p-8 bg-slate-50 rounded-xl"
              >
                <div className="text-4xl font-bold text-electric-pink mb-4">01</div>
                <h3 className="text-xl font-semibold text-slate-900 mb-4">Sign Up</h3>
                <p className="text-slate-600">
                  Apply to join our affiliate program and get approved within 24-48 hours.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-center p-8 bg-slate-50 rounded-xl"
              >
                <div className="text-4xl font-bold text-electric-pink mb-4">02</div>
                <h3 className="text-xl font-semibold text-slate-900 mb-4">Refer Clients</h3>
                <p className="text-slate-600">
                  Share your unique referral link with potential clients who need marketing services.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="text-center p-8 bg-slate-50 rounded-xl"
              >
                <div className="text-4xl font-bold text-electric-pink mb-4">03</div>
                <h3 className="text-xl font-semibold text-slate-900 mb-4">Earn Commissions</h3>
                <p className="text-slate-600">
                  Receive 20% commission on all referred clients, paid monthly for as long as they remain clients.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Commission Structure */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold text-slate-900 mb-6">Commission Structure</h2>
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <DollarSign className="text-electric-pink" size={32} />
                    <div>
                      <h3 className="text-xl font-semibold text-slate-900">20% Commission Rate</h3>
                      <p className="text-slate-600">Earn 20% on all referred client revenue</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Award className="text-electric-pink" size={32} />
                    <div>
                      <h3 className="text-xl font-semibold text-slate-900">Recurring Payments</h3>
                      <p className="text-slate-600">Monthly commissions for ongoing clients</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-xl shadow-lg"
              >
                <h3 className="text-xl font-semibold text-slate-900 mb-6">Program Benefits</h3>
                <div className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="text-green-600 flex-shrink-0" size={20} />
                      <span className="text-slate-700">{benefit}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Who Qualifies */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Who Qualifies</h2>
              <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                We welcome partners from various backgrounds who can connect us with businesses needing marketing services.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {qualifications.map((qualification, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-slate-50 p-6 rounded-xl text-center"
                >
                  <p className="text-slate-700 font-medium">{qualification}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <CTABlock3 />
      </main>
      <Footer />
    </div>
  );
};

export default AffiliateProgram;