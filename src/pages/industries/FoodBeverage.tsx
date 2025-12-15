import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { motion } from "framer-motion";
import { Utensils, TrendingUp, Users, ScrollText, CheckCircle } from "lucide-react";

const FoodBeverage: React.FC = () => {
  const challenges = [
    "Standing out in a crowded local market",
    "Maintaining consistent customer flow",
    "Managing reviews and online reputation",
    "Creating engaging content that drives foot traffic",
    "Optimizing delivery platform performance",
    "Scaling marketing without huge budgets"
  ];

  const services = [
    "Restaurant website design & online menus",
    "SEO for local search & 'near me' visibility",
    "Paid ads targeting diners & local foot traffic",
    "Google Maps & review management",
    "Content creation: Reels, TikTok, photography",
    "Email & SMS promotions for repeat customers",
    "Loyalty program integrations",
    "Analytics to track reservations & conversions"
  ];

  const results = [
    {
      title: "Increased Reservations",
      description: "Clients see consistent improvement in online bookings & foot traffic.",
    },
    {
      title: "Higher Online Visibility",
      description: "Optimized Google Business Profiles drive more locals to discover you.",
    },
    {
      title: "Better Customer Retention",
      description: "Email & SMS campaigns keep diners coming back.",
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />

      <main className="pt-20">
        {/* HERO */}
        <section className="py-20 bg-gradient-to-br from-orange-50 to-yellow-50">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Utensils className="text-orange-600 mx-auto mb-6" size={64} />

              <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6">
                Restaurants, Food & Beverage Marketing
              </h1>

              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Whether you're a restaurant, café, bar, bakery, cloud kitchen, or F&B brand —
                Nadeza helps you increase foot traffic, improve your online presence, and
                turn customers into loyal fans.
              </p>
            </motion.div>
          </div>
        </section>

        {/* CHALLENGES */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-slate-900 mb-6 text-center">
              Challenges We Help You Solve
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {challenges.map((c, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-3"
                >
                  <CheckCircle className="text-orange-600 mt-1" size={20} />
                  <span className="text-slate-700">{c}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section className="py-16 bg-slate-50">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-slate-900 mb-10 text-center">
              How We Help Food & Beverage Brands Grow
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((s, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.05 }}
                  viewport={{ once: true }}
                  className="bg-white p-6 rounded-xl shadow-sm"
                >
                  <p className="text-slate-700 flex items-center">
                    <CheckCircle className="text-orange-600 mr-3" size={20} />
                    {s}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* RESULTS */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-slate-900 mb-10 text-center">
              Results You Can Expect
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {results.map((r, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-slate-50 p-6 rounded-xl shadow text-center"
                >
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">
                    {r.title}
                  </h3>
                  <p className="text-slate-700">{r.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-slate-900 text-white">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">
              Ready to Grow Your Restaurant or F&B Brand?
            </h2>
            <p className="text-lg text-slate-300 mb-8">
              Book a call and let’s discuss how Nadeza can help you drive more traffic,
              increase revenue, and build a loyal customer base.
            </p>

            <a
              href="/contact"
              className="inline-block bg-orange-600 hover:bg-orange-700 px-8 py-4 rounded-lg font-semibold transition"
            >
              Book a Call
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default FoodBeverage;
