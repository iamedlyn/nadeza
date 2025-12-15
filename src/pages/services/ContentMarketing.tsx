import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { motion } from 'framer-motion';
import { FileText, CheckCircle, ArrowRight, Users, TrendingUp, Heart } from 'lucide-react';

const ContentMarketing: React.FC = () => {
  const services = [
    'Content strategy and planning',
    'Blog writing and optimization',
    'Social media content creation',
    'Email newsletter content',
    'Video script writing',
    'Infographic design and development',
    'Case study development',
    'Content calendar management'
  ];

  const contentTypes = [
    'Blog posts and articles',
    'Social media content',
    'Email campaigns',
    'Video content',
    'Infographics',
    'Case studies',
    'White papers',
    'Webinar content'
  ];

  const benefits = [
    {
      icon: <Users className="text-blue-600" size={32} />,
      title: 'Build Authority',
      description:
        'Establish your brand as a trusted voice in your market with helpful, relevant content.'
    },
    {
      icon: <TrendingUp className="text-green-600" size={32} />,
      title: 'Drive Organic Traffic',
      description:
        'Search-optimized, intent-focused content that attracts and engages the right audience.'
    },
    {
      icon: <Heart className="text-red-600" size={32} />,
      title: 'Nurture Relationships',
      description:
        'Keep prospects and customers engaged with consistent, value-driven communication over time.'
    }
  ];

  const pillars = [
    {
      icon: <FileText className="text-purple-600" size={32} />,
      title: 'Strategy Before Output',
      description:
        'We start with audience, intent, and journey mapping—not random topics. Every piece of content has a job: attract, educate, nurture, or convert.'
    },
    {
      icon: <Users className="text-blue-600" size={32} />,
      title: 'Human Voice, Human Judgment',
      description:
        'We use AI tools to speed up drafts and ideas, but humans refine the message, tone, and context so it sounds like you—not a generic robot.'
    },
    {
      icon: <TrendingUp className="text-green-600" size={32} />,
      title: 'AI-Assisted, Not AI-Only',
      description:
        'GPT and other AI platforms help with ideation, outlines, and variations. We then edit for accuracy, clarity, SEO, and brand consistency.'
    }
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
                <FileText className="text-purple-600" size={64} />
              </div>
              <h1 className="text-4xl sm:text-6xl font-bold text-slate-900 mb-6">
                Content Marketing
              </h1>
              <p className="text-xl text-slate-600 mx-auto mb-4">
                Strategic content that educates, engages, and converts. We create content that aligns with search
                intent, supports your sales funnel, and builds long-term trust with your audience.
              </p>
              <p className="text-lg text-slate-600 mx-auto mb-8">
                In a world where anyone can publish with AI, we focus on what actually matters: clear positioning,
                consistent messaging, and content that feels human and genuinely useful.
              </p>
              <a
                href="/contact"
                className="bg-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-purple-700 transition-colors duration-200 inline-flex items-center mx-auto"
              >
                Book a Call
                <ArrowRight className="ml-2" size={20} />
              </a>
            </motion.div>
          </div>
        </section>

        {/* Content Marketing in the Age of AI */}
        <section className="py-20 bg-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section intro */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="mb-12 text-center"
            >
              <h2 className="text-3xl font-bold text-slate-900 mb-4">
                Content Marketing in the Age of AI
              </h2>
              <p className="text-lg text-slate-600 mx-auto leading-relaxed">
                AI can generate text in seconds—but not strategy, voice, or message that truly reflects your brand.
                That’s where our human-led content process makes all the difference.
              </p>
            </motion.div>

            {/* Pillars Grid – expanded width */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pillars.map((pillar, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  viewport={{ once: true }}
                  className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <div className="mb-4 flex justify-center">{pillar.icon}</div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-3 text-center">
                    {pillar.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed text-center">
                    {pillar.description}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Explanation paragraph – your exact wording */}
            <div className="mt-12 mx-auto text-center text-slate-600 leading-relaxed space-y-4">
              <p className="text-base sm:text-lg">
                We use GPT and other AI platforms as part of our workflow—to brainstorm ideas, structure outlines,
                and explore variations. But every piece of content is reviewed, edited, and often rewritten by a human
                who understands your brand, audience, and objectives.
              </p>
              <p className="text-base sm:text-lg">
                This balance gives you the best of both worlds: the speed and scale of AI, combined with the nuance,
                judgment, and emotional intelligence of a real marketer.
              </p>
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
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Content Services</h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                From top-of-funnel discovery content to bottom-of-funnel sales enablement assets, we create a content
                ecosystem that supports your full customer journey.
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
                  <CheckCircle className="text-purple-600 flex-shrink-0" size={20} />
                  <span className="text-slate-700">{service}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Content Types */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Content Types We Create</h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                We help you show up consistently where your audience is—on search, social, in the inbox, and in
                long-form thought leadership.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {contentTypes.map((type, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300 text-center"
                >
                  <span className="text-slate-700 font-medium">{type}</span>
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
              <h2 className="text-3xl font-bold mb-6">Ready to Tell Your Story?</h2>
              <p className="text-xl text-slate-300 mb-8">
                Let’s build a content engine that sounds like you, supports your sales process, and grows with your
                business.
              </p>
              <a
                href="/contact"
                className="bg-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-purple-700 transition-colors duration-200 inline-block"
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

export default ContentMarketing;
