import React from 'react';
import Hero from '../components/Hero';
import Features from '../components/Features';
import ServicesSection from '../components/ServicesSection';
import Pricing from '../components/Pricing';
import WallOfLove from '../components/WallOfLove';
import CTA from '../components/CTA';
import Contact from '../components/Contact';

const Home = () => {
  return (
    <>
      <Hero />
      <Features />
      <ServicesSection />
      <Pricing />
      <WallOfLove />
      <CTA />
      <Contact />
    </>
  );
};

export default Home;
