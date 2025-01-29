import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import FormInput from './FormInput';
import FormTextArea from './FormTextArea';
import FormCheckbox from './FormCheckbox';

const WEBHOOK_URL = 'https://hook.eu2.make.com/ykfepagvo5kpu80ubb6edq91pfe3x9da';

export default function ContactForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    companyName: '',
    email: '',
    phone: '',
    automation: '',
    source: '',
    dataConsent: false,
    newsletter: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData(prev => ({ ...prev, [name]: checked }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch(WEBHOOK_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      navigate('/success');
    } catch (error) {
      console.error('Error submitting form:', error);
      // You might want to show an error message to the user here
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-24 px-4 min-h-screen bg-dark">
      <motion.div 
        className="max-w-2xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Let's automate your work</h2>
          <p className="text-gray-400 text-lg">
            Hey there! I'm excited to learn more about your business and how I can help you save time through automation. 
            Fill out the form below and I'll get back to you within 24 hours.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <FormInput
            label="First Name"
            name="firstName"
            required
            subtext="What should I call you?"
            value={formData.firstName}
            onChange={handleChange}
          />

          <FormInput
            label="Company Name"
            name="companyName"
            required
            subtext="Where do you work?"
            value={formData.companyName}
            onChange={handleChange}
          />

          <FormInput
            label="Email"
            name="email"
            type="email"
            required
            subtext="Where can I reach you?"
            value={formData.email}
            onChange={handleChange}
          />

          <FormInput
            label="Phone"
            name="phone"
            type="tel"
            subtext="In case we need to chat (optional)"
            value={formData.phone}
            onChange={handleChange}
          />

          <FormTextArea
            label="What would you like to automate?"
            name="automation"
            required
            subtext="Tell me briefly about the tasks that are taking up too much of your time"
            placeholder="e.g., I spend 2 hours daily updating my CRM manually or I need help automating my social media posting"
            value={formData.automation}
            onChange={handleChange}
          />

          <FormInput
            label="How did you find me?"
            name="source"
            subtext="Just curious! (optional)"
            value={formData.source}
            onChange={handleChange}
          />

          <div className="pt-4">
            <FormCheckbox
              label="I agree that my data will be stored and processed to handle my request."
              name="dataConsent"
              required
              checked={formData.dataConsent}
              onChange={handleCheckboxChange}
            />

            <FormCheckbox
              label="I agree to get updates on the latest automation ideas from you direct into my inbox."
              name="newsletter"
              checked={formData.newsletter}
              onChange={handleCheckboxChange}
            />
          </div>

          <div className="pt-6">
            <button
              type="submit"
              className="w-full btn-primary"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </div>
        </form>
      </motion.div>
    </section>
  );
}