import React from 'react';
import { motion } from 'framer-motion';

export default function CheckmarkAnimation() {
  const pathVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: { 
      pathLength: 1, 
      opacity: 1,
      transition: { duration: 0.8, ease: "easeInOut" }
    }
  };

  const circleVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1,
      transition: { duration: 0.3 }
    }
  };

  return (
    <motion.svg
      width="100"
      height="100"
      viewBox="0 0 100 100"
      initial="hidden"
      animate="visible"
      className="text-primary-light"
    >
      <motion.circle
        cx="50"
        cy="50"
        r="45"
        fill="none"
        stroke="currentColor"
        strokeWidth="4"
        variants={circleVariants}
      />
      <motion.path
        d="M30 50 L45 65 L70 35"
        fill="none"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
        variants={pathVariants}
      />
    </motion.svg>
  );
}