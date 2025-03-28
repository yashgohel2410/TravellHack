import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Compass, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg relative z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <Compass className="h-8 w-8 text-blue-600" />
              </motion.div>
              <span className="text-xl font-bold text-gray-900">The TravellHack</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/blog">Blog</NavLink>
            <NavLink to="/team">Our Team</NavLink>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 hover:text-gray-900 focus:outline-none"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t"
          >
            <div className="px-4 py-2 space-y-1">
              <MobileNavLink to="/" onClick={() => setIsMenuOpen(false)}>
                Home
              </MobileNavLink>
              <MobileNavLink to="/blog" onClick={() => setIsMenuOpen(false)}>
                Blog
              </MobileNavLink>
              <MobileNavLink to="/team" onClick={() => setIsMenuOpen(false)}>
                Our Team
              </MobileNavLink>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const NavLink = ({ to, children }: { to: string; children: React.ReactNode }) => (
  <Link
    to={to}
    className="relative text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium group"
  >
    {children}
    <motion.div
      className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600 origin-left"
      initial={{ scaleX: 0 }}
      whileHover={{ scaleX: 1 }}
      transition={{ duration: 0.3 }}
    />
  </Link>
);

const MobileNavLink = ({ to, children, onClick }: { to: string; children: React.ReactNode; onClick: () => void }) => (
  <Link
    to={to}
    onClick={onClick}
    className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50"
  >
    {children}
  </Link>
);

export default Navbar;