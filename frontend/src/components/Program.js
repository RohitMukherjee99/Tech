import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Clock, User, MapPin } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";

const getSessionColor = (type) => {
  switch(type) {
    case 'keynote': return 'bg-secondary-500 text-primary-900';
    case 'session': return 'bg-primary-100 text-primary-900';
    case 'workshop': return 'bg-green-100 text-green-800';
    case 'break': return 'bg-slate-100 text-slate-600';
    case 'ceremony': return 'bg-purple-100 text-purple-800';
    case 'panel': return 'bg-blue-100 text-blue-800';
    case 'live': return 'bg-red-100 text-red-800';
    case 'symposium': return 'bg-orange-100 text-orange-800';
    case 'social': return 'bg-pink-100 text-pink-800';
    case 'presentation': return 'bg-cyan-100 text-cyan-800';
    case 'competition': return 'bg-amber-100 text-amber-800';
    default: return 'bg-slate-100 text-slate-600';
  }
};

const day1Sessions = [
  { time: '08:00 - 09:00', title: 'Registration & Welcome Coffee', type: 'general', venue: 'Main Lobby' },
  { time: '09:00 - 09:30', title: 'Inaugural Ceremony', type: 'ceremony', venue: 'Grand Ballroom', speaker: 'Chief Guest & Dignitaries' },
  { time: '09:30 - 10:30', title: 'Keynote: The Evolution of Osseointegration - Past, Present & Future', type: 'keynote', venue: 'Grand Ballroom', speaker: 'Dr. International Expert' },
  { time: '10:30 - 11:00', title: 'Tea Break & Trade Exhibition Visit', type: 'break', venue: 'Exhibition Hall' },
  { time: '11:00 - 13:00', title: 'Scientific Session I: Implant Surface Technology', type: 'session', venue: 'Hall A' },
  { time: '13:00 - 14:00', title: 'Lunch & Poster Presentations', type: 'break', venue: 'Banquet Hall' },
  { time: '14:00 - 16:00', title: 'Hands-on Workshop: Basic Implant Placement Techniques', type: 'workshop', venue: 'Workshop Room 1', speaker: 'Expert Panel', limited: true },
  { time: '16:00 - 17:30', title: 'Panel Discussion: Managing Implant Complications', type: 'panel', venue: 'Grand Ballroom', speaker: 'Multi-specialty Panel' }
];

const day2Sessions = [
  { time: '08:30 - 09:00', title: 'Morning Refreshments', type: 'break', venue: 'Main Lobby' },
  { time: '09:00 - 10:30', title: 'Scientific Session II: Full Arch Rehabilitation', type: 'session', venue: 'Grand Ballroom' },
  { time: '10:30 - 11:00', title: 'Tea Break', type: 'break', venue: 'Foyer' },
  { time: '11:00 - 13:00', title: 'Live Surgery Demonstration (Video Link)', type: 'live', venue: 'Grand Ballroom', speaker: 'Dr. Surgical Expert' },
  { time: '13:00 - 14:00', title: 'Lunch', type: 'break', venue: 'Banquet Hall' },
  { time: '14:00 - 16:00', title: 'Hands-on Workshop: Guided Implant Surgery', type: 'workshop', venue: 'Workshop Room 2', limited: true },
  { time: '16:00 - 17:30', title: 'Industry Symposium: Latest Innovations in Implant Systems', type: 'symposium', venue: 'Hall B', speaker: 'Industry Partners' },
  { time: '19:30 onwards', title: 'Gala Dinner & Cultural Program', type: 'social', venue: 'Poolside Lawn' }
];

const day3Sessions = [
  { time: '08:30 - 09:00', title: 'Morning Refreshments', type: 'break', venue: 'Main Lobby' },
  { time: '09:00 - 10:30', title: 'Scientific Session III: Soft Tissue Management', type: 'session', venue: 'Grand Ballroom' },
  { time: '10:30 - 11:00', title: 'Tea Break', type: 'break', venue: 'Foyer' },
  { time: '11:00 - 12:30', title: 'Free Paper Presentations', type: 'presentation', venue: 'Halls A & B', speaker: 'Selected Presenters' },
  { time: '12:30 - 13:30', title: 'Lunch', type: 'break', venue: 'Banquet Hall' },
  { time: '13:30 - 15:00', title: 'Case Presentation Competition', type: 'competition', venue: 'Grand Ballroom' },
  { time: '15:00 - 16:00', title: 'Keynote: The Future of Digital Implantology', type: 'keynote', venue: 'Grand Ballroom', speaker: 'Dr. Tech Visionary' },
  { time: '16:00 - 17:00', title: 'Valedictory Ceremony & Prize Distribution', type: 'ceremony', venue: 'Grand Ballroom' }
];

