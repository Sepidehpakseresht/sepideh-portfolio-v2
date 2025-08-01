import React, { useState, useEffect } from 'react';
import { motion as Motion} from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import FullScreenMenu from '../FullScreenMenu';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Motion.header
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass backdrop-blur-xl' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-3 md:py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-3"
          >
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
              <span className="text-white font-display font-bold text-lg">S</span>
            </div>
            {/* <span className="text-xl font-display font-bold text-white">
              Sepideh
            </span> */}
          </Motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-16">
            {[
              { href: '#about', label: 'About' },
              { href: '#skills', label: 'Skills' },
              { href: '#works', label: 'Works' },
              { href: '#experience', label: 'Experience' },
              { href: '#contact', label: 'Contact' }
            ].map((item, index) => (
              <Motion.a
                key={item.label}
                href={item.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -2 }}
                className="text-gray-300 hover:text-white transition-colors duration-300 font-medium relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </Motion.a>
            ))}
          </nav>

          {/* Social Links */}
          {/* <div className="hidden md:flex items-center gap-4">
            {[
              { icon: FaGithub, href: "https://github.com/Sepidehpakseresht", label: "GitHub" },
              { icon: FaLinkedin, href: "https://www.linkedin.com/in/sepideh-pakseresht-1b3967239", label: "LinkedIn" },
              { icon: FaEnvelope, href: "mailto:sepiidehpakseresht@gmail.com", label: "Email" }
            ].map((social, index) => (
              <Motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                whileHover={{ scale: 1.2, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="w-10 h-10 rounded-full glass flex items-center justify-center text-primary hover:text-white hover:shadow-orange transition-all duration-300"
              >
                <social.icon className="text-lg" />
              </Motion.a>
            ))}
          </div> */}

          {/* Mobile Menu */}
          <div className="lg:hidden">
            <FullScreenMenu />
          </div>
        </div>
      </div>
    </Motion.header>
  );
}