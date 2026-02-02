import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { MapPin, Plane, Train, Car, Navigation } from 'lucide-react';

export default function Venue() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const travelOptions = [
    {
      icon: Plane,
      title: 'By Air',
      description: 'Netaji Subhas Chandra Bose International Airport (CCU)',
      details: '15 km from venue | ~30 mins drive'
    },
    {
      icon: Train,
      title: 'By Rail',
      description: 'Kolkata Station / Howrah Junction',
      details: '20 km from venue | ~45 mins drive'
    },
    {
      icon: Car,
      title: 'By Road',
      description: 'Well-connected via EM Bypass',
      details: 'Ample parking available at venue'
    }
  ];

  return (
    <section id="venue" className="py-20 md:py-32 bg-white" data-testid="venue-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-secondary-500 font-body font-semibold text-sm uppercase tracking-widest">
            Location
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-900 mt-4 mb-6">
            Venue & <span className="text-3d-gold">Travel</span>
          </h2>
          <p className="text-lg text-slate-600 font-body max-w-2xl mx-auto">
            Join us at The Westin Kolkata Rajarhat — a world-class venue in the heart of New Town
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative rounded-2xl overflow-hidden h-96 lg:h-auto shadow-xl"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3683.2376789123456!2d88.4612345!3d22.5876543!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0275b020703c0d%3A0x5f5c8a4fff01c5ad!2sThe%20Westin%20Kolkata%20Rajarhat!5e0!3m2!1sen!2sin!4v1635789012345!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '400px' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="The Westin Kolkata Location"
            />
            {/* Overlay card */}
            <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-primary-900 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-primary-900">The Westin Kolkata Rajarhat</h4>
                  <p className="text-sm text-slate-600 font-body">
                    Plot No, 2, AA II, Newtown, New Town, West Bengal 700135
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Venue Details */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            {/* Venue Image */}
            <div className="relative rounded-2xl overflow-hidden h-48">
              <img
                src="https://images.pexels.com/photos/30824415/pexels-photo-30824415.jpeg?w=800&h=400&fit=crop&q=80"
                alt="The Westin Kolkata"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-primary-900/70 to-transparent" />
              <div className="absolute bottom-4 left-4">
                <p className="text-secondary-500 font-body font-semibold text-sm">Conference Venue</p>
                <h3 className="font-heading text-xl font-bold text-white">The Westin Kolkata</h3>
              </div>
            </div>

            {/* Travel Options */}
            <div className="space-y-4">
              <h4 className="font-heading text-xl font-bold text-primary-900">How to Reach</h4>
              {travelOptions.map((option, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  className="flex items-start gap-4 bg-slate-50 rounded-xl p-4"
                >
                  <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <option.icon className="w-5 h-5 text-primary-900" />
                  </div>
                  <div>
                    <h5 className="font-heading font-semibold text-primary-900">{option.title}</h5>
                    <p className="text-sm text-slate-700 font-body">{option.description}</p>
                    <p className="text-xs text-slate-500 font-body mt-1">{option.details}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Directions Button */}
            <a
              href="https://maps.google.com/?q=The+Westin+Kolkata+Rajarhat"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary-900 text-white font-body font-semibold px-6 py-3 rounded-full hover:bg-primary-900/90 transition-colors"
              data-testid="get-directions-btn"
            >
              <Navigation className="w-4 h-4" />
              Get Directions
            </a>
          </motion.div>
        </div>

        {/* Kolkata City Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-gradient-to-r from-primary-900 to-primary-900/90 rounded-2xl overflow-hidden"
        >
          <div className="grid lg:grid-cols-2">
            <div className="p-8 lg:p-12">
              <h3 className="font-heading text-2xl lg:text-3xl font-bold text-white mb-4">
                Welcome to Kolkata
              </h3>
              <p className="text-primary-100 font-body leading-relaxed mb-6">
                The City of Joy — known for its rich cultural heritage, colonial architecture, 
                and warm hospitality. Experience the perfect blend of tradition and modernity 
                while attending the 3rd OSI Conference.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/10 rounded-lg p-4">
                  <p className="text-secondary-500 font-heading font-bold text-xl">November</p>
                  <p className="text-white/80 font-body text-sm">Pleasant weather (18-28°C)</p>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <p className="text-secondary-500 font-heading font-bold text-xl">IST</p>
                  <p className="text-white/80 font-body text-sm">UTC +5:30</p>
                </div>
              </div>
            </div>
            <div className="relative h-64 lg:h-auto">
              <img
                src="https://images.unsplash.com/photo-1558431382-27e303142255?w=600&h=400&fit=crop&q=80"
                alt="Kolkata City"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-l from-transparent to-primary-900/50 lg:bg-gradient-to-r" />
            </div>
          </div>
        </motion.div>

        {/* Divider */}
        <div className="implant-divider mt-20 rounded-full" />
      </div>
    </section>
  );
}
