
import React from 'react';
import Logo from './Logo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 dark:bg-dark-card pt-24 pb-12 border-t border-gray-200 dark:border-white/5 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 mb-16">
          <div className="sm:col-span-2 space-y-8">
            <Logo />
            <p className="text-gray-600 dark:text-gray-400 max-w-md text-sm leading-relaxed">
              GammaSweep provides industry-leading B2B turnkey sweepstakes casino software. 
              We empower operators with compliant, scalable, and high-performance gaming platforms 
              to succeed in the social casino market.
            </p>
            <div className="flex space-x-4">
              {['LinkedIn', 'Twitter', 'Facebook', 'Instagram'].map(platform => (
                <a key={platform} href="#" className="w-10 h-10 bg-white dark:bg-white/5 rounded-full flex items-center justify-center hover:bg-gamma-blue hover:text-white transition-colors text-xs font-bold text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-transparent shadow-sm dark:shadow-none">
                  {platform[0]}
                </a>
              ))}
            </div>
          </div>
          
          <div className="space-y-6">
            <h4 className="text-xs font-bold uppercase tracking-widest text-gamma-aquamarine">Quick Links</h4>
            <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
              <li><a href="#home" className="hover:text-gamma-aquamarine transition-colors">Home</a></li>
              <li><a href="#services" className="hover:text-gamma-aquamarine transition-colors">Services</a></li>
              <li><a href="#about" className="hover:text-gamma-aquamarine transition-colors">About Us</a></li>
              <li><a href="#features" className="hover:text-gamma-aquamarine transition-colors">Features</a></li>
              <li><a href="#contact" className="hover:text-gamma-aquamarine transition-colors">Contact Us</a></li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="text-xs font-bold uppercase tracking-widest text-gamma-aquamarine">Legal</h4>
            <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
              <li><a href="#" className="hover:text-gamma-aquamarine transition-colors">Compliance</a></li>
              <li><a href="#" className="hover:text-gamma-aquamarine transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-gamma-aquamarine transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-gamma-aquamarine transition-colors">AMOE Rules</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-200 dark:border-white/5 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-[10px] uppercase font-bold tracking-widest text-gray-500 dark:text-gray-400 opacity-60">
          <p>© 2024 GammaSweep. All Rights Reserved.</p>
          <div className="flex space-x-6">
            <p>Made with Power for Gaming Leaders</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
