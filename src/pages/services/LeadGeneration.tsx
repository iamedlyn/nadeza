import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { motion } from 'framer-motion';
import { Users, CheckCircle, ArrowRight, Target, Zap, TrendingUp } from 'lucide-react';

const LeadGeneration: React.FC = () => {
  const services = [
    'Lead magnet creation and optimization',
    'Landing page design and development',
    'Lead capture form optimization',
    'Email nurture sequence setup',
    'Lead scoring and qualification',
    'CRM integration and automation',
    'A/B testing and conversion optimization',
    'Lead analytics and reporting'
  ];

  const strategies = [
    {
      title: 'Content-Based Lead Generation',
      description:
        'Attract leads with valuable resources such as ebooks, guides, checklists, and webinars that solve real problems for your audience.'
    },
    {
      title: 'Paid Lead Generation',
      description:
        'Drive targeted traffic through search, social, and display campaigns designed to capture high-intent leads.'
    },
    {
      title: 'Social Media Lead Generation',
      description:
        'Leverage organic and paid social to promote offers, forms, and lead magnets to the right audience segments.'
    },
    {
      title: 'Email Lead Generation',
      description:
        'Grow your email list and move contacts from first touch to warm prospects using automated sequences.'
    }
  ];

  const benefits = [
    {
      icon: <Target className="text-blue-600" size={32} />,
      title: 'Qualified Prospects',
      description:
        'Generate leads that match your ideal customer profile and are genuinely interested in your solutions.'
    },
    {
      icon: <Zap className="text-yellow-600" size={32} />,
      title: 'Automated Systems',
      description:
        'Use always-on funnels, workflows, and scoring to capture and nurture leads 24/7—not just when your team is online.'
    },
    {
      icon: <TrendingUp className="text-green-600" size={32} />,
      title: 'Scalable Growth',
      description:
        'Build repeatable lead generation engines that scale with your pipeline and revenue goals.'
    }
  ];

  const glossary = [
    {
      term: 'ICP',
      label: 'Ideal Customer Profile',
      description: 'A description of the type of company or person that gets the most value from your product or service.'
    },
    {
      term: 'MQL',
      label: 'Marketing Qualified Lead',
      description: 'A lead that has shown enough interest or engagement for marketing to consider them ready for nurture.'
    },
    {
      term: 'SQL',
      label: 'Sales Qualified Lead',
      description: 'A lead that has been vetted and accepted by sales as a real opportunity worth pursuing.'
    },
    {
      term: 'SAL',
      label: 'Sales Accepted Lead',
      description: 'The stage where sales agrees to take ownership of an MQL and move it into their pipeline.'
    },
    {
      term: 'CAC',
      label: 'Customer Acquisition Cost',
      description: 'How much it costs, on average, to acquire a new customer across channels and campaigns.'
    },
    {
      term: 'LTV',
      label: 'Customer Lifetime Value',
      description: 'The projected revenue a customer will generate over the course of their relationship with your business.'
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-blue-50 to-cyan-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <div className="flex justify-center mb-6">
                <Users className="text-blue-600" size={64} />
              </div>
              <h1 className="text-4xl sm:text-6xl font-bold text-slate-900 mb-6">
                Lead Generation Services
              </h1>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-4">
                Systematic lead generation that fills your sales pipeline with qualified prospects.
                We design and optimize journeys that attract, capture, and warm up potential customers.
              </p>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto mb-8">
                The goal isn&apos;t just more leads—it&apos;s better leads that your sales team is excited
                to follow up with.
              </p>
              <a
                href="/contact"
                className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 inline-flex items-center mx-auto"
              >
                Book a Call
                <ArrowRight className="ml-2" size={20} />
              </a>
            </motion.div>
          </div>
        </section>

        {/* Why Lead Generation Matters */}
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
                  Lead Generation: The Bridge Between Marketing &amp; Sales
                </h2>
                <p className="text-lg text-slate-600 mb-4">
                  Lead generation is the discipline of turning anonymous interest into identifiable,
                  contactable opportunities. It&apos;s where marketing stops being &quot;awareness only&quot;
                  and starts directly feeding your sales pipeline.
                </p>
                <p className="text-lg text-slate-600 mb-4">
                  When lead generation is done well, marketing can consistently deliver Marketing
                  Qualified Leads (MQLs) that are ready to be nurtured into Sales Qualified Leads (SQLs).
                  That&apos;s where alignment happens: sales spends more time on real opportunities and less
                  time sifting through unqualified contacts.
                </p>
                <p className="text-lg text-slate-600">
                  We help you define what a good lead actually looks like, build the journeys that
                  produce those leads, and create a clear handoff between marketing and sales so
                  everyone can win together.
                </p>
              </div>

              <div className="bg-blue-600/5 border border-blue-100 rounded-2xl p-8 shadow-sm">
                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                  Marketing &amp; Sales Don&apos;t Have to Be at War
                </h3>
                <p className="text-slate-700 mb-3">
                  In many organizations, marketing is blamed for &quot;bad leads&quot; and sales is blamed for
                  &quot;not following up.&quot; The reality? The system is usually the problem—not the people.
                </p>
                <p className="text-slate-700 mb-3">
                  The strongest companies build tight feedback loops between sales and marketing:
                </p>
                <ul className="space-y-2 text-slate-700 mb-4">
                  <li>• Shared definitions of MQL and SQL</li>
                  <li>• Agreement on what &quot;good fit&quot; looks like</li>
                  <li>• Visibility into which campaigns and channels produce real pipeline</li>
                  <li>• Honest, regular feedback from sales back into marketing</li>
                </ul>
                <p className="text-slate-700">
                  Our lead generation work is designed with this alignment in mind—from forms and scoring
                  to nurture flows and reporting.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Lead Gen vs Demand Gen */}
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
                  What Lead Generation Is (and Isn&apos;t)
                </h2>
                <p className="text-lg text-slate-600 mb-4">
                  Lead generation is about capturing identifiable interest—names, emails, phone numbers,
                  and key details that indicate a prospect might be a fit for your solution.
                </p>
                <p className="text-lg text-slate-600 mb-4">
                  Demand generation is about creating awareness, education, and desire in the market.
                  Both are important, but they&apos;re not the same:
                </p>
                <ul className="space-y-2 text-slate-700 mb-4">
                  <li>
                    <span className="font-semibold">Demand gen</span> makes people aware of the problem and your brand.
                  </li>
                  <li>
                    <span className="font-semibold">Lead gen</span> gives your sales team someone specific to talk to.
                  </li>
                </ul>
                <p className="text-lg text-slate-600">
                  We help you design lead generation that doesn&apos;t feel like a trap or a gimmick, but as
                  a natural next step for prospects who are genuinely interested in going deeper.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                  Tactical and Strategic Lead Generation
                </h3>
                <p className="text-slate-700 mb-3">
                  Great lead generation is both tactical and strategic. Tactically, it&apos;s your forms,
                  landing pages, ads, and nurture flows. Strategically, it&apos;s understanding:
                </p>
                <ul className="space-y-2 text-slate-700 mb-3">
                  <li>• How your best customers actually find you</li>
                  <li>• Which competitors they compare you against</li>
                  <li>• What information they need at each stage of the journey</li>
                  <li>• Which channels produce the highest-quality opportunities</li>
                </ul>
                <p className="text-slate-700">
                  We map these behaviors, then build lead generation programs around real buying
                  journeys—not guesses.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Glossary Strip */}
        <section className="py-16 bg-slate-900">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="mb-10 text-center"
            >
              <h2 className="text-2xl font-bold text-white mb-3">Key Pipeline Terms at a Glance</h2>
              <p className="text-slate-300 max-w-2xl mx-auto text-sm">
                Sales and marketing alignment starts with speaking the same language. Here are the core metrics
                and definitions we use when designing your lead generation programs.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {glossary.map((item, index) => (
                <motion.div
                  key={item.term}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="bg-slate-800/70 border border-slate-700 rounded-xl p-5"
                >
                  <div className="flex items-baseline justify-between mb-2">
                    <span className="text-sm font-semibold text-slate-300 tracking-wide">
                      {item.term}
                    </span>
                    <span className="text-[11px] uppercase text-slate-500">
                      {item.label}
                    </span>
                  </div>
                  <p className="text-slate-200 text-sm leading-snug">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
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
              <h2 className="text-3xl font-bold text-slate-900 mb-6">What&apos;s Included</h2>
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
                  <CheckCircle className="text-blue-600 flex-shrink-0" size={20} />
                  <span className="text-slate-700">{service}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Strategies */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Lead Generation Strategies</h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {strategies.map((strategy, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="bg-white p-6 rounded-xl shadow-lg"
                >
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">{strategy.title}</h3>
                  <p className="text-slate-600">{strategy.description}</p>
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
              <h2 className="text-3xl font-bold mb-6">Ready to Build a Healthier Pipeline?</h2>
              <p className="text-xl text-slate-300 mb-8">
                Let&apos;s design lead generation systems that your sales team trusts—and that consistently
                turn interest into real opportunities.
              </p>
              <a
                href="/contact"
                className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 inline-flex items-center justify-center"
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

export default LeadGeneration;
