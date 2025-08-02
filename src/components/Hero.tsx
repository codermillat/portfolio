import React, { useState, useEffect } from 'react';
import { Download, ArrowDown, Code, Sparkles, Globe, Smartphone } from 'lucide-react';
import { trackButtonClick, trackDownload } from '../utils/analytics';

interface HeroProps {
  scrollY: number;
}

const Hero: React.FC<HeroProps> = ({ scrollY }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToProjects = () => {
    trackButtonClick('See My Work', 'Hero Section');
    const element = document.querySelector('#projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleDownloadResume = () => {
    trackDownload('MD_MILLAT_HOSEN_Resume.pdf');
    trackButtonClick('View Resume', 'Hero Section');
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'MD_MILLAT_HOSEN_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Enhanced Animated Background */}
      <div className="absolute inset-0">
        {/* Animated Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.1)_1px,transparent_1px)] bg-[size:50px_50px] animate-pulse" />
        
        {/* Floating Particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 sm:w-2 sm:h-2 bg-blue-400/30 rounded-full animate-particles"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 20}s`,
                animationDuration: `${20 + Math.random() * 10}s`,
              }}
            />
          ))}
        </div>
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/50 to-slate-900/80" />
      </div>

      {/* Content */}
      <div 
        className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto pt-24 sm:pt-28 lg:pt-32 pb-8"
        style={{ transform: `translateY(${scrollY * 0.1}px)` }}
      >
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 bg-blue-500/20 backdrop-blur-sm border border-blue-400/30 text-blue-200 px-4 py-2 rounded-full text-sm font-medium mb-8 animate-pulse">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-ping" />
            Available for new opportunities
          </div>

          {/* Main Heading - Enhanced SEO */}
          <div className="mb-8 lg:mb-12">
            <h1 className="font-serif font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-white mb-4 tracking-tight leading-tight">
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-blue-600 bg-clip-text text-transparent">
                MD MILLAT
              </span>
              <br />
              <span className="text-white">HOSEN</span>
            </h1>
            <div className="w-16 sm:w-20 lg:w-32 h-1 bg-gradient-to-r from-blue-400 via-purple-400 to-blue-600 mx-auto rounded-full shadow-lg" />
          </div>

          {/* Professional Title with Icons */}
          <div className="mb-6 lg:mb-8">
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-blue-100 mb-4 font-light leading-relaxed">
              Full Stack Developer & Creative Strategist
            </h2>
            <div className="flex justify-center items-center gap-4 text-blue-300/60">
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4" />
                <span className="text-sm">Web Development</span>
              </div>
              <div className="w-1 h-1 bg-blue-400/60 rounded-full" />
              <div className="flex items-center gap-2">
                <Smartphone className="w-4 h-4" />
                <span className="text-sm">Mobile Apps</span>
              </div>
              <div className="w-1 h-1 bg-blue-400/60 rounded-full" />
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4" />
                <span className="text-sm">Creative Strategy</span>
              </div>
            </div>
          </div>

          {/* Enhanced Philosophy Quote */}
          <div className="mb-10 lg:mb-16">
            <p className="text-base sm:text-lg lg:text-xl text-blue-200/90 font-light italic max-w-4xl mx-auto leading-relaxed">
              "I build systems in silence and stories in code — for clarity, not applause."
            </p>
            <p className="text-sm sm:text-base text-blue-300/70 mt-2">
              Based in Greater Noida, India • Available Worldwide
            </p>
          </div>

          {/* Enhanced CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 lg:gap-6 justify-center items-center mb-12 lg:mb-16">
            <button 
              onClick={handleDownloadResume}
              className="group bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 lg:px-10 py-4 lg:py-5 rounded-2xl font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 flex items-center gap-3 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 w-full sm:w-auto text-base lg:text-lg"
              aria-label="Download MD MILLAT HOSEN Resume"
            >
              <Download size={20} className="group-hover:animate-bounce" />
              View Resume
            </button>
            
            <button 
              onClick={scrollToProjects}
              className="group border-2 border-blue-400/50 text-blue-200 px-8 lg:px-10 py-4 lg:py-5 rounded-2xl font-semibold hover:bg-blue-400/10 hover:border-blue-400 transition-all duration-300 flex items-center gap-3 backdrop-blur-sm w-full sm:w-auto text-base lg:text-lg"
              aria-label="View MD MILLAT HOSEN Projects"
            >
              <Code size={20} className="group-hover:rotate-12 transition-transform duration-300" />
              See My Work
            </button>
          </div>

          {/* Enhanced Scroll Indicator */}
          <div className="animate-bounce">
            <div className="flex flex-col items-center gap-2 text-blue-300/60">
              <span className="text-sm font-medium">Scroll to explore</span>
              <ArrowDown size={20} className="animate-pulse" />
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Decorative Elements */}
      <div className="absolute bottom-8 left-8 w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 border border-blue-400/30 rounded-full animate-float" />
      <div className="absolute top-1/4 right-8 w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 border border-purple-400/30 rounded-lg animate-float" style={{ animationDelay: '2s' }} />
      <div className="absolute bottom-1/4 right-1/4 w-8 h-8 sm:w-12 sm:h-12 border border-blue-300/20 rounded-full animate-float" style={{ animationDelay: '4s' }} />
    </section>
  );
};

export default Hero;