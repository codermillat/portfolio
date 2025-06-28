import React, { useEffect, useRef, useState } from 'react';
import { Download, FileText, Eye, Calendar } from 'lucide-react';

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

  return (
    <section id="resume" ref={sectionRef} className="py-12 lg:py-20 px-4 lg:px-6 bg-white relative overflow-hidden">
      {/* Optimized Background Elements */}
      <div className="absolute top-1/4 right-0 w-64 h-64 lg:w-96 lg:h-96 bg-gradient-to-l from-primary-50/60 to-transparent rounded-full translate-x-32 lg:translate-x-48 opacity-60" />
      <div className="absolute bottom-1/4 left-0 w-48 h-48 lg:w-72 lg:h-72 bg-gradient-to-r from-blue-50/60 to-transparent rounded-full -translate-x-24 lg:-translate-x-36 opacity-60" />

      <div className="max-w-4xl mx-auto relative z-10">
        <div className={`transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          {/* Compact Section Header */}
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl lg:text-4xl font-serif font-semibold text-gray-900 mb-3">
              Resume
            </h2>
            <div className="w-16 h-0.5 bg-gradient-to-r from-primary-500 to-blue-500 mx-auto rounded-full mb-4" />
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Download my comprehensive resume with detailed experience, education, and technical skills
            </p>
          </div>

          <div className="bg-gradient-to-br from-primary-50 to-blue-50 rounded-xl p-6 lg:p-8 border border-primary-100 relative overflow-hidden">
            {/* Decorative Elements - Hidden on mobile */}
            <div className="absolute top-0 right-0 w-24 h-24 lg:w-32 lg:h-32 bg-primary-200/30 rounded-full -translate-y-12 translate-x-12 lg:-translate-y-16 lg:translate-x-16 hidden lg:block" />
            <div className="absolute bottom-0 left-0 w-16 h-16 lg:w-24 lg:h-24 bg-blue-200/30 rounded-full translate-y-8 -translate-x-8 lg:translate-y-12 lg:-translate-x-12 hidden lg:block" />

            <div className="relative z-10">
              {/* Resume Preview - Optimized layout */}
              <div className="lg:flex items-center gap-8 lg:gap-12">
                {/* Preview Card - Compact */}
                <div className="lg:w-1/2 mb-6 lg:mb-0">
                  <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200 group hover:shadow-xl transition-all duration-300">
                    <div className="flex items-center justify-center mb-4">
                      <div className="w-12 h-12 lg:w-16 lg:h-16 bg-primary-100 rounded-full flex items-center justify-center group-hover:bg-primary-200 transition-colors duration-300">
                        <FileText size={24} className="text-primary-700" />
                      </div>
                    </div>
                    
                    <h3 className="text-lg font-semibold text-gray-900 mb-4 text-center">
                      Professional Resume
                    </h3>
                    
                    <div className="space-y-2 text-sm text-gray-600 mb-4">
                      <div className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-primary-400 rounded-full" />
                        <span className="text-xs">Complete work experience</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-primary-400 rounded-full" />
                        <span className="text-xs">Technical skills & certifications</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-primary-400 rounded-full" />
                        <span className="text-xs">Project portfolio highlights</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-primary-400 rounded-full" />
                        <span className="text-xs">Education & achievements</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-center gap-2 text-xs text-gray-500">
                      <Calendar size={12} />
                      <span>Last updated: January 2025</span>
                    </div>
                  </div>
                </div>

                {/* Download Section - Compact */}
                <div className="lg:w-1/2 text-center lg:text-left">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    Get My Complete Resume
                  </h3>
                  
                  <p className="text-gray-700 leading-relaxed mb-6 text-sm lg:text-base">
                    Download my professionally formatted PDF resume containing detailed information about my 
                    experience, skills, projects, and educational background. Perfect for HR teams and hiring managers.
                  </p>

                  <div className="space-y-3">
                    <button className="w-full lg:w-auto group bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                      <Download size={18} />
                      Download PDF Resume
                    </button>
                    
                    <button className="w-full lg:w-auto group border-2 border-primary-600 text-primary-600 hover:bg-primary-50 px-6 py-3 rounded-lg font-medium transition-all duration-300 flex items-center justify-center gap-2">
                      <Eye size={18} />
                      Preview Online
                    </button>
                  </div>

                  <div className="mt-6 p-3 bg-white/50 rounded-lg border border-primary-200">
                    <p className="text-xs text-gray-600 text-center lg:text-left">
                      <strong>File Details:</strong> PDF format, 2 pages, optimized for ATS systems
                    </p>
                  </div>
                </div>
              </div>

              {/* Additional Info - Compact */}
              <div className="mt-8 lg:mt-12 pt-6 border-t border-primary-200">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-xl font-bold text-primary-700 mb-1">2 Pages</div>
                    <div className="text-xs text-gray-600">Comprehensive yet concise</div>
                  </div>
                  <div>
                    <div className="text-xl font-bold text-primary-700 mb-1">ATS Ready</div>
                    <div className="text-xs text-gray-600">Optimized for applicant tracking systems</div>
                  </div>
                  <div>
                    <div className="text-xl font-bold text-primary-700 mb-1">Updated</div>
                    <div className="text-xs text-gray-600">Regularly maintained and current</div>
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