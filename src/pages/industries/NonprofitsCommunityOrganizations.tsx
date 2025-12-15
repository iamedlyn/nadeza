import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { CTABlock2 } from '../../components/CTABlocks';
import { motion } from 'framer-motion';
import { Users } from 'lucide-react';

const NonprofitsCommunityOrganizations: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        {/* Hero */}
        <section className="py-20 bg-gradient-to-br from-purple-50 to-violet-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <div className="flex justify-center mb-6">
                <Users className="text-violet-600" size={64} />
              </div>
              <h1 className="text-4xl sm:text-6xl font-bold text-slate-900 mb-6">
                Nonprofits & Community Organizations
              </h1>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
                Purpose-driven digital marketing that helps you reach supporters, raise
                funds, and mobilize your community.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Content */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Overview</h2>
            <p className="text-lg text-slate-600 mb-8">
              For nonprofits and community organizations, every dollar and volunteer hour
              matters. We help you clarify your message, show your impact, and make it easy
              for people to donate, sign up, or participate — even with a small team and
              limited budget.
            </p>

            <h3 className="text-2xl font-bold text-slate-900 mb-4">Key Challenges</h3>
            <ul className="space-y-2 mb-8">
              <li className="flex items-center"><span className="w-2 h-2 bg-violet-600 rounded-full mr-3" />Limited resources and time for marketing</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-violet-600 rounded-full mr-3" />Explaining your mission quickly and clearly</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-violet-600 rounded-full mr-3" />Engaging donors, volunteers, and beneficiaries at once</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-violet-600 rounded-full mr-3" />Tracking which campaigns actually move the needle</li>
            </ul>

            <h3 className="text-2xl font-bold text-slate-900 mb-4">How Nadeza Helps</h3>
            <p className="text-lg text-slate-600 mb-6">
              We focus on simple, high-impact steps that make your digital presence work
              harder — without overwhelming your team.
            </p>
            <ul className="space-y-2">
              <li className="flex items-center"><span className="w-2 h-2 bg-violet-600 rounded-full mr-3" />Mission-driven websites with clear paths to donate, join, or participate</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-violet-600 rounded-full mr-3" />Story-based content that highlights real people and impact</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-violet-600 rounded-full mr-3" />Email newsletters and supporter journeys that keep people engaged</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-violet-600 rounded-full mr-3" />Campaigns for fundraising, events, and awareness days</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-violet-600 rounded-full mr-3" />Analytics that focus on actions taken, not just impressions</li>
            </ul>
          </div>
        </section>

        <CTABlock2 />
      </main>
      <Footer />
    </div>
  );
};

export default NonprofitsCommunityOrganizations;
