import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Star, Users, Clock, Award, Play, ArrowLeft, ShoppingCart, Check } from 'lucide-react';
import { coursesData } from '../data/coursesData';

export default function CourseDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isEnrolled, setIsEnrolled] = useState(false);
  const course = coursesData.find(c => c.id === parseInt(id));

  if (!course) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20">
        <button
          onClick={() => navigate('/courses')}
          className="btn-primary flex items-center gap-2"
        >
          <ArrowLeft size={20} />
          Back to Courses
        </button>
      </div>
    );
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative h-96 overflow-hidden">
        <img
          src={course.image}
          alt={course.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />

        <motion.button
          whileHover={{ x: -5 }}
          onClick={() => navigate('/courses')}
          className="absolute top-8 left-8 glass px-4 py-2 rounded-lg flex items-center gap-2 hover:border-red-600"
        >
          <ArrowLeft size={20} />
          Back
        </motion.button>
      </section>

      {/* Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -mt-32 relative z-10 pb-20"
      >
        <div className="glass p-8 rounded-lg border border-slate-700/50 mb-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Left Content */}
            <div className="flex-1">
              <motion.div variants={itemVariants}>
                <p className="text-red-400 font-semibold mb-3">{course.category}</p>
                <h1 className="text-4xl md:text-5xl font-bold mb-4">{course.title}</h1>
                <p className="text-slate-400 text-lg mb-6">{course.description}</p>

                <div className="flex flex-wrap gap-4 mb-6">
                  <div className="flex items-center gap-2">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={18}
                          className={i < Math.round(course.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-slate-600'}
                        />
                      ))}
                    </div>
                    <span className="text-slate-400">{course.rating} ({course.students.toLocaleString()} reviews)</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-400">
                    <Users size={18} />
                    {course.students.toLocaleString()} students
                  </div>
                  <div className="flex items-center gap-2 text-slate-400">
                    <Clock size={18} />
                    {course.duration}
                  </div>
                </div>

                <div className="flex items-center gap-4 mb-6">
                  <div>
                    <p className="text-slate-400 text-sm">Instructor</p>
                    <p className="text-xl font-semibold text-white">{course.instructor}</p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right Sidebar */}
            <motion.div variants={itemVariants} className="lg:w-80">
              <div className="glass p-6 rounded-lg sticky top-28">
                <div className="mb-6">
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-4xl font-bold text-white">₹{course.price}</span>
                    <span className="text-slate-500 line-through">₹{course.originalPrice}</span>
                  </div>
                  <p className="text-red-400 font-semibold">
                    {Math.round((1 - course.price / course.originalPrice) * 100)}% OFF
                  </p>
                </div>

                <button
                  onClick={() => setIsEnrolled(!isEnrolled)}
                  className={`w-full mb-4 py-3 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all ${
                    isEnrolled
                      ? 'bg-green-600 hover:bg-green-700'
                      : 'btn-primary'
                  }`}
                >
                  {isEnrolled ? (
                    <>
                      <Check size={20} />
                      Enrolled
                    </>
                  ) : (
                    <>
                      <ShoppingCart size={20} />
                      Enroll Now
                    </>
                  )}
                </button>

                <div className="space-y-3 pt-4 border-t border-slate-700">
                  {course.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <Award size={18} className="text-red-600 mt-1 flex-shrink-0" />
                      <span className="text-slate-300">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Course Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            {/* Modules */}
            <motion.div variants={itemVariants} className="glass p-8 rounded-lg border border-slate-700/50 mb-8">
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
                <Play className="text-red-600" />
                Course Curriculum
              </h2>

              <div className="space-y-4">
                {course.modules.map((module, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    className="glass p-4 rounded-lg border border-slate-700/50 hover:border-red-600/50 transition-all cursor-pointer group"
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="font-semibold text-white group-hover:text-red-400 transition-colors">
                          {module.title}
                        </h3>
                        <p className="text-slate-400 text-sm mt-1">{module.lessons} lessons</p>
                      </div>
                      <div className="bg-red-600/20 px-3 py-1 rounded text-red-400 text-sm font-semibold">
                        {module.lessons} hrs
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Requirements */}
            <motion.div variants={itemVariants} className="glass p-8 rounded-lg border border-slate-700/50">
              <h2 className="text-3xl font-bold mb-6">Requirements</h2>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-slate-300">
                  <div className="w-2 h-2 bg-red-600 rounded-full" />
                  Basic understanding of programming concepts
                </li>
                <li className="flex items-center gap-3 text-slate-300">
                  <div className="w-2 h-2 bg-red-600 rounded-full" />
                  Computer with internet connection
                </li>
                <li className="flex items-center gap-3 text-slate-300">
                  <div className="w-2 h-2 bg-red-600 rounded-full" />
                  Passion to learn and grow
                </li>
                <li className="flex items-center gap-3 text-slate-300">
                  <div className="w-2 h-2 bg-red-600 rounded-full" />
                  Commitment of 5-10 hours per week
                </li>
              </ul>
            </motion.div>
          </div>

          {/* What You'll Learn */}
          <motion.div variants={itemVariants} className="glass p-8 rounded-lg border border-slate-700/50 h-fit">
            <h2 className="text-2xl font-bold mb-6">What You'll Learn</h2>
            <ul className="space-y-4">
              {[
                'Master core concepts and best practices',
                'Build real-world projects from scratch',
                'Understand industry standards and tools',
                'Gain practical hands-on experience',
                'Get job-ready in 12 weeks',
                'Access lifetime learning resources',
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <Check className="text-red-600 mt-1 flex-shrink-0" size={20} />
                  <span className="text-slate-300">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}