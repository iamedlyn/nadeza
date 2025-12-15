import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ContactForm from '../components/ContactForm';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail } from 'lucide-react';

const Contact: React.FC = () => {
  // Update the phone number here to contain only numbers and no special characters
  const rawPhoneNumber = "+1 425 472 4905"; 

  const contactInfo = [
    {
      icon: <MapPin className="text-blue-600" size={24} />,
      title: "Office Location",
      details: [
        "30 N Gould St Ste N", 
        "Sheridan, WY, 82801, USA"
      ]
    },
    {
      icon: <Phone className="text-blue-600" size={24} />,
      title: "Phone",
      // Display the raw number for the contact info section
      details: [rawPhoneNumber]
    },
    {
      icon: <Mail className="text-blue-600" size={24} />,
      title: "Email",
      details: ["hello@nadeza.com", "We respond within 1–2 business days"]
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        {/* Hero Section - UPDATED TO INCLUDE IMAGE */}
        <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6">
                Let's Start Your Growth Journey
              </h1>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-10">
                Ready to transform your digital presence? Get in touch with our team to discuss your goals and discover how we can help accelerate your business growth.
              </p>
              
              {/* Image Insertion */}
              <div className="flex justify-center mt-8">
                <img
                  src="https://242510585.fs1.hubspotusercontent-na2.net/hubfs/242510585/nadeza%20marketing.png"
                  alt="A professional team member smiling and ready to assist you"
                  className="rounded-xl shadow-2xl w-full max-w-2xl h-auto"
                />
              </div>

            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Contact Form (Left Column) */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold text-slate-900 mb-6">
                  Send Us a Message
                </h2>
                <p className="text-slate-600 mb-8">
                  Fill out the form below and we'll get back to you within 1–2 business days with a custom strategy recommendation for your business.
                </p>
                <div className="bg-slate-50 p-8 rounded-2xl">
                  {/* The HubSpot form renders here */}
                  <ContactForm />
                </div>
              </motion.div>

              {/* Contact Information (Right Column) */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold text-slate-900 mb-6">
                  Get in Touch
                </h2>
                <p className="text-slate-600 mb-8">
                  Prefer to talk directly? We're here to help. Reach out through any of these channels and let's discuss how we can help grow your business.
                </p>

                <div className="space-y-8">
                  {contactInfo.map((info, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-start space-x-4"
                    >
                      <div className="flex-shrink-0 p-3 bg-blue-50 rounded-lg">
                        {info.icon}
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-slate-900 mb-2">
                          {info.title}
                        </h3>
                        {info.details.map((detail, detailIndex) => (
                          <p key={detailIndex} className="text-slate-600">
                            {detail}
                          </p>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                Common Questions
              </h2>
              <p className="text-xl text-slate-600">
                Quick answers to questions you might have before reaching out.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="bg-slate-50 p-6 rounded-xl">
                <h3 className="text-lg font-semibold text-slate-900 mb-3">
                  How quickly do you respond to inquiries?
                </h3>
                <p className="text-slate-600">
                  We typically respond to all inquiries within 1–2 business days. For urgent matters, you can call us directly and we'll do our best to get back to you as soon as possible.
                </p>
              </div>

              <div className="bg-slate-50 p-6 rounded-xl">
                <h3 className="text-lg font-semibold text-slate-900 mb-3">
                  Do you offer free consultations?
                </h3>
                <p className="text-slate-600">
                  Yes! We offer a complimentary 30-minute strategy consultation where we'll review your current marketing efforts and provide actionable recommendations.
                </p>
              </div>

              <div className="bg-slate-50 p-6 rounded-xl">
                <h3 className="text-lg font-semibold text-slate-900 mb-3">
                  What information should I prepare for our call?
                </h3>
                <p className="text-slate-600">
                  Come prepared with your business goals, current marketing challenges, target audience information, and any specific questions about our services. We'll handle the rest!
                </p>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
