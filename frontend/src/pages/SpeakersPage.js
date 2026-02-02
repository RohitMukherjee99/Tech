import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const speakers = [
  { name: 'Prof. Sanjay Gupta', title: 'Keynote Speaker', specialty: 'Oral & Maxillofacial Surgery', affiliation: 'AIIMS Delhi', image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=500&fit=crop&q=80', featured: true },
  { name: 'Dr. Meenakshi Iyer', title: 'Keynote Speaker', specialty: 'Prosthodontics & Implantology', affiliation: 'CMC Vellore', image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=500&fit=crop&q=80', featured: true },
  { name: 'Dr. Arjun Krishnamurthy', title: 'Guest Faculty', specialty: 'Periodontics', affiliation: 'Manipal Academy', image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400&h=500&fit=crop&q=80', featured: false },
  { name: 'Dr. Kavitha Ranganathan', title: 'Guest Faculty', specialty: 'Oral Pathology', affiliation: 'JIPMER Puducherry', image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&h=500&fit=crop&q=80', featured: false },
  { name: 'Dr. Rohit Malhotra', title: 'Workshop Conductor', specialty: 'Digital Implantology', affiliation: 'Max Healthcare', image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=400&h=500&fit=crop&q=80', featured: false },
  { name: 'Dr. Sunitha Nair', title: 'Guest Faculty', specialty: 'Implant Prosthodontics', affiliation: 'Kerala Dental College', image: 'https://images.unsplash.com/photo-1651008376811-b90baee60c1f?w=400&h=500&fit=crop&q=80', featured: false }
];

export default function SpeakersPage() {
  return (
    <div className="pt-20" data-testid="speakers-page">
      <div className="bg-primary-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-secondary-500 font-body font-semibold text-sm uppercase tracking-widest">Expert Panel</motion.span>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-4">Distinguished Speakers</motion.h1>
        </div>
      </div>

      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Featured */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {speakers.filter(s => s.featured).map((speaker, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }} className="group relative h-96 rounded-2xl overflow-hidden" data-testid={`featured-speaker-${index}`}>
                <img src={speaker.image} alt={speaker.name} className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-900 via-primary-900/60 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <span className="inline-block bg-secondary-500 text-primary-900 text-xs font-body font-semibold px-3 py-1 rounded-full mb-3">{speaker.title}</span>
                  <h3 className="font-heading text-2xl lg:text-3xl font-bold text-white mb-2">{speaker.name}</h3>
                  <p className="text-white/90 font-body mb-1">{speaker.specialty}</p>
                  <p className="text-white/70 font-body text-sm">{speaker.affiliation}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Others */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {speakers.filter(s => !s.featured).map((speaker, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 + index * 0.1 }} className="group bg-white rounded-xl overflow-hidden shadow-sm card-lift border border-slate-100" data-testid={`speaker-${index}`}>
                <div className="relative h-48 overflow-hidden">
                  <img src={speaker.image} alt={speaker.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105" />
                  <div className="absolute top-3 left-3"><span className="bg-primary-900/90 text-white text-xs font-body font-medium px-2 py-1 rounded-full">{speaker.title}</span></div>
                </div>
                <div className="p-5">
                  <h4 className="font-heading font-semibold text-primary-900 text-lg mb-1">{speaker.name}</h4>
                  <p className="text-sm text-secondary-900 font-body font-medium mb-1">{speaker.specialty}</p>
                  <p className="text-sm text-slate-500 font-body">{speaker.affiliation}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
