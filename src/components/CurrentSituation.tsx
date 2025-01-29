import React from 'react';
import { motion } from 'framer-motion';
import { Clock, FileText, Calculator, Target } from 'lucide-react';
import CTAButtons from './CTAButtons';

const situations = [
  {
    icon: Clock,
    title: 'Hours lost on CRM updates',
    description: 'You spend countless hours manually updating client information, scheduling follow-ups, and managing leads. Every minute spent on these tasks is time you could use to grow your business.'
  },
  {
    icon: FileText,
    title: 'Content creation feels like a second job',
    description: 'Creating, scheduling, and publishing content across channels takes up too much of your time. You know you need to stay active, but the manual work is overwhelming.'
  },
  {
    icon: Calculator,
    title: 'Financial tasks pile up',
    description: 'Manual invoicing, expense tracking, and reporting are tedious and prone to errors. You\'re stuck doing calculations when you should be focusing on strategy.'
  },
  {
    icon: Target,
    title: 'No time for what matters',
    description: 'Administrative tasks eat up your day, leaving little time for important work that actually moves your business forward.'
  }
];

export default function CurrentSituation() {
  return (
    <section className="py-24 px-4 bg-dark-lighter">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Your current workflow is <span className="gradient-text">costing you</span> precious time
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Many business owners accept manual work as a necessary evil. The real cost isn't just time - it's missed opportunities.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {situations.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-dark p-8 rounded-xl border border-gray-800"
            >
              <item.icon className="w-10 h-10 text-primary-light mb-4" />
              <h3 className="text-2xl font-semibold mb-4">{item.title}</h3>
              <p className="text-gray-400 leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>

        <CTAButtons />
      </div>
    </section>
  );
}