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
} from "lucide-react";

const taxiServices = [
  {
    title: "One Way Taxi",
    description:
      "Book a one-way cab for intercity travel with a convenient pickup and drop. Ideal when you do not need a return journey.",
    icon: Route,
    href: "/services/one-way-taxi",
  },
  {
    title: "Round Trip Booking",
    description:
      "Plan a return journey with a cab for your complete trip, flexible stops and a comfortable ride back.",
    icon: Car,
    href: "/services/round-trip-taxi",
  },
  {
    title: "Local Taxi Services",
    description:
      "Hire a cab for local travel, meetings, shopping, family visits and city transfers in our service areas.",
    icon: MapPin,
    href: "/services/local-taxi",
  },
  {
    title: "Outstation Booking",
    description:
      "Travel between cities across Chhattisgarh and nearby states with a cab suited to your journey.",
    icon: Compass,
    href: "/services/outstation-taxi",
  },
  {
    title: "Airport Pickup & Drop",
    description:
      "Arrange airport transfers with a pre-booked cab for timely pickups and convenient drop-offs.",
    icon: Plane,
    href: "/services/airport-transfer",
  },
  {
    title: "Railway Station Transfer",
    description:
      "Book a pickup or drop to railway stations for an easy connection between your train and destination.",
    icon: TrainFront,
    href: "/services/railway-station-transfer",
  },
  {
    title: "Corporate Taxi Service",
    description:
      "Arrange business travel and employee transportation with sedan and SUV cab options.",
    icon: Users,
    href: "/services/corporate-taxi",
  },
  {
    title: "Event Taxi Booking",
    description:
      "Coordinate cab requirements for weddings, family functions, conferences and group events.",
    icon: CalendarDays,
    href: "/services/event-taxi",
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
      className="relative overflow-hidden bg-[#f7f7f7] px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20"
    >
      <div className="mx-auto max-w-[1240px]">
        <header className="mx-auto mb-9 max-w-2xl text-center sm:mb-12">
          <span className="inline-flex items-center rounded-full border border-orange-200 bg-orange-50 px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-[0.18em] text-orange-700 sm:text-xs">
            Aaruhi Travels
          </span>

          <h2
            id="taxi-services-heading"
            className="mt-4 text-2xl font-black tracking-tight text-[#171717] sm:text-3xl lg:text-4xl"
          >
            Our Taxi Services
          </h2>

          <p className="mx-auto mt-3 max-w-xl text-xs leading-6 text-slate-600 sm:text-sm sm:leading-7">
            Reliable cab services for every journey — local, outstation,
            airport, corporate and more. Book your ride with Aaruhi Travels.
          </p>
        </header>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-4">
          {taxiServices.map((service) => {
            const Icon = service.icon;

            return (
              <article
                key={service.title}
                className="group flex min-h-[190px] flex-col rounded-xl border border-[#eaeaea] bg-white p-4 shadow-[0_2px_12px_rgba(0,0,0,0.025)] transition-all duration-300 hover:-translate-y-1 hover:border-orange-200 hover:shadow-[0_14px_35px_rgba(234,88,12,0.09)] sm:min-h-[205px] sm:rounded-2xl sm:p-5"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-50 text-amber-500 transition-colors duration-300 group-hover:bg-orange-500 group-hover:text-white">
                  <Icon size={19} strokeWidth={1.8} aria-hidden="true" />
                </div>

                <h3 className="mt-4 text-sm font-extrabold leading-snug text-slate-900 sm:text-[15px]">
                  {service.title}
                </h3>

                <p className="mt-2 flex-1 text-xs leading-[1.7] text-slate-500">
                  {service.description}
                </p>

                <Link
                  href={service.href}
                  aria-label={`${service.title} - enquire with Aaruhi Travels`}
                  className="mt-3 inline-flex w-fit items-center gap-1 text-[11px] font-bold text-amber-600 transition-colors hover:text-orange-700"
                >
                  Explore
                  <ArrowUpRight
                    size={13}
                    className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    aria-hidden="true"
                  />
                </Link>

              </article>
            );
          })}
        </div>

        <div className="mt-9 border-t border-slate-200 pt-6 text-center sm:mt-11 sm:pt-8">
          <h3 className="text-sm font-extrabold text-slate-800 sm:text-base">
            Taxi Services Across Our Key Cities
          </h3>

          <p className="mx-auto mt-2 max-w-4xl text-xs leading-6 text-slate-500 sm:text-sm">
            Aaruhi Travels serves journeys across{" "}
            {serviceAreas.map((city, index) => (
              <span key={city}>
                {index > 0 && (index === serviceAreas.length - 1 ? " and " : ", ")}
                <span className="font-semibold text-slate-700">{city}</span>
              </span>
            ))}
            . Contact us to check cab availability for your route.
          </p>
        </div>
      </div>
    </section>
  );
}
