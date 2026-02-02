import { motion } from 'framer-motion';
import { Calendar, MapPin, Mail, Phone, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Program', href: '#program' },
    { name: 'Speakers', href: '#speakers' },
    { name: 'Registration', href: '#registration' },
    { name: 'Accommodation', href: '#accommodation' },
    { name: 'Venue', href: '#venue' },
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gradient-to-b from-primary-900 to-[#001844] text-white" data-testid="footer">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-14 h-14 bg-secondary-500 rounded-xl flex items-center justify-center">
                <span className="text-primary-900 font-heading font-bold text-2xl">OSI</span>
              </div>
              <div>
                <h3 className="font-heading font-bold text-xl text-white">3RD OSI CONFERENCE</h3>
                <p className="text-primary-200 font-body text-sm">KOLKATA 2026</p>
              </div>
            </div>
            <p className="text-primary-200 font-body leading-relaxed mb-6 max-w-md">
              India's premier national conference on Osseointegration & Implant Dentistry. 
              Bringing together clinicians, academicians, and industry leaders for three days 
              of learning and innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex items-center gap-2 text-primary-200">
                <Calendar className="w-4 h-4 text-secondary-500" />
                <span className="font-body text-sm">27-29 November 2026</span>
              </div>
              <div className="flex items-center gap-2 text-primary-200">
                <MapPin className="w-4 h-4 text-secondary-500" />
                <span className="font-body text-sm">The Westin, Kolkata</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-white mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-primary-200 font-body hover:text-secondary-500 transition-colors"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold text-white mb-6">Contact</h4>
            <ul className="space-y-4">
              <li>
                <a href="mailto:info@osikonference.org" className="flex items-start gap-3 text-primary-200 hover:text-secondary-500 transition-colors">
                  <Mail className="w-4 h-4 mt-1 flex-shrink-0" />
                  <span className="font-body text-sm">info@osikonference.org</span>
                </a>
              </li>
              <li>
                <a href="tel:+919876543210" className="flex items-start gap-3 text-primary-200 hover:text-secondary-500 transition-colors">
                  <Phone className="w-4 h-4 mt-1 flex-shrink-0" />
                  <span className="font-body text-sm">+91 98765 43210</span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-primary-200">
                  <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                  <span className="font-body text-sm">
                    Plot No, 2, AA II, Newtown,<br />
                    New Town, West Bengal 700135
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-primary-300 font-body text-sm text-center md:text-left">
              © 2026 3rd OSI Conference Kolkata. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <a href="#privacy" className="text-primary-300 font-body text-sm hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#terms" className="text-primary-300 font-body text-sm hover:text-white transition-colors">
                Terms of Service
              </a>
              <motion.button
                onClick={scrollToTop}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-10 h-10 bg-secondary-500 rounded-full flex items-center justify-center text-primary-900 hover:bg-secondary-400 transition-colors"
                data-testid="scroll-top-btn"
              >
                <ArrowUp className="w-5 h-5" />
              </motion.button>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative implant pattern */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-secondary-500 to-transparent opacity-30" />
    </footer>
  );
}
