import React from 'react';
import { motion } from 'framer-motion';
import { AlertCircle, TrendingDown, Zap, Target } from 'lucide-react';

const Problem: React.FC = () => {
  const problems = [
    {
      icon: <AlertCircle className="text-red-500" size={32} />,
      title: "Lack of Online Presence",
      description: "Small businesses struggle to establish credible digital footprints that attract customers."
    },
    {
      icon: <TrendingDown className="text-orange-500" size={32} />,
      title: "Marketing Tool Confusion",
      description: "Endless platforms and strategies create paralysis instead of progress for growing brands."
    },
    {
      icon: <Zap className="text-yellow-500" size={32} />,
      title: "Fractional Marketing Needs",
      description: "Big brands need flexible, expert marketing support without full-time overhead costs."
    },
    {
      icon: <Target className="text-purple-500" size={32} />,
      title: "Complex Analytics Management",
      description: "Difficulty managing SEO, ads, content, customer experience, and performance tracking."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            Businesses struggle to navigate endless marketing tools and trends
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            The digital landscape is overwhelming. Companies waste time and money on scattered efforts instead of strategic growth.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-slate-50 p-6 rounded-xl hover:shadow-lg transition-shadow duration-300"
            >
              <div className="mb-4">{problem.icon}</div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">
                {problem.title}
              </h3>
              <p className="text-slate-600">
                {problem.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Problem;