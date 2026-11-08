
import {
  ShieldCheck,
  IndianRupee,
  Clock3,
  Car,
  Headphones,
  MapPinned,
  Users,
  Star,
  Route,
  BadgeCheck,
  ArrowRight,
  CheckCircle2,
  Phone,
  MessageCircle,
  Sparkles,
  CalendarCheck,
  Navigation,
  ChevronRight,
  Wallet,
  Award,
} from "lucide-react";

import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "../../components/navbar";
import Footer from "../../components/Footer";

export const metadata: Metadata = {
  title:
    "Why Choose Aaruhi Travels | Trusted One Way Taxi Service in Chhattisgarh",
  description:
    "Book reliable one way taxi services across Chhattisgarh with Aaruhi Travels. Experienced drivers, comfortable vehicles, transparent fares and 24x7 booking assistance.",
  alternates: {
    canonical: "https://aaruhitravels.com/why-choose-us",
  },
  openGraph: {
    title: "Why Choose Aaruhi Travels | Travel With Confidence",
    description:
      "Discover reliable, comfortable and affordable taxi services across Chhattisgarh.",
    url: "https://aaruhitravels.com/why-choose-us",
    siteName: "Aaruhi Travels",
    type: "website",
  },
};

const WHATSAPP_NUMBER = "919244137353";
const PHONE_NUMBER = "+919244137353";

const bookingMessage = encodeURIComponent(
  "Hello Aaruhi Travels! I want to enquire about a taxi booking.\n\nPickup Location:\nDrop Location:\nTravel Date:\nTrip Type: One Way / Round Trip\nPassengers:\nVehicle Preference:\n\nPlease share your best available fare."
);

