import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Zap, ChevronRight } from 'lucide-react';

export default function Header() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <div className="astra-hero min-h-screen pt-20 flex items-center justify-center relative overflow-hidden">
      {/* Animated Background Elements */}
      <motion.div
        animate={{ x: [0, 30, 0], y: [0, 20, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-20 left-10 w-72 h-72 bg-red-600/20 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ x: [0, -30, 0], y: [0, -20, 0] }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute bottom-20 right-10 w-72 h-72 bg-yellow-600/20 rounded-full blur-3xl"
      />

      <div className="max-w-5xl mx-auto px-4 text-center relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Badge */}
          <motion.div variants={itemVariants} className="mb-8">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-600/20 border border-red-600/50 text-red-400">
              <Zap size={16} />
              Unleash Your Potential
            </span>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
          >
            <span className="block mb-2">Knowledge is Your</span>
            <span className="neon-text-red text-6xl md:text-8xl">WEAPON</span>
            <span className="block text-3xl md:text-5xl mt-4 text-slate-300">
              Master Skills from Industry Experts
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-slate-400 mb-8 max-w-2xl mx-auto leading-relaxed"
          >
            Join thousands of learners and transform your career with ASTRA.
            Learn cutting-edge technologies from world-class instructors through
            interactive live sessions and comprehensive courses.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link to="/courses" className="btn-primary inline-flex items-center justify-center gap-2">
              Explore Courses
              <ChevronRight size={20} />
            </Link>
            <button className="btn-secondary">
              Watch Demo
            </button>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-3 gap-4 mt-16 text-center"
          >
            {[
              { number: '50K+', label: 'Active Learners' },
              { number: '200+', label: 'Expert Courses' },
              { number: '4.9★', label: 'Average Rating' },
            ].map((stat, idx) => (
              <div key={idx} className="glass p-4 rounded-lg">
                <p className="neon-text text-2xl font-bold">{stat.number}</p>
                <p className="text-slate-400 text-sm">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}