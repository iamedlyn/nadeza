import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { motion } from 'framer-motion';
import {
  Target,
  CheckCircle,
  ArrowRight,
  DollarSign,
  Users,
  BarChart3,
  Megaphone
} from 'lucide-react';

const PaidAdvertising: React.FC = () => {
  const platforms = [
    'Google Ads (Search, Display, Shopping, YouTube)',
    'Meta Ads (Facebook & Instagram)',
    'LinkedIn Advertising',
    'Microsoft Advertising (Bing)',
    'X / Twitter Ads',
    'TikTok Ads',
    'Pinterest Ads',
    'Programmatic & Display Networks',
    'YouTube Video Ads',
    'Amazon / Retail Media (where applicable)'
  ];

  const services = [
    'Campaign strategy and funnel planning',
    'Ad creative development and testing',
    'Audience and keyword research & targeting',
    'Landing page and offer optimization',
    'Bid strategy and budget management',
    'A/B testing and performance analysis',
    'Conversion tracking and attribution setup',
    'Ongoing reporting, insights, and iteration'
  ];

  const benefits = [
    {
      icon: <DollarSign className="text-green-600" size={32} />,
      title: 'Higher ROAS',
      description:
        'Maximize return on ad spend with clear goals, structured testing, and continuous optimization.'
    },
    {
      icon: <Users className="text-blue-600" size={32} />,
      title: 'Qualified Leads Fast',
      description:
        'Reach the right people with precise targeting, intent-based keywords, and audience signals.'
    },
    {
      icon: <BarChart3 className="text-purple-600" size={32} />,
      title: 'Scalable Growth',
      description:
        'Scale what works while protecting your budget, so growth is predictable—not accidental.'
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-red-50 via-rose-50 to-pink-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <div className="flex justify-center mb-6">
                <Target className="text-red-600" size={64} />
              </div>
              <h1 className="text-4xl sm:text-6xl font-bold text-slate-900 mb-6">
                Paid Advertising
              </h1>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-4">
                Data-driven campaigns across search, social, and video that put you in front of the right
                people at the right time—without wasting your budget.
              </p>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto mb-8">
                Paid ads are the essential sibling of SEO: when you need visibility now, want to launch
                something new, or compete with bigger brands, paid media helps you show up immediately.
              </p>
              <a
                href="/contact"
                className="bg-red-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-red-700 transition-colors duration-200 inline-flex items-center mx-auto"
              >
                Book a Call
                <ArrowRight className="ml-2" size={20} />
              </a>
            </motion.div>
          </div>
        </section>

        {/* Why Paid Advertising Matters */}
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
                <div className="flex items-center gap-3 mb-4">
                  <Megaphone className="text-red-600" size={32} />
                  <h2 className="text-3xl font-bold text-slate-900">
                    Why Paid Advertising Is Non-Optional Today
                  </h2>
                </div>
                <p className="text-lg text-slate-600 mb-4">
                  SEO builds your long-term foundation—but it takes time. Paid advertising is how you turn
                  the lights on quickly. Whether you’re a new brand, launching a product, entering a new
                  market, or trying to outrun a competitor, ads help you appear where it matters right now.
                </p>
                <p className="text-lg text-slate-600 mb-4">
                  From Google Search and YouTube to Meta, LinkedIn, TikTok, and programmatic display,
                  paid media lets you:
                </p>
                <ul className="space-y-2 text-slate-600 mb-4">
                  <li className="flex items-start gap-2">
                    <span className="mt-2 h-2 w-2 rounded-full bg-red-500" />
                    <span>Test offers, audiences, and messages quickly before scaling.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-2 h-2 w-2 rounded-full bg-red-500" />
                    <span>Show up next to (and on top of) much bigger competitors.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-2 h-2 w-2 rounded-full bg-red-500" />
                    <span>Generate leads and sales while organic efforts ramp up.</span>
                  </li>
                </ul>
                <p className="text-lg text-slate-600">
                  The best results come when paid and organic work together: SEO builds authority and
                  relevance, while paid advertising gives you instant visibility and control.
                </p>
              </div>

              <div className="bg-red-600/5 border border-red-100 rounded-2xl p-8 shadow-sm">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  Compete With the “Big Guys” Without Overspending
                </h3>
                <p className="text-slate-700 mb-3">
                  Large brands run paid media even with huge brand recognition. For smaller businesses, ads
                  are not a luxury—they&apos;re often the only way to reliably get seen.
                </p>
                <p className="text-slate-700 mb-3">
                  You don&apos;t need massive budgets. You need a clear strategy, tight targeting, and smart
                  guardrails:
                </p>
                <ul className="space-y-2 text-slate-700 mb-4">
                  <li>• Start with a budget you&apos;re comfortable with.</li>
                  <li>• Prioritize high-intent campaigns first (search, remarketing, core offers).</li>
                  <li>• Scale only what proves it can convert profitably.</li>
                </ul>
                <p className="text-slate-700">
                  Our job is to protect your spend, cut what doesn&apos;t work, and double down on what does—so
                  you stay in control the entire time.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Budget Banner */}
        <section className="py-8 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-sm sm:text-base text-slate-200">
              You don&apos;t need to spend like an enterprise brand. You need clear goals, the right channels,
              and a performance partner who knows how to stretch every dollar.
            </p>
          </div>
        </section>

        {/* Platforms */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Advertising Platforms</h2>
              <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                We meet your audience where they already spend time—across search, social, video, and
                display.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {platforms.map((platform, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-3"
                >
                  <CheckCircle className="text-red-600 flex-shrink-0" size={20} />
                  <span className="text-slate-700">{platform}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl font-bold text-slate-900 mb-6">What&apos;s Included</h2>
              <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                Strategy, execution, and optimization—so your campaigns don&apos;t just run, they perform.
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
              <h2 className="text-3xl font-bold mb-6">Ready to Launch or Scale Your Ads?</h2>
              <p className="text-xl text-slate-300 mb-8">
                Whether you&apos;re just starting out or already spending, we can help you get more from every
                dollar you invest in paid media.
              </p>
              <a
                href="/contact"
                className="bg-red-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-red-700 transition-colors duration-200 inline-flex items-center justify-center"
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

export default PaidAdvertising;
