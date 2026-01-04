import { motion } from "framer-motion";

const Features = () => {
  const features = [
    {
      category: "Discount Rules",
      items: [
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
      ],
    },
    {
      category: "Advanced Features",
      items: [
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
      ],
    },
    {
      category: "Management & Reporting",
      items: [
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
      ],
    },
  ];

  return (
    <div className="py-20">
      <div className="section-container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Features Built for Modern Commerce
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to create, manage, and optimize your discount
            campaigns
          </p>
        </motion.div>

        {/* Feature Categories */}
        <div className="space-y-20">
          {features.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                {category.category}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {category.items.map((item, itemIndex) => (
                  <motion.div
                    key={itemIndex}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: itemIndex * 0.1 }}
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
                      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-20 text-center bg-gradient-to-br from-primary-50 to-white p-12 rounded-2xl"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Install MyCampaigner today and start automating your discounts
          </p>
          <a
            href="https://apps.shopify.com"
            className="btn-primary text-lg"
            target="_blank"
            rel="noopener noreferrer"
          >
            Install on Shopify
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Features;
