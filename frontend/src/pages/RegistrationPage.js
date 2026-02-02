import { motion } from 'framer-motion';
import { ExternalLink, Users, GraduationCap, UserPlus, Wrench, Check } from 'lucide-react';
import { Button } from '../components/ui/button';

const categories = [
  {
    id: 'delegate',
    name: 'Delegate',
    icon: Users,
    description: 'Practicing dentists & specialists',
    pricing: { early_bird: 12000, regular: 15000, late: 18000 },
    features: ['Full conference access (3 days)', 'Scientific sessions & keynotes', 'Workshop participation', 'Conference kit', 'Lunch & refreshments', 'Gala dinner']
  },
  {
    id: 'student',
    name: 'Student',
    icon: GraduationCap,
    description: 'PG students & interns',
    pricing: { early_bird: 6000, regular: 8000, late: 10000 },
    features: ['Full conference access', 'Scientific sessions', 'Conference kit', 'Lunch & refreshments', 'Poster competition'],
    popular: true
  },
  {
    id: 'accompanying',
    name: 'Accompanying Person',
    icon: UserPlus,
    description: 'Family & companions',
    pricing: { standard: 5000 },
    features: ['Welcome reception', 'Gala dinner', 'City tour (optional)', 'Lunch & refreshments']
  },
  {
    id: 'workshop',
    name: 'Workshop Only',
    icon: Wrench,
    description: 'Hands-on workshops',
    pricing: { standard: 3000 },
    features: ['Single workshop access', 'Hands-on materials', 'Workshop certificate', 'Tea/coffee']
  }
];

export default function RegistrationPage() {
  // Replace with your actual Google Form URL
  const googleFormUrl = "https://docs.google.com/forms/d/e/YOUR_FORM_ID/viewform?embedded=true";

  return (
    <div className="pt-20" data-testid="registration-page">
      <div className="bg-primary-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-secondary-500 font-body font-semibold text-sm uppercase tracking-widest">Join Us</motion.span>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-4">Registration</motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-primary-100 font-body mt-4 max-w-2xl mx-auto">Secure your spot at India's premier implant dentistry conference</motion.p>
        </div>
      </div>

      {/* Pricing Cards */}
      <section className="py-20 bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="font-heading text-2xl font-bold text-primary-900 text-center mb-12">Registration Categories</motion.h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {categories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`relative bg-white rounded-2xl p-6 border-2 shadow-sm ${category.popular ? 'border-secondary-500 ring-2 ring-secondary-500 ring-offset-2' : 'border-slate-200'}`}
                data-testid={`category-${category.id}`}
              >
                {category.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-secondary-500 text-primary-900 text-xs font-body font-semibold px-3 py-1 rounded-full">POPULAR</span>
                )}
                <div className="w-12 h-12 bg-primary-50 rounded-xl flex items-center justify-center mb-4">
                  <category.icon className="w-6 h-6 text-primary-900" />
                </div>
                <h3 className="font-heading text-xl font-bold text-primary-900 mb-1">{category.name}</h3>
                <p className="text-sm text-slate-500 font-body mb-4">{category.description}</p>
                
                {/* Pricing */}
                <div className="space-y-2 mb-4">
                  {category.pricing.early_bird && (
                    <div className="flex justify-between items-center text-sm">
                      <span className="font-body text-slate-600">Early Bird</span>
                      <span className="font-body font-bold text-primary-900">₹{category.pricing.early_bird.toLocaleString()}</span>
                    </div>
                  )}
                  {category.pricing.regular && (
                    <div className="flex justify-between items-center text-sm">
                      <span className="font-body text-slate-600">Regular</span>
                      <span className="font-body font-bold text-primary-900">₹{category.pricing.regular.toLocaleString()}</span>
                    </div>
                  )}
                  {category.pricing.late && (
                    <div className="flex justify-between items-center text-sm">
                      <span className="font-body text-slate-600">On-site</span>
                      <span className="font-body font-bold text-primary-900">₹{category.pricing.late.toLocaleString()}</span>
                    </div>
                  )}
                  {category.pricing.standard && (
                    <div className="flex justify-between items-center text-sm">
                      <span className="font-body text-slate-600">Standard</span>
                      <span className="font-body font-bold text-primary-900">₹{category.pricing.standard.toLocaleString()}</span>
                    </div>
                  )}
                </div>

                <ul className="space-y-2">
                  {category.features.slice(0, 4).map((feature, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-slate-600 font-body">
                      <Check className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Google Form Embed */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-white rounded-2xl p-8 shadow-xl border border-slate-200 max-w-4xl mx-auto"
          >
            <h3 className="font-heading text-2xl font-bold text-primary-900 text-center mb-6">Register Now</h3>
            <p className="text-slate-600 font-body text-center mb-8">Fill out the form below to complete your registration</p>
            
            {/* Google Form Embed */}
            <div className="bg-slate-50 rounded-xl overflow-hidden" data-testid="google-form-container">
              <iframe
                src={googleFormUrl}
                width="100%"
                height="800"
                frameBorder="0"
                marginHeight="0"
                marginWidth="0"
                title="Registration Form"
                className="w-full"
              >
                Loading…
              </iframe>
            </div>

            {/* Alternative: Direct Link */}
            <div className="mt-6 text-center">
              <p className="text-sm text-slate-500 font-body mb-4">Having trouble with the form? Click below to open in a new tab</p>
              <a
                href="https://docs.google.com/forms/d/e/YOUR_FORM_ID/viewform"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2"
              >
                <Button className="bg-secondary-500 hover:bg-secondary-900 text-primary-900 font-body font-semibold px-6 py-3 rounded-full" data-testid="open-form-btn">
                  Open Registration Form
                  <ExternalLink className="w-4 h-4 ml-2" />
                </Button>
              </a>
            </div>
          </motion.div>

          {/* Payment Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-12 text-center"
          >
            <div className="bg-primary-50 rounded-xl p-6 max-w-2xl mx-auto">
              <h4 className="font-heading font-semibold text-primary-900 mb-2">Payment Information</h4>
              <p className="text-sm text-slate-600 font-body">
                After submitting the form, you will receive payment instructions via email. 
                Payment can be made via UPI, Bank Transfer, or Demand Draft.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
