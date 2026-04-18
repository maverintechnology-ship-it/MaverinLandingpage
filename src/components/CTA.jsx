import { motion } from 'framer-motion';

const CTA = () => {
  return (
    <section className="py-12 md:py-24 bg-white px-6 md:px-12">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto bg-gradient-to-br from-pink-500 to-pink-600 rounded-[2.5rem] md:rounded-[3rem] p-10 md:p-20 relative overflow-hidden shadow-2xl shadow-pink-500/20 text-center"
      >
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-white/10 rounded-full blur-3xl -translate-x-1/3 translate-y-1/3"></div>
        
        <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Start Your Journey Today
          </h2>
          <p className="text-pink-100 text-lg md:text-xl mb-10 max-w-xl">
            Join thousands of forward-thinking companies building the next generation of digital experiences.
          </p>
          <a href="#contact">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-pink-600 px-10 py-4 rounded-2xl font-bold text-lg shadow-xl hover:bg-pink-50 transition-colors"
            >
              Get Started Now
            </motion.button>
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default CTA;
