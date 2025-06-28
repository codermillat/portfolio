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
    <section id="about" ref={sectionRef} className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-48 h-48 sm:w-64 sm:h-64 lg:w-96 lg:h-96 bg-gradient-to-bl from-primary-100/40 to-transparent rounded-full -translate-y-24 translate-x-24 sm:-translate-y-32 sm:translate-x-32 lg:-translate-y-48 lg:translate-x-48" />
      <div className="absolute bottom-0 left-0 w-32 h-32 sm:w-48 sm:h-48 lg:w-64 lg:h-64 bg-gradient-to-tr from-blue-100/40 to-transparent rounded-full translate-y-16 -translate-x-16 sm:translate-y-24 sm:-translate-x-24 lg:translate-y-32 lg:-translate-x-32" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className={`transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          {/* Section Header - SEO Optimized */}
          <div className="text-center mb-12 lg:mb-20">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-serif font-semibold text-gray-900 mb-4">
              About MD MILLAT HOSEN
            </h2>
            <div className="w-16 h-0.5 bg-gradient-to-r from-primary-500 to-blue-500 mx-auto rounded-full mb-6" />
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
              A developer who builds in silence, led by faith and logic, not noise or vanity.
              Building meaningful solutions that bridge technical excellence with human-centered design.
            </p>
          </div>

          {/* Balanced Grid Layout */}
          <div className="space-y-8 lg:space-y-12">
            {/* Row 1: Two Equal Cards */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
              {/* Journey Card */}
              <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-gray-100 relative overflow-hidden group hover:shadow-xl transition-all duration-300 min-h-[320px] flex flex-col">
                <div className="absolute top-0 right-0 w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-bl from-primary-100/30 to-transparent rounded-full -translate-y-10 translate-x-10 sm:-translate-y-12 sm:translate-x-12" />
                <div className="relative z-10 flex-grow">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Lightbulb size={24} className="text-primary-700" />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">Journey</h3>
                  </div>
                  
                  <div className="space-y-4 text-gray-700 leading-relaxed">
                    <p className="text-sm sm:text-base">
                      From a quiet village in Bangladesh to the fast-moving digital ecosystem of India, 
                      I've walked a path defined by <strong>resourcefulness</strong>, <strong>faith</strong>, 
                      and a desire to build systems that actually serve people.
                    </p>
                    
                    <p className="text-sm sm:text-base">
                      I don't chase motivation. I chase meaning. Known as <strong>MD MILLAT</strong>, 
                      <strong>Mohd MILLAT</strong>, and <strong>codermillat</strong> in the developer community, 
                      I specialize in creating solutions that bridge technical capability with real-world impact.
                    </p>
                  </div>
                </div>
              </div>

              {/* Philosophy Card */}
              <div className="bg-gradient-to-br from-primary-600 to-primary-800 rounded-2xl p-6 sm:p-8 text-white shadow-lg relative overflow-hidden group hover:shadow-xl transition-all duration-300 min-h-[320px] flex flex-col">
                <div className="absolute top-0 right-0 w-24 h-24 sm:w-32 sm:h-32 bg-white/10 rounded-full -translate-y-12 translate-x-12 sm:-translate-y-16 sm:translate-x-16" />
                <div className="absolute bottom-0 left-0 w-20 h-20 sm:w-24 sm:h-24 bg-white/10 rounded-full translate-y-10 -translate-x-10 sm:translate-y-12 sm:-translate-x-12" />
                
                <div className="relative z-10 flex-grow">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Target size={24} className="text-white" />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-semibold">Philosophy</h3>
                  </div>
                  
                  <blockquote className="text-lg sm:text-xl italic mb-6 text-blue-100 font-light">
                    "I believe that code is not just logic—it's language. And sometimes, silence speaks the loudest."
                  </blockquote>
                  
                  <div className="grid grid-cols-1 gap-3">
                    {[
                      "Purpose over praise, clarity over clutter",
                      "Minimal, purpose-driven approach", 
                      "Emotionally grounded solutions",
                      "Faith and logic guide decisions"
                    ].map((principle, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-blue-300 rounded-full flex-shrink-0 mt-2" />
                        <p className="text-blue-100 text-sm sm:text-base">{principle}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Row 2: Location Card - Full Width */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-gray-100 relative overflow-hidden group hover:shadow-xl transition-all duration-300">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-center sm:text-left">
                <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <MapPin size={32} className="text-primary-700" />
                </div>
                <div className="flex-grow">
                  <h3 className="font-semibold text-gray-900 text-xl sm:text-2xl mb-2">Based in Greater Noida, India</h3>
                  <p className="text-base sm:text-lg text-gray-600 mb-4">From Bangladesh to India • Open to remote opportunities worldwide</p>
                  <div className="flex flex-wrap gap-3 justify-center sm:justify-start">
                    <span className="px-4 py-2 bg-primary-50 text-primary-700 rounded-full text-sm font-medium border border-primary-200">
                      Remote Ready
                    </span>
                    <span className="px-4 py-2 bg-green-50 text-green-700 rounded-full text-sm font-medium border border-green-200">
                      Available Now
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Row 3: Two Equal Cards */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
              {/* At a Glance */}
              <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-gray-100 min-h-[320px] flex flex-col">
                <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-8 text-center">At a Glance</h3>
                
                <div className="space-y-4 flex-grow">
                  {[
                    { icon: Code, label: "Full Stack Developer", color: "from-primary-500 to-primary-600" },
                    { icon: Zap, label: "Plugin Architect (WordPress/WooCommerce)", color: "from-green-500 to-green-600" },
                    { icon: Award, label: "Storytelling Creator", color: "from-purple-500 to-purple-600" },
                    { icon: Coffee, label: "SEO & ASO Strategist", color: "from-orange-500 to-orange-600" }
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-4 group">
                      <div className={`w-12 h-12 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform duration-300 flex-shrink-0`}>
                        <item.icon size={20} className="text-white" />
                      </div>
                      <span className="text-gray-700 font-medium text-sm sm:text-base">{item.label}</span>
                    </div>
                  ))}
                </div>
                
                <div className="mt-6 pt-6 border-t border-gray-200 text-center">
                  <p className="text-sm text-gray-600 italic">Emotionally silent. Technically loud.</p>
                </div>
              </div>

              {/* Core Strengths */}
              <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-gray-100 min-h-[320px] flex flex-col">
                <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-8 text-center">Core Strengths</h3>
                
                <div className="space-y-5 flex-grow">
                  <div className="flex items-start gap-3">
                    <div className="w-3 h-3 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1 text-sm sm:text-base">Custom WordPress & WooCommerce solutions</h4>
                      <p className="text-xs sm:text-sm text-gray-600">Plugin development from scratch</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1 text-sm sm:text-base">Mobile-first product development</h4>
                      <p className="text-xs sm:text-sm text-gray-600">PWA & GPS-based delivery apps</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-3 h-3 bg-purple-500 rounded-full mt-2 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1 text-sm sm:text-base">AI-assisted workflows</h4>
                      <p className="text-xs sm:text-sm text-gray-600">Cursor, Copilot, Gemini integration</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-3 h-3 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1 text-sm sm:text-base">Real-world problem solving</h4>
                      <p className="text-xs sm:text-sm text-gray-600">Under constraints (budget, bandwidth, rural limitations)</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Row 4: Currently Exploring - Full Width */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-6 sm:p-8 text-white shadow-lg relative overflow-hidden group hover:shadow-xl transition-all duration-300">
              <div className="absolute top-0 right-0 w-24 h-24 sm:w-32 sm:h-32 bg-white/5 rounded-full -translate-y-12 translate-x-12 sm:-translate-y-16 sm:translate-x-16" />
              <div className="absolute bottom-0 left-0 w-20 h-20 sm:w-24 sm:h-24 bg-white/5 rounded-full translate-y-10 -translate-x-10 sm:translate-y-12 sm:-translate-x-12" />
              
              <div className="relative z-10 text-center">
                <h3 className="text-xl sm:text-2xl font-semibold mb-4">Currently Exploring</h3>
                <p className="text-gray-300 mb-6 text-base sm:text-lg max-w-4xl mx-auto">
                  Expanding expertise in cutting-edge technologies to build the future of meaningful digital solutions
                </p>
                <div className="flex flex-wrap gap-3 justify-center">
                  {[
                    "AI/ML integration for local applications", 
                    "PWA & GPS-based delivery apps", 
                    "Voiceover + story-based content using ElevenLabs", 
                    "API-first architecture & automation systems"
                  ].map((tech, index) => (
                    <span key={index} className="px-3 sm:px-4 py-2 bg-white/10 rounded-full text-xs sm:text-sm font-medium backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-colors duration-300">
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