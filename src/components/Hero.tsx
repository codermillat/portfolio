import React from 'react';
import { Download, ArrowDown, Code } from 'lucide-react';

interface HeroProps {
  scrollY: number;
}

const Hero: React.FC<HeroProps> = ({ scrollY }) => {
  const scrollToProjects = () => {
    const element = document.querySelector('#projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-hero-gradient animate-gradient bg-[length:400%_400%]">
        {/* Floating Particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-white/20 rounded-full animate-particles"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 20}s`,
                animationDuration: `${20 + Math.random() * 10}s`,
              }}
            />
          ))}
        </div>
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary-900/20 to-primary-950/40" />
      </div>

      {/* Content - Added proper top padding to avoid navbar overlap */}
      <div 
        className="relative z-10 text-center px-6 max-w-4xl mx-auto pt-20 pb-8"
        style={{ transform: `translateY(${scrollY * 0.3}px)` }}
      >
        <div className="animate-fade-in">
          {/* Logo/Name */}
          <div className="mb-8">
            <h1 className="font-serif font-semibold text-5xl md:text-7xl text-white mb-4 tracking-tight">
              <span className="text-blue-300">MD</span> Millat
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto rounded-full" />
          </div>

          {/* Tagline */}
          <p className="text-xl md:text-2xl text-blue-100 mb-8 font-light leading-relaxed">
            I build systems in silence and stories in code.
          </p>

          {/* Philosophy */}
          <p className="text-lg text-blue-200/80 mb-12 font-light italic max-w-2xl mx-auto">
            "I don't chase spotlight or motivation. I build for clarity, not applause."
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <button className="group bg-white text-primary-900 px-8 py-4 rounded-lg font-medium hover:bg-blue-50 transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              <Download size={20} />
              View Resume
              <div className="absolute inset-0 bg-white/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
            
            <button 
              onClick={scrollToProjects}
              className="group border-2 border-white/30 text-white px-8 py-4 rounded-lg font-medium hover:bg-white/10 transition-all duration-300 flex items-center gap-2 backdrop-blur-sm"
            >
              <Code size={20} />
              See My Work
            </button>
          </div>

          {/* Scroll Indicator */}
          <div className="animate-bounce">
            <ArrowDown size={24} className="text-white/60 mx-auto" />
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-10 left-10 w-20 h-20 border border-white/20 rounded-full animate-float hidden lg:block" />
      <div className="absolute top-1/4 right-10 w-16 h-16 border border-white/20 rounded-lg animate-float hidden lg:block" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/3 left-1/4 w-12 h-12 border border-white/20 rounded-full animate-float hidden lg:block" style={{ animationDelay: '4s' }} />
    </section>
  );
};

export default Hero;