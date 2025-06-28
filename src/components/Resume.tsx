import React, { useEffect, useRef, useState } from 'react';
import { Download, FileText, Eye, Calendar, Award, Briefcase, GraduationCap, Code, Globe, Mail } from 'lucide-react';

const Resume: React.FC = () => {
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

  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'MD_MILLAT_HOSEN_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handlePreviewResume = () => {
    window.open('/resume.pdf', '_blank');
  };

  const resumeHighlights = [
    {
      icon: Briefcase,
      title: "Professional Experience",
      items: [
        "Current Intern at Sharda University International Relations Division",
        "Former Web Developer at SIAC Abroad (Feb 2023 - Mar 2024)",
        "Strategic digital outreach and SEO optimization",
        "WordPress development and plugin architecture"
      ]
    },
    {
      icon: GraduationCap,
      title: "Education & Certifications",
      items: [
        "B.Tech Computer Science - Sharda University (2022-2026)",
        "Top 10% academic performance in coding competitions",
        "Self-taught expertise in modern development frameworks",
        "Continuous learning in AI/ML and DevOps technologies"
      ]
    },
    {
      icon: Code,
      title: "Technical Expertise",
      items: [
        "Full Stack Development: PHP, JavaScript, React, Node.js",
        "WordPress & WooCommerce: Custom plugins and themes",
        "Mobile Development: Android, PWA, Firebase integration",
        "SEO & ASO: Search optimization and analytics"
      ]
    },
    {
      icon: Award,
      title: "Key Achievements",
      items: [
        "Developed restaurant delivery system serving 12+ establishments",
        "Generated 300+ leads through SEO-optimized campaigns",
        "Successfully sold VPN app for $500 with 10K+ downloads",
        "Built and deployed multiple WordPress solutions"
      ]
    }
  ];

  const resumeStats = [
    { label: "Years Experience", value: "2+", icon: Briefcase },
    { label: "Projects Completed", value: "15+", icon: Code },
    { label: "Technologies Mastered", value: "20+", icon: Globe },
    { label: "Clients Served", value: "50+", icon: Award }
  ];

  return (
    <section id="resume" ref={sectionRef} className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/4 right-0 w-48 h-48 sm:w-64 sm:h-64 lg:w-96 lg:h-96 bg-gradient-to-l from-primary-50/60 to-transparent rounded-full translate-x-24 sm:translate-x-32 lg:translate-x-48 opacity-60" />
      <div className="absolute bottom-1/4 left-0 w-32 h-32 sm:w-48 sm:h-48 lg:w-72 lg:h-72 bg-gradient-to-r from-blue-50/60 to-transparent rounded-full -translate-x-16 sm:-translate-x-24 lg:-translate-x-36 opacity-60" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className={`transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          {/* Section Header */}
          <div className="text-center mb-12 lg:mb-20">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-serif font-semibold text-gray-900 mb-4">
              Professional Resume
            </h2>
            <div className="w-16 h-0.5 bg-gradient-to-r from-primary-500 to-blue-500 mx-auto rounded-full mb-6" />
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              Comprehensive overview of my professional journey, technical expertise, and achievements 
              as a Full Stack Developer and Creative Strategist.
            </p>
          </div>

          {/* Resume Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12 lg:mb-20">
            {resumeStats.map((stat, index) => (
              <div 
                key={index}
                className={`bg-white rounded-2xl p-4 sm:p-6 shadow-lg border border-gray-100 text-center group hover:shadow-xl transition-all duration-300 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:scale-105 transition-transform duration-300">
                  <stat.icon size={16} className="sm:w-5 sm:h-5 text-white" />
                </div>
                <div className="text-lg sm:text-2xl font-bold text-gray-900 mb-1 sm:mb-2">{stat.value}</div>
                <div className="text-xs sm:text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Resume Content Overview */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 mb-12 lg:mb-20">
            {resumeHighlights.map((section, index) => (
              <div 
                key={index}
                className={`bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-gray-100 group hover:shadow-xl transition-all duration-300 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
                style={{ transitionDelay: `${(index + 4) * 100}ms` }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center group-hover:bg-primary-200 transition-colors duration-300">
                    <section.icon size={20} className="text-primary-700" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900">{section.title}</h3>
                </div>
                
                <div className="space-y-3">
                  {section.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary-400 rounded-full mt-2 flex-shrink-0" />
                      <span className="text-sm sm:text-base text-gray-700 leading-relaxed">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Download Section */}
          <div className="bg-gradient-to-br from-primary-50 to-blue-50 rounded-2xl p-6 sm:p-8 lg:p-12 border border-primary-100 relative overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40 bg-primary-200/30 rounded-full -translate-y-12 translate-x-12 sm:-translate-y-16 sm:translate-x-16 lg:-translate-y-20 lg:translate-x-20" />
            <div className="absolute bottom-0 left-0 w-20 h-20 sm:w-24 sm:h-24 lg:w-32 lg:h-32 bg-blue-200/30 rounded-full translate-y-10 -translate-x-10 sm:translate-y-12 sm:-translate-x-12 lg:translate-y-16 lg:-translate-x-16" />

            <div className="relative z-10">
              {/* Resume Preview */}
              <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
                {/* Preview Card */}
                <div className="w-full lg:w-1/2">
                  <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 border border-gray-200 group hover:shadow-xl transition-all duration-300">
                    <div className="flex items-center justify-center mb-6">
                      <div className="w-16 h-16 sm:w-20 sm:h-20 bg-primary-100 rounded-full flex items-center justify-center group-hover:bg-primary-200 transition-colors duration-300">
                        <FileText size={24} className="sm:w-8 sm:h-8 text-primary-700" />
                      </div>
                    </div>
                    
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-6 text-center">
                      MD MILLAT HOSEN Resume
                    </h3>
                    
                    <div className="space-y-3 text-sm sm:text-base text-gray-600 mb-6">
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-primary-400 rounded-full flex-shrink-0" />
                        <span>Complete professional experience timeline</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-primary-400 rounded-full flex-shrink-0" />
                        <span>Detailed technical skills and proficiencies</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-primary-400 rounded-full flex-shrink-0" />
                        <span>Project portfolio with quantified results</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-primary-400 rounded-full flex-shrink-0" />
                        <span>Education background and certifications</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-primary-400 rounded-full flex-shrink-0" />
                        <span>Contact information and social profiles</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
                      <Calendar size={14} />
                      <span>Last updated: January 2025</span>
                    </div>
                  </div>
                </div>

                {/* Download Section */}
                <div className="w-full lg:w-1/2 text-center lg:text-left">
                  <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-6">
                    Download Complete Resume
                  </h3>
                  
                  <p className="text-gray-700 leading-relaxed mb-8 text-sm sm:text-base lg:text-lg">
                    Get the full PDF resume with comprehensive details about my professional journey, 
                    technical expertise, project achievements, and educational background. 
                    Optimized for ATS systems and professional review.
                  </p>

                  <div className="space-y-4">
                    <button 
                      onClick={handleDownloadResume}
                      className="w-full lg:w-auto group bg-primary-600 hover:bg-primary-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-medium transition-all duration-300 flex items-center justify-center gap-3 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                      aria-label="Download MD MILLAT HOSEN Resume PDF"
                    >
                      <Download size={18} className="sm:w-5 sm:h-5" />
                      Download PDF Resume
                    </button>
                    
                    <button 
                      onClick={handlePreviewResume}
                      className="w-full lg:w-auto group border-2 border-primary-600 text-primary-600 hover:bg-primary-50 px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-medium transition-all duration-300 flex items-center justify-center gap-3"
                      aria-label="Preview MD MILLAT HOSEN Resume online"
                    >
                      <Eye size={18} className="sm:w-5 sm:h-5" />
                      Preview Online
                    </button>
                  </div>

                  <div className="mt-8 p-4 bg-white/50 rounded-xl border border-primary-200">
                    <p className="text-xs sm:text-sm text-gray-600 text-center lg:text-left">
                      <strong>File Details:</strong> PDF format, ATS-optimized, includes contact info and portfolio links
                    </p>
                  </div>
                </div>
              </div>

              {/* Contact Information */}
              <div className="mt-12 lg:mt-16 pt-8 border-t border-primary-200">
                <div className="text-center">
                  <h4 className="text-lg font-semibold text-gray-900 mb-6">Quick Contact Information</h4>
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8">
                    <div className="flex items-center gap-2 text-gray-600">
                      <Mail size={16} className="text-primary-600" />
                      <span className="text-sm sm:text-base">millat6575@gmail.com</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <Globe size={16} className="text-primary-600" />
                      <span className="text-sm sm:text-base">Greater Noida, India</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <Code size={16} className="text-primary-600" />
                      <span className="text-sm sm:text-base">github.com/codermillat</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Additional Info */}
              <div className="mt-8 lg:mt-12">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 text-center">
                  <div>
                    <div className="text-xl sm:text-2xl font-bold text-primary-700 mb-2">Professional</div>
                    <div className="text-xs sm:text-sm text-gray-600">ATS-optimized format for easy parsing</div>
                  </div>
                  <div>
                    <div className="text-xl sm:text-2xl font-bold text-primary-700 mb-2">Comprehensive</div>
                    <div className="text-xs sm:text-sm text-gray-600">Complete career and education history</div>
                  </div>
                  <div>
                    <div className="text-xl sm:text-2xl font-bold text-primary-700 mb-2">Current</div>
                    <div className="text-xs sm:text-sm text-gray-600">Regularly updated with latest achievements</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;