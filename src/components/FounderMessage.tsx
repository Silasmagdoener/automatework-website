import React from 'react';
import { motion } from 'framer-motion';

export default function FounderMessage() {
  return (
    <section className="py-24 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <blockquote className="text-2xl font-light text-gray-300 italic">
            "I spent years doing repetitive tasks manually until I realized there had to be a better way. That's why I created systems that do the heavy lifting automatically."
          </blockquote>
          <div className="mt-8">
            <img 
              src="/silas.png" 
              alt="Silas Schuettel" 
              className="w-24 h-24 rounded-full mx-auto mb-4 object-cover border-2 border-primary-light"
            />
            <div className="font-medium">Silas Schuettel</div>
            <div className="text-gray-400">Founder, AutomateWork</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}