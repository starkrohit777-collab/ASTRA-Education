import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Mail, Lock, Eye, EyeOff } from 'lucide-react';

export default function Login() {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: '',
    confirmPassword: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Login
    if (isLogin) {
      if (formData.email && formData.password) {
        alert('Login successful!');
        navigate('/');
      } else {
        alert('Please enter your email and password.');
      }
    }

    // Sign Up
    else {
      if (
        formData.name &&
        formData.email &&
        formData.password &&
        formData.password === formData.confirmPassword
      ) {
        alert('Account created successfully!');

        setIsLogin(true);

        setFormData({
          email: formData.email,
          password: '',
          name: '',
          confirmPassword: '',
        });
      } else {
        alert('Please fill all fields and make sure passwords match.');
      }
    }
  };

  const containerVariants = {
    hidden: {
      opacity: 0,
    },

    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },

    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <div className="min-h-screen flex items-center justify-center pt-20 pb-20 px-4">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="w-full max-w-md"
      >
        <div className="glass p-8 rounded-lg border border-slate-700/50">

          {/* Logo */}
          <motion.div
            variants={itemVariants}
            className="text-center mb-8"
          >
            <div className="text-5xl mb-4">⚔️</div>

            <h1 className="neon-text text-3xl">
              ASTRA
            </h1>

            <p className="text-slate-400 mt-2">
              {isLogin
                ? 'Welcome Back, Warrior!'
                : 'Join Our Academy!'}
            </p>
          </motion.div>


          {/* Tabs */}
          <motion.div
            variants={itemVariants}
            className="flex gap-4 mb-8"
          >
            <button
              type="button"
              onClick={() => setIsLogin(true)}
              className={`flex-1 py-2 rounded-lg font-semibold transition-all ${
                isLogin
                  ? 'bg-red-600 text-white'
                  : 'bg-slate-800 text-slate-400 hover:text-white'
              }`}
            >
              Login
            </button>

            <button
              type="button"
              onClick={() => setIsLogin(false)}
              className={`flex-1 py-2 rounded-lg font-semibold transition-all ${
                !isLogin
                  ? 'bg-red-600 text-white'
                  : 'bg-slate-800 text-slate-400 hover:text-white'
              }`}
            >
              Sign Up
            </button>
          </motion.div>


          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="space-y-4 mb-6"
          >

            {/* Name */}
            {!isLogin && (
              <motion.div variants={itemVariants}>
                <label className="block text-white font-semibold mb-2">
                  Full Name
                </label>

                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-red-600 transition-colors"
                  placeholder="Enter your full name"
                />
              </motion.div>
            )}


            {/* Email */}
            <motion.div variants={itemVariants}>
              <label className="block text-white font-semibold mb-2">
                Email
              </label>

              <div className="relative">
                <Mail
                  className="absolute left-4 top-3.5 text-slate-500"
                  size={20}
                />

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full pl-12 pr-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-red-600 transition-colors"
                  placeholder="Enter your email"
                />
              </div>
            </motion.div>


            {/* Password */}
            <motion.div variants={itemVariants}>
              <label className="block text-white font-semibold mb-2">
                Password
              </label>

              <div className="relative">
                <Lock
                  className="absolute left-4 top-3.5 text-slate-500"
                  size={20}
                />

                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full pl-12 pr-12 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-red-600 transition-colors"
                  placeholder="Enter your password"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-3.5 text-slate-500 hover:text-slate-400"
                >
                  {showPassword ? (
                    <EyeOff size={20} />
                  ) : (
                    <Eye size={20} />
                  )}
                </button>
              </div>
            </motion.div>


            {/* Confirm Password */}
            {!isLogin && (
              <motion.div variants={itemVariants}>
                <label className="block text-white font-semibold mb-2">
                  Confirm Password
                </label>

                <div className="relative">
                  <Lock
                    className="absolute left-4 top-3.5 text-slate-500"
                    size={20}
                  />

                  <input
                    type={showPassword ? 'text' : 'password'}
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    className="w-full pl-12 pr-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-red-600 transition-colors"
                    placeholder="Confirm your password"
                  />
                </div>
              </motion.div>
            )}


            {/* Forgot Password */}
            {isLogin && (
              <motion.div
                variants={itemVariants}
                className="text-right"
              >
                <button
                  type="button"
                  onClick={() =>
                    alert('Password reset feature coming soon!')
                  }
                  className="text-red-400 hover:text-red-300 text-sm"
                >
                  Forgot password?
                </button>
              </motion.div>
            )}


            {/* Submit */}
            <motion.button
              variants={itemVariants}
              type="submit"
              className="btn-primary w-full"
            >
              {isLogin ? 'Login' : 'Create Account'}
            </motion.button>

          </form>


          {/* Divider */}
          <motion.div
            variants={itemVariants}
            className="flex items-center gap-4 mb-6"
          >
            <div className="flex-1 h-px bg-slate-700" />

            <span className="text-slate-500 text-sm">
              OR
            </span>

            <div className="flex-1 h-px bg-slate-700" />
          </motion.div>


          {/* Social Login */}
          <motion.div
            variants={itemVariants}
            className="space-y-3 mb-6"
          >

            <button
              type="button"
              onClick={() =>
                alert('Google login will be connected later.')
              }
              className="w-full flex items-center justify-center gap-3 px-4 py-3 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-lg text-white font-semibold transition-colors"
            >
              <span className="font-bold text-lg">
                G
              </span>

              Continue with Google
            </button>


            <button
              type="button"
              onClick={() =>
                alert('GitHub login will be connected later.')
              }
              className="w-full flex items-center justify-center gap-3 px-4 py-3 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-lg text-white font-semibold transition-colors"
            >
              <span className="font-bold text-lg">
                GH
              </span>

              Continue with GitHub
            </button>

          </motion.div>


          {/* Footer */}
          <motion.p
            variants={itemVariants}
            className="text-center text-slate-400"
          >
            {isLogin
              ? "Don't have an account?"
              : 'Already have an account?'}

            <button
              type="button"
              onClick={() => setIsLogin(!isLogin)}
              className="text-red-400 hover:text-red-300 font-semibold ml-2"
            >
              {isLogin ? 'Sign up' : 'Login'}
            </button>
          </motion.p>

        </div>
      </motion.div>
    </div>
  );
}