import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Solutions', href: '/#solutions' },
    { name: 'Services', href: '/#services' },
    { name: 'Pricing', href: '/#pricing' },
    { name: 'Wall of Love', href: '/#wall-of-love' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/80 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-4 cursor-pointer group">
          <div className="relative">
            <div className="absolute inset-0 bg-pink-500/30 blur-2xl rounded-full group-hover:bg-pink-500/50 transition-colors duration-300"></div>
            <img src="/logo.png" alt="Maverin Logo" className="relative w-14 h-14 object-contain invert" />
          </div>
          <span className="text-2xl font-bold tracking-tight text-slate-800">
            Mave<span className="text-pink-500">rin</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-sm font-medium text-slate-600 hover:text-pink-500 transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contact" 
            className="text-sm font-medium text-slate-600 hover:text-pink-500 transition-colors"
          >
            Contact
          </a>
        </nav>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-slate-600"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="md:hidden absolute top-full left-0 right-0 bg-white shadow-xl py-4 flex flex-col items-center gap-4 border-t border-slate-100"
        >
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-medium text-slate-600"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contact" 
            onClick={() => setMobileMenuOpen(false)}
            className="text-base font-medium text-slate-600 hover:text-pink-500 transition-colors"
          >
            Contact
          </a>
        </motion.div>
      )}
    </header>
  );
};

export default Navbar;
