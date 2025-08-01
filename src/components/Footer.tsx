import React from 'react';
import { Heart, Code, Mail, MapPin, Phone, Github, Linkedin, Twitter, ExternalLink } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 lg:py-16">
      {/* Top Line */}
      <div className="border-t-4 border-gray-700"></div>

      {/* Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-10">
          {/* About Section */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold mb-4 flex items-center">
              <span className="text-primary-400">MD MILLAT</span> HOSEN
            </h3>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Full Stack Developer & Creative Strategist specializing in WordPress, React, Node.js, and mobile app development. 
              Building meaningful solutions with technical excellence and creative strategy.
            </p>
            <div className="flex space-x-4">
              <a href="https://github.com/codermillat" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://linkedin.com/in/codermillat" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://twitter.com/codermillat" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold mb-4 text-lg">Services</h4>
            <ul className="text-gray-300 space-y-2">
              <li><a href="#projects" className="hover:text-white transition-colors">WordPress Development</a></li>
              <li><a href="#projects" className="hover:text-white transition-colors">React Applications</a></li>
              <li><a href="#projects" className="hover:text-white transition-colors">Mobile App Development</a></li>
              <li><a href="#projects" className="hover:text-white transition-colors">SEO Optimization</a></li>
              <li><a href="#projects" className="hover:text-white transition-colors">UI/UX Design</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-4 text-lg">Contact</h4>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-center">
                <Mail className="w-4 h-4 mr-2 text-primary-400" />
                <a href="mailto:millat6575@gmail.com" className="hover:text-white transition-colors">millat6575@gmail.com</a>
              </div>
              <div className="flex items-center">
                <MapPin className="w-4 h-4 mr-2 text-primary-400" />
                <span>Greater Noida, India</span>
              </div>
              <div className="flex items-center">
                <ExternalLink className="w-4 h-4 mr-2 text-primary-400" />
                <a href="https://www.millat.tech" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">www.millat.tech</a>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-400 text-sm">
              © 2025 MD MILLAT HOSEN. All rights reserved.
            </div>
            
            <div className="flex items-center gap-2 text-gray-400 text-sm">
              <span>Built with</span>
              <Heart size={12} className="text-red-400" />
              <span>and</span>
              <Code size={12} className="text-primary-400" />
              <span>in India</span>
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-4 pt-4 border-t border-gray-800">
            <p className="text-xs text-gray-500 text-center max-w-2xl mx-auto leading-relaxed">
              Also known as: <strong>MD MILLAT</strong> • <strong>Mohd MILLAT</strong> • <strong>codermillat</strong> • 
              "Silent by choice. Purposeful by design." - Building systems in silence and stories in code.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;