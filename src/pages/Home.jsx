import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Header from '../Components/Header';
import { coursesData, testimonials, features } from '../data/coursesData';
import { Star } from 'lucide-react';

export default function Home() {
  const containerStyle = {
    width: '100%',
    maxWidth: '1280px',
    margin: '0 auto',
    paddingLeft: '32px',
    paddingRight: '32px',
    boxSizing: 'border-box',
  };

  return (
    <div style={{ width: '100%', maxWidth: '100%', minHeight: '100vh', overflowX: 'hidden' }}>
      <Header />

      <section style={{ width: '100%', padding: '80px 0', background: 'rgba(15, 23, 42, 0.5)', overflow: 'hidden' }}>
        <div style={containerStyle}>
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="text-center" style={{ marginBottom: '64px' }}>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Why Choose <span className="neon-text-red">ASTRA?</span></h2>
            <p className="text-slate-400 text-lg">Become a warrior of knowledge with our premium features</p>
          </motion.div>

          <div className="astra-feature-grid">
            {features.map((feature, idx) => (
              <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }} className="glass p-8 rounded-lg border border-slate-700/50" style={{ minWidth: 0, width: '100%', boxSizing: 'border-box' }}>
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-2 text-white">{feature.title}</h3>
                <p className="text-slate-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ width: '100%', padding: '80px 0', overflow: 'hidden' }}>
        <div style={containerStyle}>
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center" style={{ marginBottom: '64px' }}>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured <span className="neon-text-red">Courses</span></h2>
            <p className="text-slate-400 text-lg">Choose from our most popular and highly-rated courses</p>
          </motion.div>

          <div className="astra-course-grid">
            {coursesData.slice(0, 3).map((course, idx) => (
              <motion.div key={course.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }} className="glass rounded-lg overflow-hidden border border-slate-700/50" style={{ minWidth: 0, width: '100%', boxSizing: 'border-box' }}>
                <div className="relative overflow-hidden h-40">
                  <img src={course.image} alt={course.title} className="w-full h-full object-cover" />
                  <div className="absolute top-4 right-4 bg-red-600 px-3 py-1 rounded-full text-white text-sm font-semibold">{Math.round((1 - course.price / course.originalPrice) * 100)}% OFF</div>
                </div>
                <div className="p-6">
                  <p className="text-red-400 text-sm font-semibold mb-2">{course.category}</p>
                  <h3 className="text-xl font-bold mb-2 text-white">{course.title}</h3>
                  <p className="text-slate-400 text-sm mb-4">by {course.instructor}</p>
                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex">{[...Array(5)].map((_, i) => <Star key={i} size={16} className={i < Math.round(course.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-slate-600'} />)}</div>
                    <span className="text-slate-400 text-sm">({course.students.toLocaleString()})</span>
                  </div>
                  <div className="flex items-baseline gap-2 mb-4">
                    <span className="text-2xl font-bold text-white">₹{course.price}</span>
                    <span className="text-slate-500 line-through">₹{course.originalPrice}</span>
                  </div>
                  <Link to={`/course/${course.id}`} className="btn-primary w-full text-center block">View Course</Link>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center" style={{ marginTop: '48px' }}>
            <Link to="/courses" className="btn-primary">View All Courses</Link>
          </motion.div>
        </div>
      </section>

      <section style={{ width: '100%', padding: '80px 0', background: 'rgba(15, 23, 42, 0.5)', overflow: 'hidden' }}>
        <div style={containerStyle}>
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center" style={{ marginBottom: '64px' }}>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Student <span className="neon-text-red">Success Stories</span></h2>
            <p className="text-slate-400 text-lg">Hear from our warriors who transformed their careers</p>
          </motion.div>

          <div className="astra-testimonial-grid">
            {testimonials.map((testimonial, idx) => (
              <motion.div key={testimonial.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }} className="glass p-6 rounded-lg border border-slate-700/50" style={{ minWidth: 0, width: '100%', maxWidth: '100%', boxSizing: 'border-box', overflow: 'hidden' }}>
                <div className="flex items-center gap-4 mb-4">
                  <img src={testimonial.avatar} alt={testimonial.name} className="w-12 h-12 rounded-full" style={{ flexShrink: 0, objectFit: 'cover' }} />
                  <div style={{ minWidth: 0 }}>
                    <h4 className="text-white font-semibold">{testimonial.name}</h4>
                    <p className="text-slate-400 text-sm">{testimonial.course}</p>
                  </div>
                </div>
                <div className="flex mb-3">{[...Array(5)].map((_, i) => <Star key={i} size={16} className={i < testimonial.rating ? 'fill-yellow-400 text-yellow-400' : 'text-slate-600'} />)}</div>
                <p className="text-slate-300 italic" style={{ overflowWrap: 'anywhere', wordBreak: 'break-word' }}>&quot;{testimonial.text}&quot;</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ width: '100%', padding: '80px 0', overflow: 'hidden' }}>
        <div style={{ width: '100%', maxWidth: '1024px', margin: '0 auto', paddingLeft: '32px', paddingRight: '32px', boxSizing: 'border-box' }}>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="glass p-12 rounded-lg border border-red-600/50 text-center">
            <h2 className="text-4xl font-bold mb-4">Ready to Become a <span className="neon-text-red">Warrior?</span></h2>
            <p className="text-slate-400 text-lg mb-8">Join thousands of successful learners. Start your journey today!</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/courses" className="btn-primary">Enroll Now</Link>
              <button className="btn-secondary">Schedule a Call</button>
            </div>
          </motion.div>
        </div>
      </section>

      <style>{`
        .astra-feature-grid, .astra-course-grid, .astra-testimonial-grid {
          width: 100%;
          max-width: 100%;
          min-width: 0;
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 32px;
          box-sizing: border-box;
        }
        .astra-feature-grid > *, .astra-course-grid > *, .astra-testimonial-grid > * {
          min-width: 0;
          max-width: 100%;
        }
        @media (max-width: 1023px) {
          .astra-feature-grid, .astra-course-grid, .astra-testimonial-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
        }
        @media (max-width: 767px) {
          .astra-feature-grid, .astra-course-grid, .astra-testimonial-grid { grid-template-columns: 1fr; }
        }
        @media (max-width: 640px) {
          .astra-feature-grid, .astra-course-grid, .astra-testimonial-grid { gap: 20px; }
        }
        @media (max-width: 480px) {
          .astra-page-container { padding-left: 16px !important; padding-right: 16px !important; }
        }
      `}</style>
    </div>
  );
}
