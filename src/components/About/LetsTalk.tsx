import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { MessageSquare } from 'lucide-react';

export default function LetsTalk() {
  return (
    <motion.div 
      className="text-center relative"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <div className="absolute inset-0 bg-gradient-primary opacity-5 blur-3xl -z-10" />
      
      <h2 className="text-4xl font-bold mb-8 flex items-center justify-center gap-4">
        <MessageSquare className="w-8 h-8 text-primary-light" />
        Let's Talk
      </h2>
      
      <p className="text-gray-300 leading-relaxed mb-12 max-w-2xl mx-auto">
        If you're spending too much time on repetitive tasks, let's chat about how we can automate them. 
        Your time is better spent growing your business, not managing manual processes.
      </p>
      
      <Link 
        to="/contact" 
        className="btn-primary inline-block"
      >
        Let's Automate Your Work
      </Link>
    </motion.div>
  );
}