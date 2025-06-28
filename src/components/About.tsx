import React, { useEffect, useRef, useState } from 'react';
import { MapPin, Heart, Code, Coffee, Lightbulb, Target, Zap } from 'lucide-react';

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
    <section id="about" ref={sectionRef} className="py-16 lg:py-32 px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-primary-100/60 to-transparent rounded-full -translate-y-48 translate-x-48" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-blue-100/60 to-transparent rounded-full translate-y-32 -translate-x-32" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-primary-50/30 to-transparent rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {/* Section Header */}
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-serif font-semibold text-gray-900 mb-6">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-blue-500 mx-auto rounded-full mb-6" />
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Computer Science student turned full-stack developer, building meaningful solutions 
              that bridge technical excellence with human-centered design.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
            {/* Left Column - Main Content */}
            <div className="space-y-8">
              {/* Introduction */}
              <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 relative overflow-hidden group hover:shadow-2xl transition-all duration-500">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-primary-100/50 to-transparent rounded-full -translate-y-16 translate-x-16" />
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center">
                      <Lightbulb size={24} className="text-primary-700" />
                    </div>
                    <h3 className="text-2xl font-semibold text-gray-900">My Journey</h3>
                  </div>
                  
                  <div className="space-y-4 text-gray-700 leading-relaxed">
                    <p>
                      Currently pursuing Computer Science at Sharda University while gaining hands-on experience 
                      in full-stack development, WordPress ecosystems, and mobile applications.
                    </p>
                    
                    <p>
                      I specialize in creating efficient, user-centered solutions that bridge technical 
                      capability with business objectives. My approach combines systematic problem-solving 
                      with creative strategy.
                    </p>
                  </div>
                </div>
              </div>

              {/* Philosophy Card */}
              <div className="bg-gradient-to-br from-primary-600 to-primary-800 rounded-2xl p-8 text-white shadow-xl relative overflow-hidden group hover:shadow-2xl transition-all duration-500">
                <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -translate-y-20 translate-x-20" />
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full translate-y-16 -translate-x-16" />
                
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                      <Target size={24} className="text-white" />
                    </div>
                    <h3 className="text-2xl font-semibold">Philosophy</h3>
                  </div>
                  
                  <blockquote className="text-xl italic mb-6 text-blue-100 font-light">
                    "I don't chase spotlight or motivation. I build for clarity, not applause."
                  </blockquote>
                  
                  <div className="grid grid-cols-1 gap-4">
                    {[
                      "Build with purpose, not for praise",
                      "Silence speaks louder than noise", 
                      "Code is poetry in motion",
                      "Quality over quantity, always"
                    ].map((principle, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-blue-300 rounded-full flex-shrink-0" />
                        <p className="text-blue-100">{principle}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center gap-3 text-primary-700 bg-white rounded-xl p-4 shadow-lg border border-gray-100">
                <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
                  <MapPin size={20} className="text-primary-700" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Based in Greater Noida, India</p>
                  <p className="text-sm text-gray-600">Open to remote opportunities worldwide</p>
                </div>
              </div>
            </div>

            {/* Right Column - Stats & Skills */}
            <div className="space-y-8">
              {/* Quick Stats */}
              <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
                <h3 className="text-2xl font-semibold text-gray-900 mb-8 text-center">At a Glance</h3>
                
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center group">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Code size={28} className="text-white" />
                    </div>
                    <div className="text-3xl font-bold text-gray-900 mb-1">3+</div>
                    <div className="text-sm text-gray-600">Years Coding</div>
                  </div>
                  
                  <div className="text-center group">
                    <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Heart size={28} className="text-white" />
                    </div>
                    <div className="text-3xl font-bold text-gray-900 mb-1">15+</div>
                    <div className="text-sm text-gray-600">Projects Built</div>
                  </div>
                  
                  <div className="text-center group">
                    <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Coffee size={28} className="text-white" />
                    </div>
                    <div className="text-3xl font-bold text-gray-900 mb-1">∞</div>
                    <div className="text-sm text-gray-600">Cups of Coffee</div>
                  </div>
                  
                  <div className="text-center group">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Zap size={28} className="text-white" />
                    </div>
                    <div className="text-3xl font-bold text-gray-900 mb-1">24/7</div>
                    <div className="text-sm text-gray-600">Learning Mode</div>
                  </div>
                </div>
              </div>

              {/* Core Strengths - Restored to original design */}
              <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">Core Strengths</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary-400 rounded-full mt-2 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Full-Stack Development</h4>
                      <p className="text-sm text-gray-600">WordPress, React, Node.js, PHP</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary-400 rounded-full mt-2 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Problem Solving</h4>
                      <p className="text-sm text-gray-600">Systematic approach to complex challenges</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary-400 rounded-full mt-2 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">User Experience</h4>
                      <p className="text-sm text-gray-600">Creating intuitive, accessible interfaces</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary-400 rounded-full mt-2 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Performance Optimization</h4>
                      <p className="text-sm text-gray-600">Speed, SEO, and scalability focused</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Current Focus */}
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 text-white shadow-xl">
                <h3 className="text-xl font-semibold mb-4 text-center">Currently Exploring</h3>
                <div className="flex flex-wrap gap-3 justify-center">
                  {["AI Integration", "Mobile Development", "Cloud Architecture", "DevOps"].map((tech, index) => (
                    <span key={index} className="px-4 py-2 bg-white/10 rounded-full text-sm font-medium backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-colors duration-300">
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