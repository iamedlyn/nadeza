import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { CTABlock2 } from '../../components/CTABlocks';
import { motion } from 'framer-motion';
import { FileText, Calendar, User, ArrowRight, Tag } from 'lucide-react';

const Blog: React.FC = () => {
  const blogPosts = [
    {
      id: 1,
      title: "10 Digital Marketing Trends That Will Dominate 2024",
      excerpt: "Discover the latest trends shaping the digital marketing landscape and how to leverage them for your business growth.",
      author: "Lyn Tobias",
      date: "March 15, 2024",
      category: "Digital Marketing",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      readTime: "8 min read"
    },
    {
      id: 2,
      title: "The Complete Guide to B2B Lead Generation",
      excerpt: "Learn proven strategies to generate high-quality leads for your B2B business and convert them into paying customers.",
      author: "Marketing Team",
      date: "March 12, 2024",
      category: "Lead Generation",
      image: "https://images.unsplash.com/photo-1553484771-371a605b060b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      readTime: "12 min read"
    },
    {
      id: 3,
      title: "How AI is Transforming Content Marketing",
      excerpt: "Explore how artificial intelligence is revolutionizing content creation, personalization, and marketing automation.",
      author: "Lyn Tobias",
      date: "March 10, 2024",
      category: "AI & Automation",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      readTime: "10 min read"
    },
    {
      id: 4,
      title: "SEO Best Practices for 2024: What's Changed",
      excerpt: "Stay ahead of the curve with the latest SEO strategies and algorithm updates that impact your search rankings.",
      author: "Marketing Team",
      date: "March 8, 2024",
      category: "SEO",
      image: "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      readTime: "15 min read"
    },
    {
      id: 5,
      title: "Building a High-Converting Landing Page",
      excerpt: "Master the art of landing page optimization with proven techniques that boost conversions and drive results.",
      author: "Lyn Tobias",
      date: "March 5, 2024",
      category: "Conversion Optimization",
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      readTime: "7 min read"
    },
    {
      id: 6,
      title: "Email Marketing Automation: A Complete Guide",
      excerpt: "Set up powerful email automation sequences that nurture leads and drive revenue while you sleep.",
      author: "Marketing Team",
      date: "March 3, 2024",
      category: "Email Marketing",
      image: "https://images.unsplash.com/photo-1596526131083-e8c633c948d2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      readTime: "11 min read"
    }
  ];

  const categories = [
    "All Posts",
    "Digital Marketing",
    "Lead Generation", 
    "SEO",
    "Content Marketing",
    "Email Marketing",
    "AI & Automation",
    "Conversion Optimization"
  ];

  const [selectedCategory, setSelectedCategory] = React.useState("All Posts");

  const filteredPosts = selectedCategory === "All Posts" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

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
              <div className="flex justify-center mb-6">
                <FileText className="text-electric-blue" size={64} />
              </div>
              <h1 className="text-4xl sm:text-6xl font-bold text-slate-900 mb-6">
                Marketing Insights Blog
              </h1>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
                Stay ahead of the curve with expert insights, proven strategies, and the latest trends in digital marketing. Learn from our experience helping businesses grow.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-12 bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${
                    selectedCategory === category
                      ? 'bg-electric-blue text-white'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group cursor-pointer"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-slate-700">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center text-sm text-slate-500 mb-3">
                      <User size={14} className="mr-1" />
                      <span className="mr-4">{post.author}</span>
                      <Calendar size={14} className="mr-1" />
                      <span className="mr-4">{post.date}</span>
                      <span>{post.readTime}</span>
                    </div>
                    
                    <h2 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-electric-blue transition-colors duration-200">
                      {post.title}
                    </h2>
                    
                    <p className="text-slate-600 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-electric-blue font-medium group-hover:text-electric-pink transition-colors duration-200">
                        <span className="mr-2">Read More</span>
                        <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-200" />
                      </div>
                      <Tag size={16} className="text-slate-400" />
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>

            {/* Load More Button */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-center mt-12"
            >
              <button className="bg-slate-100 text-slate-700 px-8 py-3 rounded-lg font-semibold hover:bg-slate-200 transition-colors duration-200">
                Load More Posts
              </button>
            </motion.div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                Never Miss an Update
              </h2>
              <p className="text-xl text-slate-600 mb-8">
                Subscribe to our newsletter and get the latest marketing insights delivered to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-electric-blue focus:border-transparent"
                />
                <button className="bg-electric-blue text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200">
                  Subscribe
                </button>
              </div>
              <p className="text-sm text-slate-500 mt-4">
                No spam, unsubscribe at any time.
              </p>
            </motion.div>
          </div>
        </section>

        <CTABlock2 />
      </main>
      <Footer />
    </div>
  );
};

export default Blog;