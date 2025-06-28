import React from 'react';

const About: React.FC = () => {
  return (
    <section className="py-20 md:py-32 px-6 md:px-12 bg-beige-50">
      <div className="max-w-4xl mx-auto">
        <div className="animate-slide-up">
          <h2 className="text-2xl md:text-3xl font-light text-charcoal-800 mb-12 tracking-tight">
            About
          </h2>
          
          <div className="space-y-8 text-lg md:text-xl leading-relaxed text-charcoal-700">
            <p className="font-light">
              I build with clarity, not motivation. I seek no spotlight, only function.
            </p>
            
            <p className="font-light">
              In a world obsessed with speed and noise, I choose deliberate action. 
              Every line of code serves a purpose. Every design decision carries weight. 
              Every project reflects the quiet confidence that comes from deep understanding.
            </p>
            
            <p className="font-light">
              I work at the intersection of technology and human experience, 
              crafting solutions that feel inevitable — as if they were always meant to exist.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;