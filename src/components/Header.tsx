import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white/80 backdrop-blur-xl border-b border-gray-100/50 sticky top-0 z-50">
      <nav className="section-container py-3">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-[21px] font-semibold text-black">
            MyCampaigner
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-10">
            <Link
              to="/"
              className="text-[14px] font-semibold text-gray-800 hover:text-black transition-colors"
            >
              Home
            </Link>
            <Link
              to="/features"
              className="text-[14px] font-semibold text-gray-800 hover:text-black transition-colors"
            >
              Features
            </Link>
            <Link
              to="/pricing"
              className="text-[14px] font-semibold text-gray-800 hover:text-black transition-colors"
            >
              Pricing
            </Link>
            <Link
              to="/contact"
              className="text-[14px] font-semibold text-gray-800 hover:text-black transition-colors"
            >
              Contact
            </Link>
            <a
              href="https://apps.shopify.com"
              className="px-5 py-2 bg-black text-white text-[14px] font-medium rounded-full hover:bg-gray-800 transition-all"
              target="_blank"
              rel="noopener noreferrer"
            >
              Get started
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6 text-gray-700"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {mobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden mt-4 pb-4 space-y-4"
          >
            <Link
              to="/"
              className="block text-gray-700 hover:text-primary-600"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/features"
              className="block text-gray-700 hover:text-primary-600"
              onClick={() => setMobileMenuOpen(false)}
            >
              Features
            </Link>
            <Link
              to="/pricing"
              className="block text-gray-700 hover:text-primary-600"
              onClick={() => setMobileMenuOpen(false)}
            >
              Pricing
            </Link>
            <Link
              to="/contact"
              className="block text-gray-700 hover:text-primary-600"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
            <a
              href="https://apps.shopify.com"
              className="block btn-primary text-center"
              target="_blank"
              rel="noopener noreferrer"
            >
              Install App
            </a>
          </motion.div>
        )}
      </nav>
    </header>
  );
};

export default Header;
