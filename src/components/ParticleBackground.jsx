import React from 'react'
import { motion } from 'framer-motion'

const ParticleBackground = () => {
  const particles = Array.from({ length: 50 }, (_, i) => (
    <motion.div
      key={i}
      className="absolute w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full opacity-20"
      style={{
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
      }}
      animate={{
        y: [0, -100, 0],
        opacity: [0.2, 0.5, 0.2],
        scale: [1, 1.2, 1],
      }}
      transition={{
        duration: 3 + Math.random() * 4,
        repeat: Infinity,
        ease: 'easeInOut',
        delay: i * 0.1,
      }}
    />
  ))

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {particles}

      {/* Floating geometric shapes */}
      <motion.div
        className="absolute top-20 left-10 w-32 h-32 border border-blue-200 rounded-full opacity-10"
        animate={{
          rotate: 360,
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'linear',
        }}
      />

      <motion.div
        className="absolute top-40 right-20 w-24 h-24 border border-purple-200 rounded-lg opacity-10"
        animate={{
          rotate: -360,
          scale: [1, 0.9, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: 'linear',
        }}
      />

      <motion.div
        className="absolute bottom-40 left-20 w-20 h-20 border border-green-200 rounded-full opacity-10"
        animate={{
          y: [0, -30, 0],
          rotate: 180,
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
    </div>
  )
}

export default ParticleBackground
