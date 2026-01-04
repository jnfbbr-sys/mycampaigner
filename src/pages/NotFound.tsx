import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const NotFound = () => {
  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-gradient-to-br from-gray-50 to-white">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto"
        >
          {/* 404 Number */}
          <div className="relative mb-8">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-[180px] md:text-[240px] font-bold leading-none"
            >
              <span className="bg-gradient-to-r from-primary-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                404
              </span>
            </motion.div>
            <div className="absolute inset-0 bg-gradient-to-r from-primary-600/20 via-purple-600/20 to-pink-600/20 blur-3xl -z-10"></div>
          </div>

          {/* Message */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Oops! The page you're looking for doesn't exist. It might have
              been moved or deleted.
            </p>
          </motion.div>

          {/* Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <button
              onClick={() => window.history.back()}
              className="group relative px-8 py-4 bg-gradient-to-r from-primary-600 to-purple-600 text-white font-semibold rounded-xl hover:shadow-2xl hover:shadow-primary-500/50 transition-all duration-300 text-lg transform hover:-translate-y-0.5"
            >
              <span className="relative z-10">Go Back</span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary-700 to-purple-700 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </button>
            <Link
              to="/contact"
              className="px-8 py-4 bg-white text-gray-700 font-semibold rounded-xl border-2 border-gray-200 hover:border-primary-300 hover:bg-gray-50 transition-all duration-300 text-lg shadow-sm hover:shadow-md"
            >
              Contact Support
            </Link>
          </motion.div>

          {/* Decorative elements */}
          <div className="mt-16 grid grid-cols-3 gap-4 opacity-30">
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0 }}
              className="h-2 bg-gradient-to-r from-primary-600 to-purple-600 rounded-full"
            ></motion.div>
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
              className="h-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full"
            ></motion.div>
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}
              className="h-2 bg-gradient-to-r from-pink-600 to-primary-600 rounded-full"
            ></motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFound;
