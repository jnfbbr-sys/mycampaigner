import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import SEO from "../components/SEO";
import LazyYouTube from "../components/LazyYouTube";

const Home = () => {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">(
    "monthly"
  );
  const [showToast, setShowToast] = useState(false);
  const [showModal, setShowModal] = useState(false);

  // Show modal when component mounts
  useEffect(() => {
    const hasSeenModal = sessionStorage.getItem("hasSeenPromoModal");
    if (!hasSeenModal) {
      const timer = setTimeout(() => {
        setShowModal(true);
        sessionStorage.setItem("hasSeenPromoModal", "true");
      }, 2000); // Show after 2 seconds to avoid blocking initial render
      return () => clearTimeout(timer);
    }
  }, []);

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

  const features = [
    {
      title: "Rule-Based Campaigns",
      description:
        "Create sophisticated discount rules based on inventory, product attributes, customer tags, and more.",
      icon: "🎯",
    },
    {
      title: "Automatic Checkout Discounts",
      description:
        "Discounts apply automatically at checkout using Shopify Functions - no scripts required.",
      icon: "⚡",
    },
    {
      title: "Advanced Conditions",
      description:
        "Target specific variants, check inventory levels, evaluate metafields, and combine multiple conditions.",
      icon: "🔧",
    },
    {
      title: "Real-Time Evaluation",
      description:
        "Discounts are calculated in real-time during checkout for the most accurate pricing.",
      icon: "🚀",
    },
  ];

  return (
    <div>
      <SEO
        title="MyCampaigner - Automated Discount Campaigns for Shopify"
        description="Create sophisticated discount campaigns that apply automatically at checkout using Shopify Functions. No code required. Available for all Shopify plans."
        canonical="/"
        keywords="shopify discounts, automated discounts, shopify functions, discount automation, dynamic pricing, shopify app"
      />
      {/* Promotional Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative bg-white rounded-3xl shadow-2xl max-w-lg w-full overflow-hidden"
          >
            {/* Close button */}
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors z-10"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Modal content */}
            <div className="relative">
              {/* Background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500 to-purple-600"></div>
              
              {/* Content */}
              <div className="relative p-8 text-center text-white">
                <div className="mb-4">
                  <span className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold">
                    🎉 Limited Time Offer
                  </span>
                </div>
                
                <h2 className="text-4xl md:text-5xl font-bold mb-4">
                  Get 3 Months Free!
                </h2>
                
                <p className="text-xl mb-8 text-white/90">
                  Start your journey with MyCampaigner today and enjoy 3 months of premium features absolutely free.
                </p>

                <div className="space-y-4">
                  <a
                    href="https://apps.shopify.com"
                    className="block w-full py-4 px-6 bg-white text-primary-600 font-bold rounded-full hover:bg-gray-50 transition-all duration-200 shadow-lg hover:shadow-xl"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setShowModal(false)}
                  >
                    Claim Your Free Months
                  </a>
                  
                  <button
                    onClick={() => setShowModal(false)}
                    className="block w-full py-3 px-6 text-white/80 hover:text-white font-semibold transition-colors"
                  >
                    Maybe later
                  </button>
                </div>
              </div>
            </div>

            {/* Features list */}
            <div className="bg-gray-50 p-6">
              <h3 className="font-semibold text-gray-900 mb-3 text-center">What's included:</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-2 text-green-500 flex-shrink-0" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M5 13l4 4L19 7" />
                  </svg>
                  Unlimited campaigns & variants
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-2 text-green-500 flex-shrink-0" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M5 13l4 4L19 7" />
                  </svg>
                  All discount types & conditions
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-2 text-green-500 flex-shrink-0" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M5 13l4 4L19 7" />
                  </svg>
                  Priority support & analytics
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      )}

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-50 to-white py-20 md:py-32 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-primary-100/30 via-purple-50/20 to-pink-50/20"></div>
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-200/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl"></div>
          <div className="absolute top-1/3 right-1/3 w-64 h-64 bg-pink-200/20 rounded-full blur-3xl"></div>
          {/* Grid Pattern Overlay */}
          <div
            className="absolute inset-0 opacity-[0.015]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          ></div>
        </div>

        <div className="section-container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-[80px] font-semibold text-black mb-5 leading-[1.05] tracking-tight">
              Automated discounts..
              <br />
              <span className="text-gray-600">Made effortless.</span>
            </h1>
            <p className="text-[21px] text-gray-600 mb-8 leading-[1.4] max-w-2xl mx-auto font-normal">
              Create sophisticated discount campaigns that apply automatically
              at checkout.
            </p>
            <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
              <a
                href="https://apps.shopify.com"
                className="px-8 py-4 bg-[#0071e3] text-white font-medium rounded-full hover:bg-[#0077ed] transition-all duration-200 text-[17px]"
                target="_blank"
                rel="noopener noreferrer"
              >
                Get started
              </a>
              <Link
                to="/pricing"
                className="px-8 py-4 text-[#0071e3] font-medium rounded-full hover:bg-gray-50 transition-all duration-200 text-[17px]"
              >
                Learn more →
              </Link>
            </div>
          </motion.div>

          {/* Hero Banner/Mockup */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-16 max-w-6xl mx-auto relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-200/50">
              {/* Browser Chrome */}
              <div className="bg-gray-100 px-4 py-3 flex items-center gap-2 border-b border-gray-200">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="flex-1 mx-4 bg-white rounded-md px-4 py-1 text-xs text-gray-500">
                  mycampaigner.app/dashboard
                </div>
              </div>

              {/* Dashboard Preview */}
              <div className="bg-gradient-to-br from-gray-50 to-white p-8 md:p-12">
                <div className="space-y-6">
                  {/* Header */}
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">
                        Active Campaigns
                      </h3>
                      <p className="text-gray-600 mt-1">
                        Manage your discount automations
                      </p>
                    </div>
                    <button className="px-6 py-3 bg-gradient-to-r from-primary-600 to-purple-600 text-white font-semibold rounded-lg shadow-lg">
                      + New Campaign
                    </button>
                  </div>

                  {/* Campaign Cards */}
                  <div className="grid gap-4 md:grid-cols-2">
                    {/* Card 1 */}
                    <div className="bg-white rounded-xl p-6 shadow-md border border-gray-200 hover:shadow-lg transition-shadow">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center">
                            <div className="w-3 h-3 rounded-full bg-green-500"></div>
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-900">
                              Summer Sale 2026
                            </h4>
                            <p className="text-sm text-gray-500">
                              15% off all products
                            </p>
                          </div>
                        </div>
                        <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-semibold rounded-full">
                          Active
                        </span>
                      </div>
                      <div className="grid grid-cols-3 gap-4 text-center pt-4 border-t border-gray-100">
                        <div>
                          <div className="text-2xl font-bold text-gray-900">
                            847
                          </div>
                          <div className="text-xs text-gray-500">Uses</div>
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-primary-600">
                            $12.4K
                          </div>
                          <div className="text-xs text-gray-500">Revenue</div>
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-purple-600">
                            18%
                          </div>
                          <div className="text-xs text-gray-500">
                            Conv. Rate
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-white rounded-xl p-6 shadow-md border border-gray-200 hover:shadow-lg transition-shadow">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center">
                            <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-900">
                              VIP Customer Rewards
                            </h4>
                            <p className="text-sm text-gray-500">
                              20% for returning customers
                            </p>
                          </div>
                        </div>
                        <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-semibold rounded-full">
                          Active
                        </span>
                      </div>
                      <div className="grid grid-cols-3 gap-4 text-center pt-4 border-t border-gray-100">
                        <div>
                          <div className="text-2xl font-bold text-gray-900">
                            523
                          </div>
                          <div className="text-xs text-gray-500">Uses</div>
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-primary-600">
                            $8.9K
                          </div>
                          <div className="text-xs text-gray-500">Revenue</div>
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-purple-600">
                            22%
                          </div>
                          <div className="text-xs text-gray-500">
                            Conv. Rate
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Stats Bar */}
                  <div className="bg-white rounded-xl p-6 shadow-md border border-gray-200">
                    <div className="grid grid-cols-4 gap-6 text-center">
                      <div>
                        <div className="text-3xl font-bold bg-gradient-to-r from-primary-600 to-purple-600 bg-clip-text text-transparent">
                          1,370
                        </div>
                        <div className="text-sm text-gray-600 mt-1">
                          Total Discounts
                        </div>
                      </div>
                      <div>
                        <div className="text-3xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                          $21.3K
                        </div>
                        <div className="text-sm text-gray-600 mt-1">
                          Revenue Generated
                        </div>
                      </div>
                      <div>
                        <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                          19.5%
                        </div>
                        <div className="text-sm text-gray-600 mt-1">
                          Avg Conversion
                        </div>
                      </div>
                      <div>
                        <div className="text-3xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                          $15.54
                        </div>
                        <div className="text-sm text-gray-600 mt-1">
                          Avg Order Value
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary-500/10 rounded-full blur-3xl -z-10"></div>
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl -z-10"></div>
          </motion.div>
        </div>
      </section>

      {/* Limited Time Offer */}
      <section className="py-16 bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white text-sm font-medium mb-6">
              🎉 Limited Time Offer
            </div>
            <h2 className="text-4xl md:text-5xl font-semibold text-white mb-4 tracking-tight">
              3 Months Free for First 5 Merchants
            </h2>
            <p className="text-[21px] text-gray-300 mb-8 leading-relaxed">
              Be among the first to experience automated discount campaigns at
              no cost. Get full access to all features for 3 months.
            </p>

            {/* Discount Code Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 max-w-md mx-auto mb-8"
            >
              <p className="text-sm text-gray-300 mb-3">Use code at checkout</p>
              <div className="bg-white/5 border-2 border-dashed border-white/30 rounded-xl p-4 mb-4">
                <code className="text-3xl md:text-4xl font-bold text-white tracking-wider">
                  FIRST5FREE
                </code>
              </div>
              <button
                onClick={() => {
                  navigator.clipboard.writeText("FIRST5FREE");
                  setShowToast(true);
                  setTimeout(() => setShowToast(false), 3000);
                }}
                className="w-full px-6 py-3 bg-white text-black font-medium rounded-full hover:bg-gray-100 transition-all text-[17px]"
              >
                Copy Code
              </button>
            </motion.div>

            <a
              href="https://apps.shopify.com"
              className="inline-block px-8 py-4 bg-white text-black font-medium rounded-full hover:bg-gray-100 transition-all duration-200 text-[17px]"
              target="_blank"
              rel="noopener noreferrer"
            >
              Claim Your Spot Now
            </a>

            <p className="mt-6 text-sm text-gray-400">
              ⚡ Only 5 spots available
            </p>
          </motion.div>
        </div>
      </section>

      {/* Video + How It Works Section */}
      <section className="py-20 bg-white">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-semibold text-black mb-4 tracking-tight">
              See how it works
            </h2>
            <p className="text-[21px] text-gray-600 max-w-2xl mx-auto">
              Get started in three simple steps
            </p>
          </motion.div>

          {/* Video */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="max-w-5xl mx-auto mb-20"
          >
            <div className="relative rounded-[28px] overflow-hidden shadow-2xl">
              <LazyYouTube
                videoId="leFLHZOb-tE"
                title="MyCampaigner Demo"
              />
            </div>
          </motion.div>

          {/* Steps */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-black text-white rounded-full text-2xl font-semibold mb-5">
                1
              </div>
              <h3 className="text-[21px] font-semibold mb-3 text-black">
                Install & Configure
              </h3>
              <p className="text-gray-600 leading-relaxed text-[17px]">
                Install the app from Shopify App Store and configure your
                discount rules in minutes
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-black text-white rounded-full text-2xl font-semibold mb-5">
                2
              </div>
              <h3 className="text-[21px] font-semibold mb-3 text-black">
                Set Your Rules
              </h3>
              <p className="text-gray-600 leading-relaxed text-[17px]">
                Define sophisticated conditions based on products, inventory,
                customers, and more
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-black text-white rounded-full text-2xl font-semibold mb-5">
                3
              </div>
              <h3 className="text-[21px] font-semibold mb-3 text-black">
                Automatic Discounts
              </h3>
              <p className="text-gray-600 leading-relaxed text-[17px]">
                Discounts apply automatically at checkout using powerful Shopify
                Functions
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-[#fbfbfd]">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Powerful Features for Modern Merchants
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Everything you need to create sophisticated discount campaigns
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="group bg-white p-8 rounded-2xl border border-gray-100 hover:border-primary-200 hover:shadow-xl transition-all duration-300 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary-50 to-purple-50 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity -mr-16 -mt-16"></div>
                <div className="relative">
                  <div className="text-5xl mb-6 transform group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Features Section */}
      <section className="py-20 bg-white">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Features Built for Modern Commerce
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to create, manage, and optimize your discount
              campaigns
            </p>
          </motion.div>

          {/* Discount Rules */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-20"
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Discount Rules
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: "Inventory-Based Discounts",
                  description:
                    "Automatically discount products based on stock levels. Perfect for clearance sales and overstock management.",
                },
                {
                  title: "Metafield Conditions",
                  description:
                    "Use custom metafields to control discount eligibility. Target products with specific attributes.",
                },
                {
                  title: "Variant-Level Targeting",
                  description:
                    "Apply discounts to specific product variants based on size, color, or any other option.",
                },
                {
                  title: "Customer Tag Rules",
                  description:
                    "Offer exclusive discounts to VIP customers, wholesale buyers, or any tagged customer segment.",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -4 }}
                  className="group relative bg-white p-8 rounded-2xl hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-primary-200 overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary-50 to-purple-50 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity -mr-16 -mt-16"></div>
                  <div className="relative">
                    <div className="inline-block p-3 bg-gradient-to-br from-primary-100 to-purple-100 rounded-xl mb-4 group-hover:scale-110 transition-transform">
                      <svg
                        className="w-6 h-6 text-primary-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Advanced Features */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-20"
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Advanced Features
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: "Shopify Functions",
                  description:
                    "Built on Shopify Functions for automatic checkout discounts. No checkout scripts required.",
                },
                {
                  title: "Real-Time Evaluation",
                  description:
                    "Discounts are calculated in real-time during checkout for accurate pricing every time.",
                },
                {
                  title: "Multiple Conditions",
                  description:
                    "Combine multiple conditions with AND/OR logic for sophisticated campaign targeting.",
                },
                {
                  title: "Priority Control",
                  description:
                    "Set priority levels to control which discount applies when multiple rules match.",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -4 }}
                  className="group relative bg-white p-8 rounded-2xl hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-primary-200 overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary-50 to-purple-50 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity -mr-16 -mt-16"></div>
                  <div className="relative">
                    <div className="inline-block p-3 bg-gradient-to-br from-primary-100 to-purple-100 rounded-xl mb-4 group-hover:scale-110 transition-transform">
                      <svg
                        className="w-6 h-6 text-primary-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Management & Reporting */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Management & Reporting
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: "Campaign Dashboard",
                  description:
                    "Manage all your discount campaigns from a single, intuitive dashboard.",
                },
                {
                  title: "Usage Tracking",
                  description:
                    "Monitor discount usage and performance with detailed analytics and reporting.",
                },
                {
                  title: "Schedule Campaigns",
                  description:
                    "Set start and end dates for flash sales, seasonal promotions, and limited-time offers.",
                },
                {
                  title: "Easy Duplication",
                  description:
                    "Clone existing campaigns to quickly create similar promotions.",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -4 }}
                  className="group relative bg-white p-8 rounded-2xl hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-primary-200 overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary-50 to-purple-50 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity -mr-16 -mt-16"></div>
                  <div className="relative">
                    <div className="inline-block p-3 bg-gradient-to-br from-primary-100 to-purple-100 rounded-xl mb-4 group-hover:scale-110 transition-transform">
                      <svg
                        className="w-6 h-6 text-primary-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.div>

              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-gray-50">
        <div className="section-container">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Simple, Transparent Pricing
            </h2>
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-8">
            {plans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
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
                          plan.highlighted
                            ? "text-primary-600"
                            : "text-green-500"
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

          {/* Link to full pricing page */}
          <div className="text-center">
            <Link
              to="/pricing"
              onClick={() => window.scrollTo(0, 0)}
              className="inline-flex items-center px-8 py-4 bg-gray-900 text-white font-semibold text-lg rounded-full hover:bg-gray-800 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              View complete pricing details
              <svg
                className="w-5 h-5 ml-2"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {[
                {
                  question: "Can I change plans anytime?",
                  answer:
                    "Yes! You can upgrade or downgrade your plan at any time. Changes take effect immediately.",
                },
                {
                  question: "What happens if I exceed my plan limits?",
                  answer:
                    "You'll be notified when approaching limits. Campaigns exceeding your plan's variant limit won't be activated.",
                },
                {
                  question: "Is there a free trial?",
                  answer: "Yes! All paid plans include a 7-day free trial.",
                },
                {
                  question: "Do you offer refunds?",
                  answer:
                    "We offer a 30-day money-back guarantee. If you're not satisfied, contact us for a full refund.",
                },
                {
                  question: "How do Shopify Functions work?",
                  answer:
                    "Shopify Functions are serverless functions that run directly in Shopify's infrastructure, providing fast and reliable discount calculations without requiring checkout scripts.",
                },
                {
                  question: "Can I use multiple discount rules at once?",
                  answer:
                    "Yes! You can have multiple active campaigns. Use priority settings to control which discount applies when multiple rules match the same product.",
                },
              ].map((faq, index) => {
                const [isOpen, setIsOpen] = useState(false);
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow"
                  >
                    <button
                      onClick={() => setIsOpen(!isOpen)}
                      className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                    >
                      <h3 className="text-lg font-semibold text-gray-900 pr-4">
                        {faq.question}
                      </h3>
                      <svg
                        className={`w-5 h-5 text-primary-600 flex-shrink-0 transition-transform duration-300 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>
                    <motion.div
                      initial={false}
                      animate={{ height: isOpen ? "auto" : 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-5 text-gray-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </motion.div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 bg-black text-white overflow-hidden">
        <div className="section-container text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-6xl font-semibold mb-6 leading-tight tracking-tight">
              Ready to automate your discounts?
            </h2>
            <p className="text-[21px] md:text-[24px] mb-12 text-gray-300 max-w-2xl mx-auto font-normal leading-[1.4]">
              Join hundreds of Shopify merchants using MyCampaigner to boost
              sales and delight customers.
            </p>
            <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
              <a
                href="https://apps.shopify.com"
                className="px-8 py-4 bg-white text-black font-medium rounded-full hover:bg-gray-100 transition-all duration-200 text-[17px]"
                target="_blank"
                rel="noopener noreferrer"
              >
                Get started
              </a>
              <Link
                to="/pricing"
                className="px-8 py-4 text-white font-medium rounded-full border border-white/20 hover:bg-white/10 transition-all duration-200 text-[17px]"
              >
                View pricing
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Toast Notification */}
      {showToast && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          className="fixed bottom-8 right-8 z-50"
        >
          <div className="bg-black text-white px-6 py-4 rounded-2xl shadow-2xl border border-white/10 backdrop-blur-xl flex items-center gap-3">
            <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <div>
              <p className="font-semibold text-[15px]">Code copied!</p>
              <p className="text-sm text-gray-300">
                FIRST5FREE copied to clipboard
              </p>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default Home;
