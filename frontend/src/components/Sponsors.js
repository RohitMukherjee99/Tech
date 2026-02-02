import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Award, Star, Medal } from 'lucide-react';
import { Button } from './ui/button';

const platinumSponsors = [
  { name: 'Nobel Biocare', logo: 'https://via.placeholder.com/200x80/002366/FFFFFF?text=Nobel+Biocare' },
  { name: 'Straumann', logo: 'https://via.placeholder.com/200x80/002366/FFFFFF?text=Straumann' }
];

const goldSponsors = [
  { name: 'Dentsply Sirona', logo: 'https://via.placeholder.com/180x70/D4AF37/002366?text=Dentsply+Sirona' },
  { name: 'Osstem', logo: 'https://via.placeholder.com/180x70/D4AF37/002366?text=Osstem' },
  { name: 'BioHorizons', logo: 'https://via.placeholder.com/180x70/D4AF37/002366?text=BioHorizons' }
];

const silverSponsors = [
  { name: 'MegaGen', logo: 'https://via.placeholder.com/160x60/1e293b/FFFFFF?text=MegaGen' },
  { name: 'Neodent', logo: 'https://via.placeholder.com/160x60/1e293b/FFFFFF?text=Neodent' },
  { name: 'Zimmer Biomet', logo: 'https://via.placeholder.com/160x60/1e293b/FFFFFF?text=Zimmer+Biomet' },
  { name: 'Anthogyr', logo: 'https://via.placeholder.com/160x60/1e293b/FFFFFF?text=Anthogyr' }
];

const exhibitorNames = [
  'Implant Direct', 'MIS Implants', 'BEGO', 'Alpha Bio', 'Bredent',
  'Southern Implants', 'BTI', 'Implance', 'IDT', 'DIO Implants'
];

export default function Sponsors() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="sponsors" className="py-20 md:py-32 bg-slate-50" data-testid="sponsors-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-secondary-500 font-body font-semibold text-sm uppercase tracking-widest">
            Our Partners
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-900 mt-4 mb-6">
            Sponsors & <span className="text-3d-gold">Trade Exhibition</span>
          </h2>
          <p className="text-lg text-slate-600 font-body max-w-2xl mx-auto">
            Leading implant companies and dental industry partners supporting the 3rd OSI Conference
          </p>
        </motion.div>

        {/* Platinum Sponsors */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 rounded-lg bg-gradient-to-r from-slate-100 to-slate-200">
              <Star className="w-5 h-5 text-primary-900" />
            </div>
            <h3 className="font-heading text-xl font-bold text-primary-900">Platinum Sponsors</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {platinumSponsors.map((sponsor, index) => (
              <motion.div
                key={sponsor.name}
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-r from-slate-100 to-slate-200 rounded-xl p-8 flex items-center justify-center border border-slate-300 transition-shadow hover:shadow-lg"
                data-testid={`sponsor-platinum-${index}`}
              >
                <img src={sponsor.logo} alt={sponsor.name} className="max-h-16 object-contain" />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Gold Sponsors */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 rounded-lg bg-gradient-to-r from-amber-50 to-yellow-50">
              <Award className="w-5 h-5 text-primary-900" />
            </div>
            <h3 className="font-heading text-xl font-bold text-primary-900">Gold Sponsors</h3>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {goldSponsors.map((sponsor, index) => (
              <motion.div
                key={sponsor.name}
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-r from-amber-50 to-yellow-50 rounded-xl p-8 flex items-center justify-center border border-secondary-300 transition-shadow hover:shadow-lg"
                data-testid={`sponsor-gold-${index}`}
              >
                <img src={sponsor.logo} alt={sponsor.name} className="max-h-16 object-contain" />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Silver Sponsors */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 rounded-lg bg-slate-50">
              <Medal className="w-5 h-5 text-primary-900" />
            </div>
            <h3 className="font-heading text-xl font-bold text-primary-900">Silver Sponsors</h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {silverSponsors.map((sponsor, index) => (
              <motion.div
                key={sponsor.name}
                whileHover={{ scale: 1.05 }}
                className="bg-slate-50 rounded-xl p-8 flex items-center justify-center border border-slate-200 transition-shadow hover:shadow-lg"
                data-testid={`sponsor-silver-${index}`}
              >
                <img src={sponsor.logo} alt={sponsor.name} className="max-h-16 object-contain" />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Trade Exhibition */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-primary-900 rounded-2xl p-8 lg:p-12"
        >
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="font-heading text-2xl lg:text-3xl font-bold text-white mb-4">
                Trade Exhibition 2026
              </h3>
              <p className="text-primary-100 font-body leading-relaxed mb-6">
                Explore the latest in implant technology, surgical instruments, and digital dentistry 
                solutions. Our exhibition hall features leading manufacturers and distributors 
                showcasing cutting-edge products and innovations.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {exhibitorNames.map((exhibitor) => (
                  <span key={exhibitor} className="bg-white/10 text-white/90 text-sm font-body px-3 py-1 rounded-full">
                    {exhibitor}
                  </span>
                ))}
              </div>
              <Button className="bg-secondary-500 hover:bg-secondary-900 text-primary-900 font-body font-semibold px-6 py-3 rounded-full">
                Become an Exhibitor
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/10 rounded-xl p-6 text-center">
                <p className="font-heading text-4xl font-bold text-secondary-500">30+</p>
                <p className="text-white/80 font-body text-sm">Exhibitors</p>
              </div>
              <div className="bg-white/10 rounded-xl p-6 text-center">
                <p className="font-heading text-4xl font-bold text-secondary-500">50+</p>
                <p className="text-white/80 font-body text-sm">Stalls</p>
              </div>
              <div className="bg-white/10 rounded-xl p-6 text-center">
                <p className="font-heading text-4xl font-bold text-secondary-500">3</p>
                <p className="text-white/80 font-body text-sm">Days</p>
              </div>
              <div className="bg-white/10 rounded-xl p-6 text-center">
                <p className="font-heading text-4xl font-bold text-secondary-500">500+</p>
                <p className="text-white/80 font-body text-sm">Products</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Sponsorship CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-12 text-center"
        >
          <p className="text-slate-600 font-body mb-4">
            Interested in sponsoring the 3rd OSI Conference Kolkata 2026?
          </p>
          <Button
            variant="outline"
            className="border-2 border-primary-900 text-primary-900 hover:bg-primary-900 hover:text-white font-body font-semibold px-6 py-3 rounded-full"
          >
            Download Sponsorship Brochure
            <ExternalLink className="ml-2 w-4 h-4" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
