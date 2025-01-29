import React from 'react';
import { motion } from 'framer-motion';

export default function BeliefsSection() {
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
            "That's just how business works" is <span className="gradient-text">costing you money</span>
          </h2>
          <p className="text-xl text-gray-400">
            Many business owners accept manual work as a necessary evil. They think automation is too complex or expensive. 
            But every hour spent on repetitive tasks is an hour not spent growing your business. 
            The real cost isn't just time - it's missed opportunities.
          </p>
        </motion.div>
      </div>
    </section>
  );
}