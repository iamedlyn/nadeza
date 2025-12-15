import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { motion } from 'framer-motion';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      <Header />
      <main className="pt-24 pb-20">
        {/* Hero */}
        <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-16 mb-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <h1 className="text-3xl sm:text-4xl font-bold mb-4">
                Privacy Policy
              </h1>
              <p className="text-slate-200 text-sm mb-4">
                Last Updated: [December 01, 2025]
              </p>
              <p className="text-slate-200">
                Nadeza Marketing (“Nadeza,” “we,” “our,” or “us”) is committed to
                protecting your privacy. This Privacy Policy explains how we
                collect, use, disclose, and safeguard your information when you
                visit our website or work with us.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Content */}
        <section>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 text-slate-800">
            <section>
              <h2 className="text-xl font-semibold mb-3">1. Information We Collect</h2>
              <p className="mb-3">
                We collect information to provide our services, improve performance, and
                communicate with you effectively.
              </p>
              <h3 className="font-semibold mb-2">A. Information You Provide</h3>
              <p className="mb-3">
                When you contact us, request a consultation, download content, or work with
                us, you may provide:
              </p>
              <ul className="list-disc list-inside space-y-1 mb-4">
                <li>Name</li>
                <li>Email address</li>
                <li>Phone number</li>
                <li>Company name and role</li>
                <li>Project details or business goals</li>
              </ul>

              <h3 className="font-semibold mb-2">B. Information Collected Automatically</h3>
              <p className="mb-3">
                When you visit our website, we may automatically collect:
              </p>
              <ul className="list-disc list-inside space-y-1 mb-4">
                <li>IP address and approximate location</li>
                <li>Browser type, device type, and operating system</li>
                <li>Pages visited and time spent on those pages</li>
                <li>Referring URLs and general usage patterns</li>
              </ul>

              <h3 className="font-semibold mb-2">C. Analytics & Marketing Data</h3>
              <p>
                We may use tools like Google Analytics, HubSpot, and other platforms to
                understand how users interact with our website and campaigns, including
                email opens, clicks, and form submissions.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">2. How We Use Your Information</h2>
              <p className="mb-3">We use your information to:</p>
              <ul className="list-disc list-inside space-y-1">
                <li>Provide, operate, and improve our services</li>
                <li>Respond to inquiries and consultation requests</li>
                <li>Send relevant updates, newsletters, or marketing communications (where permitted)</li>
                <li>Analyze website usage and campaign performance</li>
                <li>Improve user experience, content, and offerings</li>
                <li>Maintain security and prevent fraud or abuse</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">3. How We Share Information</h2>
              <p className="mb-3">
                We do not sell your personal information. We may share data with:
              </p>
              <ul className="list-disc list-inside space-y-1 mb-3">
                <li>Trusted service providers (hosting, analytics, CRM, email platforms)</li>
                <li>Professional advisors (legal, accounting) when necessary</li>
                <li>
                  Authorities, if required by law or to protect our rights, property, or users
                </li>
              </ul>
              <p>
                All partners who process data on our behalf are expected to protect your
                information and use it only as instructed.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">4. Cookies & Tracking</h2>
              <p className="mb-3">
                We use cookies and similar technologies to improve functionality, analyze
                performance, and support marketing efforts. For more details, see our{' '}
                <a href="/legal/cookies" className="text-nadeza-blue hover:underline">
                  Cookie Policy
                </a>.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">5. Your Rights</h2>
              <p className="mb-3">
                Depending on your location, you may have rights to:
              </p>
              <ul className="list-disc list-inside space-y-1 mb-3">
                <li>Access the personal data we hold about you</li>
                <li>Request correction or deletion of your data</li>
                <li>Object to or restrict certain processing</li>
                <li>Opt out of marketing communications</li>
              </ul>
              <p>
                To exercise your rights, contact us at{' '}
                <a href="mailto:website@nadeza.com" className="text-nadeza-blue hover:underline">
                  website@nadeza.com
                </a>.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">6. Data Security</h2>
              <p>
                We take reasonable technical and organizational measures to protect your
                information. However, no method of transmission over the internet or
                electronic storage is completely secure, and we cannot guarantee absolute
                security.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">7. Data Retention</h2>
              <p>
                We retain personal data only as long as necessary to provide services,
                fulfill legal obligations, resolve disputes, and enforce our agreements.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">8. Third-Party Links</h2>
              <p>
                Our website may link to third-party sites. We are not responsible for the
                privacy practices or content of those websites and encourage you to review
                their policies separately.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">9. Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. The “Last Updated”
                date at the top will reflect the most recent changes. Your continued use of
                the site after an update means you accept the revised policy.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">10. Contact Us</h2>
              <p>
                If you have questions or concerns about this policy, contact us at:{' '}
                <a href="mailto:website@nadeza.com" className="text-nadeza-blue hover:underline">
                  website@nadeza.com
                </a>
                .
              </p>
            </section>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
