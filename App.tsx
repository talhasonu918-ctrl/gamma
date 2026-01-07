
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import TrustedBy from './components/TrustedBy';
import Stats from './components/Stats';
import Advantages from './components/Advantages';
import WhySection from './components/WhySection';
import Features from './components/Features';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -100px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, observerOptions);

    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const toggleTheme = () => setDarkMode(!darkMode);

  return (
    <div className={`min-h-screen transition-colors duration-500 ${darkMode ? 'bg-dark-bg text-white' : 'bg-gray-50 text-gray-900'}`}>
      <div id="home" className="bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 py-2 text-center text-sm font-bold text-white relative z-50">
        MEET US AT <span className="underline">ICE BARCELONA 2026</span> BOOTH <span className="bg-white/20 px-2 py-0.5 rounded">2D55</span> 
        <button className="ml-4 bg-gamma-aquamarine text-dark-bg px-4 py-1 rounded-full text-xs font-bold hover:scale-110 transition-transform">
          BOOK A MEETING
        </button>
      </div>

      <Header darkMode={darkMode} onToggleTheme={toggleTheme} />
      
      <main className="relative z-10">
        <div className="reveal active"><Hero /></div>
        <div className="reveal"><TrustedBy /></div>
        <div className="reveal"><Stats /></div>
        
        <div id="services" className="reveal reveal-left"><Advantages /></div>
        <div id="about" className="reveal"><WhySection /></div>
        <div id="features" className="reveal reveal-right"><Features /></div>
      </main>

      <div id="contact" className="reveal">
        <Footer />
      </div>
    </div>
  );
};

export default App;
