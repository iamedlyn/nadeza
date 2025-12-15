import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { motion } from 'framer-motion';
import {
  Mail,
  CheckCircle,
  ArrowRight,
  Users,
  Zap,
  Heart,
  BarChart3,
  Activity,
  Target
} from 'lucide-react';

const EmailMarketing: React.FC = () => {
  const services = [
    'Email strategy and planning',
    'List building and segmentation',
    'Email template design and development',
    'Automated drip campaigns',
    'Newsletter creation and management',
    'A/B testing and optimization',
    'Deliverability optimization',
    'Performance analytics and reporting'
  ];

  const campaignTypes = [
    {
      title: 'Welcome Series',
      description: 'Onboard new subscribers with engaging welcome sequences that set the tone from day one.'
    },
    {
      title: 'Nurture Campaigns',
      description: 'Educate, build trust, and guide prospects through your funnel with value-led content.'
    },
    {
      title: 'Product Launches',
      description: 'Generate excitement, urgency, and sales when you release something new.'
    },
    {
      title: 'Re-engagement',
      description: 'Win back inactive subscribers, reduce list decay, and protect deliverability.'
    }
  ];

  const benefits = [
    {
      icon: <Users className="text-blue-600" size={32} />,
      title: 'Direct Communication',
      description: 'Reach your audience in a channel you own, not one controlled by algorithms.'
    },
    {
      icon: <Zap className="text-yellow-600" size={32} />,
      title: 'High ROI',
      description: 'Email consistently ranks among the highest ROI channels for marketing and sales.'
    },
    {
      icon: <Heart className="text-red-600" size={32} />,
      title: 'Build Loyalty',
      description: 'Nurture long-term relationships with consistent, relevant, and valuable communication.'
    }
  ];

  const tools = [
    'Mailchimp',
    'HubSpot',
    'Klaviyo',
    'ActiveCampaign',
    'ConvertKit',
    'Brevo (Sendinblue)',
    'Campaign Monitor',
    'Salesforce Marketing Cloud'
  ];

  const metrics = [
    {
      icon: <BarChart3 className="text-indigo-600" size={32} />,
      title: 'Engagement Metrics',
      description:
        'Open Rate (OR), Click-Through Rate (CTR), and Click-to-Open Rate (CTOR) to understand how people interact with your emails.'
    },
    {
      icon: <Target className="text-green-600" size={32} />,
      title: 'Conversion & Revenue',
      description:
        'Conversion rate, revenue per send, revenue per subscriber, and campaign ROI tied back to actual business outcomes.'
    },
    {
      icon: <Activity className="text-red-500" size={32} />,
      title: 'List Health',
      description:
        'Unsubscribe rate, spam complaints, bounce rate, and list growth so your database stays healthy and deliverable over time.'
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-indigo-50 to-purple-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <div className="flex justify-center mb-6">
                <Mail className="text-indigo-600" size={64} />
              </div>
              <h1 className="text-4xl sm:text-6xl font-bold text-slate-900 mb-6">
                Email Marketing &amp; Automation
              </h1>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
                Strategic email marketing that nurtures relationships and drives revenue. From welcome sequences to
                product launches, we create email programs that convert and keep working over time.
              </p>
              <a
                href="/contact"
                className="bg-indigo-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-indigo-700 transition-colors duration-200 inline-flex items-center mx-auto"
              >
                Book a Call
                <ArrowRight className="ml-2" size={20} />
              </a>
            </motion.div>
          </div>
        </section>

        {/* Why Email Still Works */}
        <section className="py-20 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-slate-900 mb-6 text-center">
                Email Still Works — And It&apos;s Not Going Anywhere
              </h2>
              <p className="text-lg text-slate-600 mb-4">
                For almost two decades, email has remained one of the most reliable channels for leads, sales, and
                repeat revenue. While social platforms change algorithms and ad costs keep climbing, your email list is
                an owned asset that you control.
              </p>
              <p className="text-lg text-slate-600 mb-4">
                We understand email marketing deeply — from strategy to copy to the technical details behind
                deliverability and analytics. Our goal is not just to send more emails, but to send the right emails to
                the right people at the right time.
              </p>
              <p className="text-lg text-slate-600">
                Whether you&apos;re focused on onboarding, education, sales, or retention, we design email journeys that
                support your full customer lifecycle and integrate seamlessly with your broader marketing and sales
                funnel.
              </p>
            </motion.div>
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
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Email Marketing Services</h2>
              <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                Strategy, copy, design, and automation — all working together to turn your email channel into a
                consistent revenue driver.
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
                  <CheckCircle className="text-indigo-600 flex-shrink-0" size={20} />
                  <span className="text-slate-700">{service}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Campaign Types */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Campaign Types We Build</h2>
              <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                From always-on flows to high-impact launches, we design campaigns that fit your customer journey.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {campaignTypes.map((campaign, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="bg-slate-50 p-6 rounded-xl shadow-sm"
                >
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">{campaign.title}</h3>
                  <p className="text-slate-600">{campaign.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Platforms We Work With */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Platforms We Work With</h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                We can work inside your existing email platform or help you choose the right one based on your list
                size, complexity, and budget. Not all tools are built for the same stage of growth — and choosing the
                wrong one can slow you down.
              </p>
            </motion.div>

            <div className="flex flex-wrap justify-center gap-3">
              {tools.map((tool, index) => (
                <span
                  key={index}
                  className="bg-white text-slate-700 px-4 py-2 rounded-full text-sm font-medium shadow-sm"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* What We Measure */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl font-bold text-slate-900 mb-6">What We Measure (And Improve)</h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                Email is only powerful if you can measure what&apos;s working. We track the right metrics and optimize
                continuously so every send makes your program smarter.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {metrics.map((metric, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  viewport={{ once: true }}
                  className="text-center p-6 bg-slate-50 rounded-xl shadow-sm"
                >
                  <div className="mb-4 flex justify-center">{metric.icon}</div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">{metric.title}</h3>
                <p className="text-slate-600 text-sm">{metric.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Why Partner With Nadeza</h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                We combine strategy, copywriting, design, and technical setup so your email channel doesn&apos;t just
                send messages — it drives measurable business impact.
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
                  className="text-center p-6 bg-white rounded-xl shadow-sm"
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
              <h2 className="text-3xl font-bold mb-6">Ready to Supercharge Your Email Marketing?</h2>
              <p className="text-xl text-slate-300 mb-8">
                Whether you&apos;re just getting started or ready to scale a mature program, we can help you turn email
                into one of your most reliable revenue channels.
              </p>
              <a
                href="/contact"
                className="bg-indigo-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-indigo-700 transition-colors duration-200 inline-flex items-center justify-center"
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

export default EmailMarketing;
