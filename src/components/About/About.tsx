import React from 'react';
import AboutHero from './AboutHero';
import Journey from './Journey';
import WhatIDo from './WhatIDo';
import Approach from './Approach';
import WhyIDoThis from './WhyIDoThis';
import LetsTalk from './LetsTalk';

export default function About() {
  return (
    <section className="py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <AboutHero />
        <Journey />
        <WhatIDo />
        <Approach />
        <WhyIDoThis />
        <LetsTalk />
      </div>
    </section>
  );
}