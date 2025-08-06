import React, { useEffect, useRef, useState } from 'react';
import { Code, Smartphone, Bot, TrendingUp, Database, Globe, Palette, Zap } from 'lucide-react';

const skillCategories = [
  {
    title: "Web & Plugins",
    icon: Code,
    skills: ["WordPress", "WooCommerce", "Custom Plugins", "PHP", "JavaScript", "MySQL"],
    color: "from-blue-500 to-blue-600"
  },
  {
    title: "Mobile & PWA", 
    icon: Smartphone,
    skills: ["Android Development", "Progressive Web Apps", "Firebase", "Service Workers"],
    color: "from-green-500 to-green-600"
  },
  {
    title: "AI Tooling",
    icon: Bot,
    skills: ["Cursor IDE", "GitHub Copilot", "Gemini AI", "Workflow Automation"],
    color: "from-purple-500 to-purple-600"
  },
  {
    title: "SEO & ASO",
    icon: TrendingUp,
    skills: ["Search Engine Optimization", "App Store Optimization", "YouTube SEO", "Analytics"],
    color: "from-orange-500 to-orange-600"
  },
  {
    title: "Backend & Database",
    icon: Database,
    skills: ["MySQL", "Firebase Realtime DB", "REST APIs", "Node.js"],
    color: "from-indigo-500 to-indigo-600"
  },
  {
    title: "Frontend Frameworks",
    icon: Globe,
    skills: ["React", "Tailwind CSS", "HTML5", "Elementor"],
    color: "from-cyan-500 to-cyan-600"
  },
  {
    title: "Design & UX",
    icon: Palette,
    skills: ["Figma", "Canva", "UX Writing", "Color Theory"],
    color: "from-pink-500 to-pink-600"
  },
  {
    title: "DevOps & Tools",
    icon: Zap,
    skills: ["Git", "GitHub", "DigitalOcean", "Docker (basic)"],
    color: "from-yellow-500 to-yellow-600"
  }
];

const Skills: React.FC = () => {
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
    <section id="skills" ref={sectionRef} className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gray-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-1/3 w-48 h-48 sm:w-64 sm:h-64 lg:w-96 lg:h-96 bg-gradient-to-br from-primary-100/60 to-transparent rounded-full -translate-y-24 sm:-translate-y-32 lg:-translate-y-48 opacity-60" />
      <div className="absolute bottom-0 right-1/3 w-32 h-32 sm:w-48 sm:h-48 lg:w-72 lg:h-72 bg-gradient-to-tl from-blue-100/60 to-transparent rounded-full translate-y-16 sm:translate-y-24 lg:translate-y-36 opacity-60" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className={`transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          {/* Section Header */}
          <div className="text-center mb-12 lg:mb-20">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-serif font-semibold text-gray-900 mb-4">
              Skills & Technologies
            </h2>
            <div className="w-16 h-0.5 bg-gradient-to-r from-primary-500 to-blue-500 mx-auto rounded-full mb-6" />
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              A comprehensive toolkit built through years of passionate learning and real-world application.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12 lg:mb-20">
            {skillCategories.map((category, index) => (
              <div 
                key={index}
                className={`transition-all duration-500 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group border border-gray-100 h-full">
                  {/* Header with Gradient */}
                  <div className={`bg-gradient-to-r ${category.color} p-4 sm:p-6 text-white relative overflow-hidden`}>
                    <div className="absolute top-0 right-0 w-16 h-16 sm:w-20 sm:h-20 bg-white/10 rounded-full -translate-y-8 translate-x-8 sm:-translate-y-10 sm:translate-x-10" />
                    
                    <div className="relative z-10">
                      <category.icon size={20} className="sm:w-6 sm:h-6 mb-3" />
                      <h3 className="text-base sm:text-lg font-semibold">
                        {category.title}
                      </h3>
                    </div>
                  </div>
                  
                  {/* Skills List */}
                  <div className="p-4 sm:p-6">
                    <div className="space-y-3">
                      {category.skills.map((skill, skillIndex) => (
                        <div 
                          key={skillIndex}
                          className="flex items-center gap-3 text-gray-700 hover:text-primary-700 transition-colors duration-200 group/skill"
                        >
                          <div className="w-2 h-2 bg-primary-400 rounded-full group-hover/skill:bg-primary-600 transition-colors duration-200 flex-shrink-0" />
                          <span className="text-xs sm:text-sm font-medium break-words">{skill}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Hover Effect */}
                  <div className={`h-1 bg-gradient-to-r ${category.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`} />
                </div>
              </div>
            ))}
          </div>

          {/* Proficiency Levels */}
          <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 border border-gray-100 relative overflow-hidden group hover:shadow-xl transition-all duration-300">
            <div className="absolute top-0 right-0 w-24 h-24 sm:w-32 sm:h-32 bg-primary-50/50 rounded-full -translate-y-12 translate-x-12 sm:-translate-y-16 sm:translate-x-16" />
            <div className="absolute bottom-0 left-0 w-20 h-20 sm:w-24 sm:h-24 bg-blue-50/50 rounded-full translate-y-10 -translate-x-10 sm:translate-y-12 sm:-translate-x-12" />
            
            <div className="relative z-10">
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-8 text-center">Proficiency Overview</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
                <div className="text-center">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-sm sm:text-lg">Expert</span>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-3 text-base sm:text-lg">Advanced</h4>
                  <p className="text-xs sm:text-sm text-gray-600">WordPress, PHP, JavaScript, SEO</p>
                </div>
                
                <div className="text-center">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-sm sm:text-lg">Pro</span>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-3 text-base sm:text-lg">Proficient</h4>
                  <p className="text-xs sm:text-sm text-gray-600">React, Node.js, Mobile Development</p>
                </div>
                
                <div className="text-center">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-purple-400 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-sm sm:text-lg">Learn</span>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-3 text-base sm:text-lg">Learning</h4>
                  <p className="text-xs sm:text-sm text-gray-600">AI/ML, DevOps, Cloud Architecture</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;