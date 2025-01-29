import React from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

export default function WhyIDoThis() {
  return (
    <motion.div 
      className="mb-24"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <div className="border-l-2 border-primary-light/20 pl-8">
        <h2 className="text-4xl font-bold mb-8 flex items-center gap-4">
          <Heart className="w-8 h-8 text-primary-light" />
          Why I Do This
        </h2>
        
        <div className="bg-gradient-to-br from-dark-lighter to-dark p-8 rounded-lg border border-gray-800">
          <p className="text-gray-300 leading-relaxed">
            Nothing makes me happier than hearing a client say "I wish I had done this sooner." When I see how much 
            time and energy people save through automation, it reminds me why I started this journey.
          </p>
        </div>
      </div>
    </motion.div>
  );
}