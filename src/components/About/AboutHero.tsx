import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function AboutHero() {
  return (
    <div className="max-w-4xl mx-auto mb-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center relative"
      >
        <Link to="/contact">
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="relative inline-block mb-8 cursor-pointer"
          >
            <div className="absolute inset-0 bg-gradient-primary opacity-20 rounded-full blur-xl" />
            <img 
              src="/silas.png" 
              alt="Silas Schüttel" 
              className="w-40 h-40 rounded-full mx-auto object-cover border-2 border-primary-light relative z-10"
            />
            <motion.div 
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              className="absolute inset-0 flex items-center justify-center bg-dark/80 rounded-full z-20 text-primary-light font-medium"
            >
              Let's automate your work
            </motion.div>
          </motion.div>
        </Link>
        <motion.h1 
          className="text-5xl md:text-6xl font-bold mb-6"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          Hi, I'm <span className="gradient-text">Silas!</span>
        </motion.h1>
        <motion.p 
          className="text-xl text-gray-300 max-w-2xl mx-auto"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
        >
          I help business owners save time by automating their repetitive tasks. After spending years watching people 
          waste countless hours on manual work, I decided to do something about it.
        </motion.p>
      </motion.div>
    </div>
  );
}