import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 px-6 md:px-12 border-t border-gray-100 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-charcoal-500 text-sm mb-4 md:mb-0">
            © 2025 Millat. All rights reserved.
          </div>
          
          <div className="text-charcoal-400 text-sm font-light italic">
            "Silent by choice. Purposeful by design."
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;