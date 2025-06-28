import React from 'react';
import { MapPin } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section className="py-16 md:py-20 px-6 md:px-12 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-light text-charcoal-800 mb-8 tracking-tight">
          About
        </h2>
        
        <div className="space-y-6">
          <p className="text-lg text-charcoal-700 leading-relaxed font-light">
            Computer Science student at Sharda University with hands-on experience in full-stack development, 
            WordPress ecosystems, and mobile applications. I specialize in creating efficient, user-centered 
            solutions that bridge technical capability with business objectives.
          </p>
          
          <p className="text-lg text-charcoal-700 leading-relaxed font-light">
            My approach combines systematic problem-solving with creative strategy, whether building custom 
            plugins, optimizing user experiences, or developing scalable web applications.
          </p>
          
          <div className="flex items-center gap-2 text-olive-600 pt-4">
            <MapPin size={18} />
            <span className="font-medium">Greater Noida, India</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;