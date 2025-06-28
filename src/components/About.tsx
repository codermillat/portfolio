import React, { useEffect, useRef, useState } from 'react';
import { MapPin, Heart, Code, Coffee } from 'lucide-react';

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
      { threshold: 0.1, rootMargin: '50px' } // Reduced threshold and added margin for mobile
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-16 lg:py-32 px-6 lg:px-8 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-primary-50 to-transparent rounded-full -translate-y-48 translate-x-48 opacity-50" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-blue-50 to-transparent rounded-full translate-y-32 -translate-x-32 opacity-50" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-3xl lg:text-4xl font-serif font-semibold text-gray-900 mb-16 text-center">
            About Me
          </h2>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Content */}
            <div className="space-y-8">
              <div className="space-y-6">
                <p className="text-lg text-gray-700 leading-relaxed">
                  Computer Science student at Sharda University with hands-on experience in full-stack development, 
                  WordPress ecosystems, and mobile applications. I specialize in creating efficient, user-centered 
                  solutions that bridge technical capability with business objectives.
                </p>
                
                <p className="text-lg text-gray-700 leading-relaxed">
                  My approach combines systematic problem-solving with creative strategy, whether building custom 
                  plugins, optimizing user experiences, or developing scalable web applications.
                </p>

                <blockquote className="border-l-4 border-primary-500 pl-6 italic text-gray-600 bg-gray-50 p-4 rounded-r-lg">
                  "I don't chase spotlight or motivation. I build for clarity, not applause."
                </blockquote>
              </div>

              {/* Location & Details */}
              <div className="flex items-center gap-3 text-primary-700">
                <MapPin size={20} />
                <span className="font-medium">Greater Noida, India</span>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-6 pt-8">
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Code size={24} className="text-primary-700" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900">3+</div>
                  <div className="text-sm text-gray-600">Years Coding</div>
                </div>
                
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Heart size={24} className="text-primary-700" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900">10+</div>
                  <div className="text-sm text-gray-600">Projects Built</div>
                </div>
                
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Coffee size={24} className="text-primary-700" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900">∞</div>
                  <div className="text-sm text-gray-600">Cups of Coffee</div>
                </div>
              </div>
            </div>

            {/* Visual Element */}
            <div className="relative">
              <div className="relative z-10 bg-gradient-to-br from-primary-600 to-primary-800 rounded-2xl p-8 text-white shadow-2xl">
                <div className="space-y-6">
                  <h3 className="text-2xl font-semibold mb-4">Philosophy</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-blue-300 rounded-full mt-2 flex-shrink-0" />
                      <p className="text-blue-100">Build with purpose, not for praise</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-blue-300 rounded-full mt-2 flex-shrink-0" />
                      <p className="text-blue-100">Silence speaks louder than noise</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-blue-300 rounded-full mt-2 flex-shrink-0" />
                      <p className="text-blue-100">Code is poetry in motion</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-blue-300 rounded-full mt-2 flex-shrink-0" />
                      <p className="text-blue-100">Quality over quantity, always</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Decorative Elements - Hidden on mobile for performance */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary-200 rounded-full opacity-20 hidden lg:block" />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-blue-200 rounded-full opacity-20 hidden lg:block" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;