// app/blog/chhattisgarh-travel-guide/page.tsx

import Navbar from "@/components/navbar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Aaruhi Travels Chhattisgarh - Taxi & Travel Service in Korba, Raipur, Bilaspur, Ambikapur, Durg, Bhilai, Raigarh",
  description:
    "Aaruhi Travels offers local taxi, outstation cab, railway pickup, airport transfer and tour travel services across Korba, Raipur, Bilaspur, Ambikapur, Durg, Bhilai and Raigarh.",
  keywords: [
    "Aaruhi Travels",
    "Korba taxi service",
    "Raipur taxi booking",
    "Bilaspur cab service",
    "Ambikapur travel agency",
    "Durg taxi service",
    "Bhilai cab booking",
    "Raigarh taxi service",
    "Chhattisgarh travel agency",
    "outstation taxi chhattisgarh",
    "local cab booking",
    "railway station pickup",
    "airport transfer Raipur",
  ],
  alternates: {
    canonical: "https://yourdomain.com/blog/chhattisgarh-travel-guide",
  },
  openGraph: {
    title:
      "Aaruhi Travels - Premium Travel Service Across Chhattisgarh",
    description:
      "Book local and outstation taxi services in Korba, Raipur, Bilaspur, Ambikapur, Durg, Bhilai and Raigarh.",
    url: "https://yourdomain.com/blog/chhattisgarh-travel-guide",
    siteName: "Aaruhi Travels",
    type: "article",
    locale: "en_IN",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Aaruhi Travels Chhattisgarh - Taxi & Travel Service in Korba, Raipur, Bilaspur, Ambikapur, Durg, Bhilai, Raigarh",
  description:
    "Detailed travel and taxi booking guide for major cities of Chhattisgarh by Aaruhi Travels.",
  author: {
    "@type": "Organization",
    name: "Aaruhi Travels",
  },
  publisher: {
    "@type": "Organization",
    name: "Aaruhi Travels",
  },
};

