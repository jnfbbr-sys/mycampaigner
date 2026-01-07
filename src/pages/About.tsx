import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";

const About = () => {
  return (
    <div className="py-20">
      <SEO
        title="About Us - Our Mission & Story"
        description="Learn about MyCampaigner's mission to make advanced discount automation accessible to all Shopify merchants, regardless of their plan or technical expertise."
        canonical="/about"
        keywords="about mycampaigner, company, mission, shopify app, discount automation"
      />
      <div className="section-container max-w-4xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About MyCampaigner
          </h1>
          <p className="text-xl text-gray-600">
            Empowering Shopify merchants with intelligent discount automation
          </p>
        </motion.div>

        {/* Mission Section */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
          <div className="prose prose-lg max-w-none text-gray-700">
            <p>
              At MyCampaigner, we believe that sophisticated discount automation
              shouldn't be limited to enterprise merchants with deep pockets and
              technical teams. Every Shopify store, regardless of size or plan,
              deserves access to powerful tools that can boost sales and improve
              customer experience.
            </p>
            <p>
              We're on a mission to democratize advanced discount functionality
              by leveraging Shopify Functions - making features that were once
              exclusive to Shopify Plus available to everyone.
            </p>
          </div>
        </motion.section>

        {/* Story Section */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-16 bg-gradient-to-br from-primary-50 to-purple-50 rounded-3xl p-8 md:p-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
          <div className="prose prose-lg max-w-none text-gray-700">
            <p>
              MyCampaigner was born from a simple frustration: managing discount
              campaigns for Shopify stores was unnecessarily complex and
              expensive. Merchants either had to rely on manual discount codes
              (which customers often forgot to use) or invest in Shopify Plus
              and hire developers to write custom scripts.
            </p>
            <p>
              When Shopify introduced Functions, we saw an opportunity to change
              the game. We built MyCampaigner to give every merchant the power
              to create sophisticated, automated discount campaigns without
              writing a single line of code.
            </p>
          </div>
        </motion.section>

        {/* Values Section */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Values</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Accessibility",
                description:
                  "Advanced features should be available to all merchants, not just those on expensive plans.",
                icon: "🌍",
              },
              {
                title: "Simplicity",
                description:
                  "Powerful doesn't have to mean complicated. We make complex automation simple to understand and use.",
                icon: "✨",
              },
              {
                title: "Performance",
                description:
                  "We leverage cutting-edge technology (Shopify Functions) to deliver fast, reliable discount automation.",
                icon: "⚡",
              },
              {
                title: "Customer Success",
                description:
                  "Your success is our success. We're committed to helping you maximize the value of automated discounts.",
                icon: "🎯",
              },
            ].map((value, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Technology Section */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Built on Modern Technology
          </h2>
          <div className="prose prose-lg max-w-none text-gray-700">
            <p>
              MyCampaigner is built entirely on Shopify Functions, the latest
              advancement in Shopify's platform. Unlike legacy script-based
              solutions, Functions run at the platform level, offering:
            </p>
            <ul className="space-y-3">
              <li className="flex items-start">
                <svg
                  className="w-6 h-6 mr-3 text-green-500 flex-shrink-0 mt-1"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.5"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M5 13l4 4L19 7" />
                </svg>
                <span>
                  <strong>Lightning-fast performance</strong> - Millisecond
                  response times
                </span>
              </li>
              <li className="flex items-start">
                <svg
                  className="w-6 h-6 mr-3 text-green-500 flex-shrink-0 mt-1"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.5"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M5 13l4 4L19 7" />
                </svg>
                <span>
                  <strong>Universal compatibility</strong> - Works on all
                  Shopify plans
                </span>
              </li>
              <li className="flex items-start">
                <svg
                  className="w-6 h-6 mr-3 text-green-500 flex-shrink-0 mt-1"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.5"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M5 13l4 4L19 7" />
                </svg>
                <span>
                  <strong>Future-proof architecture</strong> - Built on
                  Shopify's latest technology
                </span>
              </li>
              <li className="flex items-start">
                <svg
                  className="w-6 h-6 mr-3 text-green-500 flex-shrink-0 mt-1"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.5"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M5 13l4 4L19 7" />
                </svg>
                <span>
                  <strong>Rock-solid reliability</strong> - Platform-level
                  execution with automatic scaling
                </span>
              </li>
            </ul>
          </div>
        </motion.section>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center bg-gradient-to-br from-primary-600 to-purple-600 text-white rounded-3xl p-12"
        >
          <h2 className="text-3xl font-bold mb-4">Join Hundreds of Merchants</h2>
          <p className="text-xl mb-8 text-white/90">
            Start automating your discounts today and see the difference it
            makes for your store.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://apps.shopify.com"
              className="px-8 py-4 bg-white text-primary-600 font-bold rounded-full hover:bg-gray-50 transition-all duration-200 shadow-lg hover:shadow-xl"
              target="_blank"
              rel="noopener noreferrer"
            >
              Get Started Free
            </a>
            <Link
              to="/contact"
              className="px-8 py-4 bg-transparent text-white font-semibold rounded-full border-2 border-white hover:bg-white/10 transition-all duration-200"
            >
              Contact Us
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
