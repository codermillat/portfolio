import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 px-6 md:px-12 border-t border-charcoal-100">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-charcoal-400 font-light text-sm mb-4 md:mb-0">
            © 2025 Millat. All rights reserved.
          </div>
          
          {/* Hidden signature */}
          <div className="text-charcoal-300 font-mono text-xs opacity-50 hover:opacity-100 transition-opacity duration-500">
            "Not here to impress. Just to build."
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;