import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import { TrendingUp, ArrowRight, Calendar, Tag, ExternalLink } from 'lucide-react';

// Define the structure for a single Case Study item
interface CaseStudyItem {
  id: number;
  company: string;
  industry: string;
  duration: string;
  website: string;
  image: string;
  challenge: string;
  strategy: string;
  results: { metric: string; increase: string; description: string }[];
  services: string[];
  testimonial?: { quote: string; author: string; position: string };
}

const ALL_CASE_STUDIES: CaseStudyItem[] = [
  {
    id: 1,
    company: "Alternative Exchange",
    industry: "Financial Technology",
    duration: "8 months",
    website: "https://altix.exchange/en-us/",
    image: "https://242510585.fs1.hubspotusercontent-na2.net/hubfs/242510585/Altix-exchange.png?width=860&t=1763650414431&auto=format&fit=crop&w=800&q=80",
    challenge: "Alternative Exchange needed a complete digital presence overhaul to establish credibility in the competitive fintech space. They required a professional website that could effectively communicate their alternative investment platform while building trust with potential investors and partners.",
    strategy: "We executed a comprehensive digital transformation including custom website development, technical SEO implementation, Google Analytics 4 setup with advanced tracking, conversion optimization, and ongoing performance monitoring. Our approach focused on creating a user-friendly experience that converts visitors into qualified leads.",
    results: [
      { metric: "Website Performance", increase: "300%", description: "Page load speed improved significantly with optimized architecture" },
      { metric: "User Engagement", increase: "250%", description: "Average session duration and page views per session increased" },
      { metric: "Search Visibility", increase: "400%", description: "Organic search rankings improved for key financial terms" },
      { metric: "Conversion Rate", increase: "180%", description: "Lead generation forms and contact inquiries increased substantially" }
    ],
    services: [
      "Custom Website Development",
      "Technical SEO Implementation", 
      "Google Analytics 4 Setup",
      "Conversion Rate Optimization",
      "Performance Monitoring",
      "User Experience Design"
    ],
    testimonial: {
      quote: "Nadeza transformed our entire digital presence. The new website not only looks professional but performs exceptionally well. The analytics setup gives us insights we never had before.",
      author: "Alternative Exchange Team",
      position: "Leadership Team"
    }
  },
  {
    id: 2,
    company: "Metabull.ai",
    industry: "AI & Software Development",
    duration: "3 months",
    website: "#", // Placeholder since you didn't provide a URL
    image: "https://242510585.fs1.hubspotusercontent-na2.net/hubfs/242510585/metabull-ai-website.png?width=860&t=1763650216317&auto=format&fit=crop&w=800&q=80", // Placeholder Image
    challenge: "Metabull.ai needed a stunning, high-performance website to launch their new AI platform on a tight deadline. They required rapid prototyping and a ready-to-deploy code solution.",
    strategy: "We managed the end-to-end design and development process, including a complete website redesign, rapid prototype creation to finalize the UX/UI, and delivery of production-ready script/code. This allowed their internal team to meet their scheduled launch date with a professional digital presence.",
    results: [
      { metric: "Design Quality", increase: "100%", description: "Achieved a premium, modern design aligning with AI brand standards" },
      { metric: "Time to Market", increase: "0 Days", description: "Delivered prototype and code on time for a successful launch" },
      { metric: "Launch Readiness", increase: "High", description: "Provided clean, commented code for immediate deployment" },
      { metric: "Design Finalization", increase: "Rapid", description: "Fast iteration cycle thanks to prototype delivery" }
    ],
    services: [
      "Website Redesign",
      "Interactive Prototype Development", 
      "Production-Ready Code Delivery",
      "Launch Consultation",
    ],
  }
];

