import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../ui/button';
import { Home, Info, Phone, GraduationCap } from 'lucide-react';

const Navbar = ({ isMenuOpen, setIsMenuOpen }) => {
  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div>
      {/* Navigation */}
      <nav className="bg-white shadow-sm fixed top-0 left-0 w-full z-[9000]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <Link to="/" className="flex-shrink-0 flex items-center">
                <img
                  src="renunciant_logo.png"
                  alt="Eduport Logo"
                  width={130}
                  height={35}
                  className="h-16 w-auto"
                />
              </Link>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8 items-center">
              {/* Home Button (Stay on Same Page) */}
              <button
                onClick={() => window.location.reload()}
                className="text-sm font-semibold leading-6 hover:bg-red-100 text-gray-900 hover:text-gray-700 px-3 py-2 rounded-lg transition-all duration-400 flex items-center space-x-2"
              >
                <Home className="h-5 w-5" />
                <span>Home</span>
              </button>

              {/* About Us (Scroll to Our Services) */}
              <button
                onClick={() => handleScroll('our-service')}
                className="text-sm font-semibold leading-6 hover:bg-red-100 text-gray-900 hover:text-gray-700 px-3 py-2 rounded-lg transition-all duration-400 flex items-center space-x-2"
              >
                <Info className="h-5 w-5" />
                <span>About Us</span>
              </button>

              {/* Internship (Open Google Form) */}
              <a
                href="https://forms.gle/MeNsF8NZyEG7TntW9"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold leading-6 hover:bg-red-100 text-gray-900 hover:text-gray-700 px-3 py-2 rounded-lg transition-all duration-400 flex items-center space-x-2"
              >
                <GraduationCap className="h-5 w-5" />
                <span>Internship</span>
              </a>

              {/* Contact (Scroll to Footer) */}
              <button
                onClick={() => handleScroll('footer')}
                className="text-sm font-semibold leading-6 hover:bg-red-100 text-gray-900 hover:text-gray-700 px-3 py-2 rounded-lg transition-all duration-400 flex items-center space-x-2"
              >
                <Phone className="h-5 w-5" />
                <span>Contact</span>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="-mr-2 flex items-center sm:hidden">
              <Button
                className="bg-slate-50"
                variant="ghost"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
                  />
                </svg>
              </Button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
