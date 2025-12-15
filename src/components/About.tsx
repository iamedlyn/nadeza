import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, TrendingUp, Clock } from 'lucide-react';

const About: React.FC = () => {
  const stats = [
    { icon: <Award size={32} />, number: "15+", label: "Years in Digital Marketing" },
    { icon: <Users size={32} />, number: "200+", label: "Brands & Businesses Supported" },
    { icon: <TrendingUp size={32} />, number: "300%", label: "Average Lift in Key KPIs" },
    { icon: <Clock size={32} />, number: "Across Time Zones", label: "Global Support Coverage" }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-slate-900 mb-6">
              Intent-Focused Digital Marketing, Built on 15+ Years of Experience
            </h2>

            <p className="text-xl text-slate-600 mb-4">
              Nadeza is a digital marketing and web development partner for businesses that
              care about <span className="font-semibold">measurable growth</span>—not vanity metrics. 
              We combine performance marketing, intent-driven SEO, conversion-focused websites, 
              and marketing automation to help you turn traffic into pipeline and revenue.
            </p>

            <p className="text-lg text-slate-600 mb-6">
              Our approach starts with understanding search and buyer intent: what your ideal
              customers are trying to solve, not just the keywords they type. From there, we 
              design campaigns, content, and landing pages that speak to real problems and move 
              people from “just looking” to “ready to talk.”
            </p>

            <p className="text-lg text-slate-600 mb-8">
              We use AI tools to speed up research, generate strong first drafts, and uncover
              patterns in your data—but strategy, positioning, and prioritization are always 
              human-led. AI can create a good overview; Nadeza turns that into a focused game plan 
              and executes it across SEO, paid media, email, and your website.
            </p>
            
            {/* Founder Bio */}
            <div className="bg-slate-50 p-6 rounded-xl mb-8">
              <div className="flex items-start space-x-4">
                <img
                  src="https://placehold.co/150x400"
                  alt="Lyn Tobias"
                  className="w-16 h-16 rounded-full object-cover"
                  loading="lazy"
                />
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">
                    Lyn Tobias — Founder & Digital Growth Strategist
                  </h3>
                  <p className="text-slate-600 mb-2">
                    Lyn has over 15 years of experience across B2B, B2C, SaaS, healthcare, and
                    e-commerce. She has led digital transformation projects, built and relaunched
                    global e-commerce sites, and managed full-funnel marketing—from SEO and PPC to
                    email automation and analytics.
                  </p>
                  <p className="text-slate-600">
                    Having worked with both lean startups and large international teams, Lyn
                    understands the reality behind “just do more marketing.” Nadeza was created
                    to give businesses flexible access to senior-level strategy and hands-on
                    execution—without needing a full in-house department.
                  </p>
                </div>
              </div>
            </div>

            <a
              href="/contact"
              className="bg-nadeza-blue text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 inline-block"
            >
              Talk to Us About Your Growth Goals
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 bg-slate-50 rounded-xl hover:shadow-lg transition-shadow duration-300"
              >
                <div className="text-nadeza-blue mb-4 flex justify-center">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-slate-900 mb-2">
                  {stat.number}
                </div>
                <div className="text-slate-600 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
