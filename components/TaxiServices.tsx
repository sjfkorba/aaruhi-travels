
import Link from "next/link";
import {
  Route,
  Car,
  MapPin,
  Compass,
  Plane,
  TrainFront,
  Users,
  CalendarDays,
  ArrowUpRight,
  Sparkles,
  ShieldCheck,
  Clock3,
} from "lucide-react";

const taxiServices = [
  {
    title: "One Way Taxi",
    description:
      "Book a one-way cab for intercity travel with a convenient pickup and drop. Ideal when you do not need a return journey.",
    icon: Route,
    href: "/services/one-way-taxi",
    accent: "from-amber-300 to-orange-500",
    glow: "group-hover:shadow-orange-500/20",
  },
  {
    title: "Round Trip Booking",
    description:
      "Plan a return journey with a cab for your complete trip, flexible stops and a comfortable ride back.",
    icon: Car,
    href: "/services/round-trip-taxi",
    accent: "from-sky-300 to-blue-500",
    glow: "group-hover:shadow-blue-500/20",
  },
  {
    title: "Local Taxi Services",
    description:
      "Hire a cab for local travel, meetings, shopping, family visits and city transfers in our service areas.",
    icon: MapPin,
    href: "/services/local-taxi",
    accent: "from-emerald-300 to-teal-500",
    glow: "group-hover:shadow-emerald-500/20",
  },
  {
    title: "Outstation Booking",
    description:
      "Travel between cities across Chhattisgarh and nearby states with a cab suited to your journey.",
    icon: Compass,
    href: "/services/outstation-taxi",
    accent: "from-violet-300 to-purple-500",
    glow: "group-hover:shadow-purple-500/20",
  },
  {
    title: "Airport Pickup & Drop",
    description:
      "Arrange airport transfers with a pre-booked cab for timely pickups and convenient drop-offs.",
    icon: Plane,
    href: "/services/airport-transfer",
    accent: "from-cyan-300 to-sky-500",
    glow: "group-hover:shadow-cyan-500/20",
  },
  {
    title: "Railway Station Transfer",
    description:
      "Book a pickup or drop to railway stations for an easy connection between your train and destination.",
    icon: TrainFront,
    href: "/services/railway-station-transfer",
    accent: "from-rose-300 to-pink-500",
    glow: "group-hover:shadow-pink-500/20",
  },
  {
    title: "Corporate Taxi Service",
    description:
      "Arrange business travel and employee transportation with sedan and SUV cab options.",
    icon: Users,
    href: "/services/corporate-taxi",
    accent: "from-yellow-300 to-amber-500",
    glow: "group-hover:shadow-amber-500/20",
  },
  {
    title: "Event Taxi Booking",
    description:
      "Coordinate cab requirements for weddings, family functions, conferences and group events.",
    icon: CalendarDays,
    href: "/services/event-taxi",
    accent: "from-fuchsia-300 to-pink-500",
    glow: "group-hover:shadow-fuchsia-500/20",
  },
];

const serviceAreas = [
  "Raipur",
  "Naya Raipur",
  "Durg-Bhilai",
  "Bilaspur",
  "Korba",
  "Raigarh",
  "Ambikapur",
  "Jagdalpur",
  "Jharsuguda",
  "Sambalpur",
  "Nagpur",
  "Balangir",
];

