import { motion } from "framer-motion";
import SEO from "../components/SEO";

const Changelog = () => {
  const releases = [
    {
      version: "1.2.0",
      date: "2026-01-05",
      type: "feature",
      changes: [
        {
          type: "new",
          title: "Advanced Scheduling",
          description:
            "Set specific start and end times for campaigns with timezone support. Perfect for flash sales and time-limited promotions.",
        },
        {
          type: "new",
          title: "Customer Tag Targeting",
          description:
            "Create sophisticated customer segments using tags. Reward VIP customers, loyalty members, or specific groups with targeted discounts.",
        },
        {
          type: "improvement",
          title: "Dashboard Performance",
          description:
            "Significantly improved loading times for stores with large numbers of campaigns. Dashboard now loads 3x faster.",
        },
        {
          type: "fix",
          title: "Metafield Condition Bug",
          description:
            "Fixed issue where certain metafield types weren't being evaluated correctly in discount rules.",
        },
      ],
    },
    {
      version: "1.1.0",
      date: "2025-12-20",
      type: "feature",
      changes: [
        {
          type: "new",
          title: "Usage Analytics",
          description:
            "Track campaign performance with detailed analytics. See discount usage, revenue impact, and conversion metrics.",
        },
        {
          type: "new",
          title: "Bulk Campaign Management",
          description:
            "Activate, deactivate, or delete multiple campaigns at once. Save time managing large numbers of promotions.",
        },
        {
          type: "improvement",
          title: "Rule Builder UI",
          description:
            "Redesigned the rule builder interface for better clarity and ease of use. Adding complex conditions is now more intuitive.",
        },
      ],
    },
    {
      version: "1.0.5",
      date: "2025-12-10",
      type: "fix",
      changes: [
        {
          type: "fix",
          title: "Variant Selection",
          description:
            "Fixed issue where some variants weren't appearing in the product selector for stores with large catalogs.",
        },
        {
          type: "fix",
          title: "Percentage Calculation",
          description:
            "Corrected rounding behavior for percentage discounts to match Shopify's native discount rounding.",
        },
        {
          type: "improvement",
          title: "Error Messages",
          description:
            "Improved error messages throughout the app to be more helpful and actionable.",
        },
      ],
    },
    {
      version: "1.0.0",
      date: "2025-11-15",
      type: "major",
      changes: [
        {
          type: "new",
          title: "Official Launch",
          description:
            "MyCampaigner is now officially live on the Shopify App Store! 🎉",
        },
        {
          type: "new",
          title: "Inventory-Based Discounts",
          description:
            "Automatically adjust discount percentages based on product inventory levels. Clear excess stock intelligently.",
        },
        {
          type: "new",
          title: "Metafield Conditions",
          description:
            "Use custom metafields to control discount eligibility. Target products with specific attributes.",
        },
        {
          type: "new",
          title: "Multiple Discount Types",
          description:
            "Support for percentage off, fixed amount, and Buy X Get Y discount types.",
        },
        {
          type: "new",
          title: "Campaign Priorities",
          description:
            "Set priorities to control which discount applies when multiple rules match.",
        },
      ],
    },
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case "new":
        return "bg-green-100 text-green-800";
      case "improvement":
        return "bg-blue-100 text-blue-800";
      case "fix":
        return "bg-orange-100 text-orange-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "new":
        return "✨";
      case "improvement":
        return "⚡";
      case "fix":
        return "🔧";
      default:
        return "📝";
    }
  };

  const getVersionBadge = (type: string) => {
    switch (type) {
      case "major":
        return "bg-purple-600 text-white";
      case "feature":
        return "bg-primary-600 text-white";
      case "fix":
        return "bg-gray-600 text-white";
      default:
        return "bg-gray-600 text-white";
    }
  };

  return (
    <div className="py-20 bg-gradient-to-br from-gray-50 to-white min-h-screen">
      <SEO
        title="Changelog - Product Updates & Release Notes"
        description="Stay updated with the latest MyCampaigner features, improvements, and bug fixes. See what's new in each release."
        canonical="/changelog"
        keywords="changelog, updates, release notes, new features, product updates, version history"
      />
      <div className="section-container max-w-4xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Changelog
          </h1>
          <p className="text-xl text-gray-600">
            Track our progress and see what's new in MyCampaigner
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-200"></div>

          {/* Releases */}
          <div className="space-y-12">
            {releases.map((release, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative pl-20"
              >
                {/* Timeline dot */}
                <div className="absolute left-6 w-5 h-5 bg-primary-600 rounded-full border-4 border-white shadow-lg"></div>

                {/* Release card */}
                <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                  {/* Version header */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <span
                        className={`px-4 py-1 rounded-full text-sm font-bold ${getVersionBadge(
                          release.type
                        )}`}
                      >
                        v{release.version}
                      </span>
                      {release.type === "major" && (
                        <span className="text-2xl">🚀</span>
                      )}
                    </div>
                    <span className="text-gray-500 text-sm">
                      {new Date(release.date).toLocaleDateString("en-US", {
                        month: "long",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </span>
                  </div>

                  {/* Changes */}
                  <div className="space-y-4">
                    {release.changes.map((change, changeIndex) => (
                      <div key={changeIndex} className="flex gap-4">
                        <span className="text-2xl flex-shrink-0">
                          {getTypeIcon(change.type)}
                        </span>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <span
                              className={`px-3 py-1 rounded-full text-xs font-semibold uppercase ${getTypeColor(
                                change.type
                              )}`}
                            >
                              {change.type}
                            </span>
                            <h3 className="font-bold text-gray-900">
                              {change.title}
                            </h3>
                          </div>
                          <p className="text-gray-600 leading-relaxed">
                            {change.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Footer CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 text-center bg-gradient-to-br from-primary-50 to-purple-50 rounded-3xl p-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Have a Feature Request?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            We're always looking to improve. Let us know what features you'd
            like to see next!
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-4 bg-gradient-to-r from-primary-600 to-purple-600 text-white font-bold rounded-full hover:from-primary-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            Share Your Ideas
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Changelog;
