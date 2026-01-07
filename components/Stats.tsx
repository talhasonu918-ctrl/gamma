
import React from 'react';
import { ChevronDown, Star, Zap, Layout, Clock, Users } from 'lucide-react';

const Stats: React.FC = () => {
  const stats = [
    { label: 'Licensed Games', value: '3,000+', icon: <Layout size={20} /> },
    { label: 'Global Providers', value: '50+', icon: <Star size={20} /> },
    { label: 'Active Deployments', value: '20+', icon: <Zap size={20} /> },
    { label: 'Years of R&D', value: '13+', icon: <Clock size={20} /> },
    { label: 'Scale Engineers', value: '600+', icon: <Users size={20} /> },
  ];

  return (
    <section className="py-32 bg-gray-50/50 dark:bg-[#080a1a] border-y border-gray-200 dark:border-white/5 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-4 mb-20">
          <span className="text-[10px] font-black uppercase tracking-[0.5em] text-gamma-blue">Performance Benchmarks</span>
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-gray-900 dark:text-white">
            Leading by <span className="text-gamma-blue italic">the Numbers</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-5 gap-px bg-gray-200 dark:bg-white/10 rounded-[2rem] overflow-hidden border border-gray-200 dark:border-white/10">
          {stats.map((stat, idx) => (
            <div key={idx} className="group relative p-12 bg-white dark:bg-[#0c0e24] hover:bg-gray-50 dark:hover:bg-white/[0.02] transition-all">
              <div className="absolute -bottom-4 -right-4 text-gamma-blue/5 group-hover:text-gamma-blue/10 transition-colors">
                {stat.icon}
              </div>
              <p className="text-4xl md:text-5xl font-black mb-3 text-gray-900 dark:text-white tracking-tighter">{stat.value}</p>
              <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-gray-500">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-20 flex flex-wrap justify-center gap-16 text-center">
          <div className="space-y-2">
            <p className="text-3xl font-black text-gray-900 dark:text-white">98%</p>
            <p className="text-xs uppercase tracking-widest text-gray-400">Client Retention</p>
          </div>
          <div className="space-y-2">
            <p className="text-3xl font-black text-gray-900 dark:text-white">5.0★</p>
            <p className="text-xs uppercase tracking-widest text-gray-400">Software Rating</p>
          </div>
          <div className="space-y-2">
            <p className="text-3xl font-black text-gray-900 dark:text-white">45 Days</p>
            <p className="text-xs uppercase tracking-widest text-gray-400">Avg. ROI Velocity</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
