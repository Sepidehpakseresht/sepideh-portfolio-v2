import React from 'react';
import { motion as Motion} from 'framer-motion';
import { FaHeart } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="w-full overflow-x-hidden text-center py-6 text-gray-400 text-sm border-t border-glass-border bg-background">
      <Motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex items-center justify-center gap-2"
      >
        <span className="font-display text-primary font-bold">sepi.codes</span>
        <span className="text-primary">—</span>
        <span className="flex items-center gap-1">
          Made with <FaHeart className="text-red-500 text-xs" />
        </span>
        <span className="text-primary">—</span>
        <span>v2.0</span>
      </Motion.div>
    </footer>
  );
};

export default Footer;