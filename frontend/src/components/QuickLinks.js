import { motion } from 'framer-motion';
import { Award, Users, ExternalLink } from 'lucide-react';

export default function QuickLinks() {
  return (
    <motion.div
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ delay: 1, duration: 0.5 }}
      className="fixed right-0 top-1/2 -translate-y-1/2 z-40 hidden lg:block"
      data-testid="quick-links-widget"
    >
      <div className="bg-primary-900 rounded-l-xl shadow-2xl overflow-hidden">
        {/* OSI Membership */}
        <a
          href="https://www.ossindia.org/membership"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 px-4 py-4 text-white hover:bg-primary-900/80 transition-colors border-b border-white/10 group"
          data-testid="osi-membership-link"
        >
          <div className="w-10 h-10 bg-secondary-500 rounded-lg flex items-center justify-center flex-shrink-0">
            <Users className="w-5 h-5 text-primary-900" />
          </div>
          <div className="pr-2">
            <p className="font-body font-semibold text-sm">OSI Membership</p>
            <p className="text-xs text-white/70">Join Now</p>
          </div>
          <ExternalLink className="w-4 h-4 text-white/50 group-hover:text-secondary-500 transition-colors" />
        </a>

        {/* OSI Fellowship */}
        <a
          href="https://www.ossindia.org/fellowship"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 px-4 py-4 text-white hover:bg-primary-900/80 transition-colors group"
          data-testid="osi-fellowship-link"
        >
          <div className="w-10 h-10 bg-secondary-500 rounded-lg flex items-center justify-center flex-shrink-0">
            <Award className="w-5 h-5 text-primary-900" />
          </div>
          <div className="pr-2">
            <p className="font-body font-semibold text-sm">OSI Fellowship</p>
            <p className="text-xs text-white/70">Apply Now</p>
          </div>
          <ExternalLink className="w-4 h-4 text-white/50 group-hover:text-secondary-500 transition-colors" />
        </a>
      </div>
    </motion.div>
  );
}
