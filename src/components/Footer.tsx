import { Facebook, Twitter, Instagram, Linkedin, ArrowRight } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export function Footer() {
  const currentYear = new Date().getFullYear();
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <footer className="bg-slate-950 text-slate-300 py-16 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <img 
                src="https://storage.googleapis.com/a1aa/image/Vqg83s2E822lH6O9zR2n7T60b_q39R2R2n7T60b_q39R2R2n.jpg" 
                alt="M-One Solution Logo" 
                className="h-12 w-auto object-contain bg-white p-1 rounded-lg"
              />
            </div>
            <p className="text-slate-400 max-w-sm mb-8 leading-relaxed">
              Software house yang fokus menciptakan aplikasi dan website yang praktis, intuitif, dan efektif untuk mendukung kesuksesan bisnis Anda.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com/m.one_solution/" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li><Link to="/" className="hover:text-blue-400 transition-colors flex items-center gap-2"><ArrowRight className="w-4 h-4" /> Home</Link></li>
              <li><Link to="/about" className="hover:text-blue-400 transition-colors flex items-center gap-2"><ArrowRight className="w-4 h-4" /> About Us</Link></li>
              <li><Link to="/portfolio" className="hover:text-blue-400 transition-colors flex items-center gap-2"><ArrowRight className="w-4 h-4" /> Portofolio</Link></li>
              <li><Link to="/blog" className="hover:text-blue-400 transition-colors flex items-center gap-2"><ArrowRight className="w-4 h-4" /> News</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white font-semibold mb-6">Legal</h4>
            <ul className="space-y-4">
              <li><a href={isHomePage ? '#privacy' : '/#privacy'} className="hover:text-blue-400 transition-colors flex items-center gap-2"><ArrowRight className="w-4 h-4" /> Privacy Policy</a></li>
              <li><a href={isHomePage ? '#terms' : '/#terms'} className="hover:text-blue-400 transition-colors flex items-center gap-2"><ArrowRight className="w-4 h-4" /> Terms and Conditions</a></li>
              <li><Link to="/contact" className="hover:text-blue-400 transition-colors flex items-center gap-2"><ArrowRight className="w-4 h-4" /> Contact Us</Link></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm">
            © {currentYear} M-One Solution Software house. All Rights Reserved.
          </p>
          <p className="text-slate-500 text-sm font-medium">
            Your True Solution
          </p>
        </div>
      </div>
    </footer>
  );
}
