import React from 'react';
import { Mail, Github, Linkedin, Code, Twitter, BookOpen, ExternalLink } from 'lucide-react';

const socialLinks = [
  {
    name: 'Email',
    handle: 'millat6575@gmail.com',
    url: 'mailto:millat6575@gmail.com',
    icon: Mail
  },
  {
    name: 'GitHub',
    handle: 'github.com/codermillat',
    url: 'https://github.com/codermillat',
    icon: Github
  },
  {
    name: 'LinkedIn',
    handle: 'linkedin.com/in/codermillat',
    url: 'https://linkedin.com/in/codermillat',
    icon: Linkedin
  },
  {
    name: 'LeetCode',
    handle: 'leetcode.com/millat',
    url: 'https://leetcode.com/millat',
    icon: Code
  },
  {
    name: 'Twitter',
    handle: '@codermillat',
    url: 'https://twitter.com/codermillat',
    icon: Twitter
  },
  {
    name: 'Medium',
    handle: '@codermillat',
    url: 'https://medium.com/@codermillat',
    icon: BookOpen
  }
];

const Contact: React.FC = () => {
  return (
    <section className="py-16 md:py-20 px-6 md:px-12">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-light text-charcoal-800 mb-12 tracking-tight text-center">
          Contact & Social
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target={link.name !== 'Email' ? '_blank' : undefined}
              rel={link.name !== 'Email' ? 'noopener noreferrer' : undefined}
              className="flex items-center gap-3 p-4 border border-gray-200 hover:border-olive-300 hover:bg-gray-50 transition-all duration-200 group"
            >
              <link.icon size={20} className="text-olive-600 group-hover:text-charcoal-800 transition-colors duration-200" />
              <div className="flex-grow min-w-0">
                <div className="font-medium text-charcoal-800 text-sm mb-1">
                  {link.name}
                </div>
                <div className="text-charcoal-600 text-sm font-light truncate">
                  {link.handle}
                </div>
              </div>
              {link.name !== 'Email' && (
                <ExternalLink size={14} className="text-charcoal-400 group-hover:text-charcoal-600 transition-colors duration-200 flex-shrink-0" />
              )}
            </a>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-charcoal-600 font-light">
            Open to opportunities and collaborations
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;