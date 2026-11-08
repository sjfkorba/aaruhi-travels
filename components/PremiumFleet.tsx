import Image from "next/image";
import {
  ArrowRight,
  CalendarDays,
  Check,
  Users,
  Wind,
  Luggage,
  Music2,
  Navigation,
  Phone,
  Sparkles,
  ShieldCheck,
  Star,
} from "lucide-react";

const fleet = [
  {
    name: "Swift Dzire",
    category: "Sedan",
    seats: "5 Seats",
    image: "/dezire.png",
    imageAlt: "Maruti Swift Dzire sedan taxi for comfortable city and outstation travel",
    perDay: "₹1,200",
    perKm: "₹10",
    features: ["AC", "Water Bottle", "Luggage Space", "GPS", "Music System", "USB Charging"],
    featured: true,
    accent: "from-amber-300 via-orange-400 to-yellow-500",
  },
  {
    name: "Maruti Ertiga",
    category: "SUV",
    seats: "7 Seats",
    image: "/ertiga.png",
    imageAlt: "Maruti Ertiga SUV taxi for family and group journeys",
    perDay: "₹1,500",
    perKm: "₹12",
    features: ["AC", "Water Bottle", "Luggage Space", "GPS", "Music System", "USB Charging"],
    featured: true,
    accent: "from-cyan-300 via-sky-400 to-blue-500",
  },
  {
    name: "Innova Crysta",
    category: "Premium SUV",
    seats: "7 Seats",
    image: "/crysta.png",
    imageAlt: "Toyota Innova Crysta premium SUV for comfortable long-distance travel",
    perDay: "₹2,200",
    perKm: "₹16",
    features: ["AC", "Water Bottle", "Luggage Space", "GPS", "Music System", "USB Charging"],
    featured: true,
    accent: "from-violet-300 via-fuchsia-400 to-pink-500",
  },
  {
    name: "Tempo Traveller",
    category: "Group Travel",
    seats: "12 Seats",
    image: "https://upload.wikimedia.org/wikipedia/commons/0/06/Tempo-Shuttl.jpg",
    imageAlt: "Force Tempo Traveller minibus for group and family travel",
    perDay: "₹3,000",
    perKm: "₹40",
    features: ["AC", "Group Seating", "Luggage Space", "Comfortable Ride", "Music System", "Tour Travel"],
    featured: false,
    credit: "Photo: Rsrikanth05 / Wikimedia Commons (CC BY-SA 4.0)",
    accent: "from-emerald-300 via-teal-400 to-cyan-500",
  },
];

const featureIcons = [Wind, Check, Luggage, Navigation, Music2, Check];

