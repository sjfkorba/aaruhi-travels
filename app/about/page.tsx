
import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  MapPin,
  Clock3,
  ShieldCheck,
  CarFront,
  Headphones,
  Award,
  Users,
  Route,
  CalendarDays,
  CheckCircle2,
  Navigation,
  Sparkles,
  MoveUpRight,
} from "lucide-react";

import Footer from "../../components/Footer";
import Navbar from "../../components/navbar";

export const metadata: Metadata = {
  title: "About Aaruhi Travels | Trusted Taxi Service in Chhattisgarh",
  description:
    "Discover Aaruhi Travels, established offline in 2011. With 15+ years of experience, we provide one-way taxi, outstation cab and reliable travel services across Korba, Bilaspur, Raipur, Raigarh and Chhattisgarh.",
  keywords: [
    "About Aaruhi Travels",
    "Aaruhi Travels Chhattisgarh",
    "Taxi service in Chhattisgarh",
    "One way taxi service Chhattisgarh",
    "One way cab service",
    "Korba taxi service",
    "Raipur taxi service",
    "Bilaspur taxi service",
    "Outstation cab service Chhattisgarh",
    "Trusted travel partner Chhattisgarh",
  ],
  alternates: {
    canonical: "https://aaruhitravels.com/about",
  },
  openGraph: {
    title: "About Aaruhi Travels | Your Trusted Travel Partner",
    description:
      "Learn about Aaruhi Travels, our journey since 2011 and our commitment to dependable one-way and outstation taxi services across Chhattisgarh.",
    url: "https://aaruhitravels.com/about",
    siteName: "Aaruhi Travels",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/logo.png",
        alt: "Aaruhi Travels - Your Trusted Travel Partner",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const stats = [
  {
    value: "15+",
    title: "Years Experience",
    description: "Serving travellers since 2011",
    icon: CalendarDays,
    color: "from-orange-500 to-amber-300",
    glow: "group-hover:shadow-orange-500/20",
  },
  {
    value: "5000+",
    title: "Happy Customers",
    description: "Built on customer trust",
    icon: Users,
    color: "from-blue-500 to-cyan-300",
    glow: "group-hover:shadow-blue-500/20",
  },
  {
    value: "24×7",
    title: "Customer Support",
    description: "Assistance for your journey",
    icon: Headphones,
    color: "from-violet-500 to-fuchsia-300",
    glow: "group-hover:shadow-violet-500/20",
  },
  {
    value: "100%",
    title: "Transparent Pricing",
    description: "Clear and upfront fare details",
    icon: ShieldCheck,
    color: "from-emerald-500 to-teal-300",
    glow: "group-hover:shadow-emerald-500/20",
  },
];

const routes = [
  "Korba → Bilaspur",
  "Bilaspur → Korba",
  "Korba → Raipur",
  "Raipur → Korba",
  "Korba → Raigarh",
  "Raigarh → Korba",
  "Korba → Dharamjaigarh",
  "Dharamjaigarh → Korba",
];

const advantages = [
  {
    icon: ShieldCheck,
    title: "Reliable Travel",
    description:
      "We focus on dependable service and a comfortable journey for every customer.",
  },
  {
    icon: CarFront,
    title: "Comfortable Cabs",
    description:
      "Clean vehicles and suitable cab options for different travel requirements.",
  },
  {
    icon: Clock3,
    title: "Punctual Pickups",
    description:
      "We understand the importance of time and work towards timely pickups.",
  },
  {
    icon: Headphones,
    title: "Dedicated Assistance",
    description:
      "Our team helps customers with booking enquiries and journey coordination.",
  },
];

const aboutStructuredData = {
  "@context": "https://schema.org",
  "@type": "TravelAgency",
  name: "Aaruhi Travels",
  url: "https://aaruhitravels.com",
  logo: "https://aaruhitravels.com/logo.png",
  description:
    "Aaruhi Travels provides one-way taxi, outstation cab rental and travel services across Chhattisgarh.",
  foundingDate: "2011",
  telephone: "+919244137353",
  areaServed: {
    "@type": "AdministrativeArea",
    name: "Chhattisgarh, India",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Korba",
    addressRegion: "Chhattisgarh",
    addressCountry: "IN",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+919244137353",
    contactType: "customer service",
    availableLanguage: ["English", "Hindi"],
  },
};

const paragraphs = [
  "Aaruhi Travels is one of the trusted and experienced taxi service providers in Chhattisgarh. Established offline in 2011, we have successfully served thousands of customers across the state and built a reputation based on reliability, affordability, customer satisfaction, and professional service.",

  "With more than 15 years of experience in the taxi and travel industry, we understand the importance of safe, comfortable, and affordable transportation. Our mission is simple — provide premium-quality taxi services at the most reasonable fares while ensuring complete customer satisfaction.",

  "We specialize in one-way taxi services, helping customers save money by paying only for the distance they travel. Unlike traditional taxi operators who often charge round-trip fares, our one-way cab model offers significant savings without compromising on comfort, safety, or service quality.",

  "Our services are available across the entire state of Chhattisgarh, connecting major cities, business hubs, industrial zones, tourist destinations, railway stations, airports, and residential areas.",

  "Some of our most popular routes include Korba to Bilaspur, Bilaspur to Korba, Korba to Raipur, Raipur to Korba, Korba to Raigarh, Raigarh to Korba, Korba to Dharamjaigarh, and Dharamjaigarh to Korba. These routes are regularly booked by professionals, families, students, business travelers, and tourists who rely on our dependable service.",

  "At Aaruhi Travels, every booking is handled with care and professionalism. Our drivers are experienced, courteous, and familiar with local routes, ensuring a smooth and hassle-free travel experience. We maintain clean vehicles, transparent pricing, punctual pickups, and dedicated customer support to provide the best possible service.",

  "Over the years, we have continuously improved our services to match modern customer expectations. Whether you need a taxi for airport transfers, railway station pickups, corporate travel, family trips, emergency travel, or daily transportation needs, Aaruhi Travels is always ready to serve you.",

  "What makes us different is our commitment to offering the cheapest one-way taxi fares in Chhattisgarh while maintaining premium-quality service standards. We believe that affordable travel should never mean compromising on safety, comfort, or reliability.",

  "Today, Aaruhi Travels proudly serves customers throughout Chhattisgarh and continues to grow through trust, customer referrals, and consistent service excellence. Our goal is to become the most trusted one-way taxi brand in Chhattisgarh by delivering exceptional travel experiences every day.",
];

export default function AboutPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#080c16] text-white">
      <Navbar />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(aboutStructuredData).replace(
            /</g,
            "\\u003c"
          ),
        }}
      />

      {/* HERO SECTION */}
      <section className="relative isolate overflow-hidden border-b border-white/10">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -left-40 -top-20 h-[450px] w-[450px] rounded-full bg-orange-500/15 blur-[130px]" />
          <div className="absolute -right-40 top-20 h-[450px] w-[450px] rounded-full bg-blue-500/15 blur-[130px]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.08),transparent_55%)]" />
          <div className="absolute inset-0 opacity-[0.12] [background-image:radial-gradient(#ffffff_1px,transparent_1px)] [background-size:28px_28px]" />
        </div>

        <div className="mx-auto max-w-7xl px-4 pb-20 pt-24 text-center sm:px-6 sm:pb-24 sm:pt-32 lg:px-8">
          <div className="animate-fade-up mx-auto inline-flex items-center gap-2 rounded-full border border-orange-400/30 bg-orange-400/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-orange-300 shadow-[0_0_25px_rgba(249,115,22,0.12)] sm:text-sm">
            <Sparkles size={15} />
            About Aaruhi Travels
          </div>

          <h1 className="animate-fade-up mt-7 text-4xl font-black leading-tight tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            More Than a Ride,
            <span className="mt-2 block bg-gradient-to-r from-orange-400 via-amber-200 to-yellow-400 bg-clip-text text-transparent">
              A Trusted Journey.
            </span>
          </h1>

          <p className="animate-fade-up mx-auto mt-6 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">
            Your trusted travel partner across Chhattisgarh. Delivering
            dependable taxi services, comfortable journeys and customer-focused
            travel experiences since 2011.
          </p>

          <div className="animate-fade-up mt-9 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/routes"
              className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-orange-500 to-amber-400 px-7 py-4 text-sm font-extrabold text-black shadow-[0_8px_30px_rgba(249,115,22,0.25)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(249,115,22,0.4)]"
            >
              Explore Our Routes
              <ArrowRight
                size={18}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>

            <a
              href="https://wa.me/919244137353"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-7 py-4 text-sm font-bold text-white backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-orange-400/50 hover:bg-white/10"
            >
              Talk to Our Team
              <MoveUpRight size={17} />
            </a>
          </div>

          <div className="animate-fade-up mx-auto mt-14 flex max-w-2xl flex-wrap items-center justify-center gap-x-8 gap-y-4 text-sm text-slate-300">
            <div className="flex items-center gap-2">
              <CheckCircle2 size={17} className="text-orange-400" />
              Established in 2011
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 size={17} className="text-orange-400" />
              One Way Taxi Specialists
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 size={17} className="text-orange-400" />
              Chhattisgarh Coverage
            </div>
          </div>
        </div>
      </section>

      {/* OUR STORY */}
      <section className="relative isolate overflow-hidden py-20 sm:py-24">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute left-0 top-40 h-96 w-96 rounded-full bg-orange-500/[0.06] blur-[120px]" />
          <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-blue-500/[0.06] blur-[120px]" />
        </div>

        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.85fr_1.5fr] lg:gap-16 lg:px-8">
          {/* Story side panel */}
          <div className="lg:sticky lg:top-28 lg:h-fit">
            <div className="mb-5 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-orange-400">
              <span className="h-px w-8 bg-orange-400" />
              Our Story
            </div>

            <h2 className="text-3xl font-black leading-tight sm:text-4xl md:text-5xl">
              Your Trusted
              <span className="mt-2 block bg-gradient-to-r from-orange-400 to-amber-200 bg-clip-text text-transparent">
                Travel Partner
              </span>
              Across Chhattisgarh
            </h2>

            <p className="mt-6 text-base leading-8 text-slate-400">
              Every journey has a purpose. Our purpose is to make your journey
              comfortable, dependable and convenient.
            </p>

            <div className="mt-9 rounded-3xl border border-orange-400/20 bg-gradient-to-br from-orange-500/10 to-amber-300/[0.03] p-7 shadow-[0_0_50px_rgba(249,115,22,0.05)]">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-500 to-amber-300 text-black shadow-lg shadow-orange-500/20">
                <Award size={28} />
              </div>

              <p className="mt-6 text-4xl font-black text-white">2011</p>
              <p className="mt-2 text-sm font-bold text-orange-300">
                The Beginning of Our Journey
              </p>
              <p className="mt-3 text-sm leading-7 text-slate-400">
                Established offline in 2011, growing through experience,
                service and customer trust.
              </p>
            </div>
          </div>

          {/* Original story content */}
          <div className="space-y-5">
            {paragraphs.map((paragraph, index) => (
              <article
                key={index}
                className="story-paragraph group relative rounded-2xl border border-white/[0.07] bg-white/[0.025] p-6 transition-all duration-300 hover:border-orange-400/20 hover:bg-white/[0.045] sm:p-7"
                style={{ animationDelay: `${index * 80}ms` }}
              >
                <div className="absolute bottom-5 left-0 top-5 w-[3px] rounded-full bg-gradient-to-b from-orange-500 to-amber-300 opacity-50 transition-opacity group-hover:opacity-100" />

                <div className="flex gap-4">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-orange-400/20 bg-orange-400/10 text-sm font-black text-orange-400">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <p className="text-sm leading-8 text-slate-300 sm:text-base">
                    {paragraph}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="relative isolate overflow-hidden border-y border-white/[0.06] bg-[#0c1321] py-20 sm:py-24">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute left-1/2 top-0 h-80 w-[700px] -translate-x-1/2 rounded-full bg-orange-500/[0.08] blur-[120px]" />
          <div className="absolute inset-0 opacity-[0.08] [background-image:radial-gradient(#ffffff_1px,transparent_1px)] [background-size:30px_30px]" />
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <div className="mb-4 flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-orange-400">
              <span className="h-px w-8 bg-orange-400" />
              Our Journey in Numbers
              <span className="h-px w-8 bg-orange-400" />
            </div>

            <h2 className="text-3xl font-black sm:text-4xl md:text-5xl">
              Experience That
              <span className="block bg-gradient-to-r from-orange-400 to-amber-200 bg-clip-text text-transparent">
                Builds Trust
              </span>
            </h2>

            <p className="mt-4 text-sm leading-7 text-slate-400 sm:text-base">
              Our journey is shaped by experience, customer relationships and
              a commitment to better travel services.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, index) => (
              <div
                key={stat.title}
                className={`stat-card group relative overflow-hidden rounded-3xl border border-white/10 bg-[#111b2c] p-7 text-center shadow-xl shadow-black/20 transition-all duration-500 hover:-translate-y-2 hover:border-white/20 hover:shadow-2xl ${stat.glow}`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div
                  className={`absolute -right-12 -top-12 h-36 w-36 rounded-full bg-gradient-to-br ${stat.color} opacity-[0.08] blur-2xl transition-opacity group-hover:opacity-20`}
                />

                <div
                  className={`relative mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${stat.color} text-black shadow-lg transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110`}
                >
                  <stat.icon size={26} />
                </div>

                <h3 className="relative mt-6 text-4xl font-black tracking-tight text-white sm:text-5xl">
                  {stat.value}
                </h3>

                <p className="relative mt-3 text-base font-bold text-slate-200">
                  {stat.title}
                </p>

                <p className="relative mt-2 text-xs leading-6 text-slate-400">
                  {stat.description}
                </p>

                <div
                  className={`mx-auto mt-6 h-1 w-12 rounded-full bg-gradient-to-r ${stat.color} transition-all duration-500 group-hover:w-24`}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY AARUHI */}
      <section className="relative overflow-hidden py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 max-w-2xl">
            <div className="mb-4 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-orange-400">
              <span className="h-px w-8 bg-orange-400" />
              The Aaruhi Advantage
            </div>

            <h2 className="text-3xl font-black sm:text-4xl md:text-5xl">
              Travel with
              <span className="ml-2 bg-gradient-to-r from-orange-400 to-amber-200 bg-clip-text text-transparent">
                Confidence.
              </span>
            </h2>

            <p className="mt-4 max-w-xl text-sm leading-7 text-slate-400 sm:text-base">
              We focus on the essentials that make every trip more convenient,
              comfortable and dependable.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {advantages.map((item, index) => (
              <div
                key={item.title}
                className="advantage-card group rounded-3xl border border-white/10 bg-[#101827] p-7 transition-all duration-500 hover:-translate-y-2 hover:border-orange-400/30 hover:bg-[#131f32] hover:shadow-[0_15px_45px_rgba(249,115,22,0.08)]"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-orange-400/20 bg-orange-400/10 text-orange-400 transition-all duration-500 group-hover:rotate-6 group-hover:bg-orange-400 group-hover:text-black">
                  <item.icon size={26} />
                </div>

                <h3 className="mt-6 text-lg font-extrabold text-white">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MAJOR SERVICE ROUTES */}
      <section className="relative isolate overflow-hidden border-y border-white/[0.06] bg-[#0c1321] py-20 sm:py-24">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -right-32 top-10 h-96 w-96 rounded-full bg-blue-500/[0.08] blur-[120px]" />
          <div className="absolute -left-32 bottom-0 h-96 w-96 rounded-full bg-orange-500/[0.08] blur-[120px]" />
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <div className="mb-4 flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-orange-400">
              <span className="h-px w-8 bg-orange-400" />
              Connecting Destinations
              <span className="h-px w-8 bg-orange-400" />
            </div>

            <h2 className="text-3xl font-black sm:text-4xl md:text-5xl">
              Major Service
              <span className="block bg-gradient-to-r from-orange-400 to-amber-200 bg-clip-text text-transparent">
                Routes
              </span>
            </h2>

            <p className="mt-4 text-sm leading-7 text-slate-400 sm:text-base">
              Explore some of our popular taxi routes connecting Korba with
              major destinations across Chhattisgarh.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {routes.map((route, index) => (
              <div
                key={route}
                className="route-item group flex items-center justify-between gap-3 rounded-2xl border border-white/10 bg-white/[0.035] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-orange-400/30 hover:bg-orange-400/[0.06]"
                style={{ animationDelay: `${index * 80}ms` }}
              >
                <div className="flex min-w-0 items-center gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-orange-400/10 text-orange-400 transition-all duration-300 group-hover:bg-orange-400 group-hover:text-black">
                    <MapPin size={19} />
                  </div>

                  <span className="text-sm font-bold leading-6 text-slate-200 sm:text-base">
                    {route}
                  </span>
                </div>

                <ArrowRight
                  size={17}
                  className="shrink-0 text-slate-500 transition-all duration-300 group-hover:translate-x-1 group-hover:text-orange-400"
                />
              </div>
            ))}
          </div>

          <div className="mt-9 text-center">
            <Link
              href="/routes"
              className="group inline-flex items-center gap-2 rounded-xl border border-orange-400/30 bg-orange-400/[0.07] px-6 py-3.5 text-sm font-bold text-orange-300 transition-all duration-300 hover:border-orange-400/60 hover:bg-orange-400/15"
            >
              Explore All Routes
              <ArrowRight
                size={17}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative isolate overflow-hidden px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
        <div className="relative mx-auto max-w-5xl overflow-hidden rounded-[32px] border border-orange-300/20 bg-[#111827] px-6 py-14 text-center shadow-[0_0_80px_rgba(249,115,22,0.08)] sm:px-12 sm:py-16">
          <div className="pointer-events-none absolute -left-20 -top-32 h-80 w-80 rounded-full bg-orange-500/20 blur-[100px]" />
          <div className="pointer-events-none absolute -bottom-40 -right-20 h-80 w-80 rounded-full bg-blue-500/20 blur-[100px]" />

          <div className="relative">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-orange-400/30 bg-orange-400/10 text-orange-400 shadow-[0_0_30px_rgba(249,115,22,0.15)]">
              <Navigation size={30} />
            </div>

            <h2 className="mt-7 text-3xl font-black sm:text-4xl md:text-5xl">
              Book Your One Way Taxi
              <span className="mt-2 block bg-gradient-to-r from-orange-400 to-amber-200 bg-clip-text text-transparent">
                Today.
              </span>
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">
              Affordable fares, experienced drivers, premium service and
              reliable travel across Chhattisgarh.
            </p>

            <a
              href="https://wa.me/919244137353?text=Hello%20Aaruhi%20Travels%2C%20I%20want%20to%20book%20a%20one%20way%20taxi."
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-8 inline-flex items-center gap-3 rounded-xl bg-gradient-to-r from-orange-500 to-amber-400 px-8 py-4 text-sm font-extrabold text-black shadow-[0_8px_30px_rgba(249,115,22,0.2)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(249,115,22,0.35)]"
            >
              Book on WhatsApp
              <ArrowRight
                size={18}
                className="transition-transform group-hover:translate-x-1"
              />
            </a>

            <p className="mt-5 text-xs font-medium tracking-wide text-slate-500">
              Aaruhi Travels · Your Trusted Travel Partner
            </p>
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

        .animate-fade-up {
          animation: fadeUp 0.8s ease-out both;
        }

        .story-paragraph,
        .stat-card,
        .advantage-card,
        .route-item {
          animation: fadeUp 0.7s ease-out both;
        }

        @media (prefers-reduced-motion: reduce) {
          .animate-fade-up,
          .story-paragraph,
          .stat-card,
          .advantage-card,
          .route-item {
            animation: none !important;
            transition: none !important;
          }
        }
      `}</style>
    </main>
  );
}
