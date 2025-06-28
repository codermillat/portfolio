import React, { useEffect, useRef, useState } from 'react';
import { Calendar, MapPin, Building, GraduationCap, Award, ExternalLink, Users, Code, Briefcase } from 'lucide-react';

interface ExperienceItem {
  title: string;
  organization: string;
  location: string;
  period: string;
  description: string[];
  achievements?: string[];
  skills?: string[];
  current?: boolean;
  type: 'work' | 'education';
  logo?: string;
  website?: string;
}

const experiences: ExperienceItem[] = [
  {
    title: "Intern",
    organization: "International Relations Division, Sharda University",
    location: "Greater Noida, India",
    period: "2024 – Present",
    description: [
      "Supporting international student services and cross-cultural communication initiatives",
      "Assisting with digital documentation and process optimization",
      "Contributing to international partnership development projects"
    ],
    achievements: [
      "Streamlined documentation process reducing processing time by 30%",
      "Assisted in organizing international student orientation programs",
      "Contributed to improving cross-cultural communication protocols"
    ],
    skills: ["Documentation", "Process Optimization", "Cross-cultural Communication", "Project Management"],
    current: true,
    type: 'work',
    website: "https://www.sharda.ac.in"
  },
  {
    title: "Web Developer",
    organization: "SIAC Abroad",
    location: "Remote",
    period: "Feb 2023 – Mar 2024",
    description: [
      "Developed and maintained WordPress-based websites for international education services",
      "Implemented custom functionality for student application management systems",
      "Optimized site performance and user experience across multiple platforms"
    ],
    achievements: [
      "Improved website loading speed by 40% through optimization",
      "Built custom student portal with 95% user satisfaction rate",
      "Reduced bounce rate by 25% through UX improvements"
    ],
    skills: ["WordPress", "PHP", "JavaScript", "MySQL", "Performance Optimization", "UX Design"],
    type: 'work'
  },
  {
    title: "B.Tech Computer Science",
    organization: "Sharda University",
    location: "Greater Noida, India",
    period: "Class of 2026",
    description: [
      "Focused on software engineering, data structures, and algorithms",
      "Active in coding competitions and technical societies",
      "Maintaining strong academic performance while building real-world projects"
    ],
    achievements: [
      "Consistent academic performance with focus on practical applications",
      "Active participation in coding competitions and hackathons",
      "Member of technical societies and development clubs"
    ],
    skills: ["Data Structures", "Algorithms", "Software Engineering", "Database Management", "System Design"],
    type: 'education',
    website: "https://www.sharda.ac.in"
  }
];

