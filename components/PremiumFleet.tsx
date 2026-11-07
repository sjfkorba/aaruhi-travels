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
  },
  {
    name: "Tempo Traveller",
    category: "Group Travel",
    seats: "12 Seats",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/0/06/Tempo-Shuttl.jpg",
    imageAlt: "Force Tempo Traveller minibus for group and family travel",
    perDay: "₹3,000",
    perKm: "₹40",
    features: ["AC", "Group Seating", "Luggage Space", "Comfortable Ride", "Music System", "Tour Travel"],
    featured: false,
    credit: "Photo: Rsrikanth05 / Wikimedia Commons (CC BY-SA 4.0)",
  },
];

const featureIcons = [Wind, Check, Luggage, Navigation, Music2, Check];

export default function PremiumFleet() {
  return (
    <section
      id="premium-fleet"
      aria-labelledby="premium-fleet-heading"
      className="relative overflow-hidden bg-[#f7f7f7] px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20"
    >
      <div className="pointer-events-none absolute -right-28 top-10 h-72 w-72 rounded-full bg-orange-100/70 blur-3xl" />
      <div className="pointer-events-none absolute -left-28 bottom-0 h-72 w-72 rounded-full bg-amber-100/60 blur-3xl" />

      <div className="relative mx-auto max-w-[1280px]">
        <header className="mx-auto mb-8 max-w-2xl text-center sm:mb-11">
          <span className="inline-flex rounded-full border border-orange-200 bg-white px-3 py-1.5 text-[11px] font-extrabold uppercase tracking-[0.18em] text-orange-600 sm:text-sm">
            Travel in Comfort
          </span>
          <h2
            id="premium-fleet-heading"
            className="mt-3 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl lg:text-5xl"
          >
            Our Premium Fleet
          </h2>
          <p className="mt-2 text-sm leading-6 text-slate-600 sm:text-base sm:leading-7">
            Choose the right ride for your journey — from everyday city travel
            to premium family trips and group tours.
          </p>
        </header>

        <div className="grid grid-cols-2 items-stretch gap-3 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4">
          {fleet.map((vehicle, index) => (
            <article
              key={vehicle.name}
              className="group flex min-w-0 flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-[0_3px_12px_rgba(15,23,42,0.07)] transition-all duration-300 hover:-translate-y-1 hover:border-orange-200 hover:shadow-[0_18px_38px_rgba(234,88,12,0.13)] sm:rounded-2xl"
            >
              <div className="relative h-[125px] overflow-hidden bg-slate-100 sm:h-[180px] lg:h-[190px]">
                <img
                  src={vehicle.image}
                  alt={vehicle.imageAlt}
                  loading={index === 0 ? "eager" : "lazy"}
                  className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-black/10" />

                {vehicle.featured && (
                  <span className="absolute left-2 top-2 inline-flex items-center gap-1 rounded-full bg-amber-400 px-2 py-1 text-[9px] font-extrabold text-slate-950 shadow sm:left-3 sm:top-3 sm:text-xs">
                    <span aria-hidden="true">★</span> Featured
                  </span>
                )}

                <span className="absolute bottom-2 right-2 rounded-full border border-white/50 bg-white/95 px-2.5 py-1 text-[9px] font-bold text-slate-800 backdrop-blur sm:text-xs">
                  {vehicle.category}
                </span>
              </div>

              <div className="flex flex-1 flex-col p-3.5 sm:p-4">
                <div className="flex flex-wrap items-start justify-between gap-1.5">
                  <h3 className="text-[13px] font-extrabold leading-snug text-slate-900 sm:text-lg">
                    {vehicle.name}
                  </h3>
                  <span className="inline-flex shrink-0 items-center gap-1 rounded-full bg-slate-100 px-2 py-1 text-[9px] font-semibold text-slate-700 sm:text-xs">
                    <Users size={12} />
                    {vehicle.seats}
                  </span>
                </div>

                <div className="mt-3 grid grid-cols-2 gap-2 border-b border-slate-100 pb-3">
                  <div>
                    <p className="text-[9px] font-bold uppercase tracking-wide text-slate-500 sm:text-[11px]">
                      Per Day
                    </p>
                    <p className="mt-0.5 text-lg font-black text-orange-600 sm:text-2xl">
                      {vehicle.perDay}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-[9px] font-bold uppercase tracking-wide text-slate-500 sm:text-[11px]">
                      Per KM
                    </p>
                    <p className="mt-0.5 text-lg font-black text-slate-900 sm:text-2xl">
                      {vehicle.perKm}
                    </p>
                  </div>
                </div>

                <div className="mt-3">
                  <p className="text-[10px] font-extrabold uppercase tracking-[0.12em] text-slate-900 sm:text-xs">
                    Key Features
                  </p>
                  <ul className="mt-2 grid grid-cols-2 gap-x-1.5 gap-y-2.5">
                    {vehicle.features.map((feature, featureIndex) => {
                      const FeatureIcon = featureIcons[featureIndex] ?? Check;
                      return (
                        <li
                          key={feature}
                          className="flex min-w-0 items-center gap-1.5 text-[10px] leading-tight text-slate-600 sm:gap-2 sm:text-xs"
                        >
                          <FeatureIcon
                            size={12}
                            className="shrink-0 text-amber-500"
                            aria-hidden="true"
                          />
                          <span className="truncate">{feature}</span>
                        </li>
                      );
                    })}
                  </ul>
                </div>

                <div className="mt-auto grid grid-cols-2 gap-2 pt-4 sm:gap-2.5">
                  <a
                    href="/#booking-form"
                    className="inline-flex min-h-10 items-center justify-center gap-1 rounded-lg bg-gradient-to-r from-[#ff9f1c] to-[#ff6b00] px-1.5 py-2 text-[10px] font-extrabold text-white shadow-[0_5px_14px_rgba(249,115,22,0.30)] transition-all duration-200 hover:-translate-y-0.5 hover:from-[#f97316] hover:to-[#ea580c] hover:shadow-[0_8px_20px_rgba(249,115,22,0.42)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2 sm:min-h-11 sm:text-xs"
                  >
                    <CalendarDays size={13} />
                    Book Now
                  </a>
                  <a
                    href="https://wa.me/919244137353?text=Hello%20Aaruhi%20Travels%2C%20I%20want%20to%20enquire%20about%20the%20vehicle."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-10 items-center justify-center gap-1 rounded-lg bg-[#0dbb61] px-1.5 py-2 text-[10px] font-extrabold text-white shadow-[0_5px_14px_rgba(13,187,97,0.25)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#07984d] hover:shadow-[0_8px_20px_rgba(13,187,97,0.38)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2 sm:min-h-11 sm:text-xs"
                  >
                    <Phone size={12} />
                    WhatsApp
                  </a>
                </div>

                {vehicle.credit && (
                  <p className="mt-2 text-[8px] leading-3 text-slate-400 sm:text-[9px]">
                    {vehicle.credit}
                  </p>
                )}
              </div>
            </article>
          ))}
        </div>

       
      </div>
    </section>
  );
}
