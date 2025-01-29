import React from 'react';
import { motion } from 'framer-motion';
import { History, Building2, Briefcase } from 'lucide-react';

const milestones = [
  {
    icon: Building2,
    title: "Roland Berger Experience",
    description: "Worked with Europe's #1 consultancy, implementing automation solutions"
  },
  {
    icon: Briefcase,
    title: "SaaS & Fintech",
    description: "Developed solutions for various SaaS companies in fintech and insurance"
  },
  {
    icon: History,
    title: "4+ Years in Tech",
    description: "Dedicated to finding and implementing automation opportunities"
  }
];

export default function Journey() {
  return (
    <motion.div 
      className="mb-24 relative"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <div className="absolute inset-0 bg-gradient-primary opacity-5 blur-3xl -z-10" />
      
      <div className="border-l-2 border-primary-light/20 pl-8">
        <h2 className="text-4xl font-bold mb-8 flex items-center gap-4">
          <History className="w-8 h-8 text-primary-light" />
          My Journey
        </h2>
        
        <p className="text-gray-300 leading-relaxed mb-12">
          I've spent over 4 years in the digital tech space, identifying and solving automation challenges 
          across different industries. During this time, I noticed a pattern: businesses everywhere were 
          losing precious time to tasks that could be automated.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {milestones.map((milestone, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
              className="bg-dark-lighter p-6 rounded-lg border border-gray-800 transition-transform duration-300"
            >
              <milestone.icon className="w-8 h-8 text-primary-light mb-4" />
              <h3 className="text-xl font-semibold mb-2">{milestone.title}</h3>
              <p className="text-gray-400">{milestone.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}