import React from 'react';
import { Download, FileText } from 'lucide-react';

const Resume: React.FC = () => {
  return (
    <section className="py-16 md:py-20 px-6 md:px-12 bg-gray-50">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-light text-charcoal-800 mb-8 tracking-tight">
          Resume
        </h2>
        
        <div className="bg-white border border-gray-200 p-8 md:p-12 max-w-2xl mx-auto">
          <div className="flex items-center justify-center mb-6">
            <FileText size={48} className="text-olive-600" />
          </div>
          
          <h3 className="text-xl font-medium text-charcoal-800 mb-4">
            Complete Professional Resume
          </h3>
          
          <p className="text-charcoal-600 font-light mb-8 leading-relaxed">
            Download my comprehensive resume with detailed experience, education, 
            projects, and technical skills in a professionally formatted PDF.
          </p>
          
          <div className="space-y-4">
            <button className="inline-flex items-center gap-2 px-6 py-3 bg-charcoal-800 text-white font-medium hover:bg-charcoal-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-charcoal-500 focus:ring-offset-2">
              <Download size={16} />
              Download PDF Resume
            </button>
            
            <p className="text-sm text-charcoal-500">
              Last updated: January 2025
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;