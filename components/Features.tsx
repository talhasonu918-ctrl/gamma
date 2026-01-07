
import React from 'react';
import { 
  Users, Settings, ShieldAlert, Laptop, Gift, 
  BarChart4, LayoutDashboard, Lock, Coins, MonitorSmartphone
} from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    { 
      title: 'Player Lifecycle Management', 
      desc: 'Enterprise-grade player monitoring with automated segmentation and high-LTV retention protocols.',
      icon: <Users size={24} /> 
    },
    { 
      title: 'Infrastructure Control', 
      desc: 'Centralized operational command with real-time health monitoring and dynamic system scaling.',
      icon: <Settings size={24} /> 
    },
    { 
      title: 'Advanced CRM Integrations', 
      desc: 'Seamless data pipelines for retention optimization and automated player engagement cycles.',
      icon: <ShieldAlert size={24} /> 
    },
    { 
      title: 'Global CMS Architecture', 
      desc: 'Distributed content management for rapid game deployment and localized campaign delivery.',
      icon: <Laptop size={24} /> 
    },
    { 
      title: 'Dynamic Bonus Engine', 
      desc: 'Automated promotion cycles with fraud-resistant logic and real-time incentive distribution.',
      icon: <Gift size={24} /> 
    },
    { 
      title: 'Executive Admin Panel', 
      desc: 'High-level business intelligence with real-time KPI visualization and fiscal reporting.',
      icon: <LayoutDashboard size={24} /> 
    },
    { 
      title: 'Predictive Analytics', 
      desc: 'Machine-learning driven reporting for trend forecasting and player behavior modeling.',
      icon: <BarChart4 size={24} /> 
    },
    { 
      title: 'Military-Grade Security', 
      desc: 'Proactive threat detection and AML protocols with zero-knowledge encryption standards.',
      icon: <Lock size={24} /> 
    },
    { 
      title: 'Monetization Framework', 
      desc: 'Flexible subscription and coin-pack architecture with multi-channel payment support.',
      icon: <Coins size={24} /> 
    },
    { 
      title: 'Compliance Logic (AMOE)', 
      desc: 'Automated legal entry management ensuring total compliance across all US jurisdictions.',
      icon: <MonitorSmartphone size={24} /> 
    },
  ];

  return (
    <section className="py-32 bg-white dark:bg-dark-bg relative overflow-hidden transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-24 space-y-6">
          <span className="text-xs font-black uppercase tracking-[0.5em] text-gamma-blue">Core Capabilities</span>
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-gray-900 dark:text-white">
            Enterprise Features, <br />
            <span className="text-gamma-aquamarine italic">Performance Engineered</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto text-xl font-normal leading-relaxed">
            Every component is built for scale, reliability, and precision. We provide the full vertical stack of social casino technology.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
          {features.map((f, idx) => (
            <div key={idx} className="bg-gray-50 dark:bg-[#0c0e24] border border-gray-100 dark:border-white/5 rounded-[2rem] p-8 hover:border-gamma-blue/40 transition-all group flex flex-col items-center text-center shadow-sm hover:shadow-xl duration-500">
              <div className="mb-6 p-5 bg-white dark:bg-white/5 text-gamma-blue rounded-2xl group-hover:scale-110 group-hover:bg-gamma-blue group-hover:text-white transition-all shadow-sm">
                {f.icon}
              </div>
              <h4 className="text-sm font-black uppercase tracking-[0.15em] mb-4 text-gray-900 dark:text-white leading-tight min-h-[3rem] flex items-center">{f.title}</h4>
              <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed font-normal">{f.desc}</p>
            </div>
          ))}
        </div>
        

        <div className="mt-24 p-16 bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-[4rem] text-center backdrop-blur-3xl relative overflow-hidden">
          <h3 className="text-3xl font-black uppercase mb-6 text-gray-900 dark:text-white tracking-tight">Experience Global Class Infrastructure</h3>
          <p className="text-gray-600 dark:text-gray-400 mb-10 max-w-2xl mx-auto text-lg leading-relaxed">
            Schedule a high-level briefing with our technical architects to explore how GammaSweep can power your brand.
          </p>
          <button className="bg-gamma-aquamarine text-dark-bg font-black px-12 py-6 rounded-2xl text-xl hover:scale-110 transition-all shadow-2xl shadow-gamma-aquamarine/20 uppercase tracking-widest">
            Book Platform Briefing
          </button>
        </div>
      </div>
      
      {/* Decorative Glow */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gamma-aquamarine/50 to-transparent"></div>
    </section>
  );
};

export default Features;
