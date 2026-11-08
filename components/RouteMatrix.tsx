
"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import {
  ArrowUpRight,
  Clock3,
  MapPin,
  Navigation,
  Route as RouteIcon,
  Sparkles,
  MoveRight,
  MapPinned,
  CarFront,
  Compass,
} from "lucide-react";

import { ROUTE_CITIES } from "@/lib/route-cities";
import type { RouteInfo } from "@/lib/route-data";

type Props = {
  routes: RouteInfo[];
  heading?: boolean;
};

const cardStyles = [
  {
    shell: "from-orange-500 via-orange-600 to-rose-600",
    glow: "bg-orange-500",
    accent: "text-orange-300",
    soft: "bg-orange-500/10",
    border: "group-hover:border-orange-400/50",
    line: "from-orange-400 to-rose-500",
    number: "01",
  },
  {
    shell: "from-sky-500 via-blue-600 to-indigo-700",
    glow: "bg-blue-500",
    accent: "text-sky-300",
    soft: "bg-sky-500/10",
    border: "group-hover:border-sky-400/50",
    line: "from-sky-400 to-blue-500",
    number: "02",
  },
  {
    shell: "from-violet-500 via-purple-600 to-indigo-700",
    glow: "bg-purple-500",
    accent: "text-violet-300",
    soft: "bg-violet-500/10",
    border: "group-hover:border-violet-400/50",
    line: "from-violet-400 to-purple-500",
    number: "03",
  },
  {
    shell: "from-emerald-500 via-teal-600 to-cyan-700",
    glow: "bg-emerald-500",
    accent: "text-emerald-300",
    soft: "bg-emerald-500/10",
    border: "group-hover:border-emerald-400/50",
    line: "from-emerald-400 to-teal-500",
    number: "04",
  },
  {
    shell: "from-pink-500 via-rose-600 to-red-700",
    glow: "bg-pink-500",
    accent: "text-pink-300",
    soft: "bg-pink-500/10",
    border: "group-hover:border-pink-400/50",
    line: "from-pink-400 to-rose-500",
    number: "05",
  },
  {
    shell: "from-amber-500 via-orange-600 to-red-600",
    glow: "bg-amber-500",
    accent: "text-amber-300",
    soft: "bg-amber-500/10",
    border: "group-hover:border-amber-400/50",
    line: "from-amber-400 to-orange-500",
    number: "06",
  },
  {
    shell: "from-cyan-500 via-blue-600 to-sky-700",
    glow: "bg-cyan-500",
    accent: "text-cyan-300",
    soft: "bg-cyan-500/10",
    border: "group-hover:border-cyan-400/50",
    line: "from-cyan-400 to-blue-500",
    number: "07",
  },
  {
    shell: "from-lime-500 via-green-600 to-emerald-700",
    glow: "bg-lime-500",
    accent: "text-lime-300",
    soft: "bg-lime-500/10",
    border: "group-hover:border-lime-400/50",
    line: "from-lime-400 to-green-500",
    number: "08",
  },
];

