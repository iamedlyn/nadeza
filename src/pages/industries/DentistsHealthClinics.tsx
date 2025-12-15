import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { CTABlock2 } from '../../components/CTABlocks';
import { motion } from 'framer-motion';
import { Smile } from 'lucide-react';

const DentistsHealthClinics: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        {/* Hero */}
        <section className="py-20 bg-gradient-to-br from-emerald-50 to-teal-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <div className="flex justify-center mb-6">
                <Smile className="text-emerald-600" size={64} />
              </div>
              <h1 className="text-4xl sm:text-6xl font-bold text-slate-900 mb-6">
                Dentists & Health Clinics
              </h1>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
                Local marketing that keeps your appointment book healthy and your patients
                coming back.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Content */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Overview</h2>
            <p className="text-lg text-slate-600 mb-8">
              Patients compare clinics the same way they compare hotels and restaurants —
              by reviews, convenience, and clarity of information. We help dental practices
              and health clinics build friendly, informative digital experiences that make
              it easy to choose you and book.
            </p>

            <h3 className="text-2xl font-bold text-slate-900 mb-4">Key Challenges</h3>
            <ul className="space-y-2 mb-8">
              <li className="flex items-center"><span className="w-2 h-2 bg-emerald-600 rounded-full mr-3" />Standing out among nearby competitors</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-emerald-600 rounded-full mr-3" />Communicating services, pricing, and availability clearly</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-emerald-600 rounded-full mr-3" />Reducing no-shows and improving recall</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-emerald-600 rounded-full mr-3" />Managing reviews and online reputation</li>
            </ul>

            <h3 className="text-2xl font-bold text-slate-900 mb-4">How Nadeza Helps</h3>
            <p className="text-lg text-slate-600 mb-6">
              We focus on local visibility, patient experience, and consistent communication
              so your clinic feels organized, welcoming, and easy to work with.
            </p>
            <ul className="space-y-2">
              <li className="flex items-center"><span className="w-2 h-2 bg-emerald-600 rounded-full mr-3" />Clinic websites with clear services, FAQs, and booking options</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-emerald-600 rounded-full mr-3" />Local SEO and optimized Google Business Profiles</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-emerald-600 rounded-full mr-3" />Campaigns for key services (check-ups, orthodontics, screenings, etc.)</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-emerald-600 rounded-full mr-3" />Email/SMS reminders and recall workflows</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-emerald-600 rounded-full mr-3" />Reporting on calls, forms, bookings, and campaign ROI</li>
            </ul>
          </div>
        </section>

        <CTABlock2 />
      </main>
      <Footer />
    </div>
  );
};

export default DentistsHealthClinics;