export default function ChhattisgarhTravelGuidePage() {
  return (
    <main className="bg-linear-to-b from-orange-50 via-white to-white text-slate-900">
        {/* Navigation */}
              <Navbar />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <article className="mx-auto max-w-6xl px-4 py-10 md:px-6 lg:px-8">
        <header className="relative overflow-hidden rounded-3xl border border-orange-100 bg-white shadow-[0_20px_80px_rgba(15,23,42,0.08)]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(249,115,22,0.16),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(251,191,36,0.16),transparent_28%)]" />
          <div className="relative px-6 py-12 md:px-10 md:py-16">
            <span className="inline-flex rounded-full bg-orange-100 px-4 py-1 text-sm font-semibold text-orange-700">
              Aaruhi Travels • Chhattisgarh Travel Network
            </span>
            <h1 className="mt-5 max-w-4xl text-3xl font-extrabold leading-tight tracking-tight md:text-5xl">
              Premium Taxi and Travel Service Across Korba, Raipur, Bilaspur,
              Ambikapur, Durg, Bhilai and Raigarh
            </h1>
            <p className="mt-5 max-w-3xl text-base leading-8 text-slate-600 md:text-lg">
              Aaruhi Travels is built for passengers who want comfortable travel,
              clean vehicles, reliable pickup timing, and easy booking support
              across the major cities of Chhattisgarh. From local rides and
              station pickup to long-distance trips and family tours, we focus on
              practical travel needs with a professional service experience.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="/contact"
                className="rounded-full bg-orange-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-orange-600"
              >
                Book Your Ride
              </a>
              <a
                href="/services"
                className="rounded-full border border-slate-200 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-orange-300 hover:text-orange-600"
              >
                Explore Services
              </a>
            </div>
          </div>
        </header>

        <section className="mt-12 grid gap-6 md:grid-cols-3">
          {[
            ["City Coverage", "Korba, Raipur, Bilaspur, Ambikapur, Durg, Bhilai, Raigarh"],
            ["Service Types", "Local taxi, one-way cab, round trip, station pickup, airport transfer"],
            ["Travel Focus", "Family travel, business trips, temple visits, tours and intercity rides"],
          ].map(([title, text]) => (
            <div
              key={title}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <h2 className="text-lg font-bold text-slate-900">{title}</h2>
              <p className="mt-3 text-sm leading-7 text-slate-600">{text}</p>
            </div>
          ))}
        </section>

        <section className="mt-14 rounded-3xl border border-slate-200 bg-white p-6 md:p-10">
          <h2 className="text-2xl font-bold md:text-3xl">
            Why Aaruhi Travels fits Chhattisgarh passengers
          </h2>
          <p className="mt-4 max-w-4xl text-base leading-8 text-slate-600">
            Chhattisgarh travelers often need flexibility more than anything else.
            Some need a direct cab from home to railway station, some need an
            outstation ride for medical visits or family functions, and many want
            reliable vehicles for city-to-city business movement. Aaruhi Travels
            is designed around these real travel patterns instead of generic
            tourist-only content.
          </p>
          <p className="mt-4 max-w-4xl text-base leading-8 text-slate-600">
            Our focus is simple: responsive booking support, polite drivers,
            clear communication, practical vehicle options, and strong service
            coverage in the cities where daily travel demand actually exists.
          </p>
        </section>

        <section className="mt-14">
          <h2 className="text-2xl font-bold md:text-3xl">
            City-wise travel details
          </h2>

          <div className="mt-8 grid gap-6">
            {[
              {
                city: "Korba",
                text: "Korba is one of the most important service locations for Aaruhi Travels. Local families, plant-related visitors, railway travelers, and outstation passengers often need dependable transport for station pickup, city movement, and routes toward Bilaspur, Raipur, Raigarh, and nearby destinations. Korba-focused travel content should highlight local pickup convenience, one-way cab support, and fast phone or WhatsApp booking for urgent movement.",
              },
              {
                city: "Raipur",
                text: "Raipur works as the strongest travel gateway in Chhattisgarh because the state’s functional passenger airport is located here, and the airport is around 15 km from the main city area.[web:23] Raipur also serves as a major travel and business hub, so airport transfers, corporate rides, railway pickup, and intercity cab demand remain consistently important for a professional travel agency.[web:23]",
              },
              {
                city: "Bilaspur",
                text: "Bilaspur is one of the major railway junctions in Chhattisgarh, which makes it an important city for station transfers, family travel, student movement, and long-distance taxi support.[web:23] Aaruhi Travels can position Bilaspur as a practical booking point for rail passengers who need timely pickup, direct home drop, and smooth connections to Korba, Raipur, Ambikapur, and Raigarh.",
              },
              {
                city: "Ambikapur",
                text: "Ambikapur passengers usually look for comfortable outstation rides, family travel convenience, and dependable scheduling because routes are often longer and planning matters more. This city should be presented as a destination where Aaruhi Travels supports safe intercity journeys, tourism movement, and pre-booked rides for families, professionals, and visitors.",
              },
              {
                city: "Durg",
                text: "Durg is one of the main railway junction zones of Chhattisgarh, making it highly relevant for rail-linked taxi demand and intercity booking support.[web:23] For Aaruhi Travels, Durg content should focus on railway station pickup, local city rides, business transportation, and smooth travel toward Bhilai, Raipur, Bilaspur, and other connected cities.",
              },
              {
                city: "Bhilai",
                text: "Bhilai has strong demand from working professionals, families, industrial movement, and nearby city connectivity, especially because it works closely with Durg in day-to-day travel behavior. Aaruhi Travels should describe Bhilai as a dependable point for local cabs, scheduled pickup, business travel, and direct outstation bookings for passengers who want timely service and clean vehicles.",
              },
              {
                city: "Raigarh",
                text: "Raigarh is also listed among the bigger railway-connected cities in Chhattisgarh, which gives it strong intercity travel relevance.[web:23] For SEO and conversion, Aaruhi Travels should present Raigarh as a practical origin and destination for family visits, long-distance cabs, station transfer, and business-oriented routes across the state.",
              },
            ].map((item, index) => (
              <div
                key={item.city}
                className={`rounded-3xl border p-6 md:p-8 ${
                  index % 2 === 0
                    ? "border-orange-100 bg-gradient-to-r from-orange-50 to-white"
                    : "border-slate-200 bg-white"
                }`}
              >
                <h3 className="text-xl font-bold text-slate-900">{item.city}</h3>
                <p className="mt-4 text-base leading-8 text-slate-600">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-14 grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 md:p-8">
            <h2 className="text-2xl font-bold">Services passengers search for</h2>
            <ul className="mt-5 space-y-3 text-slate-600">
              <li>Local cab booking for city travel</li>
              <li>One-way taxi for direct point-to-point trips</li>
              <li>Round-trip taxi for return journeys</li>
              <li>Railway station pickup and drop</li>
              <li>Raipur airport transfer support</li>
              <li>Family and wedding travel vehicles</li>
              <li>Business and corporate travel bookings</li>
              <li>Outstation taxi across Chhattisgarh</li>
            </ul>
          </div>

          <div className="rounded-3xl border border-orange-100 bg-orange-50 p-6 md:p-8">
            <h2 className="text-2xl font-bold">SEO content plan for Aaruhi Travels</h2>
            <ul className="mt-5 space-y-3 text-slate-700">
              <li>Create separate pages for every city you serve.[web:24]</li>
              <li>Use unique city-specific content, not duplicate city-name swaps.[web:27][web:30]</li>
              <li>Add FAQ, call buttons, rates or estimate request near the top.[web:24]</li>
              <li>Highlight local attractions, route demand, and service intent naturally.[web:30]</li>
              <li>Add LocalBusiness schema, contact details, and trust elements.[web:30]</li>
            </ul>
          </div>
        </section>

        <section className="mt-14 rounded-3xl border border-slate-200 bg-white p-6 md:p-10">
          <h2 className="text-2xl font-bold md:text-3xl">
            FAQ for your travel website
          </h2>
          <div className="mt-8 space-y-6">
            <div>
              <h3 className="text-lg font-semibold">Do you provide taxi service in all major cities of Chhattisgarh?</h3>
              <p className="mt-2 text-slate-600 leading-8">
                Yes, Aaruhi Travels can present itself as a Chhattisgarh-wide
                travel partner for Korba, Raipur, Bilaspur, Ambikapur, Durg,
                Bhilai and Raigarh with local as well as intercity cab support.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Is Raipur airport transfer an important service page?</h3>
              <p className="mt-2 text-slate-600 leading-8">
                Yes, because Raipur has the state’s functional passenger airport,
                which makes airport pickup and drop one of the strongest travel
                intent services for Chhattisgarh taxi businesses.[web:23]
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Should each city have a separate page?</h3>
              <p className="mt-2 text-slate-600 leading-8">
                Yes, local SEO guidance for taxi and travel websites recommends
                separate city/location pages with unique content and strong CTAs
                instead of repeating the same copy everywhere.[web:24][web:27]
              </p>
            </div>
          </div>
        </section>

        <section className="mt-14 overflow-hidden rounded-3xl bg-slate-900 px-6 py-10 text-white md:px-10">
          <h2 className="text-2xl font-bold md:text-3xl">
            Book trusted travel service with Aaruhi Travels
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-8 text-slate-300">
            Whether your customer needs a city cab in Korba, an airport ride in
            Raipur, a station pickup in Bilaspur, or an intercity booking from
            Raigarh, Durg, Bhilai, or Ambikapur, this page should guide them
            toward one clear action: contact and book quickly.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="tel:9244137353"
              className="rounded-full bg-orange-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-orange-600"
            >
              Call Now
            </a>
            <a
              href="https://wa.me/919244137353"
              className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              WhatsApp Booking
            </a>
          </div>
        </section>
      </article>
    </main>
  );
}