function SessionList({ sessions }) {
  return (
    <Accordion type="single" collapsible className="space-y-3">
      {sessions.map((session, index) => (
        <AccordionItem
          key={index}
          value={`session-${index}`}
          className="bg-white border border-slate-200 rounded-xl overflow-hidden"
        >
          <AccordionTrigger className="px-6 py-4 hover:bg-slate-50 hover:no-underline">
            <div className="flex items-start gap-4 text-left w-full">
              <span className="text-sm font-body font-semibold text-primary-900 min-w-[100px]">
                {session.time}
              </span>
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-2 mb-1">
                  <span className={`text-xs font-body font-medium px-2 py-0.5 rounded-full ${getSessionColor(session.type)}`}>
                    {session.type.toUpperCase()}
                  </span>
                  {session.limited && (
                    <span className="text-xs font-body font-medium px-2 py-0.5 rounded-full bg-red-100 text-red-800">
                      LIMITED SEATS
                    </span>
                  )}
                </div>
                <h4 className="font-heading font-semibold text-primary-900 text-base">
                  {session.title}
                </h4>
              </div>
            </div>
          </AccordionTrigger>
          <AccordionContent className="px-6 pb-4">
            <div className="pl-[116px] space-y-3">
              <div className="flex flex-wrap gap-4 text-sm text-slate-600 font-body">
                <span className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  {session.venue}
                </span>
                {session.speaker && (
                  <span className="flex items-center gap-1">
                    <User className="w-4 h-4" />
                    {session.speaker}
                  </span>
                )}
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}

export default function Program() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeDay, setActiveDay] = useState('day1');

  return (
    <section id="program" className="py-20 md:py-32 bg-white" data-testid="program-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-secondary-500 font-body font-semibold text-sm uppercase tracking-widest">
            Schedule
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-900 mt-4 mb-6">
            Scientific <span className="text-3d-gold">Program</span>
          </h2>
          <p className="text-lg text-slate-600 font-body max-w-2xl mx-auto">
            Three days of intensive learning, featuring keynotes, workshops, live demonstrations, and networking opportunities
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Tabs value={activeDay} onValueChange={setActiveDay} className="w-full">
            <TabsList className="w-full max-w-2xl mx-auto mb-8 bg-slate-100 p-1 rounded-xl grid grid-cols-3">
              <TabsTrigger
                value="day1"
                className="rounded-lg font-body font-medium data-[state=active]:bg-primary-900 data-[state=active]:text-white py-3"
                data-testid="program-day1-tab"
              >
                Day 1
              </TabsTrigger>
              <TabsTrigger
                value="day2"
                className="rounded-lg font-body font-medium data-[state=active]:bg-primary-900 data-[state=active]:text-white py-3"
                data-testid="program-day2-tab"
              >
                Day 2
              </TabsTrigger>
              <TabsTrigger
                value="day3"
                className="rounded-lg font-body font-medium data-[state=active]:bg-primary-900 data-[state=active]:text-white py-3"
                data-testid="program-day3-tab"
              >
                Day 3
              </TabsTrigger>
            </TabsList>

            <TabsContent value="day1">
              <div className="bg-primary-900 rounded-2xl p-6 mb-8">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <h3 className="font-heading text-2xl font-bold text-white">27th November 2026</h3>
                    <p className="text-primary-100 font-body">Foundations & Fundamentals</p>
                  </div>
                  <span className="inline-flex items-center gap-2 bg-secondary-500 text-primary-900 px-4 py-2 rounded-full font-body font-semibold text-sm">
                    <Clock className="w-4 h-4" />
                    8 Sessions
                  </span>
                </div>
              </div>
              <SessionList sessions={day1Sessions} />
            </TabsContent>

            <TabsContent value="day2">
              <div className="bg-primary-900 rounded-2xl p-6 mb-8">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <h3 className="font-heading text-2xl font-bold text-white">28th November 2026</h3>
                    <p className="text-primary-100 font-body">Advanced Techniques & Innovation</p>
                  </div>
                  <span className="inline-flex items-center gap-2 bg-secondary-500 text-primary-900 px-4 py-2 rounded-full font-body font-semibold text-sm">
                    <Clock className="w-4 h-4" />
                    8 Sessions
                  </span>
                </div>
              </div>
              <SessionList sessions={day2Sessions} />
            </TabsContent>

            <TabsContent value="day3">
              <div className="bg-primary-900 rounded-2xl p-6 mb-8">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <h3 className="font-heading text-2xl font-bold text-white">29th November 2026</h3>
                    <p className="text-primary-100 font-body">Clinical Excellence & Future Directions</p>
                  </div>
                  <span className="inline-flex items-center gap-2 bg-secondary-500 text-primary-900 px-4 py-2 rounded-full font-body font-semibold text-sm">
                    <Clock className="w-4 h-4" />
                    8 Sessions
                  </span>
                </div>
              </div>
              <SessionList sessions={day3Sessions} />
            </TabsContent>
          </Tabs>
        </motion.div>

        <div className="implant-divider mt-20 rounded-full" />
      </div>
    </section>
  );
}
