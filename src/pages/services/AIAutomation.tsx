import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { motion } from 'framer-motion';
import { Bot, CheckCircle, ArrowRight, Zap, Clock, TrendingUp } from 'lucide-react';

const AIAutomation: React.FC = () => {
  const services = [
    'AI chatbot development and integration',
    'Marketing automation workflows',
    'Lead qualification and scoring',
    'Personalized content generation',
    'Automated email sequences',
    'Social media automation',
    'Customer service automation',
    'Performance monitoring and optimization'
  ];

  const solutions = [
    {
      title: 'AI Chatbots',
      description:
        'Conversational AI that can answer FAQs, qualify leads, book calls, and route complex queries to your team. We train bots on your own website, knowledge base, and brand tone so every interaction feels on-brand and helpful—not robotic.'
    },
    {
      title: 'Marketing Automation',
      description:
        'Smart, intent-based workflows that nurture leads over time: trigger emails after key actions, score leads based on behaviour, sync with your CRM, and notify sales at the right moment. The goal: fewer manual follow-ups, more consistent pipeline.'
    },
    {
      title: 'Content Automation',
      description:
        'AI-assisted copy and content repurposing for emails, blogs, ad variations, and social posts. We help you set guardrails so your brand voice stays consistent while still gaining the speed and scale benefits of automation.'
    },
    {
      title: 'Process Optimization & Continuous Improvement',
      description:
        'We map your existing processes, identify repetitive work and bottlenecks, then automate what makes sense. We don’t aim for “perfect on day one” — we launch a strong version, measure performance, and iterate based on data.'
    }
  ];

  const benefits = [
    {
      icon: <Clock className="text-blue-600" size={32} />,
      title: '24/7 Availability',
      description: 'AI agents work around the clock to engage prospects and customers, even when your team is offline.'
    },
    {
      icon: <Zap className="text-yellow-600" size={32} />,
      title: 'Increased Efficiency',
      description: 'Automate repetitive tasks so your team can focus on strategy, creativity, and relationship-building.'
    },
    {
      icon: <TrendingUp className="text-green-600" size={32} />,
      title: 'Scalable Growth',
      description: 'Handle more leads, tickets, and campaigns without needing to hire at the same pace as your growth.'
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-violet-50 to-purple-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <div className="flex justify-center mb-6">
                <Bot className="text-violet-600" size={64} />
              </div>
              <h1 className="text-4xl sm:text-6xl font-bold text-slate-900 mb-6">
                AI Agents & Automation
              </h1>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-4">
                Intelligent automation that works 24/7. We design and implement AI agents and automation systems
                that handle customer interactions, qualify leads, and streamline your internal workflows.
              </p>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto mb-8">
                Our approach combines marketing automation, AI chatbots, content automation, and continuous process
                optimization — so you get real efficiency and growth, not just another tool sitting unused in your stack.
              </p>
              <a
                href="/contact"
                className="bg-violet-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-violet-700 transition-colors duration-200 inline-flex items-center"
              >
                Book a Call
                <ArrowRight className="ml-2" size={20} />
              </a>
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
              <h2 className="text-3xl font-bold text-slate-900 mb-6">AI & Automation Services</h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                We don’t just plug in tools — we design systems around your funnel, team capacity, and growth targets.
                From first touchpoint to closed deal (and beyond), automation supports your process end-to-end.
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
                  <CheckCircle className="text-violet-600 flex-shrink-0" size={20} />
                  <span className="text-slate-700">{service}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Solutions */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl font-bold text-slate-900 mb-6">AI Solutions in Action</h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                We focus on practical, outcome-driven use cases: faster response times, warmer leads, clearer reporting,
                and a team that’s freed up from repetitive tasks.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {solutions.map((solution, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="bg-white p-6 rounded-xl shadow-lg"
                >
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">{solution.title}</h3>
                  <p className="text-slate-600">{solution.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* How We Work – Continuous Improvement */}
        <section className="py-20 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-10"
            >
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Approach: Launch, Learn, Improve</h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                Instead of chasing a “perfect” system that never goes live, we launch a well-designed version,
                then refine it based on real-world performance.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-slate-50 p-6 rounded-xl">
                <h3 className="text-lg font-semibold text-slate-900 mb-2">1. Map & Prioritize</h3>
                <p className="text-slate-600 text-sm">
                  We review your current funnel, tools, and processes to find the highest-impact automation opportunities.
                </p>
              </div>
              <div className="bg-slate-50 p-6 rounded-xl">
                <h3 className="text-lg font-semibold text-slate-900 mb-2">2. Launch a Strong First Version</h3>
                <p className="text-slate-600 text-sm">
                  We implement a focused set of automations — enough to move the needle without overwhelming your team.
                </p>
              </div>
              <div className="bg-slate-50 p-6 rounded-xl">
                <h3 className="text-lg font-semibold text-slate-900 mb-2">3. Iterate & Optimize</h3>
                <p className="text-slate-600 text-sm">
                  We monitor performance, gather feedback, and improve flows continuously. Good beats “perfect but never shipped.”
                </p>
              </div>
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
              <h2 className="text-3xl font-bold mb-6">Ready to Automate Your Success?</h2>
              <p className="text-xl text-slate-300 mb-8">
                If you’re curious about what AI and automation could do for your business, we can walk through
                practical use cases based on your current tools and funnel.
              </p>
              <a
                href="/contact"
                className="bg-violet-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-violet-700 transition-colors duration-200 inline-block"
              >
                Book a Call
              </a>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AIAutomation;
