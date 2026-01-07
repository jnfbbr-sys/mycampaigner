import { motion } from "framer-motion";
import { useState } from "react";
import SEO from "../components/SEO";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      category: "Getting Started",
      questions: [
        {
          q: "Can I change plans anytime?",
          a: "Yes! You can upgrade or downgrade your plan at any time. Changes take effect immediately, and you'll be charged or credited on a pro-rata basis.",
        },
        {
          q: "Is there a free trial?",
          a: "Yes! All paid plans include a 7-day free trial. No credit card required to start. You can explore all features risk-free.",
        },
        {
          q: "Which Shopify plans are supported?",
          a: "MyCampaigner works on ALL Shopify plans - Basic, Shopify, Advanced, and Plus. Unlike legacy script-based solutions, Shopify Functions work universally.",
        },
        {
          q: "How long does setup take?",
          a: "Setup takes just a few minutes. Install the app, create your first campaign, and you're ready to go. No coding or technical knowledge required.",
        },
      ],
    },
    {
      category: "Features & Functionality",
      questions: [
        {
          q: "What happens if I exceed my plan limits?",
          a: "On the Free plan, campaigns exceeding variant limits won't activate. You'll receive a notification when approaching limits. Paid plans have unlimited campaigns and variants.",
        },
        {
          q: "How do Shopify Functions work?",
          a: "Shopify Functions are serverless code that runs directly in Shopify's infrastructure at checkout. They evaluate your discount rules in real-time and apply discounts automatically - no scripts or manual codes needed.",
        },
        {
          q: "Can I stack multiple discounts?",
          a: "You can set discount priority and application strategy. By default, the first matching rule applies, but you can configure how multiple rules interact.",
        },
        {
          q: "Do discounts work with all payment methods?",
          a: "Yes! Since Shopify Functions run at the platform level, discounts work with all payment methods, including Shop Pay, credit cards, and alternative payment options.",
        },
        {
          q: "Can I schedule campaigns for specific dates?",
          a: "Absolutely! You can set start and end dates/times for campaigns. Perfect for flash sales, seasonal promotions, or recurring events.",
        },
      ],
    },
    {
      category: "Technical Questions",
      questions: [
        {
          q: "Will this slow down my checkout?",
          a: "No! Shopify Functions are designed for performance and typically run in less than 100ms. They're much faster than browser-based solutions.",
        },
        {
          q: "Can I use MyCampaigner with other discount apps?",
          a: "Yes, Shopify handles multiple Function-based apps gracefully. However, only one discount can apply per order (Shopify limitation), so set priorities accordingly.",
        },
        {
          q: "What if a Function fails?",
          a: "Shopify has built-in fallbacks. If a Function fails, checkout continues without the discount rather than breaking. Your store never goes down.",
        },
        {
          q: "Is my data secure?",
          a: "Absolutely. We follow Shopify's security best practices and never store sensitive customer data. All processing happens within Shopify's secure infrastructure.",
        },
        {
          q: "Can I migrate from Shopify Scripts?",
          a: "Yes! Scripts are deprecated and will eventually stop working. We help Plus merchants migrate their script logic to Functions smoothly.",
        },
      ],
    },
    {
      category: "Billing & Support",
      questions: [
        {
          q: "Do you offer refunds?",
          a: "Yes! We offer a 30-day money-back guarantee. If you're not satisfied, contact us for a full refund - no questions asked.",
        },
        {
          q: "How is billing handled?",
          a: "Billing is handled through Shopify's app billing system. Charges appear on your regular Shopify invoice. Cancel anytime with no penalties.",
        },
        {
          q: "What support is included?",
          a: "Free plans include email support. Paid plans get priority support with faster response times. We're here to help you succeed!",
        },
        {
          q: "Can you help me set up campaigns?",
          a: "Absolutely! We provide setup guidance, documentation, and video tutorials. Paid plan users can request personalized setup assistance.",
        },
        {
          q: "Do you offer custom development?",
          a: "For unique requirements beyond standard features, we offer consulting services. Contact us to discuss your specific needs.",
        },
      ],
    },
    {
      category: "Use Cases",
      questions: [
        {
          q: "Can I clear excess inventory automatically?",
          a: "Yes! Create rules that increase discounts based on inventory levels. Example: 10% off when stock > 100, 20% off when stock > 200.",
        },
        {
          q: "How do I reward loyal customers?",
          a: "Use customer tag rules to give special pricing to VIP customers, repeat buyers, or loyalty program members. Target specific segments with precision.",
        },
        {
          q: "Can I run flash sales?",
          a: "Definitely! Set time-limited campaigns with specific start/end times. Combine with inventory or customer conditions for targeted flash sales.",
        },
        {
          q: "Do bundle discounts work?",
          a: "Yes! Create rules that apply when specific products are purchased together. Perfect for \"Complete the Look\" or complementary product bundles.",
        },
        {
          q: "Can I do tiered pricing based on quantity?",
          a: "Absolutely! Set quantity-based rules like \"Buy 3, get 15% off\" or \"Buy 5+, get 25% off.\" Great for wholesale or bulk purchases.",
        },
      ],
    },
  ];

  return (
    <div className="py-20 bg-gradient-to-br from-gray-50 to-white min-h-screen">
      <SEO
        title="FAQ - Frequently Asked Questions"
        description="Find answers to common questions about MyCampaigner. Learn about features, pricing, Shopify Functions, setup, and more."
        canonical="/faq"
        keywords="faq, help, questions, shopify discounts faq, discount app help, shopify functions questions"
      />
      <div className="section-container max-w-5xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-gray-600">
            Everything you need to know about MyCampaigner
          </p>
        </motion.div>

        {/* FAQ Categories */}
        {faqs.map((category, categoryIndex) => (
          <motion.section
            key={categoryIndex}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              {category.category}
            </h2>
            <div className="space-y-4">
              {category.questions.map((faq, faqIndex) => {
                const globalIndex = categoryIndex * 100 + faqIndex;
                const isOpen = openIndex === globalIndex;

                return (
                  <div
                    key={faqIndex}
                    className="bg-white rounded-2xl shadow-lg overflow-hidden"
                  >
                    <button
                      onClick={() =>
                        setOpenIndex(isOpen ? null : globalIndex)
                      }
                      className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                    >
                      <span className="text-lg font-semibold text-gray-900 pr-8">
                        {faq.q}
                      </span>
                      <svg
                        className={`w-6 h-6 text-primary-600 flex-shrink-0 transition-transform ${
                          isOpen ? "rotate-180" : ""
                        }`}
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0 }}
                        animate={{ height: "auto" }}
                        exit={{ height: 0 }}
                        className="px-6 pb-5"
                      >
                        <p className="text-gray-700 leading-relaxed">
                          {faq.a}
                        </p>
                      </motion.div>
                    )}
                  </div>
                );
              })}
            </div>
          </motion.section>
        ))}

        {/* Still Have Questions? */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 text-center bg-gradient-to-br from-primary-600 to-purple-600 text-white rounded-3xl p-12"
        >
          <h2 className="text-3xl font-bold mb-4">Still Have Questions?</h2>
          <p className="text-xl mb-8 text-white/90">
            Can't find what you're looking for? Our team is here to help.
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-4 bg-white text-primary-600 font-bold rounded-full hover:bg-gray-50 transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            Contact Support
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default FAQ;
