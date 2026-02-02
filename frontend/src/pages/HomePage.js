import { motion } from 'framer-motion';
import { Calendar, MapPin, ArrowRight, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';

export default function HomePage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 }
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
    <section className="relative min-h-screen overflow-hidden pt-20" data-testid="hero-section">
      {/* Background */}
      <div className="absolute inset-0 gradient-hero implant-pattern" />
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
          <defs>
            <linearGradient id="implantGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#002366" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#002366" stopOpacity="0.3" />
            </linearGradient>
          </defs>
          <path d="M70 50 Q100 30 130 50 Q140 70 130 90 L70 90 Q60 70 70 50" fill="url(#implantGradient)" />
          <rect x="85" y="90" width="30" height="40" rx="2" fill="#002366" opacity="0.6" />
          <path d="M85 130 L85 320 Q100 330 115 320 L115 130" fill="#002366" opacity="0.5" />
          <path d="M85 320 Q100 350 115 320" fill="#002366" opacity="0.4" />
        </svg>
      </motion.div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-screen flex items-center">
        <motion.div
          className="pt-8 pb-16 lg:pt-16 lg:pb-24 w-full lg:w-2/3"
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

          {/* Main Title */}
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
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 sm:gap-8 mb-10">
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
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4">
            <Link to="/registration">
              <Button
                className="bg-secondary-500 hover:bg-secondary-900 text-primary-900 font-body font-semibold px-8 py-6 text-lg rounded-full btn-glow group transition-all duration-300"
                data-testid="hero-register-btn"
              >
                Register Now
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link to="/program">
              <Button
                variant="outline"
                className="border-2 border-primary-900 text-primary-900 hover:bg-primary-900 hover:text-white font-body font-semibold px-8 py-6 text-lg rounded-full transition-all duration-300"
                data-testid="hero-program-btn"
              >
                Scientific Program
              </Button>
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div variants={itemVariants} className="mt-16 grid grid-cols-3 gap-8 max-w-lg">
            <div className="text-center sm:text-left">
              <p className="font-heading text-3xl sm:text-4xl font-bold text-primary-900">500+</p>
              <p className="text-sm text-slate-500 font-body">Delegates</p>
            </div>
            <div className="text-center sm:text-left">
              <p className="font-heading text-3xl sm:text-4xl font-bold text-primary-900">50+</p>
              <p className="text-sm text-slate-500 font-body">Speakers</p>
            </div>
            <div className="text-center sm:text-left">
              <p className="font-heading text-3xl sm:text-4xl font-bold text-primary-900">30+</p>
              <p className="text-sm text-slate-500 font-body">Sessions</p>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <Link to="/about" className="flex flex-col items-center gap-2 text-slate-400 hover:text-primary-900 transition-colors">
          <span className="text-xs font-body uppercase tracking-widest">Explore</span>
          <ChevronDown className="w-5 h-5" />
        </Link>
      </motion.div>
    </section>
  );
}
