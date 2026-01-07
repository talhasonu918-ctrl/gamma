
import React from 'react';

const Logo: React.FC = () => {
  return (
    <div className="flex items-center gap-1 font-bold italic select-none">
      {/* Large Screen Version */}
      <div className="hidden lg:flex items-baseline">
        <span className="text-3xl text-gray-900 dark:text-white transition-colors">GAMMA</span>
        <span className="text-3xl text-gamma-aquamarine ml-1">SWEEP</span>
        <div className="ml-1 w-0 h-0 border-t-[10px] border-t-transparent border-l-[15px] border-l-gray-900 dark:border-l-white border-b-[10px] border-b-transparent transition-colors"></div>
      </div>

      {/* Medium Screen Version */}
      <div className="hidden md:flex lg:hidden flex-col leading-none">
        <span className="text-xl text-gray-900 dark:text-white transition-colors">GAMMA</span>
        <div className="flex items-center">
          <span className="text-xl text-gamma-aquamarine">SWEEP</span>
          <div className="ml-1 w-0 h-0 border-t-[6px] border-t-transparent border-l-[10px] border-l-gray-900 dark:border-l-white border-b-[6px] border-b-transparent transition-colors"></div>
        </div>
      </div>

      {/* Small Screen Version */}
      <div className="flex md:hidden items-center">
        <span className="text-2xl text-gray-900 dark:text-white transition-colors">G</span>
        <span className="text-2xl text-gamma-aquamarine">S</span>
        <div className="ml-1 w-0 h-0 border-t-[8px] border-t-transparent border-l-[12px] border-l-gray-900 dark:border-l-white border-b-[8px] border-b-transparent transition-colors"></div>
      </div>
    </div>
  );
};

export default Logo;
