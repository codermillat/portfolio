import React from 'react';
import { Code, Smartphone, Bot, TrendingUp } from 'lucide-react';

const skillCategories = [
  {
    title: "Web & Plugins",
    icon: Code,
    skills: ["WordPress", "WooCommerce", "Custom Plugins", "PHP", "JavaScript", "MySQL", "REST APIs"]
  },
  {
    title: "Mobile & PWA",
    icon: Smartphone,
    skills: ["Android Development", "Progressive Web Apps", "Mobile Optimization", "Cross-platform Solutions"]
  },
  {
    title: "AI Tooling",
    icon: Bot,
    skills: ["Cursor IDE", "GitHub Copilot", "Gemini AI", "Workflow Automation", "API Integration"]
  },
  {
    title: "SEO & ASO",
    icon: TrendingUp,
    skills: ["Search Engine Optimization", "App Store Optimization", "Analytics", "Content Strategy", "Performance Optimization"]
  }
];

const Skills: React.FC = () => {
  return (
    <section className="py-16 md:py-20 px-6 md:px-12 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-light text-charcoal-800 mb-12 tracking-tight">
          Skills & Technologies
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-white p-6 border border-gray-200 hover:border-olive-300 transition-colors duration-200">
              <div className="flex items-center gap-3 mb-4">
                <category.icon size={20} className="text-olive-600" />
                <h3 className="text-lg font-medium text-charcoal-800">
                  {category.title}
                </h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span 
                    key={skillIndex}
                    className="px-3 py-1 text-sm text-charcoal-700 bg-gray-100 hover:bg-olive-100 transition-colors duration-200 font-light"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;