const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${bookingMessage}`;

const reasons = [
  {
    icon: IndianRupee,
    title: "Affordable One Way Taxi Fares",
    description:
      "Pay for your one-way journey without unnecessarily paying expensive return-trip charges. Get a suitable fare for your travel requirement.",
    tag: "Save on One Way Travel",
  },
  {
    icon: ShieldCheck,
    title: "15+ Years of Experience",
    description:
      "Serving customers since 2011, we understand intercity travel requirements and focus on dependable service at every step.",
    tag: "Since 2011",
  },
  {
    icon: Car,
    title: "Clean & Comfortable Vehicles",
    description:
      "Choose from comfortable sedan and SUV options. We focus on vehicle maintenance and a pleasant journey.",
    tag: "Comfort First",
  },
  {
    icon: Users,
    title: "Professional Drivers",
    description:
      "Travel with experienced and courteous drivers familiar with major routes and destinations across the region.",
    tag: "Experienced Drivers",
  },
  {
    icon: Clock3,
    title: "Timely Pickup Assistance",
    description:
      "We value your schedule and coordinate pickup details in advance for business trips, family journeys and transfers.",
    tag: "Time Matters",
  },
  {
    icon: Headphones,
    title: "24×7 Booking Assistance",
    description:
      "Need a late-night airport transfer or an early morning intercity taxi? Contact our team for booking assistance.",
    tag: "Always Reachable",
  },
  {
    icon: Route,
    title: "Extensive Route Coverage",
    description:
      "Travel between major cities, industrial locations, business hubs and important destinations across Chhattisgarh.",
    tag: "Intercity Network",
  },
  {
    icon: MapPinned,
    title: "Convenient Doorstep Pickup",
    description:
      "Get pickup assistance from your home, office, hotel, airport or railway station as per your booking requirement.",
    tag: "Pickup Made Easy",
  },
  {
    icon: Star,
    title: "Customer-First Approach",
    description:
      "We value repeat customers and referrals. Our focus is to make every booking experience simple and comfortable.",
    tag: "Built on Trust",
  },
  {
    icon: BadgeCheck,
    title: "Transparent Pricing",
    description:
      "Understand your fare before confirming your booking. Our team helps clarify applicable charges and trip details.",
    tag: "No Fare Confusion",
  },
];

const cities = [
  "Korba",
  "Raipur",
  "Bilaspur",
  "Raigarh",
  "Ambikapur",
  "Durg",
  "Bhilai",
  "Jagdalpur",
];

const trustPoints = [
  "One Way Taxi",
  "Round Trip Taxi",
  "Airport Transfers",
  "Corporate Travel",
  "Outstation Trips",
  "Local Taxi",
];

const stats = [
  {
    value: "15+",
    label: "Years of Experience",
    icon: Award,
  },
  {
    value: "5000+",
    label: "Happy Customers",
    icon: Users,
  },
  {
    value: "24×7",
    label: "Booking Assistance",
    icon: Headphones,
  },
  {
    value: "100%",
    label: "Pricing Transparency",
    icon: ShieldCheck,
  },
];

export default function WhyUsPage() {
  return (
    <main className="why-page overflow-hidden bg-[#070D19] text-white">
      <Navbar />

      {/* HERO SECTION */}
      <section className="why-hero relative isolate overflow-hidden">
        <div className="hero-glow hero-glow-one" />
        <div className="hero-glow hero-glow-two" />
        <div className="hero-grid absolute inset-0" />

       <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-14 px-5 pb-24 pt-0 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:pb-32 lg:pt-0">
          <div className="hero-content">
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-orange-400/25 bg-orange-400/10 px-4 py-2 text-sm font-semibold text-orange-300">
              <Sparkles size={15} />
              WHY TRAVEL WITH AARUHI
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-orange-400" />
            </div>

            <h1 className="max-w-3xl text-4xl font-black leading-[1.13] tracking-tight sm:text-5xl lg:text-6xl">
              Your Journey.
              <br />
              Your Comfort.
              <br />
              <span className="gradient-text">
                Our Commitment.
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
              Looking for a reliable one way taxi in Chhattisgarh?
              Experience comfortable vehicles, experienced drivers,
              transparent fares and dependable booking assistance
              with Aaruhi Travels.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="primary-cta inline-flex items-center justify-center gap-3 rounded-xl px-7 py-4 text-base font-bold text-white"
              >
                <MessageCircle size={20} />
                Get Your Best Fare
                <ArrowRight size={18} />
              </a>

              <a
                href={`tel:${PHONE_NUMBER}`}
                className="secondary-cta inline-flex items-center justify-center gap-3 rounded-xl px-7 py-4 text-base font-bold text-white"
              >
                <Phone size={19} />
                Call for Booking
              </a>
            </div>

            <div className="mt-9 flex flex-wrap gap-x-6 gap-y-3 text-sm text-slate-300">
              <span className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-orange-400" />
                Since 2011
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-orange-400" />
                One Way Specialists
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-orange-400" />
                24×7 Assistance
              </span>
            </div>
          </div>

          {/* HERO TRUST CARD */}
          <div className="hero-visual relative mx-auto w-full max-w-lg">
            <div className="visual-ring visual-ring-one" />
            <div className="visual-ring visual-ring-two" />

            <div className="relative rounded-[2rem] border border-white/10 bg-[#111B2B]/90 p-5 shadow-[0_25px_100px_rgba(0,0,0,0.5)] backdrop-blur-xl sm:p-7">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="text-sm font-medium text-slate-400">
                    THE AARUHI EXPERIENCE
                  </p>
                  <h2 className="mt-1 text-2xl font-bold">
                    Travel with confidence.
                  </h2>
                </div>
                <div className="rounded-2xl border border-orange-400/20 bg-orange-400/10 p-3 text-orange-400">
                  <Car size={28} />
                </div>
              </div>

              <div className="relative my-8 overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-[#182A40] via-[#142238] to-[#0D1728] p-5">
                <div className="absolute -right-10 -top-10 h-36 w-36 rounded-full bg-orange-500/15 blur-3xl" />

                <div className="relative flex items-center justify-between">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                      Your next destination
                    </p>
                    <p className="mt-2 text-2xl font-black">
                      Anywhere in
                    </p>
                    <p className="gradient-text text-3xl font-black">
                      Chhattisgarh
                    </p>
                  </div>
                  <Navigation
                    size={58}
                    strokeWidth={1.2}
                    className="text-orange-400"
                  />
                </div>

                <div className="mt-8 flex items-center gap-3">
                  <div className="h-px flex-1 bg-gradient-to-r from-orange-400 to-transparent" />
                  <span className="text-xs font-semibold text-orange-300">
                    YOUR JOURNEY STARTS HERE
                  </span>
                  <div className="h-px flex-1 bg-gradient-to-l from-orange-400 to-transparent" />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {[
                  {
                    icon: Wallet,
                    title: "Fair Fares",
                    sub: "Clear pricing",
                  },
                  {
                    icon: ShieldCheck,
                    title: "Trusted Travel",
                    sub: "Since 2011",
                  },
                  {
                    icon: Clock3,
                    title: "24×7 Support",
                    sub: "Booking help",
                  },
                  {
                    icon: Car,
                    title: "Comfortable",
                    sub: "Vehicle choices",
                  },
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.title}
                      className="mini-feature rounded-xl border border-white/10 bg-white/[0.035] p-4"
                    >
                      <Icon size={21} className="text-orange-400" />
                      <p className="mt-3 font-bold">{item.title}</p>
                      <p className="mt-1 text-xs text-slate-400">
                        {item.sub}
                      </p>
                    </div>
                  );
                })}
              </div>

              <div className="mt-5 flex items-center justify-between rounded-xl border border-orange-400/20 bg-orange-400/[0.07] p-4">
                <div>
                  <p className="text-sm font-bold">
                    Planning a journey?
                  </p>
                  <p className="mt-1 text-xs text-slate-400">
                    Get a personalised taxi quotation.
                  </p>
                </div>
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Get taxi quotation on WhatsApp"
                  className="rounded-xl bg-orange-500 p-3 text-white transition hover:bg-orange-400"
                >
                  <ArrowRight size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-orange-400/50 to-transparent" />
      </section>

      {/* STATS */}
      <section className="relative z-20 mx-auto -mt-9 max-w-7xl px-5 sm:px-8">
        <div className="stats-panel grid grid-cols-2 overflow-hidden rounded-2xl border border-white/10 bg-[#111B2B] shadow-2xl md:grid-cols-4">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className={`stat-item p-6 text-center sm:p-8 ${
                  index !== 3 ? "md:border-r md:border-white/10" : ""
                } ${
                  index < 2 ? "border-b border-white/10 md:border-b-0" : ""
                }`}
              >
                <Icon
                  size={23}
                  className="mx-auto mb-3 text-orange-400"
                />
                <h2 className="text-3xl font-black tracking-tight sm:text-4xl">
                  {stat.value}
                </h2>
                <p className="mt-2 text-xs font-medium text-slate-400 sm:text-sm">
                  {stat.label}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="relative py-24 sm:py-28">
        <div className="section-glow left-[-180px] top-20" />

        <div className="relative mx-auto max-w-5xl px-5 text-center sm:px-8">
          <p className="section-eyebrow">
            MORE THAN JUST A TAXI
          </p>

          <h2 className="mt-5 text-3xl font-black leading-tight sm:text-5xl">
            Travel Should Be
            <span className="gradient-text"> Simple, Safe & Affordable.</span>
          </h2>

          <div className="mx-auto mt-8 max-w-4xl space-y-5 text-base leading-8 text-slate-400 sm:text-lg">
            <p>
              Choosing the right taxi service can make a huge
              difference to your travel experience. Whether you are
              travelling for business, family visits, airport transfers
              or long-distance journeys, you deserve a service that
              is comfortable, reliable and affordable.
            </p>

            <p>
              Aaruhi Travels has been serving customers since 2011.
              With more than 15 years of experience in the taxi and
              travel industry, we understand the importance of
              punctuality, vehicle quality, transparent pricing and
              responsive customer support.
            </p>

            <p>
              Our primary focus includes one-way taxi services,
              helping customers avoid unnecessary return-trip
              expenses. We aim to make intercity travel convenient
              without compromising on comfort or service quality.
            </p>
          </div>

          <div className="mt-9 flex flex-wrap justify-center gap-3">
            {trustPoints.map((point) => (
              <span
                key={point}
                className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm font-medium text-slate-300 transition hover:border-orange-400/40 hover:bg-orange-400/10 hover:text-orange-300"
              >
                {point}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* REASONS */}
      <section className="relative overflow-hidden border-y border-white/5 bg-[#0B1422] py-24 sm:py-28">
        <div className="section-glow right-[-180px] top-40" />

        <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <p className="section-eyebrow">
              THE AARUHI ADVANTAGE
            </p>

            <h2 className="mt-5 text-3xl font-black sm:text-5xl">
              10 Reasons to Choose
              <span className="gradient-text"> Aaruhi Travels</span>
            </h2>

            <p className="mt-5 text-base leading-8 text-slate-400 sm:text-lg">
              From booking your taxi to reaching your destination,
              we focus on the details that make your journey better.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {reasons.map((reason, index) => {
              const Icon = reason.icon;

              return (
                <article
                  key={reason.title}
                  className="reason-card group relative overflow-hidden rounded-2xl border border-white/[0.09] bg-[#111D2E] p-6 sm:p-7"
                >
                  <div className="card-glow" />

                  <div className="relative z-10">
                    <div className="flex items-start justify-between">
                      <div className="icon-box flex h-14 w-14 items-center justify-center rounded-2xl border border-orange-400/20 bg-orange-400/10 text-orange-400">
                        <Icon size={27} strokeWidth={1.8} />
                      </div>

                      <span className="text-3xl font-black text-white/[0.08] transition group-hover:text-orange-400/30">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>

                    <div className="mt-7">
                      <span className="inline-flex rounded-full border border-orange-400/20 bg-orange-400/[0.07] px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-orange-300">
                        {reason.tag}
                      </span>

                      <h3 className="mt-4 text-xl font-bold leading-snug text-white">
                        {reason.title}
                      </h3>

                      <p className="mt-3 text-sm leading-7 text-slate-400">
                        {reason.description}
                      </p>
                    </div>

                    <div className="mt-6 flex items-center gap-2 text-sm font-bold text-orange-400 transition group-hover:gap-3">
                      <CheckCircle2 size={16} />
                      Aaruhi Advantage
                      <ChevronRight size={16} />
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* SERVICE COVERAGE */}
      <section className="relative py-24 sm:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-2">
          <div>
            <p className="section-eyebrow">
              OUR SERVICE NETWORK
            </p>

            <h2 className="mt-5 text-3xl font-black leading-tight sm:text-5xl">
              Connecting Major Cities Across
              <span className="gradient-text"> Chhattisgarh</span>
            </h2>

            <p className="mt-7 text-base leading-8 text-slate-400 sm:text-lg">
              Aaruhi Travels connects important cities, industrial
              hubs, business centres and destinations across the
              region. Whether you need a one-way taxi, round-trip
              cab or a scheduled transfer, our team can help you
              plan your journey.
            </p>

            <p className="mt-5 text-base leading-8 text-slate-400">
              Popular travel corridors include Korba–Bilaspur,
              Korba–Raipur, Korba–Raigarh and other major
              intercity routes. Contact us to check vehicle
              availability and your route-specific fare.
            </p>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="primary-cta mt-8 inline-flex items-center gap-3 rounded-xl px-6 py-4 font-bold text-white"
            >
              Check Route & Fare
              <ArrowRight size={19} />
            </a>
          </div>

          <div className="coverage-panel relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#111B2B] p-6 sm:p-9">
            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-orange-500/10 blur-[80px]" />

            <div className="relative">
              <div className="mb-7 flex items-center justify-between">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-orange-400">
                    SERVICE LOCATIONS
                  </p>
                  <h3 className="mt-2 text-2xl font-bold">
                    Find Your City
                  </h3>
                </div>
                <MapPinned
                  size={32}
                  className="text-orange-400"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                {cities.map((city, index) => (
                  <a
                    key={city}
                    href={`${whatsappLink}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="city-chip group flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.035] p-4 transition hover:border-orange-400/40 hover:bg-orange-400/[0.08]"
                  >
                    <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-orange-400/10 text-orange-400">
                      <MapPinned size={16} />
                    </span>
                    <span className="text-sm font-bold text-slate-200">
                      {city}
                    </span>
                    <ArrowRight
                      size={15}
                      className="ml-auto text-slate-500 transition group-hover:translate-x-1 group-hover:text-orange-400"
                    />
                  </a>
                ))}
              </div>

              <p className="mt-6 text-xs leading-6 text-slate-500">
                Availability and pickup options are subject to
                route, date and vehicle requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* HIGH INTENT BOOKING SECTION */}
      <section className="relative overflow-hidden border-y border-white/5 bg-[#0B1422] py-24 sm:py-28">
        <div className="section-glow left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" />

        <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
          <div className="mb-12 text-center">
            <p className="section-eyebrow">
              READY TO BOOK YOUR CAB?
            </p>
            <h2 className="mt-5 text-3xl font-black sm:text-5xl">
              Get Your Taxi Fare in
              <span className="gradient-text"> Just a Few Steps</span>
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-400">
              Share your journey details with our team. We will
              help you with vehicle options, fare information
              and booking assistance.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {[
              {
                icon: MapPinned,
                title: "Share Your Route",
                description:
                  "Tell us your pickup and drop locations.",
                number: "01",
              },
              {
                icon: CalendarCheck,
                title: "Choose Your Travel Date",
                description:
                  "Share your date, time and passenger count.",
                number: "02",
              },
              {
                icon: BadgeCheck,
                title: "Confirm Your Booking",
                description:
                  "Discuss your fare and confirm your trip.",
                number: "03",
              },
            ].map((step) => {
              const Icon = step.icon;

              return (
                <div
                  key={step.number}
                  className="process-card rounded-2xl border border-white/10 bg-[#111D2E] p-7"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-400/10 text-orange-400">
                      <Icon size={24} />
                    </div>
                    <span className="text-3xl font-black text-white/10">
                      {step.number}
                    </span>
                  </div>
                  <h3 className="mt-6 text-xl font-bold">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-400">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="mt-10 flex flex-col items-center justify-between gap-6 rounded-2xl border border-orange-400/20 bg-gradient-to-r from-orange-500/10 via-[#152337] to-orange-500/10 p-7 sm:flex-row sm:p-9">
            <div>
              <h3 className="text-2xl font-black">
                Have a trip in mind?
              </h3>
              <p className="mt-2 text-sm leading-7 text-slate-400">
                Send your travel details and request a personalised quotation.
              </p>
            </div>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="primary-cta inline-flex w-full shrink-0 items-center justify-center gap-3 rounded-xl px-7 py-4 font-bold text-white sm:w-auto"
            >
              <MessageCircle size={20} />
              Request a Quote
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative overflow-hidden px-5 py-24 sm:px-8 sm:py-32">
        <div className="final-glow absolute inset-0" />

        <div className="relative mx-auto max-w-5xl overflow-hidden rounded-[2rem] border border-orange-400/20 bg-gradient-to-br from-[#18283D] via-[#111D2E] to-[#0D1728] px-6 py-14 text-center shadow-[0_25px_100px_rgba(0,0,0,0.35)] sm:px-12 sm:py-20">
          <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-orange-500/15 blur-[90px]" />
          <div className="absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-amber-400/10 blur-[90px]" />

          <div className="relative">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-orange-400/25 bg-orange-400/10 text-orange-400">
              <Car size={32} />
            </div>

            <p className="mt-7 text-sm font-bold uppercase tracking-[0.25em] text-orange-400">
              YOUR JOURNEY, OUR PRIORITY
            </p>

            <h2 className="mt-5 text-3xl font-black leading-tight sm:text-5xl">
              Experience the Difference
              <br />
              with <span className="gradient-text">Aaruhi Travels</span>
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
              Affordable one-way travel, comfortable vehicles,
              experienced drivers and responsive booking
              assistance. Let us help you plan your next journey.
            </p>

            <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="primary-cta inline-flex items-center justify-center gap-3 rounded-xl px-8 py-4 font-bold text-white"
              >
                <MessageCircle size={20} />
                Book Your Taxi Now
                <ArrowRight size={18} />
              </a>

              <a
                href={`tel:${PHONE_NUMBER}`}
                className="secondary-cta inline-flex items-center justify-center gap-3 rounded-xl px-8 py-4 font-bold text-white"
              >
                <Phone size={19} />
                +91 92441 37353
              </a>
            </div>

            <p className="mt-7 text-xs text-slate-500">
              Share your route and travel date to receive a booking quotation.
            </p>
          </div>
      </div>
      </section>

      <Footer />

      {/* ANIMATIONS & CUSTOM STYLES */}
      
    </main>
  );
}
