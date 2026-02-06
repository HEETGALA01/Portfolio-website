import React, { useState, useEffect } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Publications from './components/Publications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Loader from './components/Loader';
import './index.css';

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Smooth scroll setup with optimized settings
    const lenis = async () => {
      try {
        const Lenis = (await import('lenis')).default;
        const lenisInstance = new Lenis({
          duration: 1.5,
          easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          orientation: 'vertical',
          gestureOrientation: 'vertical',
          smoothWheel: true,
          wheelMultiplier: 1,
          smoothTouch: false,
          touchMultiplier: 2,
          infinite: false,
        });

        function raf(time) {
          lenisInstance.raf(time);
          requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        // Cleanup function
        return () => {
          lenisInstance.destroy();
        };
      } catch (error) {
        console.log('Lenis smooth scroll not loaded:', error);
      }
    };

    const cleanup = lenis();
    return () => {
      if (cleanup) cleanup.then(fn => fn && fn());
    };
  }, []);

  return (
    <ThemeProvider>
      <div className="relative">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Publications />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
