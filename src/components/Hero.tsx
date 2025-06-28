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
      {/* Optimized Animated Background */}
      <div className="absolute inset-0 bg-hero-gradient animate-gradient bg-[length:400%_400%]">
        {/* Reduced Floating Particles for mobile performance */}
        <div className="absolute inset-0 hidden lg:block">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 lg:w-2 lg:h-2 bg-white/20 rounded-full animate-particles"
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

      {/* Content - Optimized spacing and typography */}
      <div 
        className="relative z-10 text-center px-4 max-w-4xl mx-auto pt-16 pb-8"
        style={{ transform: `translateY(${scrollY * 0.2}px)` }}
      >
        <div className="animate-fade-in">
          {/* Logo/Name - Improved typography */}
          <div className="mb-6 lg:mb-8">
            <h1 className="font-serif font-semibold text-4xl md:text-5xl lg:text-6xl text-white mb-3 tracking-tight">
              <span className="text-blue-300">MD</span> Millat
            </h1>
            <div className="w-16 lg:w-24 h-0.5 lg:h-1 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto rounded-full" />
          </div>

          {/* Tagline - Improved spacing */}
          <p className="text-lg md:text-xl lg:text-2xl text-blue-100 mb-6 lg:mb-8 font-light leading-relaxed">
            I build systems in silence and stories in code.
          </p>

          {/* Philosophy - Compact */}
          <p className="text-base lg:text-lg text-blue-200/80 mb-8 lg:mb-12 font-light italic max-w-2xl mx-auto">
            "I don't chase spotlight or motivation. I build for clarity, not applause."
          </p>

          {/* CTA Buttons - Improved mobile layout */}
          <div className="flex flex-col sm:flex-row gap-3 lg:gap-4 justify-center items-center mb-12 lg:mb-16">
            <button className="group bg-white text-primary-900 px-6 lg:px-8 py-3 lg:py-4 rounded-lg font-medium hover:bg-blue-50 transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl transform hover:-translate-y-1 w-full sm:w-auto">
              <Download size={18} />
              View Resume
            </button>
            
            <button 
              onClick={scrollToProjects}
              className="group border-2 border-white/30 text-white px-6 lg:px-8 py-3 lg:py-4 rounded-lg font-medium hover:bg-white/10 transition-all duration-300 flex items-center gap-2 backdrop-blur-sm w-full sm:w-auto"
            >
              <Code size={18} />
              See My Work
            </button>
          </div>

          {/* Scroll Indicator */}
          <div className="animate-bounce">
            <ArrowDown size={20} className="text-white/60 mx-auto" />
          </div>
        </div>
      </div>

      {/* Decorative Elements - Hidden on mobile for performance */}
      <div className="absolute bottom-10 left-10 w-16 h-16 lg:w-20 lg:h-20 border border-white/20 rounded-full animate-float hidden lg:block" />
      <div className="absolute top-1/4 right-10 w-12 h-12 lg:w-16 lg:h-16 border border-white/20 rounded-lg animate-float hidden lg:block" style={{ animationDelay: '2s' }} />
    </section>
  );
};

export default Hero;