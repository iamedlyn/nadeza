import React from 'react';
import { Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const services = [
    { name: 'Website Design & Development', href: '/services/website-design-development' },
    { name: 'HubSpot, WordPress, & Shopify Development', href: '/services/hubspot-wordpress-shopify' },
    { name: 'Search Engine Optimization (SEO)', href: '/services/seo' },
    { name: 'Paid Advertising', href: '/services/paid-advertising' },
    { name: 'Content Marketing', href: '/services/content-marketing' },
    { name: 'Lead Generation Services', href: '/services/lead-generation' },
    { name: 'Conversion Rate Optimization (CRO)', href: '/services/cro' },
    { name: 'Email Marketing & Automation', href: '/services/email-marketing' },
    { name: 'Data & Analytics', href: '/services/data-analytics' },
    { name: 'Strategy & Consulting', href: '/services/strategy-consulting' },
    { name: 'AI Agents & Automation', href: '/services/ai-automation' },
    { name: 'Social Media Strategy', href: '/services/social-media' }
  ];

  const industries = [
    { name: 'B2B, B2C, & SaaS', href: '/industries/b2b-b2c-saas' },
    { name: 'Healthcare & Life Sciences', href: '/industries/healthcare-life-sciences' },
    { name: 'E-Commerce & Retail', href: '/industries/ecommerce-retail' },
    { name: 'Finance & Professional Services', href: '/industries/finance-professional-services' },
    { name: 'Education & Training', href: '/industries/education-training' },
    { name: 'Startups & Entrepreneurs', href: '/industries/startups-entrepreneurs' },
    { name: 'Hospitality & Travel', href: '/industries/hospitality-travel' },
    { name: 'Real Estate & Property', href: '/industries/real-estate-property' },
    { name: 'Law Firms & Legal Services', href: '/industries/law-firms-legal-services' },
    { name: 'Dentists & Health Clinics', href: '/industries/dentists-health-clinics' },
    { name: 'Nonprofits & Community Organizations', href: '/industries/nonprofits-community-organizations' },
    { name: 'Food & Beverage / Restaurants', href: '/industries/restaurant-food-beverage' }
  ];

  const company = [
    { name: 'About Us', href: '/about' },
    { name: 'Careers', href: '/careers' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' }
  ];

  const legal = [
    { name: 'Privacy Policy', href: '/legal/privacy-policy' },
    { name: 'Terms of Use', href: '/legal/terms' },
    { name: 'Cookie Policy', href: '/legal/cookies' }
  ];

  return (
    <footer className="bg-[#0A1A2F] bg-gradient-to-b from-[#0A1A2F] to-[#091526] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Logo + Description */}
          <div className="lg:col-span-1">
            <img 
              src="https://242510585.fs1.hubspotusercontent-na2.net/hubfs/242510585/New_Logo_Nadeza.png"
              alt="Nadeza Logo"
              className="w-44 mb-6 drop-shadow-lg"
            />

            <p className="text-[#D6DAE0] mb-6 max-w-md leading-relaxed">
              Digital marketing and web development designed for modern brands.
              Strategy, execution, and measurable growth—powered by experience and innovation.
            </p>

            <div className="flex space-x-4">
              <a 
                href="https://www.linkedin.com/company/nadeza-marketing"
                target="_new"
                rel="noopener noreferrer"
                className="text-[#8FA3BF] hover:text-white transition-colors duration-200"
              >
                <Linkedin size={22} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-lg mb-6 text-white tracking-wide">SERVICES</h3>
            <ul className="space-y-3">
              {services.map((item, i) => (
                <li key={i}>
                  <a 
                    href={item.href}
                    className="text-[#D6DAE0] hover:text-[#1E4FFF] transition duration-200 text-sm"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h3 className="font-bold text-lg mb-6 text-white tracking-wide">INDUSTRIES</h3>
            <ul className="space-y-3">
              {industries.map((item, i) => (
                <li key={i}>
                  <a 
                    href={item.href}
                    className="text-[#D6DAE0] hover:text-[#1E4FFF] transition duration-200 text-sm"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-bold text-lg mb-6 text-white tracking-wide">COMPANY</h3>
            <ul className="space-y-3">
              {company.map((item, i) => (
                <li key={i}>
                  <a 
                    href={item.href}
                    className="text-[#D6DAE0] hover:text-[#1E4FFF] transition duration-200 text-sm"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>

            <h3 className="font-bold text-lg mt-10 mb-4 text-white tracking-wide">LEGAL</h3>
            <ul className="space-y-3">
              {legal.map((item, i) => (
                <li key={i}>
                  <a 
                    href={item.href}
                    className="text-[#D6DAE0] hover:text-[#1E4FFF] transition duration-200 text-sm"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#11233F] mt-12 pt-8 text-center">
          <p className="text-[#8FA3BF] text-sm">
            © {currentYear} Nadeza Marketing. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
