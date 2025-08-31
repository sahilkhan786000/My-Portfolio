import React, { useState } from 'react'
import { ChevronDown, Volume2, VolumeX } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTheme, SEASONS } from '../context/ThemeContext'

const ThemeSwitcher = () => {
  const { season, setSeason, audioEnabled, setAudioEnabled, volume, setVolume } = useTheme()
  const [open, setOpen] = useState(false)

  const options = [
    { label: 'Spring', value: SEASONS.SPRING },
    { label: 'Summer', value: SEASONS.SUMMER },
    { label: 'Autumn', value: SEASONS.AUTUMN },
    { label: 'Winter', value: SEASONS.WINTER },
    { label: 'Rainy', value: SEASONS.RAINY },
  ]

  const handleSelect = (value) => {
    setSeason(value)
    setOpen(false)
  }

  return (
    <div className="flex items-center space-x-2">
      {/* Custom dropdown */}
      <div className="relative">
        <button
          onClick={() => setOpen(!open)}
          className="flex justify-between items-center w-40 pl-4 pr-8 py-2 
                     bg-white/20 backdrop-blur-md text-white font-semibold 
                     rounded-lg shadow-lg hover:shadow-xl transition-all 
                     duration-300 focus:outline-none focus:ring-2 
                     focus:ring-blue-500"
        >
          {options.find(o => o.value === season)?.label}
          <ChevronDown className="h-4 w-4 ml-2" />
        </button>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="absolute mt-2 w-full rounded-lg shadow-lg z-10"
            >
              <div className="backdrop-blur-md bg-white/20 rounded-lg overflow-hidden">
                {options.map((o) => (
                  <div
                    key={o.value}
                    onClick={() => handleSelect(o.value)}
                    className="cursor-pointer px-4 py-2 text-white hover:bg-white/30"
                  >
                    {o.label}
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Ambient toggle */}
      <motion.button
        onClick={() => setAudioEnabled(!audioEnabled)}
        whileTap={{ scale: 0.95 }}
        className="p-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white 
                   font-semibold rounded-lg shadow-lg hover:shadow-xl 
                   transition-all duration-300 flex items-center"
        title={audioEnabled ? 'Mute ambient' : 'Enable ambient'}
      >
        {audioEnabled ? <Volume2 className="h-4 w-4" /> : <VolumeX className="h-4 w-4" />}
      </motion.button>

      {/* Volume slider */}
      {audioEnabled && (
        <input
          type="range"
          min={0}
          max={1}
          step={0.05}
          value={volume}
          onChange={(e) => setVolume(parseFloat(e.target.value))}
          className="w-24 accent-blue-500"
          title="Ambient volume"
        />
      )}
    </div>
  )
}

export default ThemeSwitcher
