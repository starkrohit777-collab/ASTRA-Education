import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center pt-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center"
      >
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-9xl mb-8"
        >
          ⚔️
        </motion.div>

        <h1 className="text-6xl font-bold mb-4 neon-text-red">404</h1>
        <p className="text-2xl font-semibold mb-4 text-white">Page Not Found</p>
        <p className="text-slate-400 text-lg mb-8 max-w-md">
          Looks like this path doesn't exist in our warrior academy. Let's get you back on track!
        </p>

        <Link to="/" className="btn-primary inline-flex items-center gap-2">
          <Home size={20} />
          Back to Home
        </Link>
      </motion.div>
    </div>
  );
}