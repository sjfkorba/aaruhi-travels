
"use client";

import {
  IndianRupee,
  Car,
  UserCheck,
  Clock3,
  Headphones,
  MapPinned,
  Sparkles,
  ShieldCheck,
  ArrowUpRight,
  CheckCircle2,
} from "lucide-react";

const features = [
  {
    icon: IndianRupee,
    title: "Transparent Fares",
    description:
      "No hidden charges. Get clear fare details before confirming your journey.",
    accent: "from-emerald-300 to-green-500",
    glow: "group-hover:shadow-emerald-500/15",
  },
  {
    icon: Car,
    title: "Clean & Sanitized Cars",
    description:
      "Travel in well-maintained, comfortable and hygienic vehicles.",
    accent: "from-sky-300 to-blue-500",
    glow: "group-hover:shadow-blue-500/15",
  },
  {
    icon: UserCheck,
    title: "Experienced Drivers",
    description:
      "Professional drivers focused on a comfortable and responsible journey.",
    accent: "from-orange-300 to-amber-500",
    glow: "group-hover:shadow-orange-500/15",
  },
  {
    icon: Clock3,
    title: "On-Time Pickup",
    description:
      "We value your time and coordinate pickups to help keep your journey on schedule.",
    accent: "from-violet-300 to-purple-500",
    glow: "group-hover:shadow-purple-500/15",
  },
  {
    icon: Headphones,
    title: "24×7 Booking Support",
    description:
      "Get booking assistance and travel coordination whenever you need help.",
    accent: "from-cyan-300 to-teal-500",
    glow: "group-hover:shadow-cyan-500/15",
  },
  {
    icon: MapPinned,
    title: "Doorstep Pickup",
    description:
      "Convenient pickup from your preferred location for a hassle-free start.",
    accent: "from-rose-300 to-pink-500",
    glow: "group-hover:shadow-pink-500/15",
  },
];

const trustPoints = [
  "Multiple Vehicle Options",
  "Convenient Booking",
  "Dedicated Assistance",
];

