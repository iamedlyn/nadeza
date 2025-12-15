import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';

const Hero: React.FC = () => {
  const heroVideoUrl =
    'https://242510585.fs1.hubspotusercontent-na2.net/hubfs/242510585/nadeza_marketing_agency_hero.mp4';

  return (
    <section className="relative min-h-[80vh] pt-24 sm:pt-28 flex items-center justify-center overflow-hidden">
      {/* Background video (no loop) */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        playsInline
      >
        <source src={heroVideoUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark overlay for contrast */}
      <div className="absolute inset-0 bg-slate-900/50" />

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6"
          >
            Marketing That Drives{' '}
            <span className="text-blue-400">Sustainable Growth</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-slate-200 mb-10 max-w-4xl mx-auto"
          >
            AI can write posts. Automation can send emails. But true marketing
            takes human insight, creativity, and strategy. That&apos;s what we
            bring to every campaign at Nadeza.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href="/contact"
              className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-200 flex items-center justify-center group shadow-lg"
            >
              Book Discovery Call
              <ArrowRight
                className="ml-2 group-hover:translate-x-1 transition-transform duration-200"
                size={20}
              />
            </a>

            <a
              href="/services"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:border-blue-400 hover:text-blue-400 transition-all duration-200 flex items-center justify-center shadow-lg"
            >
              <Play className="mr-2" size={20} />
              See Our Services
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
