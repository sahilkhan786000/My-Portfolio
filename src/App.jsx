// App.jsx
import React from 'react';
import { useTheme } from './context/ThemeContext';
import SakuraBackground from './components/SakuraBackground';
import SeasonalBackgrounds from './components/SeasonalBackgrounds';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const { palette } = useTheme();

  return (
    <div className="relative min-h-screen bg-gradient-to-br">
      {/* Persistent seasonal background across all sections */}
      <SakuraBackground />
      <SeasonalBackgrounds />

      {/* Content layers */}
      <Navbar />
      <main className={`relative z-10 bg-transparent`}>
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
