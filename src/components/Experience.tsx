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
    period: "May 2025 – Present",
    description: [
      "Strategic digital outreach for international student campaigns",
      "Social media content planning, optimization, and execution",
      "Record video, edit the video, publish on social media, SEO",
      "Data coordination between departments and student leads",
      "Working under Deputy Director Ajitak Singh"
    ],
    achievements: [
      "Helped launch a pilot campaign targeting Bangladeshi students",
      "Built internal digital asset repository",
      "Assisted in promotional video and voiceover scripting"
    ],
    skills: ["SEO", "Canva", "Google Sheets", "YouTube Studio", "Meta Ads", "Video Editing on CapCut", "Content localization", "Cultural optimization"],
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
      "Managed WordPress websites and SEO for educational migration consultancy",
      "Created outreach landing pages for Sharda University and similar institutions",
      "Handled on-page optimization, schema integration, and lead form workflows"
    ],
    achievements: [
      "Ranked multiple pages on Google Search in Bangladesh",
      "Reduced site bounce rate by restructuring user flows",
      "Supported over 300+ lead inquiries through SEO-driven pages"
    ],
    skills: ["WordPress", "Elementor", "SEO Tools (Ubersuggest, Ahrefs)", "Google Analytics", "Mailchimp"],
    type: 'work'
  },
  {
    title: "B.Tech Computer Science",
    organization: "Sharda University",
    location: "Greater Noida, India",
    period: "Aug 2022 – June 2026",
    description: [
      "Hands-on learning through building real-world projects",
      "Participation in coding platforms like LeetCode",
      "Self-taught exploration of DevOps, PWA, ML"
    ],
    achievements: [
      "Top 10% performance in class coding competitions",
      "Developed complete restaurant delivery system plugin as academic-industry bridge",
      "Used AI agents (Copilot, Claude, Gemini) for intelligent project scaffolding"
    ],
    skills: ["PHP", "JavaScript", "MySQL", "React", "Git", "Docker", "AI agent workflows (Cursor IDE + GitHub Copilot + Gemini Studio)"],
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
    <section id="experience" ref={sectionRef} className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-48 h-48 sm:w-64 sm:h-64 lg:w-96 lg:h-96 bg-gradient-to-br from-primary-100/40 to-transparent rounded-full -translate-y-24 -translate-x-24 sm:-translate-y-32 sm:-translate-x-32 lg:-translate-y-48 lg:-translate-x-48" />
      <div className="absolute bottom-0 right-0 w-32 h-32 sm:w-48 sm:h-48 lg:w-72 lg:h-72 bg-gradient-to-tl from-blue-100/40 to-transparent rounded-full translate-y-16 translate-x-16 sm:translate-y-24 sm:translate-x-24 lg:translate-y-36 lg:translate-x-36" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className={`transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          {/* Section Header */}
          <div className="text-center mb-12 lg:mb-20">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-serif font-semibold text-gray-900 mb-4">
              Experience & Education
            </h2>
            <div className="w-16 h-0.5 bg-gradient-to-r from-primary-500 to-blue-500 mx-auto rounded-full mb-6" />
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
              My journey through professional experiences and academic pursuits, 
              building expertise in technology and leadership through hands-on learning and real-world application.
            </p>
          </div>

          {/* Stats Overview - Responsive Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12 lg:mb-20">
            <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-lg border border-gray-100 text-center group hover:shadow-xl transition-all duration-300">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:scale-105 transition-transform duration-300">
                <Briefcase size={16} className="sm:w-5 sm:h-5 text-white" />
              </div>
              <div className="text-lg sm:text-2xl font-bold text-gray-900 mb-1 sm:mb-2">2+</div>
              <div className="text-xs sm:text-sm text-gray-600">Years Experience</div>
            </div>
            
            <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-lg border border-gray-100 text-center group hover:shadow-xl transition-all duration-300">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:scale-105 transition-transform duration-300">
                <Code size={16} className="sm:w-5 sm:h-5 text-white" />
              </div>
              <div className="text-lg sm:text-2xl font-bold text-gray-900 mb-1 sm:mb-2">15+</div>
              <div className="text-xs sm:text-sm text-gray-600">Projects Delivered</div>
            </div>
            
            <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-lg border border-gray-100 text-center group hover:shadow-xl transition-all duration-300">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:scale-105 transition-transform duration-300">
                <Users size={16} className="sm:w-5 sm:h-5 text-white" />
              </div>
              <div className="text-lg sm:text-2xl font-bold text-gray-900 mb-1 sm:mb-2">300+</div>
              <div className="text-xs sm:text-sm text-gray-600">Leads Generated</div>
            </div>
            
            <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-lg border border-gray-100 text-center group hover:shadow-xl transition-all duration-300">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:scale-105 transition-transform duration-300">
                <Award size={16} className="sm:w-5 sm:h-5 text-white" />
              </div>
              <div className="text-lg sm:text-2xl font-bold text-gray-900 mb-1 sm:mb-2">Top 10%</div>
              <div className="text-xs sm:text-sm text-gray-600">Academic Performance</div>
            </div>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line - Hidden on mobile */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 via-primary-400 to-primary-300 rounded-full hidden lg:block" />

            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div 
                  key={index}
                  className={`relative transition-all duration-500 ${
                    isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
                  }`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  {/* Timeline Dot - Hidden on mobile */}
                  <div className="absolute left-6 top-8 w-5 h-5 rounded-full border-3 border-white shadow-lg hidden lg:flex items-center justify-center z-10"
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
                  <div className="lg:ml-20 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group border border-gray-100">
                    <div className="p-6 sm:p-8">
                      {/* Header Section */}
                      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                        <div className="flex-grow">
                          <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-3">
                            <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${
                              exp.type === 'work' 
                                ? 'bg-gradient-to-br from-primary-500 to-primary-600' 
                                : 'bg-gradient-to-br from-gray-600 to-gray-700'
                            }`}>
                              {exp.type === 'work' ? (
                                <Building size={20} className="text-white" />
                              ) : (
                                <GraduationCap size={20} className="text-white" />
                              )}
                            </div>
                            <div className="flex-grow min-w-0">
                              <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900 group-hover:text-primary-700 transition-colors duration-300">
                                {exp.title}
                              </h3>
                              <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                                <p className="text-base sm:text-lg font-medium text-primary-600 truncate">
                                  {exp.organization}
                                </p>
                                {exp.website && (
                                  <a 
                                    href={exp.website} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="text-gray-400 hover:text-primary-600 transition-colors duration-200 flex-shrink-0"
                                  >
                                    <ExternalLink size={16} />
                                  </a>
                                )}
                              </div>
                            </div>
                            {exp.current && (
                              <span className="px-3 py-1 bg-gradient-to-r from-green-500 to-green-600 text-white text-sm font-medium rounded-full flex-shrink-0 self-start sm:self-center">
                                Current
                              </span>
                            )}
                          </div>
                        </div>
                        
                        <div className="text-sm text-gray-500 lg:text-right space-y-1 mt-2 lg:mt-0 lg:ml-6 flex-shrink-0">
                          <div className="flex items-center gap-2 lg:justify-end">
                            <Calendar size={16} className="text-primary-500 flex-shrink-0" />
                            <span className="font-medium">{exp.period}</span>
                          </div>
                          <div className="flex items-center gap-2 lg:justify-end">
                            <MapPin size={16} className="text-primary-500 flex-shrink-0" />
                            <span className="truncate">{exp.location}</span>
                          </div>
                        </div>
                      </div>
                      
                      {/* Description */}
                      <div className="mb-6">
                        <h4 className="text-sm font-semibold text-gray-900 mb-3 uppercase tracking-wide">Key Responsibilities</h4>
                        <ul className="space-y-2">
                          {exp.description.map((item, itemIndex) => (
                            <li key={itemIndex} className="flex items-start gap-3 text-gray-700 leading-relaxed text-sm sm:text-base">
                              <div className="w-2 h-2 bg-primary-400 rounded-full mt-2 flex-shrink-0" />
                              <span className="break-words">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Achievements - Expandable */}
                      {exp.achievements && (
                        <div className="mb-6">
                          <button
                            onClick={() => toggleExpanded(index)}
                            className="flex items-center gap-2 text-sm font-semibold text-gray-900 mb-3 uppercase tracking-wide hover:text-primary-700 transition-colors duration-200"
                          >
                            <Award size={16} className="text-primary-500" />
                            Key Achievements
                            <div className={`transform transition-transform duration-200 ${expandedItems.includes(index) ? 'rotate-180' : ''}`}>
                              ▼
                            </div>
                          </button>
                          <div className={`transition-all duration-300 overflow-hidden ${
                            expandedItems.includes(index) ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                          }`}>
                            <ul className="space-y-2">
                              {exp.achievements.map((achievement, achievementIndex) => (
                                <li key={achievementIndex} className="flex items-start gap-3 text-gray-700 leading-relaxed text-sm sm:text-base">
                                  <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0" />
                                  <span className="break-words">{achievement}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      )}
                      
                      {/* Skills */}
                      {exp.skills && (
                        <div>
                          <h4 className="text-sm font-semibold text-gray-900 mb-3 uppercase tracking-wide">Technologies & Skills</h4>
                          <div className="flex flex-wrap gap-2">
                            {exp.skills.map((skill, skillIndex) => (
                              <span 
                                key={skillIndex}
                                className="px-3 py-1 text-xs sm:text-sm font-medium text-primary-700 bg-primary-50 rounded-full border border-primary-200 hover:bg-primary-100 transition-colors duration-200"
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                    
                    {/* Hover Effect */}
                    <div className={`h-1 bg-gradient-to-r ${
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
          <div className="mt-12 lg:mt-20">
            <div className="bg-gradient-to-r from-primary-600 to-blue-600 rounded-2xl p-6 sm:p-8 text-white shadow-lg relative overflow-hidden group hover:shadow-xl transition-all duration-300">
              <div className="absolute top-0 right-0 w-24 h-24 sm:w-32 sm:h-32 bg-white/10 rounded-full -translate-y-12 translate-x-12 sm:-translate-y-16 sm:translate-x-16" />
              <div className="absolute bottom-0 left-0 w-20 h-20 sm:w-24 sm:h-24 bg-white/10 rounded-full translate-y-10 -translate-x-10 sm:translate-y-12 sm:-translate-x-12" />
              
              <div className="relative z-10 text-center">
                <h3 className="text-xl sm:text-2xl font-semibold mb-4">Ready to Collaborate?</h3>
                <p className="text-blue-100 mb-6 max-w-3xl mx-auto text-base sm:text-lg">
                  I'm always open to discussing new opportunities, innovative projects, 
                  and ways to create meaningful impact through technology and creative solutions.
                </p>
                <button 
                  onClick={() => {
                    const element = document.querySelector('#contact');
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="bg-white text-primary-700 px-6 sm:px-8 py-3 rounded-xl font-medium hover:bg-blue-50 transition-colors duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                >
                  Let's Connect
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;