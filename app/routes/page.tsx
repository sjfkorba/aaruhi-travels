import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  MapPin,
  Clock3,
  Route,
  ShieldCheck,
  CarFront,
  Headphones,
  MoveUpRight,
  Navigation,
} from "lucide-react";

import Navbar from "../../components/navbar";
import Footer from "../../components/Footer";

export const metadata: Metadata = {
  title: "Popular Taxi Routes in Chhattisgarh | Aaruhi Travels",
  description:
    "Explore popular one way taxi routes across Chhattisgarh with Aaruhi Travels. Book comfortable outstation cabs from Raipur, Bilaspur, Korba, Jagdalpur, Raigarh and more. Submit your journey details to get a fare quote.",
  keywords: [
    "popular taxi routes in Chhattisgarh",
    "one way taxi Chhattisgarh",
    "Raipur to Bilaspur taxi",
    "Raipur to Jagdalpur cab",
    "Raipur to Raigarh taxi",
    "Bilaspur to Ambikapur taxi",
    "Durg to Raipur cab",
    "Raipur to Korba taxi",
    "outstation taxi Chhattisgarh",
    "Aaruhi Travels",
  ],
  alternates: {
    canonical: "https://aaruhitravels.com/routes",
  },
  openGraph: {
    title: "Popular Cab Routes Across Chhattisgarh | Aaruhi Travels",
    description:
      "Find your route and request a personalised taxi fare. Comfortable one way and outstation cab services across Chhattisgarh.",
    url: "https://aaruhitravels.com/routes",
    siteName: "Aaruhi Travels",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/logo.png",
        alt: "Aaruhi Travels",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const routes = [
  {
    from: "Raipur",
    to: "Bilaspur",
    distance: "125 km",
    time: "2h 30m",
    color: "from-orange-500 to-amber-400",
    glow: "group-hover:shadow-orange-500/20",
  },
  {
    from: "Raipur",
    to: "Jagdalpur",
    distance: "285 km",
    time: "6h 10m",
    color: "from-violet-500 to-fuchsia-400",
    glow: "group-hover:shadow-violet-500/20",
  },
  {
    from: "Raipur",
    to: "Raigarh",
    distance: "170 km",
    time: "3h 20m",
    color: "from-cyan-500 to-blue-400",
    glow: "group-hover:shadow-cyan-500/20",
  },
  {
    from: "Bilaspur",
    to: "Ambikapur",
    distance: "210 km",
    time: "4h 15m",
    color: "from-emerald-500 to-teal-400",
    glow: "group-hover:shadow-emerald-500/20",
  },
  {
    from: "Durg",
    to: "Raipur",
    distance: "40 km",
    time: "50 min",
    color: "from-pink-500 to-rose-400",
    glow: "group-hover:shadow-pink-500/20",
  },
  {
    from: "Raipur",
    to: "Korba",
    distance: "200 km",
    time: "4h",
    color: "from-yellow-500 to-orange-400",
    glow: "group-hover:shadow-yellow-500/20",
  },
];

function createRouteSlug(from: string, to: string) {
  return `${from.toLowerCase().replace(/\s+/g, "-")}-to-${to
    .toLowerCase()
    .replace(/\s+/g, "-")}`;
}

function getWhatsAppLink(from: string, to: string) {
  const message = `Hello Aaruhi Travels,

I want to enquire about a one way taxi booking.

Pickup: ${from}
Drop: ${to}

Please share the available cab options and booking details.

Thank you.`;

  return `https://wa.me/919244137353?text=${encodeURIComponent(message)}`;
}

const routeStructuredData = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Popular Taxi Routes in Chhattisgarh",
  description:
    "Popular one way and outstation taxi routes served by Aaruhi Travels.",
  numberOfItems: routes.length,
  itemListElement: routes.map((route, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: `${route.from} to ${route.to} Taxi`,
    url: `https://aaruhitravels.com/one-way-taxi/${createRouteSlug(
      route.from,
      route.to
    )}`,
  })),
};

