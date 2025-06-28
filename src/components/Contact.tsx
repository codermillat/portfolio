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
  const [visibleLinks, setVisibleLinks] = useState<number[]>([]);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Animate social links one by one
          socialLinks.forEach((_, index) => {
            setTimeout(() => {
              setVisibleLinks(prev => [...prev, index]);
            }, index * 100);
          });
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="contact" ref={sectionRef} className="py-20 lg:py-32 px-6 lg:px-8 bg-gray-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-primary-100 to-transparent rounded-full -translate-y-48 opacity-60" />
      <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-gradient-to-tl from-blue-100 to-transparent rounded-full translate-y-36 opacity-60" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className={`transition-all duration-1000 ${isVisible ? 'animate-slide-up opacity-100' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-serif font-semibold text-gray-900 mb-4">
              Let's Connect
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
              Open to opportunities, collaborations, and meaningful conversations about technology and creativity
            </p>
            
            {/* Call to Action */}
            <div className="bg-gradient-to-r from-primary-600 to-blue-600 text-white p-6 rounded-xl max-w-2xl mx-auto">
              <div className="flex items-center justify-center gap-3 mb-3">
                <MessageCircle size={24} />
                <h3 className="text-xl font-semibold">Want to build with purpose?</h3>
              </div>
              <p className="text-blue-100 mb-4">Let's discuss your project and create something meaningful together</p>
              <a 
                href="mailto:millat6575@gmail.com"
                className="inline-flex items-center gap-2 bg-white text-primary-700 px-6 py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors duration-300"
              >
                <Send size={18} />
                Write to me
              </a>
            </div>
          </div>

          {/* Social Links Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {socialLinks.map((link, index) => (
              <div
                key={index}
                className={`transition-all duration-700 ${
                  visibleLinks.includes(index) 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                <a
                  href={link.url}
                  target={link.name !== 'Email' ? '_blank' : undefined}
                  rel={link.name !== 'Email' ? 'noopener noreferrer' : undefined}
                  className="block bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group border border-gray-100"
                >
                  {/* Header with Gradient */}
                  <div className={`bg-gradient-to-r ${link.color} p-4 text-white relative overflow-hidden`}>
                    <div className="absolute top-0 right-0 w-16 h-16 bg-white/10 rounded-full -translate-y-8 translate-x-8" />
                    <div className="relative z-10 flex items-center gap-3">
                      <link.icon size={24} />
                      <div>
                        <h3 className="font-semibold">{link.name}</h3>
                        <p className="text-xs opacity-90">{link.description}</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-4">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600 text-sm font-mono truncate flex-grow">
                        {link.handle}
                      </span>
                      {link.name !== 'Email' && (
                        <ExternalLink size={16} className="text-gray-400 group-hover:text-primary-600 transition-colors duration-300 flex-shrink-0 ml-2" />
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
          <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100 text-center">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Availability</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                </div>
                <h4 className="font-medium text-gray-900 mb-1">Currently Available</h4>
                <p className="text-sm text-gray-600">Open for new opportunities</p>
              </div>
              
              <div>
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <MessageCircle size={20} className="text-blue-600" />
                </div>
                <h4 className="font-medium text-gray-900 mb-1">Response Time</h4>
                <p className="text-sm text-gray-600">Usually within 24 hours</p>
              </div>
              
              <div>
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Code size={20} className="text-purple-600" />
                </div>
                <h4 className="font-medium text-gray-900 mb-1">Project Types</h4>
                <p className="text-sm text-gray-600">Web apps, plugins, consulting</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;