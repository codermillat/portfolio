import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Creative', href: '#creative' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200/50' 
        : 'bg-white/10 backdrop-blur-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo - SEO Optimized */}
          <div className="flex-shrink-0 min-w-0">
            <button
              onClick={scrollToTop}
              className={`font-serif font-semibold text-base sm:text-lg lg:text-xl transition-colors duration-300 truncate ${
                isScrolled 
                  ? 'text-primary-900' 
                  : 'text-white drop-shadow-lg'
              }`}
              aria-label="MD MILLAT HOSEN - Go to top"
            >
              <span className={isScrolled ? 'text-primary-700' : 'text-blue-300'}>MD</span> MILLAT
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1 flex-shrink-0">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className={`px-3 py-2 text-sm font-medium transition-all duration-300 relative group rounded-lg whitespace-nowrap ${
                  isScrolled 
                    ? 'text-gray-700 hover:text-primary-700 hover:bg-primary-50' 
                    : 'text-white/90 hover:text-white hover:bg-white/10 drop-shadow-sm'
                }`}
                aria-label={`Navigate to ${item.name} section`}
              >
                {item.name}
                <span className={`absolute bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 transition-all duration-300 group-hover:w-6 ${
                  isScrolled ? 'bg-primary-700' : 'bg-white'
                }`}></span>
              </button>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex-shrink-0">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 rounded-lg transition-all duration-300 ${
                isScrolled 
                  ? 'text-gray-700 hover:text-primary-700 hover:bg-primary-50' 
                  : 'text-white hover:text-blue-200 hover:bg-white/10'
              }`}
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`lg:hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen 
            ? 'max-h-96 opacity-100' 
            : 'max-h-0 opacity-0 overflow-hidden'
        }`}>
          <div className="bg-white/95 backdrop-blur-md border-t border-gray-200/50 rounded-b-2xl shadow-lg mx-2 mb-2">
            <div className="px-4 py-3 space-y-1">
              {navItems.map((item, index) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="w-full text-left px-4 py-3 text-base font-medium text-gray-700 hover:text-primary-700 hover:bg-primary-50 rounded-xl transition-all duration-200 flex items-center justify-between group"
                  style={{ animationDelay: `${index * 50}ms` }}
                  aria-label={`Navigate to ${item.name} section`}
                >
                  <span>{item.name}</span>
                  <div className="w-2 h-2 bg-primary-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;