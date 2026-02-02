import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Check, Users, GraduationCap, UserPlus, Wrench, AlertCircle } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Checkbox } from './ui/checkbox';
import axios from 'axios';
import { toast } from 'sonner';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const categories = [
  {
    id: 'delegate',
    name: 'Delegate',
    icon: Users,
    description: 'Practicing dentists & specialists',
    pricing: {
      early_bird: { price: 12000, label: 'Early Bird', until: '31st Aug 2026' },
      regular: { price: 15000, label: 'Regular', until: '31st Oct 2026' },
      late: { price: 18000, label: 'On-site', until: '27th Nov 2026' }
    },
    features: [
      'Full conference access (3 days)',
      'Scientific sessions & keynotes',
      'Workshop participation (limited)',
      'Conference kit & materials',
      'Lunch & refreshments',
      'Certificate of attendance',
      'Gala dinner access'
    ]
  },
  {
    id: 'student',
    name: 'Student',
    icon: GraduationCap,
    description: 'PG students & interns',
    pricing: {
      early_bird: { price: 6000, label: 'Early Bird', until: '31st Aug 2026' },
      regular: { price: 8000, label: 'Regular', until: '31st Oct 2026' },
      late: { price: 10000, label: 'On-site', until: '27th Nov 2026' }
    },
    features: [
      'Full conference access (3 days)',
      'Scientific sessions & keynotes',
      'Conference kit & materials',
      'Lunch & refreshments',
      'Certificate of attendance',
      'Student poster competition'
    ],
    popular: true
  },
  {
    id: 'accompanying_person',
    name: 'Accompanying Person',
    icon: UserPlus,
    description: 'Family & companions',
    pricing: {
      standard: { price: 5000, label: 'Standard' }
    },
    features: [
      'Welcome reception access',
      'Gala dinner access',
      'City tour (optional)',
      'Lunch & refreshments'
    ]
  },
  {
    id: 'workshop_only',
    name: 'Workshop Only',
    icon: Wrench,
    description: 'Hands-on workshops',
    pricing: {
      standard: { price: 3000, label: 'Per Workshop' }
    },
    features: [
      'Single workshop access',
      'Hands-on materials',
      'Workshop certificate',
      'Tea/coffee'
    ]
  }
];

