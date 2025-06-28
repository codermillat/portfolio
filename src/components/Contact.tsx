import React, { useEffect, useRef, useState } from 'react';
import { Mail, Github, Linkedin, Code, Twitter, BookOpen, ExternalLink, MessageCircle, Send } from 'lucide-react';

const socialLinks = [
  {
    name: 'Email',
    handle: 'millat6575@gmail.com',
    url: 'mailto:millat6575@gmail.com',
    icon: Mail,
    color: 'from-red-400 to-red-600',
    description: 'Direct communication'
  },
  {
    name: 'GitHub',
    handle: 'github.com/codermillat',
    url: 'https://github.com/codermillat',
    icon: Github,
    color: 'from-gray-700 to-gray-900',
    description: 'Code repositories'
  },
  {
    name: 'LinkedIn',
    handle: 'linkedin.com/in/codermillat',
    url: 'https://linkedin.com/in/codermillat',
    icon: Linkedin,
    color: 'from-blue-600 to-blue-800',
    description: 'Professional network'
  },
  {
    name: 'LeetCode',
    handle: 'leetcode.com/millat',
    url: 'https://leetcode.com/millat',
    icon: Code,
    color: 'from-orange-500 to-orange-700',
    description: 'Coding challenges'
  },
  {
    name: 'Twitter',
    handle: '@codermillat',
    url: 'https://twitter.com/codermillat',
    icon: Twitter,
    color: 'from-sky-400 to-sky-600',
    description: 'Thoughts & updates'
  },
  {
    name: 'Medium',
    handle: '@codermillat',
    url: 'https://medium.com/@codermillat',
    icon: BookOpen,
    color: 'from-green-600 to-green-800',
    description: 'Technical articles'
  }
];

const Contact: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="contact" ref={sectionRef} className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gray-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-1/4 w-48 h-48 sm:w-64 sm:h-64 lg:w-96 lg:h-96 bg-gradient-to-br from-primary-100/60 to-transparent rounded-full -translate-y-24 sm:-translate-y-32 lg:-translate-y-48 opacity-60" />
      <div className="absolute bottom-0 right-1/4 w-32 h-32 sm:w-48 sm:h-48 lg:w-72 lg:h-72 bg-gradient-to-tl from-blue-100/60 to-transparent rounded-full translate-y-16 sm:translate-y-24 lg:translate-y-36 opacity-60" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className={`transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          {/* Section Header */}
          <div className="text-center mb-12 lg:mb-20">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-serif font-semibold text-gray-900 mb-4">
              Let's Connect
            </h2>
            <div className="w-16 h-0.5 bg-gradient-to-r from-primary-500 to-blue-500 mx-auto rounded-full mb-6" />
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto mb-8 px-4">
              Open to opportunities, collaborations, and meaningful conversations about technology and creativity. 
              Let's build something amazing together.
            </p>
            
            {/* Call to Action */}
            <div className="bg-gradient-to-r from-primary-600 to-blue-600 text-white p-6 sm:p-8 rounded-2xl max-w-4xl mx-auto relative overflow-hidden group hover:shadow-xl transition-all duration-300">
              <div className="absolute top-0 right-0 w-24 h-24 sm:w-32 sm:h-32 bg-white/10 rounded-full -translate-y-12 translate-x-12 sm:-translate-y-16 sm:translate-x-16" />
              <div className="absolute bottom-0 left-0 w-20 h-20 sm:w-24 sm:h-24 bg-white/10 rounded-full translate-y-10 -translate-x-10 sm:translate-y-12 sm:-translate-x-12" />
              
              <div className="relative z-10">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <MessageCircle size={20} className="sm:w-6 sm:h-6" />
                  <h3 className="text-lg sm:text-xl font-semibold">Want to build with purpose?</h3>
                </div>
                <p className="text-blue-100 mb-6 text-sm sm:text-base">Let's discuss your project and create something meaningful together</p>
                <a 
                  href="mailto:millat6575@gmail.com"
                  className="inline-flex items-center gap-2 bg-white text-primary-700 px-6 sm:px-8 py-3 rounded-xl font-medium hover:bg-blue-50 transition-colors duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                >
                  <Send size={16} className="sm:w-5 sm:h-5" />
                  Write to me
                </a>
              </div>
            </div>
          </div>

          {/* Social Links Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-12 lg:mb-20">
            {socialLinks.map((link, index) => (
              <div
                key={index}
                className={`transition-all duration-500 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <a
                  href={link.url}
                  target={link.name !== 'Email' ? '_blank' : undefined}
                  rel={link.name !== 'Email' ? 'noopener noreferrer' : undefined}
                  className="block bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group border border-gray-100 h-full"
                >
                  {/* Header with Gradient */}
                  <div className={`bg-gradient-to-r ${link.color} p-4 text-white relative overflow-hidden`}>
                    <div className="absolute top-0 right-0 w-12 h-12 sm:w-16 sm:h-16 bg-white/10 rounded-full -translate-y-6 translate-x-6 sm:-translate-y-8 sm:translate-x-8" />
                    <div className="relative z-10 flex items-center gap-3">
                      <link.icon size={16} className="sm:w-5 sm:h-5 flex-shrink-0" />
                      <div className="min-w-0">
                        <h3 className="font-semibold text-sm sm:text-base">{link.name}</h3>
                        <p className="text-xs sm:text-sm opacity-90">{link.description}</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-4">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600 text-xs sm:text-sm font-mono truncate flex-grow">
                        {link.handle}
                      </span>
                      {link.name !== 'Email' && (
                        <ExternalLink size={12} className="sm:w-4 sm:h-4 text-gray-400 group-hover:text-primary-600 transition-colors duration-300 flex-shrink-0 ml-2" />
                      )}
                    </div>
                  </div>
                  
                  {/* Hover Effect */}
                  <div className={`h-1 bg-gradient-to-r ${link.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`} />
                </a>
              </div>
            ))}
          </div>

          {/* Additional Contact Info */}
          <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 border border-gray-100 text-center relative overflow-hidden group hover:shadow-xl transition-all duration-300">
            <div className="absolute top-0 right-0 w-24 h-24 sm:w-32 sm:h-32 bg-primary-50/50 rounded-full -translate-y-12 translate-x-12 sm:-translate-y-16 sm:translate-x-16" />
            <div className="absolute bottom-0 left-0 w-20 h-20 sm:w-24 sm:h-24 bg-blue-50/50 rounded-full translate-y-10 -translate-x-10 sm:translate-y-12 sm:-translate-x-12" />
            
            <div className="relative z-10">
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-8">Availability</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
                <div>
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full" />
                  </div>
                  <h4 className="font-medium text-gray-900 mb-2 text-sm sm:text-base">Currently Available</h4>
                  <p className="text-xs sm:text-sm text-gray-600">Open for new opportunities</p>
                </div>
                
                <div>
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <MessageCircle size={16} className="sm:w-5 sm:h-5 text-blue-600" />
                  </div>
                  <h4 className="font-medium text-gray-900 mb-2 text-sm sm:text-base">Response Time</h4>
                  <p className="text-xs sm:text-sm text-gray-600">Usually within 24 hours</p>
                </div>
                
                <div>
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Code size={16} className="sm:w-5 sm:h-5 text-purple-600" />
                  </div>
                  <h4 className="font-medium text-gray-900 mb-2 text-sm sm:text-base">Project Types</h4>
                  <p className="text-xs sm:text-sm text-gray-600">Web apps, plugins, consulting</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;