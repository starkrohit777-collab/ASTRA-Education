import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-5xl mx-auto">

        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="text-6xl mb-5">⚔️</div>

          <h1 className="text-4xl md:text-6xl font-bold mb-5">
            About <span className="neon-text-red">ASTRA</span>
          </h1>

          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            ASTRA is a modern learning platform built to help students
            develop practical skills, learn from expert instructors,
            and become warriors of knowledge.
          </p>
        </motion.div>

        {/* Mission */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glass p-8 md:p-10 rounded-lg border border-red-600/30 mb-8"
        >
          <h2 className="text-3xl font-bold mb-4">
            Our <span className="neon-text-red">Mission</span>
          </h2>

          <p className="text-slate-400 leading-7">
            Our mission is simple — make quality education accessible,
            practical and engaging. ASTRA brings courses, live learning
            sessions and useful resources together in one place.
          </p>
        </motion.div>

        {/* What We Offer */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="glass p-6 rounded-lg border border-slate-700/50"
          >
            <div className="text-4xl mb-4">📚</div>

            <h3 className="text-xl font-bold text-white mb-3">
              Quality Courses
            </h3>

            <p className="text-slate-400">
              Learn useful skills through structured and practical courses.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="glass p-6 rounded-lg border border-slate-700/50"
          >
            <div className="text-4xl mb-4">🎥</div>

            <h3 className="text-xl font-bold text-white mb-3">
              Live Learning
            </h3>

            <p className="text-slate-400">
              Join live sessions and learn directly from experienced
              instructors.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="glass p-6 rounded-lg border border-slate-700/50"
          >
            <div className="text-4xl mb-4">⚡</div>

            <h3 className="text-xl font-bold text-white mb-3">
              Practical Skills
            </h3>

            <p className="text-slate-400">
              Focus on skills that can actually be applied in real projects.
            </p>
          </motion.div>

        </div>

        {/* Closing */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-center mt-16"
        >
          <h2 className="text-3xl font-bold mb-3">
            Knowledge is your <span className="neon-text">weapon.</span>
          </h2>

          <p className="text-slate-500">
            Keep learning. Keep building. Keep rising.
          </p>
        </motion.div>

      </div>
    </div>
  );
}