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
    <section id="about" ref={sectionRef} className="py-16 lg:py-24 px-4 lg:px-6 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-72 h-72 lg:w-96 lg:h-96 bg-gradient-to-bl from-primary-100/30 to-transparent rounded-full -translate-y-36 translate-x-36 lg:-translate-y-48 lg:translate-x-48" />
      <div className="absolute bottom-0 left-0 w-64 h-64 lg:w-80 lg:h-80 bg-gradient-to-tr from-blue-100/30 to-transparent rounded-full translate-y-32 -translate-x-32 lg:translate-y-40 lg:-translate-x-40" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {/* Section Header */}
          <div className="text-center mb-16 lg:mb-20">
            <h2 className="text-4xl lg:text-5xl font-serif font-bold text-gray-900 mb-4">
              About Me
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-blue-500 mx-auto rounded-full mb-6" />
            <p className="text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light text-justify">
              Computer Science student turned full-stack developer, building meaningful solutions 
              that bridge technical excellence with human-centered design.
            </p>
          </div>

          <div className="space-y-12">
            {/* First Row: My Journey and Philosophy side by side - Height: h-80 */}
            <div className="grid lg:grid-cols-2 gap-8">
              {/* My Journey Card */}
              <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 relative overflow-hidden group hover:shadow-2xl transition-all duration-500 h-80 flex flex-col">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-primary-100/40 to-transparent rounded-full -translate-y-16 translate-x-16" />
                <div className="relative z-10 flex-1 flex flex-col">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center shadow-lg">
                      <Lightbulb size={24} className="text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">My Journey</h3>
                  </div>
                  
                  <div className="space-y-4 text-gray-700 leading-relaxed flex-1">
                    <p className="text-base lg:text-lg text-justify">
                      Currently pursuing Computer Science at Sharda University while gaining hands-on experience 
                      in full-stack development, WordPress ecosystems, and mobile applications.
                    </p>
                    
                    <p className="text-base lg:text-lg text-justify">
                      I specialize in creating efficient, user-centered solutions that bridge technical 
                      capability with business objectives through systematic problem-solving and creative strategy.
                    </p>
                  </div>
                </div>
              </div>

              {/* Philosophy Card */}
              <div className="bg-gradient-to-br from-primary-600 to-primary-800 rounded-2xl p-8 text-white shadow-xl relative overflow-hidden group hover:shadow-2xl transition-all duration-500 h-80 flex flex-col">
                <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -translate-y-20 translate-x-20" />
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full translate-y-16 -translate-x-16" />
                
                <div className="relative z-10 flex-1 flex flex-col">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                      <Target size={24} className="text-white" />
                    </div>
                    <h3 className="text-2xl font-bold">Philosophy</h3>
                  </div>
                  
                  <blockquote className="text-lg lg:text-xl italic mb-4 text-blue-100 font-light leading-relaxed text-justify">
                    "I don't chase spotlight or motivation. I build for clarity, not applause."
                  </blockquote>
                  
                  <div className="grid grid-cols-1 gap-2 flex-1">
                    {[
                      "Build with purpose, not for praise",
                      "Silence speaks louder than noise", 
                      "Code is poetry in motion",
                      "Quality over quantity, always"
                    ].map((principle, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-blue-300 rounded-full flex-shrink-0" />
                        <p className="text-blue-100 text-sm lg:text-base">{principle}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Second Row: Location Section - Height: h-80 */}
            <div className="flex items-center justify-center h-80">
              <div className="flex items-center gap-6 text-primary-700 bg-white rounded-2xl p-8 shadow-xl border border-gray-100 max-w-lg w-full">
                <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center shadow-lg">
                  <MapPin size={24} className="text-primary-700" />
                </div>
                <div>
                  <p className="font-bold text-gray-900 text-2xl mb-2">Based in Greater Noida, India</p>
                  <p className="text-gray-600 text-lg">Open to remote opportunities worldwide</p>
                </div>
              </div>
            </div>

            {/* Third Row: At a Glance and Core Strengths side by side - Height: h-96 */}
            <div className="grid lg:grid-cols-2 gap-8">
              {/* At a Glance */}
              <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 h-96 flex flex-col">
                <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">At a Glance</h3>
                
                <div className="grid grid-cols-2 gap-6 flex-1">
                  <div className="text-center group flex flex-col justify-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <Code size={24} className="text-white" />
                    </div>
                    <div className="text-3xl font-bold text-gray-900 mb-2">3+</div>
                    <div className="text-sm text-gray-600 font-medium">Years Coding</div>
                  </div>
                  
                  <div className="text-center group flex flex-col justify-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <Award size={24} className="text-white" />
                    </div>
                    <div className="text-3xl font-bold text-gray-900 mb-2">15+</div>
                    <div className="text-sm text-gray-600 font-medium">Projects Built</div>
                  </div>
                  
                  <div className="text-center group flex flex-col justify-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <Coffee size={24} className="text-white" />
                    </div>
                    <div className="text-3xl font-bold text-gray-900 mb-2">∞</div>
                    <div className="text-sm text-gray-600 font-medium">Cups of Coffee</div>
                  </div>
                  
                  <div className="text-center group flex flex-col justify-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <Zap size={24} className="text-white" />
                    </div>
                    <div className="text-3xl font-bold text-gray-900 mb-2">24/7</div>
                    <div className="text-sm text-gray-600 font-medium">Learning Mode</div>
                  </div>
                </div>
              </div>

              {/* Core Strengths */}
              <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 h-96 flex flex-col">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Core Strengths</h3>
                
                <div className="space-y-6 flex-1 flex flex-col justify-center">
                  <div className="flex items-start gap-4">
                    <div className="w-3 h-3 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Full-Stack Development</h4>
                      <p className="text-sm text-gray-600">WordPress, React, Node.js, PHP</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-3 h-3 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Problem Solving</h4>
                      <p className="text-sm text-gray-600">Systematic approach to complex challenges</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-3 h-3 bg-purple-500 rounded-full mt-2 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">User Experience</h4>
                      <p className="text-sm text-gray-600">Creating intuitive, accessible interfaces</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-3 h-3 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Performance Optimization</h4>
                      <p className="text-sm text-gray-600">Speed, SEO, and scalability focused</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Fourth Row: Currently Exploring - Height: h-96 */}
            <div className="flex justify-center items-center h-96">
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 text-white shadow-xl max-w-2xl w-full flex flex-col justify-center">
                <h3 className="text-2xl font-bold mb-8 text-center">Currently Exploring</h3>
                <div className="flex flex-wrap gap-4 justify-center">
                  {["AI Integration", "Mobile Development", "Cloud Architecture", "DevOps"].map((tech, index) => (
                    <span key={index} className="px-6 py-3 bg-white/10 rounded-full text-base font-medium backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-colors duration-300">
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