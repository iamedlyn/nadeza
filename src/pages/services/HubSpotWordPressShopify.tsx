import React from 'react';
    import Header from '../../components/Header';
    import Footer from '../../components/Footer';
    import { motion } from 'framer-motion';
    import { Settings, CheckCircle, ArrowRight, Layers, Zap, Users } from 'lucide-react';

    const HubSpotWordPressShopify: React.FC = () => {
      const platforms = [
        {
          name: "HubSpot",
          description: "Complete CRM and marketing automation platform",
          features: ["CRM setup and customization", "Marketing automation workflows", "Sales pipeline optimization", "Custom integrations"]
        },
        {
          name: "WordPress",
          description: "Flexible content management system",
          features: ["Custom theme development", "Plugin integration", "Performance optimization", "Security hardening"]
        },
        {
          name: "Shopify",
          description: "Powerful e-commerce platform",
          features: ["Store setup and design", "Payment gateway integration", "Inventory management", "App integrations"]
        }
      ];

      const services = [
        "Platform setup and configuration",
        "Custom theme and template development",
        "Third-party integrations and APIs",
        "Data migration and import",
        "Performance optimization",
        "Security implementation",
        "Training and documentation",
        "Ongoing maintenance and support"
      ];

      const benefits = [
        {
          icon: <Layers className="text-blue-600" size={32} />,
          title: "Platform Expertise",
          description: "Deep knowledge of each platform's capabilities and best practices."
        },
        {
          icon: <Zap className="text-yellow-600" size={32} />,
          title: "Seamless Integration",
          description: "Connect your platforms with existing tools and workflows."
        },
        {
          icon: <Users className="text-green-600" size={32} />,
          title: "User Training",
          description: "Comprehensive training to help your team maximize platform potential."
        }
      ];

      return (
        <div className="min-h-screen">
          <Header />
          <main className="pt-20">
            {/* Hero Section */}
            <section className="py-20 bg-gradient-to-br from-orange-50 to-red-50">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="text-center"
                >
                  <div className="flex justify-center mb-6">
                    <Settings className="text-orange-600" size={64} />
                  </div>
                  <h1 className="text-4xl sm:text-6xl font-bold text-slate-900 mb-6">
                    HubSpot, WordPress, & Shopify Development
                  </h1>
                  <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
                    Expert development and customization for the world's leading business platforms. We help you leverage the full power of HubSpot, WordPress, and Shopify.
                  </p>
                  <button className="bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-orange-700 transition-colors duration-200 flex items-center mx-auto">
                    Book a Call
                    <ArrowRight className="ml-2" size={20} />
                  </button>
                </motion.div>
              </div>
            </section>

            {/* Platforms */}
            <section className="py-20 bg-white">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="text-center mb-16"
                >
                  <h2 className="text-3xl font-bold text-slate-900 mb-6">Platform Specializations</h2>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  {platforms.map((platform, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.2 }}
                      viewport={{ once: true }}
                      className="bg-slate-50 p-8 rounded-xl hover:shadow-lg transition-shadow duration-300"
                    >
                      <h3 className="text-2xl font-bold text-slate-900 mb-4">{platform.name}</h3>
                      <p className="text-slate-600 mb-6">{platform.description}</p>
                      <ul className="space-y-2">
                        {platform.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center">
                            <CheckCircle className="text-green-600 mr-3 flex-shrink-0" size={16} />
                            <span className="text-slate-700">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  ))}
                </div>
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
                  <h2 className="text-3xl font-bold text-slate-900 mb-6">Development Services</h2>
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
                      className="text-center p-6"
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
                  <h2 className="text-3xl font-bold mb-6">Ready to Optimize Your Platform?</h2>
                  <p className="text-xl text-slate-300 mb-8">
                    Let's unlock the full potential of your HubSpot, WordPress, or Shopify platform.
                  </p>
                  <button className="bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-orange-700 transition-colors duration-200">
                    Book a Call
                  </button>
                </motion.div>
              </div>
            </section>
          </main>
          <Footer />
        </div>
      );
    };

    export default HubSpotWordPressShopify;