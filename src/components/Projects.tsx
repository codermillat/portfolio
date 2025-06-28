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
}

const projects: Project[] = [
  {
    title: "Restaurant Delivery Plugin",
    description: "Custom WooCommerce system with GPS tracking and PWA capabilities for seamless food delivery management.",
    highlights: [
      "Real-time GPS tracking integration",
      "Progressive Web App functionality", 
      "Custom order management dashboard",
      "Multi-restaurant support"
    ],
    technologies: ["WordPress", "WooCommerce", "PHP", "JavaScript", "PWA", "GPS API"],
    icon: Zap,
    metrics: "12+ restaurants deployed",
    image: "https://images.pexels.com/photos/4393021/pexels-photo-4393021.jpeg?auto=compress&cs=tinysrgb&w=800",
    color: "from-yellow-400 to-orange-500"
  },
  {
    title: "Rupkotha Restora Website", 
    description: "Complete WordPress-based food ordering platform built with budget constraints and performance optimization.",
    highlights: [
      "Custom food ordering system",
      "Mobile-optimized interface",
      "Payment gateway integration", 
      "Inventory management"
    ],
    technologies: ["WordPress", "Custom PHP", "Payment Integration", "Mobile Optimization"],
    icon: Users,
    metrics: "99.8% uptime",
    image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800",
    color: "from-green-400 to-blue-500"
  },
  {
    title: "VPN App Rebranding",
    description: "Successfully rebranded and optimized VPN application for Play Store, achieving significant download growth.",
    highlights: [
      "Complete app store optimization",
      "UI/UX redesign and improvement", 
      "Strategic market positioning",
      "Performance optimization"
    ],
    technologies: ["Android", "ASO Strategy", "UI/UX Design", "Marketing"],
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
      { threshold: 0.1, rootMargin: '50px' } // Reduced threshold for mobile
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" ref={sectionRef} className="py-16 lg:py-32 px-6 lg:px-8 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-gradient-to-bl from-primary-50 to-transparent rounded-full -translate-y-48 opacity-60" />
      <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-gradient-to-tr from-blue-50 to-transparent rounded-full translate-y-36 opacity-60" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-serif font-semibold text-gray-900 mb-4">
              Featured Projects
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A collection of projects that showcase my approach to building meaningful solutions
            </p>
          </div>

          <div className="grid lg:grid-cols-1 gap-8 lg:gap-12">
            {projects.map((project, index) => (
              <div 
                key={index}
                className={`transition-all duration-500 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden group border border-gray-100">
                  <div className="lg:flex">
                    {/* Image Section */}
                    <div className="lg:w-2/5 relative overflow-hidden">
                      <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-90`} />
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-64 lg:h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
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
                    <div className="lg:w-3/5 p-6 lg:p-12">
                      <div className="flex items-start justify-between mb-6">
                        <h3 className="text-2xl lg:text-3xl font-semibold text-gray-900 group-hover:text-primary-700 transition-colors duration-300">
                          {project.title}
                        </h3>
                        <div className="flex gap-2 ml-4">
                          <button className="w-10 h-10 bg-gray-100 hover:bg-primary-100 rounded-full flex items-center justify-center transition-colors duration-300 group">
                            <Github size={18} className="text-gray-600 group-hover:text-primary-600" />
                          </button>
                          <button className="w-10 h-10 bg-gray-100 hover:bg-primary-100 rounded-full flex items-center justify-center transition-colors duration-300 group">
                            <ExternalLink size={18} className="text-gray-600 group-hover:text-primary-600" />
                          </button>
                        </div>
                      </div>
                      
                      <p className="text-lg text-gray-700 leading-relaxed mb-6">
                        {project.description}
                      </p>
                      
                      <div className="mb-6">
                        <h4 className="text-sm font-semibold text-gray-900 mb-3 uppercase tracking-wide">Key Features</h4>
                        <div className="grid sm:grid-cols-2 gap-2">
                          {project.highlights.map((highlight, highlightIndex) => (
                            <div key={highlightIndex} className="flex items-start gap-2">
                              <Star size={14} className="text-primary-500 mt-1 flex-shrink-0" />
                              <span className="text-sm text-gray-600">{highlight}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="text-sm font-semibold text-gray-900 mb-3 uppercase tracking-wide">Technologies</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech, techIndex) => (
                            <span 
                              key={techIndex}
                              className="px-3 py-1 text-xs font-medium text-primary-700 bg-primary-50 rounded-full border border-primary-200 hover:bg-primary-100 transition-colors duration-200"
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