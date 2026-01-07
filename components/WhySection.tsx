
import React from 'react';
import { Clock, DollarSign, UserCheck, ShieldCheck, Heart, GraduationCap, ChevronRight } from 'lucide-react';

const WhySection: React.FC = () => {
  const reasons = [
    { 
      icon: <Clock size={24} />, 
      title: 'Turbocharged Deployment', 
      desc: 'Market leaders take 6-12 months. We get you live in 4 weeks. Velocity is our competitive advantage.' 
    },
    { 
      icon: <DollarSign size={24} />, 
      title: 'Capital Efficiency', 
      desc: 'Save 90% on upfront R&D. Invest that capital where it matters: Customer Acquisition and Brand.' 
    },
    { 
      icon: <UserCheck size={24} />, 
      title: 'Partner, Not Vendor', 
      desc: 'Direct access to C-level support. We succeed when you scale. No ticket systems, just results.' 
    },
    { 
      icon: <ShieldCheck size={24} />, 
      title: 'Compliance-as-Code', 
      desc: 'Our legal logic is baked into the platform. Operate with total confidence in complex markets.' 
    },
    { 
      icon: <Heart size={24} />, 
      title: 'Seamless Ecosystem', 
      desc: 'Pre-integrated with top-tier payment gates and fraud prevention. Zero friction onboarding.' 
    },
    { 
      icon: <GraduationCap size={24} />, 
      title: 'Decade of Expertise', 
      desc: '13+ years in the trenches. We’ve solved the problems you haven’t even encountered yet.' 
    },
  ];

  return (
    <section className="py-32 bg-white dark:bg-[#050714] relative transition-colors overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-start gap-24">
          
          {/* Header Block - Sticky on Desktop */}
          <div className="lg:w-1/3 lg:sticky lg:top-32 space-y-10">
            <div className="space-y-4">
              <span className="text-xs font-black uppercase tracking-[0.3em] text-gamma-blue dark:text-gamma-aquamarine">Differentiation</span>
              <h2 className="text-5xl md:text-6xl font-black text-gray-900 dark:text-white uppercase leading-none tracking-tighter">
                Why Us <br />
                <span className="opacity-30">Instead Of</span> <br />
                Building?
              </h2>
            </div>
            
            <p className="text-xl text-gray-600 dark:text-gray-400 font-light leading-relaxed">
              Building a custom social casino is a black hole for capital. We provide the stability of a battle-tested engine with the flexibility of a custom build.
            </p>

            <div className="space-y-6 pt-4">
              {[
                'Unlimited Custom Skins',
                'Proprietary Game Engine',
                'Integrated Compliance Engine',
                'Advanced Player Analytics'
              ].map((item, idx) => (
                <div key={idx} className="flex items-center space-x-3 text-sm font-bold text-gray-900 dark:text-white uppercase tracking-widest">
                  <div className="w-6 h-6 rounded-full bg-gamma-aquamarine/20 flex items-center justify-center text-gamma-aquamarine">
                    <ChevronRight size={14} />
                  </div>
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <button className="bg-gray-900 dark:bg-white text-white dark:text-dark-bg font-bold px-10 py-5 rounded-2xl w-full hover:scale-[1.02] transition-all">
              Request Platform Spec
            </button>
          </div>

          {/* Features Grid */}
          <div className="lg:w-2/3 grid sm:grid-cols-2 gap-6 relative z-10">
            {reasons.map((reason, idx) => (
              <div key={idx} className="group relative p-10 bg-gray-50 dark:bg-white/5 rounded-[2.5rem] border border-gray-200 dark:border-white/10 hover:border-gamma-blue transition-all duration-500 overflow-hidden shadow-sm hover:shadow-2xl">
                {/* Background Hover Accent */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gamma-blue/5 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-[3] transition-transform duration-700"></div>
                
                <div className="relative z-10 space-y-6">
                  <div className="w-16 h-16 rounded-2xl bg-white dark:bg-white/5 flex items-center justify-center text-gamma-blue shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all">
                    {reason.icon}
                  </div>
                  <div className="space-y-3">
                    <h4 className="text-2xl font-bold text-gray-900 dark:text-white tracking-tight">{reason.title}</h4>
                    <p className="text-gray-600 dark:text-gray-400 font-light leading-relaxed">
                      {reason.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
            
            {/* Visual Decoration for the background */}
            <div className="absolute top-1/2 right-0 w-full h-px bg-gradient-to-r from-transparent via-gamma-blue/20 to-transparent -rotate-12 -z-10"></div>
          </div>
        </div>

        {/* Floating Metrics Section */}
        <div className="mt-32 p-16 bg-gamma-blue rounded-[3rem] relative overflow-hidden group shadow-2xl">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
          <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-12 text-white">
            <div className="space-y-4 text-center md:text-left">
              <h3 className="text-4xl md:text-5xl font-black uppercase tracking-tighter">Ready to Dominate?</h3>
              <p className="text-xl text-blue-100 font-light max-w-xl">
                The window of opportunity for social sweepstakes is now. Don't spend the best market years in a dev cycle.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-6 w-full md:w-auto">
              <button className="bg-white text-gamma-blue font-bold px-12 py-5 rounded-2xl text-xl hover:scale-105 transition-all shadow-xl">
                Book Fast-Track Demo
              </button>
            </div>
          </div>
          
          {/* Animated Background Orbs */}
          <div className="absolute -top-10 -right-10 w-64 h-64 bg-gamma-aquamarine/20 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-1000"></div>
        </div>
      </div>
    </section>
  );
};

export default WhySection;
