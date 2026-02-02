import { motion } from 'framer-motion';
import { ExternalLink, Award, Star, Medal } from 'lucide-react';
import { Button } from '../components/ui/button';

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

const exhibitorNames = ['Implant Direct', 'MIS Implants', 'BEGO', 'Alpha Bio', 'Bredent', 'Southern Implants', 'BTI', 'Implance', 'IDT', 'DIO Implants'];

export default function SponsorsPage() {
  return (
    <div className="pt-20" data-testid="sponsors-page">
      <div className="bg-primary-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-secondary-500 font-body font-semibold text-sm uppercase tracking-widest">Our Partners</motion.span>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-4">Sponsors & Trade Exhibition</motion.h1>
        </div>
      </div>

      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Platinum */}
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="mb-12">
            <div className="flex items-center gap-3 mb-6"><div className="p-2 rounded-lg bg-gradient-to-r from-slate-100 to-slate-200"><Star className="w-5 h-5 text-primary-900" /></div><h3 className="font-heading text-xl font-bold text-primary-900">Platinum Sponsors</h3></div>
            <div className="grid md:grid-cols-2 gap-6">
              {platinumSponsors.map((sponsor, index) => (
                <motion.div key={sponsor.name} whileHover={{ scale: 1.05 }} className="bg-gradient-to-r from-slate-100 to-slate-200 rounded-xl p-8 flex items-center justify-center border border-slate-300 hover:shadow-lg transition-shadow"><img src={sponsor.logo} alt={sponsor.name} className="max-h-16 object-contain" /></motion.div>
              ))}
            </div>
          </motion.div>

          {/* Gold */}
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="mb-12">
            <div className="flex items-center gap-3 mb-6"><div className="p-2 rounded-lg bg-gradient-to-r from-amber-50 to-yellow-50"><Award className="w-5 h-5 text-primary-900" /></div><h3 className="font-heading text-xl font-bold text-primary-900">Gold Sponsors</h3></div>
            <div className="grid md:grid-cols-3 gap-6">
              {goldSponsors.map((sponsor, index) => (
                <motion.div key={sponsor.name} whileHover={{ scale: 1.05 }} className="bg-gradient-to-r from-amber-50 to-yellow-50 rounded-xl p-8 flex items-center justify-center border border-secondary-300 hover:shadow-lg transition-shadow"><img src={sponsor.logo} alt={sponsor.name} className="max-h-16 object-contain" /></motion.div>
              ))}
            </div>
          </motion.div>

          {/* Silver */}
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="mb-16">
            <div className="flex items-center gap-3 mb-6"><div className="p-2 rounded-lg bg-slate-50"><Medal className="w-5 h-5 text-primary-900" /></div><h3 className="font-heading text-xl font-bold text-primary-900">Silver Sponsors</h3></div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {silverSponsors.map((sponsor, index) => (
                <motion.div key={sponsor.name} whileHover={{ scale: 1.05 }} className="bg-slate-50 rounded-xl p-8 flex items-center justify-center border border-slate-200 hover:shadow-lg transition-shadow"><img src={sponsor.logo} alt={sponsor.name} className="max-h-16 object-contain" /></motion.div>
              ))}
            </div>
          </motion.div>

          {/* Trade Exhibition */}
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="bg-primary-900 rounded-2xl p-8 lg:p-12">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="font-heading text-2xl lg:text-3xl font-bold text-white mb-4">Trade Exhibition 2026</h3>
                <p className="text-primary-100 font-body leading-relaxed mb-6">Explore the latest in implant technology, surgical instruments, and digital dentistry solutions.</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {exhibitorNames.map(exhibitor => <span key={exhibitor} className="bg-white/10 text-white/90 text-sm font-body px-3 py-1 rounded-full">{exhibitor}</span>)}
                </div>
                <Button className="bg-secondary-500 hover:bg-secondary-900 text-primary-900 font-body font-semibold px-6 py-3 rounded-full">Become an Exhibitor</Button>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/10 rounded-xl p-6 text-center"><p className="font-heading text-4xl font-bold text-secondary-500">30+</p><p className="text-white/80 font-body text-sm">Exhibitors</p></div>
                <div className="bg-white/10 rounded-xl p-6 text-center"><p className="font-heading text-4xl font-bold text-secondary-500">50+</p><p className="text-white/80 font-body text-sm">Stalls</p></div>
                <div className="bg-white/10 rounded-xl p-6 text-center"><p className="font-heading text-4xl font-bold text-secondary-500">3</p><p className="text-white/80 font-body text-sm">Days</p></div>
                <div className="bg-white/10 rounded-xl p-6 text-center"><p className="font-heading text-4xl font-bold text-secondary-500">500+</p><p className="text-white/80 font-body text-sm">Products</p></div>
              </div>
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="mt-12 text-center">
            <p className="text-slate-600 font-body mb-4">Interested in sponsoring the 3rd OSI Conference Kolkata 2026?</p>
            <Button variant="outline" className="border-2 border-primary-900 text-primary-900 hover:bg-primary-900 hover:text-white font-body font-semibold px-6 py-3 rounded-full">Download Sponsorship Brochure<ExternalLink className="ml-2 w-4 h-4" /></Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
