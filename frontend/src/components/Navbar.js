import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from './ui/button';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Committee', href: '#committee' },
  { name: 'Program', href: '#program' },
  { name: 'Speakers', href: '#speakers' },
  { name: 'Registration', href: '#registration' },
  { name: 'Accommodation', href: '#accommodation' },
  { name: 'Sponsors', href: '#sponsors' },
  { name: 'Venue', href: '#venue' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      setIsScrolled(currentScrollY > 50);
      
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: 0 }}
        animate={{ y: isVisible ? 0 : -100 }}
        transition={{ duration: 0.3 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'glass shadow-lg' 
            : 'bg-transparent'
        }`}
        data-testid="navbar"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <motion.a
              href="#home"
              onClick={(e) => { e.preventDefault(); scrollToSection('#home'); }}
              className="flex items-center gap-3"
              whileHover={{ scale: 1.02 }}
              data-testid="nav-logo"
            >
              <div className="w-12 h-12 bg-primary-900 rounded-xl flex items-center justify-center">
                <span className="text-secondary-500 font-heading font-bold text-xl">OSI</span>
              </div>
              <div className="hidden sm:block">
                <p className="font-heading font-bold text-primary-900 text-lg leading-tight">3RD OSI</p>
                <p className="text-xs text-slate-600 font-body">KOLKATA 2026</p>
              </div>
            </motion.a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.slice(0, 6).map((link) => (
                <motion.button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className="px-3 py-2 text-sm font-body font-medium text-slate-700 hover:text-primary-900 transition-colors rounded-lg hover:bg-primary-50"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  data-testid={`nav-${link.name.toLowerCase()}`}
                >
                  {link.name}
                </motion.button>
              ))}
              
              {/* More dropdown */}
              <div className="relative group">
                <button className="px-3 py-2 text-sm font-body font-medium text-slate-700 hover:text-primary-900 transition-colors rounded-lg hover:bg-primary-50 flex items-center gap-1">
                  More <ChevronDown className="w-4 h-4" />
                </button>
                <div className="absolute top-full right-0 mt-2 w-48 bg-white rounded-xl shadow-lg border border-slate-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  {navLinks.slice(6).map((link) => (
                    <button
                      key={link.name}
                      onClick={() => scrollToSection(link.href)}
                      className="block w-full text-left px-4 py-3 text-sm font-body text-slate-700 hover:bg-primary-50 hover:text-primary-900 first:rounded-t-xl last:rounded-b-xl"
                      data-testid={`nav-${link.name.toLowerCase()}`}
                    >
                      {link.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Register Button */}
            <div className="hidden lg:flex items-center gap-4">
              <Button
                onClick={() => scrollToSection('#registration')}
                className="bg-secondary-500 hover:bg-secondary-900 text-primary-900 font-body font-semibold px-6 py-2 rounded-full btn-glow transition-all duration-300"
                data-testid="nav-register-btn"
              >
                Register Now
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-primary-900 hover:bg-primary-50"
              data-testid="mobile-menu-btn"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div className="absolute inset-0 bg-black/50" onClick={() => setIsMobileMenuOpen(false)} />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25 }}
              className="absolute right-0 top-0 h-full w-80 bg-white shadow-2xl"
            >
              <div className="p-6 pt-24">
                <div className="space-y-2">
                  {navLinks.map((link, index) => (
                    <motion.button
                      key={link.name}
                      onClick={() => scrollToSection(link.href)}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                      className="block w-full text-left px-4 py-3 text-lg font-body font-medium text-slate-700 hover:bg-primary-50 hover:text-primary-900 rounded-xl transition-colors"
                      data-testid={`mobile-nav-${link.name.toLowerCase()}`}
                    >
                      {link.name}
                    </motion.button>
                  ))}
                </div>
                <div className="mt-8">
                  <Button
                    onClick={() => scrollToSection('#registration')}
                    className="w-full bg-secondary-500 hover:bg-secondary-900 text-primary-900 font-body font-semibold py-4 rounded-full"
                    data-testid="mobile-register-btn"
                  >
                    Register Now
                  </Button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
