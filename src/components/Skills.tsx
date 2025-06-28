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
    skills: ["Android Development", "Progressive Web Apps", "Mobile Optimization"],
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
    skills: ["Search Engine Optimization", "App Store Optimization", "Analytics"],
    color: "from-orange-500 to-orange-600"
  },
  {
    title: "Backend & Database",
    icon: Database,
    skills: ["Node.js", "Express", "MongoDB", "PostgreSQL", "API Design"],
    color: "from-indigo-500 to-indigo-600"
  },
  {
    title: "Frontend Frameworks",
    icon: Globe,
    skills: ["React", "Vue.js", "TypeScript", "Tailwind CSS", "Next.js"],
    color: "from-cyan-500 to-cyan-600"
  },
  {
    title: "Design & UX",
    icon: Palette,
    skills: ["UI/UX Design", "Figma", "Adobe Creative Suite", "Prototyping"],
    color: "from-pink-500 to-pink-600"
  },
  {
    title: "DevOps & Tools",
    icon: Zap,
    skills: ["Git", "Docker", "AWS", "CI/CD", "Linux"],
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
    <section id="skills" ref={sectionRef} className="py-12 lg:py-20 px-4 lg:px-6 bg-gray-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-1/3 w-64 h-64 lg:w-96 lg:h-96 bg-gradient-to-br from-primary-100/60 to-transparent rounded-full -translate-y-32 lg:-translate-y-48 opacity-60" />
      <div className="absolute bottom-0 right-1/3 w-48 h-48 lg:w-72 lg:h-72 bg-gradient-to-tl from-blue-100/60 to-transparent rounded-full translate-y-24 lg:translate-y-36 opacity-60" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className={`transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          {/* Section Header */}
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl lg:text-4xl font-serif font-semibold text-gray-900 mb-3">
              Skills & Technologies
            </h2>
            <div className="w-16 h-0.5 bg-gradient-to-r from-primary-500 to-blue-500 mx-auto rounded-full mb-4" />
            <p className="text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto">
              A comprehensive toolkit built through years of passionate learning and real-world application
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 lg:mb-16">
            {skillCategories.map((category, index) => (
              <div 
                key={index}
                className={`transition-all duration-500 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group border border-gray-100 h-full">
                  {/* Header with Gradient */}
                  <div className={`bg-gradient-to-r ${category.color} p-6 text-white relative overflow-hidden`}>
                    <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full -translate-y-10 translate-x-10" />
                    
                    <div className="relative z-10">
                      <category.icon size={24} className="mb-3" />
                      <h3 className="text-lg font-semibold">
                        {category.title}
                      </h3>
                    </div>
                  </div>
                  
                  {/* Skills List */}
                  <div className="p-6">
                    <div className="space-y-3">
                      {category.skills.map((skill, skillIndex) => (
                        <div 
                          key={skillIndex}
                          className="flex items-center gap-3 text-gray-700 hover:text-primary-700 transition-colors duration-200 group/skill"
                        >
                          <div className="w-2 h-2 bg-primary-400 rounded-full group-hover/skill:bg-primary-600 transition-colors duration-200" />
                          <span className="text-sm font-medium">{skill}</span>
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

          {/* Proficiency Levels - Balanced Row */}
          <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100 relative overflow-hidden group hover:shadow-xl transition-all duration-300">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary-50/50 rounded-full -translate-y-16 translate-x-16" />
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-blue-50/50 rounded-full translate-y-12 -translate-x-12" />
            
            <div className="relative z-10">
              <h3 className="text-2xl font-semibold text-gray-900 mb-8 text-center">Proficiency Overview</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-lg">Expert</span>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-3 text-lg">Advanced</h4>
                  <p className="text-sm text-gray-600">WordPress, PHP, JavaScript, SEO</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-lg">Pro</span>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-3 text-lg">Proficient</h4>
                  <p className="text-sm text-gray-600">React, Node.js, Mobile Development</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-lg">Learn</span>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-3 text-lg">Learning</h4>
                  <p className="text-sm text-gray-600">AI/ML, DevOps, Cloud Architecture</p>
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