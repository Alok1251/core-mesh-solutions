import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import TrustBar from './components/sections/TrustBar';
import Services from './components/sections/Services';
import CaseStudies from './components/sections/CaseStudies';
import TechStack from './components/sections/TechStack';
import About from './components/sections/About';
import Process from './components/sections/Process';
import Contact from './components/sections/Contact';
import Footer from './components/layout/Footer';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-[#050505] flex items-center justify-center z-[1000] overflow-hidden">
        {/* Deep architectural grain/grid background */}
        <div className="absolute inset-0 grid-bg opacity-10"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.08)_0%,transparent_100%)]"></div>

        <div className="relative flex flex-col items-center">
          <motion.div 
             initial={{ opacity: 0, scale: 0.8 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
             className="relative mb-12"
          >
            {/* Pulsing ring around logo */}
            <div className="absolute -inset-10 bg-primary/10 rounded-full blur-[40px] animate-pulse-slow"></div>
            <img src="/logo.png" alt="Core Mesh" className="w-24 h-24 object-contain relative z-10" />
          </motion.div>

          <div className="flex flex-col items-center gap-6 text-center max-w-sm">
            <h1 className="text-4xl font-black font-display text-white uppercase tracking-tight italic">
                CORE<span className="text-primary italic">MESH</span>
            </h1>
            
            <div className="relative w-48 h-1 bg-white/5 rounded-full overflow-hidden">
               <div className="absolute inset-y-0 left-0 bg-primary w-full -translate-x-full animate-loading-bar transform-gpu"></div>
            </div>

            <div className="flex flex-col gap-2">
              <span className="text-[10px] font-black text-white/30 uppercase tracking-[0.5em] italic">Initializing Ecosystem</span>
              <span className="text-[8px] font-bold text-primary/40 uppercase tracking-[0.2em] font-mono">P99 LATENCY: 2ms • PACKET: SYNC</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)] selection:bg-primary/30 selection:text-white transition-all duration-700 ease-[0.16,1,0.3,1] opacity-animation relative">
      <div className="mesh-bg opacity-30 transform-gpu"></div>
      <div className="grid-bg"></div>
      
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      
      <main className="transform-gpu">
          <Hero />
          <TrustBar />
          <Services />
          <CaseStudies />
          <TechStack />
          <About />
          <Process />
          <Contact />
      </main>

      <Footer />
    </div>
  )
}

export default App