export default function PremiumFleet() {
  return (
    <section
      id="premium-fleet"
      aria-labelledby="premium-fleet-heading"
      className="relative isolate overflow-hidden bg-[#090d18] px-4 py-14 text-white sm:px-6 sm:py-18 lg:px-8 lg:py-24"
    >
      {/* Ambient brand glows */}
      <div className="pointer-events-none absolute -left-40 top-10 h-96 w-96 rounded-full bg-orange-500/15 blur-[110px]" />
      <div className="pointer-events-none absolute -right-40 top-1/3 h-[30rem] w-[30rem] rounded-full bg-amber-400/10 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-blue-500/10 blur-[110px]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.08)_0.7px,transparent_0.7px)] [background-size:22px_22px] opacity-20" />

      <div className="relative mx-auto max-w-[1320px]">
        <header className="mx-auto mb-9 max-w-3xl text-center sm:mb-12">
          <span className="inline-flex items-center gap-2 rounded-full border border-amber-300/25 bg-amber-300/10 px-4 py-2 text-[10px] font-black uppercase tracking-[0.2em] text-amber-300 shadow-[0_0_24px_rgba(251,191,36,0.10)] sm:text-xs">
            <Sparkles size={14} />
            Travel in Comfort · Arrive in Style
          </span>

          <h2
            id="premium-fleet-heading"
            className="mt-4 text-3xl font-black tracking-tight text-white sm:text-4xl lg:text-5xl"
          >
            Our <span className="bg-gradient-to-r from-amber-200 via-yellow-400 to-orange-400 bg-clip-text text-transparent">Premium Fleet</span>
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">
            The right vehicle makes every journey better. Choose from comfortable
            sedans, spacious SUVs and group travel options for your next ride.
          </p>

          <div className="mt-5 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-[11px] font-semibold text-slate-400 sm:text-xs">
            <span className="inline-flex items-center gap-1.5"><ShieldCheck size={14} className="text-emerald-400" /> Comfortable travel</span>
            <span className="inline-flex items-center gap-1.5"><Star size={14} className="text-amber-300" /> Multiple vehicle options</span>
            <span className="inline-flex items-center gap-1.5"><Phone size={14} className="text-sky-300" /> Booking assistance</span>
          </div>
        </header>

        <div className="grid grid-cols-1 items-stretch gap-5 sm:grid-cols-2 sm:gap-5 xl:grid-cols-4 xl:gap-5">
          {fleet.map((vehicle, index) => (
            <article
              key={vehicle.name}
              className="group relative flex min-w-0 flex-col overflow-hidden rounded-[22px] border border-white/10 bg-[#111827]/90 shadow-[0_12px_38px_rgba(0,0,0,0.28)] transition-all duration-500 hover:-translate-y-2 hover:border-amber-300/40 hover:shadow-[0_22px_55px_rgba(245,158,11,0.14)]"
              style={{ animationDelay: `${index * 90}ms` }}
            >
              <div className={`absolute inset-x-0 top-0 z-10 h-[3px] bg-gradient-to-r ${vehicle.accent}`} />

              {/* Vehicle image */}
              <div className="relative h-[190px] overflow-hidden bg-slate-800 sm:h-[185px] xl:h-[175px]">
                {vehicle.image.startsWith("http") ? (
                  <img
                    src={vehicle.image}
                    alt={vehicle.imageAlt}
                    loading="lazy"
                    className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
                  />
                ) : (
                  <Image
                    src={vehicle.image}
                    alt={vehicle.imageAlt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 25vw"
                    className="object-cover object-center transition-transform duration-700 group-hover:scale-110"
                  />
                )}

                <div className="absolute inset-0 bg-gradient-to-t from-[#080d18]/90 via-[#080d18]/5 to-black/15" />

                {vehicle.featured && (
                  <span className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full border border-amber-200/40 bg-[#fbbf24] px-3 py-1.5 text-[10px] font-black uppercase tracking-wide text-[#251500] shadow-[0_4px_18px_rgba(251,191,36,0.25)]">
                    <Star size={11} fill="currentColor" /> Featured Ride
                  </span>
                )}

                <span className="absolute bottom-3 right-3 rounded-full border border-white/25 bg-black/45 px-3 py-1.5 text-[10px] font-bold text-white backdrop-blur-md">
                  {vehicle.category}
                </span>
              </div>

              {/* Vehicle details */}
              <div className="flex flex-1 flex-col p-4 sm:p-5">
                <div className="flex items-start justify-between gap-2">
                  <div className="min-w-0">
                    <h3 className="text-lg font-black leading-tight text-white sm:text-xl">
                      {vehicle.name}
                    </h3>
                    <p className="mt-1 text-[11px] font-medium text-slate-400">
                      Ideal for {vehicle.category === "Sedan" ? "city & intercity rides" : vehicle.category === "Group Travel" ? "family & group journeys" : "family & outstation travel"}
                    </p>
                  </div>

                  <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.06] px-2.5 py-1.5 text-[10px] font-bold text-slate-200">
                    <Users size={13} className="text-amber-300" />
                    {vehicle.seats}
                  </span>
                </div>

                {/* Pricing panel */}
                <div className="mt-4 grid grid-cols-2 overflow-hidden rounded-xl border border-white/10 bg-black/20">
                  <div className="p-3">
                    <p className="text-[9px] font-extrabold uppercase tracking-[0.15em] text-slate-400">Per Day</p>
                    <p className="mt-1 text-xl font-black tracking-tight text-amber-300 sm:text-2xl">{vehicle.perDay}</p>
                  </div>
                  <div className="border-l border-white/10 p-3 text-right">
                    <p className="text-[9px] font-extrabold uppercase tracking-[0.15em] text-slate-400">Per KM</p>
                    <p className="mt-1 text-xl font-black tracking-tight text-white sm:text-2xl">{vehicle.perKm}</p>
                  </div>
                </div>

                {/* Features */}
                <div className="mt-4">
                  <p className="text-[10px] font-black uppercase tracking-[0.16em] text-slate-300">
                    Vehicle Features
                  </p>
                  <ul className="mt-3 grid grid-cols-2 gap-x-2 gap-y-3">
                    {vehicle.features.map((feature, featureIndex) => {
                      const FeatureIcon = featureIcons[featureIndex] ?? Check;
                      return (
                        <li
                          key={feature}
                          className="flex min-w-0 items-center gap-2 text-[10px] font-medium leading-tight text-slate-300 sm:text-[11px]"
                        >
                          <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border border-amber-300/15 bg-amber-300/10">
                            <FeatureIcon size={12} className="text-amber-300" aria-hidden="true" />
                          </span>
                          <span className="truncate">{feature}</span>
                        </li>
                      );
                    })}
                  </ul>
                </div>

                {/* Action buttons */}
                <div className="mt-auto grid grid-cols-2 gap-2.5 pt-5">
                  <a
                    href="/#booking-form"
                    className="group/book inline-flex min-h-11 items-center justify-center gap-1.5 rounded-xl bg-gradient-to-r from-amber-300 via-yellow-400 to-orange-400 px-2 py-2.5 text-[11px] font-black text-[#211500] shadow-[0_5px_18px_rgba(251,191,36,0.18)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_25px_rgba(251,191,36,0.32)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#111827] sm:text-xs"
                  >
                    <CalendarDays size={14} />
                    Book Now
                    <ArrowRight size={13} className="transition-transform group-hover/book:translate-x-0.5" />
                  </a>

                  <a
                    href={`https://wa.me/919244137353?text=${encodeURIComponent(`Hello Aaruhi Travels, I want to enquire about ${vehicle.name} (${vehicle.seats}) for my journey.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-11 items-center justify-center gap-1.5 rounded-xl border border-emerald-400/30 bg-emerald-500/15 px-2 py-2.5 text-[11px] font-black text-emerald-300 transition-all duration-300 hover:-translate-y-0.5 hover:border-emerald-300/60 hover:bg-emerald-500 hover:text-white hover:shadow-[0_8px_24px_rgba(16,185,129,0.2)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#111827] sm:text-xs"
                  >
                    <Phone size={13} />
                    WhatsApp
                  </a>
                </div>

                {vehicle.credit && (
                  <p className="mt-3 text-[8px] leading-4 text-slate-500">
                    {vehicle.credit}
                  </p>
                )}
              </div>
            </article>
          ))}
        </div>

        {/* Closing trust note */}
        <div className="mt-8 flex flex-col items-center justify-between gap-4 rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4 text-center sm:flex-row sm:text-left">
          <p className="text-xs leading-6 text-slate-400 sm:text-sm">
            <span className="font-bold text-slate-200">Need help choosing a vehicle?</span>{" "}
            Our team can help you select the right cab for your route and group size.
          </p>
          <a
            href="https://wa.me/919244137353?text=Hello%20Aaruhi%20Travels%2C%20please%20help%20me%20choose%20a%20vehicle."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-10 shrink-0 items-center gap-2 rounded-full border border-amber-300/30 bg-amber-300/10 px-4 py-2 text-xs font-extrabold text-amber-200 transition hover:border-amber-300/60 hover:bg-amber-300/20"
          >
            Get Vehicle Assistance <ArrowRight size={14} />
          </a>
        </div>

        <p className="mt-5 text-center text-[10px] leading-5 text-slate-500 sm:text-xs">
          Fares shown are indicative. Final quotation may vary by route, trip type,
          minimum running, tolls, parking and other applicable charges. Confirm
          the final fare at the time of booking.
        </p>
      </div>
    </section>
  );
}
