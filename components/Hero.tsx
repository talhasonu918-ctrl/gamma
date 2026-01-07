
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
            <div className="inline-flex items-center space-x-3 px-4 py-2 rounded-full bg-gamma-blue/5 dark:bg-white/5 border border-gamma-blue/10 dark:border-white/10 backdrop-blur-sm animate-reveal-up">
              <span className="flex h-2 w-2 rounded-full bg-gamma-aquamarine animate-pulse"></span>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-500 dark:text-gray-400">Next Gen Software Platform</span>
            </div>

            <h1 className="text-6xl md:text-8xl font-black leading-[0.9] tracking-tighter text-gray-900 dark:text-white uppercase italic">
              Level Up Your <br />
              <span className="text-gamma-blue dark:text-gamma-aquamarine">Empire</span> <br />
              <span className="text-4xl md:text-5xl font-light tracking-normal not-italic lowercase opacity-60">with turn-key sweepstakes</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 max-w-2xl font-light leading-relaxed">
              Skip the 6-month dev cycle. Launch a fully compliant, revenue-generating social casino in <span className="text-gray-900 dark:text-white font-medium border-b-2 border-gamma-aquamarine">under 30 days</span>.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 pt-4">
              <button className="group relative bg-gamma-blue text-white px-10 py-5 rounded-2xl text-xl font-bold transition-all hover:scale-105 active:scale-95 shadow-[0_20px_40px_-10px_rgba(72,91,255,0.4)] overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                <span className="relative flex items-center justify-center space-x-3">
                  <span>Start Your Demo</span>
                  <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform" />
                </span>
              </button>
              
              <button className="flex items-center justify-center space-x-4 px-10 py-5 rounded-2xl text-xl font-medium text-gray-700 dark:text-white border border-gray-200 dark:border-white/10 hover:bg-black/5 dark:hover:bg-white/5 transition-all">
                <div className="w-10 h-10 rounded-full bg-gamma-aquamarine/10 flex items-center justify-center text-gamma-aquamarine">
                  <Play size={20} fill="currentColor" />
                </div>
                <span>See the Platform</span>
              </button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 pt-8 border-t border-gray-200 dark:border-white/10">
              <div className="space-y-1">
                <p className="text-2xl font-black text-gray-900 dark:text-white">4-6w</p>
                <p className="text-[10px] font-bold uppercase tracking-widest opacity-50">Market Entry</p>
              </div>
              <div className="space-y-1">
                <p className="text-2xl font-black text-gray-900 dark:text-white">90%</p>
                <p className="text-[10px] font-bold uppercase tracking-widest opacity-50">Cost Efficiency</p>
              </div>
              <div className="hidden md:block space-y-1">
                <p className="text-2xl font-black text-gray-900 dark:text-white">Full</p>
                <p className="text-[10px] font-bold uppercase tracking-widest opacity-50">Legal Compliance</p>
              </div>
            </div>
          </div>

          {/* Visual Block - Premium Mockup */}
          <div className="lg:col-span-5 relative perspective-1000">
            <div className="relative z-20 animate-float">
              {/* Main Card */}
              <div className="bg-white dark:bg-[#0c0e24] rounded-[3rem] p-10 border border-gray-200 dark:border-white/10 shadow-[0_100px_80px_rgba(0,0,0,0.15)] dark:shadow-[0_100px_80px_rgba(0,0,0,0.4)] backdrop-blur-xl relative overflow-hidden">
                <div className="flex justify-between items-center mb-10">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  </div>
                  <div className="px-3 py-1 rounded bg-gamma-blue/10 text-gamma-blue text-[10px] font-black uppercase tracking-widest">
                    Live Session
                  </div>
                </div>

                <div className="space-y-8">
                  <div className="space-y-2">
                    <p className="text-xs font-bold opacity-40 uppercase tracking-[0.2em] text-gray-900 dark:text-white">Global Revenue</p>
                    <p className="text-5xl font-black text-gray-900 dark:text-white tracking-tighter">$4.2M</p>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="flex-1 h-32 bg-gray-50 dark:bg-white/5 rounded-2xl flex items-end justify-between p-4 space-x-1">
                      {[40, 70, 45, 90, 65, 80, 55, 95].map((h, i) => (
                        <div key={i} className="flex-1 bg-gamma-blue rounded-full" style={{ height: `${h}%` }}></div>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-5 rounded-3xl bg-gamma-aquamarine/10 border border-gamma-aquamarine/10">
                      <p className="text-[10px] font-bold text-gamma-aquamarine uppercase">Retention</p>
                      <p className="text-2xl font-black text-gray-900 dark:text-white">82%</p>
                    </div>
                    <div className="p-5 rounded-3xl bg-gamma-blue/10 border border-gamma-blue/10">
                      <p className="text-[10px] font-bold text-gamma-blue uppercase">GGR</p>
                      <p className="text-2xl font-black text-gray-900 dark:text-white">+14%</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative Floating Cards */}
              <div className="absolute -top-12 -right-8 w-48 p-6 bg-white dark:bg-[#1a1d3d] rounded-3xl shadow-2xl border border-gray-200 dark:border-white/10 animate-float animation-delay-500 z-30">
                <ShieldCheck className="text-gamma-aquamarine mb-3" size={32} />
                <p className="text-xs font-black uppercase opacity-40 mb-1">KYC Verified</p>
                <p className="text-xl font-bold">12.4k</p>
              </div>
              
              <div className="absolute -bottom-10 -left-12 w-56 p-6 bg-gamma-blue text-white rounded-3xl shadow-2xl border border-white/10 animate-float animation-delay-1000 z-30">
                <div className="flex items-center space-x-3 mb-3">
                  <CheckCircle2 size={24} />
                  <span className="text-xs font-black uppercase tracking-widest">Payouts</span>
                </div>
                <p className="text-2xl font-bold italic">$942,000</p>
              </div>
            </div>

            {/* Visual Accents */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] bg-gamma-blue/10 dark:bg-gamma-blue/20 rounded-full blur-[120px] -z-10"></div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
