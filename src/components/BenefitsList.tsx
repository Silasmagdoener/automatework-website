import React from 'react';
import { motion } from 'framer-motion';
import { 
  RefreshCcw, 
  Copy, 
  Calendar, 
  FileText, 
  Clock, 
  ShieldCheck 
} from 'lucide-react';

interface Benefit {
  icon: React.ElementType;
  text: string;
  highlight: string;
}

const benefits: Benefit[] = [
  {
    icon: RefreshCcw,
    text: "manually update client data",
    highlight: "Never"
  },
  {
    icon: Copy,
    text: "copy-pasting information between systems",
    highlight: "Stop"
  },
  {
    icon: Calendar,
    text: "generate and schedule content",
    highlight: "Automatically"
  },
  {
    icon: FileText,
    text: "manual invoice creation",
    highlight: "Get rid of"
  },
  {
    icon: Clock,
    text: "on expense tracking",
    highlight: "Save hours"
  },
  {
    icon: ShieldCheck,
    text: "human errors in your workflows",
    highlight: "Eliminate"
  }
];

const BenefitItem = ({ icon: Icon, text, highlight }: Benefit) => {
  return (
    <motion.div 
      className="flex items-center gap-3 py-1.5 sm:py-2"
      whileHover={{ x: 8 }}
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
    >
      <motion.div
        whileHover={{ rotate: 360 }}
        transition={{ duration: 0.5 }}
        className="w-6 h-6 sm:w-8 sm:h-8 rounded-lg bg-dark-lighter flex items-center justify-center flex-shrink-0"
      >
        <Icon className="w-3 h-3 sm:w-4 sm:h-4 text-primary-light" />
      </motion.div>
      <p className="text-sm sm:text-base text-left">
        <span className="text-primary-light font-semibold">{highlight}</span>
        {" "}
        {text}
      </p>
    </motion.div>
  );
};

export default function BenefitsList() {
  return (
    <div className="max-w-4xl mx-auto px-2">
      <motion.div 
        className="grid md:grid-cols-2 gap-x-8 gap-y-1 sm:gap-y-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ staggerChildren: 0.1 }}
      >
        {benefits.map((benefit, index) => (
          <BenefitItem key={index} {...benefit} />
        ))}
      </motion.div>
    </div>
  );
}