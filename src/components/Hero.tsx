import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-6 md:px-12 relative overflow-hidden">
      <div className="max-w-4xl mx-auto text-center">
        <div className="animate-fade-in">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-light text-charcoal-800 mb-8 leading-tight tracking-tight">
            Building quietly.
            <br />
            <span className="text-olive-500">Thinking deeply.</span>
          </h1>
          
          <div className="w-24 h-[1px] bg-charcoal-300 mx-auto mb-8"></div>
          
          <p className="text-lg md:text-xl text-olive-600 font-mono font-light tracking-wide">
            Developer & Creative Strategist
          </p>
        </div>
      </div>
      
      {/* Subtle geometric accent */}
      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 w-1 h-8 bg-charcoal-200 opacity-60"></div>
    </section>
  );
};

export default Hero;