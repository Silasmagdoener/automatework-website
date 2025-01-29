import React from 'react';
import { motion } from 'framer-motion';
import { Coffee } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function SuccessPage() {
  return (
    <section className="min-h-screen bg-dark flex items-center justify-center p-4">
      <motion.div 
        className="max-w-xl w-full mx-auto text-center mt-16"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl md:text-4xl font-bold mb-6">
          Your message is safely in my inbox!
        </h1>
        
        <div className="bg-dark-lighter p-8 rounded-lg">
          <p className="text-lg mb-4">While I prepare a response, here's a fun fact:</p>
          <p className="text-xl mb-4">
            The average person spends <span className="text-primary-light font-semibold">3 hours per week</span> on tasks that could be automated.
          </p>
          <p className="text-lg mb-6">
            That's <span className="text-primary-light font-semibold">156 hours per year</span> - enough time to drink 624 cups of coffee!
          </p>
          <div className="text-primary-light mb-6">
            <Coffee size={32} className="mx-auto" />
          </div>
          <p className="text-gray-400 text-lg">
            (Don't worry, I'll help you reclaim that time)
          </p>
        </div>

        <div className="mt-8">
          <Link to="/" className="btn-primary inline-block">
            Return to Home
          </Link>
        </div>
      </motion.div>
    </section>
  );
}