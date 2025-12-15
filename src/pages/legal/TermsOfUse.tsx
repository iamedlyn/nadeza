import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { motion } from 'framer-motion';

const TermsOfUse: React.FC = () => {
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
                Terms of Use
              </h1>
              <p className="text-slate-200 text-sm mb-4">
                Last Updated: [Month Day, Year]
              </p>
              <p className="text-slate-200">
                By accessing or using the Nadeza Marketing website, you agree to these
                Terms of Use. If you do not agree, please discontinue use of the site.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Content */}
        <section>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 text-slate-800">
            <section>
              <h2 className="text-xl font-semibold mb-3">1. Use of the Website</h2>
              <p className="mb-3">
                You agree to use this website only for lawful purposes and in a manner
                that does not infringe the rights of, restrict, or inhibit anyone else’s
                use of the site.
              </p>
              <p>You agree not to:</p>
              <ul className="list-disc list-inside space-y-1 mt-2">
                <li>Attempt to gain unauthorized access to the site or servers</li>
                <li>Use the site to distribute spam or malicious software</li>
                <li>Scrape, copy, or harvest content without permission</li>
                <li>Impersonate any person or misrepresent your affiliation</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">2. Intellectual Property</h2>
              <p className="mb-3">
                All content, logos, designs, text, graphics, and other materials on this
                website are owned by or licensed to Nadeza, unless otherwise stated.
              </p>
              <p>
                You may not copy, reproduce, distribute, modify, or create derivative
                works from any content without prior written consent from Nadeza.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">3. No Guarantee of Results</h2>
              <p>
                Marketing outcomes depend on many factors outside our control. While we
                apply best practices and expertise, we do not guarantee specific results,
                such as rankings, traffic, leads, or revenue.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">4. Service Engagements</h2>
              <p className="mb-3">
                Any formal engagement with Nadeza takes place through a separate proposal,
                statement of work, or contract that outlines scope, pricing, and terms.
              </p>
              <p>
                Website information is for general guidance only and does not constitute a
                binding offer or guarantee of service availability.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">5. Third-Party Links</h2>
              <p>
                Our website may contain links to third-party sites. These links are
                provided for convenience only. We do not endorse and are not responsible
                for the content, policies, or practices of third-party sites.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">6. Disclaimer of Warranties</h2>
              <p className="mb-3">
                The website and its content are provided “as is” and “as available”
                without warranties of any kind, either express or implied.
              </p>
              <p>
                We do not warrant that the site will be uninterrupted, error-free, secure,
                or free from viruses or other harmful components.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">7. Limitation of Liability</h2>
              <p className="mb-3">
                To the fullest extent permitted by law, Nadeza is not liable for any
                indirect, incidental, consequential, or special damages arising out of or
                in connection with your use of the website.
              </p>
              <p>
                In any case, Nadeza’s total liability for any claims relating to the
                website shall be limited to the amount you have paid us, if any, for using
                the site or services related to the claim.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">8. Indemnification</h2>
              <p>
                You agree to indemnify and hold Nadeza harmless from any claims, losses,
                damages, liabilities, including legal fees, arising out of your use of the
                site, violation of these Terms, or infringement of any third-party rights.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">9. Governing Law</h2>
              <p>
                These Terms of Use are governed by and construed in accordance with the
                laws of [Your Jurisdiction]. Any disputes shall be subject to the
                exclusive jurisdiction of the courts in that location.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">10. Changes to These Terms</h2>
              <p>
                We may update these Terms of Use from time to time. The “Last Updated”
                date at the top indicates the most recent revision. Your continued use of
                the website after changes are posted constitutes acceptance of the
                updated Terms.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">11. Contact Us</h2>
              <p>
                If you have questions about these Terms, contact us at:{' '}
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

export default TermsOfUse;