export default function Registration() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedPricing, setSelectedPricing] = useState('early_bird');
  const [showForm, setShowForm] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    full_name: '',
    email: '',
    phone: '',
    organization: '',
    designation: '',
    accommodation_required: false,
    room_type: ''
  });

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    if (category.pricing.standard) {
      setSelectedPricing('standard');
    } else {
      setSelectedPricing('early_bird');
    }
  };

  const getCurrentPrice = () => {
    if (!selectedCategory) return 0;
    const pricing = selectedCategory.pricing[selectedPricing];
    return pricing ? pricing.price : 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleRegister = async () => {
    if (!selectedCategory) {
      toast.error('Please select a category');
      return;
    }

    if (!formData.full_name || !formData.email || !formData.phone) {
      toast.error('Please fill in all required fields');
      return;
    }

    setIsLoading(true);
    try {
      // Create registration
      const categoryKey = selectedCategory.pricing.standard 
        ? selectedCategory.id 
        : `${selectedCategory.id}_${selectedPricing}`;

      const registrationRes = await axios.post(`${API}/registration`, {
        ...formData,
        category: categoryKey
      });

      const registration = registrationRes.data;

      // Create Razorpay order
      const orderRes = await axios.post(`${API}/create-order`, {
        amount: registration.amount,
        currency: 'INR',
        registration_id: registration.id
      });

      const { order_id, key_id, amount } = orderRes.data;

      // Initialize Razorpay
      const options = {
        key: key_id,
        amount: amount,
        currency: 'INR',
        name: '3RD OSI CONFERENCE KOLKATA 2026',
        description: `Registration - ${selectedCategory.name}`,
        order_id: order_id,
        handler: async (response) => {
          try {
            await axios.post(`${API}/verify-payment`, {
              razorpay_order_id: response.razorpay_order_id,
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_signature: response.razorpay_signature,
              registration_id: registration.id
            });
            toast.success('Registration successful! Check your email for confirmation.');
            setShowForm(false);
            setFormData({
              full_name: '',
              email: '',
              phone: '',
              organization: '',
              designation: '',
              accommodation_required: false,
              room_type: ''
            });
          } catch (error) {
            toast.error('Payment verification failed. Please contact support.');
          }
        },
        prefill: {
          name: formData.full_name,
          email: formData.email,
          contact: formData.phone
        },
        theme: {
          color: '#002366'
        }
      };

      const razorpay = new window.Razorpay(options);
      razorpay.open();
    } catch (error) {
      console.error('Registration error:', error);
      toast.error('Registration failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="registration" className="py-20 md:py-32 bg-gradient-to-b from-white to-slate-50" data-testid="registration-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-secondary-500 font-body font-semibold text-sm uppercase tracking-widest">
            Join Us
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-900 mt-4 mb-6">
            <span className="text-3d-gold">Registration</span>
          </h2>
          <p className="text-lg text-slate-600 font-body max-w-2xl mx-auto">
            Secure your spot at India's premier implant dentistry conference
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
        >
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              whileHover={{ y: -8 }}
              className={`relative bg-white rounded-2xl p-6 border-2 cursor-pointer transition-all duration-300 ${
                selectedCategory?.id === category.id
                  ? 'border-secondary-500 shadow-xl'
                  : 'border-slate-200 hover:border-primary-200 shadow-sm'
              } ${category.popular ? 'ring-2 ring-secondary-500 ring-offset-2' : ''}`}
              onClick={() => handleCategorySelect(category)}
              data-testid={`category-${category.id}`}
            >
              {category.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-secondary-500 text-primary-900 text-xs font-body font-semibold px-3 py-1 rounded-full">
                  POPULAR
                </span>
              )}
              <div className="w-12 h-12 bg-primary-50 rounded-xl flex items-center justify-center mb-4">
                <category.icon className="w-6 h-6 text-primary-900" />
              </div>
              <h3 className="font-heading text-xl font-bold text-primary-900 mb-1">{category.name}</h3>
              <p className="text-sm text-slate-500 font-body mb-4">{category.description}</p>
              
              {/* Pricing */}
              <div className="space-y-2 mb-4">
                {Object.entries(category.pricing).map(([key, value]) => (
                  <div
                    key={key}
                    className={`flex items-center justify-between p-2 rounded-lg cursor-pointer transition-colors ${
                      selectedCategory?.id === category.id && selectedPricing === key
                        ? 'bg-primary-100'
                        : 'bg-slate-50 hover:bg-slate-100'
                    }`}
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedCategory(category);
                      setSelectedPricing(key);
                    }}
                  >
                    <div className="flex items-center gap-2">
                      <div className={`w-4 h-4 rounded-full border-2 ${
                        selectedCategory?.id === category.id && selectedPricing === key
                          ? 'border-primary-900 bg-primary-900'
                          : 'border-slate-300'
                      }`}>
                        {selectedCategory?.id === category.id && selectedPricing === key && (
                          <Check className="w-3 h-3 text-white m-auto" />
                        )}
                      </div>
                      <span className="text-sm font-body">{value.label}</span>
                    </div>
                    <span className="font-body font-bold text-primary-900">₹{value.price.toLocaleString()}</span>
                  </div>
                ))}
              </div>

              {/* Features */}
              <ul className="space-y-2">
                {category.features.slice(0, 4).map((feature, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-slate-600 font-body">
                    <Check className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
                {category.features.length > 4 && (
                  <li className="text-sm text-primary-500 font-body font-medium">
                    +{category.features.length - 4} more benefits
                  </li>
                )}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Registration Form */}
        {selectedCategory && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            className="bg-white rounded-2xl p-8 shadow-xl border border-slate-200 max-w-2xl mx-auto"
          >
            {!showForm ? (
              <div className="text-center">
                <div className="inline-flex items-center gap-4 bg-primary-50 px-6 py-4 rounded-xl mb-6">
                  <div>
                    <p className="text-sm text-slate-500 font-body">Selected Category</p>
                    <p className="font-heading font-bold text-primary-900 text-xl">{selectedCategory.name}</p>
                  </div>
                  <div className="w-px h-12 bg-slate-200" />
                  <div>
                    <p className="text-sm text-slate-500 font-body">Total Amount</p>
                    <p className="font-heading font-bold text-secondary-500 text-2xl">₹{getCurrentPrice().toLocaleString()}</p>
                  </div>
                </div>
                <Button
                  onClick={() => setShowForm(true)}
                  className="bg-secondary-500 hover:bg-secondary-900 text-primary-900 font-body font-semibold px-8 py-4 rounded-full btn-glow text-lg"
                  data-testid="proceed-btn"
                >
                  Proceed to Register
                </Button>
              </div>
            ) : (
              <div className="space-y-6">
                <div className="flex items-center justify-between pb-4 border-b border-slate-200">
                  <div>
                    <h3 className="font-heading text-xl font-bold text-primary-900">Registration Details</h3>
                    <p className="text-sm text-slate-500 font-body">{selectedCategory.name} - ₹{getCurrentPrice().toLocaleString()}</p>
                  </div>
                  <Button variant="ghost" onClick={() => setShowForm(false)} className="text-slate-500">
                    Change
                  </Button>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="full_name" className="font-body">Full Name *</Label>
                    <Input
                      id="full_name"
                      name="full_name"
                      value={formData.full_name}
                      onChange={handleInputChange}
                      placeholder="Dr. John Doe"
                      className="rounded-lg"
                      data-testid="input-name"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="font-body">Email *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="john@example.com"
                      className="rounded-lg"
                      data-testid="input-email"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="font-body">Phone *</Label>
                    <Input
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+91 98765 43210"
                      className="rounded-lg"
                      data-testid="input-phone"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="organization" className="font-body">Organization</Label>
                    <Input
                      id="organization"
                      name="organization"
                      value={formData.organization}
                      onChange={handleInputChange}
                      placeholder="Hospital/College name"
                      className="rounded-lg"
                      data-testid="input-organization"
                    />
                  </div>
                  <div className="md:col-span-2 space-y-2">
                    <Label htmlFor="designation" className="font-body">Designation</Label>
                    <Input
                      id="designation"
                      name="designation"
                      value={formData.designation}
                      onChange={handleInputChange}
                      placeholder="Professor / Consultant / PG Student"
                      className="rounded-lg"
                      data-testid="input-designation"
                    />
                  </div>
                </div>

                {/* Accommodation Option */}
                <div className="bg-slate-50 rounded-xl p-4">
                  <div className="flex items-start gap-3">
                    <Checkbox
                      id="accommodation"
                      checked={formData.accommodation_required}
                      onCheckedChange={(checked) => setFormData(prev => ({ ...prev, accommodation_required: checked }))}
                      data-testid="accommodation-checkbox"
                    />
                    <div>
                      <Label htmlFor="accommodation" className="font-body font-medium cursor-pointer">
                        I need accommodation at The Westin
                      </Label>
                      <p className="text-sm text-slate-500 font-body mt-1">
                        Special rates for conference delegates (₹6,000 - ₹12,000/night)
                      </p>
                    </div>
                  </div>
                  {formData.accommodation_required && (
                    <div className="mt-4 pl-7">
                      <Select
                        value={formData.room_type}
                        onValueChange={(value) => setFormData(prev => ({ ...prev, room_type: value }))}
                      >
                        <SelectTrigger className="rounded-lg" data-testid="room-select">
                          <SelectValue placeholder="Select room type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="standard">Standard Room - ₹6,000/night</SelectItem>
                          <SelectItem value="deluxe">Deluxe Room - ₹8,000/night</SelectItem>
                          <SelectItem value="suite">Suite - ₹12,000/night</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  )}
                </div>

                {/* Info Alert */}
                <div className="flex items-start gap-3 bg-primary-50 rounded-xl p-4">
                  <AlertCircle className="w-5 h-5 text-primary-900 mt-0.5" />
                  <div className="text-sm font-body text-primary-900">
                    <p className="font-medium">Payment will be processed via Razorpay</p>
                    <p className="text-primary-700 mt-1">UPI, Credit/Debit Cards, Net Banking accepted</p>
                  </div>
                </div>

                <Button
                  onClick={handleRegister}
                  disabled={isLoading}
                  className="w-full bg-secondary-500 hover:bg-secondary-900 text-primary-900 font-body font-semibold py-6 rounded-full btn-glow text-lg"
                  data-testid="submit-registration-btn"
                >
                  {isLoading ? 'Processing...' : `Pay ₹${getCurrentPrice().toLocaleString()} & Register`}
                </Button>
              </div>
            )}
          </motion.div>
        )}
      </div>
    </section>
  );
}
