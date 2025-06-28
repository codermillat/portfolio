import React from 'react';
import { Heart, Code } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 px-6 lg:px-8 bg-gray-900 text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-primary-950 to-gray-900" />
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-48 h-48 bg-blue-500/5 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center">
          {/* Logo/Name */}
          <div className="mb-8">
            <h3 className="font-serif font-semibold text-2xl text-white mb-2">
              <span className="text-primary-400">MD</span> Millat
            </h3>
            <div className="w-16 h-0.5 bg-gradient-to-r from-primary-400 to-blue-400 mx-auto rounded-full" />
          </div>

          {/* Signature Quote */}
          <div className="mb-8">
            <blockquote className="text-lg text-gray-300 italic font-light mb-4 max-w-2xl mx-auto">
              "Silent by choice. Purposeful by design."
            </blockquote>
            <p className="text-gray-400 text-sm">
              Building systems in silence and stories in code
            </p>
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent mb-8" />

          {/* Footer Bottom */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-400 text-sm">
              © 2025 MD Millat. All rights reserved.
            </div>
            
            <div className="flex items-center gap-2 text-gray-400 text-sm">
              <span>Built with</span>
              <Heart size={14} className="text-red-400 animate-pulse" />
              <span>and</span>
              <Code size={14} className="text-primary-400" />
              <span>in India</span>
            </div>
          </div>

          {/* Additional Footer Note */}
          <div className="mt-8 pt-6 border-t border-gray-800">
            <p className="text-xs text-gray-500 max-w-2xl mx-auto leading-relaxed">
              This portfolio represents my journey as a developer and creative strategist. 
              Every project, every line of code, and every design choice reflects my commitment 
              to building meaningful solutions that make a difference.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;