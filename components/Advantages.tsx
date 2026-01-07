
import React from 'react';
import { Rocket, Settings, Shield, Headphones, MoveRight } from 'lucide-react';

const Advantages: React.FC = () => {
  const cards = [
    {
      title: 'Ready-To-Launch Sweepstakes Solution',
      desc: 'Complete turnkey platform ready in 4-6 weeks with all compliance and integrations included.',
      bullets: [
        'Pre-built casino games', 
        'Payment processing', 
        'KYC/AML compliance', 
        'AMOE compliance'
      ],
      icon: <Rocket size={28} />,
      btnText: 'Launch Now'
    },
    {
      title: 'On-Demand Customizations',
      desc: 'Tailor the platform to your brand and specific business requirements.',
      bullets: [
        'Custom branding', 
        'Unique game mechanics', 
        'API integrations', 
        'White-label solutions'
      ],
      icon: <Settings size={28} />,
      btnText: 'Customize'
    },
    {
      title: 'Legal Support & Compliance',
      desc: 'Navigate complex regulations with our expert legal and compliance team.',
      bullets: [
        'Regulatory guidance', 
        'License assistance', 
        'Ongoing compliance', 
        'Risk management'
      ],
      icon: <Shield size={28} />,
      btnText: 'Get Protected'
    },
    {
      title: 'Ongoing Support & Maintenance',
      desc: '24/7 technical support and platform maintenance to keep your casino running smoothly.',
      bullets: [
        '24/7 monitoring', 
        'Regular updates', 
        'Performance optimization', 
        'Technical support'
      ],
      icon: <Headphones size={28} />,
      btnText: 'Get Support'
    }
  ];

  return (
    <section className="py-32 bg-white dark:bg-[#050714] transition-colors relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-left mb-20 space-y-6">
          <span className="text-xs font-black uppercase tracking-[0.4em] text-gamma-blue dark:text-gamma-aquamarine">Infrastructure</span>
          <h2 className="text-4xl md:text-6xl font-black tracking-tight text-gray-900 dark:text-white font-roboto uppercase">
            Architected for <br />
            <span className="text-gamma-blue dark:text-gamma-aquamarine">Market Dominance</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {cards.map((card, idx) => (
            <div 
              key={idx} 
              className="bg-gray-50 dark:bg-[#0c0e24] border border-gray-100 dark:border-white/5 rounded-[2.5rem] p-10 lg:p-14 transition-all group shadow-sm hover:shadow-2xl hover:-translate-y-2 duration-500 flex flex-col h-full"
            >
              {/* Icon Container - Matches the bright rounded-square from screenshot */}
              <div className="w-20 h-20 bg-gamma-aquamarine rounded-[1.5rem] flex items-center justify-center mb-10 shadow-lg shadow-gamma-aquamarine/20 group-hover:scale-110 transition-transform duration-500">
                <div className="text-dark-bg">
                  {card.icon}
                </div>
              </div>

              {/* Text Content */}
              <h3 className="text-3xl lg:text-4xl font-black mb-6 text-gray-900 dark:text-white font-roboto tracking-tight leading-tight">
                {card.title}
              </h3>
              <p className="text-gray-500 dark:text-gray-400 mb-10 text-lg font-roboto leading-relaxed font-normal">
                {card.desc}
              </p>
              
              {/* Feature List */}
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-4 mb-12 mt-auto">
                {card.bullets.map((bullet, i) => (
                  <li key={i} className="flex items-center space-x-3 text-base font-bold text-gray-800 dark:text-gray-200 group/item">
                    <div className="w-3 h-3 bg-gamma-aquamarine rounded-full shadow-sm"></div>
                    <span className="font-roboto tracking-tight">{bullet}</span>
                  </li>
                ))}
              </ul>

              {/* Action Button - Large, Corporate, High-Contrast */}
              <button className="bg-gamma-aquamarine text-dark-bg font-black px-10 py-5 rounded-2xl text-xl hover:scale-[1.02] transition-all flex items-center justify-center space-x-4 group/btn shadow-xl shadow-gamma-aquamarine/10">
                <span>{card.btnText}</span>
                <MoveRight size={24} className="group-hover:translate-x-3 transition-transform duration-300" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Advantages;
