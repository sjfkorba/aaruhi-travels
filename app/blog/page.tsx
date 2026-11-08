
import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  MapPin,
  Clock3,
  CarFront,
  Plane,
  TrainFront,
  Building2,
  BriefcaseBusiness,
  Users,
  Navigation,
  ShieldCheck,
  Route,
  Sparkles,
  MoveUpRight,
  ChevronRight,
  Compass,
  Map,
} from "lucide-react";

import Navbar from "@/components/navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://aaruhitravels.com"),
  title:
    "Chhattisgarh Travel Guide | Taxi Services in Korba, Raipur & Bilaspur",
  description:
    "Explore the Chhattisgarh travel guide by Aaruhi Travels. Discover taxi and cab services, airport transfers, railway pickups and intercity travel in Korba, Raipur, Bilaspur, Ambikapur, Durg, Bhilai and Raigarh.",
  keywords: [
    "Chhattisgarh travel guide",
    "Aaruhi Travels",
    "Korba taxi service",
    "Raipur taxi booking",
    "Bilaspur cab service",
    "Ambikapur taxi service",
    "Durg taxi service",
    "Bhilai cab booking",
    "Raigarh taxi service",
    "Chhattisgarh travel agency",
    "outstation taxi Chhattisgarh",
    "local cab booking",
    "Raipur airport transfer",
    "railway station pickup Chhattisgarh",
  ],
  alternates: {
    canonical:
      "https://aaruhitravels.com/blog/chhattisgarh-travel-guide",
  },
  openGraph: {
    title:
      "Chhattisgarh Travel Guide | Explore Cities & Taxi Services",
    description:
      "A practical travel guide to taxi services and city-to-city journeys across Chhattisgarh with Aaruhi Travels.",
    url: "https://aaruhitravels.com/blog/chhattisgarh-travel-guide",
    siteName: "Aaruhi Travels",
    type: "article",
    locale: "en_IN",
    images: [
      {
        url: "/logo.png",
        alt: "Aaruhi Travels Chhattisgarh Travel Guide",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const cityGuides = [
  {
    city: "Korba",
    label: "Industrial & Local Travel",
    icon: Building2,
    accent: "from-orange-500 to-amber-300",
    description:
      "Korba is one of the most important service locations for Aaruhi Travels. Local families, plant-related visitors, railway travelers, and outstation passengers often need dependable transport for station pickup, city movement, and routes toward Bilaspur, Raipur, Raigarh, and nearby destinations. Korba-focused travel content should highlight local pickup convenience, one-way cab support, and fast phone or WhatsApp booking for urgent movement.",
    highlights: [
      "Local city transportation",
      "Railway station pickup",
      "Korba to Bilaspur and Raipur",
    ],
  },
  {
    city: "Raipur",
    label: "Airport & Business Travel",
    icon: Plane,
    accent: "from-blue-500 to-cyan-300",
    description:
      "Raipur works as a major travel gateway in Chhattisgarh because the state's passenger airport is located here. Raipur also serves as an important travel and business hub, so airport transfers, corporate rides, railway pickup, and intercity cab enquiries are relevant for passengers travelling to and from the city.",
    highlights: [
      "Airport pickup and drop",
      "Corporate transportation",
      "Intercity taxi bookings",
    ],
  },
  {
    city: "Bilaspur",
    label: "Railway & Intercity Travel",
    icon: TrainFront,
    accent: "from-violet-500 to-fuchsia-300",
    description:
      "Bilaspur is an important railway-connected city in Chhattisgarh, making it relevant for station transfers, family travel, student movement, and long-distance taxi support. Passengers may need timely pickup, direct home drop, and smooth connections to Korba, Raipur, Ambikapur, and Raigarh.",
    highlights: [
      "Railway station transfers",
      "Family and student travel",
      "Bilaspur to Korba and Raipur",
    ],
  },
  {
    city: "Ambikapur",
    label: "Outstation & Family Journeys",
    icon: Navigation,
    accent: "from-emerald-500 to-teal-300",
    description:
      "Ambikapur passengers often look for comfortable outstation rides, family travel convenience, and dependable scheduling because journeys can involve longer distances. Aaruhi Travels supports enquiries for intercity journeys, tourism movement, and pre-booked rides for families, professionals, and visitors.",
    highlights: [
      "Long-distance journeys",
      "Family transportation",
      "Pre-booked outstation travel",
    ],
  },
  {
    city: "Durg",
    label: "Railway & City Transfers",
    icon: Route,
    accent: "from-pink-500 to-rose-300",
    description:
      "Durg is an important railway-connected location in Chhattisgarh. For passengers travelling through Durg, taxi requirements can include railway station pickup, local city rides, business transportation, and journeys toward Bhilai, Raipur, Bilaspur, and other connected cities.",
    highlights: [
      "Railway station pickup",
      "Local city rides",
      "Durg to Raipur travel",
    ],
  },
  {
    city: "Bhilai",
    label: "Business & Family Travel",
    icon: BriefcaseBusiness,
    accent: "from-amber-500 to-yellow-300",
    description:
      "Bhilai has travel requirements connected with working professionals, families, industrial movement, and nearby city connectivity. Aaruhi Travels accepts enquiries for local cabs, scheduled pickup, business travel, and direct outstation bookings for passengers who need coordinated transportation.",
    highlights: [
      "Business transportation",
      "Scheduled cab pickup",
      "Outstation bookings",
    ],
  },
  {
    city: "Raigarh",
    label: "Industrial & Outstation Travel",
    icon: Building2,
    accent: "from-cyan-500 to-blue-400",
    description:
      "Raigarh is an important location for intercity travel, family visits, long-distance cabs, railway transfers, and business-oriented journeys. Passengers can enquire about transportation between Raigarh, Korba, Raipur, and other destinations across the region.",
    highlights: [
      "Business and industrial travel",
      "Railway station transfers",
      "Raigarh to Korba journeys",
    ],
  },
];

const serviceCards = [
  {
    title: "Local Taxi",
    icon: MapPin,
    description: "Cab enquiries for city travel and local transportation.",
    href: "/services/local-taxi",
    accent: "from-orange-500 to-amber-300",
  },
  {
    title: "One Way Taxi",
    icon: Route,
    description: "Direct point-to-point journeys between two locations.",
    href: "/services/one-way-taxi",
    accent: "from-blue-500 to-cyan-300",
  },
  {
    title: "Round Trip Taxi",
    icon: CarFront,
    description: "Cab arrangements for return journeys and planned trips.",
    href: "/services/round-trip-taxi",
    accent: "from-violet-500 to-fuchsia-300",
  },
  {
    title: "Railway Pickup",
    icon: TrainFront,
    description: "Taxi arrangements for railway station pickup and drop.",
    href: "/services/railway-station-transfer",
    accent: "from-emerald-500 to-teal-300",
  },
  {
    title: "Airport Transfer",
    icon: Plane,
    description: "Airport pickup and drop enquiry support in Raipur.",
    href: "/services/airport-transfer",
    accent: "from-pink-500 to-rose-300",
  },
  {
    title: "Outstation Taxi",
    icon: Navigation,
    description: "Pre-booked cabs for intercity and long-distance travel.",
    href: "/services/outstation-taxi",
    accent: "from-amber-500 to-yellow-300",
  },
  {
    title: "Corporate Taxi",
    icon: BriefcaseBusiness,
    description: "Transportation enquiries for business travellers.",
    href: "/services/corporate-taxi",
    accent: "from-cyan-500 to-blue-400",
  },
  {
    title: "Family & Event Travel",
    icon: Users,
    description: "Vehicle arrangements for family functions and events.",
    href: "/services/event-taxi",
    accent: "from-red-500 to-orange-300",
  },
];

const travelFAQs = [
  {
    question:
      "Do you provide taxi services in major cities of Chhattisgarh?",
    answer:
      "Aaruhi Travels accepts taxi enquiries for Korba, Raipur, Bilaspur, Ambikapur, Durg, Bhilai and Raigarh, along with intercity travel requirements. Contact the team to confirm availability for your pickup and destination.",
  },
  {
    question: "Can I book a one-way taxi in Chhattisgarh?",
    answer:
      "Yes. Aaruhi Travels accepts enquiries for one-way taxi journeys between cities. Share your pickup location, drop location, travel date and vehicle preference to request a quotation.",
  },
  {
    question: "Can I arrange a Raipur airport pickup?",
    answer:
      "You can contact Aaruhi Travels to enquire about Raipur airport pickup and drop arrangements. Share your flight timing, destination and passenger details while making your enquiry.",
  },
  {
    question: "Does Aaruhi Travels provide railway station pickup?",
    answer:
      "Aaruhi Travels accepts enquiries for railway station pickup and drop requirements in its service locations. Provide your station, train arrival time and destination to discuss the arrangements.",
  },
  {
    question: "How can I request a taxi fare?",
    answer:
      "Share your pickup location, destination, travel date, pickup time, passenger count and preferred vehicle by phone or WhatsApp. The team can then provide the applicable fare quotation.",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id":
        "https://aaruhitravels.com/blog/chhattisgarh-travel-guide#article",
      headline:
        "Chhattisgarh Travel Guide: Taxi Services Across Major Cities",
      description:
        "A practical guide to local taxi services, airport transfers, railway pickups and intercity travel across Korba, Raipur, Bilaspur, Ambikapur, Durg, Bhilai and Raigarh.",
      author: {
        "@type": "Organization",
        name: "Aaruhi Travels",
        url: "https://aaruhitravels.com",
      },
      publisher: {
        "@type": "Organization",
        name: "Aaruhi Travels",
        url: "https://aaruhitravels.com",
        logo: {
          "@type": "ImageObject",
          url: "https://aaruhitravels.com/logo.png",
        },
      },
      mainEntityOfPage:
        "https://aaruhitravels.com/blog/chhattisgarh-travel-guide",
      inLanguage: "en-IN",
      articleSection: [
        "Chhattisgarh Travel",
        "City Guides",
        "Taxi Services",
      ],
      about: cityGuides.map((city) => ({
        "@type": "Place",
        name: `${city.city}, Chhattisgarh, India`,
      })),
    },
    {
      "@type": "FAQPage",
      mainEntity: travelFAQs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://aaruhitravels.com",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Blog",
          item: "https://aaruhitravels.com/blog",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Chhattisgarh Travel Guide",
          item:
            "https://aaruhitravels.com/blog/chhattisgarh-travel-guide",
        },
      ],
    },
  ],
};

