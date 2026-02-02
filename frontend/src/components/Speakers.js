import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink } from 'lucide-react';

const speakers = [
  {
    name: 'Prof. Sanjay Gupta',
    title: 'Keynote Speaker',
    specialty: 'Oral & Maxillofacial Surgery',
    affiliation: 'AIIMS Delhi',
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=500&fit=crop&q=80',
    featured: true
  },
  {
    name: 'Dr. Meenakshi Iyer',
    title: 'Keynote Speaker',
    specialty: 'Prosthodontics & Implantology',
    affiliation: 'CMC Vellore',
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=500&fit=crop&q=80',
    featured: true
  },
  {
    name: 'Dr. Arjun Krishnamurthy',
    title: 'Guest Faculty',
    specialty: 'Periodontics',
    affiliation: 'Manipal Academy',
    image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400&h=500&fit=crop&q=80'
  },
  {
    name: 'Dr. Kavitha Ranganathan',
    title: 'Guest Faculty',
    specialty: 'Oral Pathology',
    affiliation: 'JIPMER Puducherry',
    image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&h=500&fit=crop&q=80'
  },
  {
    name: 'Dr. Rohit Malhotra',
    title: 'Workshop Conductor',
    specialty: 'Digital Implantology',
    affiliation: 'Max Healthcare',
    image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=400&h=500&fit=crop&q=80'
  },
  {
    name: 'Dr. Sunitha Nair',
    title: 'Guest Faculty',
    specialty: 'Implant Prosthodontics',
    affiliation: 'Kerala Dental College',
    image: 'https://images.unsplash.com/photo-1651008376811-b90baee60c1f?w=400&h=500&fit=crop&q=80'
  },
  {
    name: 'Dr. Vinod Sharma',
    title: 'Workshop Conductor',
    specialty: 'Bone Grafting',
    affiliation: 'Fortis Hospital',
    image: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=400&h=500&fit=crop&q=80'
  },
  {
    name: 'Dr. Ananya Das',
    title: 'Guest Faculty',
    specialty: 'Aesthetic Dentistry',
    affiliation: 'Apollo Clinic Kolkata',
    image: 'https://images.unsplash.com/photo-1614608682850-e0d6ed316d47?w=400&h=500&fit=crop&q=80'
  }
];

export default function Speakers() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }
    }
  };

  return (
    <section id="speakers" className="py-20 md:py-32 bg-slate-50" data-testid="speakers-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-secondary-500 font-body font-semibold text-sm uppercase tracking-widest">
            Expert Panel
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-900 mt-4 mb-6">
            Distinguished <span className="text-3d-gold">Speakers</span>
          </h2>
          <p className="text-lg text-slate-600 font-body max-w-2xl mx-auto">
            Learn from India's leading implantologists and internationally acclaimed experts
          </p>
        </motion.div>

        {/* Featured Speakers - Bento Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 gap-6 mb-8"
        >
          {speakers.filter(s => s.featured).map((speaker, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative h-96 rounded-2xl overflow-hidden"
              data-testid={`featured-speaker-${index}`}
            >
              <img
                src={speaker.image}
                alt={speaker.name}
                className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-900 via-primary-900/60 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <span className="inline-block bg-secondary-500 text-primary-900 text-xs font-body font-semibold px-3 py-1 rounded-full mb-3">
                  {speaker.title}
                </span>
                <h3 className="font-heading text-2xl lg:text-3xl font-bold text-white mb-2">
                  {speaker.name}
                </h3>
                <p className="text-white/90 font-body mb-1">{speaker.specialty}</p>
                <p className="text-white/70 font-body text-sm">{speaker.affiliation}</p>
              </div>
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <button className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors">
                  <ExternalLink className="w-5 h-5" />
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Other Speakers Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {speakers.filter(s => !s.featured).map((speaker, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group bg-white rounded-xl overflow-hidden shadow-sm card-lift border border-slate-100"
              data-testid={`speaker-${index}`}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={speaker.image}
                  alt={speaker.name}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
                />
                <div className="absolute top-3 left-3">
                  <span className="bg-primary-900/90 text-white text-xs font-body font-medium px-2 py-1 rounded-full">
                    {speaker.title}
                  </span>
                </div>
              </div>
              <div className="p-5">
                <h4 className="font-heading font-semibold text-primary-900 text-lg mb-1">
                  {speaker.name}
                </h4>
                <p className="text-sm text-secondary-900 font-body font-medium mb-1">{speaker.specialty}</p>
                <p className="text-sm text-slate-500 font-body">{speaker.affiliation}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center mt-12"
        >
          <button className="inline-flex items-center gap-2 text-primary-900 font-body font-semibold hover:text-secondary-500 transition-colors">
            View Complete Faculty List
            <ExternalLink className="w-4 h-4" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
