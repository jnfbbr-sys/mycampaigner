import { motion } from "framer-motion";
import { useState } from "react";
import SEO from "../components/SEO";

const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">(
    "monthly"
  );

  const plans = [
    {
      name: "Free",
      price: 0,
      description: "Perfect for testing and small stores",
      features: [
        "1 active campaign",
        "Up to 10 variants per rule",
        "Basic percentage discounts",
        "Tag-based conditions",
        "Email support",
      ],
      cta: "Start Free",
      highlighted: false,
    },
    {
      name: "Basic",
      price: billingCycle === "monthly" ? 10 : 100,
      description: "Full access to all features",
      features: [
        "Unlimited campaigns",
        "Unlimited variants per rule",
        "All discount types",
        "Inventory rules",
        "Metafield conditions",
        "Customer tag rules",
        "Advanced scheduling",
        "Usage analytics",
        "Priority support",
      ],
      cta: "Get Started",
      highlighted: true,
    },
  ];

  return (
    <div className="py-20">
      <SEO
        title="Pricing - Simple & Transparent Plans"
        description="Choose the perfect plan for your Shopify store. Free tier available. 7-day free trial on all paid plans. No credit card required."
        canonical="/pricing"
        keywords="shopify app pricing, discount app cost, shopify functions pricing, free shopify discount app"
      />
      <div className="section-container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Simple, Transparent Pricing
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Choose the plan that fits your business. All plans include a 7-day
            free trial.
          </p>

          {/* Billing Toggle */}
          <div className="inline-flex items-center bg-gray-100 rounded-lg p-1">
            <button
              onClick={() => setBillingCycle("monthly")}
              className={`px-6 py-2 rounded-md transition-colors ${
                billingCycle === "monthly"
                  ? "bg-white text-gray-900 shadow-sm"
                  : "text-gray-600"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingCycle("yearly")}
              className={`px-6 py-2 rounded-md transition-colors ${
                billingCycle === "yearly"
                  ? "bg-white text-gray-900 shadow-sm"
                  : "text-gray-600"
              }`}
            >
              Yearly
              <span className="ml-2 text-xs bg-primary-100 text-primary-700 px-2 py-1 rounded">
                Save 15%
              </span>
            </button>
          </div>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative bg-white rounded-[28px] p-8 transition-all duration-300 ${
                plan.highlighted
                  ? "ring-2 ring-black shadow-xl scale-[1.02] z-10"
                  : "border border-gray-100/50 shadow-sm hover:shadow-lg"
              }`}
            >
              {plan.highlighted && (
                <>
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-50/50 to-purple-50/50 rounded-2xl -z-10"></div>
                  <div className="bg-black text-white text-sm font-bold px-4 py-2 rounded-full inline-block mb-5 shadow-lg">
                    ⭐ Recommended
                  </div>
                </>
              )}
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                {plan.name}
              </h3>
              <p className="text-gray-600 mb-6 min-h-[48px]">
                {plan.description}
              </p>
              <div className="mb-8">
                <span className="text-5xl font-bold bg-gradient-to-br from-gray-900 to-gray-700 bg-clip-text text-transparent">
                  ${plan.price}
                </span>
                <span className="text-gray-500 text-lg">
                  /{billingCycle === "monthly" ? "mo" : "yr"}
                </span>
                {billingCycle === "yearly" && plan.price > 0 && (
                  <div className="text-sm text-green-600 font-semibold mt-1">
                    Save ${((plan.price / 10) * 1.5).toFixed(0)}/year
                  </div>
                )}
              </div>
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <svg
                      className={`w-5 h-5 mr-3 flex-shrink-0 mt-0.5 ${
                        plan.highlighted ? "text-primary-600" : "text-green-500"
                      }`}
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2.5"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700 text-sm leading-relaxed">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
              <a
                href="https://apps.shopify.com"
                className={`block text-center py-4 px-6 rounded-xl font-bold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 ${
                  plan.highlighted
                    ? "bg-gradient-to-r from-primary-600 to-purple-600 text-white hover:from-primary-700 hover:to-purple-700"
                    : "bg-gray-900 text-white hover:bg-gray-800"
                }`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {plan.cta}
              </a>
            </motion.div>
          ))}
        </div>

        {/* Feature Comparison Table */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Complete Feature Comparison
          </h2>
          <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b-2 border-gray-200 bg-gray-50">
                    <th className="px-6 py-4 text-left font-semibold text-gray-900 min-w-[250px]">
                      Feature
                    </th>
                    <th className="px-6 py-4 text-center font-semibold text-gray-900 min-w-[150px]">
                      <div className="mb-1">Free</div>
                      <div className="text-2xl font-bold">$0</div>
                      <div className="text-xs text-gray-500">/mo</div>
                    </th>
                    <th className="px-6 py-4 text-center font-semibold text-gray-900 min-w-[150px] bg-gray-900/5">
                      <div className="mb-1">Basic</div>
                      <div className="text-2xl font-bold text-black">
                        ${billingCycle === "monthly" ? "10" : "8"}
                      </div>
                      <div className="text-xs text-gray-500">/mo</div>
                      <div className="mt-2">
                        <span className="inline-block px-2 py-1 bg-black text-white text-xs font-bold rounded-full">
                          Recommended
                        </span>
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {/* Active Campaigns */}
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium text-gray-900">
                      Active discount campaigns
                    </td>
                    <td className="px-6 py-4 text-center font-semibold text-gray-700">
                      1
                    </td>
                    <td className="px-6 py-4 text-center font-semibold text-black bg-gray-900/5">
                      Unlimited
                    </td>
                  </tr>

                  {/* Live Variants */}
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium text-gray-900">
                      Live discounted variants
                    </td>
                    <td className="px-6 py-4 text-center font-semibold text-gray-700">
                      Up to 10
                    </td>
                    <td className="px-6 py-4 text-center font-semibold text-black bg-gray-900/5">
                      Unlimited
                    </td>
                  </tr>

                  {/* Percentage & Fixed Discounts */}
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium text-gray-900">
                      Percentage & fixed discounts
                    </td>
                    <td className="px-6 py-4 text-center">
                      <span className="text-green-600 text-xl font-bold">
                        ✓
                      </span>
                    </td>
                    <td className="px-6 py-4 text-center bg-gray-900/5">
                      <span className="text-green-600 text-xl font-bold">
                        ✓
                      </span>
                    </td>
                  </tr>

                  {/* Product-level Discounts */}
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium text-gray-900">
                      Product-level discounts
                    </td>
                    <td className="px-6 py-4 text-center">
                      <span className="text-green-600 text-xl font-bold">
                        ✓
                      </span>
                    </td>
                    <td className="px-6 py-4 text-center bg-gray-900/5">
                      <span className="text-green-600 text-xl font-bold">
                        ✓
                      </span>
                    </td>
                  </tr>

                  {/* Variant-level Discounts */}
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium text-gray-900">
                      Variant-level discounts
                    </td>
                    <td className="px-6 py-4 text-center">
                      <span className="text-green-600 text-xl font-bold">
                        ✓
                      </span>
                    </td>
                    <td className="px-6 py-4 text-center bg-gray-900/5">
                      <span className="text-green-600 text-xl font-bold">
                        ✓
                      </span>
                    </td>
                  </tr>

                  {/* Tag-based Conditions */}
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium text-gray-900">
                      Tag-based conditions
                    </td>
                    <td className="px-6 py-4 text-center">
                      <span className="text-green-600 text-xl font-bold">
                        ✓
                      </span>
                    </td>
                    <td className="px-6 py-4 text-center bg-gray-900/5">
                      <span className="text-green-600 text-xl font-bold">
                        ✓
                      </span>
                    </td>
                  </tr>

                  {/* Inventory-based Rules */}
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium text-gray-900">
                      Inventory-based rules
                    </td>
                    <td className="px-6 py-4 text-center">
                      <span className="text-red-600 text-xl font-bold">✕</span>
                    </td>
                    <td className="px-6 py-4 text-center bg-gray-900/5">
                      <span className="text-green-600 text-xl font-bold">
                        ✓
                      </span>
                    </td>
                  </tr>

                  {/* Metafield-based Rules */}
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium text-gray-900">
                      Metafield-based rules
                    </td>
                    <td className="px-6 py-4 text-center">
                      <span className="text-red-600 text-xl font-bold">✕</span>
                    </td>
                    <td className="px-6 py-4 text-center bg-gray-900/5">
                      <span className="text-green-600 text-xl font-bold">
                        ✓
                      </span>
                    </td>
                  </tr>

                  {/* Scheduling */}
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium text-gray-900">
                      Scheduling (date / day / time)
                    </td>
                    <td className="px-6 py-4 text-center">
                      <span className="text-red-600 text-xl font-bold">✕</span>
                    </td>
                    <td className="px-6 py-4 text-center bg-gray-900/5">
                      <span className="text-green-600 text-xl font-bold">
                        ✓
                      </span>
                    </td>
                  </tr>

                  {/* Customer Tag Rules */}
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium text-gray-900">
                      Customer tag rules
                    </td>
                    <td className="px-6 py-4 text-center">
                      <span className="text-red-600 text-xl font-bold">✕</span>
                    </td>
                    <td className="px-6 py-4 text-center bg-gray-900/5">
                      <span className="text-green-600 text-xl font-bold">
                        ✓
                      </span>
                    </td>
                  </tr>

                  {/* Usage Analytics */}
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium text-gray-900">
                      Usage analytics
                    </td>
                    <td className="px-6 py-4 text-center">
                      <span className="text-red-600 text-xl font-bold">✕</span>
                    </td>
                    <td className="px-6 py-4 text-center bg-gray-900/5">
                      <span className="text-green-600 text-xl font-bold">
                        ✓
                      </span>
                    </td>
                  </tr>

                  {/* Priority Support */}
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium text-gray-900">
                      Priority support
                    </td>
                    <td className="px-6 py-4 text-center">
                      <span className="text-red-600 text-xl font-bold">✕</span>
                    </td>
                    <td className="px-6 py-4 text-center bg-gray-900/5">
                      <span className="text-green-600 text-xl font-bold">
                        ✓
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Pricing;
