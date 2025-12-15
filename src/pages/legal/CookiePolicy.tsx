import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { motion } from 'framer-motion';

const CookiePolicy: React.FC = () => {
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
                Cookie Policy
              </h1>
              <p className="text-slate-200 text-sm mb-4">
                Last Updated: [Month Day, Year]
              </p>
              <p className="text-slate-200">
                This Cookie Policy explains how Nadeza Marketing (“Nadeza,” “we,” “our,” or
                “us”) uses cookies and similar technologies on our website.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Content */}
        <section>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 text-slate-800">
            <section>
              <h2 className="text-xl font-semibold mb-3">1. What Are Cookies?</h2>
              <p>
                Cookies are small text files stored on your device when you visit a
                website. They help websites function properly, remember preferences, and
                understand how visitors interact with content.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">2. Types of Cookies We Use</h2>

              <h3 className="font-semibold mb-2">A. Essential Cookies</h3>
              <p className="mb-3">
                These cookies are necessary for the website to function and cannot be
                switched off in our systems. They are usually set in response to actions
                you take, such as filling in forms or navigating the site.
              </p>

              <h3 className="font-semibold mb-2">B. Analytics & Performance Cookies</h3>
              <p className="mb-3">
                These cookies help us understand how visitors use our website, so we can
                measure and improve performance. For example, we may use tools such as
                Google Analytics or HubSpot to track page views, traffic sources, and user
                journeys.
              </p>

              <h3 className="font-semibold mb-2">C. Marketing & Advertising Cookies</h3>
              <p className="mb-3">
                These cookies may be set through our site by advertising and social media
                partners (such as Google Ads, Meta, or LinkedIn). They can be used to
                build a profile of your interests and show you relevant ads on other
                sites.
              </p>

              <h3 className="font-semibold mb-2">D. Functional Cookies</h3>
              <p>
                Functional cookies allow the website to remember choices you make, such as
                language preferences or form entries, to provide a more personalized
                experience.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">3. Third-Party Cookies</h2>
              <p>
                Some cookies may be set by third-party services that appear on our pages
                or that we use to deliver analytics, advertising, or embedded content
                (such as videos or forms). We do not control these cookies directly and
                recommend reviewing the policies of those providers.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">4. How You Can Manage Cookies</h2>
              <p className="mb-3">
                You can manage or disable cookies through your browser settings. Most
                browsers allow you to:
              </p>
              <ul className="list-disc list-inside space-y-1 mb-3">
                <li>View which cookies are stored on your device</li>
                <li>Delete existing cookies</li>
                <li>Block cookies from specific sites</li>
                <li>Block all cookies or be notified when cookies are set</li>
              </ul>
              <p>
                Please note that disabling certain cookies may affect the functionality
                and experience of our website.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">5. Do Not Track</h2>
              <p>
                Some browsers offer a “Do Not Track” (DNT) setting. At this time, our
                website does not respond to DNT signals in a standardized way, but you can
                still control cookies as described above.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">6. Changes to This Cookie Policy</h2>
              <p>
                We may update this Cookie Policy from time to time to reflect changes in
                technology, law, or our practices. The “Last Updated” date indicates the
                most recent version.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">7. Contact Us</h2>
              <p>
                If you have any questions about our use of cookies, contact us at:{' '}
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

export default CookiePolicy;
