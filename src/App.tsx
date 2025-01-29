import React from 'react';
import { motion } from 'framer-motion';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FounderMessage from './components/FounderMessage';
import CurrentSituation from './components/CurrentSituation';
import BeliefsSection from './components/BeliefsSection';
import DesiredOutcome from './components/DesiredOutcome';
import NewParadigm from './components/NewParadigm';
import ContactForm from './components/ContactForm/ContactForm';
import SuccessPage from './components/SuccessPage/SuccessPage';
import About from './components/About/About';
import Imprint from './components/LegalPages/Imprint';
import Privacy from './components/LegalPages/Privacy';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import CTAButtons from './components/CTAButtons';

function HomePage() {
  return (
    <>
      <Hero />
      <FounderMessage />
      <CurrentSituation />
      <BeliefsSection />
      <DesiredOutcome />
      <NewParadigm />
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Ready to take back control of your time?
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-400 max-w-3xl mx-auto mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            You've tried doing everything manually. You've experienced the frustration of repetitive tasks. 
            Now it's time to let automation handle the heavy lifting while you focus on what really matters.
          </motion.p>
          <CTAButtons />
        </div>
      </section>
    </>
  );
}

function App() {
  const location = useLocation();
  
  return (
    <div className="min-h-screen bg-dark flex flex-col">
      <ScrollToTop />
      <Navbar />
      <main className="flex-grow">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<ContactForm />} />
          <Route path="/success" element={<SuccessPage />} />
          <Route path="/imprint" element={<Imprint />} />
          <Route path="/privacy" element={<Privacy />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;