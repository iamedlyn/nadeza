import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { motion } from 'framer-motion';
import { BarChart3, CheckCircle, ArrowRight, TrendingUp, Target, Eye, Activity, AlertTriangle } from 'lucide-react';

const DataAnalytics: React.FC = () => {
  const services = [
    'Google Analytics 4 setup and configuration',
    'Custom dashboard creation',
    'Conversion tracking implementation',
    'Attribution modeling and analysis',
    'Marketing performance reporting',
    'Data visualization and insights',
    'ROI and ROAS tracking',
    'Automated reporting systems'
  ];

  const tools = [
    'Google Analytics 4',
    'Google Tag Manager',
    'Looker Studio / Google Data Studio',
    'Mixpanel',
    'Hotjar',
    'Microsoft Clarity',
    'Salesforce Analytics',
    'HubSpot Analytics',
    'Custom Dashboards'
  ];

  const benefits = [
    {
      icon: <Eye className="text-blue-600" size={32} />,
      title: 'Clear Visibility',
      description: 'See exactly what is happening across your website, campaigns, and funnels.'
    },
    {
      icon: <Target className="text-green-600" size={32} />,
      title: 'Data-Driven Decisions',
      description: 'Move from “we think” to “we know” with actionable, reliable data.'
    },
    {
      icon: <TrendingUp className="text-purple-600" size={32} />,
      title: 'Improved ROI',
      description: 'Double down on what works, fix what doesn’t, and protect your marketing budget.'
    }
  ];

  const kpis = [
    'Conversion rate (by page, channel, campaign)',
    'Click-through rate (CTR) on key CTAs',
    'Bounce and exit rates on high-value pages',
    'Form completion and drop-off rates',
    'Revenue and leads by source / medium',
    'Customer acquisition cost (CAC)',
    'Return on ad spend (ROAS)',
    'Time on page and scroll depth'
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-cyan-50 to-blue-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <div className="flex justify-center mb-6">
                <BarChart3 className="text-cyan-600" size={64} />
              </div>
              <h1 className="text-4xl sm:text-6xl font-bold text-slate-900 mb-6">
                Data &amp; Analytics
              </h1>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-4">
                Transform data into decisions. We build analytics foundations that show you what&apos;s
                really working, what isn&apos;t, and where your next opportunities are hiding.
              </p>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto mb-8">
                If you don&apos;t measure it, you can&apos;t improve it. We make sure you&apos;re not flying blind.
              </p>
              <a
                href="/contact"
                className="bg-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-cyan-700 transition-colors duration-200 inline-flex items-center mx-auto"
              >
                Book a Call
                <ArrowRight className="ml-2" size={20} />
              </a>
            </motion.div>
          </div>
        </section>

        {/* Why Data & Analytics Matter */}
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
                  You Can&apos;t Improve What You Don&apos;t Measure
                </h2>
                <p className="text-lg text-slate-600 mb-4">
                  A beautiful website, great copy, and strong campaigns mean very little if you
                  don&apos;t know how they&apos;re actually performing. Data &amp; analytics turn guesses into
                  clarity—so you&apos;re not just “hoping” something works, you can see it, prove it,
                  and improve it.
                </p>
                <p className="text-lg text-slate-600 mb-4">
                  We help you move away from gut feeling and anecdotal feedback into measurable,
                  repeatable performance. No more shooting in the dark and praying for a bull&apos;s-eye.
                </p>
                <p className="text-lg text-slate-600">
                  From first click to final conversion, we design measurement frameworks that align
                  directly with your business goals—not just vanity metrics.
                </p>
              </div>

              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8 shadow-sm">
                <div className="flex items-center mb-4">
                  <Activity className="text-cyan-600 mr-3" size={28} />
                  <h3 className="text-xl font-semibold text-slate-900">
                    The KPIs That Actually Matter
                  </h3>
                </div>
                <p className="text-slate-700 mb-4">
                  Analytics is more than pageviews. We help you track the metrics that really tell the
                  story of your growth:
                </p>
                <ul className="space-y-2 text-slate-700">
                  {kpis.map((item) => (
                    <li key={item} className="flex items-start">
                      <span className="mt-1 mr-2 h-1.5 w-1.5 rounded-full bg-cyan-600" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Behavior, Heatmaps & Broken Journeys */}
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
                  See What Users Do, Not Just Where They Came From
                </h2>
                <p className="text-lg text-slate-600 mb-4">
                  Traffic is only the beginning. Tools like Hotjar and Microsoft Clarity reveal how
                  people actually move through your pages: where they scroll, where they stop, and where
                  they give up.
                </p>
                <p className="text-lg text-slate-600 mb-4">
                  Heatmaps, scroll maps, and session recordings show you:
                </p>
                <ul className="space-y-2 text-slate-700 mb-4">
                  <li>• Buttons and links that never get noticed</li>
                  <li>• Forms that cause friction or confusion</li>
                  <li>• Sections of your site people love—or completely ignore</li>
                </ul>
                <p className="text-lg text-slate-600">
                  Instead of redesigning blindly, you improve the exact parts of the experience that are
                  blocking conversions.
                </p>
              </div>

              <div className="bg-white border border-rose-100 rounded-2xl p-8 shadow-sm">
                <div className="flex items-center mb-4">
                  <AlertTriangle className="text-rose-500 mr-3" size={26} />
                  <h3 className="text-xl font-semibold text-slate-900">
                    Broken Pages, Broken Links, Broken Journeys
                  </h3>
                </div>
                <p className="text-slate-700 mb-4">
                  Nothing kills conversions faster than broken experiences—404 pages, dead links,
                  tracking that doesn&apos;t fire, or checkout steps that quietly fail.
                </p>
                <p className="text-slate-700 mb-3">
                  We set up monitoring to catch issues like:
                </p>
                <ul className="space-y-2 text-slate-700 mb-4">
                  <li>• 404 and error spikes after launches or content changes</li>
                  <li>• Funnels with abnormal drop-off at specific steps</li>
                  <li>• Forms that stop sending submissions or events</li>
                  <li>• Misconfigured tags that break your reporting</li>
                </ul>
                <p className="text-slate-700">
                  With the right alerts and dashboards, you don&apos;t find problems months later—you spot
                  them, fix them, and protect your revenue in real time.
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
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Analytics Services</h2>
              <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                From one-time analytics cleanups to fully managed reporting, we build a measurement
                layer that supports every other part of your marketing.
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
                  <CheckCircle className="text-cyan-600 flex-shrink-0" size={20} />
                  <span className="text-slate-700">{service}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Tools */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Analytics Tools We Work With</h2>
              <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-6">
                We plug into your existing stack or help you choose the right tools for your stage of
                growth—rather than forcing a one-size-fits-all solution.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                {tools.map((tool, index) => (
                  <span
                    key={index}
                    className="bg-white text-slate-700 px-4 py-2 rounded-full font-medium shadow-sm"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </motion.div>
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
              <h2 className="text-3xl font-bold mb-6">
                Ready to Stop Guessing and Start Knowing?
              </h2>
              <p className="text-xl text-slate-300 mb-8">
                Let&apos;s build a data and analytics foundation that helps every campaign, every page,
                and every decision perform better.
              </p>
              <a
                href="/contact"
                className="bg-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-cyan-700 transition-colors duration-200 inline-flex items-center justify-center"
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

export default DataAnalytics;
