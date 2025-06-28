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
    <section id="contact" ref={sectionRef} className="py-12 lg:py-20 px-4 lg:px-6 bg-gray-50 relative overflow-hidden">
      {/* Optimized Background Elements */}
      <div className="absolute top-0 left-1/4 w-64 h-64 lg:w-96 lg:h-96 bg-gradient-to-br from-primary-100/60 to-transparent rounded-full -translate-y-32 lg:-translate-y-48 opacity-60" />
      <div className="absolute bottom-0 right-1/4 w-48 h-48 lg:w-72 lg:h-72 bg-gradient-to-tl from-blue-100/60 to-transparent rounded-full translate-y-24 lg:translate-y-36 opacity-60" />

      <div className="max-w-5xl mx-auto relative z-10">
        <div className={`transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          {/* Compact Section Header */}
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl lg:text-4xl font-serif font-semibold text-gray-900 mb-3">
              Let's Connect
            </h2>
            <div className="w-16 h-0.5 bg-gradient-to-r from-primary-500 to-blue-500 mx-auto rounded-full mb-4" />
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-6">
              Open to opportunities, collaborations, and meaningful conversations about technology and creativity
            </p>
            
            {/* Call to Action - Compact */}
            <div className="bg-gradient-to-r from-primary-600 to-blue-600 text-white p-6 rounded-xl max-w-2xl mx-auto">
              <div className="flex items-center justify-center gap-3 mb-3">
                <MessageCircle size={20} />
                <h3 className="text-lg font-semibold">Want to build with purpose?</h3>
              </div>
              <p className="text-blue-100 mb-4 text-sm">Let's discuss your project and create something meaningful together</p>
              <a 
                href="mailto:millat6575@gmail.com"
                className="inline-flex items-center gap-2 bg-white text-primary-700 px-6 py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors duration-300"
              >
                <Send size={16} />
                Write to me
              </a>
            </div>
          </div>

          {/* Social Links Grid - Optimized */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
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
                  className="block bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden group border border-gray-100"
                >
                  {/* Header with Gradient - Compact */}
                  <div className={`bg-gradient-to-r ${link.color} p-3 text-white relative overflow-hidden`}>
                    <div className="absolute top-0 right-0 w-12 h-12 bg-white/10 rounded-full -translate-y-6 translate-x-6" />
                    <div className="relative z-10 flex items-center gap-3">
                      <link.icon size={18} />
                      <div>
                        <h3 className="font-semibold text-sm">{link.name}</h3>
                        <p className="text-xs opacity-90">{link.description}</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Content - Compact */}
                  <div className="p-3">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600 text-xs font-mono truncate flex-grow">
                        {link.handle}
                      </span>
                      {link.name !== 'Email' && (
                        <ExternalLink size={12} className="text-gray-400 group-hover:text-primary-600 transition-colors duration-300 flex-shrink-0 ml-2" />
                      )}
                    </div>
                  </div>
                  
                  {/* Hover Effect */}
                  <div className={`h-0.5 bg-gradient-to-r ${link.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`} />
                </a>
              </div>
            ))}
          </div>

          {/* Additional Contact Info - Compact */}
          <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100 text-center">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Availability</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full" />
                </div>
                <h4 className="font-medium text-gray-900 mb-1 text-sm">Currently Available</h4>
                <p className="text-xs text-gray-600">Open for new opportunities</p>
              </div>
              
              <div>
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                  <MessageCircle size={16} className="text-blue-600" />
                </div>
                <h4 className="font-medium text-gray-900 mb-1 text-sm">Response Time</h4>
                <p className="text-xs text-gray-600">Usually within 24 hours</p>
              </div>
              
              <div>
                <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Code size={16} className="text-purple-600" />
                </div>
                <h4 className="font-medium text-gray-900 mb-1 text-sm">Project Types</h4>
                <p className="text-xs text-gray-600">Web apps, plugins, consulting</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;