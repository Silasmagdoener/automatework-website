import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Bot, Zap } from 'lucide-react';
import BenefitsList from './BenefitsList';
import CTAButtons from './CTAButtons';

export default function Hero() {
  return (
    <>
      <section className="min-h-screen pt-20 md:pt-28 px-4 pb-24 flex flex-col justify-center">
        <div className="max-w-7xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 px-2">
              Stop wasting time on <span className="gradient-text">repetitive tasks</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-8 px-2">
              Custom automation that streamlines your processes and saves you time, 
              so you can grow your business
            </p>

            <div className="mb-12">
              <BenefitsList />
            </div>
            
            <CTAButtons />
          </motion.div>
        </div>
      </section>

      <section className="py-12 md:py-24 px-4 bg-dark-lighter">
        <div className="max-w-7xl mx-auto">
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 max-w-4xl mx-auto">
            {[
              {
                icon: Clock,
                title: 'Save Hours Daily',
                description: 'Automate repetitive tasks and focus on what matters'
              },
              {
                icon: Bot,
                title: 'Smart Workflows',
                description: 'Let automation handle your CRM, content, and finances'
              },
              {
                icon: Zap,
                title: 'Zero Errors',
                description: 'Eliminate human errors in your business processes'
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 * index }}
                className="bg-dark p-4 rounded-xl border border-gray-800"
              >
                <div className="flex items-center gap-3 mb-2">
                  <feature.icon className="w-6 h-6 text-primary-light" />
                  <h3 className="text-lg font-semibold">{feature.title}</h3>
                </div>
                <p className="text-gray-400 text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}