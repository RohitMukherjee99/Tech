import { motion } from 'framer-motion';
import { Download, FileText, Image, FileSpreadsheet, ExternalLink } from 'lucide-react';
import { Button } from '../components/ui/button';

const downloads = [
  { title: 'Conference Brochure', description: 'Complete details about the 3rd OSI Conference 2026', icon: FileText, type: 'PDF', size: '2.5 MB', url: '#' },
  { title: 'Scientific Program', description: 'Detailed schedule of all sessions and workshops', icon: FileSpreadsheet, type: 'PDF', size: '1.8 MB', url: '#' },
  { title: 'Abstract Submission Guidelines', description: 'Guidelines for submitting research abstracts', icon: FileText, type: 'PDF', size: '500 KB', url: '#' },
  { title: 'Sponsorship Prospectus', description: 'Sponsorship opportunities and benefits', icon: FileText, type: 'PDF', size: '3.2 MB', url: '#' },
  { title: 'Trade Exhibition Layout', description: 'Exhibition hall floor plan and stall details', icon: Image, type: 'PDF', size: '1.5 MB', url: '#' },
  { title: 'Accommodation Booking Form', description: 'Form for booking hotel accommodation', icon: FileText, type: 'PDF', size: '400 KB', url: '#' },
  { title: 'Workshop Registration Form', description: 'Separate form for workshop-only registration', icon: FileText, type: 'PDF', size: '350 KB', url: '#' },
  { title: 'Certificate Templates', description: 'Sample certificates for speakers and attendees', icon: Image, type: 'PDF', size: '800 KB', url: '#' }
];

export default function DownloadsPage() {
  return (
    <div className="pt-20" data-testid="downloads-page">
      <div className="bg-primary-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-secondary-500 font-body font-semibold text-sm uppercase tracking-widest">Resources</motion.span>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-4">Downloads</motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-primary-100 font-body mt-4 max-w-2xl mx-auto">Access all conference-related documents and resources</motion.p>
        </div>
      </div>

      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {downloads.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="bg-white rounded-xl p-6 shadow-sm border border-slate-200 card-lift hover:border-primary-200"
                data-testid={`download-item-${index}`}
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary-50 rounded-xl flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-6 h-6 text-primary-900" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-heading font-semibold text-primary-900 mb-1">{item.title}</h3>
                    <p className="text-sm text-slate-500 font-body mb-3">{item.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-slate-400 font-body">{item.type} • {item.size}</span>
                      <a href={item.url} target="_blank" rel="noopener noreferrer">
                        <Button variant="ghost" size="sm" className="text-primary-900 hover:text-secondary-500 hover:bg-primary-50 p-2 h-auto">
                          <Download className="w-4 h-4" />
                        </Button>
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Quick Links Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-16"
          >
            <h2 className="font-heading text-2xl font-bold text-primary-900 text-center mb-8">Quick Links</h2>
            <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
              <a
                href="https://www.ossindia.org/membership"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 bg-white rounded-xl p-6 shadow-sm border border-slate-200 hover:border-secondary-500 transition-colors group"
                data-testid="osi-membership-download"
              >
                <div className="w-12 h-12 bg-secondary-50 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-secondary-500 transition-colors">
                  <ExternalLink className="w-6 h-6 text-secondary-900 group-hover:text-primary-900" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-primary-900">OSI Membership</h3>
                  <p className="text-sm text-slate-500 font-body">Join the Osseointegration Society of India</p>
                </div>
              </a>

              <a
                href="https://www.ossindia.org/fellowship"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 bg-white rounded-xl p-6 shadow-sm border border-slate-200 hover:border-secondary-500 transition-colors group"
                data-testid="osi-fellowship-download"
              >
                <div className="w-12 h-12 bg-secondary-50 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-secondary-500 transition-colors">
                  <ExternalLink className="w-6 h-6 text-secondary-900 group-hover:text-primary-900" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-primary-900">OSI Fellowship</h3>
                  <p className="text-sm text-slate-500 font-body">Apply for OSI Fellowship program</p>
                </div>
              </a>
            </div>
          </motion.div>

          {/* Note */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-12 text-center"
          >
            <p className="text-sm text-slate-500 font-body">
              * Documents will be updated as more information becomes available. Last updated: December 2025
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
