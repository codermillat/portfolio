import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import CreativeWork from './components/CreativeWork';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white text-charcoal-800 font-inter">
      <Hero />
      <About />
      <Projects />
      <Skills />
      <CreativeWork />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;