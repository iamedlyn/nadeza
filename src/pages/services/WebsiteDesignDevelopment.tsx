import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { motion } from 'framer-motion';
import {
  Globe,
  CheckCircle,
  ArrowRight,
  Code,
  Smartphone,
  Zap,
  Shield,
  Cpu,
  Database,
  Layout,
  Server
} from 'lucide-react';

const WebsiteDesignDevelopment: React.FC = () => {
  const features = [
    'Custom responsive design for all devices',
    'WordPress, HubSpot, Shopify, and React development',
    'SEO-optimized structure and content',
    'Performance optimization and speed testing',
    'E-commerce integration and payment processing',
    'Content management system setup',
    'SSL certificates and security implementation',
    'Google Analytics and tracking setup'
  ];

  const process = [
    {
      step: '01',
      title: 'Discovery & Strategy',
      description:
        'We analyze your business goals, target audience, and competitive landscape to create a strategic foundation.'
    },
    {
      step: '02',
      title: 'Design & Wireframing',
      description:
        'Custom designs that reflect your brand identity while optimizing for user experience and conversions.'
    },
    {
      step: '03',
      title: 'Development & Testing',
      description:
        'Clean, efficient code development with rigorous testing across all devices and browsers.'
    },
    {
      step: '04',
      title: 'Launch & Optimization',
      description:
        'Seamless launch with ongoing monitoring and optimization to ensure peak performance.'
    }
  ];

  const tools = [
    'WordPress',
    'Shopify',
    'React',
    'Next.js',
    'Webflow',
    'Figma',
    'Adobe Creative Suite',
    'Google PageSpeed Insights',
    'HubSpot'
  ];

  const benefits = [
    {
      icon: <Smartphone className="text-blue-600" size={32} />,
      title: 'Mobile-First Design',
      description: 'Responsive designs that look great on every device and screen size.'
    },
    {
      icon: <Zap className="text-yellow-600" size={32} />,
      title: 'Lightning Fast',
      description: 'Built and optimized for speed, so your pages load quickly and keep visitors engaged.'
    },
    {
      icon: <Shield className="text-green-600" size={32} />,
      title: 'Secure & Reliable',
      description: 'Security best practices baked in, from SSL to infrastructure recommendations.'
    },
    {
      icon: <Code className="text-purple-600" size={32} />,
      title: 'Clean Code',
      description: 'Well-structured, maintainable code that is easy to extend as you grow.'
    }
  ];

  const techStack = [
    {
      icon: <Globe size={28} />,
      title: 'CMS & Platforms',
      description: 'WordPress, HubSpot, Shopify, Webflow, and custom React/Next.js builds depending on your needs.'
    },
    {
      icon: <Layout size={28} />,
      title: 'Design & UX',
      description: 'Figma and Adobe tools for modern, conversion-focused layouts and components.'
    },
    {
      icon: <Cpu size={28} />,
      title: 'Performance & Frontend',
      description: 'Next.js, Vite, and modern frontend tooling for fast, smooth user experiences.'
    },
    {
      icon: <Server size={28} />,
      title: 'Infrastructure Ready',
      description: 'Set up for hosting on platforms like Vercel, Netlify, or your preferred environment.'
    },
    {
      icon: <Database size={28} />,
      title: 'Tracking & Data',
      description: 'Google Analytics, HubSpot tracking, pixels, and event tracking configured correctly.'
    },
    {
      icon: <Shield size={28} />,
      title: 'Security & Stability',
      description: 'HTTPS, SSL, security headers, and sensible recommendations to keep your site safe.'
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <div className="flex justify-center mb-6">
                <Globe className="text-blue-600" size={64} />
              </div>
              <h1 className="text-4xl sm:text-6xl font-bold text-slate-900 mb-6">
                Website Design &amp; Development
              </h1>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
                Custom websites that convert visitors into customers. From concept to launch, we create digital
                experiences that drive results and grow with your business.
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

        {/* What's Included */}
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
                Everything you need for a professional website that performs from day one.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-3"
                >
                  <CheckCircle className="text-green-600 flex-shrink-0" size={20} />
                  <span className="text-slate-700">{feature}</span>
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
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Our Process</h2>
              <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                A clear, structured process that keeps your project moving and avoids endless delays.
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
                  <div className="text-4xl font-bold text-blue-600 mb-4">{step.step}</div>
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
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Benefits for Your Business</h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center p-6 bg-slate-50 rounded-xl hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="mb-4 flex justify-center">{benefit.icon}</div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">{benefit.title}</h3>
                  <p className="text-slate-600">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Tech Stack Grid */}
        <section className="py-20 bg-slate-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl font-bold mb-4">Tech Stack We Build On</h2>
              <p className="text-lg text-slate-200 max-w-3xl mx-auto">
                We combine modern frameworks, battle-tested platforms, and reliable infrastructure to give you a site
                that&apos;s fast, flexible, and future-ready.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {techStack.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  viewport={{ once: true }}
                  className="bg-slate-800 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <div className="mb-4 flex items-center justify-center gap-3">
                    <div className="p-2 rounded-full bg-slate-700 flex items-center justify-center">
                      {item.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                  </div>
                  <p className="text-sm text-slate-200 text-center">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Nadeza Builds Faster */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold text-slate-900 mb-6">
                  Why Nadeza Builds Faster Than Typical Agencies
                </h2>
                <p className="text-lg text-slate-600 mb-4">
                  Most website projects drag on for months because there are too many hand-offs, too much bureaucracy,
                  and not enough clear ownership.
                </p>
                <p className="text-lg text-slate-600 mb-4">
                  At Nadeza, we run lean, cross-functional teams. Strategy, design, copy, and development work closely
                  together instead of in separate silos. That means fewer delays, fewer surprises, and faster launch
                  timelines.
                </p>
                <p className="text-lg text-slate-600">
                  We also focus on what actually moves the needle: clear messaging, clean UX, and performance. Good is
                  often better than endlessly chasing perfect—because a good site that is live and improving will always
                  beat a “perfect” site that never launches.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-slate-50 rounded-2xl p-8 shadow-sm"
              >
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  What This Means for You
                </h3>
                <ul className="space-y-3 text-slate-700">
                  <li>• Faster launch without sacrificing quality</li>
                  <li>• Clear milestones and communication at each stage</li>
                  <li>• Less time stuck in feedback loops and revisions</li>
                  <li>• A site that can evolve based on real data after launch</li>
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Banner */}
        <section className="py-16 bg-gradient-to-r from-blue-700 via-indigo-600 to-pink-500 text-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Ready to Build a Website That Actually Performs?
              </h2>
              <p className="text-lg sm:text-xl text-slate-100 mb-8">
                Whether you&apos;re starting from scratch or redesigning an existing site, we can help you move from
                “we should update our website” to a live, conversion-focused experience.
              </p>
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-3 rounded-lg bg-white text-slate-900 font-semibold hover:bg-slate-100 transition-colors duration-200"
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

export default WebsiteDesignDevelopment;
