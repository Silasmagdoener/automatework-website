import React from 'react';
import { motion } from 'framer-motion';
import { Cog, CheckCircle, Zap } from 'lucide-react';

const achievements = [
  {
    icon: Zap,
    text: "Created automated lead generation systems for B2B companies"
  },
  {
    icon: Cog,
    text: "Built project management systems at Roland Berger that saved teams hours every week"
  },
  {
    icon: CheckCircle,
    text: "Developed custom automation tools that helped generate over €100K in revenue for an e-commerce business"
  }
];

export default function WhatIDo() {
  return (
    <motion.div 
      className="mb-24"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <div className="border-l-2 border-primary-light/20 pl-8">
        <h2 className="text-4xl font-bold mb-8 flex items-center gap-4">
          <Cog className="w-8 h-8 text-primary-light" />
          What I Do
        </h2>
        
        <p className="text-gray-300 leading-relaxed mb-12">
          I build smart automation systems that handle the heavy lifting for you. Whether it's managing your CRM, 
          streamlining your content creation, or automating your financial processes - I create custom solutions 
          that give you back your time.
        </p>

        <h3 className="text-2xl font-bold mb-8">Notable Achievements</h3>
        <div className="space-y-6">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="flex items-start gap-3 py-1.5 sm:py-2"
              whileHover={{ x: 8 }}
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
                className="w-6 h-6 sm:w-8 sm:h-8 rounded-lg bg-dark-lighter flex items-center justify-center flex-shrink-0"
              >
                <achievement.icon className="w-3 h-3 sm:w-4 sm:h-4 text-primary-light" />
              </motion.div>
              <p className="text-gray-300 leading-relaxed">{achievement.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}