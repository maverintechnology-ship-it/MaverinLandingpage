import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen pt-32 pb-20 flex items-center justify-center overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-pink-50/80 via-white to-white"></div>

      {/* Decorative Orbs */}
      <div className="absolute top-20 -left-20 w-72 h-72 bg-pink-200/40 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 -right-20 w-96 h-96 bg-pink-300/20 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto flex flex-col items-center"
        >
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-800 mb-6 leading-tight">
            Build Your Future with <br className="hidden md:block" />
            <span className="gradient-text">Smart Digital Solutions</span>
          </h1>

          <p className="text-lg md:text-xl text-slate-500 mb-10 max-w-2xl mx-auto leading-relaxed">
            Enhance your enterprise with cloud computing Technology, Superior Customer Experience, and Powerful Insights.
            Specifically designed for Technological Entrepreneurs.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto justify-center">
            <a href="#contact" className="w-full sm:w-auto">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full sm:w-auto group relative inline-flex items-center justify-center px-8 py-4 text-base font-medium text-white bg-gradient-to-r from-pink-500 to-pink-600 rounded-full shadow-[0_10px_30px_-10px_rgba(236,72,153,0.5)] transition-all hover:shadow-[0_10px_40px_-5px_rgba(236,72,153,0.6)]"
              >
                Get Started
                <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
              </motion.button>
            </a>

            {/* Learn More button removed */}
          </div>
        </motion.div>

        {/* Dashboard Mockup - Minimal Representation */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-20 mx-auto max-w-5xl relative"
        >
          <div className="glass-card rounded-[2.5rem] p-4 md:p-6 shadow-2xl shadow-pink-900/5 relative overflow-hidden">
            <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-pink-400 to-transparent opacity-30"></div>
            <div className="bg-slate-50 border border-slate-100 rounded-[1.5rem] aspect-[16/9] w-full flex flex-col overflow-hidden">
              {/* Fake Chrome/App Header */}
              <div className="h-12 border-b border-slate-200 flex items-center px-6 gap-2 bg-white">
                <div className="w-3 h-3 rounded-full bg-slate-300"></div>
                <div className="w-3 h-3 rounded-full bg-slate-300"></div>
                <div className="w-3 h-3 rounded-full bg-slate-300"></div>
                <div className="ml-4 h-5 flex-1 bg-slate-100 rounded-md max-w-sm"></div>
              </div>
              {/* Fake App Body */}
              <div className="flex-1 p-6 md:p-8 flex gap-6">
                <div className="w-64 hidden lg:flex flex-col gap-4">
                  <div className="h-8 bg-slate-200 rounded-md w-full mb-4"></div>
                  <div className="h-4 bg-slate-200 rounded-md w-3/4"></div>
                  <div className="h-4 bg-slate-200 rounded-md w-5/6"></div>
                  <div className="h-4 bg-slate-200 rounded-md w-full"></div>
                </div>
                <div className="flex-1 flex flex-col gap-6">
                  <div className="flex gap-4">
                    <div className="h-32 bg-pink-100/50 border border-pink-100 rounded-xl flex-1"></div>
                    <div className="h-32 bg-blue-50 border border-blue-100 rounded-xl flex-1"></div>
                    <div className="h-32 bg-emerald-50 border border-emerald-100 rounded-xl flex-1 hidden md:block"></div>
                  </div>
                  <div className="h-64 bg-slate-100 rounded-xl w-full border border-slate-200/60"></div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
