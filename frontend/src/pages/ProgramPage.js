import { motion } from 'framer-motion';
import { useState } from 'react';
import { Clock, User, MapPin } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";

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
    default: return 'bg-slate-100 text-slate-600';
  }
};

const day1Sessions = [
  { time: '08:00 - 09:00', title: 'Registration & Welcome Coffee', type: 'general', venue: 'Main Lobby' },
  { time: '09:00 - 09:30', title: 'Inaugural Ceremony', type: 'ceremony', venue: 'Grand Ballroom', speaker: 'Chief Guest & Dignitaries' },
  { time: '09:30 - 10:30', title: 'Keynote: The Evolution of Osseointegration', type: 'keynote', venue: 'Grand Ballroom', speaker: 'Dr. International Expert' },
  { time: '10:30 - 11:00', title: 'Tea Break & Trade Exhibition', type: 'break', venue: 'Exhibition Hall' },
  { time: '11:00 - 13:00', title: 'Scientific Session I: Implant Surface Technology', type: 'session', venue: 'Hall A' },
  { time: '13:00 - 14:00', title: 'Lunch & Poster Presentations', type: 'break', venue: 'Banquet Hall' },
  { time: '14:00 - 16:00', title: 'Workshop: Basic Implant Placement', type: 'workshop', venue: 'Workshop Room 1', limited: true },
  { time: '16:00 - 17:30', title: 'Panel: Managing Implant Complications', type: 'panel', venue: 'Grand Ballroom' }
];

const day2Sessions = [
  { time: '08:30 - 09:00', title: 'Morning Refreshments', type: 'break', venue: 'Main Lobby' },
  { time: '09:00 - 10:30', title: 'Scientific Session II: Full Arch Rehabilitation', type: 'session', venue: 'Grand Ballroom' },
  { time: '10:30 - 11:00', title: 'Tea Break', type: 'break', venue: 'Foyer' },
  { time: '11:00 - 13:00', title: 'Live Surgery Demonstration', type: 'live', venue: 'Grand Ballroom', speaker: 'Dr. Surgical Expert' },
  { time: '13:00 - 14:00', title: 'Lunch', type: 'break', venue: 'Banquet Hall' },
  { time: '14:00 - 16:00', title: 'Workshop: Guided Implant Surgery', type: 'workshop', venue: 'Workshop Room 2', limited: true },
  { time: '16:00 - 17:30', title: 'Industry Symposium', type: 'symposium', venue: 'Hall B' },
  { time: '19:30 onwards', title: 'Gala Dinner & Cultural Program', type: 'social', venue: 'Poolside Lawn' }
];

const day3Sessions = [
  { time: '08:30 - 09:00', title: 'Morning Refreshments', type: 'break', venue: 'Main Lobby' },
  { time: '09:00 - 10:30', title: 'Scientific Session III: Soft Tissue Management', type: 'session', venue: 'Grand Ballroom' },
  { time: '10:30 - 11:00', title: 'Tea Break', type: 'break', venue: 'Foyer' },
  { time: '11:00 - 12:30', title: 'Free Paper Presentations', type: 'session', venue: 'Halls A & B' },
  { time: '12:30 - 13:30', title: 'Lunch', type: 'break', venue: 'Banquet Hall' },
  { time: '13:30 - 15:00', title: 'Case Presentation Competition', type: 'session', venue: 'Grand Ballroom' },
  { time: '15:00 - 16:00', title: 'Keynote: Future of Digital Implantology', type: 'keynote', venue: 'Grand Ballroom' },
  { time: '16:00 - 17:00', title: 'Valedictory & Prize Distribution', type: 'ceremony', venue: 'Grand Ballroom' }
];

