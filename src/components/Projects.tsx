import React from 'react';
import { ExternalLink } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  details: string;
  tech: string[];
}

const projects: Project[] = [
  {
    title: "Restaurant Delivery Engine",
    description: "Custom WooCommerce plugin that transforms ordinary restaurants into delivery powerhouses.",
    details: "Built from necessity when existing solutions fell short. Handles complex order routing, real-time tracking, and seamless payment processing. Deployed across 12+ restaurants with 99.8% uptime.",
    tech: ["WordPress", "WooCommerce", "PHP", "MySQL", "REST API"]
  },
  {
    title: "Silent VPN",
    description: "Rebranded VPN application that found its voice in the Play Store's crowded landscape.",
    details: "Took an overlooked product and gave it purpose. Focused on privacy-first design and intuitive user experience. Achieved 10K+ downloads through strategic ASO and authentic positioning.",
    tech: ["Android", "Java", "ASO Strategy", "UI/UX Design", "Marketing"]
  },
  {
    title: "Artisan Food Platform",
    description: "WordPress-based ordering system built with precision on a minimal budget.",
    details: "When budget constraints demanded creativity over capital. Every feature justified, every plugin chosen with intention. Delivered a full-featured food ordering experience that feels premium despite its humble origins.",
    tech: ["WordPress", "Custom PHP", "Payment Integration", "Mobile Optimization"]
  }
];

const Projects: React.FC = () => {
  return (
    <section className="py-20 md:py-32 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-light text-charcoal-800 mb-16 tracking-tight">
          Selected Work
        </h2>
        
        <div className="space-y-16 md:space-y-24">
          {projects.map((project, index) => (
            <div key={index} className="group animate-slide-up" style={{ animationDelay: `${index * 0.2}s` }}>
              <div className="border-l-2 border-charcoal-200 pl-8 md:pl-12 hover:border-olive-400 transition-colors duration-300">
                <h3 className="text-xl md:text-2xl font-medium text-charcoal-800 mb-4 group-hover:text-olive-600 transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-lg text-charcoal-600 mb-4 font-light">
                  {project.description}
                </p>
                
                <p className="text-base text-olive-600 mb-6 leading-relaxed">
                  {project.details}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-3 py-1 text-sm text-charcoal-600 bg-beige-100 rounded-sm font-mono"
                    >
                      {tech}
                    </span>
                  ))}
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