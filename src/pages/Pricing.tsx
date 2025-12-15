import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import { Check, Star, ArrowRight, ChevronDown, ChevronUp } from 'lucide-react';

// Define the interface for a package object for better type safety
interface Package {
  name: string;
  price: string;
  period: string;
  description: string;
  popular: boolean;
  features: string[];
  operationalNote: string; // New field for operational details/tooling fees
}

// Define the interface for an addOn object
interface AddOn {
  name: string;
  price: string;
  description: string;
}

const Pricing: React.FC = () => {
  // --- 3-TIER PACKAGE DATA (UNCHANGED) ---
  const packages: Package[] = [
    {
      name: "Foundation",
      price: "$2,500+",
      period: "/project",
      description: "Essential marketing groundwork for establishing strategy and digital health.",
      popular: false,
      features: [
        "Detailed Website Technical Audit",
        "Competitive Landscape Analysis",
        "Core Keyword & Audience Mapping",
        "Initial Strategy Roadmap (3-month focus)"
      ],
      operationalNote: "This package is typically project-based and covers initial strategic setup. Requires secure access to CMS and Google Analytics.",
    },
    {
      name: "Growth Accelerator",
      price: "$6,500+",
      period: "/month",
      description: "Full-service execution focusing on scaling organic traffic and paid channel performance.",
      popular: true,
      features: [
        "Senior Strategist-led Project Management",
        "Dedicated Content Creation (2 assets/mo)",
        "Advanced Technical SEO Implementation",
        "Monthly Performance Reporting & Review",
        "Targeted Link Building Campaign",
        "Conversion Rate Optimization (CRO) Analysis",
        "PPC Campaign Management (Ad spend separate)",
        "Bi-weekly Strategy Session"
      ],
      operationalNote: "Monthly retainer for labor and strategy. Requires secure access to all platforms and subscriptions (e.g., SEO tools, CRM).",
    },
    {
      name: "Enterprise Partner",
      price: "$10,000+",
      period: "/month",
      description: "Comprehensive, outsourced marketing department for complex, high-growth organizations.",
      popular: false,
      features: [
        "Fractional CMO & Dedicated Cross-Functional Team",
        "Unlimited Senior Consultation",
        "Full Marketing Automation Integration & Management",
        "Custom Dashboard & Advanced Analytics Setup",
        "Prioritized Development and Creative Assets",
        "Sales & Marketing Alignment Workshops",
        "Quarterly OKR Planning & Review",
        "Full Scope Flexibility & Customization"
      ],
      operationalNote: "Custom scope; client is responsible for all enterprise software license fees (e.g., Hubspot, Salesforce). Minimum 12-month commitment required.",
    },
  ];

  // --- UPDATED ADD-ONS LIST (From previous turns) ---
  const addOns: AddOn[] = [
    {
      name: "Email Marketing",
      price: "Custom",
      description: "Full management of campaigns, automation, and list segmentation."
    },
    {
      name: "Social Media Management",
      price: "Custom",
      description: "Content creation, community management, and paid social strategy."
    },
    {
      name: "Website Development",
      price: "$5,000+",
      description: "New website builds, custom features, and platform migrations."
    },
    {
      name: "Website Updates/Maintenance",
      price: "Hourly/Retainer",
      description: "Security, plugin updates, bug fixes, and minor content revisions."
    },
    {
      name: "Ad Creative & Copy Creation",
      price: "Custom",
      description: "Design and copywriting specifically for paid media campaigns."
    },
    {
      name: "Paid Search Management (PPC)",
      price: "Custom",
      description: "Strategy, optimization, and reporting across Google Ads, Bing, etc."
    },
    {
      name: "Assets Creation",
      price: "Custom",
      description: "On-demand design for brochures, reports, infographics, and more."
    },
    {
      name: "Tools Integration & Setup",
      price: "$1,500+",
      description: "Connecting CRM, analytics, marketing automation, and third-party platforms for seamless data flow."
    },
    {
        name: "Workflow Automation & CRM Setup",
        price: "$1,800+",
        description: "Building automated email sequences, lead scoring models, and internal sales workflows."
    },
    {
      name: "On-Off Campaigns",
      price: "Project Based",
      description: "Short-term launches, seasonal campaigns, or specific project deliverables."
    },
    {
        name: "Custom Dashboard Development",
        price: "$1,500+",
        description: "Building custom, consolidated BI/reporting dashboards (e.g., Looker Studio, Power BI) for executive reporting."
    },
    {
      name: "Google Analytics Setup/Migration (GA4)",
      price: "$1,500+",
      description: "GA4 implementation, custom event tracking, enhanced e-commerce, and data verification."
    }
  ];

  // State to manage the open/closed state of the 'includes' list for each package (logic removed, state kept empty)
  const [openIncludes, setOpenIncludes] = useState<number | null>(null);

  const toggleIncludes = (index: number) => {
    setOpenIncludes(openIncludes === index ? null : index);
  };

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
                Transparent Pricing for Premium Results
              </h1>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
                Invest in a partnership dedicated to measurable growth. All plans require a minimum 6-month commitment for strategic execution.
              </p>
              <div className="bg-blue-100 text-blue-800 px-6 py-3 rounded-full inline-block">
                <span className="font-semibold">🤝 Minimum 6-month contract required • Dedicated Senior Team</span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Pricing Packages */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Adjusted grid for 3 columns on large screens */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"> 
              {packages.map((pkg, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`relative bg-white rounded-2xl shadow-lg transition-shadow duration-300 flex flex-col ${
                    pkg.popular ? 'ring-4 ring-blue-600 shadow-2xl' : 'border border-slate-200'
                  }`}
                >
                  {pkg.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-blue-600 text-white px-6 py-2 rounded-full flex items-center">
                        <Star className="mr-1" size={16} />
                        <span className="font-semibold">Recommended</span>
                      </div>
                    </div>
                  )}

                  <div className="p-6 md:p-8 flex flex-col flex-grow">
                    <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-2">{pkg.name}</h3>
                    <p className="text-slate-600 mb-4 h-14 overflow-hidden">{pkg.description}</p>
                    
                    <div className="mb-6">
                      <div className="flex items-baseline">
                        <span className="text-4xl md:text-5xl font-extrabold text-slate-900">{pkg.price}</span>
                        <span className="text-base md:text-xl text-slate-600 ml-2">{pkg.period}</span>
                      </div>
                    </div>

                    <button className={`w-full py-3 px-4 rounded-lg font-semibold transition-colors duration-200 mb-6 ${
                      pkg.name === 'Enterprise Partner'
                        ? 'bg-slate-900 text-white hover:bg-slate-800'
                        : pkg.popular 
                          ? 'bg-blue-600 text-white hover:bg-blue-700' 
                          : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                    }`}>
                      {pkg.name === 'Enterprise Partner' ? 'Discuss Partnership' : 'Get Started'}
                    </button>

                    <div className="flex flex-col flex-grow">
                      {/* Features List */}
                      <div className="pb-4 border-b border-slate-100 mb-4">
                        <h4 className="font-bold text-slate-900 mb-2 text-base">Core Services ({pkg.features.length}):</h4>
                        <ul className="space-y-2 text-sm">
                          {pkg.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-start">
                              <Check className="text-blue-600 mt-1 mr-3 flex-shrink-0" size={16} />
                              <span className="text-slate-700">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      {/* Operational Note (Access & Tooling Fees) */}
                      <div className="mt-auto pt-3 border-t border-red-100">
                         <p className='text-red-600 font-semibold text-xs mb-1'>❗️ Important Note:</p>
                         <p className='text-slate-600 text-xs italic'>{pkg.operationalNote}</p>
                      </div>

                  </div>
                </div>
              </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Add-ons Section */}
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
                Additional Services
              </h2>
              <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                Enhance your marketing package with these specialized services designed to accelerate your growth.
              </p>
            </motion.div>

            {/* ADJUSTED grid for better display of the longer list of add-ons */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"> 
              {addOns.map((addon, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="bg-white p-6 rounded-xl shadow-lg border border-slate-100 hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-lg font-bold text-slate-900">{addon.name}</h3>
                    </div>
                    <p className="text-slate-600 mb-4">{addon.description}</p>
                  </div>
                  <div className='flex justify-between items-center pt-2 border-t border-slate-100'>
                     <span className="text-blue-600 font-extrabold text-lg">{addon.price}</span>
                     <button className="text-blue-600 hover:text-blue-700 font-medium flex items-center text-sm">
                        Learn More
                        <ArrowRight className="ml-1" size={16} />
                     </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                Frequently Asked Questions
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="bg-slate-50 p-6 rounded-xl">
                <h3 className="text-lg font-semibold text-slate-900 mb-3">
                  What's included in the monthly fee?
                </h3>
                <p className="text-slate-600">
                  All packages include strategy development, execution, monitoring, and regular reporting. The fee covers our expert labor and team time.
                </p>
              </div>

              <div className="bg-slate-50 p-6 rounded-xl">
                <h3 className="text-lg font-semibold text-slate-900 mb-3">
                  Are third-party software and advertising costs included?
                </h3>
                <p className="text-slate-600">
                  No. **Our monthly retainer covers our services only.** The cost of advertising spend (PPC/social ads) and subscriptions for third-party tools (SEO software, CRM licenses, heat mapping) are the responsibility of the client and are billed separately.
                </p>
              </div>

              <div className="bg-slate-50 p-6 rounded-xl">
                <h3 className="text-lg font-semibold text-slate-900 mb-3">
                  How quickly will I see results?
                </h3>
                <p className="text-slate-600">
                  Initial improvements are often seen within the first 60 days, especially for paid advertising. Significant, sustained growth from content and SEO strategies typically requires a minimum of 6 months as momentum builds.
                </p>
              </div>

              <div className="bg-slate-50 p-6 rounded-xl">
                <h3 className="text-lg font-semibold text-slate-900 mb-3">
                  What if I need custom services not listed in a package?
                </h3>
                <p className="text-slate-600">
                  Our packages are flexible. We can always create a custom scope of work by blending services or developing a custom Strategic Partner solution tailored specifically to your business goals.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section (REVISED) */}
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
                Schedule a free consultation to discuss which package is right for your business and get a custom strategy recommendation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                {/* The button is replaced with an anchor tag linking to /contact */}
                <a 
                  href="/contact" 
                  className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 inline-flex items-center justify-center"
                >
                  Schedule Free Consultation
                </a>
                {/* The "Contact Sales Team" button has been removed */}
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Pricing;