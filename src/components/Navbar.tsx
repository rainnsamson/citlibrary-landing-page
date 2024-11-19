import React, { useState } from 'react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState<{ [key: string]: boolean }>({});

  const navItems = [
    { name: 'Home', href: '#' },
    {
      name: 'About Us',
      dropdown: [
        { name: 'History', href: '#' },
        { name: 'Mission & Vision', href: '#' },
        { name: 'Leadership', href: '#' },
      ],
    },
    {
      name: 'Services',
      dropdown: [
        { name: 'Library Services', href: '#' },
        { name: 'Guidance Counseling', href: '#' },
      ],
    },
    { 
      name: 'Resources', 
      dropdown: [
        { name: 'Books', href: '#' },
        { name: 'Digital Resources', href: '#' },
        { name: 'Research Guides', href: '#' },
      ] 
    },
    {
      name: 'School Program',
      dropdown: [
        { name: 'Elementary', href: '#' },
        { name: 'High School', href: '#' },
        { name: 'Special Programs', href: '#' },
      ],
    },
    { 
      name: 'Facilities', 
      dropdown: [
        { name: 'Library', href: '#' },
        { name: 'Laboratories', href: '#' },
        { name: 'Sports Facilities', href: '#' },
      ] 
    },
    { 
      name: 'Activities', 
      dropdown: [
        { name: 'Clubs & Societies', href: '#' },
        { name: 'Sports Events', href: '#' },
        { name: 'Workshops', href: '#' },
      ] 
    },
    { 
      name: 'OPAC (Online Public Access Catalog)', 
      dropdown: [
        { name: 'Search Catalog', href: '#' },
        { name: 'Reserve Books', href: '#' },
        { name: 'User Guide', href: '#' },
      ] 
    },
  ];

  const toggleDropdown = (itemName: string) => {
    setDropdownOpen((prev) => ({
      ...prev,
      [itemName]: !prev[itemName],
    }));
  };

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
            {navItems.map((item) =>
              item.dropdown ? (
                <li key={item.name} className="relative group">
                  <button
                    onClick={() => toggleDropdown(item.name)}
                    className="text-white hover:text-gray-200 transition-colors duration-200 text-sm font-medium block py-1 border-b-2 border-transparent hover:border-white flex items-center"
                  >
                    {item.name}
                    <svg
                      className="ml-2 w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {/* Dropdown menu */}
                  <ul
                    className={`absolute left-0 top-full mt-1 bg-white shadow-lg rounded-md py-2 ${
                      dropdownOpen[item.name] ? 'block' : 'hidden group-hover:block'
                    }`}
                  >
                    {item.dropdown.map((subItem) => (
                      <li key={subItem.name}>
                        <a
                          href={subItem.href}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-red-600 hover:text-white"
                        >
                          {subItem.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>
              ) : (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-white hover:text-gray-200 transition-colors duration-200 text-sm font-medium block py-1 border-b-2 border-transparent hover:border-white"
                  >
                    {item.name}
                  </a>
                </li>
              )
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
