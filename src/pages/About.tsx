import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import {
  Award,
  Users,
  TrendingUp,
  Clock,
  Target,
  Heart,
  Zap,
  Aperture,
  BarChart,
} from 'lucide-react';

const About: React.FC = () => {
  const stats = [
    { icon: <Award size={32} />, number: '15+', label: 'Years Experience' },
    { icon: <Users size={32} />, number: '200+', label: 'Clients Served' },
    { icon: <TrendingUp size={32} />, number: '300%', label: 'Avg ROI Increase' },
    { icon: <Clock size={32} />, number: 'Across Time Zones', label: 'Global Support Coverage' },
  ];

  const values = [
    {
      icon: <Target className="text-blue-600" size={32} />,
      title: 'Results-Driven',
      description:
        'Every strategy is designed with measurable outcomes in mind. We focus on revenue, pipeline, and qualified demand, not vanity metrics.',
    },
    {
      icon: <Heart className="text-red-600" size={32} />,
      title: 'Client-Centric Partnership',
      description:
        'Your success is our success. We build long-term partnerships based on trust, transparency, and clear expectations about what marketing can realistically deliver.',
    },
    {
      icon: <Zap className="text-yellow-600" size={32} />,
      title: 'Innovation with Purpose',
      description:
        'We stay ahead of digital trends, master AI tools, and leverage modern MarTech—always grounded in strategy, not shiny-object tactics.',
    },
  ];

  const growthProcess = [
    {
      step: 1,
      icon: <Aperture size={24} className="text-white" />,
      title: 'Discovery & Alignment',
      description:
        'We audit your current performance, search visibility, data, and tech stack to understand where you are today and what growth actually requires.',
    },
    {
      step: 2,
      icon: <Target size={24} className="text-white" />,
      title: 'Strategy & Blueprint',
      description:
        'We define a focused, intent-led strategy across SEO, paid, content, and your website. You get a clear roadmap, not a random list of tactics.',
    },
    {
      step: 3,
      icon: <Zap size={24} className="text-white" />,
      title: 'Execution & Launch',
      description:
        'We implement campaigns, pages, tracking, and automations, making sure your funnel is working end to end—from click to lead to opportunity.',
    },
    {
      step: 4,
      icon: <BarChart size={24} className="text-white" />,
      title: 'Measure, Refine, Scale',
      description:
        'We monitor performance, improve based on real data, and scale what works while cutting what doesn’t. Reporting is simple, honest, and tied to business goals.',
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6">
                About Nadeza Marketing
              </h1>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Nadeza is a digital marketing and web development partner for businesses that
                need more than ad hoc campaigns. We connect intent-focused SEO, performance
                marketing, conversion-focused websites, and automation so your digital
                presence actually generates pipeline and revenue.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold text-slate-900 mb-6">
                  Why We Started: A Better Option Than Building a Full In-House Team
                </h2>
                <div className="space-y-4 text-slate-600">
                  <p>
                    Nadeza was founded after seeing the same pattern repeat across companies:
                    they know they need SEO, paid media, content, email, and analytics—but
                    building a full in-house team for all of that is expensive, slow, and often
                    unrealistic. Hiring one generalist rarely solves the problem, and agencies
                    often over-promise and under-deliver.
                  </p>

                  <p>
                    Our model gives you access to senior-level strategy and hands-on execution
                    without needing to maintain a large internal team. We plug into your
                    existing stack, align with your goals, and focus on work that actually
                    moves numbers in your CRM and analytics—not just impressions on a slide.
                  </p>

                  <p className="font-semibold text-slate-900 pt-2">
                    Intent-Focused SEO and Full-Funnel Thinking
                  </p>
                  <p>
                    We approach SEO and content through the lens of search intent and buyer
                    journeys. That means understanding what your audience is really trying to
                    do—research a problem, compare solutions, or make a decision—and building
                    pages, articles, and campaigns around those moments.
                  </p>
                  <p>
                    Instead of chasing every keyword, we prioritize the queries and pages that
                    support your core offers, sales conversations, and revenue targets. SEO is
                    not just about rankings; it is a channel to feed qualified demand into your
                    funnel and reduce your dependency on paid alone.
                  </p>

                  <p className="font-semibold text-slate-900 pt-2">
                    Using AI to Accelerate, Not Replace, Strategy
                  </p>
                  <p>
                    There are thousands of AI tools, platforms, and MarTech products on the
                    market. AI is excellent at generating an initial overview, summarizing
                    research, and accelerating content and analysis. We use it to move faster,
                    explore more options, and uncover patterns in your data.
                  </p>
                  <p>
                    But AI is not your strategist. At Nadeza, humans still decide what to
                    prioritize, how to position your brand, which channels to invest in, and
                    how to align marketing with your sales and product reality. AI helps us
                    move quickly; experience ensures we move in the right direction.
                  </p>

                  <p>
                    Our mission is to act as your flexible digital growth team—giving you the
                    right people, processes, and tools at the right time, so you can execute
                    like a mature marketing organization without the overhead of building one
                    from scratch.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Team collaboration on strategy"
                  className="rounded-2xl shadow-lg w-full h-auto"
                  loading="lazy"
                />
              </motion.div>
            </div>
          </div>
        </section>

        <hr className="border-t border-slate-200" />

        {/* Process Section */}
        <section className="py-20 bg-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-slate-900 mb-6">
                The Nadeza Growth System
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                A clear, four-step framework that turns insight into execution—and execution
                into measurable growth.
              </p>
            </motion.div>

            <div className="relative">
              <div className="absolute top-1/2 left-0 right-0 h-1 bg-blue-200 hidden lg:block -z-0" />

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {growthProcess.map((item, index) => (
                  <motion.div
                    key={item.step}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    viewport={{ once: true }}
                    className="relative p-6 bg-white rounded-xl shadow-xl border-t-4 border-blue-600 space-y-3"
                  >
                    <div className="absolute top-0 transform -translate-y-1/2 left-1/2 -translate-x-1/2 p-3 rounded-full bg-blue-600 shadow-lg border-4 border-slate-100">
                      {item.icon}
                    </div>
                    <p className="text-sm font-bold text-blue-600 pt-4">STEP {item.step}</p>
                    <h3 className="text-xl font-semibold text-slate-900">{item.title}</h3>
                    <p className="text-slate-600 text-sm">{item.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <hr className="border-t border-slate-200" />

        {/* Stats Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                Our Track Record
              </h2>
              <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                A snapshot of the experience and outcomes we bring to every engagement.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center p-6 bg-slate-50 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="text-blue-600 mb-4 flex justify-center">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-slate-900 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-slate-600 font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <hr className="border-t border-slate-200" />

        {/* Values Section */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                What It’s Like to Work With Us
              </h2>
              <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                Our values shape every strategy, conversation, and deliverable we produce.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 text-center"
                >
                  <div className="mb-6 flex justify-center">{value.icon}</div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-4">
                    {value.title}
                  </h3>
                  <p className="text-slate-600">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <hr className="border-t border-slate-200" />

        {/* CTA Section */}
        <section className="py-20 bg-slate-900 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6">
                Ready to Talk About Your Growth Goals?
              </h2>
              <p className="text-xl text-slate-300 mb-8">
                If you are tired of scattered tactics and want a clear, intent-led strategy
                that connects SEO, paid, content, and your website, we would love to hear
                from you.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/contact" className="w-full sm:w-auto">
                  <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 w-full">
                    Schedule a Strategy Call
                  </button>
                </a>

                <a href="/services" className="w-full sm:w-auto">
                  <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-slate-900 transition-all duration-200 w-full">
                    Explore Our Services
                  </button>
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
