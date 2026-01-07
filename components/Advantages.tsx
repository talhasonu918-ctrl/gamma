
import React from 'react';
import { Rocket, Settings, Shield, Headphones } from 'lucide-react';

const Advantages: React.FC = () => {
  const cards = [
    {
      title: 'Ready-To-Launch Sweepstakes Solution',
      desc: 'Complete turnkey platform ready in 4-6 weeks with all compliance and integrations included.',
      bullets: ['Pre-built casino games', 'Payment processing', 'KYC/AML compliance', 'AMOE compliance'],
      icon: <Rocket size={24} />,
      btn: 'Launch Now'
    },
    {
      title: 'On-Demand Customizations',
      desc: 'Tailor the platform to your brand and specific business requirements.',
      bullets: ['Custom branding', 'Unique game mechanics', 'API integrations', 'White-label solutions'],
      icon: <Settings size={24} />,
      btn: 'Customize'
    },
    {
      title: 'Legal Support & Compliance',
      desc: 'Navigate complex regulations with our expert legal and compliance team.',
      bullets: ['Regulatory guidance', 'License assistance', 'Ongoing compliance', 'Risk management'],
      icon: <Shield size={24} />,
      btn: 'Get Protected'
    },
    {
      title: 'Ongoing Support & Maintenance',
      desc: '24/7 technical support and platform maintenance to keep your casino running smoothly.',
      bullets: ['24/7 monitoring', 'Regular updates', 'Performance optimization', 'Technical support'],
      icon: <Headphones size={24} />,
      btn: 'Get Support'
    }
  ];

  return (
    <section className="py-24 bg-white dark:bg-dark-bg transition-colors relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tight text-gray-900 dark:text-white">
            Unlock Extraordinary Advantages <br />
            <span className="text-gamma-aquamarine">With GammaSweep</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg">
            Everything you need to launch and scale your social sweepstakes casino.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {cards.map((card, idx) => (
            <div key={idx} className="bg-gray-50 dark:bg-dark-card border border-gray-100 dark:border-white/5 rounded-[32px] p-10 hover:bg-white dark:hover:bg-white/5 transition-all group shadow-sm dark:shadow-none hover:shadow-2xl hover:-translate-y-2 duration-300">
              <div className="w-14 h-14 bg-gamma-aquamarine/10 text-gamma-aquamarine rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-6 transition-transform">
                {card.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white group-hover:text-gamma-blue transition-colors">{card.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-8 text-base leading-relaxed">{card.desc}</p>
              
              <ul className="grid grid-cols-2 gap-y-4 mb-10">
                {card.bullets.map((bullet, i) => (
                  <li key={i} className="flex items-center space-x-3 text-sm font-medium text-gray-700 dark:text-gray-300 group/item">
                    <div className="w-2 h-2 bg-gamma-aquamarine rounded-full group-hover/item:scale-150 transition-transform"></div>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>

              <button className="bg-gamma-aquamarine text-dark-bg font-bold px-8 py-3.5 rounded-xl text-base hover:shadow-lg hover:shadow-gamma-aquamarine/20 transition-all flex items-center space-x-2 group/btn">
                <span>{card.btn}</span>
                <span className="group-hover/btn:translate-x-1 transition-transform">→</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Advantages;
