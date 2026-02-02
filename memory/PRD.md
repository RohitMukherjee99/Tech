# 3RD OSI CONFERENCE KOLKATA 2026 - Website PRD

## Original Problem Statement
Create a high-end, premium, blue-themed conference website for the 3RD OSI Conference Kolkata 2026 - a national/international dental implant & osseointegration conference.

## Conference Details
- **Name:** 3RD OSI CONFERENCE KOLKATA 2026
- **Dates:** 27-29 November, 2026
- **Venue:** The Westin, Rajarhat, Kolkata
- **Address:** Plot No, 2, AA II, Newtown, New Town, West Bengal 700135

## User Requirements & Choices
- Multi-page website (not single landing page)
- OSI Membership & Fellowship widget
- Downloads section for resources
- Registration via Google Forms (not Razorpay)
- Placeholder content for speakers/sponsors

## Architecture
- **Frontend:** React with Tailwind CSS, Framer Motion
- **Backend:** FastAPI with MongoDB
- **Pages:** Home, About, Committee, Program, Speakers, Registration, Accommodation, Sponsors, Venue, Downloads, Contact

## What's Been Implemented (December 2025)

### Pages Created
1. **Home** - Hero with conference title, dates, venue, CTAs, stats
2. **About** - OSI introduction, objectives, vision
3. **Committee** - Organizing committee cards (6 members)
4. **Program** - 3-day schedule with tabs and accordion
5. **Speakers** - Featured & regular speaker cards (8 speakers)
6. **Registration** - Pricing categories + Google Form embed area
7. **Accommodation** - Hotel info + 3 room types
8. **Sponsors** - Platinum/Gold/Silver tiers + Trade Exhibition
9. **Venue** - Google Maps + travel info
10. **Downloads** - 8 downloadable resources
11. **Contact** - Contact form (saves to MongoDB)

### Key Features
- ✅ Multi-page navigation with React Router
- ✅ OSI Membership & Fellowship floating widget
- ✅ Downloads page with resources
- ✅ Google Form integration placeholder for registration
- ✅ Contact form with backend storage
- ✅ Responsive design (desktop/tablet/mobile)
- ✅ Premium blue + gold theme
- ✅ Smooth animations with Framer Motion
- ✅ 3D styled headings

### Backend APIs
- GET /api/ - Root endpoint
- GET /api/health - Health check
- GET /api/pricing - Registration pricing
- POST /api/registration - Create registration
- GET /api/registration/:id - Get registration
- POST /api/contact - Submit contact form
- GET /api/contacts - List contacts

## Prioritized Backlog

### P0 (Critical)
- [ ] Replace Google Form placeholder with actual Google Form URL

### P1 (High)
- [ ] Add actual speaker photos and details
- [ ] Add actual sponsor logos
- [ ] Add downloadable PDF files

### P2 (Medium)
- [ ] Admin panel for managing registrations/contacts
- [ ] Email notifications on registration/contact
- [ ] Abstract submission feature
- [ ] Social media integration

### Next Action Items
1. User needs to provide Google Form URL for registration
2. Replace placeholder content with actual speakers/sponsors
3. Upload actual PDF files for downloads section
4. Consider adding admin dashboard
