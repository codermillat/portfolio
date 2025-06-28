import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Creative from './components/Creative';
import Skills from './components/Skills';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // SEO: Set document title dynamically
  useEffect(() => {
    document.title = "MD MILLAT HOSEN — Full Stack Developer & Creative Strategist | Portfolio";
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-inter overflow-x-hidden">
      {/* SEO: Hidden heading for screen readers and search engines */}
      <h1 className="sr-only">
        MD MILLAT HOSEN - Full Stack Developer, WordPress Expert, React Developer, Creative Strategist from Greater Noida, India
      </h1>
      
      <Navbar />
      <Hero scrollY={scrollY} />
      <About />
      <Experience />
      <Projects />
      <Creative />
      <Skills />
      <Resume />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;