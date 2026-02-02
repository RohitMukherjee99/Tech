import { motion } from 'framer-motion';
import { Target, Users, Award, Lightbulb } from 'lucide-react';

export default function AboutPage() {
  const objectives = [
    { icon: Target, title: 'Clinical Excellence', description: 'Advancing evidence-based implant dentistry practices through cutting-edge research presentations' },
    { icon: Users, title: 'Knowledge Exchange', description: 'Facilitating collaboration between clinicians, researchers, and industry leaders worldwide' },
    { icon: Award, title: 'Skill Development', description: 'Hands-on workshops and live demonstrations by renowned experts in osseointegration' },
    { icon: Lightbulb, title: 'Innovation Showcase', description: 'Exploring the latest technologies and materials in implant dentistry' }
  ];

  return (
    <div className="pt-20" data-testid="about-page">
      {/* Hero Banner */}
      <div className="bg-primary-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-secondary-500 font-body font-semibold text-sm uppercase tracking-widest"
          >
            About The Conference
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-4"
          >
            3RD OSI CONFERENCE KOLKATA 2026
          </motion.h1>
        </div>
      </div>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-primary-900 mb-6 leading-tight">
                Where <span className="text-3d-gold">Osseointegration</span> Meets Innovation
              </h2>

              <p className="text-lg text-slate-600 font-body leading-relaxed mb-6">
                The <strong className="text-primary-900">3rd OSI Conference Kolkata 2026</strong> brings together 
                the brightest minds in implant dentistry for three days of intensive learning, 
                networking, and clinical excellence. From beginners taking their first steps 
                in implantology to masters refining their expertise, this conference offers 
                something for everyone.
              </p>

              <p className="text-lg text-slate-600 font-body leading-relaxed mb-8">
                Join us as we explore the frontiers of <strong className="text-primary-900">bone-implant integration</strong>, 
                advanced prosthetic solutions, and the latest surgical techniques that are 
                shaping the future of dental rehabilitation.
              </p>

              <div className="bg-primary-900 rounded-2xl p-6 text-white">
                <p className="font-heading text-xl font-semibold mb-2">
                  "From Beginners to Masters"
                </p>
                <p className="font-body text-primary-100 text-sm">
                  A comprehensive program designed for every level of expertise in implant dentistry
                </p>
              </div>
            </motion.div>

            {/* Right Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="space-y-8"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1565090567208-c8038cfcf6cd?w=800&auto=format&fit=crop&q=80"
                  alt="Dental implant technology"
                  className="w-full h-72 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-900/60 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-white font-heading text-xl font-semibold">
                    Excellence in Implant Dentistry
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {objectives.map((objective, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    className="bg-slate-50 rounded-xl p-5 card-lift border border-slate-100"
                  >
                    <div className="w-10 h-10 bg-primary-900/10 rounded-lg flex items-center justify-center mb-3">
                      <objective.icon className="w-5 h-5 text-primary-900" />
                    </div>
                    <h4 className="font-heading font-semibold text-primary-900 mb-1 text-sm">
                      {objective.title}
                    </h4>
                    <p className="text-xs text-slate-500 font-body leading-relaxed">
                      {objective.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
