import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb } from 'lucide-react';

export default function Approach() {
  return (
    <motion.div 
      className="mb-24"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <div className="border-l-2 border-primary-light/20 pl-8">
        <h2 className="text-4xl font-bold mb-8 flex items-center gap-4">
          <Lightbulb className="w-8 h-8 text-primary-light" />
          My Approach
        </h2>
        
        <div className="bg-dark-lighter p-8 rounded-lg border border-gray-800">
          <p className="text-gray-300 leading-relaxed">
            I believe that automation should be accessible to everyone. I take complex processes and turn them 
            into simple, reliable automated workflows. No unnecessary complexity, no overcomplicated solutions - 
            just practical automation that works.
          </p>
        </div>
      </div>
    </motion.div>
  );
}