import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { CTABlock2 } from '../../components/CTABlocks';
import { motion } from 'framer-motion';
import { ShoppingBag } from 'lucide-react';

const EcommerceRetail: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        {/* Hero */}
        <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <div className="flex justify-center mb-6">
                <ShoppingBag className="text-blue-600" size={64} />
              </div>
              <h1 className="text-4xl sm:text-6xl font-bold text-slate-900 mb-6">
                E-Commerce & Retail
              </h1>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
                Data-driven marketing and conversion-focused experiences for online stores
                and retail brands that want more than just traffic — they want buyers.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Content */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Overview</h2>
            <p className="text-lg text-slate-600 mb-8">
              Selling online is more than launching a pretty storefront. You’re juggling ad
              spend, inventory, abandoned carts, marketplace fees, and customers who expect
              fast delivery and five-star experiences. We help e-commerce and retail brands
              turn visitors into customers with conversion-focused websites and performance
              marketing that’s tied to real revenue — not just clicks.
            </p>

            <h3 className="text-2xl font-bold text-slate-900 mb-4">Key Challenges</h3>
            <ul className="space-y-2 mb-8">
              <li className="flex items-center"><span className="w-2 h-2 bg-blue-600 rounded-full mr-3" />Rising ad costs and shrinking margins</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-blue-600 rounded-full mr-3" />High cart abandonment and low conversion rates</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-blue-600 rounded-full mr-3" />Over-reliance on marketplaces and third-party platforms</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-blue-600 rounded-full mr-3" />Difficult attribution across paid, email, and organic channels</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-blue-600 rounded-full mr-3" />Limited visibility into product performance and LTV</li>
            </ul>

            <h3 className="text-2xl font-bold text-slate-900 mb-4">How Nadeza Helps</h3>
            <p className="text-lg text-slate-600 mb-6">
              We help brands at every stage — from new Shopify stores to established
              multi-channel retailers. Our blend of UX, performance marketing, and automation
              gives you full visibility and scalable results.
            </p>

            <ul className="space-y-2">
              <li className="flex items-center"><span className="w-2 h-2 bg-blue-600 rounded-full mr-3" />Conversion-optimized Shopify, WooCommerce & custom stores</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-blue-600 rounded-full mr-3" />Product & category page optimization to increase AOV & CVR</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-blue-600 rounded-full mr-3" />Google Shopping, Meta & TikTok campaigns focused on ROAS</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-blue-600 rounded-full mr-3" />Cart recovery, upsell & win-back email automation</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-blue-600 rounded-full mr-3" />Dashboards tracking revenue by channel, product & campaign</li>
            </ul>
          </div>
        </section>

        <CTABlock2 />
      </main>
      <Footer />
    </div>
  );
};

export default EcommerceRetail;
