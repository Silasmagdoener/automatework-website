import React from 'react';
import { motion } from 'framer-motion';
import { Bot, Calendar, Receipt, Clock } from 'lucide-react';

export default function DesiredOutcome() {
  const outcomes = [
    {
      icon: Bot,
      title: 'Your CRM runs itself',
      description: 'Client data updates automatically, follow-ups are scheduled without effort, and leads are properly managed without you lifting a finger.'
    },
    {
      icon: Calendar,
      title: 'Content flows effortlessly',
      description: 'Your content calendar fills itself, posts are scheduled automatically, and your channels stay active without daily intervention.'
    },
    {
      icon: Receipt,
      title: 'Finances handle themselves',
      description: 'Invoices generate automatically, expenses are tracked precisely, and reports create themselves with perfect accuracy.'
    },
    {
      icon: Clock,
      title: 'Time freedom becomes reality',
      description: 'You finally have time to focus on strategy, growth, and the parts of your business you actually enjoy.'
    }
  ];

  return (
    <section className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Imagine your business running <span className="gradient-text">smoothly</span> without your constant attention
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {outcomes.map((outcome, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-dark-lighter p-8 rounded-xl border border-gray-800"
            >
              <div className="flex items-center gap-4 mb-4">
                <outcome.icon className="w-8 h-8 text-primary-light" />
                <h3 className="text-2xl font-semibold">{outcome.title}</h3>
              </div>
              <p className="text-gray-400 leading-relaxed">{outcome.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}