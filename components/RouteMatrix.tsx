"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import {
  ArrowUpRight,
  Clock3,
  MapPin,
  Navigation,
  Route as RouteIcon,
} from "lucide-react";

import { ROUTE_CITIES } from "@/lib/route-cities";
import type { RouteInfo } from "@/lib/route-data";

type Props = {
  routes: RouteInfo[];
  heading?: boolean;
};

const cardStyles = [
  {
    shell: "from-orange-500 to-rose-500",
    soft: "bg-orange-50",
    accent: "text-orange-700",
    dot: "bg-orange-500",
  },
  {
    shell: "from-sky-500 to-blue-600",
    soft: "bg-sky-50",
    accent: "text-sky-700",
    dot: "bg-sky-500",
  },
  {
    shell: "from-violet-500 to-purple-600",
    soft: "bg-violet-50",
    accent: "text-violet-700",
    dot: "bg-violet-500",
  },
  {
    shell: "from-emerald-500 to-teal-600",
    soft: "bg-emerald-50",
    accent: "text-emerald-700",
    dot: "bg-emerald-500",
  },
  {
    shell: "from-pink-500 to-fuchsia-600",
    soft: "bg-pink-50",
    accent: "text-pink-700",
    dot: "bg-pink-500",
  },
  {
    shell: "from-amber-500 to-orange-600",
    soft: "bg-amber-50",
    accent: "text-amber-700",
    dot: "bg-amber-500",
  },
  {
    shell: "from-cyan-500 to-blue-600",
    soft: "bg-cyan-50",
    accent: "text-cyan-700",
    dot: "bg-cyan-500",
  },
  {
    shell: "from-lime-500 to-green-600",
    soft: "bg-lime-50",
    accent: "text-green-700",
    dot: "bg-green-600",
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

    if (
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
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
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const routesByOrigin = useMemo(() => {
    const grouped = new Map<string, RouteInfo[]>();

    for (const city of ROUTE_CITIES) grouped.set(city.name, []);

    for (const route of routes) {
      grouped.get(route.from)?.push(route);
    }

    for (const list of grouped.values()) {
      list.sort((a, b) => a.to.localeCompare(b.to));
    }

    return grouped;
  }, [routes]);

  return (
    <section ref={sectionRef} className="w-full">
      {heading && (
        <div
          className={`mx-auto mb-8 max-w-3xl text-center transition-all duration-700 ${
            visible
              ? "translate-y-0 opacity-100"
              : "translate-y-8 opacity-0"
          }`}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-50 px-4 py-2 text-[10px] font-extrabold tracking-[0.16em] text-orange-800 sm:text-xs">
            <RouteIcon size={14} />
            AARUHI TRAVELS ROUTE NETWORK
          </span>

          <h2 className="mt-4 text-2xl font-black tracking-tight text-[#202024] sm:text-3xl lg:text-4xl">
            Explore Our One Way Taxi Routes
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-gray-600 sm:text-base">
            Choose your starting city and explore available one way taxi
            routes, with Google Maps road distance and estimated travel time.
          </p>
        </div>
      )}

      {routes.length === 0 ? (
        <div className="rounded-2xl border border-orange-100 bg-white p-8 text-center shadow-sm">
          <MapPin className="mx-auto text-orange-500" size={28} />
          <h3 className="mt-3 text-lg font-extrabold text-gray-900">
            Route information is temporarily unavailable
          </h3>
          <p className="mt-2 text-sm text-gray-500">
            Please try again shortly or contact Aaruhi Travels for route details.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {ROUTE_CITIES.map((city, index) => {
            const style = cardStyles[index];
            const cityRoutes = routesByOrigin.get(city.name) ?? [];

            return (
              <article
                key={city.name}
                style={{
                  transitionDelay: visible ? `${index * 110}ms` : "0ms",
                }}
                className={`route-city-card group relative isolate overflow-hidden rounded-[22px] border border-white bg-white shadow-[0_8px_30px_rgba(15,23,42,0.07)] transition-all duration-700 ease-out hover:-translate-y-2 hover:shadow-[0_18px_42px_rgba(15,23,42,0.14)] ${
                  visible
                    ? "translate-y-0 scale-100 opacity-100"
                    : "translate-y-12 scale-[0.97] opacity-0"
                }`}
              >
                <div className={`relative overflow-hidden bg-gradient-to-br ${style.shell} px-5 pb-5 pt-5 text-white`}>
                  <div className="pointer-events-none absolute -right-8 -top-10 h-36 w-36 rounded-full border-[22px] border-white/10" />
                  <div className="pointer-events-none absolute -bottom-12 right-16 h-28 w-28 rounded-full bg-white/10" />

                  <div className="relative flex items-start justify-between gap-3">
                    <div>
                      <span className="text-[9px] font-extrabold uppercase tracking-[0.18em] text-white/80">
                        Pickup city
                      </span>
                      <h3 className="mt-1 text-[26px] font-black leading-tight tracking-tight">
                        {city.name}
                      </h3>
                      <p className="mt-1 text-[10px] font-semibold text-white/80">
                        {city.state}
                      </p>
                    </div>

                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-white/25 bg-white/15 shadow-inner backdrop-blur-sm">
                      <MapPin size={21} />
                    </div>
                  </div>

                  <div className="relative mt-5 flex items-center justify-between">
                    <span className="rounded-full bg-white/20 px-3 py-1.5 text-[10px] font-bold text-white backdrop-blur-sm">
                      {cityRoutes.length} destinations
                    </span>
                    <span className="text-[10px] font-bold text-white/85">
                      One Way Taxi
                    </span>
                  </div>
                </div>

                <div className="p-4">
                  <div className="mb-3 flex items-center justify-between">
                    <p className="text-[10px] font-extrabold uppercase tracking-wider text-gray-500">
                      Popular destinations
                    </p>
                    <span className={`h-2 w-2 rounded-full ${style.dot}`} />
                  </div>

                  <div className="space-y-1.5">
                    {cityRoutes.map((route) => (
                      <Link
                        key={route.slug}
                        href={`/one-way-taxi/${route.slug}`}
                        title={`One way taxi from ${route.from} to ${route.to}`}
                        className={`group/route flex items-center justify-between gap-2 rounded-xl px-3 py-2.5 transition-colors ${style.soft} hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500`}
                      >
                        <span className="min-w-0">
                          <span className="block truncate text-[11px] font-extrabold text-gray-800">
                            {route.from}
                            <span className={`mx-1 ${style.accent}`}>→</span>
                            {route.to}
                          </span>
                          <span className="mt-1 flex items-center gap-2 text-[9px] font-medium text-gray-500">
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

                        <ArrowUpRight
                          size={15}
                          className={`shrink-0 ${style.accent} transition-transform group-hover/route:translate-x-0.5 group-hover/route:-translate-y-0.5`}
                        />
                      </Link>
                    ))}
                  </div>

                  {cityRoutes.length === 0 && (
                    <p className="rounded-xl bg-gray-50 px-3 py-4 text-center text-xs text-gray-500">
                      No directional routes available right now.
                    </p>
                  )}

                  <p className="mt-3 text-center text-[9px] leading-4 text-gray-400">
                    Distance and time are estimates; exact pickup and drop may vary.
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      )}

      <div
        className={`mt-7 text-center text-[10px] font-medium text-gray-500 transition-all duration-700 delay-700 ${
          visible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
        }`}
      >
        8 service cities · Up to 56 directional routes · Select a route for details
      </div>
    </section>
  );
}
