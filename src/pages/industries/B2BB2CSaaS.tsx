import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { CTABlock1 } from '../../components/CTABlocks';
import { motion } from 'framer-motion';
import { Building2, Users, Zap, TrendingUp, CheckCircle } from 'lucide-react';

const B2BB2CSaaS: React.FC = () => {
  const challenges = [
    "Complex sales cycles and multiple decision makers",
    "High customer acquisition costs",
    "Difficulty demonstrating ROI and value proposition",
    "Intense competition and market saturation",
    "Need for scalable lead generation systems"
  ];

  const services = [
    "Account-Based Marketing (ABM)",
    "Lead Generation & Nurturing",
    "Content Marketing & Thought Leadership",
    "Marketing Automation & CRM Integration",
    "Paid Advertising (Google, LinkedIn, Meta)",
    "Conversion Rate Optimization",
    "Analytics & Attribution Modeling",
    "Sales Enablement & Training"
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <div className="flex justify-center mb-6">
                <Building2 className="text-electric-blue" size={64} />
              </div>
              <h1 className="text-4xl sm:text-6xl font-bold text-slate-900 mb-6">
                B2B, B2C, & SaaS Marketing
              </h1>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
                Specialized marketing strategies for B2B companies, B2C brands, and SaaS platforms. We understand the unique challenges and opportunities in each market segment.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Overview */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold text-slate-900 mb-6">Overview</h2>
                <p className="text-lg text-slate-600 mb-6">
                  Whether you're selling to businesses, consumers, or offering software as a service, each model requires distinct marketing approaches. B2B focuses on relationship building and demonstrating ROI, B2C emphasizes emotional connection and brand loyalty, while SaaS requires ongoing engagement and retention strategies.
                </p>
                <p className="text-lg text-slate-600">
                  Our team has extensive experience across all three models, understanding the nuances of buyer behavior, sales cycles, and growth metrics that matter most to your business type.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="grid grid-cols-1 sm:grid-cols-3 gap-6"
              >
                <div className="text-center p-6 bg-blue-50 rounded-xl">
                  <Users className="text-electric-blue mx-auto mb-4" size={40} />
                  <h3 className="font-bold text-slate-900 mb-2">B2B</h3>
                  <p className="text-sm text-slate-600">Relationship-focused marketing</p>
                </div>
                <div className="text-center p-6 bg-pink-50 rounded-xl">
                  <Zap className="text-electric-pink mx-auto mb-4" size={40} />
                  <h3 className="font-bold text-slate-900 mb-2">B2C</h3>
                  <p className="text-sm text-slate-600">Emotion-driven campaigns</p>
                </div>
                <div className="text-center p-6 bg-purple-50 rounded-xl">
                  <TrendingUp className="text-purple-600 mx-auto mb-4" size={40} />
                  <h3 className="font-bold text-slate-900 mb-2">SaaS</h3>
                  <p className="text-sm text-slate-600">Growth & retention focused</p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Key Challenges */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Key Challenges</h2>
              <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                Common obstacles faced by B2B, B2C, and SaaS companies in today's competitive landscape.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {challenges.map((challenge, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-electric-blue rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-slate-700">{challenge}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* How Nadeza Helps */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl font-bold text-slate-900 mb-6">How Nadeza Helps</h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                We develop tailored strategies that address the unique needs of your business model, whether you're targeting businesses, consumers, or offering software solutions.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-blue-50 p-8 rounded-xl"
              >
                <h3 className="text-xl font-bold text-slate-900 mb-4">B2B Strategy</h3>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <CheckCircle className="text-electric-blue mr-3 flex-shrink-0" size={16} />
                    <span className="text-slate-700">Account-based marketing campaigns</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="text-electric-blue mr-3 flex-shrink-0" size={16} />
                    <span className="text-slate-700">LinkedIn and industry-specific advertising</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="text-electric-blue mr-3 flex-shrink-0" size={16} />
                    <span className="text-slate-700">Thought leadership content</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="text-electric-blue mr-3 flex-shrink-0" size={16} />
                    <span className="text-slate-700">Sales enablement tools</span>
                  </li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-pink-50 p-8 rounded-xl"
              >
                <h3 className="text-xl font-bold text-slate-900 mb-4">B2C Strategy</h3>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <CheckCircle className="text-electric-pink mr-3 flex-shrink-0" size={16} />
                    <span className="text-slate-700">Emotional brand storytelling</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="text-electric-pink mr-3 flex-shrink-0" size={16} />
                    <span className="text-slate-700">Social media engagement campaigns</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="text-electric-pink mr-3 flex-shrink-0" size={16} />
                    <span className="text-slate-700">Influencer partnerships</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="text-electric-pink mr-3 flex-shrink-0" size={16} />
                    <span className="text-slate-700">Customer loyalty programs</span>
                  </li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="bg-purple-50 p-8 rounded-xl"
              >
                <h3 className="text-xl font-bold text-slate-900 mb-4">SaaS Strategy</h3>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <CheckCircle className="text-purple-600 mr-3 flex-shrink-0" size={16} />
                    <span className="text-slate-700">Product-led growth strategies</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="text-purple-600 mr-3 flex-shrink-0" size={16} />
                    <span className="text-slate-700">Onboarding optimization</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="text-purple-600 mr-3 flex-shrink-0" size={16} />
                    <span className="text-slate-700">Churn reduction campaigns</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="text-purple-600 mr-3 flex-shrink-0" size={16} />
                    <span className="text-slate-700">Feature adoption tracking</span>
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Relevant Services */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Relevant Services</h2>
              <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                Comprehensive marketing services tailored to your business model and growth objectives.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 text-center group cursor-pointer"
                >
                  <h3 className="font-semibold text-slate-900 group-hover:text-electric-blue transition-colors duration-200">
                    {service}
                  </h3>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <CTABlock1 />
      </main>
      <Footer />
    </div>
  );
};

export default B2BB2CSaaS;