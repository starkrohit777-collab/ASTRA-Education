import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, Calendar, Users, Clock } from 'lucide-react';

export default function LiveStreaming() {
  const [liveStreams] = useState([
    {
      id: 1,
      title: 'React Advanced Patterns - Live Q&A',
      instructor: 'Alex Thunder',
      startTime: 'Today 7:00 PM',
      viewers: 1240,
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=300&fit=crop',
      status: 'LIVE',
      duration: '2 hours',
    },
    {
      id: 2,
      title: 'Machine Learning Workshop',
      instructor: 'Dr. Cipher',
      startTime: 'Tomorrow 6:30 PM',
      viewers: 0,
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop',
      status: 'SCHEDULED',
      duration: '2.5 hours',
    },
    {
      id: 3,
      title: 'Web Security Best Practices',
      instructor: 'Nexus Guard',
      startTime: 'Dec 20, 8:00 PM',
      viewers: 0,
      image: 'https://images.unsplash.com/photo-1550439062-1d5142226c44?w=500&h=300&fit=crop',
      status: 'SCHEDULED',
      duration: '2 hours',
    },
  ]);

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
    <div className="min-h-screen pt-20 pb-20">
      {/* Header */}
      <section className="bg-slate-900/50 py-12 border-b border-slate-800 mb-12">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Live <span className="neon-text-red">Streaming</span>
          </h1>
          <p className="text-slate-400 text-lg">
            Join our expert instructors for interactive live sessions
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Current Live Stream */}
        {liveStreams.some(s => s.status === 'LIVE') && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold mb-6">🔴 Now Live</h2>
            {liveStreams.filter(s => s.status === 'LIVE').map(stream => (
              <div
                key={stream.id}
                className="glass rounded-lg overflow-hidden border-2 border-red-600 card-hover"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div className="relative overflow-hidden h-96 lg:h-auto">
                    <img
                      src={stream.image}
                      alt={stream.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-red-600 rounded-full p-6 hover:bg-red-700"
                      >
                        <Play size={40} className="text-white fill-white" />
                      </motion.button>
                    </div>
                    <div className="absolute top-4 left-4 bg-red-600 px-4 py-2 rounded-full text-white font-bold text-sm animate-pulse-glow">
                      ● LIVE
                    </div>
                  </div>

                  <div className="p-8 flex flex-col justify-center">
                    <h3 className="text-3xl font-bold mb-2 text-white">{stream.title}</h3>
                    <p className="text-red-400 font-semibold mb-6">by {stream.instructor}</p>

                    <div className="space-y-4 mb-8">
                      <div className="flex items-center gap-3 text-slate-300">
                        <Users className="text-red-600" size={20} />
                        <span>{stream.viewers.toLocaleString()} watching now</span>
                      </div>
                      <div className="flex items-center gap-3 text-slate-300">
                        <Clock className="text-red-600" size={20} />
                        <span>{stream.duration}</span>
                      </div>
                    </div>

                    <button className="btn-primary w-full">
                      Join Live Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        )}

        {/* Scheduled Streams */}
        <motion.div variants={containerVariants} initial="hidden" animate="visible">
          <h2 className="text-3xl font-bold mb-6">Upcoming Sessions</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {liveStreams.filter(s => s.status !== 'LIVE').map((stream, idx) => (
              <motion.div
                key={stream.id}
                variants={itemVariants}
                className="glass rounded-lg overflow-hidden border border-slate-700/50 card-hover group"
              >
                <div className="relative overflow-hidden h-48">
                  <img
                    src={stream.image}
                    alt={stream.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute top-4 left-4 bg-yellow-600/80 px-3 py-1 rounded-full text-white text-sm font-semibold">
                    SCHEDULED
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-white">{stream.title}</h3>
                  <p className="text-red-400 font-semibold mb-4">by {stream.instructor}</p>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-3 text-slate-300 text-sm">
                      <Calendar className="text-red-600" size={18} />
                      <span>{stream.startTime}</span>
                    </div>
                    <div className="flex items-center gap-3 text-slate-300 text-sm">
                      <Clock className="text-red-600" size={18} />
                      <span>{stream.duration}</span>
                    </div>
                  </div>

                  <button className="btn-secondary w-full">
                    Set Reminder
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Info Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-16 glass p-8 rounded-lg border border-slate-700/50"
        >
          <h2 className="text-3xl font-bold mb-6">Live Streaming Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: '🎯',
                title: 'Interactive Learning',
                description: 'Ask questions in real-time and get instant answers from experts',
              },
              {
                icon: '👥',
                title: 'Community Engagement',
                description: 'Connect with fellow learners and build lasting relationships',
              },
              {
                icon: '📝',
                title: 'Live Coding Sessions',
                description: 'See practical implementations and coding best practices',
              },
            ].map((benefit, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="text-center"
              >
                <div className="text-5xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                <p className="text-slate-400">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}