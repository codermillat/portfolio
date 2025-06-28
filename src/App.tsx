import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white text-charcoal-800 font-inter">
      <Header />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Resume />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;