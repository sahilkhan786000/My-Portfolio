import React, { createContext, useContext, useEffect, useMemo, useState } from 'react'

export const SEASONS = {
  SPRING: 'spring',
  SUMMER: 'summer',
  AUTUMN: 'autumn',
  WINTER: 'winter',
  RAINY: 'rainy',
}

const defaultTheme = SEASONS.SPRING

const ThemeContext = createContext({
  season: defaultTheme,
  setSeason: () => {},
  palette: {
    bg: 'from-blue-50 via-indigo-50 to-purple-50',
    accent: 'from-blue-600 to-purple-600',
  },
  audioEnabled: false,
  setAudioEnabled: () => {},
  volume: 0.25,
  setVolume: () => {},
  musicUrl: '',
})

const seasonPalettes = {
  [SEASONS.SPRING]: {
    bg: 'from-pink-50 via-rose-50 to-purple-50',
    accent: 'from-pink-500 to-rose-600',
  },
  [SEASONS.SUMMER]: {
    bg: 'from-yellow-50 via-amber-50 to-orange-50',
    accent: 'from-yellow-500 to-orange-600',
  },
  [SEASONS.AUTUMN]: {
    bg: 'from-orange-50 via-amber-50 to-rose-50',
    accent: 'from-orange-600 to-amber-700',
  },
  [SEASONS.WINTER]: {
    bg: 'from-blue-50 via-sky-50 to-cyan-50',
    accent: 'from-blue-600 to-cyan-600',
  },
  [SEASONS.RAINY]: {
    bg: 'from-slate-50 via-blue-50 to-slate-100',
    accent: 'from-slate-600 to-blue-700',
  },
}

export const ThemeProvider = ({ children }) => {
  const [season, setSeason] = useState(() => localStorage.getItem('season') || defaultTheme)
  const [audioEnabled, setAudioEnabled] = useState(() => localStorage.getItem('season-audio') === 'true')
  const [volume, setVolume] = useState(() => {
    const v = parseFloat(localStorage.getItem('season-volume'))
    return Number.isFinite(v) ? Math.min(1, Math.max(0, v)) : 0.25
  })

  useEffect(() => {
    localStorage.setItem('season', season)
  }, [season])

  useEffect(() => {
    localStorage.setItem('season-audio', String(audioEnabled))
  }, [audioEnabled])

  useEffect(() => {
    localStorage.setItem('season-volume', String(volume))
  }, [volume])

  const palette = useMemo(() => seasonPalettes[season] || seasonPalettes[defaultTheme], [season])

  const musicUrl = useMemo(() => {
    // Default to local placeholders; replace with hosted URLs if desired
  switch (season) {
    case SEASONS.SPRING:
      return '/Music/Autumn.mp3'
    case SEASONS.SUMMER:
      return '/Music/Summer.mp3'
    case SEASONS.AUTUMN:
      return '/Music/Autumn.mp3'
    case SEASONS.WINTER:
      return '/Music/winter.mp3'
    case SEASONS.RAINY:
      return '/Music/Rainy.mp3'
    default:
      return ''
  }
  }, [season])

  const value = useMemo(() => ({ season, setSeason, palette, audioEnabled, setAudioEnabled, volume, setVolume, musicUrl }), [season, palette, audioEnabled, volume, musicUrl])

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

export const useTheme = () => useContext(ThemeContext)


