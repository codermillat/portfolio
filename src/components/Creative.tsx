import React, { useEffect, useRef, useState } from 'react';
import { Play, Heart, Eye, Quote } from 'lucide-react';

const Creative: React.FC = () => {
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
    <section id="creative" ref={sectionRef} className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gray-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-primary-950 to-gray-900" />
      <div className="absolute top-1/4 left-1/4 w-48 h-48 sm:w-64 sm:h-64 lg:w-96 lg:h-96 bg-primary-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-32 h-32 sm:w-48 sm:h-48 lg:w-72 lg:h-72 bg-blue-500/10 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className={`transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          {/* Section Header */}
          <div className="text-center mb-12 lg:mb-20">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-serif font-semibold text-white mb-4">
              Storytelling in Silence
            </h2>
            <div className="w-16 h-0.5 bg-gradient-to-r from-primary-400 to-blue-400 mx-auto rounded-full mb-6" />
            <p className="text-base sm:text-lg text-gray-300 max-w-3xl mx-auto px-4">
              Beyond code lies the art of expression — where emotions find their voice through visual poetry 
              and meaningful narratives that speak to the human experience.
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            {/* Featured Creative Work */}
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-700/50 overflow-hidden group hover:border-primary-500/50 transition-all duration-500">
              <div className="flex flex-col lg:flex-row">
                {/* Visual Preview */}
                <div className="lg:w-2/5 relative">
                  <div className="aspect-video lg:aspect-square bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-900/20 to-transparent" />
                    <div className="relative z-10 text-center">
                      <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-white/20 transition-all duration-300">
                        <Play size={20} className="sm:w-6 sm:h-6 text-white ml-1" />
                      </div>
                      <p className="text-white/80 text-xs sm:text-sm font-mono">Visual Poem Preview</p>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="lg:w-3/5 p-6 sm:p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <Heart size={16} className="sm:w-5 sm:h-5 text-red-400 flex-shrink-0" />
                    <h3 className="text-lg sm:text-xl font-semibold text-white">
                      A Visual Poem of Hidden Sadness
                    </h3>
                  </div>
                  
                  <div className="space-y-4 text-gray-300 leading-relaxed text-sm sm:text-base">
                    <p>
                      Sometimes the most profound truths live in the spaces between words. 
                      This piece explores the quiet anguish that exists beneath the surface of everyday interactions.
                    </p>
                    
                    <p>
                      The weight of unspoken thoughts, the burden of carrying others' expectations, 
                      the delicate art of maintaining composure while everything inside whispers otherwise.
                    </p>

                    {/* Quote */}
                    <blockquote className="border-l-4 border-primary-500 pl-4 py-3 bg-gray-800/30 rounded-r-lg">
                      <Quote size={12} className="sm:w-4 sm:h-4 text-primary-400 mb-2" />
                      <p className="italic text-primary-200 font-light text-xs sm:text-sm">
                        "In silence, we find the courage to speak truth."
                      </p>
                    </blockquote>
                  </div>

                  {/* Engagement Stats */}
                  <div className="flex flex-col sm:flex-row sm:items-center gap-4 mt-6 pt-4 border-t border-gray-700">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-2 text-gray-400">
                        <Eye size={12} className="sm:w-4 sm:h-4" />
                        <span className="text-xs">2.3K views</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-400">
                        <Heart size={12} className="sm:w-4 sm:h-4" />
                        <span className="text-xs">156 hearts</span>
                      </div>
                    </div>
                    <button className="sm:ml-auto px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-lg transition-colors duration-300 flex items-center gap-2 text-sm">
                      <Play size={14} />
                      Watch Film
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Philosophy Section */}
            <div className="mt-12 lg:mt-20 text-center">
              <div className="max-w-4xl mx-auto">
                <h3 className="text-base sm:text-lg font-serif text-white mb-6">Creative Philosophy</h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="w-10 h-10 bg-primary-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Heart size={14} className="sm:w-4 sm:h-4 text-primary-400" />
                    </div>
                    <h4 className="text-white font-medium mb-2 text-sm">Emotion First</h4>
                    <p className="text-gray-400 text-xs">Every piece begins with feeling, not function</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-10 h-10 bg-primary-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Eye size={14} className="sm:w-4 sm:h-4 text-primary-400" />
                    </div>
                    <h4 className="text-white font-medium mb-2 text-sm">Silent Stories</h4>
                    <p className="text-gray-400 text-xs">The most powerful narratives need no words</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-10 h-10 bg-primary-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Quote size={14} className="sm:w-4 sm:h-4 text-primary-400" />
                    </div>
                    <h4 className="text-white font-medium mb-2 text-sm">Authentic Voice</h4>
                    <p className="text-gray-400 text-xs">Truth resonates deeper than perfection</p>
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

export default Creative;