export default function RoutesPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#070b14] text-white">
      <Navbar />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(routeStructuredData).replace(/</g, "\\u003c"),
        }}
      />

      {/* HERO SECTION */}
      <section className="relative isolate overflow-hidden border-b border-white/10">
        {/* Background glows */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -left-40 top-0 h-[400px] w-[400px] rounded-full bg-orange-500/15 blur-[120px]" />
          <div className="absolute -right-40 top-20 h-[400px] w-[400px] rounded-full bg-blue-500/15 blur-[120px]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.08),transparent_55%)]" />
          <div className="absolute inset-0 opacity-[0.12] [background-image:radial-gradient(#ffffff_1px,transparent_1px)] [background-size:28px_28px]" />
        </div>

        <div className="mx-auto max-w-7xl px-4 pb-20 pt-24 text-center sm:px-6 sm:pb-24 sm:pt-32 lg:px-8">
          <div className="animate-fade-up mx-auto inline-flex items-center gap-2 rounded-full border border-orange-400/30 bg-orange-400/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-orange-300 shadow-[0_0_25px_rgba(249,115,22,0.12)] sm:text-sm">
            <Navigation size={15} />
            Explore Our Routes
          </div>

          <h1 className="animate-fade-up mt-7 text-4xl font-black leading-tight tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            Your Journey,
            <span className="mt-2 block bg-gradient-to-r from-orange-400 via-amber-200 to-yellow-400 bg-clip-text text-transparent">
              Our Responsibility.
            </span>
          </h1>

          <p className="animate-fade-up mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
            Explore popular one way taxi routes across Chhattisgarh.
            Choose your destination, share your journey details and get a
            personalised cab fare from Aaruhi Travels.
          </p>

          <div className="animate-fade-up mt-9 flex flex-wrap items-center justify-center gap-3">
            <a
              href="#available-routes"
              className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-orange-500 to-amber-400 px-7 py-4 text-sm font-extrabold text-black shadow-[0_8px_30px_rgba(249,115,22,0.25)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(249,115,22,0.4)]"
            >
              Explore Routes
              <ArrowRight
                size={18}
                className="transition-transform group-hover:translate-x-1"
              />
            </a>

            <a
              href="https://wa.me/919244137353"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-7 py-4 text-sm font-bold text-white backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-orange-400/50 hover:bg-white/10"
            >
              Contact Us
              <MoveUpRight size={17} />
            </a>
          </div>

          {/* Trust indicators */}
          <div className="animate-fade-up mx-auto mt-14 grid max-w-3xl grid-cols-1 gap-3 sm:grid-cols-3">
            {[
              {
                icon: CarFront,
                title: "Multiple Cab Options",
                description: "Choose your preferred vehicle",
              },
              {
                icon: ShieldCheck,
                title: "Trusted Travel",
                description: "Comfortable journeys",
              },
              {
                icon: Headphones,
                title: "Booking Assistance",
                description: "Support for your enquiries",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="flex items-center justify-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-4 text-left backdrop-blur-xl"
              >
                <div className="rounded-xl bg-orange-400/10 p-3 text-orange-400">
                  <item.icon size={22} />
                </div>
                <div>
                  <p className="text-sm font-bold text-white">{item.title}</p>
                  <p className="mt-1 text-xs text-slate-400">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ROUTES SECTION */}
      <section
        id="available-routes"
        className="relative isolate overflow-hidden py-20 sm:py-24"
      >
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute left-0 top-40 h-96 w-96 rounded-full bg-blue-600/[0.07] blur-[120px]" />
          <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-orange-500/[0.08] blur-[120px]" />
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Section heading */}
          <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <div className="mb-4 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-orange-400">
                <span className="h-px w-8 bg-orange-400" />
                Travel Across Chhattisgarh
              </div>

              <h2 className="text-3xl font-black tracking-tight sm:text-4xl md:text-5xl">
                Popular{" "}
                <span className="bg-gradient-to-r from-orange-400 to-amber-300 bg-clip-text text-transparent">
                  Cab Routes
                </span>
              </h2>

              <p className="mt-4 max-w-xl text-sm leading-7 text-slate-400 sm:text-base">
                Select your pickup and drop location to explore route details
                and request your personalised taxi quotation.
              </p>
            </div>

            <div className="inline-flex w-fit items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4">
              <div className="rounded-xl bg-orange-400/10 p-3 text-orange-400">
                <Route size={24} />
              </div>
              <div>
                <p className="text-2xl font-black text-white">
                  {routes.length.toString().padStart(2, "0")}
                </p>
                <p className="text-xs text-slate-400">Featured Routes</p>
              </div>
            </div>
          </div>

          {/* Route cards */}
          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {routes.map((route, index) => {
              const routeSlug = createRouteSlug(route.from, route.to);
              const enquiryUrl = `/one-way-taxi/${routeSlug}`;
              const whatsappUrl = getWhatsAppLink(route.from, route.to);

              return (
                <article
                  key={routeSlug}
                  className={`route-card group relative rounded-[26px] border border-white/10 bg-[#101827]/90 p-[1px] shadow-xl shadow-black/20 transition-all duration-500 hover:-translate-y-2 hover:border-white/20 hover:shadow-2xl ${route.glow}`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Gradient border */}
                  <div
                    className={`absolute inset-0 rounded-[26px] bg-gradient-to-br ${route.color} opacity-0 transition-opacity duration-500 group-hover:opacity-100`}
                  />

                  <div className="relative h-full rounded-[25px] bg-[#101827] p-6 sm:p-7">
                    {/* Card top */}
                    <div className="flex items-center justify-between">
                      <span className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.15em] text-slate-400">
                        One Way Taxi
                      </span>

                      <div
                        className={`rounded-xl bg-gradient-to-br ${route.color} p-2.5 text-black shadow-lg transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110`}
                      >
                        <CarFront size={21} />
                      </div>
                    </div>

                    {/* Route title */}
                    <div className="relative mt-8">
                      <div className="flex items-center gap-3">
                        <div className="min-w-0 flex-1">
                          <p className="mb-1 text-[10px] font-bold uppercase tracking-[0.15em] text-slate-500">
                            Pickup Location
                          </p>
                          <h3 className="truncate text-xl font-extrabold text-white sm:text-2xl">
                            {route.from}
                          </h3>
                        </div>

                        <div className="flex shrink-0 flex-col items-center">
                          <div
                            className={`rounded-full bg-gradient-to-r ${route.color} p-2 text-black shadow-lg`}
                          >
                            <ArrowRight size={19} />
                          </div>
                          <div className="mt-1 h-5 border-l border-dashed border-slate-600" />
                        </div>

                        <div className="min-w-0 flex-1 text-right">
                          <p className="mb-1 text-[10px] font-bold uppercase tracking-[0.15em] text-slate-500">
                            Drop Location
                          </p>
                          <h3 className="truncate text-xl font-extrabold text-white sm:text-2xl">
                            {route.to}
                          </h3>
                        </div>
                      </div>
                    </div>

                    {/* Route details */}
                    <div className="mt-8 grid grid-cols-2 gap-3">
                      <div className="rounded-2xl border border-white/[0.07] bg-white/[0.035] p-4">
                        <div className="flex items-center gap-2 text-slate-400">
                          <MapPin size={15} className="text-orange-400" />
                          <span className="text-xs">Distance</span>
                        </div>
                        <p className="mt-2 text-lg font-extrabold text-white">
                          {route.distance}
                        </p>
                      </div>

                      <div className="rounded-2xl border border-white/[0.07] bg-white/[0.035] p-4">
                        <div className="flex items-center gap-2 text-slate-400">
                          <Clock3 size={15} className="text-orange-400" />
                          <span className="text-xs">Est. Travel Time</span>
                        </div>
                        <p className="mt-2 text-lg font-extrabold text-white">
                          {route.time}
                        </p>
                      </div>
                    </div>

                    {/* CTA */}
                    <div className="mt-6 grid grid-cols-2 gap-3">
                      <Link
                        href={enquiryUrl}
                        aria-label={`Get taxi fare for ${route.from} to ${route.to}`}
                        className={`group/btn flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r ${route.color} px-3 py-3.5 text-sm font-extrabold text-black shadow-lg transition-all duration-300 hover:brightness-110`}
                      >
                        Get Fare
                        <ArrowRight
                          size={17}
                          className="transition-transform group-hover/btn:translate-x-1"
                        />
                      </Link>

                      <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/[0.04] px-3 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:border-green-400/40 hover:bg-green-500/10 hover:text-green-400"
                      >
                        WhatsApp
                        <MoveUpRight size={16} />
                      </a>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="relative isolate overflow-hidden px-4 pb-20 sm:px-6 sm:pb-24 lg:px-8">
        <div className="relative mx-auto max-w-5xl overflow-hidden rounded-[32px] border border-orange-300/20 bg-[#111827] px-6 py-14 text-center shadow-[0_0_80px_rgba(249,115,22,0.08)] sm:px-12 sm:py-16">
          <div className="pointer-events-none absolute -left-20 -top-32 h-80 w-80 rounded-full bg-orange-500/20 blur-[100px]" />
          <div className="pointer-events-none absolute -bottom-40 -right-20 h-80 w-80 rounded-full bg-blue-500/20 blur-[100px]" />

          <div className="relative">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-orange-400/30 bg-orange-400/10 text-orange-400 shadow-[0_0_30px_rgba(249,115,22,0.15)]">
              <Navigation size={30} />
            </div>

            <h2 className="mt-7 text-3xl font-black sm:text-4xl md:text-5xl">
              Your Destination,
              <span className="block bg-gradient-to-r from-orange-400 to-amber-200 bg-clip-text text-transparent">
                Our Next Journey.
              </span>
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">
              Can't find your route? No problem. Share your pickup location,
              destination and travel date with our team. We will help you
              with your cab enquiry.
            </p>

            <a
              href="https://wa.me/919244137353?text=Hello%20Aaruhi%20Travels%2C%20I%20want%20to%20enquire%20about%20a%20taxi%20booking."
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-8 inline-flex items-center gap-3 rounded-xl bg-gradient-to-r from-orange-500 to-amber-400 px-8 py-4 text-sm font-extrabold text-black shadow-[0_8px_30px_rgba(249,115,22,0.2)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(249,115,22,0.35)]"
            >
              Enquire on WhatsApp
              <ArrowRight
                size={18}
                className="transition-transform group-hover:translate-x-1"
              />
            </a>
          </div>
        </div>
      </section>

      <Footer />

      {/* Animations */}
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

        .route-card {
          animation: fadeUp 0.7s ease-out both;
        }

        @media (prefers-reduced-motion: reduce) {
          .animate-fade-up,
          .route-card {
            animation: none !important;
            transition: none !important;
          }
        }
      `}</style>
    </main>
  );
}