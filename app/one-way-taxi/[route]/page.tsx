
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  MapPin,
  Navigation,
  Clock3,
  ShieldCheck,
  ArrowRight,
  Phone,
} from "lucide-react";

import Navbar from "@/components/navbar";
import BookingForm from "@/components/BookingForm";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import { getOneWayRoute } from "@/lib/route-data";

type PageProps = {
  params: Promise<{
    route: string;
  }>;
};

export const revalidate = 86400;

async function loadRoute(slug: string) {
  try {
    return await getOneWayRoute(slug);
  } catch (error) {
    console.error("One-way route page error:", error);
    return null;
  }
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { route: slug } = await params;
  const route = await loadRoute(slug);

  if (!route) {
    return {
      title: "One Way Taxi Service | Aaruhi Travels",
    };
  }

  const title =
    `One Way Taxi from ${route.from} to ${route.to} | Aaruhi Travels`;

  const description =
    `Book a one way taxi from ${route.from} to ${route.to} with Aaruhi Travels. ` +
    `Approx. ${route.distanceKm} km driving distance and ${route.durationText} estimated travel time.`;

  return {
    title,
    description,
    alternates: {
      canonical: `/one-way-taxi/${route.slug}`,
    },
    openGraph: {
      title,
      description,
      type: "website",
    },
  };
}

