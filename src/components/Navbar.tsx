  import React, { useState, useEffect } from 'react';
  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
  import { 
    faHome, 
    faInfoCircle, 
    faCog, 
    faBook, 
    faGraduationCap, 
    faBuilding, 
    faCalendarAlt, 
    faSearch,
    faChevronDown
  } from '@fortawesome/free-solid-svg-icons';
  import { Link, useLocation } from 'react-router-dom';
  import { motion, AnimatePresence } from 'framer-motion';

  interface NavItem {
    name: string;
    href?: string;
    icon: any;
    dropdown?: Array<{
      name: string;
      href: string;
    }>;
  }

  const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    const navItems: NavItem[] = [
      { name: 'Home', href: '/', icon: faHome },
      {
        name: 'About Us',
        icon: faInfoCircle,
        dropdown: [
          { name: 'History', href: '/history' },
          { name: 'Mission & Vision', href: '/mission-vision' },
        ],
      },
      {
        name: 'Services',
        icon: faCog,
        dropdown: [
          { name: 'Library Guide', href: '/library-guide' },
          { name: 'Library Services', href: '/library-services' },
        ],
      },
      {
        name: 'Resources',
        icon: faBook,
        dropdown: [
          { name: 'Books', href: '/books' },
          { name: 'Digital Resources', href: '/digital-resources' },
          { name: 'Research Guides', href: '/research-guides' },
        ],
      },
      {
        name: 'School Program',
        icon: faGraduationCap,
        dropdown: [
          { name: 'Bachelor of Elementary Education', href: '/beed' },
          { name: 'Bachelor of Science in Business Administration', href: '/bsba' },
          { name: 'Teacher Certificate Program', href: '/tcp' },
        ],
      },
      {
        name: 'Facilities',
        icon: faBuilding,
        dropdown: [
          { name: 'Library', href: '/library' },
          { name: 'Laboratories', href: '/labs' },
          { name: 'Sports Facilities', href: '/sports' },
        ],
      },
      { name: 'Archives', icon: faCalendarAlt, href: '/archives' },
      {
        name: 'OPAC',
        icon: faSearch,
        dropdown: [
          { name: 'Search Catalog', href: 'https://citlibrary-locate.netlify.app/' },
          { name: 'Reserve Books', href: '/reserve' },
          { name: 'User Guide', href: '/guide' },
        ],
      },
    ];

    useEffect(() => {
      const handleScroll = () => {
        setScrolled(window.scrollY > 20);
      };

      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
      setIsOpen(false);
      setActiveDropdown(null);
    }, [location]);

    const handleDropdownClick = (itemName: string) => {
      setActiveDropdown(activeDropdown === itemName ? null : itemName);
    };

    return (
      <header 
        className={`fixed w-full top-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-[#E4003A] shadow-lg' : 'bg-[#E4003A]'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            {/* Logo/Brand */}
              <Link to="/" className="flex items-center space-x-2">
                <img 
                  src="/CIT.png" 
                  alt="CIT Logo" 
                  className="h-8 w-8" 
                />
                <span className="text-xl font-bold text-white">CIT Library</span>
              </Link>


            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-red-600"
              aria-label="Toggle menu"
            >
              <motion.div
                animate={isOpen ? "open" : "closed"}
                className="w-6 h-6 flex flex-col justify-center items-center"
              >
                <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${
                  isOpen ? 'rotate-45 translate-y-1' : ''
                }`} />
                <span className={`block w-5 h-0.5 bg-white mt-1 transition-all duration-300 ${
                  isOpen ? '-rotate-45 -translate-y-0.5' : ''
                }`} />
              </motion.div>
            </button>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-1">
              {navItems.map((item) => (
                <div key={item.name} className="relative group">
                  {item.dropdown ? (
                    <div>
                      <button
                        onClick={() => handleDropdownClick(item.name)}
                        className="px-3 py-2 rounded-md text-sm font-medium text-white hover:text-gray-200 flex items-center space-x-1 transition-colors duration-200"
                      >
                        <FontAwesomeIcon icon={item.icon} className="w-4 h-4" />
                        <span>{item.name}</span>
                        <FontAwesomeIcon 
                          icon={faChevronDown} 
                          className={`w-3 h-3 transition-transform duration-200 ${
                            activeDropdown === item.name ? 'rotate-180' : ''
                          }`}
                        />
                      </button>
                      <AnimatePresence>
                        {activeDropdown === item.name && (
                          <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.2 }}
                            className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white"
                          >
                            <div className="py-1">
                              {item.dropdown.map((subItem) => (
                                <Link
                                  key={subItem.name}
                                  to={subItem.href}
                                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-red-100 hover:text-red-600"
                                >
                                  {subItem.name}
                                </Link>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      to={item.href || '#'}
                      className="px-3 py-2 rounded-md text-sm font-medium text-white hover:text-gray-200 flex items-center space-x-1 transition-colors duration-200"
                    >
                      <FontAwesomeIcon icon={item.icon} className="w-4 h-4" />
                      <span>{item.name}</span>
                    </Link>
                  )}
                </div>
              ))}
            </nav>
          </div>

          {/* Mobile Navigation */}
          <AnimatePresence>
            {isOpen && (
              <motion.nav
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.2 }}
                className="md:hidden bg-white border-t mt-2"
              >
                <div className="px-2 pt-2 pb-3 space-y-1">
                  {navItems.map((item) => (
                    <div key={item.name}>
                      {item.dropdown ? (
                        <div>
                          <button
                            onClick={() => handleDropdownClick(item.name)}
                            className="w-full px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-red-600 hover:bg-gray-50 flex items-center justify-between"
                          >
                            <div className="flex items-center space-x-2">
                              <FontAwesomeIcon icon={item.icon} className="w-4 h-4" />
                              <span>{item.name}</span>
                            </div>
                            <FontAwesomeIcon 
                              icon={faChevronDown} 
                              className={`w-3 h-3 transition-transform duration-200 ${
                                activeDropdown === item.name ? 'rotate-180' : ''
                              }`}
                            />
                          </button>
                          <AnimatePresence>
                            {activeDropdown === item.name && (
                              <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                                className="pl-6 space-y-1"
                              >
                                {item.dropdown.map((subItem) => (
                                  <Link
                                    key={subItem.name}
                                    to={subItem.href}
                                    className="block px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-red-600"
                                  >
                                    {subItem.name}
                                  </Link>
                                ))}
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      ) : (
                        <Link
                          to={item.href || '#'}
                          className="block px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-red-600"
                        >
                          <FontAwesomeIcon icon={item.icon} className="w-4 h-4 inline-block mr-2" />
                          {item.name}
                        </Link>
                      )}
                    </div>
                  ))}
                </div>
              </motion.nav>
            )}
          </AnimatePresence>
        </div>
      </header>
    );
  };

  export default Navbar;