function SessionList({ sessions }) {
  return (
    <Accordion type="single" collapsible className="space-y-3">
      {sessions.map((session, index) => (
        <AccordionItem key={index} value={`session-${index}`} className="bg-white border border-slate-200 rounded-xl overflow-hidden">
          <AccordionTrigger className="px-6 py-4 hover:bg-slate-50 hover:no-underline">
            <div className="flex items-start gap-4 text-left w-full">
              <span className="text-sm font-body font-semibold text-primary-900 min-w-[100px]">{session.time}</span>
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-2 mb-1">
                  <span className={`text-xs font-body font-medium px-2 py-0.5 rounded-full ${getSessionColor(session.type)}`}>{session.type.toUpperCase()}</span>
                  {session.limited && <span className="text-xs font-body font-medium px-2 py-0.5 rounded-full bg-red-100 text-red-800">LIMITED</span>}
                </div>
                <h4 className="font-heading font-semibold text-primary-900 text-base">{session.title}</h4>
              </div>
            </div>
          </AccordionTrigger>
          <AccordionContent className="px-6 pb-4">
            <div className="pl-[116px] flex flex-wrap gap-4 text-sm text-slate-600 font-body">
              <span className="flex items-center gap-1"><MapPin className="w-4 h-4" />{session.venue}</span>
              {session.speaker && <span className="flex items-center gap-1"><User className="w-4 h-4" />{session.speaker}</span>}
            </div>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}

export default function ProgramPage() {
  const [activeDay, setActiveDay] = useState('day1');

  return (
    <div className="pt-20" data-testid="program-page">
      <div className="bg-primary-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-secondary-500 font-body font-semibold text-sm uppercase tracking-widest">Schedule</motion.span>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-4">Scientific Program</motion.h1>
        </div>
      </div>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs value={activeDay} onValueChange={setActiveDay} className="w-full">
            <TabsList className="w-full max-w-2xl mx-auto mb-8 bg-slate-100 p-1 rounded-xl grid grid-cols-3">
              <TabsTrigger value="day1" className="rounded-lg font-body font-medium data-[state=active]:bg-primary-900 data-[state=active]:text-white py-3">Day 1</TabsTrigger>
              <TabsTrigger value="day2" className="rounded-lg font-body font-medium data-[state=active]:bg-primary-900 data-[state=active]:text-white py-3">Day 2</TabsTrigger>
              <TabsTrigger value="day3" className="rounded-lg font-body font-medium data-[state=active]:bg-primary-900 data-[state=active]:text-white py-3">Day 3</TabsTrigger>
            </TabsList>

            <TabsContent value="day1">
              <div className="bg-primary-900 rounded-2xl p-6 mb-8">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div><h3 className="font-heading text-2xl font-bold text-white">27th November 2026</h3><p className="text-primary-100 font-body">Foundations & Fundamentals</p></div>
                  <span className="inline-flex items-center gap-2 bg-secondary-500 text-primary-900 px-4 py-2 rounded-full font-body font-semibold text-sm"><Clock className="w-4 h-4" />8 Sessions</span>
                </div>
              </div>
              <SessionList sessions={day1Sessions} />
            </TabsContent>

            <TabsContent value="day2">
              <div className="bg-primary-900 rounded-2xl p-6 mb-8">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div><h3 className="font-heading text-2xl font-bold text-white">28th November 2026</h3><p className="text-primary-100 font-body">Advanced Techniques & Innovation</p></div>
                  <span className="inline-flex items-center gap-2 bg-secondary-500 text-primary-900 px-4 py-2 rounded-full font-body font-semibold text-sm"><Clock className="w-4 h-4" />8 Sessions</span>
                </div>
              </div>
              <SessionList sessions={day2Sessions} />
            </TabsContent>

            <TabsContent value="day3">
              <div className="bg-primary-900 rounded-2xl p-6 mb-8">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div><h3 className="font-heading text-2xl font-bold text-white">29th November 2026</h3><p className="text-primary-100 font-body">Clinical Excellence & Future Directions</p></div>
                  <span className="inline-flex items-center gap-2 bg-secondary-500 text-primary-900 px-4 py-2 rounded-full font-body font-semibold text-sm"><Clock className="w-4 h-4" />8 Sessions</span>
                </div>
              </div>
              <SessionList sessions={day3Sessions} />
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  );
}
