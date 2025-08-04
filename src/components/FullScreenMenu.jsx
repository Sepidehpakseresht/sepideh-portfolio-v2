import React, { useState } from 'react';
import { motion as Motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';

const FullScreenMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#works', label: 'Works' },
    { href: '#experience', label: 'Experience' },
    { href: '#contact', label: 'Contact' }
  ];

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="w-12 overflow-x-hidden h-12 rounded-full glass flex items-center justify-center text-primary hover:text-white hover:shadow-orange transition-all duration-300 touch-manipulation"
        aria-label="Open menu"
      >
        <FaBars className="text-lg" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <Motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 glass backdrop-blur-xl"
          >
            <div className="flex flex-col items-center justify-center h-[100vh] px-4 bg-[#0B0E13]">
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 md:top-6 md:right-6 w-12 h-12 rounded-full glass flex items-center justify-center text-primary hover:text-white hover:shadow-orange transition-all duration-300 touch-manipulation"
                aria-label="Close menu"
              >
                <FaTimes className="text-lg" />
              </button>

              <nav className="flex flex-col items-center gap-6 md:gap-8 w-full max-w-sm">
                {menuItems.map((item, index) => (
                  <Motion.a
                    key={item.label}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full text-center text-xl md:text-2xl font-display font-bold text-white hover:text-primary transition-colors duration-300 py-3 px-6 rounded-lg hover:bg-white/5 touch-manipulation"
                  >
                    {item.label}
                  </Motion.a>
                ))}
              </nav>

              {/* Mobile-specific close instruction */}
              <Motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="absolute bottom-8 text-center text-gray-400 text-sm px-4"
              >
                Tap outside or use the X button to close
              </Motion.p>
            </div>
          </Motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default FullScreenMenu;