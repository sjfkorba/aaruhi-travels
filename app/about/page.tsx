import Footer from "../../components/Footer";
import Hero from "../../components/Hero";
import Navbar from "../../components/navbar";


export const metadata = {
  title: "About Aaruhi Travels | One Way Taxi Service in Chhattisgarh",
  description:
    "Aaruhi Travels is a trusted taxi and cab rental service provider in Chhattisgarh with 15+ years of experience. Specializing in affordable one-way taxi services across Korba, Bilaspur, Raipur, Raigarh and nearby cities.",
};

export default function AboutPage() {
  return (
    <>
    <Navbar />
      {/* <Hero/> */}

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4">

          <div className="mx-auto max-w-4xl">

            <h2 className="text-4xl font-bold text-primary mb-8">
              Your Trusted Travel Partner Across Chhattisgarh
            </h2>

            <div className="space-y-6 text-lg leading-8 text-muted-foreground">

              <p>
                Aaruhi Travels is one of the trusted and experienced taxi
                service providers in Chhattisgarh. Established offline in
                2011, we have successfully served thousands of customers
                across the state and built a reputation based on reliability,
                affordability, customer satisfaction, and professional service.
              </p>

              <p>
                With more than 15 years of experience in the taxi and travel
                industry, we understand the importance of safe, comfortable,
                and affordable transportation. Our mission is simple —
                provide premium-quality taxi services at the most reasonable
                fares while ensuring complete customer satisfaction.
              </p>

              <p>
                We specialize in one-way taxi services, helping customers
                save money by paying only for the distance they travel.
                Unlike traditional taxi operators who often charge round-trip
                fares, our one-way cab model offers significant savings
                without compromising on comfort, safety, or service quality.
              </p>

              <p>
                Our services are available across the entire state of
                Chhattisgarh, connecting major cities, business hubs,
                industrial zones, tourist destinations, railway stations,
                airports, and residential areas.
              </p>

              <p>
                Some of our most popular routes include Korba to Bilaspur,
                Bilaspur to Korba, Korba to Raipur, Raipur to Korba,
                Korba to Raigarh, Raigarh to Korba, Korba to Dharamjaigarh,
                and Dharamjaigarh to Korba. These routes are regularly
                booked by professionals, families, students, business
                travelers, and tourists who rely on our dependable service.
              </p>

              <p>
                At Aaruhi Travels, every booking is handled with care and
                professionalism. Our drivers are experienced, courteous,
                and familiar with local routes, ensuring a smooth and
                hassle-free travel experience. We maintain clean vehicles,
                transparent pricing, punctual pickups, and dedicated
                customer support to provide the best possible service.
              </p>

              <p>
                Over the years, we have continuously improved our services
                to match modern customer expectations. Whether you need a
                taxi for airport transfers, railway station pickups,
                corporate travel, family trips, emergency travel, or daily
                transportation needs, Aaruhi Travels is always ready to
                serve you.
              </p>

              <p>
                What makes us different is our commitment to offering the
                cheapest one-way taxi fares in Chhattisgarh while maintaining
                premium-quality service standards. We believe that affordable
                travel should never mean compromising on safety, comfort, or
                reliability.
              </p>

              <p>
                Today, Aaruhi Travels proudly serves customers throughout
                Chhattisgarh and continues to grow through trust, customer
                referrals, and consistent service excellence. Our goal is to
                become the most trusted one-way taxi brand in Chhattisgarh by
                delivering exceptional travel experiences every day.
              </p>

            </div>
          </div>

        </div>
      </section>

      {/* Stats */}
      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-7xl px-4">

          <div className="grid gap-6 md:grid-cols-4">

            <div className="rounded-3xl bg-white p-8 text-center shadow-sm">
              <h3 className="text-5xl font-bold text-primary">
                15+
              </h3>
              <p className="mt-2">
                Years Experience
              </p>
            </div>

            <div className="rounded-3xl bg-white p-8 text-center shadow-sm">
              <h3 className="text-5xl font-bold text-primary">
                5000+
              </h3>
              <p className="mt-2">
                Happy Customers
              </p>
            </div>

            <div className="rounded-3xl bg-white p-8 text-center shadow-sm">
              <h3 className="text-5xl font-bold text-primary">
                24×7
              </h3>
              <p className="mt-2">
                Customer Support
              </p>
            </div>

            <div className="rounded-3xl bg-white p-8 text-center shadow-sm">
              <h3 className="text-5xl font-bold text-primary">
                100%
              </h3>
              <p className="mt-2">
                Transparent Pricing
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4">

          <h2 className="text-center text-4xl font-bold text-primary mb-12">
            Major Service Routes
          </h2>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">

            {[
              "Korba → Bilaspur",
              "Bilaspur → Korba",
              "Korba → Raipur",
              "Raipur → Korba",
              "Korba → Raigarh",
              "Raigarh → Korba",
              "Korba → Dharamjaigarh",
              "Dharamjaigarh → Korba",
            ].map((route) => (
              <div
                key={route}
                className="rounded-2xl border p-5 text-center font-semibold"
              >
                {route}
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="pb-20">
        <div className="mx-auto max-w-5xl px-4">

          <div className="rounded-3xl gradient-primary p-10 text-center text-white">

            <h2 className="text-4xl font-bold">
              Book Your One Way Taxi Today
            </h2>

            <p className="mt-4 text-white/80">
              Affordable fares, experienced drivers, premium service and
              reliable travel across Chhattisgarh.
            </p>

            <a
              href="https://wa.me/917773041111"
              target="_blank"
              className="mt-6 inline-block rounded-xl bg-white px-8 py-4 font-semibold text-primary"
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