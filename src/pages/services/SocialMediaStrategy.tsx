import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { motion } from 'framer-motion';
import { Share2, CheckCircle, ArrowRight, Users, MessageSquare, BarChart3, Sparkles } from 'lucide-react';

const SocialMediaStrategy: React.FC = () => {
  const services = [
    'Social media audit and channel review',
    'Content strategy, pillars, and messaging',
    'Monthly content calendars and campaign planning',
    'Short-form video concepts (Reels, TikTok, Shorts)',
    'Post copywriting and visual direction',
    'Community management and engagement guidelines',
    'Paid + organic social alignment',
    'Reporting, insights, and optimization'
  ];

  const platforms = [
    'Facebook', 'Instagram', 'LinkedIn', 'TikTok', 'YouTube', 'Pinterest', 'X (Twitter)', 'Threads'
  ];

  const benefits = [
    {
      icon: <Users className="text-blue-600" size={32} />,
      title: 'Build Real Community',
      description: 'Move beyond vanity metrics. Build an audience that actually engages, clicks, and converts.'
    },
    {
      icon: <MessageSquare className="text-purple-600" size={32} />,
      title: 'Consistent Brand Voice',
      description: 'We help you sound like you—across every platform, format, and funnel stage.'
    },
    {
      icon: <BarChart3 className="text-green-600" size={32} />,
      title: 'Content That Drives Action',
      description: 'Every post has a job—awareness, engagement, lead gen, or sales. We measure what matters.'
    }
  ];

  const aiPoints = [
    'We use AI tools to brainstorm ideas, test hooks, and speed up production—never to replace your brand voice.',
    'Every caption, script, and asset is human-reviewed for tone, accuracy, and context.',
    'We look at performance data to refine what works—not just post and hope.'
  ];

  return (
    <div className="min-h-screen">
      <Header />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 sm:py-20 bg-gradient-to-br from-indigo-50 via-sky-50 to-purple-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-5xl mx-auto"
            >
              <div className="flex justify-center mb-6">
                <Share2 className="text-indigo-600" size={64} />
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-5">
                Social Media Strategy & Management
              </h1>
              <p className="text-lg sm:text-xl text-slate-600 mb-6">
                Social media isn’t just about posting more—it’s about saying the right thing, in the right place,
                to the right people. We help you turn your channels into engines for awareness, loyalty, and leads.
              </p>
              <p className="text-base sm:text-lg text-slate-600 mb-8">
                Whether you’re starting from scratch, stuck in “random acts of content,” or scaling what already works,
                Nadeza can act as your social media team—or the strategic partner behind it.
              </p>

              <a
                href="/contact"
                className="inline-flex items-center justify-center bg-indigo-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-indigo-700 transition-colors duration-200"
              >
                Book a Call
                <ArrowRight className="ml-2" size={20} />
              </a>
            </motion.div>
          </div>
        </section>

        {/* Services */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-slate-900 mb-4">What We Help With</h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                Strategy first, content second. We make sure every post, story, and campaign ladders back to your
                brand and business goals.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-3"
                >
                  <CheckCircle className="text-indigo-600 flex-shrink-0 mt-1" size={20} />
                  <span className="text-slate-700">{service}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Platforms & Approach */}
        <section className="py-16 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Platforms */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Platforms We Work With</h2>
              <p className="text-slate-600 mb-6">
                You don’t need to be everywhere—you need to be where it matters. We help you choose the right channels,
                then tailor content for each one.
              </p>
              <div className="flex flex-wrap gap-2">
                {platforms.map((platform, index) => (
                  <span
                    key={index}
                    className="bg-white text-slate-700 px-3 py-1 rounded-full text-sm font-medium shadow-sm"
                  >
                    {platform}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Benefits */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 gap-6"
            >
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-sm"
                >
                  <div className="mb-3 flex items-center space-x-3">
                    {benefit.icon}
                    <h3 className="text-lg font-semibold text-slate-900">{benefit.title}</h3>
                  </div>
                  <p className="text-slate-600">{benefit.description}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Social Media in an AI-First World */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto text-center mb-10"
            >
              <div className="flex justify-center mb-4">
                <Sparkles className="text-indigo-500" size={32} />
              </div>
              <h2 className="text-3xl font-bold text-slate-900 mb-4">
                Social Media in an AI-First World
              </h2>
              <p className="text-lg text-slate-600">
                Everyone can generate content now. The difference is in the strategy, quality, and relevance.
                We use AI to assist—not to autopilot your brand.
              </p>
            </motion.div>

            <div className="max-w-4xl mx-auto space-y-4 text-slate-700">
              {aiPoints.map((point, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="text-indigo-600 flex-shrink-0 mt-1" size={18} />
                  <p>{point}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Simple Case Study */}
        <section className="py-16 bg-slate-50">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl shadow-lg"
            >
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                Case Study: From “Random Posting” to Revenue-Driving Social
              </h2>
              <p className="text-slate-700 mb-4">
                A B2B service company came to us posting inconsistently across three platforms. No clear strategy,
                no tracking, and no idea which posts (if any) were driving leads.
              </p>
              <ul className="list-disc list-inside space-y-2 text-slate-700 mb-4">
                <li>We ran a full audit, defined content pillars, and aligned messaging with their sales narrative.</li>
                <li>We introduced a simple monthly calendar, clearer CTAs, and UTM tracking for key campaigns.</li>
                <li>Within 4 months, they saw a 180% increase in social-driven website traffic and a 3x increase in
                  form submissions attributed to social media.</li>
              </ul>
              <p className="text-slate-700">
                Social didn’t just “look better”—it finally had a measurable role in their pipeline.
              </p>
            </motion.div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-slate-900 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-4">
                Ready to Make Social Media Actually Work for You?
              </h2>
              <p className="text-lg text-slate-300 mb-8">
                Whether you need strategy, execution, or both, we can plug into your team and turn social into
                a real growth channel—not just a checkbox.
              </p>
              <a
                href="/contact"
                className="inline-flex items-center justify-center bg-indigo-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-indigo-700 transition-colors duration-200"
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

export default SocialMediaStrategy;
