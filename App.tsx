import React from 'react';
import '@radix-ui/themes/styles.css';
import { Theme } from '@radix-ui/themes';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CookieConsent from "react-cookie-consent";

// Core Pages
import Home from './src/pages/Home';
import Services from './src/pages/Services';
import About from './src/pages/About';
import CaseStudies from './src/pages/CaseStudies';
import Pricing from './src/pages/Pricing';
import Contact from './src/pages/Contact';
import NotFound from './src/pages/NotFound';

// Service Pages
import WebsiteDesignDevelopment from './src/pages/services/WebsiteDesignDevelopment';
import HubSpotWordPressShopify from './src/pages/services/HubSpotWordPressShopify';
import SEO from './src/pages/services/SEO';
import PaidAdvertising from './src/pages/services/PaidAdvertising';
import ContentMarketing from './src/pages/services/ContentMarketing';
import LeadGeneration from './src/pages/services/LeadGeneration';
import CRO from './src/pages/services/CRO';
import EmailMarketing from './src/pages/services/EmailMarketing';
import DataAnalytics from './src/pages/services/DataAnalytics';
import StrategyConsulting from './src/pages/services/StrategyConsulting';
import AIAutomation from './src/pages/services/AIAutomation';
import SocialMediaStrategy from './src/pages/services/SocialMediaStrategy';

// Industry Pages
import B2BB2CSaaS from './src/pages/industries/B2BB2CSaaS';
import HealthcareLifeSciences from './src/pages/industries/HealthcareLifeSciences';
import EcommerceRetail from './src/pages/industries/EcommerceRetail';
import FinanceProfessionalServices from './src/pages/industries/FinanceProfessionalServices';
import EducationTraining from './src/pages/industries/EducationTraining';
import StartupsEntrepreneurs from './src/pages/industries/StartupsEntrepreneurs';
import HospitalityTravel from './src/pages/industries/HospitalityTravel';
import RealEstateProperty from './src/pages/industries/RealEstateProperty';
import LawFirmsLegalServices from './src/pages/industries/LawFirmsLegalServices';
import DentistsHealthClinics from './src/pages/industries/DentistsHealthClinics';
import NonprofitsCommunityOrganizations from './src/pages/industries/NonprofitsCommunityOrganizations';
import FoodBeverage from './src/pages/industries/FoodBeverage';

// Company Pages
import AffiliateProgram from './src/pages/company/AffiliateProgram';
import Careers from './src/pages/company/Careers';
import Blog from './src/pages/company/Blog';

// Legal Pages
import PrivacyPolicy from './src/pages/legal/PrivacyPolicy';
import TermsOfUse from './src/pages/legal/TermsOfUse';
import CookiePolicy from './src/pages/legal/CookiePolicy';

const App: React.FC = () => {
  return (
    <Theme appearance="inherit" radius="large" scaling="100%">
      <Router>
        <main className="min-h-screen font-inter">

          {/* ROUTES */}
          <Routes>

            {/* Core Pages */}
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/case-studies" element={<CaseStudies />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/contact" element={<Contact />} />

            {/* Service Routes */}
            <Route path="/services/website-design-development" element={<WebsiteDesignDevelopment />} />
            <Route path="/services/hubspot-wordpress-shopify" element={<HubSpotWordPressShopify />} />
            <Route path="/services/seo" element={<SEO />} />
            <Route path="/services/paid-advertising" element={<PaidAdvertising />} />
            <Route path="/services/content-marketing" element={<ContentMarketing />} />
            <Route path="/services/lead-generation" element={<LeadGeneration />} />
            <Route path="/services/cro" element={<CRO />} />
            <Route path="/services/email-marketing" element={<EmailMarketing />} />
            <Route path="/services/data-analytics" element={<DataAnalytics />} />
            <Route path="/services/strategy-consulting" element={<StrategyConsulting />} />
            <Route path="/services/ai-automation" element={<AIAutomation />} />
            <Route path="/services/social-media" element={<SocialMediaStrategy />} />

            {/* Industry Routes */}
            <Route path="/industries/b2b-b2c-saas" element={<B2BB2CSaaS />} />
            <Route path="/industries/healthcare-life-sciences" element={<HealthcareLifeSciences />} />
            <Route path="/industries/ecommerce-retail" element={<EcommerceRetail />} />
            <Route path="/industries/finance-professional-services" element={<FinanceProfessionalServices />} />
            <Route path="/industries/education-training" element={<EducationTraining />} />
            <Route path="/industries/startups-entrepreneurs" element={<StartupsEntrepreneurs />} />
            <Route path="/industries/hospitality-travel" element={<HospitalityTravel />} />
            <Route path="/industries/real-estate-property" element={<RealEstateProperty />} />
            <Route path="/industries/law-firms-legal-services" element={<LawFirmsLegalServices />} />
            <Route path="/industries/dentists-health-clinics" element={<DentistsHealthClinics />} />
            <Route path="/industries/nonprofits-community-organizations" element={<NonprofitsCommunityOrganizations />} />
            <Route path="/industries/restaurant-food-beverage" element={<FoodBeverage />} />

            {/* Company Pages */}
            <Route path="/affiliate-program" element={<AffiliateProgram />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/blog" element={<Blog />} />

            {/* Legal Pages */}
            <Route path="/legal/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/legal/terms" element={<TermsOfUse />} />
            <Route path="/legal/cookies" element={<CookiePolicy />} />

            {/* 404 */}
            <Route path="*" element={<NotFound />} />
          </Routes>

          {/* COOKIE CONSENT */}
          <CookieConsent
            location="bottom"
            buttonText="Accept"
            declineButtonText="Decline"
            enableDeclineButton
            cookieName="nadezaCookieConsent"
            expires={180}
            style={{ background: "#1f2937", color: "#fff" }}
            buttonStyle={{
              background: "#ef4444",
              color: "#fff",
              fontSize: "14px",
              borderRadius: "6px",
            }}
            declineButtonStyle={{
              background: "#6b7280",
              color: "#fff",
              fontSize: "14px",
              borderRadius: "6px",
            }}
            onAccept={() => {
              console.log("Cookies accepted");
            }}
            onDecline={() => {
              console.log("Cookies declined");
            }}
          >
            We use cookies to improve your experience, analyze traffic, and personalize content.{" "}
            <a
              href="/legal/cookies"
              style={{ color: "#93c5fd", textDecoration: "underline" }}
            >
              Learn more
            </a>
          </CookieConsent>

          {/* TOASTS */}
          <ToastContainer
            position="top-right"
            autoClose={3000}
            newestOnTop
            closeOnClick
            pauseOnHover
          />

        </main>
      </Router>
    </Theme>
  );
};

export default App;
