
import React from 'react';
import { ArrowRight, Play, CheckCircle2, ShieldCheck } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-24 pb-32 overflow-hidden">
      {/* Aurora Background Effect */}
      <div className="aurora-bg animate-aurora"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          
          {/* Content Block */}
          <div className="lg:col-span-7 space-y-10">
            <div className="inline-flex items-center space-x-3 px-5 py-2.5 rounded-full bg-gamma-blue/5 dark:bg-white/5 border border-gamma-blue/10 dark:border-white/10 backdrop-blur-sm animate-reveal-up">
              <span className="flex h-2.5 w-2.5 rounded-full bg-gamma-aquamarine animate-pulse"></span>
              <span className="text-xs font-black uppercase tracking-[0.3em] text-gray-500 dark:text-gray-300">Enterprise B2B Infrastructure</span>
            </div>

            <h1 className="text-6xl md:text-8xl font-black leading-[0.85] tracking-tighter text-gray-900 dark:text-white uppercase italic">
              Scale Your <br />
              <span className="text-gamma-blue dark:text-gamma-aquamarine">Operation</span> <br />
              <span className="text-4xl md:text-5xl font-light tracking-normal not-italic lowercase opacity-60 block mt-4">professional turnkey systems</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 max-w-2xl font-normal leading-relaxed">
              Deploy a high-yield, compliant sweepstakes ecosystem in <span className="text-gray-900 dark:text-white font-bold border-b-4 border-gamma-aquamarine">28 days or less</span>. Optimized for global performance and regulatory precision.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 pt-4">
              <button className="group relative bg-gamma-blue text-white px-12 py-6 rounded-[2rem] text-xl font-black transition-all hover:scale-105 active:scale-95 shadow-[0_25px_50px_-12px_rgba(72,91,255,0.5)] overflow-hidden uppercase tracking-widest">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                <span className="relative flex items-center justify-center space-x-4">
                  <span>Inquire Now</span>
                  <ArrowRight size={24} className="group-hover:translate-x-3 transition-transform duration-300" />
                </span>
              </button>
              
              <button className="flex items-center justify-center space-x-4 px-12 py-6 rounded-[2rem] text-xl font-black text-gray-700 dark:text-white border border-gray-200 dark:border-white/10 hover:bg-black/5 dark:hover:bg-white/5 transition-all uppercase tracking-widest">
                <div className="w-12 h-12 rounded-full bg-gamma-aquamarine/20 flex items-center justify-center text-gamma-aquamarine">
                  <Play size={24} fill="currentColor" />
                </div>
                <span>Platform Tour</span>
              </button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 pt-10 border-t border-gray-200 dark:border-white/10">
              <div className="space-y-1">
                <p className="text-3xl font-black text-gray-900 dark:text-white">4.2w</p>
                <p className="text-[10px] font-black uppercase tracking-[0.2em] opacity-50">Avg. Deployment</p>
              </div>
              <div className="space-y-1">
                <p className="text-3xl font-black text-gray-900 dark:text-white">90%</p>
                <p className="text-[10px] font-black uppercase tracking-[0.2em] opacity-50">OpEx Reduction</p>
              </div>
              <div className="hidden md:block space-y-1">
                <p className="text-3xl font-black text-gray-900 dark:text-white">Tier-1</p>
                <p className="text-[10px] font-black uppercase tracking-[0.2em] opacity-50">Security Audit</p>
              </div>
            </div>
          </div>

          {/* Visual Block - Premium Mockup */}
          <div className="lg:col-span-5 relative perspective-1000">
            <div className="relative z-20 animate-float">
              <div className="bg-white dark:bg-[#0c0e24] rounded-[3.5rem] p-12 border border-gray-200 dark:border-white/10 shadow-[0_120px_100px_-20px_rgba(0,0,0,0.3)] dark:shadow-[0_120px_100px_-20px_rgba(0,0,0,0.6)] backdrop-blur-3xl relative overflow-hidden">
                <div className="flex justify-between items-center mb-12">
                  <div className="flex space-x-3">
                    <div className="w-4 h-4 rounded-full bg-red-400/80"></div>
                    <div className="w-4 h-4 rounded-full bg-yellow-400/80"></div>
                    <div className="w-4 h-4 rounded-full bg-green-400/80"></div>
                  </div>
                  <div className="px-5 py-2 rounded-xl bg-gamma-aquamarine/10 text-gamma-aquamarine text-xs font-black uppercase tracking-[0.2em]">
                    Real-time Ops
                  </div>
                </div>

                <div className="space-y-10">
                  <div className="space-y-3">
                    <p className="text-xs font-black opacity-40 uppercase tracking-[0.3em] text-gray-900 dark:text-white">Aggregated Volume</p>
                    <p className="text-6xl font-black text-gray-900 dark:text-white tracking-tighter italic">$4,287,190</p>
                  </div>
                  
                  <div className="flex items-center space-x-6">
                    <div className="flex-1 h-36 bg-gray-50 dark:bg-white/5 rounded-[2rem] flex items-end justify-between p-6 space-x-2">
                      {[40, 70, 45, 90, 65, 80, 55, 95].map((h, i) => (
                        <div key={i} className="flex-1 bg-gradient-to-t from-gamma-blue to-gamma-aquamarine rounded-full animate-pulse" style={{ height: `${h}%`, animationDelay: `${i * 0.1}s` }}></div>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-6">
                    <div className="p-6 rounded-[2rem] bg-gamma-aquamarine/5 border border-gamma-aquamarine/10">
                      <p className="text-xs font-black text-gamma-aquamarine uppercase tracking-widest mb-1">Retention</p>
                      <p className="text-3xl font-black text-gray-900 dark:text-white">82.4%</p>
                    </div>
                    <div className="p-6 rounded-[2rem] bg-gamma-blue/5 border border-gamma-blue/10">
                      <p className="text-xs font-black text-gamma-blue uppercase tracking-widest mb-1">Yield</p>
                      <p className="text-3xl font-black text-gray-900 dark:text-white">+14.7%</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative Floating Cards */}
              <div className="absolute -top-16 -right-12 w-56 p-8 bg-white dark:bg-[#1a1d3d] rounded-[2.5rem] shadow-2xl border border-gray-200 dark:border-white/10 animate-float animation-delay-500 z-30">
                <ShieldCheck className="text-gamma-aquamarine mb-4" size={40} />
                <p className="text-[10px] font-black uppercase tracking-[0.2em] opacity-40 mb-2">KYC Verification</p>
                <p className="text-2xl font-black italic text-gray-900 dark:text-white">12,481</p>
              </div>
              
              <div className="absolute -bottom-12 -left-16 w-64 p-8 bg-gamma-blue text-white rounded-[2.5rem] shadow-2xl border border-white/20 animate-float animation-delay-1000 z-30">
                <div className="flex items-center space-x-4 mb-4">
                  <CheckCircle2 size={28} />
                  <span className="text-[10px] font-black uppercase tracking-[0.3em]">Net Settlements</span>
                </div>
                <p className="text-3xl font-black italic">$942,000</p>
              </div>
            </div>

            {/* Visual Accents */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-gamma-blue/15 dark:bg-gamma-blue/25 rounded-full blur-[140px] -z-10 animate-slow-pulse"></div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
