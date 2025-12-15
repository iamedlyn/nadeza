import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Phone, Calendar } from 'lucide-react';

interface CTABlockProps {
  variant?: 'primary' | 'secondary' | 'tertiary';
  className?: string;
}

export const CTABlock1: React.FC<CTABlockProps> = ({ variant = 'primary', className = '' }) => {
  const bgColor = variant === 'primary' ? 'bg-nadeza-blue' : variant === 'secondary' ? 'bg-nadeza-red' : 'bg-slate-900';
  
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className={`py-20 ${bgColor} text-white ${className}`}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl lg:text-4xl font-bold mb-6">
          Ready to grow your business?
        </h2>
        <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
          Let's create a custom marketing strategy that drives real results for your business.
        </p>
        <a
          href="/contact"
          className="bg-white text-slate-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-200 inline-flex items-center group"
        >
          Book a Free Strategy Call
          <Phone className="ml-2 group-hover:scale-110 transition-transform duration-200" size={20} />
        </a>
      </div>
    </motion.section>
  );
};

export const CTABlock2: React.FC<CTABlockProps> = ({ variant = 'secondary', className = '' }) => {
  const bgColor = variant === 'primary' ? 'bg-nadeza-blue' : variant === 'secondary' ? 'bg-nadeza-red' : 'bg-slate-900';
  
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className={`py-20 ${bgColor} text-white ${className}`}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl lg:text-4xl font-bold mb-6">
          Let's build something amazing together.
        </h2>
        <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
          Partner with Nadeza to transform your digital presence and accelerate growth.
        </p>
        <a
          href="/contact"
          className="bg-white text-slate-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-200 inline-flex items-center group"
        >
          Talk to Nadeza
          <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-200" size={20} />
        </a>
      </div>
    </motion.section>
  );
};

export const CTABlock3: React.FC<CTABlockProps> = ({ variant = 'tertiary', className = '' }) => {
  const bgColor = variant === 'primary' ? 'bg-nadeza-blue' : variant === 'secondary' ? 'bg-nadeza-red' : 'bg-slate-900';
  
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className={`py-20 ${bgColor} text-white ${className}`}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl lg:text-4xl font-bold mb-6">
          Want predictable growth?
        </h2>
        <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
          Get a proven marketing plan that delivers consistent, measurable results.
        </p>
        <a
          href="/contact"
          className="bg-white text-slate-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-200 inline-flex items-center group"
        >
          Start Your Marketing Plan
          <Calendar className="ml-2 group-hover:scale-110 transition-transform duration-200" size={20} />
        </a>
      </div>
    </motion.section>
  );
};