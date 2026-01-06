import { useParams, Link, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

// Import MDX posts
import GettingStarted from "../content/blog/getting-started-with-automated-discounts.mdx";
import DiscountStrategies from "../content/blog/5-discount-strategies-to-boost-sales.mdx";
import ShopifyFunctions from "../content/blog/shopify-functions-explained.mdx";

interface PostMeta {
  title: string;
  date: string;
  author: string;
  excerpt: string;
  image: string;
  tags: string[];
}

interface PostConfig {
  component: React.ComponentType;
  meta: PostMeta;
}

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    window.scrollTo(0, 0);
  }, []);

  // Map slugs to MDX components and metadata
  const posts: Record<string, PostConfig> = {
    "getting-started-with-automated-discounts": {
      component: GettingStarted,
      meta: {
        title: "Getting Started with Automated Discounts in Shopify",
        date: "2026-01-05",
        author: "MyCampaigner Team",
        excerpt:
          "Learn how to set up your first automated discount campaign and boost your sales with smart pricing strategies.",
        image:
          "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&h=630&fit=crop",
        tags: ["tutorial", "discounts", "shopify"],
      },
    },
    "5-discount-strategies-to-boost-sales": {
      component: DiscountStrategies,
      meta: {
        title: "5 Discount Strategies That Actually Boost Sales",
        date: "2026-01-03",
        author: "MyCampaigner Team",
        excerpt:
          "Discover proven discount strategies that increase revenue without hurting your margins. Real examples from successful Shopify stores.",
        image:
          "https://images.unsplash.com/photo-1607083206869-4c7672e72a8a?w=1200&h=630&fit=crop",
        tags: ["strategy", "marketing", "sales"],
      },
    },
    "shopify-functions-explained": {
      component: ShopifyFunctions,
      meta: {
        title: "Understanding Shopify Functions: The Future of Discounts",
        date: "2025-12-28",
        author: "MyCampaigner Team",
        excerpt:
          "Shopify Functions are revolutionizing how apps customize checkout. Learn what they are and why they matter for your store.",
        image:
          "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=630&fit=crop",
        tags: ["technical", "shopify", "education"],
      },
    },
  };

  if (!slug || !posts[slug]) {
    return <Navigate to="/blog" replace />;
  }

  const { component: PostContent, meta } = posts[slug];

  return (
    <div className="py-20">
      <article className="section-container max-w-4xl mx-auto">
        {/* Back to Blog */}
        <Link
          to="/blog"
          className="inline-flex items-center text-primary-600 hover:text-primary-700 font-semibold mb-8 transition-colors"
        >
          <svg
            className="w-5 h-5 mr-2"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M15 19l-7-7 7-7" />
          </svg>
          Back to Blog
        </Link>

        {/* Header */}
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {meta.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-primary-100 text-primary-700 text-xs font-semibold rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {meta.title}
          </h1>

          {/* Meta */}
          <div className="flex items-center gap-4 text-gray-600 mb-8">
            <span className="font-semibold">{meta.author}</span>
            <span>•</span>
            <time dateTime={meta.date}>
              {new Date(meta.date).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </time>
          </div>

          {/* Featured Image */}
          <div className="rounded-2xl overflow-hidden shadow-xl mb-12">
            <img
              src={meta.image}
              alt={meta.title}
              className="w-full h-auto"
            />
          </div>
        </motion.header>

        {/* Blog Content */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: mounted ? 1 : 0 }}
          transition={{ delay: 0.2 }}
          className="prose prose-lg prose-slate max-w-none
            prose-headings:font-bold prose-headings:text-gray-900 prose-headings:tracking-tight
            prose-h1:text-4xl prose-h1:mb-8 prose-h1:mt-12
            prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6 prose-h2:border-b prose-h2:border-gray-200 prose-h2:pb-3
            prose-h3:text-2xl prose-h3:mt-10 prose-h3:mb-4
            prose-h4:text-xl prose-h4:mt-8 prose-h4:mb-3
            prose-p:text-gray-700 prose-p:leading-relaxed prose-p:text-lg prose-p:mb-6
            prose-a:text-primary-600 prose-a:font-medium prose-a:no-underline hover:prose-a:text-primary-700 hover:prose-a:underline
            prose-strong:text-gray-900 prose-strong:font-bold
            prose-em:text-gray-700 prose-em:italic
            prose-ul:my-6 prose-ul:list-disc prose-ul:pl-6
            prose-ol:my-6 prose-ol:list-decimal prose-ol:pl-6
            prose-li:my-3 prose-li:text-gray-700 prose-li:leading-relaxed
            prose-code:text-primary-700 prose-code:bg-primary-50 prose-code:px-2 prose-code:py-1 prose-code:rounded prose-code:text-sm prose-code:font-mono prose-code:before:content-none prose-code:after:content-none
            prose-pre:bg-gray-900 prose-pre:text-gray-100 prose-pre:rounded-xl prose-pre:p-6 prose-pre:overflow-x-auto prose-pre:shadow-lg
            prose-pre:code:bg-transparent prose-pre:code:text-gray-100 prose-pre:code:p-0
            prose-blockquote:border-l-4 prose-blockquote:border-primary-500 prose-blockquote:pl-6 prose-blockquote:italic prose-blockquote:text-gray-700 prose-blockquote:bg-gray-50 prose-blockquote:py-4 prose-blockquote:my-8
            prose-hr:border-gray-200 prose-hr:my-12
            prose-table:border-collapse prose-table:w-full
            prose-thead:border-b-2 prose-thead:border-gray-300
            prose-th:text-left prose-th:font-semibold prose-th:text-gray-900 prose-th:p-3
            prose-td:p-3 prose-td:border-b prose-td:border-gray-200
            prose-img:rounded-xl prose-img:shadow-lg prose-img:my-8 prose-img:w-full"
        >
          <PostContent />
        </motion.div>

        {/* Footer CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 p-8 bg-gradient-to-br from-primary-50 to-purple-50 rounded-3xl text-center"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to Transform Your Discount Strategy?
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Join hundreds of Shopify merchants using MyCampaigner to automate
            their discounts and boost sales.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://apps.shopify.com"
              className="px-8 py-4 bg-gradient-to-r from-primary-600 to-purple-600 text-white font-bold rounded-full hover:from-primary-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl"
              target="_blank"
              rel="noopener noreferrer"
            >
              Start Free Trial
            </a>
            <Link
              to="/contact"
              className="px-8 py-4 bg-white text-gray-900 font-semibold rounded-full hover:bg-gray-50 transition-all duration-200 shadow-lg"
            >
              Contact Us
            </Link>
          </div>
        </motion.div>

        {/* Related Posts or Back to Blog */}
        <div className="mt-12 text-center">
          <Link
            to="/blog"
            className="inline-flex items-center text-gray-600 hover:text-gray-900 font-semibold transition-colors"
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M15 19l-7-7 7-7" />
            </svg>
            View All Posts
          </Link>
        </div>
      </article>
    </div>
  );
};

export default BlogPost;