const Experience: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [expandedItems, setExpandedItems] = useState<number[]>([]);
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

  const toggleExpanded = (index: number) => {
    setExpandedItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <section id="experience" ref={sectionRef} className="py-12 lg:py-20 px-4 lg:px-6 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 lg:w-96 lg:h-96 bg-gradient-to-br from-primary-100/40 to-transparent rounded-full -translate-y-32 -translate-x-32 lg:-translate-y-48 lg:-translate-x-48" />
      <div className="absolute bottom-0 right-0 w-48 h-48 lg:w-72 lg:h-72 bg-gradient-to-tl from-blue-100/40 to-transparent rounded-full translate-y-24 translate-x-24 lg:translate-y-36 lg:translate-x-36" />

      <div className="max-w-5xl mx-auto relative z-10">
        <div className={`transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          {/* Section Header */}
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl lg:text-4xl font-serif font-semibold text-gray-900 mb-3">
              Experience & Education
            </h2>
            <div className="w-16 h-0.5 bg-gradient-to-r from-primary-500 to-blue-500 mx-auto rounded-full mb-4" />
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed text-justify">
              My journey through professional experiences and academic pursuits, 
              building expertise in technology and leadership through hands-on learning and real-world application.
            </p>
          </div>

          {/* Stats Overview */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            <div className="bg-white rounded-lg p-4 shadow-md border border-gray-100 text-center group hover:shadow-lg transition-all duration-300">
              <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-600 rounded-lg flex items-center justify-center mx-auto mb-2 group-hover:scale-105 transition-transform duration-300">
                <Briefcase size={18} className="text-white" />
              </div>
              <div className="text-xl font-bold text-gray-900 mb-1">2+</div>
              <div className="text-xs text-gray-600">Years Experience</div>
            </div>
            
            <div className="bg-white rounded-lg p-4 shadow-md border border-gray-100 text-center group hover:shadow-lg transition-all duration-300">
              <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center mx-auto mb-2 group-hover:scale-105 transition-transform duration-300">
                <Code size={18} className="text-white" />
              </div>
              <div className="text-xl font-bold text-gray-900 mb-1">15+</div>
              <div className="text-xs text-gray-600">Projects Delivered</div>
            </div>
            
            <div className="bg-white rounded-lg p-4 shadow-md border border-gray-100 text-center group hover:shadow-lg transition-all duration-300">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-2 group-hover:scale-105 transition-transform duration-300">
                <Users size={18} className="text-white" />
              </div>
              <div className="text-xl font-bold text-gray-900 mb-1">50+</div>
              <div className="text-xs text-gray-600">Clients Served</div>
            </div>
            
            <div className="bg-white rounded-lg p-4 shadow-md border border-gray-100 text-center group hover:shadow-lg transition-all duration-300">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-2 group-hover:scale-105 transition-transform duration-300">
                <Award size={18} className="text-white" />
              </div>
              <div className="text-xl font-bold text-gray-900 mb-1">95%</div>
              <div className="text-xs text-gray-600">Success Rate</div>
            </div>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 via-primary-400 to-primary-300 rounded-full hidden lg:block" />

            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div 
                  key={index}
                  className={`relative transition-all duration-500 ${
                    isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
                  }`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-4 top-6 w-5 h-5 rounded-full border-3 border-white shadow-lg hidden lg:flex items-center justify-center z-10"
                       style={{ 
                         backgroundColor: exp.current ? '#2563eb' : exp.type === 'work' ? '#3b82f6' : '#64748b'
                       }}>
                    {exp.type === 'work' ? (
                      <Building size={10} className="text-white" />
                    ) : (
                      <GraduationCap size={10} className="text-white" />
                    )}
                  </div>

                  {/* Content Card */}
                  <div className="lg:ml-16 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden group border border-gray-100">
                    <div className="p-4 lg:p-6">
                      {/* Header Section */}
                      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                        <div className="flex-grow">
                          <div className="flex items-center gap-3 mb-2">
                            <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                              exp.type === 'work' 
                                ? 'bg-gradient-to-br from-primary-500 to-primary-600' 
                                : 'bg-gradient-to-br from-gray-600 to-gray-700'
                            }`}>
                              {exp.type === 'work' ? (
                                <Building size={18} className="text-white" />
                              ) : (
                                <GraduationCap size={18} className="text-white" />
                              )}
                            </div>
                            <div className="flex-grow">
                              <h3 className="text-lg lg:text-xl font-semibold text-gray-900 group-hover:text-primary-700 transition-colors duration-300">
                                {exp.title}
                              </h3>
                              <div className="flex items-center gap-2">
                                <p className="text-base font-medium text-primary-600">
                                  {exp.organization}
                                </p>
                                {exp.website && (
                                  <a 
                                    href={exp.website} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="text-gray-400 hover:text-primary-600 transition-colors duration-200"
                                  >
                                    <ExternalLink size={14} />
                                  </a>
                                )}
                              </div>
                            </div>
                            {exp.current && (
                              <span className="px-2 py-1 bg-gradient-to-r from-green-500 to-green-600 text-white text-xs font-medium rounded-full">
                                Current
                              </span>
                            )}
                          </div>
                        </div>
                        
                        <div className="text-sm text-gray-500 lg:text-right space-y-1 mt-2 lg:mt-0 lg:ml-4">
                          <div className="flex items-center gap-2 lg:justify-end">
                            <Calendar size={14} className="text-primary-500" />
                            <span className="font-medium">{exp.period}</span>
                          </div>
                          <div className="flex items-center gap-2 lg:justify-end">
                            <MapPin size={14} className="text-primary-500" />
                            <span>{exp.location}</span>
                          </div>
                        </div>
                      </div>
                      
                      {/* Description */}
                      <div className="mb-4">
                        <h4 className="text-xs font-semibold text-gray-900 mb-2 uppercase tracking-wide">Key Responsibilities</h4>
                        <ul className="space-y-1">
                          {exp.description.map((item, itemIndex) => (
                            <li key={itemIndex} className="flex items-start gap-2 text-gray-700 leading-relaxed text-sm text-justify">
                              <div className="w-1.5 h-1.5 bg-primary-400 rounded-full mt-1.5 flex-shrink-0" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Achievements - Expandable */}
                      {exp.achievements && (
                        <div className="mb-4">
                          <button
                            onClick={() => toggleExpanded(index)}
                            className="flex items-center gap-2 text-xs font-semibold text-gray-900 mb-2 uppercase tracking-wide hover:text-primary-700 transition-colors duration-200"
                          >
                            <Award size={14} className="text-primary-500" />
                            Key Achievements
                            <div className={`transform transition-transform duration-200 ${expandedItems.includes(index) ? 'rotate-180' : ''}`}>
                              ▼
                            </div>
                          </button>
                          <div className={`transition-all duration-300 overflow-hidden ${
                            expandedItems.includes(index) ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                          }`}>
                            <ul className="space-y-1">
                              {exp.achievements.map((achievement, achievementIndex) => (
                                <li key={achievementIndex} className="flex items-start gap-2 text-gray-700 leading-relaxed text-sm text-justify">
                                  <div className="w-1.5 h-1.5 bg-green-400 rounded-full mt-1.5 flex-shrink-0" />
                                  {achievement}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      )}
                      
                      {/* Skills */}
                      {exp.skills && (
                        <div>
                          <h4 className="text-xs font-semibold text-gray-900 mb-2 uppercase tracking-wide">Technologies & Skills</h4>
                          <div className="flex flex-wrap gap-1">
                            {exp.skills.map((skill, skillIndex) => (
                              <span 
                                key={skillIndex}
                                className="px-2 py-1 text-xs font-medium text-primary-700 bg-primary-50 rounded-full border border-primary-200 hover:bg-primary-100 transition-colors duration-200"
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                    
                    {/* Hover Effect */}
                    <div className={`h-0.5 bg-gradient-to-r ${
                      exp.type === 'work' 
                        ? 'from-primary-500 to-primary-600' 
                        : 'from-gray-600 to-gray-700'
                    } transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-12 text-center">
            <div className="bg-gradient-to-r from-primary-600 to-blue-600 rounded-lg p-6 text-white shadow-lg">
              <h3 className="text-xl font-semibold mb-3">Ready to Collaborate?</h3>
              <p className="text-blue-100 mb-4 max-w-xl mx-auto text-sm text-justify">
                I'm always open to discussing new opportunities, innovative projects, 
                and ways to create meaningful impact through technology and creative solutions.
              </p>
              <button 
                onClick={() => {
                  const element = document.querySelector('#contact');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-white text-primary-700 px-6 py-2 rounded-lg font-medium hover:bg-blue-50 transition-colors duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
              >
                Let's Connect
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;