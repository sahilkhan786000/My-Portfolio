import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme, SEASONS } from '../context/ThemeContext';
import winterTrack from '../Music/winter.mp3';
import summerTrack from '../Music/Summer.mp3';
import rainyTrack from '../Music/Rainy.mp3';
import autumnTrack from '../Music/Autumn.mp3';
import springTrack from '../Music/Autumn.mp3'; // fix: should be springTrack file

// Simple ambient audio player
const AmbientAudio = ({ src }) => {
  const { audioEnabled, volume } = useTheme();
  const audioRef = useRef(null);

  useEffect(() => {
    const el = audioRef.current;
    if (!el) return;
    el.volume = volume;
    if (audioEnabled) el.play().catch(() => {});
    else el.pause();
  }, [audioEnabled, volume, src]);

  return <audio ref={audioRef} src={src} loop />;
};

// Seasonal animations
const RainDrops = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {Array.from({ length: 40 }).map((_, i) => (
      <motion.div
        key={i}
        className="absolute w-px h-8 bg-blue-300/50"
        style={{ left: `${Math.random() * 100}%`, top: `${-10 - Math.random() * 40}vh` }}
        animate={{ y: ['-10vh', '110vh'], opacity: [0.2, 0.7, 0] }}
        transition={{ duration: 1.8 + Math.random(), repeat: Infinity, ease: 'easeIn' }}
      />
    ))}
  </div>
);

const Lightning = () => (
  <div className="absolute inset-0 pointer-events-none">
    {Array.from({ length: 3 }).map((_, i) => (
      <motion.div
        key={i}
        className="absolute inset-0 bg-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0.35, 0.05, 0] }}
        transition={{ duration: 0.4, delay: 3 + i * 2, repeat: Infinity, repeatDelay: 6 + i }}
      />
    ))}
    {Array.from({ length: 2 }).map((_, i) => (
      <motion.div
        key={`bolt-${i}`}
        className="absolute w-1 bg-white shadow-[0_0_20px_rgba(255,255,255,0.8)]"
        style={{ left: `${20 + i * 40}%`, top: '-10vh', height: '120vh' }}
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 0.25, delay: 4 + i * 3, repeat: Infinity, repeatDelay: 8 }}
      />
    ))}
  </div>
);

const SnowFall = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {Array.from({ length: 60 }).map((_, i) => (
      <motion.div
        key={i}
        className="absolute w-2 h-2 bg-white rounded-full shadow-sm"
        style={{ left: `${Math.random() * 100}%`, top: `${-10 - Math.random() * 40}vh`, opacity: 0.8 }}
        animate={{ y: ['-10vh', '110vh'], x: [0, Math.random() > 0.5 ? 20 : -20] }}
        transition={{ duration: 6 + Math.random() * 5, repeat: Infinity, ease: 'easeInOut' }}
      />
    ))}
  </div>
);

const FireCamp = () => (
  <div className="absolute bottom-8 left-8 pointer-events-none">
    <motion.div className="w-6 h-6 bg-orange-400 rounded-full blur-sm" animate={{ scale: [1, 1.1, 1], opacity: [0.8, 1, 0.8] }} transition={{ duration: 1.2, repeat: Infinity }} />
    <motion.div className="w-4 h-4 bg-amber-300 rounded-full -mt-3 ml-1 blur-sm" animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 1, repeat: Infinity }} />
  </div>
);

const SunRays = () => (
  <div className="absolute -top-10 -right-10 pointer-events-none">
    {Array.from({ length: 6 }).map((_, i) => (
      <motion.div
        key={i}
        className="origin-top-right w-40 h-1 bg-yellow-300/60"
        style={{ transform: `rotate(${10 * i}deg)`, margin: '8px 0' }}
        animate={{ opacity: [0.4, 0.9, 0.4] }}
        transition={{ duration: 2 + i * 0.2, repeat: Infinity }}
      />
    ))}
  </div>
);

const HeatHaze = () => (
  <div className="absolute inset-0 pointer-events-none">
    {Array.from({ length: 3 }).map((_, i) => (
      <motion.div
        key={i}
        className="absolute bottom-0 left-0 right-0 mx-auto h-40 w-[60%] bg-gradient-to-t from-yellow-200/20 via-transparent to-transparent blur-md"
        animate={{ y: [0, -10, 0], opacity: [0.25, 0.4, 0.25] }}
        transition={{ duration: 4 + i, repeat: Infinity, ease: 'easeInOut' }}
        style={{ filter: 'blur(8px)' }}
      />
    ))}
  </div>
);

