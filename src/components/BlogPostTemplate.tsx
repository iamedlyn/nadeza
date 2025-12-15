import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { CTABlock3 } from './CTABlocks';
import { motion } from 'framer-motion';
import { Calendar, User, Clock, ArrowLeft, Share2 } from 'lucide-react';

interface BlogPostTemplateProps {
  title: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  heroImage: string;
  content: React.ReactNode;
}

const BlogPostTemplate: React.FC<BlogPostTemplateProps> = ({
  title,
  author,
  date,
  readTime,
  category,
  heroImage,
  content
}) => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="mb-6">
                <button className="flex items-center text-electric-blue hover:text-electric-pink transition-colors duration-200">
                  <ArrowLeft size={20} className="mr-2" />
                  Back to Blog
                </button>
              </div>
              
              <div className="mb-6">
                <span className="bg-electric-blue text-white px-4 py-2 rounded-full text-sm font-medium">
                  {category}
                </span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6">
                {title}
              </h1>
              
              <div className="flex flex-wrap items-center gap-6 text-slate-600 mb-8">
                <div className="flex items-center">
                  <User size={16} className="mr-2" />
                  <span>{author}</span>
                </div>
                <div className="flex items-center">
                  <Calendar size={16} className="mr-2" />
                  <span>{date}</span>
                </div>
                <div className="flex items-center">
                  <Clock size={16} className="mr-2" />
                  <span>{readTime}</span>
                </div>
                <button className="flex items-center hover:text-electric-blue transition-colors duration-200">
                  <Share2 size={16} className="mr-2" />
                  <span>Share</span>
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Hero Image */}
        <section className="mb-12">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <img
                src={heroImage}
                alt={title}
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
                loading="lazy"
              />
            </motion.div>
          </div>
        </section>

        {/* Content */}
        <section className="pb-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="prose prose-lg prose-slate max-w-none"
            >
              {content}
            </motion.div>
          </div>
        </section>

        <CTABlock3 />
      </main>
      <Footer />
    </div>
  );
};

export default BlogPostTemplate;