import Link from "next/link";
import {
  ArrowRight,
  MapPin,
  Clock3,
  IndianRupee,
} from "lucide-react";
import Navbar from "../../components/navbar";
import Hero from "../../components/Hero";
import Footer from "../../components/Footer";

const routes = [
  {
    from: "Raipur",
    to: "Bilaspur",
    fare: "₹4,250",
    distance: "125 km",
    time: "2h 30m",
  },
  {
    from: "Raipur",
    to: "Jagdalpur",
    fare: "₹5,800",
    distance: "285 km",
    time: "6h 10m",
  },
  {
    from: "Raipur",
    to: "Raigarh",
    fare: "₹3,900",
    distance: "170 km",
    time: "3h 20m",
  },
  {
    from: "Bilaspur",
    to: "Ambikapur",
    fare: "₹4,950",
    distance: "210 km",
    time: "4h 15m",
  },
  {
    from: "Durg",
    to: "Raipur",
    fare: "₹1,450",
    distance: "40 km",
    time: "50 min",
  },
  {
    from: "Raipur",
    to: "Korba",
    fare: "₹4,700",
    distance: "200 km",
    time: "4h",
  },
];

export default function RoutesPage() {
  return (
    
    <main className="min-h-screen bg-slate-50">
      <Navbar />

      <Hero
      />
      {/* Hero */}
      <section className="gradient-primary py-20 text-white">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <h1 className="text-4xl font-bold md:text-6xl">
            Popular Cab Routes
          </h1>

          <p className="mt-5 text-lg text-white/80">
            One Way Taxi Services Across Chhattisgarh
          </p>
        </div>
      </section>

      {/* Routes Grid */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4">

          <div className="mb-10">
            <h2 className="text-3xl font-bold text-primary">
              Available Routes
            </h2>

            <p className="mt-2 text-muted-foreground">
              Instant Fare Estimate & WhatsApp Booking
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">

            {routes.map((route, index) => (
              <div
                key={index}
                className="rounded-3xl border bg-white p-6 shadow-sm transition hover:shadow-xl"
              >

                <div className="flex items-center justify-between">

                  <h3 className="text-xl font-bold text-primary">
                    {route.from}
                    <ArrowRight className="mx-2 inline-block" />
                    {route.to}
                  </h3>

                </div>

                <div className="mt-6 space-y-3">

                  <div className="flex items-center gap-2 text-muted-foreground">
                    <IndianRupee size={18} />
                    <span>Starting Fare: {route.fare}</span>
                  </div>

                  <div className="flex items-center gap-2 text-muted-foreground">
                    <MapPin size={18} />
                    <span>{route.distance}</span>
                  </div>

                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Clock3 size={18} />
                    <span>{route.time}</span>
                  </div>

                </div>

                <div className="mt-6 flex gap-3">

                  <button className="flex-1 rounded-xl bg-primary py-3 font-semibold text-white">
                    Get Fare
                  </button>

                  <a
                    href="https://wa.me/917773041111"
                    target="_blank"
                    className="flex-1 rounded-xl border border-primary py-3 text-center font-semibold text-primary"
                  >
                    WhatsApp
                  </a>

                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="pb-20">
        <div className="mx-auto max-w-4xl px-4">

          <div className="gradient-primary rounded-3xl p-10 text-center text-white">

            <h2 className="text-3xl font-bold">
              Need a Custom Route?
            </h2>

            <p className="mt-4 text-white/80">
              Contact us for any route in Chhattisgarh.
            </p>

            <a
              href="https://wa.me/917773041111"
              target="_blank"
              className="mt-6 inline-block rounded-xl bg-secondary px-8 py-4 font-semibold text-white"
            >
              Book On WhatsApp
            </a>

          </div>

        </div>
      </section>
      <Footer/>
    </main>
  );
}