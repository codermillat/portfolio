import React, { useEffect, useRef, useState } from 'react';
import { MapPin, Code, Coffee, Lightbulb, Target, Zap, Award } from 'lucide-react';

const About: React.FC = () => {
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
    <section id="about" ref={sectionRef} className="py-12 lg:py-20 px-4 lg:px-6 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 lg:w-96 lg:h-96 bg-gradient-to-bl from-primary-100/40 to-transparent rounded-full -translate-y-32 translate-x-32 lg:-translate-y-48 lg:translate-x-48" />
      <div className="absolute bottom-0 left-0 w-48 h-48 lg:w-64 lg:h-64 bg-gradient-to-tr from-blue-100/40 to-transparent rounded-full translate-y-24 -translate-x-24 lg:translate-y-32 lg:-translate-x-32" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className={`transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          {/* Section Header */}
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl lg:text-4xl font-serif font-semibold text-gray-900 mb-3">
              About Me
            </h2>
            <div className="w-16 h-0.5 bg-gradient-to-r from-primary-500 to-blue-500 mx-auto rounded-full mb-4" />
            <p className="text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed text-justify">
              Computer Science student turned full-stack developer, building meaningful solutions 
              that bridge technical excellence with human-centered design.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            {/* Left Column - Main Content */}
            <div className="space-y-6">
              {/* Introduction Card */}
              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 relative overflow-hidden group hover:shadow-xl transition-all duration-300">
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-primary-100/30 to-transparent rounded-full -translate-y-12 translate-x-12" />
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
                      <Lightbulb size={20} className="text-primary-700" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">My Journey</h3>
                  </div>
                  
                  <div className="space-y-3 text-gray-700 leading-relaxed">
                    <p className="text-sm lg:text-base text-justify">
                      Currently pursuing Computer Science at Sharda University while gaining hands-on experience 
                      in full-stack development, WordPress ecosystems, and mobile applications.
                    </p>
                    
                    <p className="text-sm lg:text-base text-justify">
                      I specialize in creating efficient, user-centered solutions that bridge technical 
                      capability with business objectives through systematic problem-solving and creative strategy.
                    </p>
                  </div>
                </div>
              </div>

              {/* Philosophy Card */}
              <div className="bg-gradient-to-br from-primary-600 to-primary-800 rounded-xl p-6 text-white shadow-lg relative overflow-hidden group hover:shadow-xl transition-all duration-300">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16" />
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12" />
                
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                      <Target size={20} className="text-white" />
                    </div>
                    <h3 className="text-xl font-semibold">Philosophy</h3>
                  </div>
                  
                  <blockquote className="text-lg italic mb-4 text-blue-100 font-light text-justify">
                    "I don't chase spotlight or motivation. I build for clarity, not applause."
                  </blockquote>
                  
                  <div className="grid grid-cols-1 gap-2">
                    {[
                      "Build with purpose, not for praise",
                      "Silence speaks louder than noise", 
                      "Code is poetry in motion",
                      "Quality over quantity, always"
                    ].map((principle, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-blue-300 rounded-full flex-shrink-0" />
                        <p className="text-blue-100 text-sm">{principle}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center gap-3 text-primary-700 bg-white rounded-lg p-4 shadow-md border border-gray-100">
                <div className="w-8 h-8 bg-primary-100 rounded-lg flex items-center justify-center">
                  <MapPin size={16} className="text-primary-700" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900 text-sm">Based in Greater Noida, India</p>
                  <p className="text-xs text-gray-600">Open to remote opportunities worldwide</p>
                </div>
              </div>
            </div>

            {/* Right Column - Stats & Skills */}
            <div className="space-y-6">
              {/* Quick Stats */}
              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">At a Glance</h3>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center group">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-105 transition-transform duration-300">
                      <Code size={20} className="text-white" />
                    </div>
                    <div className="text-2xl font-bold text-gray-900 mb-1">3+</div>
                    <div className="text-xs text-gray-600">Years Coding</div>
                  </div>
                  
                  <div className="text-center group">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-105 transition-transform duration-300">
                      <Award size={20} className="text-white" />
                    </div>
                    <div className="text-2xl font-bold text-gray-900 mb-1">15+</div>
                    <div className="text-xs text-gray-600">Projects Built</div>
                  </div>
                  
                  <div className="text-center group">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-105 transition-transform duration-300">
                      <Coffee size={20} className="text-white" />
                    </div>
                    <div className="text-2xl font-bold text-gray-900 mb-1">∞</div>
                    <div className="text-xs text-gray-600">Cups of Coffee</div>
                  </div>
                  
                  <div className="text-center group">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-105 transition-transform duration-300">
                      <Zap size={20} className="text-white" />
                    </div>
                    <div className="text-2xl font-bold text-gray-900 mb-1">24/7</div>
                    <div className="text-xs text-gray-600">Learning Mode</div>
                  </div>
                </div>
              </div>

              {/* Core Strengths */}
              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                <h3 className="text-xl font-semibold text-gray-900 mb-5 text-center">Core Strengths</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1 text-sm">Full-Stack Development</h4>
                      <p className="text-xs text-gray-600">WordPress, React, Node.js, PHP</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1 text-sm">Problem Solving</h4>
                      <p className="text-xs text-gray-600">Systematic approach to complex challenges</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1 text-sm">User Experience</h4>
                      <p className="text-xs text-gray-600">Creating intuitive, accessible interfaces</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1 text-sm">Performance Optimization</h4>
                      <p className="text-xs text-gray-600">Speed, SEO, and scalability focused</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Current Focus */}
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-6 text-white shadow-lg">
                <h3 className="text-lg font-semibold mb-4 text-center">Currently Exploring</h3>
                <div className="flex flex-wrap gap-2 justify-center">
                  {["AI Integration", "Mobile Development", "Cloud Architecture", "DevOps"].map((tech, index) => (
                    <span key={index} className="px-3 py-1 bg-white/10 rounded-full text-xs font-medium backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-colors duration-300">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;