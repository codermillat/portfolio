import React from 'react';

const skillCategories = [
  {
    title: "Development",
    skills: ["WordPress", "WooCommerce", "Custom Plugins", "PHP", "JavaScript", "MySQL"]
  },
  {
    title: "Mobile & Apps",
    skills: ["Android Development", "App Store Optimization", "UI/UX Design", "Cross-platform Solutions"]
  },
  {
    title: "Automation & AI",
    skills: ["Cursor IDE", "GitHub Copilot", "Gemini AI", "Workflow Automation", "API Integration"]
  },
  {
    title: "Strategy & Growth",
    skills: ["SEO Strategy", "ASO Optimization", "Content Strategy", "Digital Marketing", "Analytics"]
  }
];

const Skills: React.FC = () => {
  return (
    <section className="py-20 md:py-32 px-6 md:px-12 bg-beige-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-light text-charcoal-800 mb-16 tracking-tight">
          Skills & Stack
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          {skillCategories.map((category, index) => (
            <div key={index} className="animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <h3 className="text-lg font-medium text-charcoal-800 mb-6 font-mono">
                {category.title}
              </h3>
              
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="flex items-center group">
                    <div className="w-2 h-2 bg-olive-400 rounded-full mr-4 group-hover:bg-charcoal-600 transition-colors duration-200"></div>
                    <span className="text-charcoal-700 font-light group-hover:text-charcoal-800 transition-colors duration-200">
                      {skill}
                    </span>
                  </div>
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