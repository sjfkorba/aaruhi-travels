
import {
  ShieldCheck,
  IndianRupee,
  Clock3,
  Car,
  Headphones,
  MapPinned,
  Users,
  Star,
  Route,
  BadgeCheck,
} from "lucide-react";
import Hero from "../../components/Hero";
import Footer from "../../components/Footer";
import Navbar from "../../components/navbar";

export const metadata = {
  title: "Why Choose Aaruhi Travels | Best One Way Taxi Service in Chhattisgarh",
  description:
    "Discover why thousands of customers trust Aaruhi Travels for one way taxi services across Chhattisgarh. Affordable fares, experienced drivers, 24x7 support and premium travel experience.",
};

const reasons = [
  {
    icon: IndianRupee,
    title: "Cheapest One Way Taxi Fare",
    description:
      "We specialize in one-way taxi services, helping customers avoid expensive round-trip charges and save significantly on travel costs.",
  },
  {
    icon: ShieldCheck,
    title: "15+ Years of Experience",
    description:
      "Serving customers since 2011, we have built trust through consistent service quality and customer satisfaction.",
  },
  {
    icon: Car,
    title: "Clean & Well Maintained Vehicles",
    description:
      "Every vehicle is regularly maintained to ensure a comfortable, safe and reliable travel experience.",
  },
  {
    icon: Users,
    title: "Professional Drivers",
    description:
      "Experienced, verified and polite drivers who know local routes and prioritize customer safety.",
  },
  {
    icon: Clock3,
    title: "On Time Pickup & Drop",
    description:
      "We value your time and ensure punctual service for business, family and personal travel.",
  },
  {
    icon: Headphones,
    title: "24×7 Customer Support",
    description:
      "Our support team is available round the clock to assist with bookings and travel requirements.",
  },
  {
    icon: Route,
    title: "Extensive Route Coverage",
    description:
      "Covering major cities and towns across Chhattisgarh with reliable intercity taxi services.",
  },
  {
    icon: MapPinned,
    title: "Doorstep Pickup Service",
    description:
      "Get picked up directly from your home, office, airport or railway station without hassle.",
  },
  {
    icon: Star,
    title: "Thousands of Happy Customers",
    description:
      "Our customer-first approach has helped us earn repeat bookings and referrals across Chhattisgarh.",
  },
  {
    icon: BadgeCheck,
    title: "Transparent Pricing",
    description:
      "No hidden charges, no surprises. What you see is what you pay.",
  },
];

export default function WhyUsPage() {
  return (
    <>
    <Navbar/>
      {/* <Hero/> */}

      {/* Introduction */}
      <section className="py-16">
        <div className="mx-auto max-w-5xl px-4">

          <h2 className="mb-8 text-center text-4xl font-bold text-primary">
            The Trusted Choice For One Way Taxi Services
          </h2>

          <div className="space-y-6 text-lg leading-8 text-muted-foreground">

            <p>
              Choosing the right taxi service can make a huge difference in your
              travel experience. Whether you are traveling for business,
              personal work, family visits, airport transfers, railway station
              pickups, or long-distance intercity journeys, you deserve a
              service that is affordable, reliable, comfortable, and safe.
            </p>

            <p>
              Aaruhi Travels has been serving customers across Chhattisgarh
              since 2011. With more than 15 years of experience in the taxi and
              travel industry, we understand what customers truly expect from a
              professional travel service. Our commitment to quality, punctuality,
              affordability, and customer satisfaction has helped us become a
              trusted name in the region.
            </p>

            <p>
              Unlike many traditional taxi operators, our primary focus is on
              one-way taxi services. This allows customers to travel at
              significantly lower costs while still enjoying premium-quality
              service. We believe that affordable travel should never require
              compromising on safety, vehicle quality, or customer experience.
            </p>

            <p>
              Thousands of customers choose Aaruhi Travels every year because we
              consistently deliver reliable service, transparent pricing, and a
              comfortable travel experience. Below are the top reasons why
              customers trust us for their transportation needs across
              Chhattisgarh.
            </p>

          </div>
        </div>
      </section>

      {/* 10 Reasons */}
      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-7xl px-4">

          <div className="grid gap-8 md:grid-cols-2">

            {reasons.map((reason, index) => {
              const Icon = reason.icon;

              return (
                <div
                  key={index}
                  className="rounded-3xl bg-white p-8 shadow-sm transition hover:shadow-xl"
                >
                  <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10">
                    <Icon className="text-primary" size={32} />
                  </div>

                  <h3 className="mb-4 text-2xl font-bold text-primary">
                    {index + 1}. {reason.title}
                  </h3>

                  <p className="leading-8 text-muted-foreground">
                    {reason.description}
                  </p>
                </div>
              );
            })}

          </div>
        </div>
      </section>

      {/* Service Coverage */}
      <section className="py-16">
        <div className="mx-auto max-w-5xl px-4">

          <h2 className="mb-8 text-center text-4xl font-bold text-primary">
            Serving Major Routes Across Chhattisgarh
          </h2>

          <div className="space-y-6 text-lg leading-8 text-muted-foreground">

            <p>
              Aaruhi Travels proudly serves customers throughout Chhattisgarh,
              connecting important cities, industrial hubs, business centers,
              educational institutions, and tourist destinations. Our most
              frequently booked routes include Korba to Bilaspur, Bilaspur to
              Korba, Korba to Raipur, Raipur to Korba, Korba to Raigarh,
              Raigarh to Korba, Korba to Dharamjaigarh, and Dharamjaigarh to
              Korba.
            </p>

            <p>
              These routes are used daily by professionals, students,
              government employees, families, tourists, and business travelers.
              Our familiarity with these routes allows us to provide faster,
              safer, and more efficient transportation solutions.
            </p>

            <p>
              As we continue to expand, our goal is to become the most trusted
              one-way taxi service provider in Chhattisgarh while maintaining
              our commitment to affordability and customer satisfaction.
            </p>

          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-primary py-16 text-white">
        <div className="mx-auto max-w-7xl px-4">

          <div className="grid gap-8 text-center md:grid-cols-4">

            <div>
              <h3 className="text-5xl font-bold">15+</h3>
              <p className="mt-2">Years Experience</p>
            </div>

            <div>
              <h3 className="text-5xl font-bold">5000+</h3>
              <p className="mt-2">Happy Customers</p>
            </div>

            <div>
              <h3 className="text-5xl font-bold">24×7</h3>
              <p className="mt-2">Customer Support</p>
            </div>

            <div>
              <h3 className="text-5xl font-bold">100%</h3>
              <p className="mt-2">Transparent Pricing</p>
            </div>

          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="mx-auto max-w-5xl px-4">

          <div className="rounded-3xl bg-primary p-10 text-center text-white">

            <h2 className="text-4xl font-bold">
              Experience The Difference With Aaruhi Travels
            </h2>

            <p className="mx-auto mt-4 max-w-3xl text-lg text-white/80">
              Affordable fares, premium vehicles, experienced drivers,
              transparent pricing, and reliable service. Book your one-way taxi
              today and discover why thousands of customers trust Aaruhi Travels.
            </p>

            <a
              href="https://wa.me/917773041111"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-block rounded-xl bg-white px-8 py-4 font-semibold text-primary"
            >
              Book on WhatsApp
            </a>

          </div>

        </div>
      </section>
      <Footer/>
    </>
  );
}