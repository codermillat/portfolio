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
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="creative" ref={sectionRef} className="py-20 lg:py-32 px-6 lg:px-8 bg-gray-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-primary-950 to-gray-900" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className={`transition-all duration-1000 ${isVisible ? 'animate-slide-up opacity-100' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-serif font-semibold text-white mb-4">
              Storytelling in Silence
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Beyond code lies the art of expression — where emotions find their voice through visual poetry
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {/* Featured Creative Work */}
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-700/50 overflow-hidden group hover:border-primary-500/50 transition-all duration-500">
              <div className="lg:flex">
                {/* Visual Preview */}
                <div className="lg:w-2/5 relative">
                  <div className="aspect-video lg:aspect-square bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center relative overflow-hidden">
                    {/* Placeholder for video/image */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-900/20 to-transparent" />
                    <div className="relative z-10 text-center">
                      <div className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-white/20 transition-all duration-300">
                        <Play size={32} className="text-white ml-1" />
                      </div>
                      <p className="text-white/80 text-sm font-mono">Visual Poem Preview</p>
                    </div>
                    
                    {/* Floating Elements */}
                    <div className="absolute top-4 left-4 w-8 h-8 border border-white/20 rounded-full animate-float" />
                    <div className="absolute bottom-6 right-6 w-6 h-6 border border-white/20 rounded-lg animate-float" style={{ animationDelay: '2s' }} />
                  </div>
                </div>

                {/* Content */}
                <div className="lg:w-3/5 p-8 lg:p-12">
                  <div className="flex items-center gap-3 mb-6">
                    <Heart size={20} className="text-red-400" />
                    <h3 className="text-2xl font-semibold text-white">
                      A Visual Poem of Hidden Sadness
                    </h3>
                  </div>
                  
                  <div className="space-y-6 text-gray-300 leading-relaxed">
                    <p>
                      Sometimes the most profound truths live in the spaces between words. 
                      This piece explores the quiet anguish that exists beneath the surface of everyday interactions.
                    </p>
                    
                    <p>
                      The weight of unspoken thoughts, the burden of carrying others' expectations, 
                      the delicate art of maintaining composure while everything inside whispers otherwise.
                    </p>

                    {/* Quote */}
                    <blockquote className="border-l-4 border-primary-500 pl-6 py-4 bg-gray-800/30 rounded-r-lg">
                      <Quote size={16} className="text-primary-400 mb-2" />
                      <p className="italic text-primary-200 font-light">
                        "In silence, we find the courage to speak truth."
                      </p>
                    </blockquote>
                  </div>

                  {/* Engagement Stats */}
                  <div className="flex items-center gap-6 mt-8 pt-6 border-t border-gray-700">
                    <div className="flex items-center gap-2 text-gray-400">
                      <Eye size={16} />
                      <span className="text-sm">2.3K views</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-400">
                      <Heart size={16} />
                      <span className="text-sm">156 hearts</span>
                    </div>
                    <button className="ml-auto px-6 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-lg transition-colors duration-300 flex items-center gap-2">
                      <Play size={16} />
                      Watch Film
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Philosophy Section */}
            <div className="mt-16 text-center">
              <div className="max-w-3xl mx-auto">
                <h3 className="text-xl font-serif text-white mb-6">Creative Philosophy</h3>
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-primary-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Heart size={20} className="text-primary-400" />
                    </div>
                    <h4 className="text-white font-medium mb-2">Emotion First</h4>
                    <p className="text-gray-400 text-sm">Every piece begins with feeling, not function</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-12 h-12 bg-primary-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Eye size={20} className="text-primary-400" />
                    </div>
                    <h4 className="text-white font-medium mb-2">Silent Stories</h4>
                    <p className="text-gray-400 text-sm">The most powerful narratives need no words</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-12 h-12 bg-primary-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Quote size={20} className="text-primary-400" />
                    </div>
                    <h4 className="text-white font-medium mb-2">Authentic Voice</h4>
                    <p className="text-gray-400 text-sm">Truth resonates deeper than perfection</p>
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