import React, { useMemo } from 'react'
import { motion } from 'framer-motion'

// Sakura/cherry blossom petal background with wind drift and depth parallax
const SakuraBackground = () => {
  const petals = useMemo(() => {
    const count = 40
    return Array.from({ length: count }, (_, index) => {
      const startX = Math.random() * 100 // vw
      const delay = Math.random() * 6
      const duration = 8 + Math.random() * 8
      const scale = 0.6 + Math.random() * 0.9
      const opacity = 0.25 + Math.random() * 0.35
      const driftX = 20 + Math.random() * 60
      const rotate = 120 + Math.random() * 240
      const depth = Math.random() // 0..1 depth to stagger and parallax

      return (
        <motion.div
          key={index}
          className="absolute pointer-events-none"
          style={{
            left: `${startX}vw`,
            top: `-10vh`,
            zIndex: 0,
          }}
          initial={{ y: `-10vh`, x: 0, opacity: 0 }}
          animate={{
            y: [`-10vh`, `110vh`],
            x: [0, driftX * (Math.random() > 0.5 ? 1 : -1)],
            opacity: [0, opacity, opacity, 0],
            rotate: [0, rotate],
          }}
          transition={{
            duration,
            delay: delay + depth * 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          {/* Petal shape */}
          <div
            className="relative"
            style={{
              transform: `scale(${scale})`,
              filter: 'blur(0.2px)',
            }}
          >
            <div className="w-6 h-8 rounded-tl-full rounded-tr-full bg-pink-200/70" />
            <div className="absolute top-0 left-1 w-5 h-7 rounded-tl-full rounded-tr-full bg-pink-300/70" />
            <div className="absolute -bottom-1 left-0 right-0 mx-auto w-3 h-3 rotate-45 rounded-sm bg-pink-200/60" />
            <div className="absolute inset-0 rounded-tl-full rounded-tr-full bg-gradient-to-b from-white/10 to-transparent" />
          </div>
        </motion.div>
      )
    })
  }, [])

  // Light drifting mist layers for depth
  const mistLayer = (key, top, blur, opacity) => (
    <motion.div
      key={key}
      className="absolute inset-x-0"
      style={{ top }}
      initial={{ x: '-10%' }}
      animate={{ x: ['-10%', '10%', '-10%'] }}
      transition={{ duration: 30, repeat: Infinity, ease: 'easeInOut' }}
    >
      <div
        className="mx-auto h-24 w-[120%] rounded-full bg-gradient-to-r from-pink-50 via-transparent to-pink-50"
        style={{ filter: `blur(${blur}px)`, opacity }}
      />
    </motion.div>
  )

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {mistLayer('mist-1', '15%', 20, 0.35)}
      {mistLayer('mist-2', '60%', 26, 0.25)}
      {petals}
    </div>
  )
}

export default SakuraBackground


