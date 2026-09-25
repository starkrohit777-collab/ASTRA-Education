import React, { useEffect, useState } from 'react';

export default function AnimatedBackground() {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    const generatedStars = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      duration: 2 + Math.random() * 3,
      delay: Math.random() * 2,
      size: Math.random() * 3 + 1,
    }));
    setStars(generatedStars);
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900" />
      
      {stars.map(star => (
        <div
          key={star.id}
          className="absolute rounded-full bg-white"
          style={{
            left: `${star.left}%`,
            top: `${star.top}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            animation: `pulse ${star.duration}s ease-in-out ${star.delay}s infinite`,
            opacity: 0.6,
          }}
        />
      ))}

      {/* Animated Grid */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: 'linear-gradient(0deg, transparent 24%, rgba(220, 38, 38, 0.05) 25%, rgba(220, 38, 38, 0.05) 26%, transparent 27%, transparent 74%, rgba(220, 38, 38, 0.05) 75%, rgba(220, 38, 38, 0.05) 76%, transparent 77%, transparent)',
            backgroundSize: '50px 50px',
            animation: 'slide 20s linear infinite',
          }}
        />
      </div>

      <style>{`
        @keyframes slide {
          0% { transform: translateY(0); }
          100% { transform: translateY(50px); }
        }
      `}</style>
    </div>
  );
}