import React from 'react';
import ServiceCard from './ServiceCard';
import { servicesData } from '../data/ServicesData';
import './ServicesSection.css';

const ServicesSection = () => {
  return (
    <section className="services-section" id="services">
        <div className="container text-center mb-12">
            <span className="subheading">Our Expertise</span>
            <h2 className="main-title">Digital Solutions <span className="highlight">Tailored</span> for You</h2>
            <p className="subtitle">We combine creativity and technology to deliver exceptional digital experiences that drive growth.</p>
        </div>
        <div className="container wrapper-cards">
            {servicesData.map((service) => (
                <ServiceCard 
                  key={service.id} 
                  title={service.title} 
                  description={service.description} 
                  icon={service.icon} 
                />
            ))}
        </div>
    </section>
  );
};

export default ServicesSection;
