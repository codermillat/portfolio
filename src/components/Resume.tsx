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
      {/* Background Elements */}
      <div className="absolute top-1/4 right-0 w-64 h-64 lg:w-96 lg:h-96 bg-gradient-to-l from-primary-50/60 to-transparent rounded-full translate-x-32 lg:translate-x-48 opacity-60" />
      <div className="absolute bottom-1/4 left-0 w-48 h-48 lg:w-72 lg:h-72 bg-gradient-to-r from-blue-50/60 to-transparent rounded-full -translate-x-24 lg:-translate-x-36 opacity-60" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className={`transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          {/* Section Header */}
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl lg:text-4xl font-serif font-semibold text-gray-900 mb-3">
              Resume
            </h2>
            <div className="w-16 h-0.5 bg-gradient-to-r from-primary-500 to-blue-500 mx-auto rounded-full mb-4" />
            <p className="text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto text-justify">
              Download my comprehensive resume with detailed experience, education, and technical skills 
              showcasing my journey as a full-stack developer and creative strategist.
            </p>
          </div>

          <div className="bg-gradient-to-br from-primary-50 to-blue-50 rounded-xl p-8 lg:p-12 border border-primary-100 relative overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-32 h-32 lg:w-40 lg:h-40 bg-primary-200/30 rounded-full -translate-y-16 translate-x-16 lg:-translate-y-20 lg:translate-x-20" />
            <div className="absolute bottom-0 left-0 w-24 h-24 lg:w-32 lg:h-32 bg-blue-200/30 rounded-full translate-y-12 -translate-x-12 lg:translate-y-16 lg:-translate-x-16" />

            <div className="relative z-10">
              {/* Resume Preview */}
              <div className="lg:flex items-center gap-12 lg:gap-16">
                {/* Preview Card */}
                <div className="lg:w-1/2 mb-8 lg:mb-0">
                  <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200 group hover:shadow-xl transition-all duration-300">
                    <div className="flex items-center justify-center mb-6">
                      <div className="w-16 h-16 lg:w-20 lg:h-20 bg-primary-100 rounded-full flex items-center justify-center group-hover:bg-primary-200 transition-colors duration-300">
                        <FileText size={32} className="text-primary-700" />
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">
                      Professional Resume
                    </h3>
                    
                    <div className="space-y-3 text-base text-gray-600 mb-6">
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-primary-400 rounded-full" />
                        <span>Complete work experience</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-primary-400 rounded-full" />
                        <span>Technical skills & certifications</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-primary-400 rounded-full" />
                        <span>Project portfolio highlights</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-primary-400 rounded-full" />
                        <span>Education & achievements</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
                      <Calendar size={14} />
                      <span>Last updated: January 2025</span>
                    </div>
                  </div>
                </div>

                {/* Download Section */}
                <div className="lg:w-1/2 text-center lg:text-left">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                    Get My Complete Resume
                  </h3>
                  
                  <p className="text-gray-700 leading-relaxed mb-8 text-base lg:text-lg text-justify">
                    Download my professionally formatted PDF resume containing detailed information about my 
                    experience, skills, projects, and educational background. Perfect for HR teams and hiring managers.
                  </p>

                  <div className="space-y-4">
                    <button className="w-full lg:w-auto group bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-lg font-medium transition-all duration-300 flex items-center justify-center gap-3 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                      <Download size={20} />
                      Download PDF Resume
                    </button>
                    
                    <button className="w-full lg:w-auto group border-2 border-primary-600 text-primary-600 hover:bg-primary-50 px-8 py-4 rounded-lg font-medium transition-all duration-300 flex items-center justify-center gap-3">
                      <Eye size={20} />
                      Preview Online
                    </button>
                  </div>

                  <div className="mt-8 p-4 bg-white/50 rounded-lg border border-primary-200">
                    <p className="text-sm text-gray-600 text-center lg:text-left">
                      <strong>File Details:</strong> PDF format, 2 pages, optimized for ATS systems
                    </p>
                  </div>
                </div>
              </div>

              {/* Additional Info - Balanced Row */}
              <div className="mt-12 lg:mt-16 pt-8 border-t border-primary-200">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                  <div>
                    <div className="text-2xl font-bold text-primary-700 mb-2">2 Pages</div>
                    <div className="text-sm text-gray-600">Comprehensive yet concise</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-primary-700 mb-2">ATS Ready</div>
                    <div className="text-sm text-gray-600">Optimized for applicant tracking systems</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-primary-700 mb-2">Updated</div>
                    <div className="text-sm text-gray-600">Regularly maintained and current</div>
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