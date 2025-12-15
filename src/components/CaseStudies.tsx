import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, TrendingUp } from 'lucide-react';

const CaseStudies: React.FC = () => {
  const caseStudies = [
    {
      company: "TechStart Solutions",
      industry: "SaaS",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      problem: "Low organic visibility and poor lead generation",
      strategy: "Comprehensive SEO overhaul + targeted PPC campaigns",
      results: [
        "400% increase in organic traffic",
        "250% boost in qualified leads",
        "180% improvement in conversion rate"
      ]
    },
    {
      company: "Urban Retail Co.",
      industry: "E-commerce",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      problem: "Declining online sales and poor mobile experience",
      strategy: "Complete website redesign + email automation + social media strategy",
      results: [
        "320% increase in online revenue",
        "150% improvement in mobile conversions",
        "200% growth in email subscribers"
      ]
    },
    {
      company: "HealthTech Innovations",
      industry: "Healthcare",
      image: "https://placehold.co/600x400",
      problem: "Complex product messaging and low brand awareness",
      strategy: "Content marketing strategy + LinkedIn advertising + thought leadership",
      results: [
        "500% increase in brand mentions",
        "300% growth in qualified demos",
        "250% improvement in sales cycle"
      ]
    }
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-slate-900 mb-6">
            Success Stories That Speak Volumes
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Real results from real businesses. See how we've helped companies transform their digital presence and accelerate growth.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group cursor-pointer"
            >
              <div className="relative overflow-hidden">
                <img
                  src={study.image}
                  alt={study.company}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
                <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-sm font-medium text-slate-700">
                  {study.industry}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  {study.company}
                </h3>
                
                <div className="space-y-4 mb-6">
                  <div>
                    <h4 className="font-medium text-slate-900 mb-1">Problem:</h4>
                    <p className="text-slate-600 text-sm">{study.problem}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-slate-900 mb-1">Strategy:</h4>
                    <p className="text-slate-600 text-sm">{study.strategy}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-slate-900 mb-2 flex items-center">
                      <TrendingUp size={16} className="mr-1 text-green-600" />
                      Results:
                    </h4>
                    <ul className="space-y-1">
                      {study.results.map((result, resultIndex) => (
                        <li key={resultIndex} className="text-slate-600 text-sm flex items-center">
                          <div className="w-1.5 h-1.5 bg-green-600 rounded-full mr-2"></div>
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <button className="w-full bg-slate-100 text-slate-700 py-3 rounded-lg font-medium hover:bg-blue-600 hover:text-white transition-all duration-200 flex items-center justify-center group">
                  View Full Case Study
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-200" size={16} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;