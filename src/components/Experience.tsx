import React from 'react';
import { Calendar, MapPin } from 'lucide-react';

interface ExperienceItem {
  title: string;
  organization: string;
  location: string;
  period: string;
  description: string[];
  current?: boolean;
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
    current: true
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
    ]
  }
];

const education = {
  degree: "B.Tech Computer Science",
  institution: "Sharda University",
  location: "Greater Noida, India",
  period: "Class of 2026"
};

const Experience: React.FC = () => {
  return (
    <section className="py-16 md:py-20 px-6 md:px-12">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-light text-charcoal-800 mb-12 tracking-tight">
          Experience & Education
        </h2>
        
        {/* Experience */}
        <div className="mb-16">
          <h3 className="text-lg font-medium text-charcoal-800 mb-8 font-mono">
            Professional Experience
          </h3>
          
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="border-l-2 border-gray-200 pl-6 relative">
                <div className="absolute -left-2 top-0 w-3 h-3 bg-olive-500 rounded-full"></div>
                
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-3">
                  <div>
                    <h4 className="text-xl font-medium text-charcoal-800 mb-1">
                      {exp.title}
                    </h4>
                    <p className="text-lg text-olive-600 font-medium mb-2">
                      {exp.organization}
                    </p>
                  </div>
                  
                  <div className="text-sm text-charcoal-500 md:text-right">
                    <div className="flex items-center gap-1 mb-1">
                      <Calendar size={14} />
                      <span>{exp.period}</span>
                      {exp.current && (
                        <span className="ml-2 px-2 py-1 bg-olive-100 text-olive-700 text-xs rounded-full">
                          Current
                        </span>
                      )}
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin size={14} />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>
                
                <ul className="space-y-2">
                  {exp.description.map((item, itemIndex) => (
                    <li key={itemIndex} className="text-charcoal-700 font-light leading-relaxed flex items-start">
                      <span className="w-1.5 h-1.5 bg-charcoal-400 rounded-full mt-2.5 mr-3 flex-shrink-0"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        
        {/* Education */}
        <div>
          <h3 className="text-lg font-medium text-charcoal-800 mb-8 font-mono">
            Education
          </h3>
          
          <div className="border-l-2 border-gray-200 pl-6 relative">
            <div className="absolute -left-2 top-0 w-3 h-3 bg-charcoal-400 rounded-full"></div>
            
            <div className="flex flex-col md:flex-row md:items-start md:justify-between">
              <div>
                <h4 className="text-xl font-medium text-charcoal-800 mb-1">
                  {education.degree}
                </h4>
                <p className="text-lg text-olive-600 font-medium">
                  {education.institution}
                </p>
              </div>
              
              <div className="text-sm text-charcoal-500 md:text-right mt-2 md:mt-0">
                <div className="flex items-center gap-1 mb-1">
                  <Calendar size={14} />
                  <span>{education.period}</span>
                </div>
                <div className="flex items-center gap-1">
                  <MapPin size={14} />
                  <span>{education.location}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;