export default function RouteMatrix({
  routes,
  heading = true,
}: Props) {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    );

    if (reduceMotion.matches) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.05,
        rootMargin: "0px 0px -30px 0px",
      }
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, []);

  const routesByOrigin = useMemo(() => {
    const grouped = new Map<string, RouteInfo[]>();

    for (const city of ROUTE_CITIES) {
      grouped.set(city.name, []);
    }

    for (const route of routes) {
      grouped.get(route.from)?.push(route);
    }

    for (const list of grouped.values()) {
      list.sort((a, b) => a.to.localeCompare(b.to));
    }

    return grouped;
  }, [routes]);

  const totalDestinations = routes.length;

  return (
    <section
      ref={sectionRef}
      id="route-network"
      aria-labelledby="route-network-heading"
      className="relative isolate w-full overflow-hidden bg-[#090d18] px-4 py-16 text-white sm:px-6 sm:py-20 lg:px-8 lg:py-24"
    >
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute -left-40 top-0 h-[420px] w-[420px] rounded-full bg-orange-500/10 blur-[130px]" />

      <div className="pointer-events-none absolute -right-40 top-1/4 h-[450px] w-[450px] rounded-full bg-blue-500/10 blur-[140px]" />

      <div className="pointer-events-none absolute bottom-0 left-1/3 h-80 w-80 rounded-full bg-amber-400/10 blur-[120px]" />

      {/* Subtle dot pattern */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.08)_0.7px,transparent_0.7px)] [background-size:24px_24px] opacity-20" />

      <div className="relative mx-auto max-w-[1400px]">

        {/* SECTION HEADER */}
        {heading && (
          <header
            className={`route-reveal mx-auto mb-10 max-w-3xl text-center transition-all duration-700 sm:mb-14 ${
              visible
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-amber-300/25 bg-amber-300/10 px-4 py-2 text-[10px] font-black uppercase tracking-[0.2em] text-amber-300 shadow-[0_0_25px_rgba(251,191,36,0.10)] sm:text-xs">
              <Sparkles size={14} />
              Aaruhi Travels · Route Network
            </span>

            <h2
              id="route-network-heading"
              className="mt-5 text-3xl font-black leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl"
            >
              Explore Our{" "}
              <span className="bg-gradient-to-r from-amber-200 via-yellow-400 to-orange-400 bg-clip-text text-transparent">
                One Way Taxi Routes
              </span>
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base sm:leading-8">
              Your next destination is just a ride away. Select your
              pickup city, explore available destinations and book
              your one-way journey with Aaruhi Travels.
            </p>

            {/* Route statistics */}
            <div className="mx-auto mt-8 grid max-w-[540px] grid-cols-3 gap-2 sm:gap-4">

              <div className="rounded-2xl border border-white/10 bg-white/[0.045] px-2 py-4 backdrop-blur-sm sm:px-4">
                <MapPinned
                  size={19}
                  className="mx-auto text-amber-300"
                />
                <p className="mt-2 text-2xl font-black text-white sm:text-3xl">
                  {ROUTE_CITIES.length}
                </p>
                <p className="mt-1 text-[9px] font-bold uppercase tracking-wide text-slate-400 sm:text-[10px]">
                  Pickup Cities
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.045] px-2 py-4 backdrop-blur-sm sm:px-4">
                <RouteIcon
                  size={19}
                  className="mx-auto text-emerald-300"
                />
                <p className="mt-2 text-2xl font-black text-white sm:text-3xl">
                  {totalDestinations}
                </p>
                <p className="mt-1 text-[9px] font-bold uppercase tracking-wide text-slate-400 sm:text-[10px]">
                  Routes
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.045] px-2 py-4 backdrop-blur-sm sm:px-4">
                <CarFront
                  size={19}
                  className="mx-auto text-sky-300"
                />
                <p className="mt-2 text-2xl font-black text-white sm:text-3xl">
                  24×7
                </p>
                <p className="mt-1 text-[9px] font-bold uppercase tracking-wide text-slate-400 sm:text-[10px]">
                  Enquiry Support
                </p>
              </div>

            </div>
          </header>
        )}

        {/* EMPTY STATE */}
        {routes.length === 0 ? (
          <div className="rounded-[24px] border border-white/10 bg-[#111827] p-8 text-center shadow-xl sm:p-12">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-orange-300/20 bg-orange-300/10 text-orange-300">
              <MapPin size={30} />
            </div>

            <h3 className="mt-5 text-xl font-black text-white">
              Route information is temporarily unavailable
            </h3>

            <p className="mx-auto mt-3 max-w-lg text-sm leading-7 text-slate-400">
              Please try again shortly or contact Aaruhi Travels
              for route information and booking assistance.
            </p>

            <a
              href="https://wa.me/919244137353?text=Hello%20Aaruhi%20Travels%2C%20please%20share%20your%20available%20taxi%20routes."
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex min-h-11 items-center gap-2 rounded-xl bg-gradient-to-r from-amber-300 to-orange-400 px-5 py-3 text-xs font-black text-[#211500] transition hover:-translate-y-1 hover:shadow-lg"
            >
              Ask About Routes
              <ArrowUpRight size={16} />
            </a>
          </div>
        ) : (
          <>
            {/* CITY CARDS */}
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-5 xl:grid-cols-4 xl:gap-6">

              {ROUTE_CITIES.map((city, index) => {
                const style = cardStyles[index % cardStyles.length];
                const cityRoutes =
                  routesByOrigin.get(city.name) ?? [];

                return (
                  <article
                    key={city.name}
                    style={{
                      transitionDelay: visible
                        ? `${index * 100}ms`
                        : "0ms",
                    }}
                    className={`route-city-card group relative isolate flex min-w-0 flex-col overflow-hidden rounded-[25px] border border-white/10 bg-[#111827] shadow-[0_14px_40px_rgba(0,0,0,0.25)] transition-all duration-700 ease-out hover:-translate-y-2 hover:shadow-[0_24px_55px_rgba(0,0,0,0.38)] ${
                      style.border
                    } ${
                      visible
                        ? "translate-y-0 scale-100 opacity-100"
                        : "translate-y-12 scale-[0.97] opacity-0"
                    }`}
                  >

                    {/* Card header */}
                    <div
                      className={`relative overflow-hidden bg-gradient-to-br ${style.shell} px-5 pb-5 pt-5 text-white`}
                    >

                      {/* Decorative circles */}
                      <div className="pointer-events-none absolute -right-9 -top-12 h-40 w-40 rounded-full border-[24px] border-white/10 transition-transform duration-700 group-hover:scale-110" />

                      <div className="pointer-events-none absolute -bottom-14 right-16 h-32 w-32 rounded-full bg-white/10 blur-sm" />

                      <div className="relative flex items-start justify-between gap-3">

                        <div className="min-w-0">
                          <span className="text-[9px] font-extrabold uppercase tracking-[0.2em] text-white/75">
                            Pickup City
                          </span>

                          <h3 className="mt-1 break-words text-[25px] font-black leading-tight tracking-tight sm:text-[27px]">
                            {city.name}
                          </h3>

                          <p className="mt-1 text-[11px] font-semibold text-white/75">
                            {city.state}
                          </p>
                        </div>

                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-white/25 bg-white/15 shadow-inner backdrop-blur-md transition-all duration-500 group-hover:rotate-6 group-hover:scale-110">
                          <MapPin size={23} />
                        </div>

                      </div>

                      {/* Card statistics */}
                      <div className="relative mt-5 flex items-center justify-between gap-2">

                        <span className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/15 px-3 py-1.5 text-[10px] font-bold backdrop-blur-sm">
                          <Navigation size={11} />
                          {cityRoutes.length} Destinations
                        </span>

                        <span className="text-[10px] font-extrabold uppercase tracking-wide text-white/85">
                          {style.number} / 08
                        </span>

                      </div>

                    </div>

                    {/* Routes list */}
                    <div className="flex flex-1 flex-col p-4 sm:p-4">

                      <div className="mb-3 flex items-center justify-between gap-2">
                        <p className="text-[10px] font-black uppercase tracking-[0.15em] text-slate-300">
                          Explore Destinations
                        </p>

                        <span
                          className={`h-2 w-2 rounded-full ${style.glow} shadow-[0_0_10px_currentColor]`}
                        />
                      </div>

                      <div className="space-y-2">

                        {cityRoutes.map((route, routeIndex) => (
                          <Link
                            key={route.slug}
                            href={`/one-way-taxi/${route.slug}`}
                            title={`One way taxi from ${route.from} to ${route.to}`}
                            className={`group/route relative flex min-w-0 items-center justify-between gap-2 overflow-hidden rounded-xl border border-white/[0.055] ${style.soft} px-3 py-3 transition-all duration-300 hover:border-white/15 hover:bg-white/[0.09] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300`}
                          >

                            {/* Left route details */}
                            <span className="flex min-w-0 items-center gap-2.5">

                              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-black/20 text-[10px] font-black text-white/70 transition-colors group-hover/route:text-white">
                                {String(routeIndex + 1).padStart(2, "0")}
                              </span>

                              <span className="min-w-0">

                                <span className="flex min-w-0 items-center gap-1 text-[11px] font-extrabold text-white sm:text-xs">
                                  <span className="truncate">
                                    {route.to}
                                  </span>

                                  <MoveRight
                                    size={12}
                                    className={`shrink-0 ${style.accent} transition-transform duration-300 group-hover/route:translate-x-1`}
                                  />
                                </span>

                                <span className="mt-1.5 flex flex-wrap items-center gap-x-3 gap-y-1 text-[9px] font-semibold text-slate-400">

                                  <span className="inline-flex items-center gap-1">
                                    <Navigation size={10} />
                                    {route.distanceKm} km
                                  </span>

                                  <span className="inline-flex items-center gap-1">
                                    <Clock3 size={10} />
                                    {route.durationText}
                                  </span>

                                </span>

                              </span>

                            </span>

                            {/* Route arrow */}
                            <span
                              className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/10 bg-black/20 ${style.accent} transition-all duration-300 group-hover/route:translate-x-0.5 group-hover/route:border-white/20 group-hover/route:bg-white/10`}
                            >
                              <ArrowUpRight size={15} />
                            </span>

                          </Link>
                        ))}

                      </div>

                      {cityRoutes.length === 0 && (
                        <div className="rounded-xl border border-white/10 bg-white/[0.04] px-3 py-6 text-center">
                          <MapPin
                            size={21}
                            className="mx-auto text-slate-500"
                          />

                          <p className="mt-2 text-xs font-semibold text-slate-400">
                            No directional routes available right now.
                          </p>
                        </div>
                      )}

                      {/* Card footer */}
                      <div className="mt-auto border-t border-white/10 pt-3">
                        <p className="flex items-start gap-1.5 text-[9px] leading-5 text-slate-500">
                          <Compass
                            size={12}
                            className="mt-0.5 shrink-0"
                          />
                          Google Maps road distance and travel time are estimates.
                        </p>
                      </div>

                    </div>

                  </article>
                );
              })}

            </div>

            {/* Bottom call to action */}
            <div
              className={`mt-10 flex flex-col items-center justify-between gap-5 rounded-[24px] border border-amber-300/15 bg-gradient-to-br from-[#172033] to-[#0d1321] p-6 text-center shadow-[0_15px_45px_rgba(0,0,0,0.25)] transition-all duration-700 sm:mt-14 sm:flex-row sm:p-8 sm:text-left ${
                visible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}
            >

              <div className="flex flex-col items-center gap-4 sm:flex-row sm:items-center">

                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-amber-300/20 bg-amber-300/10 text-amber-300">
                  <RouteIcon size={27} />
                </div>

                <div>
                  <h3 className="text-lg font-black text-white sm:text-xl">
                    Your Destination. Our Ride.
                  </h3>

                  <p className="mt-1 text-xs leading-6 text-slate-400 sm:text-sm">
                    Can&apos;t find your route? Contact our team for
                    booking assistance and route availability.
                  </p>
                </div>

              </div>

              <a
                href="https://wa.me/919244137353?text=Hello%20Aaruhi%20Travels%2C%20I%20want%20to%20check%20taxi%20availability%20for%20my%20route."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 shrink-0 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-amber-300 via-yellow-400 to-orange-400 px-6 py-3 text-xs font-black text-[#211500] shadow-[0_7px_24px_rgba(251,191,36,0.20)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(251,191,36,0.35)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300"
              >
                Find My Route
                <ArrowUpRight size={16} />
              </a>

            </div>
          </>
        )}

      </div>

      {/* Entrance animation */}
      <style>{`
        @keyframes routeReveal {
          from {
            opacity: 0;
            transform: translateY(22px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .route-reveal {
          animation: routeReveal 700ms cubic-bezier(0.2, 0.7, 0.2, 1) both;
        }

        @media (prefers-reduced-motion: reduce) {
          .route-reveal,
          .route-city-card {
            animation: none !important;
            transition: none !important;
            transform: none !important;
          }
        }
      `}</style>

    </section>
  );
}
