import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Loader2, CheckCircle2, AlertCircle } from 'lucide-react';
import { GithubLogo, TwitterLogo, LinkedinLogo } from '@phosphor-icons/react';

const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbwMupO5Dixdvnb-qFVrLX5pMWhedu-Ohpf7ycDSukaD4dNvymAP6_yiR8fYM35BN41B/exec';

const Contact = () => {
  const [formState, setFormState] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle, loading, success, error
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');

    try {
      // Using URLSearchParams for a more reliable "simple" request
      const formData = new URLSearchParams();
      Object.keys(formState).forEach(key => {
        formData.append(key, formState[key]);
      });

      await fetch(SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        cache: 'no-cache',
        body: formData, // Standard form-encoded body
      });

      setStatus('success');
      setFormState({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setStatus('idle'), 8000);
    } catch (error) {
      console.error('Submission error:', error);
      setStatus('error');
      setErrorMessage('Something went wrong. Please try again or contact us directly via email.');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-white to-pink-50/30">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-pink-500 font-semibold tracking-wide uppercase text-sm mb-3"
          >
            Contact Us
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-slate-800 mb-6"
          >
            Get in <span className="gradient-text">Touch</span>
          </motion.h3>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-500 max-w-2xl mx-auto"
          >
            Have a project in mind? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="space-y-8"
          >
            <div className="glass-card rounded-[2.5rem] p-8 md:p-10 space-y-8 border border-white shadow-xl shadow-pink-500/5">
              <h4 className="text-2xl font-bold text-slate-800 mb-6">Contact Information</h4>
              
              <div className="flex items-start gap-6 group">
                <div className="w-12 h-12 rounded-2xl bg-pink-50 flex items-center justify-center shrink-0 group-hover:bg-pink-500 group-hover:text-white transition-all duration-300">
                  <Mail className="w-6 h-6 text-pink-500 group-hover:text-white" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-pink-500 uppercase tracking-wider mb-1">Email Us</p>
                  <p className="text-lg text-slate-600">maverintechnology@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center shrink-0 group-hover:bg-blue-500 group-hover:text-white transition-all duration-300">
                  <Phone className="w-6 h-6 text-blue-500 group-hover:text-white" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-blue-500 uppercase tracking-wider mb-1">Call Us</p>
                  <p className="text-lg text-slate-600">+91 6369997397</p>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="w-12 h-12 rounded-2xl bg-emerald-50 flex items-center justify-center shrink-0 group-hover:bg-emerald-500 group-hover:text-white transition-all duration-300">
                  <MapPin className="w-6 h-6 text-emerald-500 group-hover:text-white" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-emerald-500 uppercase tracking-wider mb-1">Visit Us</p>
                  <p className="text-lg text-slate-600">Plot No 279, Balaji Street, Srinivasa Nagar, Ramnagar North, Madipakkam, Chennai-91</p>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              {[
                { Icon: LinkedinLogo, link: '#' },
                { Icon: TwitterLogo, link: '#' },
                { Icon: GithubLogo, link: '#' }
              ].map(({ Icon, link }, i) => (
                <a 
                  key={i} 
                  href={link}
                  className="w-12 h-12 rounded-2xl border border-slate-100 flex items-center justify-center hover:bg-pink-500 hover:text-white hover:border-pink-500 transition-all duration-300 text-slate-500"
                >
                  <Icon className="w-6 h-6" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Contact Form Container */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="relative"
          >
            <div className="bg-white rounded-[2.5rem] p-8 md:p-10 shadow-2xl shadow-pink-500/10 border border-slate-100 overflow-hidden relative">
              <AnimatePresence mode="wait">
                {status === 'success' ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.1 }}
                    className="flex flex-col items-center text-center py-10"
                  >
                    <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mb-6">
                      <CheckCircle2 className="w-10 h-10 text-emerald-500" />
                    </div>
                    <h3 className="text-3xl font-bold text-slate-800 mb-4">Message Sent!</h3>
                    <p className="text-slate-500 max-w-sm">
                      Thank you for reaching out. We've received your inquiry and will get back to you shortly.
                    </p>
                    <button 
                      onClick={() => setStatus('idle')}
                      className="mt-8 px-8 py-3 bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold rounded-xl transition-colors"
                    >
                      Send Another
                    </button>
                  </motion.div>
                ) : (
                  <motion.form 
                    key="form"
                    onSubmit={handleSubmit} 
                    className="space-y-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-slate-600 ml-1">Full Name</label>
                        <input 
                          required
                          name="name"
                          type="text" 
                          placeholder="John Doe"
                          className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-pink-500/20 focus:border-pink-500 transition-all placeholder:text-slate-300 font-medium"
                          value={formState.name}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-slate-600 ml-1">Email Address</label>
                        <input 
                          required
                          name="email"
                          type="email" 
                          placeholder="john@example.com"
                          className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-pink-500/20 focus:border-pink-500 transition-all placeholder:text-slate-300 font-medium"
                          value={formState.email}
                          onChange={handleChange}
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-slate-600 ml-1">Subject</label>
                      <input 
                        required
                        name="subject"
                        type="text" 
                        placeholder="Project Inquiry"
                        className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-pink-500/20 focus:border-pink-500 transition-all placeholder:text-slate-300 font-medium"
                        value={formState.subject}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-slate-600 ml-1">Message</label>
                      <textarea 
                        required
                        name="message"
                        rows="4"
                        placeholder="Tell us about your project..."
                        className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-pink-500/20 focus:border-pink-500 transition-all resize-none placeholder:text-slate-300 font-medium"
                        value={formState.message}
                        onChange={handleChange}
                      ></textarea>
                    </div>

                    {status === 'error' && (
                      <motion.div 
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex items-center gap-2 text-rose-500 bg-rose-50 p-4 rounded-xl text-sm font-medium"
                      >
                        <AlertCircle className="w-4 h-4" />
                        {errorMessage}
                      </motion.div>
                    )}

                    <button 
                      type="submit"
                      disabled={status === 'loading'}
                      className={`w-full py-4 rounded-2xl font-bold text-lg flex items-center justify-center gap-2 transition-all duration-300
                        ${status === 'loading' 
                          ? 'bg-slate-100 text-slate-400 cursor-not-allowed' 
                          : 'bg-gradient-to-r from-pink-500 to-pink-600 text-white shadow-lg shadow-pink-500/20 hover:scale-[1.02] active:scale-[0.98]'
                        }
                      `}
                    >
                      {status === 'loading' ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <Send className="w-5 h-5" />
                        </>
                      )}
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
