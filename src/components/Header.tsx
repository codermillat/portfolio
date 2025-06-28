import React from 'react';
import { Download } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="py-16 md:py-24 px-6 md:px-12 bg-white border-b border-gray-100">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-3xl md:text-5xl font-light text-charcoal-800 mb-4 tracking-tight">
          Millat
        </h1>
        <p className="text-lg md:text-xl text-charcoal-600 mb-2 font-light">
          Full-Stack Developer & Creative Strategist
        </p>
        <p className="text-base text-olive-600 mb-8 font-light">
          Building thoughtful solutions with purpose and precision.
        </p>
        
        <button className="inline-flex items-center gap-2 px-6 py-3 bg-charcoal-800 text-white font-medium text-sm hover:bg-charcoal-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-charcoal-500 focus:ring-offset-2">
          <Download size={16} />
          Download Resume
        </button>
      </div>
    </header>
  );
};

export default Header;