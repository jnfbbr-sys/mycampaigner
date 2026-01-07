import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import SEO from "../components/SEO";

interface BlogPost {
  slug: string;
  title: string;
  date: string;
  author: string;
  excerpt: string;
  image: string;
  tags: string[];
}

const Blog = () => {
  // Blog posts metadata
  const posts: BlogPost[] = [
    {
      slug: "getting-started-with-automated-discounts",
      title: "Getting Started with Automated Discounts in Shopify",
      date: "2026-01-05",
      author: "MyCampaigner Team",
      excerpt:
        "Learn how to set up your first automated discount campaign and boost your sales with smart pricing strategies.",
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&h=630&fit=crop",
      tags: ["tutorial", "discounts", "shopify"],
    },
    {
      slug: "5-discount-strategies-to-boost-sales",
      title: "5 Discount Strategies That Actually Boost Sales",
      date: "2026-01-03",
      author: "MyCampaigner Team",
      excerpt:
        "Discover proven discount strategies that increase revenue without hurting your margins. Real examples from successful Shopify stores.",
      image:
        "https://images.unsplash.com/photo-1607083206869-4c7672e72a8a?w=1200&h=630&fit=crop",
      tags: ["strategy", "marketing", "sales"],
    },
    {
      slug: "shopify-functions-explained",
      title: "Understanding Shopify Functions: The Future of Discounts",
      date: "2025-12-28",
      author: "MyCampaigner Team",
      excerpt:
        "Shopify Functions are revolutionizing how apps customize checkout. Learn what they are and why they matter for your store.",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=630&fit=crop",
      tags: ["technical", "shopify", "education"],
    },
  ];

  // Structured data for blog listing
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "MyCampaigner Blog",
    description: "Expert tips, strategies, and insights on automated discounts, Shopify Functions, and boosting your e-commerce sales.",
    url: "https://mycampaigner.com/blog",
    blogPost: posts.map((post) => ({
      "@type": "BlogPosting",
      headline: post.title,
      description: post.excerpt,
      image: post.image,
      datePublished: post.date,
      author: {
        "@type": "Organization",
        name: post.author,
      },
      url: `https://mycampaigner.com/blog/${post.slug}`,
    })),
  };

  return (
    <div className="py-20">
      <SEO
        title="Blog - Discount Strategies & Shopify Tips"
        description="Expert tips, strategies, and insights on automated discounts, Shopify Functions, and boosting your e-commerce sales."
        canonical="/blog"
        keywords="shopify blog, discount strategies, e-commerce tips, shopify functions, pricing strategies"
      />
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
      <div className="section-container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Blog
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Tips, strategies, and insights to help you get the most out of
            automated discounts.
          </p>
        </motion.div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {posts.map((post, index) => (
            <motion.article
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group"
            >
              <Link to={`/blog/${post.slug}`}>
                {/* Featured Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-3">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-primary-100 text-primary-700 text-xs font-semibold rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Title */}
                  <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                    {post.title}
                  </h2>

                  {/* Excerpt */}
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>

                  {/* Meta */}
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>{post.author}</span>
                    <span>
                      {new Date(post.date).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </span>
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-20 text-center bg-gradient-to-br from-primary-50 to-purple-50 rounded-3xl p-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Start creating automated discount campaigns today and see the
            difference it makes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://apps.shopify.com"
              className="px-8 py-4 bg-gradient-to-r from-primary-600 to-purple-600 text-white font-bold rounded-full hover:from-primary-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl"
              target="_blank"
              rel="noopener noreferrer"
            >
              Install Now
            </a>
            <Link
              to="/pricing"
              className="px-8 py-4 bg-white text-gray-900 font-semibold rounded-full hover:bg-gray-50 transition-all duration-200 shadow-lg"
            >
              View Pricing
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Blog;
