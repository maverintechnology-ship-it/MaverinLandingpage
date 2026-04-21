import React from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, Phone, MapPin, ArrowRight } from 'lucide-react';
import { GithubLogo, TwitterLogo, LinkedinLogo, FacebookLogo, InstagramLogo } from '@phosphor-icons/react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    solutions: [
      { name: 'Web Development', href: '#services' },
      { name: 'App Development', href: '#services' },
      { name: 'UI/UX Design', href: '#services' },
      { name: 'Digital Marketing', href: '#services' },
    ],
    company: [
      { name: 'About Us', href: '#contact' },
      { name: 'Our Process', href: '#solutions' },
      { name: 'Pricing', href: '#pricing' },
      { name: 'Careers', href: '#' },
    ]
  };

  const socialLinks = [
    { icon: <LinkedinLogo weight="fill" size={20} />, href: 'https://www.linkedin.com/company/maverin-technology/', label: 'LinkedIn' },
    { icon: <GithubLogo weight="fill" size={20} />, href: 'https://github.com/maverintechnology-ship-it', label: 'GitHub' },
    { icon: <InstagramLogo weight="fill" size={20} />, href: 'https://www.instagram.com/__maverintechnology__?igsh=anR6Z3kwcHhmdDQ4', label: 'Instagram' },
  ];

  return (
    <footer className="relative bg-slate-50 border-t border-slate-200 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[500px] h-[500px] bg-pink-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-24 pb-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-20">
          
          {/* Brand Section */}
          <div className="lg:col-span-6 space-y-8">
            <div className="flex items-center gap-4 group cursor-pointer">
              <div className="relative">
                <div className="absolute inset-0 bg-pink-500/20 blur-2xl rounded-full group-hover:bg-pink-500/40 transition-colors duration-300"></div>
                <img src="/logo.png" alt="Maverin Logo" className="relative w-16 h-16 object-contain invert" />
              </div>
              <span className="text-3xl font-bold tracking-tight text-slate-800">
                Mave<span className="text-pink-500 font-extrabold">rin</span>
              </span>
            </div>
            
            <p className="text-slate-500 text-lg leading-relaxed max-w-sm">
              Empowering next-generation startups and enterprises with scalable, beautiful, and highly performant digital solutions.
            </p>

            <div className="flex items-center gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ y: -3, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-slate-400 hover:text-pink-500 hover:border-pink-200 hover:shadow-lg hover:shadow-pink-500/10 transition-all duration-300"
                  aria-label={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links Group */}
          <div className="lg:col-span-6 grid grid-cols-2 gap-8">
            <div className="space-y-6">
              <h4 className="text-sm font-bold text-slate-900 uppercase tracking-widest">Solutions</h4>
              <ul className="space-y-4">
                {footerLinks.solutions.map((link, idx) => (
                  <li key={idx}>
                    <a href={link.href} className="text-slate-500 hover:text-pink-500 flex items-center gap-2 group transition-colors duration-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-300 group-hover:bg-pink-500 transition-colors" />
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-6">
              <h4 className="text-sm font-bold text-slate-900 uppercase tracking-widest">Company</h4>
              <ul className="space-y-4">
                {footerLinks.company.map((link, idx) => (
                  <li key={idx}>
                    <a href={link.href} className="text-slate-500 hover:text-pink-500 flex items-center gap-2 group transition-colors duration-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-300 group-hover:bg-pink-500 transition-colors" />
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-slate-200 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-slate-400 text-sm font-medium">
            © {currentYear} <span className="text-slate-600">Maverin Technology</span>. All rights reserved.
          </p>

          <div className="flex items-center gap-2 text-slate-400 text-sm">
            <span>Made with</span>
            <motion.span 
              animate={{ scale: [1, 1.2, 1] }} 
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="text-pink-500"
            >
              ❤️
            </motion.span>
            <span>by</span>
            <a href="#" className="font-bold text-slate-600 hover:text-pink-500 transition-colors">MAVERIN</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

