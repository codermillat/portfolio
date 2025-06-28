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

  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'MD_MILLAT_HOSEN_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-hero-gradient animate-gradient bg-[length:400%_400%]">
        {/* Floating Particles */}
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

      {/* Content */}
      <div 
        className="relative z-10 text-center px-4 sm:px-6 max-w-5xl mx-auto pt-20 pb-8"
        style={{ transform: `translateY(${scrollY * 0.2}px)` }}
      >
        <div className="animate-fade-in">
          {/* Main Heading - SEO Optimized */}
          <div className="mb-6 lg:mb-8">
            <h1 className="font-serif font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white mb-3 tracking-tight">
              <span className="text-blue-300">MD MILLAT</span> HOSEN
            </h1>
            <div className="w-12 sm:w-16 lg:w-24 h-0.5 lg:h-1 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto rounded-full" />
          </div>

          {/* Professional Title */}
          <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl text-blue-100 mb-6 lg:mb-8 font-light leading-relaxed">
            Full Stack Developer & Creative Strategist
          </h2>

          {/* Philosophy Quote */}
          <p className="text-sm sm:text-base lg:text-lg text-blue-200/80 mb-8 lg:mb-12 font-light italic max-w-3xl mx-auto">
            "I build systems in silence and stories in code — for clarity, not applause."
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 lg:gap-4 justify-center items-center mb-12 lg:mb-16">
            <button 
              onClick={handleDownloadResume}
              className="group bg-white text-primary-900 px-6 lg:px-8 py-3 lg:py-4 rounded-xl font-medium hover:bg-blue-50 transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl transform hover:-translate-y-1 w-full sm:w-auto"
              aria-label="Download MD MILLAT HOSEN Resume"
            >
              <Download size={16} className="sm:w-5 sm:h-5" />
              View Resume
            </button>
            
            <button 
              onClick={scrollToProjects}
              className="group border-2 border-white/30 text-white px-6 lg:px-8 py-3 lg:py-4 rounded-xl font-medium hover:bg-white/10 transition-all duration-300 flex items-center gap-2 backdrop-blur-sm w-full sm:w-auto"
              aria-label="View MD MILLAT HOSEN Projects"
            >
              <Code size={16} className="sm:w-5 sm:h-5" />
              See My Work
            </button>
          </div>

          {/* Scroll Indicator */}
          <div className="animate-bounce">
            <ArrowDown size={16} className="sm:w-5 sm:h-5 text-white/60 mx-auto" />
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-10 left-10 w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 border border-white/20 rounded-full animate-float hidden lg:block" />
      <div className="absolute top-1/4 right-10 w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 border border-white/20 rounded-lg animate-float hidden lg:block" style={{ animationDelay: '2s' }} />
    </section>
  );
};

export default Hero;