
import React from 'react';
import { 
  Users, Settings, ShieldAlert, Laptop, Gift, 
  BarChart4, LayoutDashboard, Lock, Coins, MonitorSmartphone
} from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    { 
      title: 'Player Management Tools', 
      desc: 'Complete player lifecycle management with advanced segmentation and engagement tools.',
      icon: <Users size={24} /> 
    },
    { 
      title: 'Casino Management Tools', 
      desc: 'Comprehensive casino operations dashboard with real-time monitoring and control.',
      icon: <Settings size={24} /> 
    },
    { 
      title: 'Customer Relationship Management Tools', 
      desc: 'Advanced CRM integration for player retention and lifetime value optimization.',
      icon: <ShieldAlert size={24} /> 
    },
    { 
      title: 'Content Management Systems', 
      desc: 'Easy-to-use CMS for managing games, promotions, and player communications.',
      icon: <Laptop size={24} /> 
    },
    { 
      title: 'Bonus Management Tools', 
      desc: 'Flexible bonus and promotion engine with automated campaign management.',
      icon: <Gift size={24} /> 
    },
    { 
      title: 'Admin Dashboard', 
      desc: 'Powerful analytics dashboard with real-time KPIs and business intelligence.',
      icon: <LayoutDashboard size={24} /> 
    },
    { 
      title: 'Reports & Analytics', 
      desc: 'Comprehensive reporting suite with custom dashboards and data visualization.',
      icon: <BarChart4 size={24} /> 
    },
    { 
      title: 'Anti-fraud Systems', 
      desc: 'Advanced fraud detection and prevention with machine learning algorithms.',
      icon: <Lock size={24} /> 
    },
    { 
      title: 'Coin Subscription Packages', 
      desc: 'Flexible monetization options with subscription and package management.',
      icon: <Coins size={24} /> 
    },
    { 
      title: 'Alternate Mode of Entry', 
      desc: 'AMOE compliance tools ensuring legal operation across all jurisdictions.',
      icon: <MonitorSmartphone size={24} /> 
    },
  ];

  return (
    <section className="py-24 bg-white dark:bg-dark-bg relative overflow-hidden transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tight text-gray-900 dark:text-white">
            Game-Changing Features, <br />
            <span className="text-gamma-aquamarine">Power-Packed Performance</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Every tool you need to run a successful social sweepstakes casino, built into one comprehensive platform.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {features.map((f, idx) => (
            <div key={idx} className="bg-gray-50 dark:bg-dark-card border border-gray-100 dark:border-white/5 rounded-2xl p-6 hover:border-gamma-blue/40 transition-all group flex flex-col items-center text-center shadow-sm dark:shadow-none">
              <div className="mb-4 p-4 bg-white dark:bg-white/5 text-gamma-blue rounded-xl group-hover:scale-110 transition-transform shadow-sm dark:shadow-none">
                {f.icon}
              </div>
              <h4 className="text-xs font-bold uppercase tracking-widest mb-3 text-gray-900 dark:text-white">{f.title}</h4>
              <p className="text-[10px] text-gray-600 dark:text-gray-400 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-20 p-12 bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-[40px] text-center backdrop-blur-xl">
          <h3 className="text-2xl font-bold uppercase mb-4 text-gray-900 dark:text-white">See These Features in Action</h3>
          <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-xl mx-auto">
            Book a personalized demo to see how our platform can transform your social casino operations.
          </p>
          <button className="bg-gamma-aquamarine text-dark-bg font-bold px-10 py-4 rounded-xl hover:scale-105 transition-all shadow-xl shadow-gamma-aquamarine/20">
            Book Platform Demo
          </button>
        </div>
      </div>
      
      {/* Glow Effect */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gamma-aquamarine/50 to-transparent"></div>
    </section>
  );
};

export default Features;
