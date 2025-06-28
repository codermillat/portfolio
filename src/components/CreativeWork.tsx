import React from 'react';
import { ExternalLink } from 'lucide-react';

const CreativeWork: React.FC = () => {
  return (
    <section className="py-20 md:py-32 px-6 md:px-12">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-light text-charcoal-800 mb-16 tracking-tight">
          Creative Expression
        </h2>
        
        <div className="animate-slide-up">
          <div className="border border-charcoal-200 p-8 md:p-12 bg-beige-50 hover:bg-white transition-colors duration-300 group">
            <h3 className="text-xl font-medium text-charcoal-800 mb-4 group-hover:text-olive-600 transition-colors duration-300">
              A Visual Poem of Hidden Sadness
            </h3>
            
            <p className="text-charcoal-600 mb-6 font-light leading-relaxed">
              Sometimes the most profound truths live in the spaces between words. 
              This piece explores the quiet anguish that exists beneath the surface of everyday interactions — 
              the weight of unspoken thoughts, the burden of carrying others' expectations, 
              the delicate art of maintaining composure while everything inside whispers otherwise.
            </p>
            
            <div className="flex items-center text-olive-600 font-mono text-sm group-hover:text-charcoal-800 transition-colors duration-300">
              <span className="mr-2">View Complete Work</span>
              <ExternalLink size={16} />
            </div>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-olive-600 font-light italic">
            "In silence, we find the courage to speak truth."
          </p>
        </div>
      </div>
    </section>
  );
};

export default CreativeWork;