export default function WhyChooseUs() {
  return (
    <section
      id="why-choose-us"
      aria-labelledby="why-choose-us-heading"
      className="relative isolate overflow-hidden bg-[#090d18] px-4 py-16 text-white sm:px-6 sm:py-20 lg:px-8 lg:py-24"
    >
      {/* Ambient background glow */}
      <div className="pointer-events-none absolute -left-40 top-0 h-[400px] w-[400px] rounded-full bg-emerald-500/10 blur-[120px]" />

      <div className="pointer-events-none absolute -right-40 top-1/4 h-[420px] w-[420px] rounded-full bg-orange-500/12 blur-[130px]" />

      <div className="pointer-events-none absolute bottom-0 left-1/3 h-80 w-80 rounded-full bg-blue-500/10 blur-[120px]" />

      {/* Subtle dotted texture */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.08)_0.7px,transparent_0.7px)] [background-size:24px_24px] opacity-20" />

      <div className="relative mx-auto max-w-[1280px]">

        {/* Header */}
        <header className="why-reveal mx-auto mb-11 max-w-3xl text-center sm:mb-14">

          <span className="inline-flex items-center gap-2 rounded-full border border-amber-300/25 bg-amber-300/10 px-4 py-2 text-[10px] font-black uppercase tracking-[0.2em] text-amber-300 shadow-[0_0_25px_rgba(251,191,36,0.10)] sm:text-xs">
            <Sparkles size={14} />
            The Aaruhi Advantage
          </span>

          <h2
            id="why-choose-us-heading"
            className="mt-5 text-3xl font-black tracking-tight text-white sm:text-4xl lg:text-5xl"
          >
            Why Choose{" "}
            <span className="bg-gradient-to-r from-amber-200 via-yellow-400 to-orange-400 bg-clip-text text-transparent">
              Aaruhi Travels?
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base sm:leading-8">
            Your journey deserves more than just a ride. Experience
            convenient booking, comfortable vehicles, transparent fares
            and dedicated travel assistance across Chhattisgarh.
          </p>

          {/* Trust highlights */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-5 gap-y-3">
            {trustPoints.map((point) => (
              <span
                key={point}
                className="inline-flex items-center gap-2 text-[11px] font-semibold text-slate-300 sm:text-xs"
              >
                <CheckCircle2
                  size={15}
                  className="shrink-0 text-emerald-400"
                />
                {point}
              </span>
            ))}
          </div>
        </header>

        {/* Feature cards */}
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6">

          {features.map((item, index) => {
            const Icon = item.icon;

            return (
              <article
                key={item.title}
                style={{ animationDelay: `${index * 100}ms` }}
                className={`why-reveal group relative flex min-h-[225px] min-w-0 flex-col overflow-hidden rounded-[22px] border border-white/10 bg-gradient-to-br from-[#172033] via-[#111827] to-[#0d1321] p-5 shadow-[0_12px_35px_rgba(0,0,0,0.22)] transition-all duration-500 hover:-translate-y-2 hover:border-white/20 hover:shadow-[0_22px_48px_rgba(0,0,0,0.35)] ${item.glow} sm:min-h-[240px] sm:rounded-[26px] sm:p-7`}
              >

                {/* Top accent line */}
                <div
                  className={`absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r ${item.accent} opacity-65 transition-all duration-500 group-hover:h-1 group-hover:opacity-100`}
                />

                {/* Background glow */}
                <div
                  className={`pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full bg-gradient-to-br ${item.accent} opacity-[0.04] blur-3xl transition-all duration-500 group-hover:opacity-20`}
                />

                {/* Icon */}
                <div
                  className={`relative flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-gradient-to-br ${item.accent} text-slate-950 shadow-[0_8px_24px_rgba(0,0,0,0.2)] transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 group-hover:shadow-xl`}
                >
                  <Icon
                    size={27}
                    strokeWidth={2}
                    aria-hidden="true"
                  />
                </div>

                {/* Text */}
                <h3 className="relative mt-6 text-lg font-black leading-snug text-white transition-colors duration-300 group-hover:text-amber-200 sm:text-xl">
                  {item.title}
                </h3>

                <p className="relative mt-3 flex-1 text-xs leading-[1.9] text-slate-400 transition-colors duration-300 group-hover:text-slate-300 sm:text-sm sm:leading-7">
                  {item.description}
                </p>

                {/* Bottom decorative line */}
                <div className="pointer-events-none absolute bottom-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent transition-all duration-500 group-hover:via-amber-300/40" />

                {/* Decorative corner icon */}
                <ArrowUpRight
                  size={19}
                  className="absolute bottom-5 right-5 text-slate-600 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-amber-300"
                  aria-hidden="true"
                />

              </article>
            );
          })}

        </div>

        {/* Premium trust banner */}
        <div className="why-reveal relative mt-10 overflow-hidden rounded-[24px] border border-amber-300/15 bg-gradient-to-br from-[#172033] via-[#121a2b] to-[#0d1321] p-6 shadow-[0_15px_45px_rgba(0,0,0,0.25)] sm:mt-14 sm:p-9">

          {/* Banner glow */}
          <div className="pointer-events-none absolute -right-20 -top-24 h-64 w-64 rounded-full bg-amber-400/10 blur-[90px]" />

          <div className="relative flex flex-col items-center gap-5 text-center sm:flex-row sm:text-left">

            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-amber-300/20 bg-amber-300/10 text-amber-300 shadow-[0_0_30px_rgba(251,191,36,0.12)]">
              <ShieldCheck size={34} strokeWidth={1.8} />
            </div>

            <div className="flex-1">
              <h3 className="text-xl font-black text-white sm:text-2xl">
                Travel with Confidence
              </h3>

              <p className="mt-2 text-xs leading-6 text-slate-400 sm:text-sm sm:leading-7">
                From booking assistance to your final drop-off,
                Aaruhi Travels is committed to making your journey
                convenient and comfortable.
              </p>
            </div>

            <a
              href="https://wa.me/919244137353?text=Hello%20Aaruhi%20Travels%2C%20I%20would%20like%20to%20know%20more%20about%20your%20taxi%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 shrink-0 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-amber-300 via-yellow-400 to-orange-400 px-6 py-3 text-xs font-black text-[#211500] shadow-[0_7px_24px_rgba(251,191,36,0.20)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(251,191,36,0.35)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#111827] sm:text-sm"
            >
              Talk to Our Team
              <ArrowUpRight size={17} />
            </a>

          </div>
        </div>

      </div>

      {/* Reveal animation and accessibility */}
      <style>{`
        @keyframes whyChooseReveal {
          from {
            opacity: 0;
            transform: translateY(22px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .why-reveal {
          animation: whyChooseReveal 700ms cubic-bezier(0.2, 0.7, 0.2, 1) both;
        }

        @media (prefers-reduced-motion: reduce) {
          .why-reveal {
            animation: none !important;
          }
        }
      `}</style>

    </section>
  );
}
