import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { motion } from 'framer-motion';
import {
  Search,
  CheckCircle,
  ArrowRight,
  TrendingUp,
  Target,
  BarChart,
  Brain,
  Globe2
} from 'lucide-react';

const SEO: React.FC = () => {
  const services = [
    'Comprehensive SEO audits and analysis',
    'Keyword research and competitive analysis',
    'On-page optimization and content strategy',
    'Technical SEO and site speed optimization',
    'Local SEO and Google Business Profile optimization',
    'Link building and authority development',
    'Content creation and optimization',
    'Monthly reporting and performance tracking'
  ];

  const process = [
    {
      title: 'SEO Audit',
      description: 'Complete analysis of your current SEO performance, technical issues, and growth opportunities.'
    },
    {
      title: 'Strategy Development',
      description:
        'A custom SEO roadmap aligned with your business goals, audience intent, and competitive landscape.'
    },
    {
      title: 'Implementation',
      description:
        'On-page, technical, and content improvements rolled out in prioritized phases for maximum impact.'
    },
    {
      title: 'Monitoring & Optimization',
      description:
        'Continuous tracking, testing, and refinement to keep improving rankings, traffic, and conversions.'
    }
  ];

  const benefits = [
    {
      icon: <TrendingUp className="text-green-600" size={32} />,
      title: 'Increased Organic Traffic',
      description:
        'Bring in more of the right visitors by appearing where your ideal customers are already searching.'
    },
    {
      icon: <Target className="text-blue-600" size={32} />,
      title: 'Better Lead Quality',
      description:
        'Attract high-intent prospects who are actively looking for your products, services, or solutions.'
    },
    {
      icon: <BarChart className="text-purple-600" size={32} />,
      title: 'Long-Term ROI',
      description:
        'SEO compounds over time. The work you do today continues to deliver results months and years later.'
    }
  ];

  const tools = [
    'Google Analytics 4',
    'Google Search Console',
    'SEMrush',
    'Ahrefs',
    'Screaming Frog',
    'Moz',
    'Surfer SEO',
    'Schema / Structured Data'
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-green-50 via-emerald-50 to-blue-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <div className="flex justify-center mb-6">
                <Search className="text-green-600" size={64} />
              </div>
              <h1 className="text-4xl sm:text-6xl font-bold text-slate-900 mb-6">
                Search Engine Optimization (SEO)
              </h1>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-4">
                SEO is one of the most critical parts of digital marketing. You can have the most beautiful website in
                the world — but if no one can find it, what is it really doing for your business?
              </p>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto mb-8">
                We help you get discovered by the right people, on the right channels, at the exact moment they are
                searching for answers, solutions, or providers like you.
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

        {/* Why SEO Still Matters */}
        <section className="py-20 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-slate-900 mb-6 text-center">
                Why SEO Is Still Non-Negotiable
              </h2>
              <p className="text-lg text-slate-600 mb-4">
                SEO is not just about rankings. It is about being present wherever your ideal customer starts their
                research, compares options, or looks for validation before making a decision. When done well, SEO
                becomes one of your most efficient acquisition channels.
              </p>
              <p className="text-lg text-slate-600 mb-4">
                A strong SEO foundation makes every other channel more effective. Your paid campaigns convert better,
                your content gets more mileage, and your brand shows up consistently for high-intent searches related to
                your offers.
              </p>
              <p className="text-lg text-slate-600">
                Our approach focuses on visibility, relevance, and intent. We are not chasing vanity keywords; we are
                building a search presence that actually supports pipeline, bookings, demos, and revenue.
              </p>
            </motion.div>
          </div>
        </section>

        {/* SEO in an AI-First Search World */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start"
            >
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <Brain className="text-green-600" size={32} />
                  <h2 className="text-3xl font-bold text-slate-900">
                    SEO in an AI-First Search Environment
                  </h2>
                </div>
                <p className="text-lg text-slate-600 mb-4">
                  Younger generations do not rely on Google alone. They search across a mix of AI assistants and
                  discovery platforms — ChatGPT, Perplexity, Gemini, Claude, DeepSeek, TikTok, YouTube, Reddit, and
                  niche forums — to research products, services, and brands.
                </p>
                <p className="text-lg text-slate-600 mb-4">
                  At the same time, Google is rolling out AI Overviews and more “zero-click” experiences. The result?
                  Traditional keyword-only SEO is not enough. You need a strategy that understands how your brand shows
                  up in this new hybrid of search, chat, and recommendation engines.
                </p>
                <p className="text-lg text-slate-600">
                  We have been deeply immersed in AI tools and the evolving search landscape. Our SEO work considers
                  not just where you rank, but how your expertise and content feed into AI answers, summaries, and
                  recommendations across platforms.
                </p>
              </div>

              <div className="bg-white rounded-2xl shadow-sm p-8 border border-slate-100">
                <div className="flex items-center gap-3 mb-4">
                  <Globe2 className="text-blue-600" size={28} />
                  <h3 className="text-xl font-semibold text-slate-900">
                    How We Think About AI Overviews & Answer Engines
                  </h3>
                </div>
                <ul className="space-y-3 text-slate-600">
                  <li className="flex items-start gap-2">
                    <span className="mt-2 h-2 w-2 rounded-full bg-green-600" />
                    <span>
                      We create content that is genuinely helpful, structured, and trustworthy — the kind that AI
                      systems are more likely to surface in summaries and answers.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-2 h-2 w-2 rounded-full bg-green-600" />
                    <span>
                      We use schema and structured data where appropriate to help search engines and AI understand your
                      pages, services, and expertise.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-2 h-2 w-2 rounded-full bg-green-600" />
                    <span>
                      We focus on brand, authority, and topical depth — so when AI systems summarize “the best options,”
                      your brand has a chance to be part of that conversation.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-2 h-2 w-2 rounded-full bg-green-600" />
                    <span>
                      We help you adapt reporting and expectations to a world where clicks, impressions, and visibility
                      look different from the “10 blue links” era.
                    </span>
                  </li>
                </ul>
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
              <h2 className="text-3xl font-bold text-slate-900 mb-6">What&apos;s Included</h2>
              <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                A full-stack SEO program that combines technical excellence, content strategy, and AI-aware thinking.
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
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Our SEO Process</h2>
              <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                A clear, structured approach so you always understand what we&apos;re doing and why it matters.
              </p>
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
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl font-bold text-slate-900 mb-6">What You Gain With Nadeza</h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                We do more than “do SEO.” We partner with you on visibility, demand, and long-term discoverability in a
                changing search landscape.
              </p>
            </motion.div>

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
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Tools We Use</h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-8">
                We combine classic SEO platforms with modern analytics and AI-assisted research to move fast and stay
                precise.
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

        {/* CTA */}
        <section className="py-20 bg-slate-900 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6">Ready to Rethink SEO for the AI Era?</h2>
              <p className="text-xl text-slate-300 mb-8">
                Gone are the days of a simple “Google kingdom.” Let&apos;s build a search and discovery strategy that
                works across Google, AI assistants, and the channels your customers actually use.
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

export default SEO;
