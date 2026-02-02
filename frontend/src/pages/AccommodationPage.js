import { motion } from 'framer-motion';
import { Star, Wifi, Car, Utensils, Dumbbell, Coffee, Check, MapPin } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Link } from 'react-router-dom';

export default function AccommodationPage() {
  return (
    <div className="pt-20" data-testid="accommodation-page">
      <div className="bg-primary-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-secondary-500 font-body font-semibold text-sm uppercase tracking-widest">Stay With Us</motion.span>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-4">Accommodation</motion.h1>
        </div>
      </div>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hotel Overview */}
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} className="relative rounded-2xl overflow-hidden h-80 lg:h-auto">
              <img src="https://images.pexels.com/photos/30824415/pexels-photo-30824415.jpeg?w=800&h=600&fit=crop&q=80" alt="The Westin Kolkata" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-900/70 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="flex items-center gap-1 mb-2">
                  {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 text-secondary-500 fill-secondary-500" />)}
                </div>
                <h3 className="font-heading text-2xl font-bold text-white">The Westin Kolkata Rajarhat</h3>
                <p className="text-white/80 font-body text-sm mt-1 flex items-center gap-1"><MapPin className="w-4 h-4" />Plot No, 2, AA II, Newtown, Kolkata 700135</p>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} className="flex flex-col justify-center">
              <h3 className="font-heading text-2xl font-bold text-primary-900 mb-4">Official Conference Hotel</h3>
              <p className="text-slate-600 font-body leading-relaxed mb-6">As a conference delegate, enjoy exclusive rates at The Westin Kolkata Rajarhat. Located in the heart of New Town, the hotel offers world-class amenities, exceptional dining, and is just minutes away from the conference venue.</p>
              
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="flex flex-col items-center text-center p-3 bg-slate-50 rounded-xl"><Wifi className="w-5 h-5 text-primary-900 mb-2" /><span className="text-xs font-body text-slate-600">Free Wi-Fi</span></div>
                <div className="flex flex-col items-center text-center p-3 bg-slate-50 rounded-xl"><Car className="w-5 h-5 text-primary-900 mb-2" /><span className="text-xs font-body text-slate-600">Parking</span></div>
                <div className="flex flex-col items-center text-center p-3 bg-slate-50 rounded-xl"><Utensils className="w-5 h-5 text-primary-900 mb-2" /><span className="text-xs font-body text-slate-600">Restaurant</span></div>
                <div className="flex flex-col items-center text-center p-3 bg-slate-50 rounded-xl"><Dumbbell className="w-5 h-5 text-primary-900 mb-2" /><span className="text-xs font-body text-slate-600">Fitness</span></div>
                <div className="flex flex-col items-center text-center p-3 bg-slate-50 rounded-xl"><Coffee className="w-5 h-5 text-primary-900 mb-2" /><span className="text-xs font-body text-slate-600">Lounge</span></div>
                <div className="flex flex-col items-center text-center p-3 bg-slate-50 rounded-xl"><Star className="w-5 h-5 text-primary-900 mb-2" /><span className="text-xs font-body text-slate-600">5-Star</span></div>
              </div>

              <div className="bg-secondary-50 rounded-xl p-4 border border-secondary-200">
                <p className="font-body font-medium text-secondary-900"><span className="text-secondary-500 font-bold">Special Offer:</span> Book accommodation during registration to avail exclusive delegate rates!</p>
              </div>
            </motion.div>
          </div>

          {/* Room Types */}
          <h3 className="font-heading text-2xl font-bold text-primary-900 text-center mb-8">Room Categories</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {/* Deluxe Room */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }} 
              animate={{ opacity: 1, y: 0 }} 
              className="bg-white rounded-2xl overflow-hidden shadow-lg border-2 border-transparent hover:border-primary-200 transition-all"
              data-testid="room-deluxe"
            >
              <div className="h-48 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=600&h=400&fit=crop&q=80" alt="Deluxe Room" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-6">
                <h4 className="font-heading text-xl font-bold text-primary-900 mb-2">Deluxe Room</h4>
                <div className="flex items-baseline gap-1 mb-4">
                  <span className="font-heading text-3xl font-bold text-primary-900">₹6,000</span>
                  <span className="text-slate-500 font-body text-sm">/night</span>
                </div>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-2 text-sm text-slate-600 font-body"><Check className="w-4 h-4 text-green-500" /> King/Twin beds</li>
                  <li className="flex items-center gap-2 text-sm text-slate-600 font-body"><Check className="w-4 h-4 text-green-500" /> 35 sqm room size</li>
                  <li className="flex items-center gap-2 text-sm text-slate-600 font-body"><Check className="w-4 h-4 text-green-500" /> City view</li>
                </ul>
                <Link to="/registration">
                  <Button className="w-full rounded-full font-body font-semibold bg-primary-900 hover:bg-primary-900/90 text-white">Book with Registration</Button>
                </Link>
              </div>
            </motion.div>

            {/* Premium Room - Recommended */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ delay: 0.1 }} 
              className="relative bg-white rounded-2xl overflow-hidden shadow-lg border-2 border-secondary-500 ring-2 ring-secondary-500 ring-offset-2"
              data-testid="room-premium"
            >
              <div className="absolute top-4 right-4 z-10 bg-secondary-500 text-primary-900 text-xs font-body font-semibold px-3 py-1 rounded-full">RECOMMENDED</div>
              <div className="h-48 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1590490360182-c33d57733427?w=600&h=400&fit=crop&q=80" alt="Premium Room" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-6">
                <h4 className="font-heading text-xl font-bold text-primary-900 mb-2">Premium Room</h4>
                <div className="flex items-baseline gap-1 mb-4">
                  <span className="font-heading text-3xl font-bold text-primary-900">₹8,000</span>
                  <span className="text-slate-500 font-body text-sm">/night</span>
                </div>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-2 text-sm text-slate-600 font-body"><Check className="w-4 h-4 text-green-500" /> King/Twin beds, 42 sqm</li>
                  <li className="flex items-center gap-2 text-sm text-slate-600 font-body"><Check className="w-4 h-4 text-green-500" /> Pool view</li>
                  <li className="flex items-center gap-2 text-sm text-slate-600 font-body"><Check className="w-4 h-4 text-green-500" /> Breakfast included</li>
                </ul>
                <Link to="/registration">
                  <Button className="w-full rounded-full font-body font-semibold bg-secondary-500 hover:bg-secondary-900 text-primary-900">Book with Registration</Button>
                </Link>
              </div>
            </motion.div>

            {/* Executive Suite */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ delay: 0.2 }} 
              className="bg-white rounded-2xl overflow-hidden shadow-lg border-2 border-transparent hover:border-primary-200 transition-all"
              data-testid="room-suite"
            >
              <div className="h-48 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=600&h=400&fit=crop&q=80" alt="Executive Suite" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-6">
                <h4 className="font-heading text-xl font-bold text-primary-900 mb-2">Executive Suite</h4>
                <div className="flex items-baseline gap-1 mb-4">
                  <span className="font-heading text-3xl font-bold text-primary-900">₹12,000</span>
                  <span className="text-slate-500 font-body text-sm">/night</span>
                </div>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-2 text-sm text-slate-600 font-body"><Check className="w-4 h-4 text-green-500" /> King bed, 65 sqm</li>
                  <li className="flex items-center gap-2 text-sm text-slate-600 font-body"><Check className="w-4 h-4 text-green-500" /> Panoramic view</li>
                  <li className="flex items-center gap-2 text-sm text-slate-600 font-body"><Check className="w-4 h-4 text-green-500" /> Club access</li>
                </ul>
                <Link to="/registration">
                  <Button className="w-full rounded-full font-body font-semibold bg-primary-900 hover:bg-primary-900/90 text-white">Book with Registration</Button>
                </Link>
              </div>
            </motion.div>
          </div>

          {/* Note */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="mt-12 text-center">
            <p className="text-sm text-slate-500 font-body">* Rates are exclusive for conference delegates. Reservations subject to availability. Check-in: 26th Nov | Check-out: 30th Nov 2026</p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
