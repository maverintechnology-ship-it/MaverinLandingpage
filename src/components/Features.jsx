import { motion } from 'framer-motion';
import { Zap, ShieldCheck, Cloud, BarChart3 } from 'lucide-react';

const features = [
  {
    icon: <Zap className="w-6 h-6 text-pink-500" />,
    title: 'High Speed',
    description: 'A highly optimized infrastructure that provides you lightning fast load times and smooth interactions for your customers.'
  },
  {
    icon: <ShieldCheck className="w-6 h-6 text-pink-500" />,
    title: 'Secure Platform',
    description: 'Security of the highest standards ensuring that your data is encrypted and remains secure.'
  },
  {
    icon: <Cloud className="w-6 h-6 text-pink-500" />,
    title: 'Cloud Computing',
    description: 'Easily scalable cloud-native platform designed for maximum high availability.'
  },
  {
    icon: <BarChart3 className="w-6 h-6 text-pink-500" />,
    title: 'Data Analytics',
    description: 'Insights generated from powerful data analytics for growth in your business'
  }
];

const Features = () => {
  return (
    <section id="solutions" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-pink-500 font-semibold tracking-wide uppercase text-sm mb-3">Why Choose Us</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Designed For Excellence</h3>
          <p className="text-slate-500 text-lg">Offering you everything you need as the building blocks for designing successful applications.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-slate-50 rounded-3xl p-8 border border-slate-100 hover:border-pink-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-6 group-hover:scale-110 transition-transform duration-300 text-pink-500">
                {feature.icon}
              </div>
              <h4 className="text-xl font-bold text-slate-800 mb-3">{feature.title}</h4>
              <p className="text-slate-500 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
