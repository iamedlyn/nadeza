import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import { Globe, Search, Target, Mail, Share2, BarChart3, CheckCircle } from 'lucide-react';

// Hero Image URL
const HERO_IMAGE_URL = "https://242510585.fs1.hubspotusercontent-na2.net/hubfs/242510585/Nadeza-Our%20Services.png?width=860&t=1763649555905";

const Services: React.FC = () => {
  const services = [
    {
      icon: <Globe className="text-blue-600" size={48} />,
      title: "Website Design & Development",
      description: "Custom websites that convert visitors into customers and grow with your business.",
      features: [
        "Responsive design for all devices",
        "WordPress & Shopify development",
        "Custom React/Next.js applications",
        "E-commerce integration",
        "SEO-optimized structure",
        "Performance optimization"
      ],
      tools: ["WordPress", "Shopify", "React", "Next.js", "Webflow"],
      outcomes: ["Increased conversions", "Better user experience", "Mobile optimization", "Faster load times"]
    },
    {
      icon: <Search className="text-green-600" size={48} />,
      title: "SEO & Organic Growth",
      description: "Strategic search engine optimization to dominate rankings and drive qualified traffic.",
      features: [
        "Comprehensive SEO audits",
        "Keyword research & strategy",
        "On-page optimization",
        "Technical SEO improvements",
        "Content strategy & creation",
        "Link building campaigns"
      ],
      tools: ["Google Analytics", "SEMrush", "Ahrefs", "Search Console", "Screaming Frog"],
      outcomes: ["Higher search rankings", "Increased organic traffic", "Better visibility", "More qualified leads"]
    },
    {
      icon: <Target className="text-red-600" size={48} />,
      title: "Paid Media Management",
      description: "Data-driven advertising campaigns across Google, Meta, YouTube, and LinkedIn.",
      features: [
        "Google Ads management",
        "Meta (Facebook/Instagram) advertising",
        "YouTube video campaigns",
        "LinkedIn B2B advertising",
        "Campaign optimization",
        "A/B testing & analytics"
      ],
      tools: ["Google Ads", "Meta Ads Manager", "YouTube Ads", "LinkedIn Campaign Manager"],
      outcomes: ["Lower cost per acquisition", "Higher ROAS", "Increased brand awareness", "More qualified leads"]
    },
    {
      icon: <Mail className="text-purple-600" size={48} />,
      title: "Email & Marketing Automation",
      description: "Automated email sequences and campaigns that nurture leads and drive revenue.",
      features: [
        "Email campaign design",
        "Marketing automation setup",
        "Lead nurturing sequences",
        "Segmentation strategies",
        "A/B testing",
        "Performance tracking"
      ],
      tools: ["HubSpot", "Mailchimp", "Klaviyo", "ActiveCampaign", "ConvertKit"],
      outcomes: ["Higher email engagement", "Increased customer lifetime value", "Better lead nurturing", "Automated revenue"]
    },
    {
      icon: <Share2 className="text-pink-600" size={48} />,
      title: "Social Media Strategy & Management",
      description: "Content strategy and community management across all major social platforms.",
      features: [
        "Social media strategy",
        "Content creation & curation",
        "Community management",
        "Influencer partnerships",
        "Social advertising",
        "Analytics & reporting"
      ],
      tools: ["Hootsuite", "Buffer", "Sprout Social", "Later", "Canva"],
      outcomes: ["Increased brand awareness", "Higher engagement rates", "More followers", "Better community building"]
    },
    {
      icon: <BarChart3 className="text-orange-600" size={48} />,
      title: "Analytics, Attribution & Tech Integration",
      description: "Data-driven insights and technology integration for measurable business growth.",
      features: [
        "Analytics setup & configuration",
        "Custom dashboard creation",
        "Attribution modeling",
        "CRM integration",
        "Marketing tech stack optimization",
        "Performance reporting"
      ],
      tools: ["Google Analytics 4", "Salesforce", "HubSpot", "Mixpanel", "Zapier"],
      outcomes: ["Better data insights", "Improved attribution", "Streamlined processes", "Data-driven decisions"]
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        {/* Hero Section (Updated for 2-column layout) */}
        <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Grid Container for DSI and Image */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              
              {/* Digital Services Information (DSI) - Left Column */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center lg:text-left"
              >
                <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6">
                  Complete Digital Marketing Services
                </h1>
                <p className="text-xl text-slate-600 max-w-3xl lg:max-w-none mx-auto mb-8">
                  From strategy to execution, we provide comprehensive digital marketing solutions that drive measurable results for businesses of all sizes.
                </p>
              </motion.div>
              
              {/* Hero Image - Right Column */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="w-full h-full flex justify-center lg:justify-end"
              >
                <img 
                  src={HERO_IMAGE_URL} 
                  alt="A person working on a desktop computer, representing digital services"
                  className="w-full max-w-lg lg:max-w-none rounded-2xl shadow-xl object-cover"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-20">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                    index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                  }`}
                >
                  {/* Content */}
                  <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                    <div className="mb-6">{service.icon}</div>
                    <h2 className="text-3xl font-bold text-slate-900 mb-4">
                      {service.title}
                    </h2>
                    <p className="text-lg text-slate-600 mb-8">
                      {service.description}
                    </p>

                    {/* Features */}
                    <div className="mb-8">
                      <h3 className="text-xl font-semibold text-slate-900 mb-4">What's Included:</h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {service.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center">
                            <CheckCircle className="text-green-600 mr-3 flex-shrink-0" size={16} />
                            <span className="text-slate-700">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Tools */}
                    <div className="mb-8">
                      <h3 className="text-lg font-semibold text-slate-900 mb-3">Tools & Platforms:</h3>
                      <div className="flex flex-wrap gap-2">
                        {service.tools.map((tool, toolIndex) => (
                          <span
                            key={toolIndex}
                            className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm font-medium"
                          >
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Changed button to <a> tag and linked to /contact */}
                    <a 
                      href="/contact"
                      className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200"
                    >
                      Get Started
                    </a>
                  </div>

                  {/* Outcomes */}
                  <div className={`bg-slate-50 p-8 rounded-2xl ${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                    <h3 className="text-xl font-semibold text-slate-900 mb-6">Expected Outcomes:</h3>
                    <div className="space-y-4">
                      {service.outcomes.map((outcome, outcomeIndex) => (
                        <div key={outcomeIndex} className="flex items-center">
                          <div className="w-2 h-2 bg-blue-600 rounded-full mr-4"></div>
                          <span className="text-slate-700 font-medium">{outcome}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

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
                Ready to Accelerate Your Growth?
              </h2>
              <p className="text-xl text-slate-300 mb-8">
                Let's create a custom strategy that combines the right services for your business goals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200">
                  Schedule Consultation
                </button>
                <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-slate-900 transition-all duration-200">
                  View Case Studies
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Services;