const AutumnLeaves = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {Array.from({ length: 35 }).map((_, i) => (
      <motion.div
        key={i}
        className="absolute w-3 h-3 bg-orange-400 rounded-sm rotate-45"
        style={{ left: `${Math.random() * 100}%`, top: `${-10 - Math.random() * 40}vh` }}
        animate={{ y: ['-10vh', '110vh'], x: [0, Math.random() > 0.5 ? 30 : -30], rotate: [0, 180] }}
        transition={{ duration: 7 + Math.random() * 5, repeat: Infinity, ease: 'easeInOut' }}
      />
    ))}
  </div>
);

const SpringPollen = () => (
  <div className="absolute inset-0 pointer-events-none">
    {Array.from({ length: 30 }).map((_, i) => (
      <motion.div
        key={i}
        className="absolute w-1.5 h-1.5 rounded-full bg-yellow-200/60"
        style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%` }}
        animate={{ x: [0, 20, 0], y: [0, -10, 0], opacity: [0.2, 0.5, 0.2] }}
        transition={{ duration: 6 + Math.random() * 4, repeat: Infinity, ease: 'easeInOut', delay: i * 0.1 }}
      />
    ))}
  </div>
);

const Aurora = () => (
  <div className="absolute top-0 left-0 right-0 h-1/2 pointer-events-none overflow-hidden">
    {Array.from({ length: 2 }).map((_, i) => (
      <motion.div
        key={i}
        className="absolute left-0 right-0 mx-auto w-[120%] h-40 rounded-full bg-gradient-to-r from-cyan-400/20 via-emerald-300/20 to-indigo-400/20 blur-2xl"
        animate={{ y: [0, 20, 0], rotate: [0, 5, 0], opacity: [0.2, 0.35, 0.2] }}
        transition={{ duration: 10 + i * 2, repeat: Infinity, ease: 'easeInOut' }}
        style={{ top: `${10 + i * 60}px` }}
      />
    ))}
  </div>
);

// Multiple images per season
const seasonImages = {
  [SEASONS.SPRING]: [
    'https://images.unsplash.com/photo-1462275646964-a0e3386b89fa?q=80&w=3840',
    'https://plus.unsplash.com/premium_photo-1664008141848-5366dafbbe2b?w=3840',
    'https://images.unsplash.com/photo-1620694563886-c3a80ec55f41?q=80&w=3840',
  ],
  [SEASONS.SUMMER]: [
    'https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=3840&q=80',
    'https://plus.unsplash.com/premium_photo-1681255760839-6581e2eb3e96?q=80&w=3840',
    'https://plus.unsplash.com/premium_photo-1680995369588-502d70f0e3c8?q=80&w=3840',
  ],
  [SEASONS.AUTUMN]: [
    'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=3840&q=80',
    'https://images.unsplash.com/photo-1476842321362-f5bb3a58ab25?q=80&w=3840',
    'https://plus.unsplash.com/premium_photo-1668967516060-624b8a7021f4?q=80&w=3840',
  ],
  [SEASONS.WINTER]: [
    'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=3840&q=80',
    'https://images.unsplash.com/photo-1489674267075-cee793167910?q=80&w=3840',
    'https://plus.unsplash.com/premium_photo-1670493556860-13e006e6faa4?q=80&w=3840',
  ],
  [SEASONS.RAINY]: [
    'https://images.unsplash.com/photo-1563389843516-4a7b39dce10d?q=80&w=1100',
    'https://images.unsplash.com/photo-1508556919487-845f191e5742?q=80&w=3840',
    'https://images.unsplash.com/photo-1503435824048-a799a3a84bf7?q=80&w=3840',
  ],
};

const SeasonalBackgrounds = () => {
  const { season } = useTheme();
  const images = seasonImages[season] || [];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000); // change interval as needed
    return () => clearInterval(interval);
  }, [images]);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      {images.map((img, i) => (
        <motion.img
          key={img}
          src={img}
          alt={season}
          className="absolute inset-0 w-full h-full object-cover"
          animate={{ opacity: i === index ? 1 : 0 }}
          transition={{ duration: 1 }}
        />
      ))}

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-white/10 to-white/40" />

      {/* Seasonal Effects & Audio */}
      {season === SEASONS.SPRING && (
        <>
          <RainDrops />
          <SpringPollen />
          <AmbientAudio src={springTrack} />
        </>
      )}
      {season === SEASONS.SUMMER && (
        <>
          <SunRays />
          <HeatHaze />
          <AmbientAudio src={summerTrack} />
        </>
      )}
      {season === SEASONS.AUTUMN && (
        <>
          <AutumnLeaves />
          <AmbientAudio src={autumnTrack} />
        </>
      )}
      {season === SEASONS.WINTER && (
        <>
          <SnowFall />
          <FireCamp />
          <Aurora />
          <AmbientAudio src={winterTrack} />
        </>
      )}
      {season === SEASONS.RAINY && (
        <>
          <RainDrops />
          <Lightning />
          <AmbientAudio src={rainyTrack} />
        </>
      )}
    </div>
  );
};

export default SeasonalBackgrounds;

