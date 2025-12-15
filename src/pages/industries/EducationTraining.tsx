import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { CTABlock2 } from '../../components/CTABlocks';
import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';

const EducationTraining: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        {/* Hero */}
        <section className="py-20 bg-gradient-to-br from-sky-50 to-indigo-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <div className="flex justify-center mb-6">
                <GraduationCap className="text-indigo-600" size={64} />
              </div>
              <h1 className="text-4xl sm:text-6xl font-bold text-slate-900 mb-6">
                Education & Training
              </h1>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
                Marketing that turns curious learners into enrolled students — for schools,
                academies, bootcamps, and training providers.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Content */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Overview</h2>
            <p className="text-lg text-slate-600 mb-8">
              From short courses and bootcamps to full-time programs, your challenge is the
              same: attract the right learners and clearly communicate the outcomes. We help
              education and training providers build enrolment-focused websites and campaigns
              that highlight value, structure, and career impact.
            </p>

            <h3 className="text-2xl font-bold text-slate-900 mb-4">Key Challenges</h3>
            <ul className="space-y-2 mb-8">
              <li className="flex items-center"><span className="w-2 h-2 bg-indigo-600 rounded-full mr-3" />Standing out in a crowded education market</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-indigo-600 rounded-full mr-3" />Explaining curriculum, outcomes, and logistics clearly</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-indigo-600 rounded-full mr-3" />Tracking enquiries from first click to enrolment</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-indigo-600 rounded-full mr-3" />Managing intake-specific campaigns and budgets</li>
            </ul>

            <h3 className="text-2xl font-bold text-slate-900 mb-4">How Nadeza Helps</h3>
            <p className="text-lg text-slate-600 mb-6">
              We design learner journeys that guide prospects from discovery to registration,
              and keep them engaged before and after the start date.
            </p>
            <ul className="space-y-2">
              <li className="flex items-center"><span className="w-2 h-2 bg-indigo-600 rounded-full mr-3" />Program and course pages optimized for enquiries and applications</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-indigo-600 rounded-full mr-3" />SEO for course topics, certifications, and locations</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-indigo-600 rounded-full mr-3" />Campaigns for intakes, open days, and webinars</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-indigo-600 rounded-full mr-3" />Email nurture sequences for enquiries and accepted students</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-indigo-600 rounded-full mr-3" />Analytics reporting enrolments, cost per student, and channel ROI</li>
            </ul>
          </div>
        </section>

        <CTABlock2 />
      </main>
      <Footer />
    </div>
  );
};

export default EducationTraining;
