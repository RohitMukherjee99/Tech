import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Mail, Linkedin } from 'lucide-react';

const committeeMembers = [
  {
    name: 'Dr. Rajesh Kumar',
    role: 'Conference Chairperson',
    designation: 'Professor & Head, Prosthodontics',
    organization: 'Government Dental College, Kolkata',
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop&q=80',
    featured: true
  },
  {
    name: 'Dr. Priya Sharma',
    role: 'Scientific Committee Chair',
    designation: 'Professor, Oral Surgery',
    organization: 'AIIMS, New Delhi',
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop&q=80',
    featured: true
  },
  {
    name: 'Dr. Sunil Menon',
    role: 'Organizing Secretary',
    designation: 'Consultant Implantologist',
    organization: 'Apollo Hospitals, Chennai',
    image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400&h=400&fit=crop&q=80',
    featured: true
  },
  {
    name: 'Dr. Anita Desai',
    role: 'Treasurer',
    designation: 'Senior Consultant',
    organization: 'Tata Memorial Hospital, Mumbai',
    image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&h=400&fit=crop&q=80'
  },
  {
    name: 'Dr. Vikram Singh',
    role: 'Workshop Coordinator',
    designation: 'Associate Professor',
    organization: 'PGI Chandigarh',
    image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=400&h=400&fit=crop&q=80'
  },
  {
    name: 'Dr. Meera Patel',
    role: 'Registration Chair',
    designation: 'Clinical Director',
    organization: 'Dental Excellence, Ahmedabad',
    image: 'https://images.unsplash.com/photo-1651008376811-b90baee60c1f?w=400&h=400&fit=crop&q=80'
  }
];

export default function Committee() {
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
    <section id="committee" className="py-20 md:py-32 bg-slate-50" data-testid="committee-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-secondary-500 font-body font-semibold text-sm uppercase tracking-widest">
            Leadership
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-900 mt-4 mb-6">
            Organizing <span className="text-3d-gold">Committee</span>
          </h2>
          <p className="text-lg text-slate-600 font-body max-w-2xl mx-auto">
            Meet the distinguished experts leading the 3rd OSI Conference Kolkata 2026
          </p>
        </motion.div>

        {/* Featured Members */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-3 gap-8 mb-12"
        >
          {committeeMembers.filter(m => m.featured).map((member, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white rounded-2xl overflow-hidden shadow-lg card-lift group"
              data-testid={`committee-member-${index}`}
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-900/80 via-primary-900/20 to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="bg-secondary-500 text-primary-900 text-xs font-body font-semibold px-3 py-1 rounded-full">
                    {member.role}
                  </span>
                </div>
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className="font-heading text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-sm text-white/90 font-body">{member.designation}</p>
                </div>
              </div>
              <div className="p-5">
                <p className="text-sm text-slate-600 font-body mb-4">{member.organization}</p>
                <div className="flex gap-3">
                  <button className="w-9 h-9 rounded-lg bg-primary-50 text-primary-900 flex items-center justify-center hover:bg-primary-900 hover:text-white transition-colors">
                    <Mail className="w-4 h-4" />
                  </button>
                  <button className="w-9 h-9 rounded-lg bg-primary-50 text-primary-900 flex items-center justify-center hover:bg-primary-900 hover:text-white transition-colors">
                    <Linkedin className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Other Members */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {committeeMembers.filter(m => !m.featured).map((member, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white rounded-xl p-5 flex items-center gap-4 shadow-sm card-lift border border-slate-100"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-16 h-16 rounded-xl object-cover"
              />
              <div className="flex-1">
                <span className="text-xs text-secondary-900 font-body font-medium bg-secondary-50 px-2 py-0.5 rounded">
                  {member.role}
                </span>
                <h4 className="font-heading font-semibold text-primary-900 mt-1">{member.name}</h4>
                <p className="text-xs text-slate-500 font-body">{member.organization}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
