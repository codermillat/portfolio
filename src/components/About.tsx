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
    <section id="about" ref={sectionRef} className="py-20 px-6 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-primary-100/40 to-transparent rounded-full -translate-y-48 translate-x-48" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-blue-100/40 to-transparent rounded-full translate-y-32 -translate-x-32" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className={`transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-semibold text-gray-900 mb-4">
              About Me
            </h2>
            <div className="w-16 h-0.5 bg-gradient-to-r from-primary-500 to-blue-500 mx-auto rounded-full mb-6" />
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Computer Science student turned full-stack developer, building meaningful solutions 
              that bridge technical excellence with human-centered design.
            </p>
          </div>

          <div className="space-y-12">
            {/* Row 1: My Journey and Philosophy - Equal Heights */}
            <div className="grid lg:grid-cols-2 gap-8">
              {/* My Journey Card */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 relative overflow-hidden group hover:shadow-xl transition-all duration-300 h-80 flex flex-col">
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-primary-100/30 to-transparent rounded-full -translate-y-12 translate-x-12" />
                <div className="relative z-10 flex-1 flex flex-col">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center">
                      <Lightbulb size={24} className="text-primary-700" />
                    </div>
                    <h3 className="text-2xl font-semibold text-gray-900">My Journey</h3>
                  </div>
                  
                  <div className="space-y-4 text-gray-700 leading-relaxed flex-1">
                    <p className="text-base">
                      Currently pursuing Computer Science at Sharda University while gaining hands-on experience 
                      in full-stack development, WordPress ecosystems, and mobile applications.
                    </p>
                    
                    <p className="text-base">
                      I specialize in creating efficient, user-centered solutions that bridge technical 
                      capability with business objectives through systematic problem-solving and creative strategy.
                    </p>
                  </div>
                </div>
              </div>

              {/* Philosophy Card */}
              <div className="bg-gradient-to-br from-primary-600 to-primary-800 rounded-2xl p-8 text-white shadow-lg relative overflow-hidden group hover:shadow-xl transition-all duration-300 h-80 flex flex-col">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16" />
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12" />
                
                <div className="relative z-10 flex-1 flex flex-col">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                      <Target size={24} className="text-white" />
                    </div>
                    <h3 className="text-2xl font-semibold">Philosophy</h3>
                  </div>
                  
                  <blockquote className="text-xl italic mb-6 text-blue-100 font-light">
                    "I don't chase spotlight or motivation. I build for clarity, not applause."
                  </blockquote>
                  
                  <div className="grid grid-cols-1 gap-3 flex-1">
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
            </div>

            {/* Row 2: Location - Same Height as Row 1 */}
            <div className="h-80 flex items-center justify-center">
              <div className="flex items-center gap-4 text-primary-700 bg-white rounded-2xl p-8 shadow-lg border border-gray-100 max-w-2xl w-full">
                <div className="w-16 h-16 bg-primary-100 rounded-xl flex items-center justify-center">
                  <MapPin size={24} className="text-primary-700" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900 text-2xl">Based in Greater Noida, India</p>
                  <p className="text-lg text-gray-600">Open to remote opportunities worldwide</p>
                </div>
              </div>
            </div>

            {/* Row 3: At a Glance and Core Strengths - Equal Heights */}
            <div className="grid lg:grid-cols-2 gap-8">
              {/* At a Glance */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 h-96 flex flex-col">
                <h3 className="text-2xl font-semibold text-gray-900 mb-8 text-center">At a Glance</h3>
                
                <div className="grid grid-cols-2 gap-6 flex-1">
                  <div className="text-center group">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-105 transition-transform duration-300">
                      <Code size={24} className="text-white" />
                    </div>
                    <div className="text-3xl font-bold text-gray-900 mb-2">3+</div>
                    <div className="text-sm text-gray-600">Years Coding</div>
                  </div>
                  
                  <div className="text-center group">
                    <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-105 transition-transform duration-300">
                      <Award size={24} className="text-white" />
                    </div>
                    <div className="text-3xl font-bold text-gray-900 mb-2">15+</div>
                    <div className="text-sm text-gray-600">Projects Built</div>
                  </div>
                  
                  <div className="text-center group">
                    <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-105 transition-transform duration-300">
                      <Coffee size={24} className="text-white" />
                    </div>
                    <div className="text-3xl font-bold text-gray-900 mb-2">∞</div>
                    <div className="text-sm text-gray-600">Cups of Coffee</div>
                  </div>
                  
                  <div className="text-center group">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-105 transition-transform duration-300">
                      <Zap size={24} className="text-white" />
                    </div>
                    <div className="text-3xl font-bold text-gray-900 mb-2">24/7</div>
                    <div className="text-sm text-gray-600">Learning Mode</div>
                  </div>
                </div>
              </div>

              {/* Core Strengths */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 h-96 flex flex-col">
                <h3 className="text-2xl font-semibold text-gray-900 mb-8 text-center">Core Strengths</h3>
                
                <div className="space-y-6 flex-1">
                  <div className="flex items-start gap-4">
                    <div className="w-3 h-3 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Full-Stack Development</h4>
                      <p className="text-gray-600">WordPress, React, Node.js, PHP</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-3 h-3 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Problem Solving</h4>
                      <p className="text-gray-600">Systematic approach to complex challenges</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-3 h-3 bg-purple-500 rounded-full mt-2 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">User Experience</h4>
                      <p className="text-gray-600">Creating intuitive, accessible interfaces</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-3 h-3 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Performance Optimization</h4>
                      <p className="text-gray-600">Speed, SEO, and scalability focused</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Row 4: Currently Exploring - Same Height as Row 3 */}
            <div className="h-96 flex items-center justify-center">
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 text-white shadow-lg max-w-4xl w-full">
                <h3 className="text-2xl font-semibold mb-8 text-center">Currently Exploring</h3>
                <div className="flex flex-wrap gap-4 justify-center">
                  {["AI Integration", "Mobile Development", "Cloud Architecture", "DevOps"].map((tech, index) => (
                    <span key={index} className="px-6 py-3 bg-white/10 rounded-xl font-medium backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-colors duration-300">
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