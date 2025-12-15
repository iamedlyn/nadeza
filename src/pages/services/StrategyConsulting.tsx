import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { motion } from 'framer-motion';
import { Lightbulb, CheckCircle, ArrowRight, Target, Users, TrendingUp } from 'lucide-react';

const StrategyConsulting: React.FC = () => {
  const services = [
    'Marketing strategy development',
    'Competitive analysis and positioning',
    'Customer journey mapping',
    'Marketing technology stack audit',
    'Growth strategy planning',
    'Budget allocation and planning',
    'Performance optimization consulting',
    'Team training and workshops'
  ];

  const areas = [
    {
      title: 'Digital Strategy',
      description: 'Full-funnel digital marketing strategy aligned to revenue, not vanity metrics.'
    },
    {
      title: 'Channel-Specific Consulting',
      description:
        'Targeted guidance for SEO, paid advertising, social media, email, and content marketing.'
    },
    {
      title: 'Technology & Tools',
      description:
        'Support in assessing, selecting, and integrating tools like CRMs, marketing automation, and analytics.'
    },
    {
      title: 'Go-to-Market & Launch Support',
      description:
        'Strategic planning for new product launches, website relaunches, and market entry initiatives.'
    }
  ];

  const benefits = [
    {
      icon: <Target className="text-blue-600" size={32} />,
      title: 'Strategic Clarity',
      description:
        'Get a clear, prioritized roadmap so your team knows what to do now, what to do next, and what to stop doing.'
    },
    {
      icon: <Users className="text-green-600" size={32} />,
      title: 'An Extension of Your Team',
      description:
        'Work with a partner who can think like a Head of Marketing but collaborate with your sales, ops, and leadership teams.'
    },
    {
      icon: <TrendingUp className="text-purple-600" size={32} />,
      title: 'Sustainable Growth',
      description:
        'Implement strategies that don’t just spike results—they build systems and habits your team can maintain.'
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-yellow-50 to-orange-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <div className="flex justify-center mb-6">
                <Lightbulb className="text-yellow-600" size={64} />
              </div>
              <h1 className="text-4xl sm:text-6xl font-bold text-slate-900 mb-6">
                Strategy &amp; Consulting
              </h1>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-4">
                Sometimes you don&apos;t need another full-time hire—you need a thinking partner.
                Someone who can see the whole picture, challenge your assumptions, and turn ideas
                into a clear plan.
              </p>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto mb-8">
                Nadeza acts as an extension of your marketing team—whether you need help defining
                strategy, stress-testing plans, choosing tools, or shaping ad hoc campaigns that
                actually move the needle.
              </p>
              <a
                href="/contact"
                className="bg-yellow-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-yellow-700 transition-colors duration-200 inline-flex items-center mx-auto"
              >
                Book a Call
                <ArrowRight className="ml-2" size={20} />
              </a>
            </motion.div>
          </div>
        </section>

        {/* How We Help Section */}
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
                <h2 className="text-3xl font-bold text-slate-900 mb-4">More Than Advice</h2>
                <p className="text-lg text-slate-600 mb-4">
                  Strategy consulting with Nadeza is hands-on. We don&apos;t just send a slide deck and
                  disappear—we help you prioritize, implement, and iterate.
                </p>
                <p className="text-lg text-slate-600 mb-4">
                  You can bring us in to support a specific area (SEO, paid media, social, email,
                  analytics) or as a flexible advisor across your entire marketing ecosystem. Think of
                  us as your practical, no-drama marketing brain trust.
                </p>
                <ul className="space-y-2 text-slate-700">
                  <li>• Need an ad hoc campaign for a launch? We can plan and help execute it.</li>
                  <li>
                    • Need to decide which tools (CRM, email, automation, analytics) make sense for your
                    stage and budget? We can help evaluate and implement.
                  </li>
                  <li>
                    • Thinking about a new website or landing page? We can help you prototype, structure,
                    and position it for results.
                  </li>
                </ul>
              </div>

              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8 shadow-sm">
                <h3 className="text-2xl font-semibold text-slate-900 mb-4">
                  We Only Win When You Do
                </h3>
                <p className="text-slate-700 mb-4">
                  We care about more than clicks and impressions. When your strategy works:
                </p>
                <ul className="space-y-2 text-slate-700 mb-4">
                  <li>• Your business grows and becomes more stable.</li>
                  <li>• You can keep your best people and even hire more.</li>
                  <li>• Your team feels less overwhelmed and more confident.</li>
                </ul>
                <p className="text-slate-700">
                  Our mindset is simple: we help you succeed, so you can keep helping your customers
                  and your team. Your growth is not just a metric—it&apos;s a ripple effect.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Consulting Services */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Consulting Services</h2>
              <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                Engage us for one-off strategy sessions, project-based consulting, or ongoing
                advisory support—depending on what your team needs right now.
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
                  <CheckCircle className="text-yellow-600 flex-shrink-0" size={20} />
                  <span className="text-slate-700">{service}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Consulting Areas */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Consulting Areas</h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {areas.map((area, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="bg-slate-50 p-6 rounded-xl shadow-sm"
                >
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">{area.title}</h3>
                  <p className="text-slate-600">{area.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Case Study */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white border border-slate-200 rounded-2xl p-8 md:p-10 shadow-sm"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                Case Study: From Ad Hoc Efforts to a Focused Growth Engine
              </h2>
              <p className="text-sm uppercase tracking-wide text-slate-500 mb-4">
                B2B SaaS Company · 35 Employees · APAC &amp; US
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-6">
                <div>
                  <h3 className="text-sm font-semibold text-slate-500 mb-1">Before Nadeza</h3>
                  <ul className="text-slate-700 text-sm space-y-1">
                    <li>• No clear marketing plan—only reactive campaigns</li>
                    <li>• SEO, paid, and social working in silos</li>
                    <li>• Sales complaining about &quot;lead quality&quot;</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-slate-500 mb-1">What We Did</h3>
                  <ul className="text-slate-700 text-sm space-y-1">
                    <li>• Ran strategy workshops with leadership &amp; sales</li>
                    <li>• Mapped customer journey &amp; key moments of value</li>
                    <li>• Repositioned messaging &amp; restructured campaigns</li>
                    <li>• Audited tech stack and simplified reporting</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-slate-500 mb-1">After 6 Months</h3>
                  <ul className="text-slate-700 text-sm space-y-1">
                    <li>• +65% increase in qualified demo requests</li>
                    <li>• 30% reduction in cost per opportunity</li>
                    <li>• Monthly &quot;strategy &amp; ops&quot; rhythm between sales and marketing</li>
                    <li>• Clear roadmap for next 12 months of growth</li>
                  </ul>
                </div>
              </div>

              <p className="text-slate-700">
                Our role wasn&apos;t to replace their team—it was to bring structure, clarity, and a
                repeatable way of planning and measuring growth. Their internal team still owns
                execution; we help them steer the ship.
              </p>
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
              <h2 className="text-3xl font-bold mb-6">Need a Strategic Partner, Not Just a Vendor?</h2>
              <p className="text-xl text-slate-300 mb-8">
                Whether you&apos;re planning a new website, scaling paid media, improving SEO, or simply
                need clarity on &quot;what to do next&quot;—we can help you think it through and make a plan.
              </p>
              <a
                href="/contact"
                className="bg-yellow-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-yellow-700 transition-colors duration-200 inline-flex items-center justify-center"
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

export default StrategyConsulting;
