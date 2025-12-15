import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { motion } from 'framer-motion';
import { TrendingUp, CheckCircle, ArrowRight, BarChart, Target, Zap, FlaskConical, Activity } from 'lucide-react';

const CRO: React.FC = () => {
  const services = [
    'Conversion audit and analysis',
    'User experience (UX) optimization',
    'A/B testing and multivariate testing',
    'Landing page optimization',
    'Checkout process optimization',
    'Form optimization and testing',
    'Heat mapping and user behavior analysis',
    'Performance tracking and reporting'
  ];

  const process = [
    {
      title: 'Audit & Analysis',
      description: 'Comprehensive analysis of your current conversion funnel, user behavior, and friction points.'
    },
    {
      title: 'Hypothesis Development',
      description: 'Create data-backed hypotheses on what might increase conversions and why.'
    },
    {
      title: 'Test Implementation',
      description: 'Design and run A/B or multivariate tests to validate which ideas actually perform better.'
    },
    {
      title: 'Analysis & Rollout',
      description: 'Review results, implement winning variations, and feed insights into the next round of testing.'
    }
  ];

  const benefits = [
    {
      icon: <TrendingUp className="text-green-600" size={32} />,
      title: 'Higher Conversion Rates',
      description: 'Turn more of your existing visitors into leads, demo requests, and paying customers.'
    },
    {
      icon: <Target className="text-blue-600" size={32} />,
      title: 'Better User Experience',
      description: 'Remove friction, clarify messaging, and guide users smoothly toward the next step.'
    },
    {
      icon: <Zap className="text-yellow-600" size={32} />,
      title: 'More Revenue from Same Traffic',
      description: 'Grow revenue without endlessly increasing ad spend or traffic acquisition.'
    }
  ];

  const tools = [
    'Google Analytics 4 & Events',
    'Google Tag Manager',
    'Hotjar / Microsoft Clarity (heatmaps & recordings)',
    'VWO / Optimizely / Convert (A/B testing)',
    'Landing page builders (Unbounce, Webflow, custom)',
    'Form analytics and funnel tracking',
    'Custom dashboards for CRO reporting'
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-green-50 to-teal-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <div className="flex justify-center mb-6">
                <BarChart className="text-green-600" size={64} />
              </div>
              <h1 className="text-4xl sm:text-6xl font-bold text-slate-900 mb-6">
                Conversion Rate Optimization (CRO)
              </h1>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-4">
                CRO is the practice of improving your website so a higher percentage of visitors take
                action—submit a form, book a call, start a trial, or complete a purchase.
              </p>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto mb-8">
                Instead of only bringing in more traffic, we help you get more value from the traffic you
                already have through structured testing, UX improvements, and data-driven insights.
              </p>
              <a
                href="/contact"
                className="bg-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-700 transition-colors duration-200 inline-flex items-center mx-auto"
              >
                Book a Call
                <ArrowRight className="ml-2" size={20} />
              </a>
            </motion.div>
          </div>
        </section>

        {/* What CRO Really Is */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start"
            >
              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-4">
                  CRO Is Not Just a Buzzword
                </h2>
                <p className="text-lg text-slate-600 mb-4">
                  Conversion Rate Optimization (CRO) is a structured process of understanding how users
                  move through your site, what&apos;s stopping them from converting, and what changes can
                  help them take the next step.
                </p>
                <p className="text-lg text-slate-600 mb-4">
                  It&apos;s not random color changes or guessing which headline “might” work better. It&apos;s
                  about pairing data (analytics, heatmaps, recordings) with smart hypotheses, testing, and
                  proper measurement.
                </p>
                <p className="text-lg text-slate-600">
                  For you, that means:
                  <br />
                  – Fewer people dropping off on key pages
                  <br />
                  – More qualified leads for sales
                  <br />
                  – More revenue from the marketing budget you already have
                </p>
              </div>

              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8 shadow-sm">
                <div className="flex items-center mb-4">
                  <Activity className="text-green-600 mr-3" size={28} />
                  <h3 className="text-xl font-semibold text-slate-900">
                    A/B &amp; Multivariate Testing in Practice
                  </h3>
                </div>
                <p className="text-slate-700 mb-4">
                  Testing is at the core of serious CRO. Rather than debating opinions, we let real
                  users and real data decide:
                </p>
                <ul className="space-y-2 text-slate-700 mb-4">
                  <li>• <strong>A/B tests</strong>: compare two versions of a page or element (A vs. B)</li>
                  <li>
                    • <strong>Multivariate tests</strong>: test multiple elements at once (e.g. headline +
                    CTA + image)
                  </li>
                  <li>
                    • <strong>Controlled rollouts</strong>: gradually release changes to reduce risk while
                    measuring impact
                  </li>
                </ul>
                <p className="text-slate-700">
                  We help you decide what to test first, how long to run tests, and how to interpret
                  results so you&apos;re not acting on misleading data or “false winners.”
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Tools & Methods */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start"
            >
              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-4">
                  Tools We Use to Understand &amp; Improve Conversions
                </h2>
                <p className="text-lg text-slate-600 mb-4">
                  CRO combines quantitative data (what is happening) with qualitative insight (why it&apos;s
                  happening). We use a mix of analytics, testing, and behavior tools to get a full picture:
                </p>
                <ul className="space-y-2 text-slate-700 mb-4">
                  <li>• Analytics tools (GA4, event tracking, funnels)</li>
                  <li>• Heatmaps and session recordings (Hotjar, Microsoft Clarity)</li>
                  <li>• A/B and multivariate testing platforms</li>
                  <li>• Form analytics and drop-off tracking</li>
                  <li>• On-page surveys and feedback widgets</li>
                </ul>
                <p className="text-lg text-slate-600">
                  We plug into your existing stack or recommend the right tools for your budget and
                  traffic levels—no unnecessary complexity.
                </p>
              </div>

              <div className="bg-white border border-emerald-100 rounded-2xl p-8 shadow-sm">
                <div className="flex items-center mb-4">
                  <FlaskConical className="text-emerald-500 mr-3" size={26} />
                  <h3 className="text-xl font-semibold text-slate-900">
                    How CRO Fits Into the Bigger Picture
                  </h3>
                </div>
                <p className="text-slate-700 mb-4">
                  CRO doesn&apos;t replace traffic acquisition, email marketing, or paid ads—it makes all of
                  them more effective.
                </p>
                <p className="text-slate-700 mb-3">
                  When your conversion rate improves:
                </p>
                <ul className="space-y-2 text-slate-700 mb-4">
                  <li>• Every click from SEO and PPC becomes more valuable</li>
                  <li>• Your customer acquisition cost (CAC) goes down</li>
                  <li>• Your ROAS and ROI improve across channels</li>
                  <li>• You can scale paid campaigns with more confidence</li>
                </ul>
                <p className="text-slate-700">
                  Instead of constantly paying for “more traffic,” CRO helps you build a website that
                  makes the most of every visitor you already have.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Services */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl font-bold text-slate-900 mb-6">CRO Services</h2>
              <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                We combine UX, analytics, and experimentation to systematically improve your key pages
                and funnels—not just once, but continuously.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-3"
                >
                  <CheckCircle className="text-green-600 flex-shrink-0" size={20} />
                  <span className="text-slate-700">{service}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Our CRO Process</h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {process.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="text-4xl font-bold text-green-600 mb-4">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">{step.title}</h3>
                  <p className="text-slate-600">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="text-center p-6 bg-slate-50 rounded-xl"
                >
                  <div className="mb-4 flex justify-center">{benefit.icon}</div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">{benefit.title}</h3>
                  <p className="text-slate-600">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-slate-900 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6">Ready to Boost Your Conversions?</h2>
              <p className="text-xl text-slate-300 mb-8">
                Let&apos;s build a CRO program that turns more of your existing visitors into high-quality
                leads and customers.
              </p>
              <a
                href="/contact"
                className="bg-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-700 transition-colors duration-200 inline-flex items-center justify-center"
              >
                Book a Call
                <ArrowRight className="ml-2" size={20} />
              </a>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default CRO;
