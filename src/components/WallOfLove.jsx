import React, { useState, useRef, useEffect } from 'react';
import { Star, Heart, Leaf, Hospital, Stethoscope, Zap, Sparkles, ArrowUp, ArrowLeft, ArrowRight, ArrowDown } from 'lucide-react';
import './WallOfLove.css';

const TESTIMONIALS = [
  {
    id: 1,
    name: "Sairam Diagnostic Centre",
    role: "Chief Medical Officer",
    stars: 5,
    icon: <Heart className="w-8 h-8" />,
    color: "#F9F4E8",
    quote: "Sairam Diagnostic Centre provides exceptionally accurate results and timely reports. Their professionalism and patient care are truly commendable in the medical field.",
  },
  {
    id: 2,
    name: "Educational Institution",
    role: "Academic Dean",
    stars: 5,
    icon: <Leaf className="w-8 h-8" />,
    color: "#F6DCE6",
    quote: "Our collaboration with this diagnostic system has greatly improved our clinical training efficiency. It is an indispensable tool for any modern educational institution.",
  },
  {
    id: 3,
    name: "City General Hospital",
    role: "Head of Pathology",
    stars: 5,
    icon: <Hospital className="w-8 h-8" />,
    color: "#E8F4F9",
    quote: "The speed and accuracy of results have transformed our workflow entirely. We now deliver faster diagnoses without compromising on quality — a game changer for our patients.",
  },
  {
    id: 4,
    name: "Dr. Priya Sharma",
    role: "Independent Physician",
    stars: 4,
    icon: <Stethoscope className="w-8 h-8" />,
    color: "#EFE8F9",
    quote: "I rely on these reports daily for my private practice. The turnaround time is impressive and the interface is beautifully simple. Highly recommended to every clinician.",
  },
  {
    id: 5,
    name: "MedTech Innovations",
    role: "Product Director",
    stars: 5,
    icon: <Zap className="w-8 h-8" />,
    color: "#F9EDE8",
    quote: "Integrating with this platform was seamless. The API is clean, documentation is excellent, and support is always responsive. Exactly what a growing healthtech startup needs.",
  },
  {
    id: 6,
    name: "Apollo Wellness Clinic",
    role: "Clinical Lead",
    stars: 5,
    icon: <Sparkles className="w-8 h-8" />,
    color: "#E8F9EE",
    quote: "Patient satisfaction scores jumped after we switched. The reports are clear, well-structured, and patients actually understand them — which is rare and incredibly valuable.",
  },
];

const Stars = ({ count }) => {
  return (
    <div className="stars-container">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`w-5 h-5 ${i < count ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
        />
      ))}
    </div>
  );
};

const TestimonialCard = ({ data, index }) => {
  return (
    <div 
      className="testimonial-card-unified"
      style={{ backgroundColor: data.color }}
    >
      <div className="card-header-unified">
        <div className="user-meta">
          <h4 className="user-name">{data.name}</h4>
          <p className="user-role">{data.role}</p>
          <Stars count={data.stars} />
        </div>
        <div className="card-icon-unified">
          {data.icon}
        </div>
      </div>
      <p className="quote-unified">
        &ldquo;{data.quote}&rdquo;
      </p>
    </div>
  );
};

const WallOfLove = () => {
  const gridRef = useRef(null);

  const scroll = (dx, dy) => {
    const el = gridRef.current;
    if (!el) return;
    el.scrollBy({ left: dx, top: dy, behavior: "smooth" });
  };

  return (
    <section className="wall-of-love-section" id="wall-of-love">
      <div className="wol-container">
        <header className="wol-header">
          <h2 className="wol-headline">Wall of love</h2>
          <div className="wol-rating-badge">
            <Stars count={4} />
            <span className="wol-rating-number">4.2 / 5</span>
          </div>
        </header>

        <div ref={gridRef} className="wol-grid-container no-scrollbar">
          {TESTIMONIALS.map((t, i) => (
            <div key={t.id} className="wol-item">
              <TestimonialCard data={t} index={i} />
            </div>
          ))}
        </div>

        <div className="wol-controls">
          <button onClick={() => scroll(0, -220)} className="wol-btn"><ArrowUp /></button>
          <button onClick={() => scroll(-300, 0)} className="wol-btn"><ArrowLeft /></button>
          <button onClick={() => scroll(300, 0)} className="wol-btn"><ArrowRight /></button>
          <button onClick={() => scroll(0, 220)} className="wol-btn"><ArrowDown /></button>
        </div>
      </div>
    </section>
  );
};

export default WallOfLove;
