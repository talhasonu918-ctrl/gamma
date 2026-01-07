
import React, { useState } from 'react';
import Logo from './Logo';
import { Sun, Moon, Menu, X } from 'lucide-react';

interface HeaderProps {
  darkMode: boolean;
  onToggleTheme: () => void;
}

const Header: React.FC<HeaderProps> = ({ darkMode, onToggleTheme }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      // Force reveal activation if it's not already active
      element.classList.add('active');
    }
    // Close mobile menu after clicking a link
    setMobileMenuOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className={`sticky top-0 z-50 transition-all ${darkMode ? 'bg-dark-bg/80 border-white/10' : 'bg-white/80 border-gray-200'} backdrop-blur-md border-b`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 cursor-pointer" onClick={scrollToTop}>
            <Logo />
          </div>
          
          <div className="hidden md:flex space-x-8 text-sm font-medium">
            <a 
              href="#services" 
              onClick={(e) => handleNavClick(e, 'services')}
              className="hover:text-gamma-aquamarine transition-colors"
            >
              Services
            </a>
            <a 
              href="#about" 
              onClick={(e) => handleNavClick(e, 'about')}
              className="hover:text-gamma-aquamarine transition-colors"
            >
              About Us
            </a>
            <a 
              href="#features" 
              onClick={(e) => handleNavClick(e, 'features')}
              className="hover:text-gamma-aquamarine transition-colors"
            >
              Features
            </a>
            <a 
              href="#contact" 
              onClick={(e) => handleNavClick(e, 'contact')}
              className="hover:text-gamma-aquamarine transition-colors"
            >
              Contact Us
            </a>
          </div>

          <div className="flex items-center space-x-4">
            <button 
              onClick={onToggleTheme}
              className={`p-2 rounded-full transition-colors ${darkMode ? 'bg-white/10 text-yellow-400 hover:bg-white/20' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
              aria-label="Toggle Theme"
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <a 
              href="#contact" 
              onClick={(e) => handleNavClick(e, 'contact')}
              className="bg-gamma-aquamarine text-dark-bg font-bold px-6 py-2 rounded-full hover:shadow-[0_0_15px_rgba(21,245,186,0.5)] transition-all hidden sm:block text-center"
            >
              Get Started
            </a>
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-current p-2 hover:bg-gamma-aquamarine/10 rounded-lg transition-colors"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className={`md:hidden ${darkMode ? 'bg-dark-bg border-white/10' : 'bg-white border-gray-200'} border-t`}>
            <div className="px-4 py-4 space-y-3">
              <a 
                href="#services" 
                onClick={(e) => handleNavClick(e, 'services')}
                className="block py-2 hover:text-gamma-aquamarine transition-colors"
              >
                Services
              </a>
              <a 
                href="#about" 
                onClick={(e) => handleNavClick(e, 'about')}
                className="block py-2 hover:text-gamma-aquamarine transition-colors"
              >
                About Us
              </a>
              <a 
                href="#features" 
                onClick={(e) => handleNavClick(e, 'features')}
                className="block py-2 hover:text-gamma-aquamarine transition-colors"
              >
                Features
              </a>
              <a 
                href="#contact" 
                onClick={(e) => handleNavClick(e, 'contact')}
                className="block py-2 hover:text-gamma-aquamarine transition-colors"
              >
                Contact Us
              </a>
              <a 
                href="#contact" 
                onClick={(e) => handleNavClick(e, 'contact')}
                className="block bg-gamma-aquamarine text-dark-bg font-bold px-6 py-2 rounded-full hover:shadow-[0_0_15px_rgba(21,245,186,0.5)] transition-all text-center mt-4"
              >
                Get Started
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Header;