export default function TaxiServices() {
  return (
    <section
      id="taxi-services"
      aria-labelledby="taxi-services-heading"
      className="relative isolate overflow-hidden bg-[#090d18] px-4 py-14 text-white sm:px-6 sm:py-16 lg:px-8 lg:py-24"
    >
      {/* Background glow effects */}
      <div className="pointer-events-none absolute -left-40 top-0 h-96 w-96 rounded-full bg-orange-500/15 blur-[120px]" />

      <div className="pointer-events-none absolute -right-40 top-1/3 h-[420px] w-[420px] rounded-full bg-amber-400/10 blur-[130px]" />

      <div className="pointer-events-none absolute bottom-0 left-1/3 h-80 w-80 rounded-full bg-blue-500/10 blur-[120px]" />

      {/* Subtle background texture */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.09)_0.7px,transparent_0.7px)] [background-size:24px_24px] opacity-20" />

      <div className="relative mx-auto max-w-[1320px]">

        {/* Section Header */}
        <header className="service-reveal mx-auto mb-10 max-w-3xl text-center sm:mb-14">

          <span className="inline-flex items-center gap-2 rounded-full border border-amber-300/25 bg-amber-300/10 px-4 py-2 text-[10px] font-black uppercase tracking-[0.2em] text-amber-300 shadow-[0_0_25px_rgba(251,191,36,0.10)] sm:text-xs">
            <Sparkles size={14} />
            Aaruhi Travels · Premium Mobility
          </span>

          <h2
            id="taxi-services-heading"
            className="mt-5 text-3xl font-black tracking-tight text-white sm:text-4xl lg:text-5xl"
          >
            Our{" "}
            <span className="bg-gradient-to-r from-amber-200 via-yellow-400 to-orange-400 bg-clip-text text-transparent">
              Taxi Services
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base sm:leading-8">
            Every journey deserves the right ride. Explore our one-way,
            round-trip, local, airport and outstation taxi services
            with Aaruhi Travels.
          </p>

          {/* Trust highlights */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-5 gap-y-3">

            <span className="inline-flex items-center gap-2 text-[11px] font-semibold text-slate-300 sm:text-xs">
              <ShieldCheck size={15} className="text-emerald-400" />
              Reliable Travel Assistance
            </span>

            <span className="inline-flex items-center gap-2 text-[11px] font-semibold text-slate-300 sm:text-xs">
              <Clock3 size={15} className="text-amber-300" />
              Flexible Booking Options
            </span>

            <span className="inline-flex items-center gap-2 text-[11px] font-semibold text-slate-300 sm:text-xs">
              <Car size={15} className="text-sky-300" />
              Multiple Vehicle Choices
            </span>

          </div>
        </header>

        {/* Service Cards */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4">

          {taxiServices.map((service, index) => {
            const Icon = service.icon;

            return (
              <article
                key={service.title}
                style={{ animationDelay: `${index * 90}ms` }}
                className={`service-reveal group relative flex min-h-[230px] min-w-0 flex-col overflow-hidden rounded-[22px] border border-white/10 bg-gradient-to-br from-[#172033] via-[#111827] to-[#0d1321] p-5 shadow-[0_12px_35px_rgba(0,0,0,0.22)] transition-all duration-500 hover:-translate-y-2 hover:border-amber-300/35 hover:shadow-[0_20px_45px_rgba(245,158,11,0.10)] ${service.glow} sm:min-h-[245px] sm:p-6`}
              >

                {/* Card top accent */}
                <div
                  className={`absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r ${service.accent} opacity-70 transition-all duration-500 group-hover:h-[4px] group-hover:opacity-100`}
                />

                {/* Ambient card glow */}
                <div
                  className={`pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-gradient-to-br ${service.accent} opacity-[0.04] blur-3xl transition-all duration-500 group-hover:opacity-20`}
                />

                {/* Icon */}
                <div
                  className={`relative flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-gradient-to-br ${service.accent} text-slate-950 shadow-[0_5px_20px_rgba(0,0,0,0.18)] transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 group-hover:shadow-lg`}
                >
                  <Icon
                    size={23}
                    strokeWidth={2}
                    aria-hidden="true"
                  />
                </div>

                {/* Service content */}
                <h3 className="relative mt-5 text-base font-black leading-snug text-white transition-colors duration-300 group-hover:text-amber-200 sm:text-[17px]">
                  {service.title}
                </h3>

                <p className="relative mt-2 flex-1 text-xs leading-[1.8] text-slate-400 transition-colors duration-300 group-hover:text-slate-300 sm:text-[13px]">
                  {service.description}
                </p>

                {/* Explore link */}
                <Link
                  href={service.href}
                  aria-label={`${service.title} - enquire with Aaruhi Travels`}
                  className="relative mt-5 inline-flex min-h-9 w-fit items-center gap-2 rounded-lg border border-amber-300/20 bg-amber-300/[0.07] px-3 py-2 text-[11px] font-extrabold text-amber-300 transition-all duration-300 hover:border-amber-300/50 hover:bg-amber-300/15 hover:text-amber-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300 sm:text-xs"
                >
                  Explore Service

                  <ArrowUpRight
                    size={15}
                    className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                    aria-hidden="true"
                  />
                </Link>

                {/* Bottom decorative glow */}
                <div className="pointer-events-none absolute bottom-0 left-5 right-5 h-px bg-gradient-to-r from-transparent via-amber-300/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              </article>
            );
          })}

        </div>

        {/* Service Area Panel */}
        <div className="service-reveal relative mt-12 overflow-hidden rounded-[24px] border border-white/10 bg-gradient-to-br from-[#151e30] to-[#0e1523] p-5 shadow-[0_15px_45px_rgba(0,0,0,0.22)] sm:mt-14 sm:p-8">

          {/* Panel background glow */}
          <div className="pointer-events-none absolute -right-20 -top-24 h-64 w-64 rounded-full bg-amber-400/10 blur-[90px]" />

          <div className="relative flex flex-col items-center gap-5 text-center lg:flex-row lg:items-start lg:text-left">

            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-amber-300/20 bg-amber-300/10 text-amber-300 shadow-[0_0_25px_rgba(251,191,36,0.10)]">
              <MapPin size={27} />
            </div>

            <div className="min-w-0 flex-1">

              <h3 className="text-lg font-black text-white sm:text-xl">
                Taxi Services Across Our{" "}
                <span className="text-amber-300">Key Cities</span>
              </h3>

              <p className="mt-2 text-xs leading-6 text-slate-400 sm:text-sm">
                Aaruhi Travels serves journeys across major cities in
                Chhattisgarh and neighbouring regions. Contact our team
                to check cab availability for your route.
              </p>

              {/* City chips */}
              <div className="mt-5 flex flex-wrap justify-center gap-2 lg:justify-start">

                {serviceAreas.map((city) => (
                  <span
                    key={city}
                    className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-2 text-[10px] font-bold text-slate-300 transition-all duration-300 hover:border-amber-300/40 hover:bg-amber-300/10 hover:text-amber-200 sm:text-xs"
                  >
                    {city}
                  </span>
                ))}

              </div>

            </div>

          </div>
        </div>

        {/* Bottom CTA */}
        <div className="service-reveal mt-9 flex flex-col items-center justify-between gap-4 rounded-2xl border border-amber-300/15 bg-amber-300/[0.04] px-5 py-5 text-center sm:flex-row sm:text-left">

          <div>
            <h3 className="text-base font-black text-white sm:text-lg">
              Ready to plan your next journey?
            </h3>

            <p className="mt-1 text-xs leading-6 text-slate-400 sm:text-sm">
              Talk to our team and find the right cab for your trip.
            </p>
          </div>

          <a
            href="https://wa.me/919244137353?text=Hello%20Aaruhi%20Travels%2C%20I%20want%20to%20enquire%20about%20your%20taxi%20services."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 shrink-0 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-amber-300 via-yellow-400 to-orange-400 px-5 py-3 text-xs font-black text-[#211500] shadow-[0_7px_24px_rgba(251,191,36,0.20)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(251,191,36,0.35)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#090d18]"
          >
            Enquire on WhatsApp
            <ArrowUpRight size={16} />
          </a>

        </div>

      </div>

      {/* Reveal animation + accessibility */}
      <style>{`
        @keyframes serviceReveal {
          from {
            opacity: 0;
            transform: translateY(22px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .service-reveal {
          animation: serviceReveal 700ms cubic-bezier(0.2, 0.7, 0.2, 1) both;
        }

        @media (prefers-reduced-motion: reduce) {
          .service-reveal {
            animation: none !important;
          }
        }
      `}</style>

    </section>
  );
}
