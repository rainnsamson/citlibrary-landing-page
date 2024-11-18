import React, { useState } from 'react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navItems = [
    'Home',
    'Services',
    'Resources',
    'School Program',
    'Facilities',
    'Activities',
    'OPAC (Online Public Access Catalog',
  ];

  return (
    <header className="bg-white shadow-lg fixed w-full top-0 z-50">
      <div className="container mx-auto px-4">
        {/* Mobile menu button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-red-600 hover:text-red-700"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isOpen ? (
              <path d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Navigation */}
        <nav
          className={`bg-red-600 transform transition-transform duration-300 ease-in-out ${
            isOpen ? 'block' : 'hidden md:block'
          }`}
        >
          <ul className="flex flex-col md:flex-row md:justify-center md:items-center py-3 px-4 space-y-2 md:space-y-0 md:space-x-6">
            {navItems.map((item) => (
              <li key={item}>
                <a
                  href="#"
                  className="text-white hover:text-gray-200 transition-colors duration-200 text-sm font-medium block py-1 border-b-2 border-transparent hover:border-white"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
