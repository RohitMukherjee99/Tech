import { motion } from 'framer-motion';
import { Calendar, MapPin, ArrowRight, ChevronDown } from 'lucide-react';
import { Button } from './ui/button';

export default function Hero() {
  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }
    }
  };

  return (
    <section id="home" className="relative min-h-screen overflow-hidden" data-testid="hero-section">
      {/* Background with gradient and pattern */}
      <div className="absolute inset-0 gradient-hero implant-pattern" />
      
      {/* Abstract shapes */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-secondary-500/10 rounded-full blur-3xl" />
      
      {/* Floating implant illustration */}
      <motion.div
        className="absolute right-0 top-1/2 -translate-y-1/2 w-1/2 h-full opacity-10 hidden lg:block"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 0.1, x: 0 }}
        transition={{ duration: 1.5, delay: 0.5 }}
      >
        <svg viewBox="0 0 200 400" className="w-full h-full" fill="none">
          {/* Stylized dental implant */}
          <defs>
            <linearGradient id="implantGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#002366" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#002366" stopOpacity="0.3" />
            </linearGradient>
          </defs>
          {/* Crown */}
          <path d="M70 50 Q100 30 130 50 Q140 70 130 90 L70 90 Q60 70 70 50" fill="url(#implantGradient)" />
          {/* Abutment */}
          <rect x="85" y="90" width="30" height="40" rx="2" fill="#002366" opacity="0.6" />
          {/* Implant body with threads */}
          <path d="M85 130 L85 320 Q100 330 115 320 L115 130" fill="#002366" opacity="0.5" />
          {/* Thread lines */}
          {[...Array(12)].map((_, i) => (
            <line
              key={i}
              x1="75"
              y1={150 + i * 15}
              x2="125"
              y2={150 + i * 15}
              stroke="#002366"
              strokeWidth="1.5"
              opacity={0.3 - i * 0.02}
            />
          ))}
          {/* Apex */}
          <path d="M85 320 Q100 350 115 320" fill="#002366" opacity="0.4" />
        </svg>
      </motion.div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-screen flex items-center">
        <motion.div
          className="pt-24 pb-16 lg:pt-32 lg:pb-24 w-full lg:w-2/3"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Badge */}
          <motion.div variants={itemVariants} className="mb-6">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary-900/10 text-primary-900 rounded-full text-sm font-body font-medium">
              <span className="w-2 h-2 bg-secondary-500 rounded-full animate-pulse" />
              National Conference
            </span>
          </motion.div>

          {/* Main Title with 3D effect */}
          <motion.div variants={itemVariants} className="mb-4">
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-7xl font-bold text-primary-900 leading-[1.1] tracking-tight">
              <span className="text-3d block">3<sup className="text-3xl lg:text-5xl">RD</sup> OSI</span>
              <span className="text-3d block mt-2">CONFERENCE</span>
            </h1>
          </motion.div>

          {/* Location Badge */}
          <motion.div variants={itemVariants} className="mb-8">
            <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-semibold">
              <span className="gold-shimmer">KOLKATA 2026</span>
            </h2>
          </motion.div>

          {/* Tagline */}
          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl text-slate-600 font-body max-w-xl mb-8 leading-relaxed"
          >
            India's Premier Conference on <strong className="text-primary-900">Osseointegration</strong> & <strong className="text-primary-900">Implant Dentistry</strong> — 
            Where Science Meets Clinical Excellence
          </motion.p>

          {/* Event Details */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 sm:gap-8 mb-10"
          >
            <div className="flex items-center gap-3 text-slate-700">
              <div className="w-12 h-12 bg-primary-900/10 rounded-xl flex items-center justify-center">
                <Calendar className="w-6 h-6 text-primary-900" />
              </div>
              <div>
                <p className="font-body font-semibold text-primary-900">27-29 November</p>
                <p className="text-sm text-slate-500">2026</p>
              </div>
            </div>
            <div className="flex items-center gap-3 text-slate-700">
              <div className="w-12 h-12 bg-primary-900/10 rounded-xl flex items-center justify-center">
                <MapPin className="w-6 h-6 text-primary-900" />
              </div>
              <div>
                <p className="font-body font-semibold text-primary-900">The Westin</p>
                <p className="text-sm text-slate-500">Rajarhat, Kolkata</p>
              </div>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button
              onClick={() => scrollToSection('#registration')}
              className="bg-secondary-500 hover:bg-secondary-900 text-primary-900 font-body font-semibold px-8 py-6 text-lg rounded-full btn-glow group transition-all duration-300"
              data-testid="hero-register-btn"
            >
              Register Now
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              onClick={() => scrollToSection('#program')}
              variant="outline"
              className="border-2 border-primary-900 text-primary-900 hover:bg-primary-900 hover:text-white font-body font-semibold px-8 py-6 text-lg rounded-full transition-all duration-300"
              data-testid="hero-program-btn"
            >
              Scientific Program
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={itemVariants}
            className="mt-16 grid grid-cols-3 gap-8 max-w-lg"
          >
            {[
              { number: '500+', label: 'Delegates' },
              { number: '50+', label: 'Speakers' },
              { number: '30+', label: 'Sessions' }
            ].map((stat, index) => (
              <div key={index} className="text-center sm:text-left">
                <p className="font-heading text-3xl sm:text-4xl font-bold text-primary-900">{stat.number}</p>
                <p className="text-sm text-slate-500 font-body">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <button
          onClick={() => scrollToSection('#about')}
          className="flex flex-col items-center gap-2 text-slate-400 hover:text-primary-900 transition-colors"
          data-testid="scroll-indicator"
        >
          <span className="text-xs font-body uppercase tracking-widest">Scroll</span>
          <ChevronDown className="w-5 h-5" />
        </button>
      </motion.div>
    </section>
  );
}
