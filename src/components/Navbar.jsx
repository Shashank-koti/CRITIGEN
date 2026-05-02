import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import Logo from "../assets/Logo1.png"

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);
  const location = useLocation();
  const dropdownRef = useRef(null);
  const dropdownTimeout = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setAboutDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setAboutDropdownOpen(false);
    setMobileAboutOpen(false);
  }, [location.pathname]);

  const handleDropdownEnter = () => {
    clearTimeout(dropdownTimeout.current);
    setAboutDropdownOpen(true);
  };

  const handleDropdownLeave = () => {
    dropdownTimeout.current = setTimeout(() => {
      setAboutDropdownOpen(false);
    }, 150);
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Our Science', path: '/science' },
    { name: 'Infrastructure', path: '/infrastructure' },
    { name: 'Careers', path: '/careers' },
    { name: "Contact", path: "/contact" }
  ];    

  const aboutSubLinks = [
    { name: 'Critigen Pharma', path: '/about/critigen-pharma' },
    { name: 'Our Vision & Mission', path: '/about/vision-mission' },
  ];

  const isDarkPage = location.pathname !== '/';
  const isAboutPage = location.pathname.startsWith('/about');

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed w-full z-50 transition-all duration-300 ${scrolled || isDarkPage ? 'bg-background/90 backdrop-blur-md shadow-sm border-b border-border py-4' : 'bg-transparent py-6'
        }`}
    >
      <div className=" mx-auto px-6 flex justify-between items-center w-full">
        {/* Logo Section - Start */}
        <div className="flex-1 flex justify-start">
          <Link to="/" className={`${scrolled || isDarkPage ? 'text-textPrimary' : 'text-background'} text-2xl font-bold tracking-tight transition-colors`}>
            <img src={Logo} alt="" className='w-32 h-16' />
          </Link>
        </div>

        {/* Desktop Menu - Center */}
        <div className="hidden lg:flex justify-center flex-shrink-0">
          <ul className={`flex items-center space-x-8 text-sm font-medium ${scrolled || isDarkPage ? 'text-textSecondary' : 'text-background/90'}`}>

            {/* About Us Dropdown */}
            <li
              ref={dropdownRef}
              className="relative"
              onMouseEnter={handleDropdownEnter}
              onMouseLeave={handleDropdownLeave}
            >
              <button
                className={`flex items-center gap-1 hover:text-primary transition-colors relative group py-2 px-0 m-0 bg-transparent border-none font-medium text-sm font-[inherit] cursor-pointer leading-normal ${isAboutPage ? 'text-primary' : ''}`}
                onClick={() => setAboutDropdownOpen(!aboutDropdownOpen)}
              >
                About Us
                <ChevronDown
                  size={12}
                  className={`transition-transform duration-300 ${aboutDropdownOpen ? 'rotate-180' : ''}`}
                />
                <span className={`absolute bottom-0 left-0 h-0.5 bg-primary transition-all duration-300 ${isAboutPage ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
              </button>

              <AnimatePresence>
                {aboutDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.96 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[200px] bg-background rounded-lg shadow-[0_8px_24px_rgba(0,0,0,0.1)] border border-border overflow-hidden"
                  >
                    {/* Dropdown arrow */}
                    <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-2.5 h-2.5 bg-background border-l border-t border-border rotate-45"></div>

                    <div className="relative py-1">
                      {aboutSubLinks.map((sub, idx) => (
                        <Link
                          key={sub.name}
                          to={sub.path}
                          className={`block px-4 py-2 text-xs transition-all duration-200 hover:bg-primary/5 hover:text-primary ${location.pathname === sub.path
                            ? 'text-primary bg-primary/5 font-medium'
                            : 'text-textSecondary'
                            } ${idx === 0 ? '' : 'border-t border-border/50'}`}
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </li>

            {/* Other Nav Links */}
            {navLinks.filter(l => l.name !== 'Home').map((link) => (
              <li key={link.name}>
                <Link
                  to={link.path}
                  className="hover:text-primary transition-colors relative group py-2"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* CTA & Mobile Menu - End */}
        <div className="flex-1 flex justify-end items-center">
          <div className="hidden lg:block">
            <a
              href="https://wa.me/918522801254"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary hover:bg-primary/90 text-background px-7 py-2.5 rounded-full shadow-md hover:shadow-lg hover:-translate-y-0.5 text-sm font-semibold transition-all duration-300"
            >
              Chat With Us
            </a>
          </div>

          <button
            className={`lg:hidden focus:outline-none ${scrolled || isDarkPage ? 'text-textPrimary' : 'text-background'}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden absolute top-full left-0 w-full bg-background shadow-lg border-b border-border overflow-hidden"
          >
            <div className="py-4 px-6 flex flex-col space-y-1">
              <Link to="/" className="text-textPrimary hover:text-primary text-lg font-medium transition-colors py-2.5" onClick={() => setMobileMenuOpen(false)}>
                Home
              </Link>

              {/* Mobile About Us Accordion */}
              <div>
                <button
                  className={`w-full flex items-center justify-between text-lg font-medium transition-colors py-2.5 ${isAboutPage ? 'text-primary' : 'text-textPrimary hover:text-primary'}`}
                  onClick={() => setMobileAboutOpen(!mobileAboutOpen)}
                >
                  About Us
                  <ChevronDown size={18} className={`transition-transform duration-300 ${mobileAboutOpen ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {mobileAboutOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <div className="pl-4 pb-2 space-y-1 border-l-2 border-primary/20 ml-2">
                        {aboutSubLinks.map((sub) => (
                          <Link
                            key={sub.name}
                            to={sub.path}
                            className={`block py-2 text-base transition-colors ${location.pathname === sub.path ? 'text-primary font-medium' : 'text-textSecondary hover:text-primary'}`}
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {sub.name}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {navLinks.filter(l => l.name !== 'Home').map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="text-textPrimary hover:text-primary text-lg font-medium transition-colors py-2.5"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}

              <a
                href="https://wa.me/918522801254"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary hover:bg-primary/90 text-background px-6 py-3 rounded-full text-center text-sm font-semibold mt-4 shadow-md transition-all duration-300"
                onClick={() => setMobileMenuOpen(false)}
              >
                Chat With Us
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