const CaseStudies: React.FC = () => {
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
                Our Success Stories
              </h1>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                See how we helped our clients transform their digital presence and achieve remarkable growth across various industries.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Case Studies List - Now iterating over all case studies */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
            {ALL_CASE_STUDIES.map((study, index) => (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true, amount: 0.2 }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${index % 2 !== 0 ? 'lg:grid-flow-col-dense' : ''}`}
              >
                {/* Image */}
                <div className={`relative ${index % 2 !== 0 ? 'lg:col-start-2' : ''}`}>
                  <img
                    src={study.image}
                    alt={study.company}
                    className="rounded-2xl shadow-2xl w-full h-auto"
                    loading="lazy"
                  />
                  <div className="absolute top-4 right-4 bg-white px-4 py-2 rounded-full shadow-lg">
                    <div className="flex items-center space-x-2">
                      <Tag size={16} className="text-slate-600" />
                      <span className="text-sm font-medium text-slate-700">{study.industry}</span>
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-4 bg-white px-4 py-2 rounded-full shadow-lg">
                    <a 
                      href={study.website} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 transition-colors duration-200"
                    >
                      <ExternalLink size={16} />
                      <span className="text-sm font-medium">Visit Site</span>
                    </a>
                  </div>
                </div>

                {/* Content */}
                <div className={index % 2 !== 0 ? 'lg:col-start-1 lg:row-start-1' : ''}>
                  <div className="flex items-center space-x-4 mb-6">
                    <h2 className="text-3xl font-bold text-slate-900">{study.company}</h2>
                    <div className="flex items-center text-slate-600">
                      <Calendar size={16} className="mr-1" />
                      <span className="text-sm">{study.duration}</span>
                    </div>
                  </div>

                  {/* Challenge */}
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold text-slate-900 mb-3">The Challenge</h3>
                    <p className="text-slate-600">{study.challenge}</p>
                  </div>

                  {/* Strategy */}
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold text-slate-900 mb-3">Our Strategy</h3>
                    <p className="text-slate-600 mb-4">{study.strategy}</p>
                    
                    {/* Services Provided */}
                    <div className="mb-4">
                      <h4 className="font-semibold text-slate-900 mb-2">Services Provided:</h4>
                      <div className="flex flex-wrap gap-2">
                        {study.services.map((service, serviceIndex) => (
                          <span
                            key={serviceIndex}
                            className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium"
                          >
                            {service}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Results */}
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold text-slate-900 mb-4 flex items-center">
                      <TrendingUp className="mr-2 text-green-600" size={20} />
                      Results Achieved
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {study.results.map((result, resultIndex) => (
                        <div key={resultIndex} className="bg-slate-50 p-4 rounded-lg">
                          <div className="text-2xl font-bold text-green-600 mb-1">
                            +{result.increase}
                          </div>
                          <div className="font-semibold text-slate-900 mb-1">
                            {result.metric}
                          </div>
                          <div className="text-sm text-slate-600">
                            {result.description}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Testimonial (Optional) */}
                  {study.testimonial && (
                    <div className="bg-blue-50 p-6 rounded-xl mb-6">
                      <blockquote className="text-slate-700 italic mb-4">
                        "{study.testimonial.quote}"
                      </blockquote>
                      <div className="flex items-center">
                        <div>
                          <div className="font-semibold text-slate-900">
                            {study.testimonial.author}
                          </div>
                          <div className="text-sm text-slate-600">
                            {study.testimonial.position}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 flex items-center">
                    View Full Case Study
                    <ArrowRight className="ml-2" size={16} />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* More Case Studies Coming Soon */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                More Success Stories Coming Soon
              </h2>
              <p className="text-xl text-slate-600 mb-8">
                We're working with amazing clients across various industries. Check back soon for more detailed case studies showcasing our results.
              </p>
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  Want to be our next success story?
                </h3>
                <p className="text-slate-600 mb-6">
                  Let's discuss how we can create similar results for your business with a custom digital marketing strategy.
                </p>
                <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200">
                  Start Your Success Story
                </button>
              </div>
            </motion.div>
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
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-slate-300 mb-8">
                Let's create a success story for your business with proven digital marketing strategies.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200">
                  Book a Strategy Call
                </button>
                <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-slate-900 transition-all duration-200">
                  View Our Services
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

export default CaseStudies;