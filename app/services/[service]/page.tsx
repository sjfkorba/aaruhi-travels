import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  ArrowRight,
  BadgeCheck,
  CalendarDays,
  CarFront,
  MapPin,
  Phone,
  ShieldCheck,
} from "lucide-react";

import Navbar from "@/components/navbar";
import BookingForm from "@/components/BookingForm";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import { TAXI_SERVICES, getTaxiService } from "@/lib/taxi-services";

type PageProps = {
  params: Promise<{ service: string }>;
};

export const revalidate = 3600;

export function generateStaticParams() {
  return TAXI_SERVICES.map((service) => ({ service: service.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { service: slug } = await params;
  const service = getTaxiService(slug);

  if (!service) {
    return { title: "Taxi Services | Aaruhi Travels" };
  }

  const title = `${service.title} in Raipur & Chhattisgarh | Aaruhi Travels`;
  const description =
    `${service.description} Enquire with Aaruhi Travels for taxi services in Raipur, ` +
    "Chhattisgarh and nearby cities.";

  return {
    title,
    description,
    keywords: service.keywords,
    alternates: { canonical: `/services/${service.slug}` },
    openGraph: {
      title,
      description,
      type: "website",
    },
  };
}

export default async function TaxiServicePage({ params }: PageProps) {
  const { service: slug } = await params;
  const service = getTaxiService(slug);

  if (!service) notFound();

  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    serviceType: service.title,
    description: service.heroDescription,
    provider: {
      "@type": "Organization",
      name: "Aaruhi Travels",
      telephone: "+919244137353",
      url: "https://www.aaruhitravels.com",
    },
    areaServed: [
      "Raipur",
      "Naya Raipur",
      "Durg",
      "Bhilai",
      "Bilaspur",
      "Korba",
      "Raigarh",
      "Ambikapur",
      "Jagdalpur",
      "Jharsuguda",
      "Sambalpur",
      "Nagpur",
      "Balangir",
    ],
  };

  return (
    <>
      <Navbar />

      <main className="min-h-screen overflow-hidden bg-[#fffaf5]">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />

        <style>{`
          @keyframes serviceFadeUp {
            from { opacity: 0; transform: translate3d(0, 28px, 0); }
            to { opacity: 1; transform: translate3d(0, 0, 0); }
          }
          @keyframes serviceFadeSide {
            from { opacity: 0; transform: translate3d(28px, 0, 0); }
            to { opacity: 1; transform: translate3d(0, 0, 0); }
          }
          .service-reveal {
            opacity: 0;
            animation: serviceFadeUp .75s cubic-bezier(.22,1,.36,1) forwards;
          }
          .service-form-reveal {
            opacity: 0;
            animation: serviceFadeSide .8s cubic-bezier(.22,1,.36,1) forwards;
          }
          @media (prefers-reduced-motion: reduce) {
            .service-reveal, .service-form-reveal {
              opacity: 1;
              animation: none !important;
              transform: none !important;
            }
          }
        `}</style>

        <section className="relative isolate overflow-hidden bg-gradient-to-br from-[#090b10] via-[#17191f] to-[#351b0b]">
          <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-orange-500/20 blur-[100px]" />
          <div className="pointer-events-none absolute -bottom-32 -left-20 h-80 w-80 rounded-full bg-amber-600/15 blur-[110px]" />
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,153,51,0.08),transparent_50%)]" />

          <div className="relative mx-auto max-w-[1400px] px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
            <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(420px,0.88fr)] lg:gap-12 xl:gap-16">
              <div className="order-2 flex min-w-0 flex-col justify-center lg:order-1 lg:pt-8">
                <span
                  className="service-reveal inline-flex w-fit items-center gap-2 rounded-full border border-orange-400/30 bg-white/[0.07] px-3 py-2 text-[10px] font-extrabold uppercase tracking-[0.16em] text-orange-300 backdrop-blur-md sm:text-xs"
                  style={{ animationDelay: "80ms" }}
                >
                  <span className="h-2 w-2 animate-pulse rounded-full bg-green-400" />
                  Aaruhi Travels · Taxi Services
                </span>

                <h1
                  className="service-reveal mt-5 max-w-3xl text-[clamp(2rem,7vw,3.75rem)] font-black leading-[1.08] tracking-tight text-white"
                  style={{ animationDelay: "180ms" }}
                >
                  {service.title}{" "}
                  <span className="bg-gradient-to-r from-[#ffb347] to-[#ffdc85] bg-clip-text text-transparent">
                    in Raipur & Chhattisgarh
                  </span>
                </h1>

                <p
                  className="service-reveal mt-5 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base sm:leading-8"
                  style={{ animationDelay: "300ms" }}
                >
                  {service.heroDescription}
                </p>

                <div
                  className="service-reveal mt-7 grid grid-cols-1 gap-3 sm:grid-cols-2"
                  style={{ animationDelay: "420ms" }}
                >
                  <div className="rounded-2xl border border-white/10 bg-white/[0.07] p-4 backdrop-blur-md">
                    <div className="flex items-center gap-2 text-orange-400">
                      <CarFront size={19} />
                      <span className="text-xs font-bold text-slate-200">
                        Sedan & SUV Options
                      </span>
                    </div>
                    <p className="mt-2 text-xs leading-5 text-slate-400">
                      Choose from available vehicle categories as per your trip.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/[0.07] p-4 backdrop-blur-md">
                    <div className="flex items-center gap-2 text-orange-400">
                      <CalendarDays size={19} />
                      <span className="text-xs font-bold text-slate-200">
                        Planned Travel
                      </span>
                    </div>
                    <p className="mt-2 text-xs leading-5 text-slate-400">
                      Share your date, time and journey requirements.
                    </p>
                  </div>
                </div>

                <div
                  className="service-reveal mt-6 flex items-start gap-2 text-xs leading-6 text-slate-300 sm:text-sm"
                  style={{ animationDelay: "540ms" }}
                >
                  <ShieldCheck className="mt-0.5 shrink-0 text-green-400" size={18} />
                  <span>
                    Send an enquiry to check vehicle availability and get
                    journey details from Aaruhi Travels.
                  </span>
                </div>

                <a
                  href="tel:+919244137353"
                  className="service-reveal mt-6 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl border border-orange-400/40 bg-orange-500/10 px-5 py-3 text-sm font-extrabold text-orange-300 transition hover:border-orange-400 hover:bg-orange-500 hover:text-white sm:w-fit"
                  style={{ animationDelay: "660ms" }}
                >
                  <Phone size={17} />
                  Call Aaruhi Travels
                </a>
              </div>

              <div
                id="booking-form"
                className="service-form-reveal order-1 mx-auto w-full min-w-0 max-w-[600px] scroll-mt-24 overflow-hidden rounded-2xl border border-orange-300/30 bg-white shadow-[0_20px_80px_-20px_rgba(255,126,30,0.25)] sm:rounded-3xl lg:order-2"
                style={{ animationDelay: "180ms" }}
              >
                <div className="bg-gradient-to-r from-[#ffad25] via-[#ffc044] to-[#ffda76] px-4 py-5 text-center sm:px-6 sm:py-6">
                  <p className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-orange-950/70 sm:text-xs">
                    Aaruhi Travels
                  </p>
                  <h2 className="mt-1 text-xl font-black text-slate-950 sm:text-2xl">
                    Enquire for {service.shortTitle}
                  </h2>
                  <p className="mt-1 text-xs text-slate-800 sm:text-sm">
                    Share your travel details to get started.
                  </p>
                </div>

                <div className="p-3 sm:p-5 md:p-6">
                  <BookingForm
                    key={service.slug}
                    initialTripType={service.tripType}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-[1200px] px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
          <div className="grid gap-5 md:grid-cols-[1.15fr_0.85fr] md:gap-8">
            <div className="rounded-2xl border border-orange-100 bg-white p-5 shadow-sm sm:p-7">
              <span className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-orange-600 sm:text-xs">
                Aaruhi Travels
              </span>
              <h2 className="mt-3 text-xl font-black leading-tight text-slate-900 sm:text-2xl">
                Enquire for {service.shortTitle} in Raipur and nearby cities
              </h2>
              <p className="mt-4 text-sm leading-7 text-slate-600">
                {service.heroDescription} Aaruhi Travels supports travel
                enquiries across Raipur, Naya Raipur, Durg-Bhilai, Bilaspur,
                Korba, Raigarh, Ambikapur, Jagdalpur and selected nearby cities.
                Service availability is subject to route, date and vehicle.
              </p>
              <a
                href="#booking-form"
                className="mt-5 inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-orange-600 px-5 py-3 text-sm font-bold text-white transition hover:bg-orange-700"
              >
                Send Booking Enquiry <ArrowRight size={16} />
              </a>
            </div>

            <div className="rounded-2xl border border-orange-100 bg-white p-5 shadow-sm sm:p-7">
              <h3 className="text-lg font-extrabold text-slate-900 sm:text-xl">
                Our Service Areas
              </h3>
              <div className="mt-5 grid grid-cols-2 gap-3">
                {[
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
                ].map((city) => (
                  <div key={city} className="flex items-center gap-2 text-xs font-semibold text-slate-600">
                    <MapPin size={14} className="shrink-0 text-orange-500" />
                    {city}
                  </div>
                ))}
              </div>
              <div className="mt-5 flex items-center gap-2 border-t border-slate-100 pt-4 text-xs text-slate-500">
                <BadgeCheck size={16} className="text-green-600" />
                Contact us to confirm service availability.
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      
    </>
  );
}
