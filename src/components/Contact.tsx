import React from 'react';

const Contact: React.FC = () => {
  return (
    <section className="py-20 md:py-32 px-6 md:px-12 bg-beige-50">
      <div className="max-w-4xl mx-auto text-center">
        <div className="animate-slide-up">
          <h2 className="text-2xl md:text-3xl font-light text-charcoal-800 mb-12 tracking-tight">
            Want to build with purpose?
          </h2>
          
          <p className="text-lg text-charcoal-600 mb-8 font-light">
            Write to me.
          </p>
          
          <a 
            href="mailto:millat@example.com"
            className="inline-block text-xl md:text-2xl text-olive-600 font-mono hover:text-charcoal-800 transition-colors duration-300 border-b border-olive-300 hover:border-charcoal-800 pb-1"
          >
            millat@example.com
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;