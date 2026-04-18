import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const pricingData = [
  {
    name: 'Starter Plan',
    price: '$99',
    description: 'Perfect for small businesses',
    features: [
      'Single Page Landing Page',
      'Mobile Responsive Design',
      'Basic SEO Optimization',
      'Contact Form Integration',
      '1 Month Free Maintenance'
    ],
    highlight: false,
    btnText: 'Start Building'
  },
  {
    name: 'Professional Plan',
    price: '$299',
    description: 'Complete digital presence',
    features: [
      'Multi-page Website (Up to 5)',
      'CMS Integration (WordPress/Ghost)',
      'Advanced SEO & Analytics',
      'Speed & Performance Tuning',
      '3 Months Priority Support'
    ],
    highlight: true,
    btnText: 'Get Started'
  },
  {
    name: 'Enterprise Plan',
    price: 'Custom',
    description: 'Tailored for large scale needs',
    features: [
      'Full E-commerce Integration',
      'Custom Web Applications',
      'API & Third-party Integrations',
      'Premium UI/UX Design',
      'Dedicated Project Manager'
    ],
    highlight: false,
    btnText: 'Contact Us'
  }
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-24 bg-gradient-to-b from-white to-pink-50/30 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-pink-500 font-semibold tracking-wide uppercase text-sm mb-3"
          >
            Pricing Plans
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-slate-800"
          >
            Simple, Transparent <span className="gradient-text">Pricing</span>
          </motion.h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingData.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative group rounded-[2.5rem] p-8 md:p-10 transition-all duration-300 flex flex-col h-full
                ${plan.highlight 
                  ? 'bg-gradient-to-br from-pink-500 to-pink-600 text-white shadow-2xl shadow-pink-500/30 scale-105 z-10' 
                  : 'bg-white border border-slate-100 hover:border-pink-200 hover:shadow-xl hover:shadow-pink-500/5'
                }`}
            >
              {plan.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-white text-pink-600 text-xs font-bold rounded-full shadow-md uppercase tracking-wider">
                  Recommended
                </div>
              )}

              <div className="mb-8">
                <p className={`text-sm font-semibold uppercase tracking-wider mb-4 ${plan.highlight ? 'text-pink-100' : 'text-pink-500'}`}>
                  {plan.name}
                </p>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl md:text-5xl font-extrabold">{plan.price}</span>
                  {plan.unit && <span className={`text-lg ${plan.highlight ? 'text-pink-100' : 'text-slate-400'}`}>{plan.unit}</span>}
                </div>
                <p className={`mt-2 text-sm ${plan.highlight ? 'text-pink-100' : 'text-slate-500'}`}>
                   {plan.description}
                </p>
              </div>

              <div className="flex-1 space-y-4 mb-10">
                {plan.features.map((feature) => (
                  <div key={feature} className="flex items-start gap-3">
                    <div className={`shrink-0 w-5 h-5 rounded-full flex items-center justify-center
                      ${plan.highlight ? 'bg-white/20' : 'bg-pink-100'}`}
                    >
                      <Check className={`w-3 h-3 ${plan.highlight ? 'text-white' : 'text-pink-600'}`} />
                    </div>
                    <span className={`text-sm leading-tight ${plan.highlight ? 'text-white' : 'text-slate-600'}`}>
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              <a href="#contact" className="w-full">
                <button className={`w-full py-4 rounded-2xl font-bold transition-all duration-300
                  ${plan.highlight 
                    ? 'bg-white text-pink-600 hover:bg-pink-50 shadow-lg' 
                    : 'bg-slate-50 text-slate-800 hover:bg-pink-600 hover:text-white border border-slate-200 hover:border-pink-600'
                  }`}
                >
                  {plan.btnText}
                </button>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
