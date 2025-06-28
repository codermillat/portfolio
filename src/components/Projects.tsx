import React from 'react';
import { ExternalLink, DollarSign, Users, Zap } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  highlights: string[];
  technologies: string[];
  icon: React.ElementType;
  metrics?: string;
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
    metrics: "12+ restaurants deployed"
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
    metrics: "99.8% uptime"
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
    metrics: "$500 revenue, 10K+ downloads"
  }
];

const Projects: React.FC = () => {
  return (
    <section className="py-16 md:py-20 px-6 md:px-12">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-light text-charcoal-800 mb-12 tracking-tight">
          Featured Projects
        </h2>
        
        <div className="space-y-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white border border-gray-200 p-6 md:p-8 hover:border-olive-300 hover:shadow-sm transition-all duration-200">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <project.icon size={24} className="text-olive-600 mt-1" />
                </div>
                
                <div className="flex-grow">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-3">
                    <h3 className="text-xl font-medium text-charcoal-800 mb-2 md:mb-0">
                      {project.title}
                    </h3>
                    {project.metrics && (
                      <span className="text-sm text-olive-600 font-medium bg-olive-50 px-3 py-1 rounded-full">
                        {project.metrics}
                      </span>
                    )}
                  </div>
                  
                  <p className="text-charcoal-700 font-light leading-relaxed mb-4">
                    {project.description}
                  </p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-medium text-charcoal-800 mb-2">Key Features:</h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-1">
                      {project.highlights.map((highlight, highlightIndex) => (
                        <li key={highlightIndex} className="text-sm text-charcoal-600 font-light flex items-start">
                          <span className="w-1 h-1 bg-olive-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-2 py-1 text-xs text-charcoal-600 bg-gray-100 font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;