import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Search, Target, Mail, Share2, BarChart3 } from 'lucide-react';

const Solutions: React.FC = () => {
  const solutions = [
    {
      icon: <Globe className="text-nadeza-blue" size={40} />,
      title: "Website Design & Development",
      description: "WordPress, HubSpot, Shopify, and custom builds that convert visitors into customers.",
      tools: ["WordPress", "Shopify", "React", "Next.js"],
      link: "/services/website-design-development",
    },
    {
      icon: <Search className="text-green-600" size={40} />,
      title: "SEO & Organic Growth",
      description: "Strategic optimization to dominate search results and drive qualified traffic.",
      tools: ["Google Analytics", "SEMrush", "Ahrefs", "Search Console"],
      link: "/services/seo",
    },
    {
      icon: <Target className="text-nadeza-red" size={40} />,
      title: "Paid Media Management",
      description: "PPC, Meta Ads, YouTube, and Google Search campaigns that deliver ROI.",
      tools: ["Google Ads", "Meta Ads", "YouTube Ads", "LinkedIn Ads"],
      link: "/services/paid-advertising",
    },
    {
      icon: <Mail className="text-purple-600" size={40} />,
      title: "Email & Marketing Automation",
      description: "Nurture sequences and automated campaigns that scale your revenue.",
      tools: ["HubSpot", "Mailchimp", "Klaviyo", "ActiveCampaign"],
      link: "/services/email-marketing",
    },
    {
      icon: <Share2 className="text-pink-600" size={40} />,
      title: "Social Media Strategy",
      description: "Content strategy and community management across all major platforms.",
      tools: ["Hootsuite", "Buffer", "Sprout Social", "Later"],
      link: "/services/social-media",
    },
    {
      icon: <BarChart3 className="text-orange-600" size={40} />,
      title: "Analytics & Attribution",
      description: "Data-driven insights and tech integration for measurable business growth.",
      tools: ["GA4", "Salesforce", "HubSpot", "Mixpanel"],
      link: "/services/data-analytics",
    }
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-slate-900 mb-6">
            Complete Digital Marketing Solutions
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            From strategy to execution, we handle every aspect of your digital presence so you can focus on running your business.
          </p>
        </motion.div>

        {/* Solution Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <motion.a
              key={index}
              href={solution.link}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group block"
            >
              <div className="mb-6 group-hover:scale-110 transition-transform duration-300">
                {solution.icon}
              </div>

              <h3 className="text-xl font-semibold text-slate-900 mb-4">
                {solution.title}
              </h3>

              <p className="text-slate-600 mb-6">
                {solution.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {solution.tools.map((tool, toolIndex) => (
                  <span
                    key={toolIndex}
                    className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm font-medium"
                  >
                    {tool}
                  </span>
                ))}
              </div>

              <span className="text-nadeza-blue font-semibold group-hover:text-blue-700 transition-colors duration-200">
                Learn More →
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;
