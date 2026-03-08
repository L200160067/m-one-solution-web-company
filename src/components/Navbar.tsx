import { useState, useEffect } from 'react';
import { Menu, X, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Link, useLocation } from 'react-router-dom';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isHomePage = location.pathname === '/';

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Portofolio', href: '/portfolio' },
    { name: 'Contact', href: '/contact' },
    { name: 'News', href: '/blog' },
    { name: 'Privacy Policy', href: '/#privacy' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || !isHomePage
          ? 'bg-slate-950/90 backdrop-blur-md shadow-sm py-4 border-b border-white/5'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex-shrink-0 flex items-center gap-2">
            <img 
              src="https://storage.googleapis.com/a1aa/image/Vqg83s2E822lH6O9zR2n7T60b_q39R2R2n7T60b_q39R2R2n.jpg" 
              alt="M-One Solution Logo" 
              className="h-12 w-auto object-contain mix-blend-lighten"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="text-sm font-medium text-slate-300 hover:text-blue-400 transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/contact"
              className="hidden lg:flex items-center gap-2 px-5 py-2.5 bg-blue-600 text-white text-sm font-medium rounded-full hover:bg-blue-700 transition-colors shadow-lg shadow-blue-600/20"
            >
              Contact Us
              <ChevronRight className="w-4 h-4" />
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-slate-300 hover:text-white transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-slate-900 shadow-xl border-t border-white/10 md:hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="block px-3 py-3 text-base font-medium text-slate-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4 px-3">
                <Link
                  to="/contact"
                  className="w-full flex items-center justify-center gap-2 px-5 py-3 bg-blue-600 text-white text-base font-medium rounded-xl hover:bg-blue-700 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
