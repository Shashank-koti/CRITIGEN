import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Our Science', path: '/science' },
    { name: 'Infrastructure', path: '/infrastructure' },
    { name: 'Careers', path: '/careers' },
  ];

  const isDarkPage = location.pathname !== '/';

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
            CRITIGEN
          </Link>
        </div>

        {/* Desktop Menu - Center */}
        <div className="hidden lg:flex justify-center flex-shrink-0">
          <ul className={`flex space-x-8 text-sm font-medium ${scrolled || isDarkPage ? 'text-textSecondary' : 'text-background/90'}`}>
            {navLinks.map((link) => (
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
            <Link
              to=""
              className="bg-primary hover:bg-primary/90 text-background px-7 py-2.5 rounded-full shadow-md hover:shadow-lg hover:-translate-y-0.5 text-sm font-semibold transition-all duration-300"
            >
              Partner With Us
            </Link>
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
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-background shadow-lg py-4 px-6 flex flex-col space-y-4 border-b border-border">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="text-textPrimary hover:text-secondary text-lg font-medium transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/contact"
            className="bg-primary hover:bg-primary/90 text-background px-6 py-3 rounded-full text-center text-sm font-semibold mt-4 shadow-md transition-all duration-300"
            onClick={() => setMobileMenuOpen(false)}
          >
            Partner With Us
          </Link>
        </div>
      )}
    </motion.nav>
  );
};

export default Navbar;
