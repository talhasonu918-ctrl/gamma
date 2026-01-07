
import React from 'react';
import { Clock, DollarSign, UserCheck, ShieldCheck, Heart, GraduationCap, ChevronRight } from 'lucide-react';

const WhySection: React.FC = () => {
  const reasons = [
    { 
      icon: <Clock size={24} />, 
      title: 'Accelerated Time-to-Market', 
      desc: 'Legacy competitors operate on 6-12 month delivery cycles. We deploy in 4 weeks. Velocity is the ultimate competitive advantage.' 
    },
    { 
      icon: <DollarSign size={24} />, 
      title: 'Operational Cost Efficiency', 
      desc: 'Eliminate 90% of traditional R&D expenses. Reallocate your capital towards aggressive user acquisition and brand scaling.' 
    },
    { 
      icon: <UserCheck size={24} />, 
      title: 'Strategic Partnership', 
      desc: 'Direct access to C-level technical advisory. We function as your extended CTO office, ensuring long-term platform scalability.' 
    },
    { 
      icon: <ShieldCheck size={24} />, 
      title: 'Compliance Infrastructure', 
      desc: 'Regulatory logic is native to our codebase. Navigate jurisdictional complexities with automated legal guardrails and reporting.' 
    },
    { 
      icon: <Heart size={24} />, 
      title: 'Frictionless Integration', 
      desc: 'Pre-authenticated gateways for tier-1 payments and real-time fraud prevention. Go live without the technical debt.' 
    },
    { 
      icon: <GraduationCap size={24} />, 
      title: 'Legacy Performance', 
      desc: '13+ years of architectural excellence. We have already solved the challenges your competitors haven’t even identified.' 
    },
  ];

  return (
    <section className="py-32 bg-white dark:bg-[#050714] relative transition-colors overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-start gap-24">
          
          {/* Header Block - Sticky on Desktop */}
          <div className="lg:w-1/3 lg:sticky lg:top-32 space-y-12">
            <div className="space-y-4">
              <span className="text-xs font-black uppercase tracking-[0.4em] text-gamma-blue dark:text-gamma-aquamarine">Strategic Edge</span>
              <h2 className="text-5xl md:text-7xl font-black text-gray-900 dark:text-white uppercase leading-[0.9] tracking-tighter">
                Why Us <br />
                <span className="opacity-20 italic">Over In-house</span> <br />
                Development?
              </h2>
            </div>
            
            <p className="text-xl text-gray-600 dark:text-gray-400 font-normal leading-relaxed">
              Custom software development is often a liability. GammaSweep provides the robustness of a battle-tested engine with the agility of a custom-built solution.
            </p>

            <div className="space-y-8 pt-4">
              {[
                'Unlimited Brand Customization',
                'High-Concurrency Game Engine',
                'Native Compliance Automation',
                'Precision Player Intelligence'
              ].map((item, idx) => (
                <div key={idx} className="flex items-center space-x-4 text-sm font-black text-gray-900 dark:text-white uppercase tracking-[0.15em]">
                  <div className="w-8 h-8 rounded-xl bg-gamma-aquamarine/20 flex items-center justify-center text-gamma-aquamarine shadow-sm">
                    <ChevronRight size={18} />
                  </div>
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <button className="bg-gray-900 dark:bg-white text-white dark:text-dark-bg font-black px-12 py-6 rounded-[2rem] w-full hover:scale-[1.03] transition-all uppercase tracking-widest shadow-2xl">
              Request Platform Specs
            </button>
          </div>

          {/* Features Grid */}
          <div className="lg:w-2/3 grid sm:grid-cols-2 gap-8 relative z-10">
            {reasons.map((reason, idx) => (
              <div key={idx} className="group relative p-12 bg-gray-50 dark:bg-[#0c0e24] rounded-[3rem] border border-gray-100 dark:border-white/5 hover:border-gamma-blue transition-all duration-700 overflow-hidden shadow-sm hover:shadow-[0_50px_80px_-20px_rgba(0,0,0,0.1)] dark:hover:shadow-[0_50px_80px_-20px_rgba(0,0,0,0.5)]">
                {/* Background Hover Accent */}
                <div className="absolute top-0 right-0 w-48 h-48 bg-gamma-blue/5 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-[4] transition-transform duration-1000"></div>
                
                <div className="relative z-10 space-y-8">
                  <div className="w-20 h-20 rounded-[1.5rem] bg-white dark:bg-white/5 flex items-center justify-center text-gamma-blue shadow-xl group-hover:scale-110 group-hover:-rotate-6 transition-all duration-500">
                    {reason.icon}
                  </div>
                  <div className="space-y-4">
                    <h4 className="text-3xl font-black text-gray-900 dark:text-white tracking-tight leading-tight">{reason.title}</h4>
                    <p className="text-gray-600 dark:text-gray-400 font-normal leading-relaxed text-lg">
                      {reason.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
            
            {/* Visual Decoration */}
            <div className="absolute top-1/2 right-0 w-full h-px bg-gradient-to-r from-transparent via-gamma-blue/20 to-transparent -rotate-12 -z-10"></div>
          </div>
        </div>

        {/* Floating Metrics Section */}
        <div className="mt-40 p-20 bg-gamma-blue rounded-[4rem] relative overflow-hidden group shadow-[0_60px_100px_-20px_rgba(72,91,255,0.4)]">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
          <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-16 text-white">
            <div className="space-y-6 text-center md:text-left">
              <h3 className="text-5xl md:text-7xl font-black uppercase tracking-tighter italic">Ready to Lead?</h3>
              <p className="text-2xl text-blue-100 font-normal max-w-2xl leading-relaxed">
                The window for market leadership in social sweepstakes is narrowing. Don't spend the most profitable years in a development cycle.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-8 w-full md:w-auto">
              <button className="bg-white text-gamma-blue font-black px-14 py-7 rounded-[2.5rem] text-2xl hover:scale-110 transition-all shadow-2xl uppercase tracking-widest group-hover:bg-gamma-aquamarine group-hover:text-dark-bg duration-500">
                Book Fast-Track Demo
              </button>
            </div>
          </div>
          
          <div className="absolute -top-20 -right-20 w-96 h-96 bg-gamma-aquamarine/20 rounded-full blur-[120px] group-hover:scale-150 transition-transform duration-1000"></div>
        </div>
      </div>
    </section>
  );
};

export default WhySection;
