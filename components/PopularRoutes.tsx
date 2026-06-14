"use client";

import {
  ArrowRight,
  Clock3,
  MapPin,
} from "lucide-react";

const routes = [
  {
    from: "Raipur",
    to: "Bilaspur",
    fare: "₹4,250",
    time: "~2h 30m",
    distance: "125 km",
    badge: "Most Booked",
    color: "text-orange-500",
  },
  {
    from: "Raipur",
    to: "Jagdalpur",
    fare: "₹5,800",
    time: "~6h 10m",
    distance: "285 km",
    badge: "Popular",
    color: "text-green-600",
  },
  {
    from: "Raipur",
    to: "Raigarh",
    fare: "₹3,900",
    time: "~3h 20m",
    distance: "170 km",
    badge: "Popular",
    color: "text-green-600",
  },
  {
    from: "Bilaspur",
    to: "Ambikapur",
    fare: "₹4,950",
    time: "~4h 15m",
    distance: "210 km",
    badge: "Fast Booking",
    color: "text-blue-600",
  },
];

export default function PopularRoutes() {
  return (
    <section className="bg-slate-50 py-16">
      <div className="mx-auto max-w-7xl px-4">

        {/* Heading */}
        <div className="mb-10 flex items-center justify-between">
          <div>
            <span className="rounded-full bg-green-100 px-4 py-2 text-sm font-medium text-green-700">
              Trusted By Thousands
            </span>

            <h2 className="mt-4 text-3xl font-bold text-primary lg:text-4xl">
              Most Popular Routes
            </h2>

            <p className="mt-2 text-muted-foreground">
              Hassle-free one way cab service across
              Chhattisgarh.
            </p>
          </div>

          <button className="hidden md:flex items-center gap-2 font-semibold text-primary hover:text-secondary">
            View All Routes
            <ArrowRight size={18} />
          </button>
        </div>

        {/* Cards */}
        <div className="grid gap-6 lg:grid-cols-2">

          {routes.map((route, index) => (
            <div
              key={index}
              className="group rounded-3xl border bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >

              {/* Top */}
              <div className="flex items-center justify-between">

                <div>
                  <p
                    className={`text-sm font-semibold ${route.color}`}
                  >
                    {route.badge}
                  </p>

                  <h3 className="mt-2 text-2xl font-bold text-primary">
                    {route.from}
                    <ArrowRight className="mx-3 inline-block" />
                    {route.to}
                  </h3>
                </div>

                <div className="text-right">
                  <p className="text-sm text-muted-foreground">
                    Starting From
                  </p>

                  <h4 className="text-3xl font-bold text-secondary">
                    {route.fare}
                  </h4>
                </div>
              </div>

              {/* Route Details */}
              <div className="mt-6 flex flex-wrap gap-6">

                <div className="flex items-center gap-2 text-muted-foreground">
                  <Clock3 size={18} />
                  <span>{route.time}</span>
                </div>

                <div className="flex items-center gap-2 text-muted-foreground">
                  <MapPin size={18} />
                  <span>{route.distance}</span>
                </div>

              </div>

              {/* CTA */}
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">

                <button className="flex-1 rounded-xl bg-primary px-5 py-3 font-semibold text-white transition hover:opacity-90">
                  Get Fare
                </button>

                <button className="flex-1 rounded-xl border border-primary px-5 py-3 font-semibold text-primary transition hover:bg-primary hover:text-white">
                  Book on WhatsApp
                </button>

              </div>
            </div>
          ))}
        </div>

        {/* Mobile Button */}
        <div className="mt-8 md:hidden">
          <button className="w-full rounded-xl border border-primary py-3 font-semibold text-primary">
            View All Routes
          </button>
        </div>

      </div>
    </section>
  );
}