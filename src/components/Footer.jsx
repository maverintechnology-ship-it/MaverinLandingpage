import { Send } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contact" className="bg-slate-50 border-t border-slate-100 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-4 mb-6 cursor-pointer group">
              <div className="relative">
                <div className="absolute inset-0 bg-pink-500/20 blur-2xl rounded-full group-hover:bg-pink-500/40 transition-colors duration-300"></div>
                <img src="/logo.png" alt="Maverin Logo" className="relative w-14 h-14 object-contain invert" />
              </div>
              <span className="text-2xl font-bold tracking-tight text-slate-800">
                Mave<span className="text-pink-500">rin</span>
              </span>
            </div>
            <p className="text-slate-500 mb-6 text-sm leading-relaxed">
              Empowering next-generation startups and enterprises with scalable, beautiful, and highly performant digital solutions.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-bold text-slate-800 mb-6">Services</h4>
            <ul className="space-y-4 text-sm text-slate-500">
              <li><a href="#" className="hover:text-pink-500 transition-colors">Web Development</a></li>
              <li><a href="#" className="hover:text-pink-500 transition-colors">App Development</a></li>
              <li><a href="#" className="hover:text-pink-500 transition-colors">UI/UX Design</a></li>
              <li><a href="#" className="hover:text-pink-500 transition-colors">Cloud Solutions</a></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="font-bold text-slate-800 mb-6">Contact</h4>
            <ul className="space-y-4 text-sm text-slate-500">
              <li>contact@maverin.com</li>
              <li>+1 (555) 123-4567</li>
              <li>123 Innovation Drive<br/>Tech City, TC 90210</li>
            </ul>
          </div>

          {/* Newsletter subscription */}
          <div>
            <h4 className="font-bold text-slate-800 mb-6">Stay Updated</h4>
            <p className="text-slate-500 text-sm mb-4">Subscribe to our newsletter for the latest updates and insights.</p>
            <div className="flex flex-col gap-2">
              <div className="relative">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="w-full pl-4 pr-12 py-3 bg-white border border-slate-200 rounded-xl focus:outline-none focus:border-pink-400 focus:ring-2 focus:ring-pink-100 transition-all text-sm"
                />
                <button className="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-pink-500 hover:text-pink-600 hover:bg-pink-50 rounded-lg transition-colors">
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-200 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-400 text-sm">© {(new Date().getFullYear())} Maverin. All rights reserved.</p>
          <div className="flex gap-4 text-sm font-medium text-slate-500">
            <a href="#" className="hover:text-pink-500 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-pink-500 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
