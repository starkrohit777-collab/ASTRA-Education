import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Star, Search, Filter } from 'lucide-react';
import { coursesData } from '../data/coursesData';

export default function Courses() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState('popular');

  const categories = ['All', 'Web Development', 'Data Science', 'Mobile Development', 'Cybersecurity', 'Cloud', 'Blockchain'];

  const filteredCourses = useMemo(() => {
    let filtered = coursesData;

    if (selectedCategory !== 'All') {
      filtered = filtered.filter(course => course.category === selectedCategory);
    }

    if (searchTerm) {
      filtered = filtered.filter(course =>
        course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        course.instructor.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (sortBy === 'price-low') {
      filtered.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-high') {
      filtered.sort((a, b) => b.price - a.price);
    } else if (sortBy === 'rating') {
      filtered.sort((a, b) => b.rating - a.rating);
    }

    return filtered;
  }, [searchTerm, selectedCategory, sortBy]);

  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <section className="bg-slate-900/50 py-12 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Explore <span className="neon-text-red">Courses</span>
          </h1>
          <p className="text-slate-400 text-lg">Master any skill from our comprehensive course library</p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-1"
          >
            <div className="glass p-6 rounded-lg sticky top-24">
              {/* Search */}
              <div className="mb-6">
                <label className="text-white font-semibold block mb-3">Search</label>
                <div className="relative">
                  <Search className="absolute left-3 top-3 text-slate-500" size={20} />
                  <input
                    type="text"
                    placeholder="Search courses..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-red-600"
                  />
                </div>
              </div>

              {/* Categories */}
              <div className="mb-6">
                <label className="text-white font-semibold block mb-3 flex items-center gap-2">
                  <Filter size={18} />
                  Category
                </label>
                <div className="space-y-2">
                  {categories.map(category => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`w-full text-left px-3 py-2 rounded transition-all ${
                        selectedCategory === category
                          ? 'bg-red-600 text-white'
                          : 'bg-slate-800 text-slate-300 hover:text-white'
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>

              {/* Sort */}
              <div>
                <label className="text-white font-semibold block mb-3">Sort By</label>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-red-600"
                >
                  <option value="popular">Most Popular</option>
                  <option value="rating">Highest Rated</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                </select>
              </div>
            </div>
          </motion.div>

          {/* Courses Grid */}
          <div className="lg:col-span-3">
            {filteredCourses.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {filteredCourses.map((course, idx) => (
                  <motion.div
                    key={course.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="glass rounded-lg overflow-hidden card-hover group border border-slate-700/50"
                  >
                    <div className="relative overflow-hidden h-48">
                      <img
                        src={course.image}
                        alt={course.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                      <div className="absolute top-4 right-4 bg-red-600 px-3 py-1 rounded-full text-white text-sm font-semibold">
                        {Math.round((1 - course.price / course.originalPrice) * 100)}% OFF
                      </div>
                      <div className="absolute bottom-4 left-4">
                        <p className="text-white text-sm font-semibold bg-black/50 px-3 py-1 rounded-full">
                          {course.level}
                        </p>
                      </div>
                    </div>

                    <div className="p-6">
                      <p className="text-red-400 text-sm font-semibold mb-2">{course.category}</p>
                      <h3 className="text-xl font-bold mb-2 text-white line-clamp-2">{course.title}</h3>
                      <p className="text-slate-400 text-sm mb-4">by {course.instructor}</p>

                      <div className="flex items-center gap-2 mb-4">
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              size={16}
                              className={i < Math.round(course.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-slate-600'}
                            />
                          ))}
                        </div>
                        <span className="text-slate-400 text-sm">({course.students.toLocaleString()})</span>
                      </div>

                      <p className="text-slate-400 text-sm mb-4">
                        {course.duration} • {course.modules.length} modules
                      </p>

                      <div className="flex items-baseline gap-2 mb-4">
                        <span className="text-2xl font-bold text-white">₹{course.price}</span>
                        <span className="text-slate-500 line-through">₹{course.originalPrice}</span>
                      </div>

                      <Link
                        to={`/course/${course.id}`}
                        className="btn-primary w-full text-center block"
                      >
                        View Details
                      </Link>
                    </div>
                  </motion.div>
                ))}
              </div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-12"
              >
                <p className="text-slate-400 text-lg">No courses found. Try adjusting your filters.</p>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}