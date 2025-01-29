import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

interface CTAButtonsProps {
  className?: string;
}

export default function CTAButtons({ className = '' }: CTAButtonsProps) {
  return (
    <motion.div 
      className={`flex flex-col sm:flex-row justify-center gap-4 ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <Link to="/contact" className="btn-primary">Get your custom automation</Link>
      <Link to="/about" className="btn-secondary">Learn more</Link>
    </motion.div>
  );
}