export default async function OneWayTaxiPage({ params }: PageProps) {
  const { route: slug } = await params;
  const route = await loadRoute(slug);

  if (!route) notFound();

  const pageTitle = `One Way Taxi from ${route.from} to ${route.to}`;

  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: pageTitle,
    serviceType: "One Way Taxi Service",
    provider: {
      "@type": "Organization",
      name: "Aaruhi Travels",
      telephone: "+919244137353",
    },
    areaServed: [
      { "@type": "City", name: route.from },
      { "@type": "City", name: route.to },
    ],
    description:
      `One way taxi service from ${route.from} to ${route.to} with Aaruhi Travels.`,
  };

  return (
    <>
      <Navbar />

      <main className="min-h-screen overflow-hidden bg-[#fffaf5]">

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema),
          }}
        />

        {/* HERO ANIMATION STYLES */}
        <style>{`
          @keyframes heroFadeUp {
            from {
              opacity: 0;
              transform: translate3d(0, 32px, 0);
            }
            to {
              opacity: 1;
              transform: translate3d(0, 0, 0);
            }
          }

          @keyframes heroFadeRight {
            from {
              opacity: 0;
              transform: translate3d(-35px, 0, 0);
            }
            to {
              opacity: 1;
              transform: translate3d(0, 0, 0);
            }
          }

          @keyframes heroFadeLeft {
            from {
              opacity: 0;
              transform: translate3d(35px, 0, 0);
            }
            to {
              opacity: 1;
              transform: translate3d(0, 0, 0);
            }
          }

          @keyframes heroGlow {
            0%, 100% {
              opacity: .45;
              transform: scale(1);
            }
            50% {
              opacity: .85;
              transform: scale(1.12);
            }
          }

          .hero-up {
            opacity: 0;
            animation: heroFadeUp .8s cubic-bezier(.22,1,.36,1) forwards;
          }

          .hero-right {
            opacity: 0;
            animation: heroFadeRight .85s cubic-bezier(.22,1,.36,1) forwards;
          }

          .hero-left {
            opacity: 0;
            animation: heroFadeLeft .85s cubic-bezier(.22,1,.36,1) forwards;
          }

          .hero-glow {
            animation: heroGlow 7s ease-in-out infinite;
          }

          .hero-card {
            transition:
              transform .35s ease,
              border-color .35s ease,
              box-shadow .35s ease;
          }

          .hero-card:hover {
            transform: translateY(-5px);
            border-color: rgba(255,166,55,.55);
            box-shadow: 0 18px 45px rgba(0,0,0,.22);
          }

          @media (prefers-reduced-motion: reduce) {
            .hero-up,
            .hero-right,
            .hero-left,
            .hero-glow {
              opacity: 1;
              animation: none !important;
              transform: none !important;
            }

            .hero-card {
              transition: none !important;
            }
          }
        `}</style>

        {/* DARK ROUTE HERO */}
        <section className="relative isolate overflow-hidden bg-gradient-to-br from-[#090b10] via-[#15171d] to-[#301707]">

          {/* Animated background glows */}
          <div className="hero-glow pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-orange-500/20 blur-[100px]" />

          <div className="hero-glow pointer-events-none absolute -bottom-32 -left-20 h-80 w-80 rounded-full bg-amber-600/20 blur-[110px]" />

          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,153,51,0.08),transparent_50%)]" />

          <div className="relative mx-auto max-w-[1400px] px-4 pb-10 pt-8 sm:px-6 sm:pb-14 sm:pt-12 lg:px-8 lg:pb-20 lg:pt-16">

            <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(420px,0.88fr)] lg:gap-12 xl:gap-16">

              {/* ROUTE DETAILS */}
              <div className="order-2 flex min-w-0 flex-col justify-center lg:order-1 lg:pt-8">

                {/* Brand Badge */}
                <span
                  className="hero-right inline-flex w-fit items-center gap-2 rounded-full border border-orange-400/30 bg-white/[0.07] px-3 py-2 text-[10px] font-extrabold uppercase tracking-[0.16em] text-orange-300 shadow-lg backdrop-blur-md sm:text-xs"
                  style={{ animationDelay: "100ms" }}
                >
                  <span className="h-2 w-2 animate-pulse rounded-full bg-green-400" />
                  Aaruhi Travels · One Way Taxi
                </span>

                {/* Main Heading */}
                <h1
                  className="hero-up mt-5 max-w-3xl text-[clamp(2rem,7vw,3.75rem)] font-black leading-[1.08] tracking-tight text-white"
                  style={{ animationDelay: "220ms" }}
                >
                  One Way Taxi from{" "}
                  <span className="bg-gradient-to-r from-[#ffb347] to-[#ffdc85] bg-clip-text text-transparent">
                    {route.from}
                  </span>

                  <span className="block py-1 text-slate-400 sm:inline">
                    {" "}to{" "}
                  </span>

                  <span className="bg-gradient-to-r from-[#ffb347] to-[#ffdc85] bg-clip-text text-transparent">
                    {route.to}
                  </span>
                </h1>

                {/* Description */}
                <p
                  className="hero-up mt-4 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base sm:leading-8"
                  style={{ animationDelay: "350ms" }}
                >
                  Planning a one-way journey from {route.from} to {route.to}?
                  Enquire with Aaruhi Travels for your preferred cab and travel
                  date. Share your trip details through the booking form.
                </p>

                {/* Distance & Time Cards */}
                <div className="mt-6 grid grid-cols-2 gap-3 sm:mt-8 sm:max-w-xl sm:gap-4">

                  {/* Distance */}
                  <div
                    className="hero-up hero-card rounded-2xl border border-white/10 bg-white/[0.07] p-3 shadow-lg backdrop-blur-md sm:p-4"
                    style={{ animationDelay: "480ms" }}
                  >
                    <div className="flex items-center gap-2 text-orange-400">
                      <Navigation size={18} />

                      <span className="text-[10px] font-bold uppercase tracking-wide text-slate-300 sm:text-xs">
                        Driving Distance
                      </span>
                    </div>

                    <p className="mt-2 text-lg font-black text-white sm:text-2xl">
                      {route.distanceKm} KM
                    </p>

                    <p className="mt-1 text-[10px] text-slate-400 sm:text-xs">
                      Approximate road distance
                    </p>
                  </div>

                  {/* Travel Time */}
                  <div
                    className="hero-up hero-card rounded-2xl border border-white/10 bg-white/[0.07] p-3 shadow-lg backdrop-blur-md sm:p-4"
                    style={{ animationDelay: "600ms" }}
                  >
                    <div className="flex items-center gap-2 text-orange-400">
                      <Clock3 size={18} />

                      <span className="text-[10px] font-bold uppercase tracking-wide text-slate-300 sm:text-xs">
                        Travel Time
                      </span>
                    </div>

                    <p className="mt-2 text-lg font-black text-white sm:text-2xl">
                      {route.durationText}
                    </p>

                    <p className="mt-1 text-[10px] text-slate-400 sm:text-xs">
                      Estimated driving time
                    </p>
                  </div>

                </div>

                {/* Trust Message */}
                <div
                  className="hero-up mt-5 flex items-start gap-2 text-xs leading-5 text-slate-300 sm:mt-6 sm:text-sm"
                  style={{ animationDelay: "720ms" }}
                >
                  <ShieldCheck
                    className="mt-0.5 shrink-0 text-green-400"
                    size={18}
                  />

                  <span>
                    Submit an enquiry to confirm vehicle availability and
                    journey details. Distance and travel time are estimates.
                  </span>
                </div>

                {/* Call Button */}
                <a
                  href="tel:+919244137353"
                  className="hero-up mt-6 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl border border-orange-400/40 bg-orange-500/10 px-5 py-3 text-sm font-extrabold text-orange-300 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-orange-400 hover:bg-orange-500 hover:text-white sm:w-fit"
                  style={{ animationDelay: "850ms" }}
                >
                  <Phone size={17} />
                  Call Aaruhi Travels
                </a>

              </div>

              {/* BOOKING FORM */}
              <div
                id="booking-form"
                className="hero-left order-1 mx-auto w-full min-w-0 max-w-[600px] scroll-mt-24 overflow-hidden rounded-2xl border border-orange-300/30 bg-white shadow-[0_20px_80px_-20px_rgba(255,126,30,0.25)] sm:rounded-3xl lg:order-2"
                style={{ animationDelay: "250ms" }}
              >

                {/* Form Header */}
                <div className="bg-gradient-to-r from-[#ffad25] via-[#ffc044] to-[#ffda76] px-4 py-5 text-center sm:px-6 sm:py-6">

                  <p className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-orange-950/70 sm:text-xs">
                    Aaruhi Travels
                  </p>

                  <h2 className="mt-1 text-xl font-black text-slate-950 sm:text-2xl">
                    Book Your One Way Taxi
                  </h2>

                  <p className="mt-1 text-xs text-slate-800 sm:text-sm">
                    Enter your trip details to send an enquiry.
                  </p>

                </div>

                {/* Original Booking Form - Preserved */}
                <div className="p-3 sm:p-5 md:p-6">
                  <BookingForm
                    key={route.slug}
                    initialPickup={`${route.from}, ${route.fromState}, India`}
                    initialDrop={`${route.to}, ${route.toState}, India`}
                    initialTripType="One Way"
                  />
                </div>

              </div>

            </div>
          </div>
        </section>

        {/* ROUTE INFORMATION */}
        <section className="mx-auto max-w-[1200px] px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-16">

          <div className="grid gap-5 md:grid-cols-[1.15fr_0.85fr] md:gap-8">

            {/* Route Description */}
            <div className="rounded-2xl border border-orange-100 bg-white p-5 shadow-sm sm:p-7">

              <span className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-orange-600 sm:text-xs">
                Aaruhi Travels
              </span>

              <h2 className="mt-3 text-xl font-black leading-tight text-slate-900 sm:text-2xl">
                One Way Cab Service: {route.from} to {route.to}
              </h2>

              <p className="mt-4 text-sm leading-7 text-slate-600">
                Aaruhi Travels provides one way taxi enquiry services for
                passengers travelling from {route.from} to {route.to}. Whether
                you are planning a personal trip, business journey or family
                travel, submit your pickup, destination, travel date and
                preferred vehicle through the online enquiry form.
              </p>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                The estimated road distance for this route is approximately{" "}
                {route.distanceKm} km, with an estimated driving time of{" "}
                {route.durationText}. Actual journey time may vary with traffic,
                weather and road conditions.
              </p>

              <a
                href="#booking-form"
                className="mt-5 inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-orange-600 px-5 py-3 text-sm font-bold text-white transition hover:bg-orange-700"
              >
                Enquire for this route
                <ArrowRight size={16} />
              </a>

            </div>

            {/* Route Summary */}
            <div className="rounded-2xl border border-orange-100 bg-white p-5 shadow-sm sm:p-7">

              <h3 className="text-lg font-extrabold text-slate-900 sm:text-xl">
                Route Summary
              </h3>

              <div className="mt-5 space-y-5">

                {/* Pickup */}
                <div className="flex items-center gap-3">

                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-orange-50 text-orange-600">
                    <MapPin size={20} />
                  </span>

                  <div className="min-w-0">
                    <p className="text-[10px] font-semibold uppercase tracking-wide text-slate-500">
                      Pickup City
                    </p>

                    <p className="break-words font-bold text-slate-900">
                      {route.from}
                    </p>
                  </div>

                </div>

                {/* Destination */}
                <div className="flex items-center gap-3">

                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-green-50 text-green-600">
                    <MapPin size={20} />
                  </span>

                  <div className="min-w-0">
                    <p className="text-[10px] font-semibold uppercase tracking-wide text-slate-500">
                      Destination
                    </p>

                    <p className="break-words font-bold text-slate-900">
                      {route.to}
                    </p>
                  </div>

                </div>

                {/* Distance & Time */}
                <div className="grid grid-cols-2 gap-3 border-t border-slate-100 pt-4">

                  <div>
                    <p className="text-[10px] text-slate-500 sm:text-xs">
                      Approx. Distance
                    </p>

                    <p className="mt-1 text-xl font-black text-orange-600 sm:text-2xl">
                      {route.distanceKm} KM
                    </p>
                  </div>

                  <div>
                    <p className="text-[10px] text-slate-500 sm:text-xs">
                      Estimated Time
                    </p>

                    <p className="mt-1 text-lg font-black text-slate-900 sm:text-xl">
                      {route.durationText}
                    </p>
                  </div>

                </div>

              </div>
            </div>

          </div>
        </section>

      </main>

      <Footer />
      {/* <FloatingButtons /> */}
    </>
  );
}