export default function ChhattisgarhTravelGuidePage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#080c16] text-white">
      <Navbar />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleSchema).replace(/</g, "\\u003c"),
        }}
      />

      {/* EDITORIAL HERO */}
      <section className="relative isolate overflow-hidden border-b border-white/10">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -left-40 -top-20 h-[450px] w-[450px] rounded-full bg-orange-500/15 blur-[130px]" />
          <div className="absolute -right-40 top-10 h-[450px] w-[450px] rounded-full bg-blue-500/15 blur-[130px]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.08),transparent_55%)]" />
          <div className="absolute inset-0 opacity-[0.10] [background-image:radial-gradient(#ffffff_1px,transparent_1px)] [background-size:28px_28px]" />
        </div>

        <div className="mx-auto max-w-7xl px-4 pb-20 pt-24 sm:px-6 sm:pb-24 sm:pt-32 lg:px-8">
          <div className="animate-fade-up flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-2 rounded-full border border-orange-400/30 bg-orange-400/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-orange-300">
              <Sparkles size={14} />
              Aaruhi Travel Journal
            </span>
            <span className="text-xs font-semibold text-slate-500">
              Chhattisgarh Travel Guide
            </span>
          </div>

          <div className="mt-8 grid items-center gap-12 lg:grid-cols-[1.25fr_0.75fr]">
            <div>
              <h1 className="animate-fade-up max-w-4xl text-4xl font-black leading-tight tracking-tight sm:text-5xl md:text-6xl">
                Discover
                <span className="block bg-gradient-to-r from-orange-400 via-amber-200 to-yellow-400 bg-clip-text text-transparent">
                  Chhattisgarh.
                </span>
                <span className="mt-2 block text-2xl text-white sm:text-3xl md:text-4xl">
                  A City-by-City Travel & Taxi Guide
                </span>
              </h1>

              <p className="animate-fade-up mt-7 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
                Explore local transportation, one-way cab journeys, airport
                transfers, railway station pickups and outstation travel
                across Korba, Raipur, Bilaspur, Ambikapur, Durg, Bhilai
                and Raigarh with Aaruhi Travels.
              </p>

              <div className="animate-fade-up mt-9 flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-orange-500 to-amber-400 px-7 py-4 text-sm font-extrabold text-black shadow-[0_8px_30px_rgba(249,115,22,0.25)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(249,115,22,0.4)]"
                >
                  Plan Your Journey
                  <ArrowRight
                    size={18}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </Link>

                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-7 py-4 text-sm font-bold text-white backdrop-blur-xl transition hover:-translate-y-1 hover:border-orange-400/50 hover:bg-white/10"
                >
                  Explore Services
                  <MoveUpRight size={17} />
                </Link>
              </div>

              <div className="mt-9 flex flex-wrap gap-x-6 gap-y-3 text-xs font-semibold text-slate-400">
                <span className="flex items-center gap-2">
                  <MapPin size={15} className="text-orange-400" />
                  Chhattisgarh, India
                </span>
                <span className="flex items-center gap-2">
                  <CarFront size={15} className="text-orange-400" />
                  Local & Outstation Cabs
                </span>
                <span className="flex items-center gap-2">
                  <ShieldCheck size={15} className="text-orange-400" />
                  Booking Assistance
                </span>
              </div>
            </div>

            {/* Hero visual */}
            <div className="animate-float relative mx-auto w-full max-w-md">
              <div className="absolute -inset-6 rounded-[40px] bg-gradient-to-br from-orange-500/20 via-transparent to-blue-500/20 blur-2xl" />

              <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-[#111b2c] p-6 shadow-2xl shadow-black/30 sm:p-8">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-[0.18em] text-orange-300">
                    Explore the Region
                  </span>
                  <Compass className="text-orange-400" size={23} />
                </div>

                <div className="relative mt-8 flex min-h-[260px] items-center justify-center overflow-hidden rounded-2xl border border-white/[0.07] bg-[#0b1220]">
                  <div className="absolute h-56 w-56 rounded-full border border-dashed border-orange-400/30 animate-spin-slow" />
                  <div className="absolute h-40 w-40 rounded-full border border-blue-400/20" />
                  <div className="absolute h-24 w-24 rounded-full bg-orange-500/20 blur-2xl" />

                  <div className="relative flex flex-col items-center">
                    <div className="flex h-20 w-20 items-center justify-center rounded-3xl border border-orange-400/30 bg-gradient-to-br from-orange-500 to-amber-300 text-black shadow-[0_0_45px_rgba(249,115,22,0.3)]">
                      <Navigation size={38} />
                    </div>
                    <p className="mt-5 text-xl font-black text-white">
                      Chhattisgarh
                    </p>
                    <p className="mt-1 text-xs font-medium text-slate-400">
                      Explore · Connect · Travel
                    </p>
                  </div>

                  {[
                    "Korba",
                    "Raipur",
                    "Bilaspur",
                    "Raigarh",
                    "Durg",
                  ].map((city, index) => (
                    <span
                      key={city}
                      className="absolute rounded-full border border-white/10 bg-[#172337] px-3 py-1.5 text-[10px] font-bold text-slate-200 shadow-lg"
                      style={[
                        { top: "13%", left: "9%" },
                        { top: "18%", right: "8%" },
                        { bottom: "18%", left: "7%" },
                        { bottom: "13%", right: "8%" },
                        { top: "48%", right: "5%" },
                      ][index]}
                    >
                      {city}
                    </span>
                  ))}
                </div>

                <div className="mt-6 grid grid-cols-2 gap-3">
                  <div className="rounded-xl border border-white/[0.07] bg-white/[0.04] p-4">
                    <Map size={20} className="text-orange-400" />
                    <p className="mt-3 text-sm font-extrabold text-white">
                      City Guides
                    </p>
                    <p className="mt-1 text-xs text-slate-500">
                      Explore destinations
                    </p>
                  </div>
                  <div className="rounded-xl border border-white/[0.07] bg-white/[0.04] p-4">
                    <CarFront size={20} className="text-cyan-400" />
                    <p className="mt-3 text-sm font-extrabold text-white">
                      Taxi Services
                    </p>
                    <p className="mt-1 text-xs text-slate-500">
                      Plan your journey
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK OVERVIEW */}
      <section className="relative px-4 py-14 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-3">
          {[
            {
              title: "City Coverage",
              text: "Korba, Raipur, Bilaspur, Ambikapur, Durg, Bhilai and Raigarh.",
              icon: MapPin,
              color: "text-orange-400",
            },
            {
              title: "Service Types",
              text: "Local taxi, one-way cab, round trip, station pickup and airport transfer.",
              icon: CarFront,
              color: "text-cyan-400",
            },
            {
              title: "Travel Focus",
              text: "Family journeys, business trips, tours and intercity transportation.",
              icon: Compass,
              color: "text-violet-400",
            },
          ].map((item, index) => (
            <div
              key={item.title}
              className="overview-card group rounded-2xl border border-white/10 bg-[#111b2c] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-orange-400/30 hover:shadow-[0_12px_35px_rgba(249,115,22,0.06)]"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <item.icon size={27} className={item.color} />
              <h2 className="mt-5 text-lg font-extrabold text-white">
                {item.title}
              </h2>
              <p className="mt-3 text-sm leading-7 text-slate-400">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* WHY THIS GUIDE */}
      <section className="relative py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 rounded-[30px] border border-white/10 bg-gradient-to-br from-[#121e31] to-[#0d1422] p-7 sm:p-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:p-12">
            <div>
              <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-orange-400">
                <Sparkles size={15} />
                Travel Perspective
              </span>
              <h2 className="mt-5 text-3xl font-black leading-tight sm:text-4xl">
                Understanding Travel Needs Across{" "}
                <span className="bg-gradient-to-r from-orange-400 to-amber-200 bg-clip-text text-transparent">
                  Chhattisgarh
                </span>
              </h2>
            </div>

            <div className="space-y-5 text-sm leading-8 text-slate-300 sm:text-base">
              <p>
                Chhattisgarh travellers often need flexibility more than
                anything else. Some need a direct cab from home to railway
                station, some need an outstation ride for medical visits or
                family functions, and many want reliable vehicles for
                city-to-city business movement. Aaruhi Travels is designed
                around these real travel patterns instead of generic
                tourist-only content.
              </p>
              <p>
                Our focus is simple: responsive booking support, polite
                drivers, clear communication, practical vehicle options,
                and service coverage in cities where passengers need
                convenient transportation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CITY GUIDE */}
      <section className="relative isolate overflow-hidden border-y border-white/[0.06] bg-[#0c1321] py-20 sm:py-24">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -left-32 top-10 h-96 w-96 rounded-full bg-orange-500/[0.07] blur-[120px]" />
          <div className="absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-blue-500/[0.07] blur-[120px]" />
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-orange-400">
                Explore by Destination
              </span>
              <h2 className="mt-4 text-3xl font-black sm:text-4xl md:text-5xl">
                City-Wise{" "}
                <span className="bg-gradient-to-r from-orange-400 to-amber-200 bg-clip-text text-transparent">
                  Travel Guide
                </span>
              </h2>
              <p className="mt-4 text-sm leading-7 text-slate-400 sm:text-base">
                Explore taxi and transportation requirements across
                Chhattisgarh's important cities.
              </p>
            </div>

            <span className="inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs font-bold text-slate-300">
              <MapPin size={15} className="text-orange-400" />
              7 Featured Cities
            </span>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {cityGuides.map((city, index) => (
              <article
                key={city.city}
                className="city-card group relative overflow-hidden rounded-3xl border border-white/10 bg-[#111b2c] p-6 transition-all duration-500 hover:-translate-y-1 hover:border-white/20 hover:shadow-[0_15px_45px_rgba(0,0,0,0.25)] sm:p-8"
                style={{ animationDelay: `${index * 80}ms` }}
              >
                <div
                  className={`absolute -right-16 -top-16 h-48 w-48 rounded-full bg-gradient-to-br ${city.accent} opacity-[0.07] blur-3xl transition-opacity group-hover:opacity-20`}
                />

                <div className="relative flex items-start gap-4">
                  <div
                    className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${city.accent} text-black shadow-lg transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110`}
                  >
                    <city.icon size={26} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-black text-white">
                      {city.city}
                    </h3>
                    <p className="mt-1 text-xs font-bold uppercase tracking-wide text-orange-300">
                      {city.label}
                    </p>
                  </div>
                  <MapPin
                    className="ml-auto text-slate-500 transition-colors group-hover:text-orange-400"
                    size={19}
                  />
                </div>

                <p className="relative mt-6 text-sm leading-8 text-slate-300">
                  {city.description}
                </p>

                <div className="relative mt-6 border-t border-white/[0.07] pt-5">
                  <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.17em] text-slate-500">
                    Travel Highlights
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {city.highlights.map((highlight) => (
                      <span
                        key={highlight}
                        className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-2 text-[11px] font-semibold text-slate-300"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>

                <a
                  href={`https://wa.me/919244137353?text=${encodeURIComponent(
                    `Hello Aaruhi Travels, I want to enquire about taxi service in ${city.city}. Please share the booking details.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative mt-6 inline-flex items-center gap-2 text-sm font-bold text-orange-300 transition-colors hover:text-orange-200"
                >
                  Enquire for {city.city}
                  <ArrowRight
                    size={17}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="relative py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-orange-400">
              Travel Made Convenient
            </span>
            <h2 className="mt-4 text-3xl font-black sm:text-4xl md:text-5xl">
              Services Passengers{" "}
              <span className="bg-gradient-to-r from-orange-400 to-amber-200 bg-clip-text text-transparent">
                Search For
              </span>
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-400 sm:text-base">
              Explore the different taxi and travel requirements supported
              by Aaruhi Travels.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {serviceCards.map((service, index) => (
              <Link
                href={service.href}
                key={service.title}
                className="service-card group rounded-3xl border border-white/10 bg-[#101827] p-6 transition-all duration-500 hover:-translate-y-2 hover:border-orange-400/30 hover:bg-[#131f32] hover:shadow-[0_15px_45px_rgba(249,115,22,0.07)]"
                style={{ animationDelay: `${index * 70}ms` }}
              >
                <div
                  className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${service.accent} text-black shadow-lg transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110`}
                >
                  <service.icon size={26} />
                </div>

                <h3 className="mt-6 text-lg font-extrabold text-white">
                  {service.title}
                </h3>
                <p className="mt-3 min-h-[72px] text-sm leading-7 text-slate-400">
                  {service.description}
                </p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-orange-300">
                  Explore Service
                  <ChevronRight
                    size={17}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* TRAVEL PLANNING */}
      <section className="relative isolate overflow-hidden border-y border-white/[0.06] bg-[#0c1321] py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div className="rounded-3xl border border-white/10 bg-[#111b2c] p-7 sm:p-9">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-400/10 text-orange-400">
              <Compass size={25} />
            </div>
            <h2 className="mt-6 text-2xl font-black text-white">
              Travel Requirements We Support
            </h2>
            <ul className="mt-6 space-y-4">
              {[
                "Local cab booking for city travel",
                "One-way taxi for direct point-to-point trips",
                "Round-trip taxi for return journeys",
                "Railway station pickup and drop",
                "Raipur airport transfer support",
                "Family and wedding travel vehicles",
                "Business and corporate travel bookings",
                "Outstation taxi across Chhattisgarh",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-sm leading-6 text-slate-300"
                >
                  <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-400/10 text-emerald-400">
                    <ChevronRight size={14} />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative overflow-hidden rounded-3xl border border-orange-400/20 bg-gradient-to-br from-orange-500/[0.12] via-[#121c2c] to-[#101827] p-7 sm:p-9">
            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-orange-500/10 blur-[90px]" />

            <div className="relative">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-400/10 text-orange-400">
                <ShieldCheck size={25} />
              </div>

              <h2 className="mt-6 text-2xl font-black text-white">
                What to Share When Booking a Taxi
              </h2>

              <p className="mt-4 text-sm leading-8 text-slate-300">
                To help coordinate your journey, keep your travel information
                ready when contacting Aaruhi Travels. Sharing complete details
                helps the team understand your requirements and discuss
                suitable arrangements.
              </p>

              <div className="mt-7 grid grid-cols-2 gap-3">
                {[
                  "Pickup location",
                  "Drop location",
                  "Travel date",
                  "Pickup time",
                  "Passenger count",
                  "Vehicle preference",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-xl border border-white/10 bg-black/10 px-4 py-3 text-xs font-semibold text-slate-200"
                  >
                    <span className="mr-2 text-orange-400">✓</span>
                    {item}
                  </div>
                ))}
              </div>

              <a
                href="https://wa.me/919244137353?text=Hello%20Aaruhi%20Travels%2C%20I%20want%20to%20enquire%20about%20a%20taxi."
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-orange-500 to-amber-400 px-6 py-3.5 text-sm font-extrabold text-black transition hover:-translate-y-1"
              >
                Send Your Enquiry
                <ArrowRight size={17} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="relative py-20 sm:py-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-orange-400">
              Quick Travel Answers
            </span>
            <h2 className="mt-4 text-3xl font-black sm:text-4xl md:text-5xl">
              Frequently Asked{" "}
              <span className="bg-gradient-to-r from-orange-400 to-amber-200 bg-clip-text text-transparent">
                Questions
              </span>
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-400">
              Helpful information about taxi bookings and travel services
              across Chhattisgarh.
            </p>
          </div>

          <div className="space-y-4">
            {travelFAQs.map((faq, index) => (
              <details
                key={faq.question}
                className="faq-item group rounded-2xl border border-white/10 bg-[#101827] p-5 transition-all duration-300 open:border-orange-400/30 open:bg-[#131f32] sm:p-6"
                style={{ animationDelay: `${index * 60}ms` }}
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left text-sm font-bold leading-7 text-white marker:hidden sm:text-base">
                  {faq.question}
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-orange-400/10 text-orange-400 transition-transform duration-300 group-open:rotate-90">
                    <ChevronRight size={19} />
                  </span>
                </summary>
                <p className="mt-4 border-t border-white/[0.07] pt-4 text-sm leading-8 text-slate-400">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative isolate overflow-hidden px-4 pb-20 sm:px-6 sm:pb-24 lg:px-8">
        <div className="relative mx-auto max-w-5xl overflow-hidden rounded-[32px] border border-orange-300/20 bg-[#111827] px-6 py-14 text-center shadow-[0_0_80px_rgba(249,115,22,0.08)] sm:px-12 sm:py-16">
          <div className="pointer-events-none absolute -left-20 -top-32 h-80 w-80 rounded-full bg-orange-500/20 blur-[100px]" />
          <div className="pointer-events-none absolute -bottom-40 -right-20 h-80 w-80 rounded-full bg-blue-500/20 blur-[100px]" />

          <div className="relative">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-orange-400/30 bg-orange-400/10 text-orange-400 shadow-[0_0_30px_rgba(249,115,22,0.15)]">
              <Navigation size={30} />
            </div>

            <h2 className="mt-7 text-3xl font-black sm:text-4xl md:text-5xl">
              Ready to Explore Chhattisgarh?
              <span className="mt-2 block bg-gradient-to-r from-orange-400 to-amber-200 bg-clip-text text-transparent">
                Let's Plan Your Journey.
              </span>
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">
              Whether you need a local cab in Korba, an airport ride in
              Raipur, a railway pickup in Bilaspur or an intercity booking
              from Raigarh, Durg, Bhilai or Ambikapur, connect with Aaruhi
              Travels to discuss your travel requirements.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <a
                href="tel:+919244137353"
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-orange-500 to-amber-400 px-7 py-4 text-sm font-extrabold text-black shadow-lg shadow-orange-500/20 transition hover:-translate-y-1"
              >
                Call +91 92441 37353
                <ArrowRight size={18} />
              </a>

              <a
                href="https://wa.me/919244137353"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-7 py-4 text-sm font-bold text-white transition hover:border-green-400/40 hover:bg-green-500/10 hover:text-green-300"
              >
                WhatsApp Booking
                <MoveUpRight size={17} />
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      {/* ANIMATIONS */}
      <style>{`
        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(24px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes spinSlow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        .animate-fade-up {
          animation: fadeUp 0.8s ease-out both;
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-spin-slow {
          animation: spinSlow 35s linear infinite;
        }

        .overview-card,
        .city-card,
        .service-card,
        .faq-item {
          animation: fadeUp 0.7s ease-out both;
        }

        details summary::-webkit-details-marker {
          display: none;
        }

        @media (prefers-reduced-motion: reduce) {
          .animate-fade-up,
          .animate-float,
          .animate-spin-slow,
          .overview-card,
          .city-card,
          .service-card,
          .faq-item {
            animation: none !important;
            transition: none !important;
          }
        }
      `}</style>
    </main>
  );
}
