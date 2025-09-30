import React, { useState, useCallback } from 'react';
import { Menu } from 'lucide-react';
import { Link } from 'react-scroll';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = useCallback((id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  }, []);

  return (
    <>
      <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 bg-black/40 backdrop-blur-lg rounded-full p-2 shadow-xl border border-gray-800 transition-all duration-300">
        <div className="flex justify-between items-center px-6 py-2">
          <Link
            to="hero"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="text-xl font-bold text-gray-50 hover:text-violet-400 transition cursor-pointer"
          >
            Kai.dev
          </Link>

          <nav className="hidden md:flex space-x-8">
            {['about', 'skills', 'projects', 'contact'].map((id) => (
              <Link
                key={id}
                to={id}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="text-gray-300 hover:text-violet-400 transition text-sm font-medium cursor-pointer capitalize"
              >
                {id}
              </Link>
            ))}
          </nav>

          <button
            className="md:hidden p-2 rounded-full text-gray-300 hover:bg-gray-800 transition"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </header>

      <div
        id="mobile-menu"
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="flex flex-col space-y-2 px-4 pb-4 border-b border-gray-800 bg-black/80">
          {['about', 'skills', 'projects', 'contact'].map((id) => (
            <Link
              key={id}
              to={id}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="py-2 text-gray-300 hover:text-violet-400 transition text-base font-medium cursor-pointer capitalize"
            >
              {id}
            </Link>
          ))}
        </nav>
      </div>
    </>
  );
};

export default Header;