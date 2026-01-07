
import React from 'react';
import { ShieldCheck, Cpu, BarChart, Globe, Zap } from 'lucide-react';

const TrustedBy: React.FC = () => {
  const logos = [
    { name: 'TechCorp Gaming', icon: <Cpu size={24} /> },
    { name: 'PlayMax Studios', icon: <Globe size={24} /> },
    { name: 'GrowthVentures', icon: <BarChart size={24} /> },
    { name: 'SecurePlay', icon: <ShieldCheck size={24} /> },
    { name: 'RapidLaunch', icon: <Zap size={24} /> },
  ];

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-xs font-bold uppercase tracking-widest text-gamma-aquamarine mb-8">Trusted by Industry Leaders</p>
        <p className="text-lg opacity-70 mb-12 italic">Join 50+ successful operators who chose GammaSweep</p>
        
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center opacity-60">
          {logos.map((logo, idx) => (
            <div key={idx} className="flex flex-col items-center space-y-3 grayscale hover:grayscale-0 transition-all cursor-default">
              <div className="p-4 bg-white/5 rounded-2xl border border-white/5 group-hover:border-gamma-aquamarine/20">
                {logo.icon}
              </div>
              <span className="text-xs font-medium">{logo.name}</span>
            </div>
          ))}
        </div>

        <div className="mt-16 inline-flex items-center space-x-2 px-4 py-2 bg-gamma-aquamarine/5 border border-gamma-aquamarine/10 rounded-full text-xs font-bold text-gamma-aquamarine">
          <CheckCircle size={14} />
          <span>98% Client Satisfaction Rate</span>
        </div>
      </div>
    </section>
  );
};

const CheckCircle = ({ size }: { size: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
);

export default TrustedBy;
