import React from 'react';
import { motion } from 'framer-motion';

export default function NewParadigm() {
  return (
    <section className="py-24 px-4 bg-dark-lighter">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Smart workflows that work while you <span className="gradient-text">sleep</span>
          </h2>
          <p className="text-xl text-gray-400">
            This is not just another set of tools - it's a complete transformation of how your business operates. 
            Smart workflows take over your repetitive tasks, running silently in the background while you focus on growth. 
            No more late nights updating spreadsheets or morning rushes to schedule content. 
            Your business finally works for you, not the other way around.
          </p>
        </motion.div>
      </div>
    </section>
  );
}