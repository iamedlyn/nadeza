import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { motion } from 'framer-motion';
import { Briefcase, Heart, Users, TrendingUp, Mail } from 'lucide-react';

const Careers: React.FC = () => {
  const values = [
    {
      icon: <Heart className="text-electric-pink" size={32} />,
      title: 'People, Life, and Work',
      description:
        'We understand real life: school runs, aging parents, time zones, and unexpected responsibilities. We care about the human behind the screen, not just the output.'
    },
    {
      icon: <Users className="text-electric-blue" size={32} />,
      title: 'Collaborative and Respectful',
      description:
        'We value clear, kind, and professional communication. We work together to solve problems and support each other in doing our best work.'
    },
    {
      icon: <TrendingUp className="text-green-600" size={32} />,
      title: 'Get It Done, Get It Done Well',
      description:
        'We care about quality, reliability, and ownership. If you pride yourself on doing things properly, you will thrive here.'
    }
  ];

  const benefits = [
    'Remote-first: work from home or anywhere',
    'Flexible schedule around family or personal commitments',
    'Outcome-based culture: we care about results, not hours',
    'Project-based or part-time roles available as we grow',
    'Opportunities to learn modern marketing tools and AI',
    'Direct impact: your work is visible, valued, and meaningful',
    'Small team with room to shape how we work together'
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">

        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <div className="flex justify-center mb-6">
                <Briefcase className="text-electric-blue" size={64} />
              </div>

              <h1 className="text-4xl sm:text-6xl font-bold text-slate-900 mb-6">
                Careers at Nadeza
              </h1>

              {/* Added Careers Banner Image */}
              <div className="flex justify-center mb-10">
                <img
                  src="https://242510585.fs1.hubspotusercontent-na2.net/hubfs/242510585/Careers_Nadeza.png?width=860&t=1764764347411"
                  alt="Careers at Nadeza"
                  className="rounded-xl shadow-lg w-full max-w-3xl h-auto"
                  loading="lazy"
                />
              </div>

              <p className="text-xl text-slate-600 max-w-4xl mx-auto mb-4 leading-relaxed">
                We are a small but growing marketing company built for people who value flexibility,
                autonomy, and the ability to work from anywhere.
              </p>
              <p className="text-lg text-slate-600 max-w-4xl mx-auto leading-relaxed">
                Whether you're a parent, caregiver, freelancer, or simply someone who needs a work
                environment that respects your time and energy — Nadeza is designed for you.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Culture & Values */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Our Culture & Values</h2>
              <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                We keep things simple: respect each other, communicate clearly, and deliver excellent work.
                No bureaucracy. No micromanagement.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="text-center p-8 bg-slate-50 rounded-xl"
                >
                  <div className="mb-6 flex justify-center">{value.icon}</div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-4">{value.title}</h3>
                  <p className="text-slate-600">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold text-slate-900 mb-6">Benefits & Perks</h2>
                <p className="text-lg text-slate-600 mb-4">
                  We’re not a big agency — and we're not trying to be. We don’t offer corporate-style perks,
                  but we offer something far more meaningful:
                </p>
                <p className="text-lg text-slate-600 mb-8">
                  <strong>Freedom, flexibility, and work that respects your real life.</strong>
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-electric-blue rounded-full flex-shrink-0"></div>
                      <span className="text-slate-700">{benefit}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-xl shadow-lg"
              >
                <h3 className="text-xl font-semibold text-slate-900 mb-6">Why Join Nadeza?</h3>
                <div className="space-y-4">
                  <p className="text-slate-600">
                    <strong>Flexible first:</strong> Ideal for parents, caregivers, and anyone who needs balance.
                  </p>
                  <p className="text-slate-600">
                    <strong>Remote always:</strong> Work from home or wherever you feel the most productive.
                  </p>
                  <p className="text-slate-600">
                    <strong>Skill-building:</strong> Hands-on experience with modern tools, AI, and real-world digital strategy.
                  </p>
                  <p className="text-slate-600">
                    <strong>Impact:</strong> Small team means your work actually matters and is seen.
                  </p>
                </div>
              </motion.div>

            </div>
          </div>
        </section>

        {/* No Open Positions */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Current Openings</h2>

              <div className="bg-slate-50 p-12 rounded-xl max-w-2xl mx-auto">
                <div className="mb-6">
                  <Mail className="text-slate-400 mx-auto" size={48} />
                </div>

                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  No Open Positions at This Time
                </h3>

                <p className="text-slate-600 mb-8">
                  We're not hiring yet — but we always love connecting with thoughtful, reliable people who resonate with our culture.
                </p>

                <div className="space-y-4">
                  <p className="text-slate-600">
                    If you'd like to be considered for future roles, feel free to send us your resume.
                  </p>

                  <a href="mailto:careers@nadeza.com" className="inline-block">
                    <button className="bg-electric-blue text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200">
                      Send Us Your Resume
                    </button>
                  </a>
                </div>

              </div>
            </motion.div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
};

export default Careers;
