import React, { useEffect, useRef, useState } from 'react';
import { Calendar, MapPin, Building, GraduationCap } from 'lucide-react';

interface ExperienceItem {
  title: string;
  organization: string;
  location: string;
  period: string;
  description: string[];
  current?: boolean;
  type: 'work' | 'education';
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
    current: true,
    type: 'work'
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
    type: 'education'
  }
];

const Experience: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Animate items one by one
          experiences.forEach((_, index) => {
            setTimeout(() => {
              setVisibleItems(prev => [...prev, index]);
            }, index * 200);
          });
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="experience" ref={sectionRef} className="py-20 lg:py-32 px-6 lg:px-8 bg-gray-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/4 left-0 w-72 h-72 bg-gradient-to-r from-primary-100 to-transparent rounded-full -translate-x-36 opacity-60" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-gradient-to-l from-blue-100 to-transparent rounded-full translate-x-48 opacity-60" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className={`transition-all duration-1000 ${isVisible ? 'animate-slide-up opacity-100' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl lg:text-4xl font-serif font-semibold text-gray-900 mb-16 text-center">
            Experience & Education
          </h2>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 via-primary-400 to-primary-300 hidden lg:block" />

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div 
                  key={index}
                  className={`relative transition-all duration-700 ${
                    visibleItems.includes(index) 
                      ? 'opacity-100 translate-x-0' 
                      : 'opacity-0 translate-x-10'
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-6 top-6 w-5 h-5 rounded-full border-4 border-white shadow-lg hidden lg:block z-10"
                       style={{ 
                         backgroundColor: exp.current ? '#1d4ed8' : exp.type === 'work' ? '#3b82f6' : '#64748b'
                       }} />

                  {/* Content Card */}
                  <div className="lg:ml-20 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
                    <div className="p-8">
                      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                        <div className="flex-grow">
                          <div className="flex items-center gap-3 mb-2">
                            {exp.type === 'work' ? (
                              <Building size={20} className="text-primary-600" />
                            ) : (
                              <GraduationCap size={20} className="text-primary-600" />
                            )}
                            <h3 className="text-xl font-semibold text-gray-900 group-hover:text-primary-700 transition-colors duration-300">
                              {exp.title}
                            </h3>
                            {exp.current && (
                              <span className="px-3 py-1 bg-primary-100 text-primary-700 text-xs font-medium rounded-full">
                                Current
                              </span>
                            )}
                          </div>
                          <p className="text-lg font-medium text-primary-600 mb-3">
                            {exp.organization}
                          </p>
                        </div>
                        
                        <div className="text-sm text-gray-500 lg:text-right space-y-1">
                          <div className="flex items-center gap-2 lg:justify-end">
                            <Calendar size={14} />
                            <span>{exp.period}</span>
                          </div>
                          <div className="flex items-center gap-2 lg:justify-end">
                            <MapPin size={14} />
                            <span>{exp.location}</span>
                          </div>
                        </div>
                      </div>
                      
                      <ul className="space-y-3">
                        {exp.description.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-start gap-3 text-gray-700 leading-relaxed">
                            <div className="w-2 h-2 bg-primary-400 rounded-full mt-2 flex-shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    {/* Hover Effect */}
                    <div className="h-1 bg-gradient-to-r from-primary-500 to-primary-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;