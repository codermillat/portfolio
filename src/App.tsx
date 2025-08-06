import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Creative from './components/Creative';
import Skills from './components/Skills';
import Resume from './components/Resume';
import SimpleBlog from './components/blog/SimpleBlog';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BlogPage from './pages/BlogPage';
import BlogPostPage from './pages/BlogPostPage';
import BlogStatus from './components/BlogStatus';
import SEODashboard from './components/SEODashboard';
import { trackPageView } from './utils/analytics';
import { getHomepageSocialImage, updateSocialMetaTags } from './utils/socialImages';

// Component to track route changes
function RouteTracker() {
  const location = useLocation();
  
  useEffect(() => {
    trackPageView(location.pathname, document.title);
  }, [location]);
  
  return null;
}

function App() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // SEO: Set document title and meta description dynamically
  useEffect(() => {
    // Generate dynamic social image for homepage
    const socialImageUrl = getHomepageSocialImage();
    
    // Update all social meta tags for homepage
    updateSocialMetaTags(
      "MD MILLAT HOSEN — Full Stack Developer & AI Researcher",
      "Expert Full Stack Developer & AI Researcher specializing in WordPress, React, Node.js, and machine learning. Building meaningful solutions with excellence.",
      socialImageUrl,
      "https://www.millat.tech/"
    );
    
    // Add enhanced structured data for better search engine understanding
    const addStructuredData = () => {
      // Remove any existing structured data
      const existingScript = document.querySelector('script[type="application/ld+json"]');
      if (existingScript) {
        existingScript.remove();
      }

      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.text = JSON.stringify({
        "@context": "https://schema.org",
        "@type": ["Person", "WebPage"],
        "name": "MD MILLAT HOSEN",
        "givenName": "MD MILLAT",
        "familyName": "HOSEN",
        "jobTitle": "Full Stack Developer & AI Researcher",
        "description": "Expert Full Stack Developer & AI Researcher specializing in WordPress, React, Node.js, and machine learning applications",
        "url": "https://www.millat.tech/",
        "image": socialImageUrl,
        "sameAs": [
          "https://twitter.com/codermillat",
          "https://linkedin.com/in/mdmillathosen",
          "https://github.com/codermillat"
        ],
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Greater Noida",
          "addressRegion": "Uttar Pradesh",
          "addressCountry": "India"
        },
        "alumniOf": {
          "@type": "EducationalOrganization",
          "name": "Galgotias University"
        },
        "knowsAbout": [
          "Full Stack Development",
          "WordPress Development",
          "React.js",
          "Node.js",
          "Machine Learning",
          "Educational Technology",
          "AI Research"
        ],
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": "https://www.millat.tech/"
        }
      });
      document.head.appendChild(script);
    };
    
    addStructuredData();
  }, []);

  return (
    <Router>
      <RouteTracker />
      <main className="min-h-screen bg-gray-50 text-gray-900 font-inter overflow-x-hidden">
        <Routes>
          <Route path="/" element={
            <>
              {/* SEO: Hidden heading for screen readers and search engines */}
              <h1 className="sr-only">
                MD MILLAT HOSEN - Full Stack Developer, WordPress Expert, React Developer, Creative Strategist from Greater Noida, India
              </h1>
              
              {/* SEO: Additional hidden content for search engines */}
              <div className="sr-only">
                <p>MD MILLAT HOSEN is a Full Stack Developer and Creative Strategist based in Greater Noida, India. Specializing in WordPress development, React applications, Node.js backend development, and mobile app development. Expert in WooCommerce, Progressive Web Apps, and Android development.</p>
                <p>Services include: WordPress Development, React Development, Node.js Development, Mobile App Development, WooCommerce Development, PWA Development, SEO Optimization, UI/UX Design</p>
                <p>Technologies: PHP, JavaScript, React, Node.js, WordPress, WooCommerce, Android, Firebase, MySQL, REST APIs, Tailwind CSS, Git, Docker</p>
              </div>
              
              <Navbar />
              <Hero scrollY={scrollY} />
              <About />
              <Experience />
              <Projects />
              <Creative />
              <Skills />
              <Resume />
              <SimpleBlog />
              <Contact />
              <Footer />
            </>
          } />
                                <Route path="/blog" element={<BlogPage />} />
                      <Route path="/blog/:slug" element={<BlogPostPage />} />
                      <Route path="/blog-status" element={<BlogStatus />} />
                      <Route path="/seo-dashboard" element={<SEODashboard />} />
                      <Route path="/sitemap" element={
                        <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                          <div className="text-center">
                            <h1 className="text-2xl font-bold text-gray-800 mb-4">HTML Sitemap</h1>
                            <p className="text-gray-600 mb-6">Redirecting to the HTML sitemap...</p>
                            <a 
                              href="/sitemap.html" 
                              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
                            >
                              View Sitemap
                            </a>
                          </div>
                        </div>
                      } />
        </Routes>
      </main>
    </Router>
  );
}

export default App;