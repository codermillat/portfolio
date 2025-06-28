import React, { useEffect, useRef, useState } from 'react';
import { ExternalLink, Github, DollarSign, Users, Zap, Star } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  highlights: string[];
  technologies: string[];
  icon: React.ElementType;
  metrics?: string;
  image?: string;
  color: string;
  githubUrl?: string;
  websiteUrl?: string;
}

const projects: Project[] = [
  {
    title: "Restaurant Delivery Plugin",
    description: "Custom WooCommerce system with GPS tracking and PWA capabilities for seamless food delivery management.",
    highlights: [
      "WooCommerce order customization",
      "Real-time GPS tracking integration",
      "Delivery status and staff management", 
      "PWA interface for mobile use"
    ],
    technologies: ["PHP", "JavaScript", "WooCommerce REST API", "WP Admin UI", "Firebase", "Service Workers"],
    icon: Zap,
    metrics: "12+ restaurants deployed",
    image: "https://images.pexels.com/photos/4393021/pexels-photo-4393021.jpeg?auto=compress&cs=tinysrgb&w=800",
    color: "from-yellow-400 to-orange-500",
    githubUrl: "https://github.com/codermillat/"
  },
  {
    title: "Rupkotha Restora Website", 
    description: "WordPress-based online food ordering platform built under real-world constraints with mobile-friendly design.",
    highlights: [
      "WordPress-based online food ordering",
      "Custom WooCommerce flow for local delivery",
      "Mobile-friendly design", 
      "Built under real-world constraints"
    ],
    technologies: ["WordPress", "Elementor", "CSS", "WooCommerce", "Google Fonts"],
    icon: Users,
    metrics: "99.8% uptime",
    image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800",
    color: "from-green-400 to-blue-500",
    websiteUrl: "https://rupkotharestora.com/"
  },
  {
    title: "VPN App Rebranding",
    description: "Full UI redesign and Play Store listing optimization that achieved significant download growth and revenue.",
    highlights: [
      "Full UI redesign and Play Store listing",
      "ASO optimization", 
      "Sold on Play Store for $500",
      "Achieved significant download growth"
    ],
    technologies: ["Android Studio", "XML", "Firebase", "Play Console", "ASO strategies"],
    icon: DollarSign,
    metrics: "$500 revenue, 10K+ downloads",
    image: "https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-of-information-147413.jpeg?auto=compress&cs=tinysrgb&w=800",
    color: "from-purple-400 to-pink-500"
  }
];

const Projects: React.FC = () => {
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
    <section id="projects" ref={sectionRef} className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-1/4 w-48 h-48 sm:w-64 sm:h-64 lg:w-96 lg:h-96 bg-gradient-to-bl from-primary-50/60 to-transparent rounded-full -translate-y-24 sm:-translate-y-32 lg:-translate-y-48 opacity-60" />
      <div className="absolute bottom-0 left-1/4 w-32 h-32 sm:w-48 sm:h-48 lg:w-72 lg:h-72 bg-gradient-to-tr from-blue-50/60 to-transparent rounded-full translate-y-16 sm:translate-y-24 lg:translate-y-36 opacity-60" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className={`transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          {/* Section Header */}
          <div className="text-center mb-12 lg:mb-20">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-serif font-semibold text-gray-900 mb-4">
              Featured Projects
            </h2>
            <div className="w-16 h-0.5 bg-gradient-to-r from-primary-500 to-blue-500 mx-auto rounded-full mb-6" />
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              A collection of projects that showcase my approach to building meaningful solutions 
              that combine technical excellence with user-centered design and real-world impact.
            </p>
          </div>

          <div className="space-y-8 lg:space-y-12">
            {projects.map((project, index) => (
              <div 
                key={index}
                className={`transition-all duration-500 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group border border-gray-100">
                  <div className="flex flex-col lg:flex-row">
                    {/* Image Section */}
                    <div className="lg:w-2/5 relative overflow-hidden">
                      <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-90`} />
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-64 sm:h-80 lg:h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                          <project.icon size={32} className="text-white" />
                        </div>
                      </div>
                      {project.metrics && (
                        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-gray-800">
                          {project.metrics}
                        </div>
                      )}
                    </div>

                    {/* Content Section */}
                    <div className="lg:w-3/5 p-6 sm:p-8 flex flex-col justify-between">
                      <div>
                        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4 gap-4">
                          <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 group-hover:text-primary-700 transition-colors duration-300 flex-1">
                            {project.title}
                          </h3>
                          <div className="flex gap-2 flex-shrink-0">
                            {project.githubUrl && (
                              <a
                                href={project.githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 bg-gray-100 hover:bg-primary-100 rounded-full flex items-center justify-center transition-colors duration-300 group"
                                aria-label={`View ${project.title} on GitHub`}
                              >
                                <Github size={16} className="text-gray-600 group-hover:text-primary-600" />
                              </a>
                            )}
                            {project.websiteUrl && (
                              <a
                                href={project.websiteUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 bg-gray-100 hover:bg-primary-100 rounded-full flex items-center justify-center transition-colors duration-300 group"
                                aria-label={`Visit ${project.title} website`}
                              >
                                <ExternalLink size={16} className="text-gray-600 group-hover:text-primary-600" />
                              </a>
                            )}
                          </div>
                        </div>
                        
                        <p className="text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed mb-6">
                          {project.description}
                        </p>
                        
                        <div className="mb-6">
                          <h4 className="text-sm font-semibold text-gray-900 mb-3 uppercase tracking-wide">Key Features</h4>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                            {project.highlights.map((highlight, highlightIndex) => (
                              <div key={highlightIndex} className="flex items-start gap-2">
                                <Star size={14} className="text-primary-500 mt-0.5 flex-shrink-0" />
                                <span className="text-xs sm:text-sm text-gray-600 break-words">{highlight}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="text-sm font-semibold text-gray-900 mb-3 uppercase tracking-wide">Technologies</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech, techIndex) => (
                            <span 
                              key={techIndex}
                              className="px-3 py-1 text-xs sm:text-sm font-medium text-primary-700 bg-primary-50 rounded-full border border-primary-200 hover:bg-primary-100 transition-colors duration-200"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;